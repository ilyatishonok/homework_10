(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(r,t,n){r.exports=n(36)},36:function(r,t,n){"use strict";n.r(t);var e,a=n(0),o=n.n(a),c=n(8),i=n.n(c),u=n(4),l=n(9),p=n(5),d=n(3),O=n(18),s=n.n(O),f=n(1);!function(r){r.ADD_OPERATION="@@calculator/ADD_OPERATION",r.ADD_OPERAND="@@calculator/ADD_OPERAND",r.CLEAR="@@calculator/CLEAR",r.CALCULATE_RESULT="@@calculator/CALCULATE_RESULT"}(e||(e={}));var h=function(r){return["+","-","/","*"].includes(r)},b=function(r){return new Function("return ".concat(r))()},g=function(r){return"-"===r},x={leftOperand:"0",rightOperand:"",currentOperator:"",result:"",error:""},y=function(){var r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case e.ADD_OPERAND:return t.error||t.result?Object(f.a)({},t,{leftOperand:n.payload,currentOperator:"",error:"",result:""}):t.currentOperator?Object(f.a)({},t,{rightOperand:t.rightOperand+n.payload}):Object(f.a)({},t,{leftOperand:"0"===t.leftOperand?n.payload:t.leftOperand+n.payload})}switch(n.type){case e.ADD_OPERATION:return t.error||t.result?Object(f.a)({},t,{leftOperand:t.result?t.result:"0",currentOperator:n.payload,error:"",result:""}):t.currentOperator?t.rightOperand?g(t.rightOperand)?t:Object(f.a)({},t,{currentOperator:n.payload,leftOperand:t.leftOperand+t.currentOperator+t.rightOperand,rightOperand:""}):(r=t.currentOperator,["/","*"].includes(r)&&g(n.payload)?Object(f.a)({},t,{rightOperand:n.payload}):t.currentOperator!==n.payload?Object(f.a)({},t,{currentOperator:n.payload}):t):Object(f.a)({},t,{currentOperator:n.payload});case e.CALCULATE_RESULT:if(t.currentOperator){var a=!t.rightOperand||g(t.rightOperand)?b(t.leftOperand):b(t.leftOperand+t.currentOperator+t.rightOperand);return isNaN(a)?Object(f.a)({},x,{error:"Error"}):Object(f.a)({},t,{result:"".concat(a),currentOperator:"",rightOperand:"",leftOperand:""})}return t;case e.CLEAR:return Object(f.a)({},x);default:return t}},A=Object(d.c)({calculator:y}),v=Object(d.d)(A,Object(d.a)(s.a)),D=n(19),E=n(20),j=n(24),m=n(21),w=n(26);function k(){var r=Object(u.a)(["\n    background: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    box-sizing: border-box;\n    border: 0.5px solid #3a372a;\n    border-radius: 10px;\n    color: white;\n    margin-top: 5px;\n    margin-left: 5px;\n    height: 23%;\n    cursor: pointer;\n\n    &:hover {\n        background: ",";\n    }\n"]);return k=function(){return r},r}function C(){var r=Object(u.a)(["\n    padding: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    height: 100%;\n    margin: 30px;\n    margin-top: 10px;\n    border-radius: 10px;\n    background: #666666;\n    user-select: none;\n    border: 3px solid #1A1A1A;\n"]);return C=function(){return r},r}function B(){var r=Object(u.a)(["\n    background: black;\n    color: #00FF00;\n    text-shadow: 0 0 5px rgba(89, 195, 195, 0.5);\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin: 30px;\n    box-sizing: border-box;\n    padding: 30px;\n    overflow: hidden;\n    font-size: 24px;\n    word-wrap: break-word;\n    position: relative;\n"]);return B=function(){return r},r}function L(){var r=Object(u.a)(["\n    height: 500px;\n    width: 400px;\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    background: #4D4D4D;\n    border: 5px solid #1A1A1A;\n    border-radius: 20px;\n    margin: 20px;\n    word-wrap: break-word;\n    box-shadow: 10px 10px 40px 10px black\n"]);return L=function(){return r},r}var R=p.b.div(L()),T=p.b.div(B()),_=p.b.div(C()),N=p.b.div(k(),function(r){return r.background?r.background:"#65727A"},function(r){return r.hover?r.hover:"#818f98"}),P=function(r){function t(){var r,n;Object(D.a)(this,t);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(n=Object(j.a)(this,(r=Object(m.a)(t)).call.apply(r,[this].concat(a)))).handleClick=function(r){var t=r.currentTarget.textContent||"";h(t)?n.props.addOperation(t):n.props.addOperand(t)},n.calculate=function(){n.props.calculate()},n}return Object(w.a)(t,r),Object(E.a)(t,[{key:"createOperationButton",value:function(r){return o.a.createElement(N,{background:"#cc6900",hover:"#e27909",onClick:"C"===r?this.props.clear:this.handleClick},r)}},{key:"createDigitButton",value:function(r){return o.a.createElement(N,{onClick:this.handleClick},r)}},{key:"render",value:function(){var r=this.props,t=r.error,n=r.result,e=r.leftOperand,a=r.currentOperator,c=r.rightOperand,i=n||e+a+c;return o.a.createElement(R,null,o.a.createElement(T,null,t||i),o.a.createElement(_,null,this.createDigitButton("7"),this.createDigitButton("4"),this.createDigitButton("1"),this.createOperationButton("C"),this.createDigitButton("8"),this.createDigitButton("5"),this.createDigitButton("2"),this.createDigitButton("0"),this.createDigitButton("9"),this.createDigitButton("6"),this.createDigitButton("3"),o.a.createElement(N,{background:"#008040",hover:"#14ad60",onClick:this.props.calculate},"="),this.createOperationButton("+"),this.createOperationButton("-"),this.createOperationButton("*"),this.createOperationButton("/")))}}]),t}(a.Component),U=Object(l.b)(function(r){return Object(f.a)({},r.calculator)},function(r){return{addOperation:function(t){return r(function(r){return{type:e.ADD_OPERATION,payload:r}}(t))},calculate:function(){return r({type:e.CALCULATE_RESULT})},clear:function(){return r({type:e.CLEAR})},addOperand:function(t){return r(function(r){return{type:e.ADD_OPERAND,payload:r}}(t))}}})(P);function I(){var r=Object(u.a)(["\n    body, html {\n        margin: 0;\n        padding: 0;\n    }\n\n    body {\n        background: #F0E68C;\n    }\n\n    #root {\n        display: flex;\n        justify-content: center;\n    }\n"]);return I=function(){return r},r}var z=Object(p.a)(I()),F=function(){return o.a.createElement(l.a,{store:v},o.a.createElement(z,null),o.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(r){r.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.40d5d62d.chunk.js.map