(this.webpackJsonpanalizerstyleweb=this.webpackJsonpanalizerstyleweb||[]).push([[0],{12:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){},63:function(e){e.exports=JSON.parse("{}")},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),c=a.n(s),i=a(27),r=a.n(i),o=(a(35),a(4)),l=a(5),d=a(7),m=a(6),u=(a(12),a(28)),p=a.n(u),j=a(29),b=a.n(j),x=(a(60),a(62),a(25),a.p+"static/media/logo2.d374c080.png"),h=a.p+"static/media/exito2.fa8b7235.png",g=(a(63),a(26),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row justify-content-around align-items-center",children:[Object(n.jsx)("div",{className:"columna col-lg-2 col-md-5 col-sm-12",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"LinasF","aria-describedby":"basic-addon3",placeholder:"Lineas por funcion","aria-label":"LinasF",onChange:function(t){e.props.setmaxLinesByFuntion(t.target.value)}})]})})}),Object(n.jsxs)("div",{className:"columna col-lg-3 col-md-5 col-sm-12",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"Ambitos","aria-describedby":"basic-addon3",placeholder:"Ambitos anidados","aria-label":"Ambitos",onChange:function(t){e.props.setComplejidad(t.target.value)}})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"Caracteres","aria-describedby":"basic-addon3",placeholder:"Caracteres por nombre","aria-label":"Caracteres",onChange:function(t){e.props.setmaxCaracterByFuntion(t.target.value)}})]})})]}),Object(n.jsxs)("div",{className:"columna col-lg-3 col-md-5 col-sm-12",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"MinLineasC","aria-describedby":"basic-addon3",placeholder:"Min lineas comentadas","aria-label":"MinLineasC",onChange:function(t){e.props.setminLineComment(t.target.value)}})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"MaxLineasC","aria-describedby":"basic-addon3",placeholder:"Max lineas comentadas","aria-label":"MaxLineasC",onChange:function(t){e.props.setmaxLineComment(t.target.value)}})]})})]}),Object(n.jsxs)("div",{className:"columna col-lg-3 col-md-5 col-sm-12",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"Funciones","aria-describedby":"basic-addon3",placeholder:"Funciones por clase","aria-label":"Funciones",onChange:function(t){e.props.setmaxFuntionByClass(t.target.value)}})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"#"})}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"Clases","aria-describedby":"basic-addon3",placeholder:"Clases por archivo","aria-label":"Clases",onChange:function(t){e.props.setmaxClass(t.target.value)}})]})})]})]})})}}]),a}(s.Component)),O=function(e,t,a,s){if(e)return Object(n.jsx)("button",{className:"btn button-color-ouline button-card",id:"Aplicar",onClick:function(){t(a,s)},children:"Aplicar en el codigo"})};function C(e){return Object(n.jsxs)("div",{className:"card shadow p-3 mb-5 bg-white rounded",children:[Object(n.jsx)("h4",{className:"card-header ",children:e.error}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row justify-content-start card-subtitle mb-2 text-muted text-left ",children:Object(n.jsx)("h6",{children:(t=e.linea,a=e.col,"Linea: ".concat(t," - Columna: ").concat(a))})})}),Object(n.jsx)("p",{className:"card-text overflow-hidden",style:{height:"50px"},children:e.sugerencia}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("button",{type:"button",className:"btn button-color button-card",onClick:function(){var t=function(e,t,a,n){return"\n    -----------------------------\n    -----------------------------\n    ".concat(n,"\n    -----------------------------\n    Line: ").concat(t,"\t Column: ").concat(a,"\n    -----------------------------\n    -----------------------------\n    ")}(e.error,e.linea,e.col,e.sugerencia);console.log(t);var a=document.createElement("a"),n=new Blob([t],{type:"text/plain;charset=utf-8"});a.href=URL.createObjectURL(n),a.download="sugerencia.txt",document.body.appendChild(a),a.click()},children:"Descargar"}),O(e.hasCorr,e.correctText,e.prevCode,e.correctedCode)]})]})]});var t,a}var f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={minLineComment:0,Complejidad:0,maxCaracterByFuntion:0,maxLinesByFuntion:0,maxLineComment:0,maxClass:0,maxFuntionByClass:0,sugerencias:[],textInput:"",error:!1,image:!1},e.setText=function(t){e.setState({textInput:t})},e.seterror=function(t){e.setState({error:t})},e.setminLineComment=function(t){e.setState({minLineComment:t})},e.setComplejidad=function(t){t=parseInt(t),e.setState({Complejidad:t})},e.setmaxCaracterByFuntion=function(t){t=parseInt(t),e.setState({maxCaracterByFuntion:t})},e.setmaxLinesByFuntion=function(t){t=parseInt(t),e.setState({maxLinesByFuntion:t})},e.setmaxLineComment=function(t){t=parseInt(t),e.setState({maxLineComment:t})},e.setmaxClass=function(t){t=parseInt(t),e.setState({maxClass:t})},e.setmaxFuntionByClass=function(t){t=parseInt(t),e.setState({maxFuntionByClass:t})},e.setSugerencias=function(t){e.setState({sugerencias:t})},e.setImage=function(t){e.setState({image:t})},e.postRequest=function(){var t={complexity:e.state.Complejidad,minCommentedLinesCount:e.state.minLineComment,maxNameLength:e.state.maxCaracterByFuntion,maxLineCountByFunction:e.state.maxLinesByFuntion,maxCommentedLinesCount:e.state.maxLineComment,maxClassesByFile:e.state.maxClass,maxFunctionCountByClass:e.state.maxFuntionByClass,text:e.state.textInput},a={method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(t),url:"https://code-style-analyzer.herokuapp.com/api/java/code-analysis/"};p()(a).then((function(t){console.log("res.data"),console.log(t),0==t.data.letngth?e.setImage(!0):e.setImage(!1),e.setSugerencias(t.data)})).catch((function(e){alert("There was an error "+e.message),console.log("error.data"),console.log(e)}))},e.correctText=function(t,a){var n=e.state.textInput.replaceAll(t,a);e.aceEditorRef.editor.setValue(n),e.setState({textInput:n})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[];return this.state.sugerencias.map((function(a,s){return t.push(Object(n.jsx)(C,{error:a.errorMessage,sugerencia:a.suggestion,linea:a.line,col:a.column,hasCorr:a.hasCorrection,prevCode:a.previousCode,correctedCode:a.correctedCode,correctText:e.correctText},s)),null})),Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"navbar navbar-light",children:Object(n.jsx)("img",{alt:"Brand",src:x,className:"navbar-brand mx-auto d-block img-fluid",width:"500px"})})}),Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container columna",children:[Object(n.jsx)("h2",{className:"cont font-change",children:"Par\xe1metros personalizables"}),Object(n.jsx)(g,{setminLineComment:this.setminLineComment,setComplejidad:this.setComplejidad,setmaxCaracterByFuntion:this.setmaxCaracterByFuntion,setmaxLinesByFuntion:this.setmaxLinesByFuntion,setmaxLineComment:this.setmaxLineComment,setmaxClass:this.setmaxClass,setmaxFuntionByClass:this.setmaxFuntionByClass}),Object(n.jsxs)("div",{className:"row row justify-content-between",children:[Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)("div",{className:"text-button separe-items",children:[Object(n.jsx)("div",{className:"",children:Object(n.jsx)("h2",{className:"font-change",children:"Codigo"})}),Object(n.jsx)("div",{className:"",children:Object(n.jsx)("button",{className:"btn button-color",onClick:function(){e.postRequest()},children:"Analizar"})})]}),Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text"})}),Object(n.jsx)(b.a,{mode:"javascript",theme:"monokai",ref:function(t){return e.aceEditorRef=t},onChange:function(t){e.setText(t)}})]})]}),Object(n.jsxs)("div",{className:"col-lg-5 contfin ",children:[Object(n.jsx)("h2",{className:"font-change",children:"Sugerencias"}),this.state.image?Object(n.jsx)("img",{alt:"exito",src:h,className:"mx-auto d-block img-fluid",width:"340px"}):Object(n.jsx)("div",{className:"row row-cols-1 scroll",style:{paddingRight:"15px"},children:t})]})]})]})}),Object(n.jsx)("footer",{className:"page-footer font-small blue footer-space",children:Object(n.jsx)("div",{className:"footer-copyright text-center py-3",children:Object(n.jsx)("p",{children:" Lenguajes de Programaci\xf3n 2020-2"})})})]})}}]),a}(s.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.0a143f20.chunk.js.map