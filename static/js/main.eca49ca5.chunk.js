(this["webpackJsonpnp-problem"]=this["webpackJsonpnp-problem"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(107),a(108),a(85)),i=a(68),m=a(55),u=a(48),s=a(18),E=a(155),p=a(159),f=a(160),h=a(161),g=a(162),d=a(163),b=a(164),v=a(165),y=a(171),j=a(170),O=a(173),k=a(174),S=a(168),C=a(169),P=a(67),N=a(87),F=function e(t,a,n){Object(N.a)(this,e),this.person1=t,this.person2=a,this.amount=n};function w(e,t){if(0!=t){var a=Math.floor((t-1)/2);if(e[a].first<e[t].first){var n=e[a];e[a]=e[t],e[t]=n,w(e,a)}}}function A(e,t){var a=2*t+1,n=2*t+2;if(!(a>=e.length&&n>=e.length)){var l=t;if(a<e.length&&e[a].first>e[l].first&&(l=a),n<e.length&&e[n].first>e[l].first&&(l=n),l!=t){var r=e[l];e[l]=e[t],e[t]=r,A(e,l)}}}function G(e,t,a){var n={first:t,second:a};e.push(n),w(e,e.length-1)}function x(e){return 0==e.length?{}:e[0]}function B(e){var t=e.length-1,a=e[0];e[0]=e[t],e[t]=a,e.pop(),A(e,0)}var D=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),N=Object(s.a)(c,2),w=N[0],A=N[1],D=Object(n.useState)(!1),z=Object(s.a)(D,2),I=z[0],L=z[1],M=Object(n.useState)({person1:"",person2:"",amount:""}),T=Object(s.a)(M,2),J=T[0],H=T[1],q=Object(n.useState)([]),K=Object(s.a)(q,2),Q=K[0],R=K[1],U=Object(n.useState)([]),V=Object(s.a)(U,2),W=V[0],X=V[1],Y=J.person1,Z=J.person2,$=J.amount,_=Object(n.useState)({}),ee=Object(s.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({}),le=Object(s.a)(ne,2),re=le[0],ce=le[1],oe=Object(n.useState)({}),ie=Object(s.a)(oe,2),me=ie[0],ue=ie[1],se=function(e){return function(t){H(Object(u.a)(Object(u.a)({},J),{},Object(m.a)({},e,t.target.value)))}},Ee=function(){return w.map((function(e){return{id:e.name}}))},pe=function(){return Q.map((function(e){return{source:e.person1,target:e.person2,amount:e.amount}}))},fe=function(e){return e.map((function(e){return{source:e.person1,target:e.person2,amount:e.amount}}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"name-component"},l.a.createElement("div",{className:"p-name"},l.a.createElement("h2",null,"Enter names of People in the group"),l.a.createElement("div",{className:"p-name-field"},l.a.createElement(k.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:a,disabled:I,onChange:function(e){r(e.target.value)}})),l.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),A((function(e){return[{name:a}].concat(Object(i.a)(e))})),r("")}},"Add")),w&&w.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"list-div"},l.a.createElement("div",{className:"list-all-names"},l.a.createElement("div",{className:"allnames"},l.a.createElement("h3",null,"Names"),w.map((function(e,t){return l.a.createElement("h4",{style:{color:"#3f3f3f"},key:t}," ",e.name)}))))),l.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){L(!0)}},"Submit")):null),I?l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{container:!0},l.a.createElement(C.a,{item:!0,xs:12,md:6},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Transactions"),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",null,"Enter transactions in the table below :-"),l.a.createElement("ol",null,l.a.createElement("li",null,"Enter the names of the Payer in first column"),l.a.createElement("li",null,"Enter the names of the Payee in second column"),l.a.createElement("li",null,"Enter the amount paid in the third column"),l.a.createElement("li",null,"Click on Build Graph to build a graph from the given transactions"),l.a.createElement("li",null,"Click on Simplify payments button when you are done with entering the payments."))))),l.a.createElement("div",{className:"form"},I&&l.a.createElement(E.a,{component:p.a,className:"table"},l.a.createElement(f.a,{"aria-label":"simple table"},l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(d.a,{align:"center"},"Payer"),l.a.createElement(d.a,{align:"center"},"Payee"),l.a.createElement(d.a,{align:"center"},"Amount"),l.a.createElement(d.a,{align:"center"},"Add"))),l.a.createElement(b.a,null,Q.length>0&&Q.map((function(e){return l.a.createElement(g.a,{key:e.name},l.a.createElement(d.a,{component:"th",align:"center",scope:"row"},e.person1),l.a.createElement(d.a,{align:"center"},e.person2),l.a.createElement(d.a,{align:"center"},e.amount))})),l.a.createElement(g.a,null,l.a.createElement(d.a,{align:"center"},l.a.createElement(v.a,null,l.a.createElement(y.a,null,"Payer"),l.a.createElement(j.a,{value:Y,onChange:se("person1")},w.map((function(e){return l.a.createElement(O.a,{value:e.name},e.name)}))))),l.a.createElement(d.a,{align:"center"},l.a.createElement(v.a,null,l.a.createElement(y.a,null,"Payee"),l.a.createElement(j.a,{value:Z,onChange:se("person2")},w.map((function(e){return Y!==e.name?l.a.createElement(O.a,{value:e.name},e.name):l.a.createElement(l.a.Fragment,null)}))))),l.a.createElement(d.a,{align:"center"},l.a.createElement(v.a,null,l.a.createElement(k.a,{id:"standard-number",label:"Amount",type:"number",value:$,placeholder:"Emter Amount",onChange:se("amount"),InputLabelProps:{shrink:!0}}))),l.a.createElement(d.a,{align:"center"},l.a.createElement(S.a,{size:"small",variant:"outlined",color:"primary",onClick:function(e){""!==J.person1&&""!==J.person2&&""!==J.amount?R([].concat(Object(i.a)(Q),[J])):alert("Enter all Fields"),H(Object(u.a)(Object(u.a)({},J),{},{person1:"",person2:"",amount:""}))}},"+ ADD"))))))),Q&&Q.length?l.a.createElement("div",{className:"form-names"},l.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(){console.log("Participants: ",w," transactions: ",Q);var e={nodes:Ee(),links:pe()};ae(e),ce({freezeAllDragEvents:!0,nodeHighlightBehavior:!0,node:{color:"lightgreen",highlightStrokeColor:"blue",fontSize:12},link:{highlightColor:"lightblue",renderLabel:!0,labelProperty:"amount",fontSize:12},directed:!0,height:600,width:600})}},"Build Graph"),l.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){var e,t=[],a=Object(o.a)(Q);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(new F(n.person1,n.person2,parseInt(n.amount)))}}catch(r){a.e(r)}finally{a.f()}var l=function(e){for(var t={},a=0;a<e.length;a++){var n=e[a];n.person1 in t?t[n.person1]+=n.amount:t[n.person1]=n.amount,n.person2 in t?t[n.person2]-=n.amount:t[n.person2]=0-n.amount}var l=[],r=[];for(var c in t)t[c]>0?G(l,t[c],c):t[c]<0&&G(r,-1*t[c],c);for(var o=[];l.length>0;){var i=x(l),m=x(r);B(l),B(r);var u=new F(m.second,i.second,Math.min(i.first,m.first));o.push(u),i.first>m.first?G(l,i.first-m.first,i.second):i.first<m.first&&G(r,m.first-i.first,m.second)}return o}(t);console.log("output: ",l),X(l),ue({nodes:Ee(),links:fe(l)})}},"Simplify Settlements")):null),l.a.createElement(C.a,{item:!0,xs:12,md:6},Object.keys(te).length&&Object.keys(re).length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"Generated graph from the transactions entered"),l.a.createElement(P.Graph,{id:"graph-id",data:te,config:re})):null)),l.a.createElement(C.a,{container:!0},l.a.createElement(C.a,{item:!0,xs:12,md:6},W&&W.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Simplified Settlement"),l.a.createElement(E.a,{component:p.a,className:"table"},l.a.createElement(f.a,{"aria-label":"simple table"},l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(d.a,{align:"center"},"Payer"),l.a.createElement(d.a,{align:"center"},"Payee"),l.a.createElement(d.a,{align:"center"},"Amount"))),l.a.createElement(b.a,null,W.length&&W.map((function(e){return l.a.createElement(g.a,{key:e.name},l.a.createElement(d.a,{component:"th",align:"center",scope:"row"},e.person1),l.a.createElement(d.a,{align:"center"},e.person2),l.a.createElement(d.a,{align:"center"},e.amount))})))))):null),l.a.createElement(C.a,{item:!0,xs:12,md:6},Object.keys(me).length&&Object.keys(re).length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,"Graph generated from the solution of algorithm"),l.a.createElement(P.Graph,{id:"graph-id-output",data:me,config:re})):null))):null)};var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null))},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),I()}},[[122,1,2]]]);
//# sourceMappingURL=main.eca49ca5.chunk.js.map