(this["webpackJsonpreactdrumsjs-808"]=this["webpackJsonpreactdrumsjs-808"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(8),r=t.n(s),o=(t(13),t(2)),i=t(3),d=t(5),u=t(4),l=(t(7),t(0)),m=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).handleClick=function(){a.audio.play(),a.audio.currentTime=0},a.audio=c.a.createRef(),a}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.props,t=n.text,a=n.audio;return Object(l.jsxs)("div",{className:"drum-pad",onClick:this.handleClick,id:"drum-".concat(t),children:[t,Object(l.jsx)("audio",{src:a,className:"clip",ref:function(n){return e.audio=n},id:t})]})}}]),t}(c.a.Component);document.addEventListener("keydown",(function(e){var n=e.key.toUpperCase(),t=document.getElementById(n);t&&(t.currentTime=0,console.log(t),t.play())}));var j=[{key:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",name:"Low Tom"},{key:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",name:"Low Conga"},{key:"E",src:"file://sounds/cowbell.wav",name:"Cow Bell"},{key:"A",src:"./sounds/openhat.wav",name:"Open Hat"},{key:"S",src:"./sounds/snaredrum.wav",name:"Snare Drum"},{key:"D",src:"./sounds/lowtom.wav",name:"Low Tom"},{key:"Z",src:"./sounds/bassdrum.wav",name:"Bass Drum"},{key:"X",src:"./sounds/midtown.wav",name:"Mid Town"},{key:"C",src:"./sounds/handclap",name:"Hand Clap"}],p=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{id:"drum-machine",className:"App",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Test react"})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"drum-display",children:Object(l.jsx)("h1",{children:"Test Sound"})}),Object(l.jsx)("div",{id:"display",className:"display",children:j.map((function(e,n){return Object(l.jsx)(m,{text:e.key,audio:e.src},e.key)}))})]})]})})}}]),t}(a.Component),h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),h()},7:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.b411b0b6.chunk.js.map