(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(14),l=t(2),i=t(3),m=t.n(i),f="./api/persons",s=function(){return m.a.get(f).then(function(e){return e.data})},d=function(e){var n="".concat(f,"/").concat(e);return m.a.delete(n).then(function(e){return e.data})},h=function(e){return m.a.post(f,e).then(function(e){return e.data})},b=function(e,n){var t="".concat(f,"/").concat(e);return m.a.put(t,n).then(function(e){return e.data})},v=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.type},n.content)},p=(t(38),function(e){var n=e.user,t=e.remove;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("li",{className:"person"},n.name,":",n.number,r.a.createElement("button",{type:"button",onClick:t},"remove")))}),E=function(e){var n=e.name,t=e.handlePersonChange,a=e.number,c=e.handleNumberChange,o=e.addUser;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"Name ",r.a.createElement("input",{class:"input1",value:n,onChange:t}),r.a.createElement("br",null),"Number ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.filter,t=e.handleFilter,a=e.text;return r.a.createElement("form",null,a," ",r.a.createElement("input",{value:n,onChange:t}))},y=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],f=i[1],y=Object(a.useState)(""),g=Object(l.a)(y,2),j=g[0],C=g[1],O=Object(a.useState)(""),S=Object(l.a)(O,2),N=S[0],k=S[1],T=Object(a.useState)(""),x=Object(l.a)(T,2),F=x[0],P=x[1];Object(a.useEffect)(function(){s().then(function(e){c(e)})},[]);var U=t.filter(function(e){return e.name.toLowerCase().includes(N.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{message:F}),r.a.createElement("ul",null,r.a.createElement(w,{filter:N,handleFilter:function(e){k(e.target.value)},text:"Filter shown with"})),r.a.createElement("h1",null,"Add a new"),r.a.createElement(E,{name:m,handlePersonChange:function(e){f(e.target.value)},number:j,handleNumberChange:function(e){C(e.target.value)},addUser:function(e){e.preventDefault();var n={name:m,number:j},a=t.find(function(e){return e.name===m}),r=Object(u.a)({},a,{number:j});void 0===a?h(n).then(function(e){c(t.concat(e)),P({content:"".concat(n.name," successfully Created"),type:"notification"}),f(""),C(""),setTimeout(function(){P(null)},5e3)}).catch(function(e){P({content:"".concat(e.response.data.error),type:"error"}),setTimeout(function(){P(null)},5e3)}):window.confirm("".concat(m,"is already added to phonebook, replace the old number with a new one?"))?b(a.id,r).then(function(e){c(t.map(function(n){return n.id!==a.id?n:e})),P({content:"".concat(n.name," Successfully Updated"),type:"notification"}),f(""),C(""),setTimeout(function(){P(null)},5e3)}).catch(function(e){P({content:"information of ".concat(n.name," has already been removed from server"),type:"error"}),setTimeout(function(){P(null)},5e3)}):console.log("Cancle")}}),r.a.createElement("h1",null,"Numbers"),U.map(function(e){return r.a.createElement(p,{key:e.name,user:e,remove:function(){return n=e,void(window.confirm("Delete ".concat(n.name,"?"))?d(n.id).then(function(e){c(t.filter(function(e){return n.id!==e.id})),P({content:" Successfully Remove",type:"notification"}),setTimeout(function(){P(null)},5e3)}).catch(function(e){P({content:"information of ".concat(n.name," has already been removed from server"),type:"error"}),setTimeout(function(){P(null)},5e3)}):console.log("cancle"));var n}})}))};t(39);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.29e91fce.chunk.js.map