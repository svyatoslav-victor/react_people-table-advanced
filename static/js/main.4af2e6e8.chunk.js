(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(14),s=n.n(c),a=n(5),r=n(15),l=n(3),o=n(10),i=n.n(o),d=n(1),j=n(2),h=(n(24),n(0)),b=function(){return Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsx)(a.b,{className:"navigation__home",to:"/",style:{textDecoration:"none"},children:Object(h.jsx)("div",{className:"navigation__home--link",children:Object(h.jsxs)("p",{children:["HO",Object(h.jsx)("br",{}),"ME"]})})}),Object(h.jsx)(a.c,{className:"navigation__link",to:"/home",children:"Home"}),Object(h.jsx)(a.c,{className:"navigation__link",to:"/people",children:"People"})]})},u=(n(26),function(){return Object(h.jsx)("div",{className:"homepage",children:Object(h.jsx)("h1",{className:"homepage__title",children:"WELCOME HOME!"})})}),m=n(16),O=n.n(m),p=n(6),x=n.n(p),f=n(17),v=(n(38),function(e){var t=e.person,n=Object(j.e)().search;return Object(h.jsx)(f.a,{selector:".person--active",scrollOptions:{block:"nearest",behavior:"smooth"},onClick:function(e){return e.preventDefault()},children:Object(h.jsx)(a.b,{to:{pathname:"".concat(t.slug),search:n},className:x()("person",{male:"m"===t.sex,female:"f"===t.sex}),children:t.name})})}),N=(n(39),function(e){var t=e.person,n=e.people,c=e.isSorted,s=Object(j.g)(),a=n.find((function(e){return e.name===t.motherName}))||null,r=n.find((function(e){return e.name===t.fatherName}))||null;return Object(h.jsxs)("tr",{className:x()({"person--active":t.slug==="".concat(s["*"])}),children:[Object(h.jsx)("td",{className:x()({sorted:"Name"===c}),children:Object(h.jsx)(v,{person:t})}),Object(h.jsx)("td",{className:x()({sorted:"Sex"===c}),children:t.sex}),Object(h.jsx)("td",{className:x()({sorted:"Born"===c}),children:t.born}),Object(h.jsx)("td",{className:x()({sorted:"Died"===c}),children:t.died}),Object(h.jsx)("td",{children:a?Object(h.jsx)(v,{person:a}):t.motherName||Object(h.jsx)("span",{children:"no record"})}),Object(h.jsx)("td",{children:r?Object(h.jsx)(v,{person:r}):t.fatherName||Object(h.jsx)("span",{children:"no record"})})]})}),_=n(18),g=(n(40),function(e){var t=e.people,n=e.setPeople,c=Object(j.f)(),s=function(){return c("/people")},a=Object(d.useState)(""),r=Object(l.a)(a,2),o=r[0],i=r[1],b=Object(d.useState)(""),u=Object(l.a)(b,2),m=u[0],O=u[1],p=Object(d.useState)(""),x=Object(l.a)(p,2),f=x[0],v=x[1],N=Object(d.useState)(""),g=Object(l.a)(N,2),y=g[0],C=g[1],P=Object(d.useState)(""),k=Object(l.a)(P,2),S=k[0],w=k[1],E=Object(d.useState)(""),T=Object(l.a)(E,2),K=T[0],F=T[1],L=[];o.match(/[A-Z]{1}[a-z]{2,12}\s{1}[A-Z]{1}[a-z]{2,12}/g)||L.push("name"),m||L.push("gender"),S||L.push("mother"),K||L.push("father"),(f.length>4||+f<1400)&&L.push("born"),(+y-+f>150||+y-+f<=0)&&L.push("died");return Object(h.jsx)("div",{className:"addPerson",children:Object(h.jsxs)("div",{className:"addPerson__form",children:[Object(h.jsx)("h1",{className:"addPerson__form--head",children:"Create New Entry"}),Object(h.jsxs)("div",{className:"addPerson__form--name",children:[Object(h.jsxs)("h3",{children:["Please enter name",!L.includes("name")&&Object(h.jsx)("p",{className:"OK OK--name",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("name")?"1":"0"},children:"Please enter valid first and last name (3-12 chars each and capitalized)"}),Object(h.jsx)("label",{htmlFor:"newName",children:Object(h.jsx)("input",{className:"person--name",type:"text",placeholder:"Name",value:o,onChange:function(e){return i(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"addPerson__form--gender",children:[Object(h.jsxs)("h3",{children:["Please choose gender",!L.includes("gender")&&Object(h.jsx)("p",{className:"OK OK--gender",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("gender")?"1":"0"},children:"Please select gender"}),Object(h.jsxs)("div",{className:"gender_select",children:[Object(h.jsxs)("label",{htmlFor:"m",children:[Object(h.jsx)("input",{className:"radio",type:"radio",value:"m",name:"gender",id:"m",checked:"m"===m,onChange:function(e){return O(e.target.value)}}),"Male"]}),Object(h.jsxs)("label",{htmlFor:"f",children:[Object(h.jsx)("input",{className:"radio",type:"radio",value:"f",name:"gender",id:"f",checked:"f"===m,onChange:function(e){return O(e.target.value)}}),"Female"]})]})]}),Object(h.jsxs)("div",{className:"addPerson__form--select_parent",children:[Object(h.jsxs)("div",{className:"addPerson__form--select--mother",children:[Object(h.jsxs)("h3",{children:["Please select mother",!L.includes("mother")&&Object(h.jsx)("p",{className:"OK OK--mother",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("mother")?"1":"0"},children:"Please select mother from list"}),Object(h.jsxs)("select",{name:"parents",id:"mother",value:S,onChange:function(e){return w(e.target.value)},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Mothers"}),t.filter((function(e){return"f"===e.sex})).map((function(e){return Object(h.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]}),Object(h.jsxs)("div",{className:"addPerson__form--select--father",children:[Object(h.jsxs)("h3",{children:["Please select father",!L.includes("father")&&Object(h.jsx)("p",{className:"OK OK--father",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("father")?"1":"0"},children:"Please select father from list"}),Object(h.jsxs)("select",{name:"parents",id:"father",value:K,onChange:function(e){return F(e.target.value)},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Fathers"}),t.filter((function(e){return"m"===e.sex})).map((function(e){return Object(h.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]})]}),Object(h.jsxs)("div",{className:"addPerson__form--dates",children:[Object(h.jsxs)("div",{className:"born",children:[Object(h.jsxs)("h3",{children:["Year of birth",!L.includes("born")&&Object(h.jsx)("p",{className:"OK OK--born",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("born")?"1":"0"},children:"Must be 1400 or higher"}),Object(h.jsx)("label",{htmlFor:"dob",children:Object(h.jsx)("input",{className:"person--date",type:"text",value:f,id:"dob",placeholder:"Born",onChange:function(e){return v(e.target.value)}})})]}),Object(h.jsxs)("div",{className:"died",children:[Object(h.jsxs)("h3",{children:["Year of death",L.includes("born")||L.includes("died")?null:Object(h.jsx)("p",{className:"OK OK--died",children:"\u2714"})]}),Object(h.jsx)("h6",{className:"form__error",style:{opacity:L.includes("died")?"1":"0"},children:"Lifespan cannot exceed 150 years"}),Object(h.jsx)("label",{htmlFor:"dod",children:Object(h.jsx)("input",{className:"person--date",type:"text",value:y,id:"dod",placeholder:"Died",disabled:L.includes("born"),onChange:function(e){return C(e.target.value)}})})]})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"buttons__add-to-table",tabIndex:-1,disabled:L.length>0,onClick:function(){0===L.length&&(n([].concat(Object(_.a)(t),[{name:o,sex:m,born:+f,died:+y,motherName:S,fatherName:K,slug:"".concat(o.replace(" ","-").toLowerCase(),"-").concat(f)}])),s())},children:"Add Entry To List"}),Object(h.jsx)("button",{type:"button",className:"buttons__return-to-table",onClick:s,children:"\u21a9"})]})]})})}),y=(n(41),function(e){var t,n,c,s=e.people,r=e.setPeople,o=document.querySelector("body"),i=Object(j.e)(),b=Object(j.f)(),u=new URLSearchParams(i.search),m=Object(d.useState)(i.pathname),p=Object(l.a)(m,2),x=p[0],f=p[1],v=(null===(t=u.get("query"))||void 0===t?void 0:t.toLowerCase())||"",_=Object(d.useState)(v),y=Object(l.a)(_,2),C=y[0],P=y[1],k=Object(d.useCallback)(O()((function(e){e?u.set("query",e):u.delete("query"),b({search:u.toString()})}),500),[]),S=s.filter((function(e){var t,n;return e.name.toLowerCase().includes(v)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(v))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLowerCase().includes(v))})),w=null===(n=u.get("sortOrder"))||void 0===n?void 0:n.toString(),E=null===(c=u.get("sortBy"))||void 0===c?void 0:c.toString(),T=function(e){var t=e.target.innerHTML;w&&"desc"!==w?u.set("sortOrder","desc"):u.set("sortOrder","asc"),u.set("sortBy",t),b({search:u.toString()})};E&&S.sort((function(e,t){switch(E){case"Name":return"asc"===w?e.name.localeCompare(t.name):t.name.localeCompare(e.name);case"Sex":return"asc"===w?e.sex.localeCompare(t.sex):t.sex.localeCompare(e.sex);case"Born":return"asc"===w?+e.born-+t.born:+t.born-+e.born;case"Died":return"asc"===w?+e.died-+t.died:+t.died-+e.died;default:return-1}})),Object(d.useEffect)((function(){o&&x.includes("/add")?(o.style.overflow="hidden",P(""),f(i.pathname)):o&&(o.style.overflow="visible",f(i.pathname))}));var K=function(){return window.scrollTo({top:0,behavior:"smooth"})};return Object(h.jsxs)("div",{className:"peopleTable",children:[Object(h.jsx)("h1",{className:"peopleTable__header",children:"PEOPLE"}),Object(h.jsxs)("div",{className:"peopleTable__tools",children:[Object(h.jsx)("input",{type:"text",value:C,className:"peopleTable__search",placeholder:"Find Person",onChange:function(e){P(e.target.value),k(e.target.value)}}),Object(h.jsx)("button",{type:"button",className:"peopleTable__clear_query",onClick:function(){P(""),b("/people")},children:"X"}),Object(h.jsx)(a.b,{to:"add",type:"button",className:"peopleTable__add",onClick:K,children:"Add New Person"})]}),Object(h.jsx)(j.c,{children:Object(h.jsx)(j.a,{path:"/add/",element:Object(h.jsx)(g,{people:S,setPeople:r})})}),Object(h.jsxs)("table",{className:"peopleTable__table",children:[Object(h.jsx)("thead",{className:"peopleTable__table__head",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"person_name",onClick:T,children:"Name"}),Object(h.jsx)("th",{onClick:T,children:"Sex"}),Object(h.jsx)("th",{onClick:T,children:"Born"}),Object(h.jsx)("th",{onClick:T,children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{className:"peopleTable__people",children:S.map((function(e){return Object(h.jsx)(N,{people:S,person:e,isSorted:E},e.slug)}))})]}),Object(h.jsx)("button",{className:"peopleTable__return-to-top",type:"button",onClick:K,children:"\u21ea"})]})}),C=(n(42),function(){return Object(h.jsx)("div",{className:"error",children:Object(h.jsx)("h1",{className:"error__message",children:"PAGE NOT FOUND"})})}),P=(n(43),function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.ok?e.json():new Error("Error : ".concat(e.status))}));case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){s()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",element:Object(h.jsx)(u,{})}),Object(h.jsx)(j.a,{path:"/home",element:Object(h.jsx)(u,{})}),Object(h.jsx)(j.a,{path:"/people/*",element:Object(h.jsx)(y,{people:n,setPeople:c})}),Object(h.jsx)(j.a,{path:"*",element:Object(h.jsx)(C,{})})]})]})});s.a.render(Object(h.jsx)(a.a,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4af2e6e8.chunk.js.map