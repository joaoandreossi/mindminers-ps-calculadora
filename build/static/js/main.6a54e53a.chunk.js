(this["webpackJsonpmindminers-calculadora"]=this["webpackJsonpmindminers-calculadora"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),o=(n(14),n(3)),s=n(7),d=function(){this.db={}};d.prototype.addNewOperation=function(e){"Compra"===e.type?u(this.db,e):l(this.db,e)},d.prototype.removeOperation=function(e,t){var n=this;return!!this.db.hasOwnProperty(e)&&(0!==this.numberOfOperations()&&(Object.keys(this.db[e].year).forEach((function(a){n.db[e].year[a]=n.db[e].year[a].filter((function(e){return e.id!==t})),0===Object.keys(n.db[e].year[a]).length&&delete n.db[e].year[a]})),void(0===Object.keys(this.db[e].year).length?delete this.db[e]:p(this.db,e))))},d.prototype.print=function(){console.log(this)},d.prototype.getOperationById=function(e,t){var n,a=this;if(console.log("getbyid"),this.db.hasOwnProperty(e))return Object.keys(this.db[e].year).forEach((function(c){n=a.db[e].year[c].filter((function(e){return e.id===t}))})),n[0];throw new Error("N\xe3o existe nenhuma a\xe7\xe3o com esse c\xf3digo.")},d.prototype.getStockNumberOfEntries=function(e){var t=this;if(0===Object.keys(this.db).length)return 0;var n=Object.keys(this.db[e].year),a=0;return n.forEach((function(n){a+=t.db[e].year[n].length})),a},d.prototype.getAllEntries=function(){var e=this;if(0===Object.keys(this.db).length)return{};var t=Object.keys(this.db),n={};return t.forEach((function(t){var a=Object.keys(e.db[t].year);n[t]=[],a.forEach((function(a){return e.db[t].year[a].forEach((function(e){return n[t].push(e)}))}))})),n},d.prototype.numberOfOperations=function(){var e=this.getAllEntries(),t=Object.keys(e),n=0;return t.forEach((function(t){n+=e[t].length})),n};var u=function(e,t){e.hasOwnProperty(t.code)?e[t.code].year.hasOwnProperty(t.date.getFullYear())?(e[t.code].year[t.date.getFullYear()].push({id:t.id,code:t.code,date:t.date,type:t.type,price:t.price,quantity:t.quantity,tax:t.tax}),p(e,t.code)):(e[t.code].year[t.date.getFullYear()]=[{id:t.id,code:t.code,date:t.date,type:t.type,price:t.price,quantity:t.quantity,tax:t.tax}],p(e,t.code)):(e[t.code]={pm:0,qm:0,ra:0,pa:0,year:Object(s.a)({},t.date.getFullYear(),[{id:t.id,code:t.code,date:t.date,type:t.type,price:t.price,quantity:t.quantity,tax:t.tax}])},p(e,t.code))},l=function(e,t){if(!e.hasOwnProperty(t.code))throw new Error("N\xe3o existem a\xe7\xf5es com esse c\xf3digo.");if(e[t.code].qm<t.quantity)throw new Error("N\xe3o \xe9 poss\xedvel vender mais do que a quantidade existente.");e[t.code].year.hasOwnProperty(t.date.getFullYear())?(e[t.code].year[t.date.getFullYear()].push({id:t.id,code:t.code,date:t.date,type:t.type,price:t.price,quantity:t.quantity,tax:t.tax,salesTax:0}),p(e,t.code)):(e[t.code].year[t.date.getFullYear()]=[{id:t.id,code:t.code,date:t.date,type:t.type,price:t.price,quantity:t.quantity,tax:t.tax,salesTax:0}],p(e,t.code))},p=function(e,t){if(console.log(e),console.log(t),!e.hasOwnProperty(t))throw new Error("N\xe3o existe nenhuma a\xe7\xe3o com esse c\xf3digo.");var n=Object.getOwnPropertyNames(e[t].year);b(e,t),n.forEach((function(n){e[t].year[n].sort((function(e,t){return e.date-t.date})).forEach((function(t){"Compra"===t.type?function(e,t){e[t.code].pm=j(e[t.code].pm,e[t.code].qm,t.price,t.quantity,t.tax),e[t.code].qm=m(e[t.code].qm,t.quantity)}(e,t):function(e,t){e[t.code].ra=O(e[t.code].pm,t.price,t.quantity,t.tax),e[t.code].qm=h(e[t.code].qm,t.quantity),e[t.code].ra<0?e[t.code].pa=f(e[t.code].pa,e[t.code].ra):(t.salesTax=v(e[t.code].ra,e[t.code].pa),e[t.code].pa=x(e[t.code].pa,e[t.code].ra))}(e,t)}))}))},b=function(e,t){if(!e.hasOwnProperty(t))throw new Error("N\xe3o existe nenhuma a\xe7\xe3o com esse c\xf3digo.");e[t].pm=0,e[t].qm=0,e[t].ra=0,e[t].pa=0},j=function(e,t,n,a,c){return(e*t+n*a+c)/(t+a)},m=function(e,t){return e+t},h=function(e,t){return e-t},O=function(e,t,n,a){return(t-e)*n-a},f=function(e,t){return e+t},x=function(e,t){return e-Math.min(t,e)},v=function(e,t){return.15*(e-Math.abs(Math.min(e,t)))},y=d,_=(n(15),n(2));var g=function(){return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("h1",{className:"header__title",children:"Calculadora"}),Object(_.jsx)("p",{className:"header__description",children:"Registre sua opera\xe7\xe3o de compra ou venda e lhe diremos quanto de imposto voc\xea deve pagar."})]})};n(17);var N=function(e){return Object(_.jsxs)("div",{className:"line",children:[Object(_.jsx)("div",{className:"".concat(e.position," line__selector")}),Object(_.jsx)("div",{className:"line__thin"})]})};n(18);var w=function(e){var t=Object(a.useState)("line__selector--position-start"),n=Object(o.a)(t,2),c=n[0],r=n[1],i=function(t){switch(t){case"0":r("line__selector--position-start"),e.getTabSelectionFromChild(0);break;case"1":r("line__selector--position-mid"),e.getTabSelectionFromChild(1);break;case"2":r("line__selector--position-end"),e.getTabSelectionFromChild(2)}},s=function(e){for(var t=0;t<e.parentNode.children.length;t++)e.parentNode.children[t].classList.contains("menu__button--selected")&&e.parentNode.children[t].classList.remove("menu__button--selected");e.classList.add("menu__button--selected")};return Object(_.jsxs)("div",{className:"menu",children:[Object(_.jsxs)("div",{className:"menu__button-container",onClick:function(e){return t=e.target,i(t.dataset.id),void s(t);var t},children:[Object(_.jsx)("button",{className:"menu__button menu__button--selected","data-id":"0",children:"Nova opera\xe7\xe3o"}),Object(_.jsx)("button",{className:"menu__button","data-id":"1",children:"Gr\xe1fico"}),Object(_.jsx)("button",{className:"menu__button","data-id":"2",children:"Hist\xf3rico"})]}),Object(_.jsx)(N,{position:c})]})};n(19);var S=function(){return Object(_.jsxs)("div",{className:"default-message",children:["Oops! Parece que n\xe3o h\xe1 nada aqui.",Object(_.jsx)("br",{}),"Adicione uma opera\xe7\xe3o para continuar."]})};n(20);var C=function(){return Object(_.jsx)("div",{className:"popup-confirmation",children:"Opera\xe7\xe3o registrada!"})};n(21);var E=function(e){return Object(_.jsxs)("div",{className:"popup-error",children:["Erro!",Object(_.jsx)("br",{}),e.message]})},k=n(9);n(22),n(23);var q=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(new Date),s=Object(o.a)(i,2),d=s[0],u=s[1],l=function(){return d.toLocaleDateString("pt-BR",{day:"numeric",month:"numeric",year:"numeric"})};return Object(a.useEffect)((function(){e.getInputValueFromChild(e.name,d)}),[d,e]),Object(_.jsxs)("div",{className:"input-date",children:[Object(_.jsx)("input",{className:"input-date__input",placeholder:e.placeholder,type:"text",onClick:function(){return r(!c)},value:l(),readOnly:!0}),c&&Object(_.jsx)(k.a,{onChange:u,onClickDay:function(){l(d),setTimeout((function(){r(!c)}),10)}})]})};n(26);var F=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){e.getInputValueFromChild(e.name,"price"===e.name||"tax"===e.name?parseFloat(c):"quantity"===e.name?parseInt(c):c)}),[c,e]),Object(_.jsx)("div",{className:"input-regular",children:Object(_.jsx)("input",{className:"input-regular__input",placeholder:e.placeholder,type:"text",onChange:function(e){r(e.target.value)},value:c,onBlur:function(){var t=c,n=/[,]/g,a=/^[^0-9]*/;"code"===e.name?r(t):"price"===e.name&&""!==t||"tax"===e.name&&""!==t?(t=t.replace(n,".").replace(a,""),t=parseFloat(t).toString(),isNaN(t)?r(""):r(t)):"quantity"===e.name&&""!==t&&(t=t.replace(n,".").replace(a,""),t=parseInt(t).toString(),isNaN(t)?r(""):r(t))}})})},T=n.p+"static/media/expand.2b95325f.svg",I=n.p+"static/media/collapse.29b48edf.svg";n(27);var L=function(e){var t=Object(a.useState)(T),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(o.a)(i,2),d=s[0],u=s[1],l=Object(a.useState)(""),p=Object(o.a)(l,2),b=p[0],j=p[1];return Object(a.useEffect)((function(){e.getInputValueFromChild(e.name,b)}),[b,e]),Object(_.jsxs)("div",{className:"input-dropdown input-dropdown--menuclosed",onClick:function(){c===T?(r(I),u(!0),document.querySelector('[data-id="dropdown-icon"]').classList.remove("input-dropdown__icon--menuclosed"),document.querySelector('[data-id="dropdown-icon"]').classList.add("input-dropdown__icon--menuopened"),document.querySelector(".input-dropdown").classList.remove("input-dropdown--menuclosed"),document.querySelector(".input-dropdown").classList.add("input-dropdown--menuopened")):(r(T),u(!1),document.querySelector('[data-id="dropdown-icon"]').classList.remove("input-dropdown__icon--menuopened"),document.querySelector('[data-id="dropdown-icon"]').classList.add("input-dropdown__icon--menuclosed"),document.querySelector(".input-dropdown").classList.remove("input-dropdown--menuopened"),document.querySelector(".input-dropdown").classList.add("input-dropdown--menuclosed"))},children:[Object(_.jsx)("input",{className:"input-dropdown__input",placeholder:e.placeholder,type:"text",value:b,readOnly:!0}),Object(_.jsx)("img",{src:c,className:"input-dropdown__icon input-dropdown__icon--menuclosed",alt:"Expande menu dropdown","data-id":"dropdown-icon"}),d&&Object(_.jsxs)("div",{className:"input-dropdown__item-container",children:[Object(_.jsx)("div",{className:"input-dropdown__item",onClick:function(){return j("Compra")},children:"Compra"}),Object(_.jsx)("div",{className:"input-dropdown__item",onClick:function(){return j("Venda")},children:"Venda"})]})]})};n(28);var V=function(e){return Object(_.jsx)("button",{className:"button-submit ".concat(e.disabled?"button-submit--disabled":""),onClick:function(){e.disabled||(e.getNewOperationFromChild(e.operation),e.resetState())},children:"Registrar"})};n(29);var A=function(e){var t=Object(a.useState)(new Date),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),d=s[0],u=s[1],l=Object(a.useState)(""),p=Object(o.a)(l,2),b=p[0],j=p[1],m=Object(a.useState)(0),h=Object(o.a)(m,2),O=h[0],f=h[1],x=Object(a.useState)(0),v=Object(o.a)(x,2),y=v[0],g=v[1],N=Object(a.useState)(0),w=Object(o.a)(N,2),S=w[0],C=w[1],E=Object(a.useState)({}),k=Object(o.a)(E,2),T=k[0],I=k[1],A=Object(a.useState)(0),P=Object(o.a)(A,2),R=P[0],Y=P[1],M=function(e,t){switch(e){case"date":r(t);break;case"code":u(t.toUpperCase());break;case"type":j(t);break;case"price":f(t);break;case"quantity":g(t);break;case"tax":C(t)}};return Object(a.useEffect)((function(){var t={id:e.operationId,date:c,code:d,type:b,price:O,quantity:y,tax:S};I(t)}),[e.operationId,c,d,b,O,y,S]),Object(_.jsxs)("div",{className:"stock-form",children:[Object(_.jsx)(q,{name:"date",placeholder:"Data",getInputValueFromChild:M},"date"+R),Object(_.jsx)(F,{name:"code",placeholder:"C\xf3digo da a\xe7\xe3o (ex. GME)",type:"text",getInputValueFromChild:M},"code"+R),Object(_.jsx)(L,{name:"type",placeholder:"Tipo",getInputValueFromChild:M},"type"+R),Object(_.jsx)(F,{name:"price",placeholder:"Pre\xe7o",type:"number",getInputValueFromChild:M},"price"+R),Object(_.jsx)(F,{name:"quantity",placeholder:"Quantidade",type:"number",integer:!0,getInputValueFromChild:M},"quantity"+R),Object(_.jsx)(F,{name:"tax",placeholder:"Taxa",type:"number",getInputValueFromChild:M},"tax"+R),Object(_.jsx)(V,{getNewOperationFromChild:e.getNewOperationFromChild,operation:T,disabled:!(c&&d&&b&&O&&y&&S),resetState:function(){Y(R+1)}})]})};n(30);var P=function(e){return Object(_.jsx)("div",{onClick:function(){},children:Object(_.jsxs)("div",{className:"entries-group",children:[Object(_.jsx)("div",{className:"entries-group__name",children:e.name}),Object(_.jsxs)("div",{className:"entries-group__operation-container",children:[Object(_.jsxs)("span",{className:"entries-group__text",children:["N\xfamero de opera\xe7\xf5es: ",e.operationNumber]}),Object(_.jsx)("span",{className:"entries-group__dots",children:"..."})]})]})})},R=n(8),Y=n.n(R);n(33);var M=function(e){var t=Object(a.useState)(T),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)((function(){return Object.keys(e.values).sort((function(e,t){return t-e}))[0]})),s=Object(o.a)(i,2),d=s[0],u=s[1],l=Object(a.useState)(2),p=Object(o.a)(l,2),b=p[0],j=(p[1],Object(a.useState)(void 0)),m=Object(o.a)(j,2),h=m[0],O=m[1],f=Object(a.useRef)(null),x=function(){return new Y.a(f.current.getContext("2d"),{type:"bar",data:{labels:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],datasets:[{backgroundColor:"rgba(205, 205, 205, 1)",borderColor:"rgba(77, 77, 77, 1)",borderWidth:2,data:e.values[d],fill:!1}]},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:window.innerWidth>window.innerHeight?window.innerWidth>1800?2.8:window.innerWidth>1100?2.5:2:window.innerWidth>475?1.2:.9,legend:{display:!1},tooltips:{callbacks:{label:function(e){return"R$ ".concat(e.yLabel.toFixed(2))}}},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0}}]}}})};return Object(a.useEffect)((function(){O(x())}),[]),Object(a.useEffect)((function(){void 0!==h&&(h.data.datasets[0].data=e.values[d],h.options.aspectRatio=b,h.update())}),[d]),Object(_.jsxs)("div",{className:"chart",children:[Object(_.jsxs)("div",{className:"chart__text-container",children:[Object(_.jsx)("div",{className:"chart__name",children:e.name}),Object(_.jsxs)("div",{className:"chart__menu-dropdown",onClick:function(){r(c===T?I:T)},children:[Object(_.jsxs)("div",{className:"chart__menu-button-container",children:[Object(_.jsx)("img",{src:c,className:"chart__menu-icon",alt:"Expande menu dropdown","data-id":"dropdown-icon"}),Object(_.jsxs)("button",{className:"chart__menu-text",children:["ano: ",d]})]}),c===I&&Object(_.jsx)("div",{className:"chart__menu-options-container",onClick:function(e){return u(e.target.innerHTML)},children:function(){var t=[];return Object.keys(e.values).sort((function(e,t){return t-e})).forEach((function(e){t.push(Object(_.jsx)("div",{className:"chart__menu-options",children:e},e))})),t}()})]})]}),Object(_.jsx)("canvas",{id:"canvas",ref:f})]})};n(34);var D=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),d=s[0],u=s[1],l=Object(a.useState)([]),p=Object(o.a)(l,2),b=p[0],j=p[1];return Object(a.useEffect)((function(){1!==e.activeTab&&r("")}),[e.activeTab]),Object(_.jsx)("div",{className:"graph",children:function(){var t=Object.keys(e.entries),n=[];return""===c?(n.push(Object(_.jsx)("div",{className:"graph__message",children:"Selecione alguma das a\xe7\xf5es para visualizar um gr\xe1fico dos impostos acumulados."})),t.forEach((function(t){n.push(Object(_.jsx)("div",{onClick:function(){!function(t){var n={};e.entries[t].forEach((function(e){n.hasOwnProperty(e.date.getFullYear())?"Venda"===e.type&&(n[e.date.getFullYear()][e.date.getMonth()]=n[e.date.getFullYear()][e.date.getMonth()]+e.salesTax):(n[e.date.getFullYear()]=[0,0,0,0,0,0,0,0,0,0,0,0],"Venda"===e.type&&(n[e.date.getFullYear()][e.date.getMonth()]=e.salesTax))})),j(n)}(t),r(t),u(e.numberEntries(t))},children:Object(_.jsx)(P,{name:t,operationNumber:e.numberEntries(t)},t)}))})),n):0!==d?(n.push(Object(_.jsx)("button",{className:"graph__button-back",onClick:function(){return r("")},children:"voltar"})),n.push(Object(_.jsx)(M,{name:c,values:b},c)),Object(_.jsx)("div",{className:"graph__detailed-view-container",children:n})):void r("")}()})},B=n.p+"static/media/icon-trash.d6b8d28f.svg";n(35);var J=function(e){var t=function(){e.handleDeletion(e.title,e.id)};return Object(_.jsxs)("div",{className:"entries-card",children:[Object(_.jsxs)("header",{className:"entries-card__header",children:[Object(_.jsx)("span",{className:"entries-card__title",children:e.title}),Object(_.jsx)("span",{className:"entries-card__date",children:e.date})]}),Object(_.jsx)("div",{className:"entries-card__type",children:"Compra"===e.type?"Compra":"Venda"}),Object(_.jsxs)("div",{className:"entries-card__quantity",children:["Quantidade: ",e.quantity]}),Object(_.jsxs)("div",{className:"entries-card__price-tax-container",children:[Object(_.jsxs)("span",{className:"entries-card__price",children:["Valor: R$ ",e.price]}),Object(_.jsxs)("span",{className:"entries-card__tax",children:["Taxa: R$ ",e.tax]}),"Compra"===e.type&&Object(_.jsx)("img",{className:"entries-card__icon entries-card__icon--buy",src:B,alt:"\xcdcone de um lixo.",onClick:t})]}),"Venda"===e.type&&Object(_.jsxs)("div",{className:"entries-card__sell-tax-container",children:[Object(_.jsxs)("div",{className:"entries-card__sell-tax",children:["Imposto acumulado: R$ ",e.salesTax.toFixed(5)]}),Object(_.jsx)("img",{className:"entries-card__icon entries-card__icon--sell",src:B,alt:"\xcdcone de um lixo.",onClick:t})]})]})};n(36);var W=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),d=s[0],u=s[1],l=function(t,n){e.removeOperation(t,n),u(d-1)};return Object(_.jsx)("div",{className:"history",children:function(){var t=Object.keys(e.entries),n=[];return""===c?(n.push(Object(_.jsx)("div",{className:"history__message",children:"Selecione alguma das a\xe7\xf5es para visualizar o seu hist\xf3rico de opera\xe7\xf5es."})),t.forEach((function(t){n.push(Object(_.jsx)("div",{onClick:function(){r(t),u(e.numberEntries(t))},children:Object(_.jsx)(P,{name:t,operationNumber:e.numberEntries(t)},t)}))})),n):0!==d?(n.push(Object(_.jsx)("button",{className:"history__button-back",onClick:function(){return r("")},children:"voltar"})),t.forEach((function(t){t===c&&e.entries[t].sort((function(e,t){return t.date-e.date})).forEach((function(e){n.push(Object(_.jsx)(J,{id:e.id,title:e.code,date:"".concat(e.date.getDay(),"/").concat(e.date.getMonth()+1,"/").concat(e.date.getFullYear()),type:e.type,quantity:e.quantity,price:e.price,tax:e.tax,salesTax:e.salesTax,handleDeletion:l},e.id))}))})),Object(_.jsx)("div",{className:"history__detailed-view-container",children:n})):void r("")}()})};n(37);var U=function(){var e=Object(a.useRef)(new y),t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),d=s[0],u=s[1],l=Object(a.useState)(0),p=Object(o.a)(l,2),b=p[0],j=p[1],m=Object(a.useState)(!1),h=Object(o.a)(m,2),O=h[0],f=h[1],x=Object(a.useState)(!1),v=Object(o.a)(x,2),N=v[0],k=v[1],q=Object(a.useState)(""),F=Object(o.a)(q,2),T=F[0],I=F[1],L=Object(a.useState)(e.current.getAllEntries()),V=Object(o.a)(L,2),P=V[0],R=V[1],Y=function(t){return e.current.getStockNumberOfEntries(t)};return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"app",children:[Object(_.jsx)(g,{}),Object(_.jsx)(w,{getTabSelectionFromChild:function(e){r(e)}}),Object(_.jsxs)("div",{className:0===c?"":"app__component--hidden",children:[Object(_.jsx)("div",{className:O?"":"app__component--hidden",children:Object(_.jsx)(C,{})}),Object(_.jsx)("div",{className:N?"":"app__component--hidden",children:Object(_.jsx)(E,{message:T})}),Object(_.jsx)(A,{getNewOperationFromChild:function(t){u(d+1);try{e.current.addNewOperation(t),R(e.current.getAllEntries()),j(e.current.numberOfOperations()),f(!0),setTimeout((function(){f(!1)}),3e3)}catch(n){I(n.message),k(!0),setTimeout((function(){k(!1)}),5e3)}},operationId:d})]}),Object(_.jsx)("div",{className:1===c?"":"app__component--hidden",children:b>0?Object(_.jsx)(D,{entries:P,numberEntries:Y,activeTab:c}):Object(_.jsx)(S,{})}),Object(_.jsx)("div",{className:2===c?"":"app__component--hidden",children:b>0?Object(_.jsx)(W,{entries:P,removeOperation:function(t,n){e.current.removeOperation(t,n),e.current.print(),j(e.current.numberOfOperations()),R(e.current.getAllEntries())},numberEntries:Y}):Object(_.jsx)(S,{})})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(U,{})}),document.getElementById("root")),$()}],[[38,1,2]]]);
//# sourceMappingURL=main.6a54e53a.chunk.js.map