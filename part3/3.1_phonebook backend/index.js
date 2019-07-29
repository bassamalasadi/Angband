const express = require('express')
const app = express()
const uuid = require('uuid')
const persons = require('./persons')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


app.use(bodyParser.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('data',(req, res) => {
  if (req.method === 'POST') {
    return (
      JSON.stringify({
          name: req.body.name,
          number: req.body.number,
      })
  )}else{
    return ' '
}})

app.use(morgan(':method :url :status :res[data-length] - :response-time ms :data'))

app.post('/api/persons',(req,res) => {
  const newUser = {
    id: uuid.v4(),
    name:req.body.name,
    number:req.body.number
  }
  if (!newUser.name || !newUser.number) {
    return res.status(400).json({msg: 'name or number missing'});
  }
  const found = persons.find(n=>n.name===newUser.name)
  if(!found){
    persons.push(newUser)
    res.json(newUser)
  }else{
    res.status(400).json({msg:'name must be unique'});
  }
})

app.get('/api/persons/:id',(req, res)=> {
  const found = persons.some(p => p.id === parseInt(req.params.id));
  if (found){
    res.json(persons.filter(p => p.id === parseInt(req.params.id)));
  }else{
    res.status(400).json({msg: `no content with the id of ${req.params.id}`})
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  delperson = persons.filter(person => person.id !== id)
  res.status(204).end()
})
app.get('/api/persons', (req, res) => {
  res.json(persons)
})
app.get('/info', (req, res) => {
  const num = persons.length
  const infoPage = `<p>Phonebook has info for ${num} people.</p> <p>${new Date}</p>`
  res.send(infoPage)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})