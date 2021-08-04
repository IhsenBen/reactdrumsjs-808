(this["webpackJsonpreactdrumsjs-808"]=this["webpackJsonpreactdrumsjs-808"]||[]).push([[0],{14:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(8),a=s.n(c),i=(s(14),s(2)),d=s(3),o=s(5),l=s(4),h=(s(7),s(9)),u=(s(18),s(0)),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){console.log(e.audio),e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.name)},e.handleKeydown=function(t){t.keyCode===e.props.text.charCodeAt()&&(e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.name))},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this,t=this.props,s=t.text,n=t.audio;return Object(u.jsxs)("div",{className:"drum-pad",onClick:this.handleClick,id:"b-".concat(s),children:[Object(u.jsx)(h.AwesomeButton,{type:"secondary",children:s}),Object(u.jsx)("audio",{src:n,className:"clip",ref:function(t){return e.audio=t},id:s})]})}}]),s}(r.a.Component),b=[{key:"Q",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/HT/HT00.WAV?raw=true",name:"High Tom"},{key:"W",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/OH/OH75.WAV?raw=true",name:"Open Hit Hat"},{key:"E",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CB/CB.WAV?raw=true",name:"Cow Bell"},{key:"A",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/HC/HC50.WAV?raw=true",name:"Hi Conga "},{key:"S",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/SD/SD0075.WAV?raw=true",name:"Snare Drum"},{key:"D",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/LT/LT75.WAV?raw=true",name:"Low Tom"},{key:"Z",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CY/CY7500.WAV?raw=true",name:"Cymbal"},{key:"X",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/BD/BD0010.WAV?raw=true",name:"Bass Drum"},{key:"C",src:"https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CP/CP.WAV?raw=true",name:"Hand Clap"}],j=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleDisplay=function(e){return n.setState({display:e})},n.state={display:"Click Me  :)"},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{id:"drum-machine",className:"container",children:[Object(u.jsxs)("div",{className:"header-title",children:[" ",Object(u.jsxs)("div",{id:"name",className:"title",children:[Object(u.jsxs)("h1",{children:["Rhythm Composer",Object(u.jsx)("span",{children:"JS-808"})]}),Object(u.jsx)("h2",{children:"React Controlled"})]})]}),Object(u.jsxs)("div",{className:"diplay-credit",children:[Object(u.jsx)("div",{id:"display",className:"display",children:Object(u.jsx)("h1",{id:"display",children:this.state.display})}),Object(u.jsxs)("div",{className:"credit",children:[Object(u.jsxs)("h3",{children:["Made By ",Object(u.jsx)("br",{})," Ihsen Ben Ali"]}),Object(u.jsx)("p",{children:"for the freeCodeCamp.org Front End Libraries certification"}),Object(u.jsxs)("h3",{children:[" ",Object(u.jsx)("a",{href:"https://www.ihsen.dev/",id:"portfolio",children:"Portfolio"})]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("a",{href:"https://www.freecodecamp.org/certification/fcc66bdef47-a96a-4507-97de-483d45ee0bb6/front-end-libraries",id:"certification",children:"Certification"})," "]})]})]}),Object(u.jsxs)("div",{className:"pads",children:[" ",Object(u.jsx)("div",{className:"pads-container",children:b.map((function(t,s){return Object(u.jsx)(m,{text:t.key,name:t.name,audio:t.src,handleDisplay:e.handleDisplay},t.key)}))})]})]})})})}}]),s}(n.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),p()},7:function(e,t,s){}},[[20,1,2]]]);
//# sourceMappingURL=main.3845081d.chunk.js.map