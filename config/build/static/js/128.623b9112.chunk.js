/*! For license information please see 128.623b9112.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[128],{1936:function(e,t,n){!function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},n=e.exports,c=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=0,a=n.length,r={};c<a;c++)if((e=n[c])&&e[1]in t){for(c=0;c<e.length;c++)r[n[0][c]]=e[c];return r}return!1}(),a={change:c.fullscreenchange,error:c.fullscreenerror},r={request:function(e){return new Promise(function(n,a){var r=function(){this.off("change",r),n()}.bind(this);this.on("change",r);var s=(e=e||t.documentElement)[c.requestFullscreen]();s instanceof Promise&&s.then(r).catch(a)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var a=function(){this.off("change",a),e()}.bind(this);this.on("change",a);var r=t[c.exitFullscreen]();r instanceof Promise&&r.then(a).catch(n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var c=a[e];c&&t.addEventListener(c,n,!1)},off:function(e,n){var c=a[e];c&&t.removeEventListener(c,n,!1)},raw:c};c?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(t[c.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[c.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[c.fullscreenEnabled])}}}),n?e.exports=r:window.screenfull=r):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},2097:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1095),r=n(1096),s=n(1151),l=n(471),i=n(1116),o=n(1152),u=n(752),j=n.n(u),d=n(6),b=function(){return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(i.a,{tag:"h4",children:"Video"})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(j.a,{url:"http://youtube.com/watch?v=FCPdIvXo2rU",className:"react-player-video",width:"100%",controls:!0})})]})},h=n(15),O=n(1100),x=n(463),m=n(1015),f=n(630),p=n(229),g=n.n(p),y=function(e){return"0".concat(e).slice(-2)},v=function(e){var t=new Date(1e3*e),n=t.getUTCHours(),c=t.getUTCMinutes(),a=y(t.getUTCSeconds());return n?"".concat(n,":").concat(y(c),":").concat(a):"".concat(c,":").concat(a)},N=function(){Object(c.useEffect)((function(){g.a.highlightAll()}));var e=Object(c.useRef)(null),t="https://soundcloud.com/2ghost/we-will-rock-you",n=Object(c.useState)(t),u=Object(h.a)(n,2),b=u[0],p=u[1],y=Object(c.useState)(!1),N=Object(h.a)(y,2),w=N[0],k=N[1],F=Object(c.useState)(.75),S=Object(h.a)(F,2),C=S[0],P=S[1],E=Object(c.useState)(!1),T=Object(h.a)(E,2),M=T[0],D=T[1],U=Object(c.useState)(0),q=Object(h.a)(U,2),A=q[0],L=q[1],R=Object(c.useState)(0),V=Object(h.a)(R,2),z=V[0],B=V[1],H=Object(c.useState)(0),I=Object(h.a)(H,2),J=I[0],X=I[1],_=Object(c.useState)(null),G=Object(h.a)(_,2),K=G[0],Q=G[1];Object(c.useEffect)((function(){null===b&&function(e){p(e),L(0),B(0)}(t)}));var W=function(e){var t=e.className,n=e.seconds;return Object(d.jsx)("time",{dateTime:"P".concat(Math.round(n),"S"),className:t,children:v(n)})},Y=Object(d.jsx)(W,{seconds:J}),Z=Object(d.jsx)(W,{seconds:J*A}),$=Object(d.jsx)(W,{seconds:J*(1-A)});return Object(d.jsxs)(s.a,{className:"overflow-hidden",children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(i.a,{tag:"h4",children:"Audio"})}),Object(d.jsx)(o.a,{children:Object(d.jsxs)(a.a,{children:[Object(d.jsx)(r.a,{xs:12,children:Object(d.jsx)(j.a,{ref:e,url:b,className:"react-player-audio",width:"500px",height:"290px",playing:w,volume:C,muted:M,onPlay:function(){return k(!0)},onPause:function(){return k(!1)},onSeek:function(e){return console.log("onSeek",e)},onProgress:function(e){K||(L(e.played),B(e.loaded))},onDuration:function(e){return X(e)}})}),Object(d.jsx)(r.a,{xs:12,children:Object(d.jsx)(O.a,{borderless:!0,className:"mt-2",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Controls"}),Object(d.jsxs)("td",{children:[Object(d.jsx)(x.a,{variant:"primary",outline:!0,onClick:function(){k(!1),p(null)},className:"my-25 mr-50",children:"Stop"}),Object(d.jsx)(x.a,{variant:"primary",outline:!0,onClick:function(){return k(!w)},className:"my-25",children:w?"Pause":"Play"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Seek"}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:A,onMouseDown:function(){return Q(!0)},onChange:function(e){L(parseFloat(e.target.value))},onMouseUp:function(t){Q(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Volume"}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"range",min:0,max:1,step:"any",value:C,onChange:function(e){return P(parseFloat(e.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Muted"}),Object(d.jsx)("td",{children:Object(d.jsx)(m.a,{type:"checkbox",id:"audioMuted",checked:M,onChange:function(){return D(!M)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Played"}),Object(d.jsx)("td",{children:Object(d.jsx)(f.a,{value:A,max:1})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Loaded"}),Object(d.jsx)("td",{children:Object(d.jsx)(f.a,{value:z,max:1})})]})]})})}),Object(d.jsx)(r.a,{xs:12,children:Object(d.jsx)("pre",{className:"language-js",children:Object(d.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(w,",\n  volume: ").concat(C.toFixed(2),",\n  played: ").concat(A.toFixed(2),",\n  loaded: ").concat(z.toFixed(2),",\n  duration: ").concat(v(Y.props.seconds),",\n  elapsed: ").concat(v(Z.props.seconds),",\n  remaining: ").concat(v($.props.seconds),"\n}\n")})})})]})})]})},w=n(33),k=n(1936),F=n.n(k),S=function(e){return"0".concat(e).slice(-2)},C=function(e){var t=new Date(1e3*e),n=t.getUTCHours(),c=t.getUTCMinutes(),a=S(t.getUTCSeconds());return n?"".concat(n,":").concat(S(c),":").concat(a):"".concat(c,":").concat(a)},P=function(){Object(c.useEffect)((function(){g.a.highlightAll()}));var e=Object(c.useRef)(null),t="http://youtube.com/watch?v=FCPdIvXo2rU",n=Object(c.useState)(t),u=Object(h.a)(n,2),b=u[0],p=u[1],y=Object(c.useState)(!1),v=Object(h.a)(y,2),N=v[0],k=v[1],S=Object(c.useState)(!1),P=Object(h.a)(S,2),E=P[0],T=P[1],M=Object(c.useState)(.75),D=Object(h.a)(M,2),U=D[0],q=D[1],A=Object(c.useState)(!1),L=Object(h.a)(A,2),R=L[0],V=L[1],z=Object(c.useState)(0),B=Object(h.a)(z,2),H=B[0],I=B[1],J=Object(c.useState)(0),X=Object(h.a)(J,2),_=X[0],G=X[1],K=Object(c.useState)(0),Q=Object(h.a)(K,2),W=Q[0],Y=Q[1],Z=Object(c.useState)(1),$=Object(h.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(!1),ce=Object(h.a)(ne,2),ae=ce[0],re=ce[1],se=Object(c.useState)(null),le=Object(h.a)(se,2),ie=le[0],oe=le[1];Object(c.useEffect)((function(){null===b&&function(e){p(e),I(0),G(0)}(t)}));var ue=function(e){return te(parseFloat(e.target.value))},je=function(e){var t=e.className,n=e.seconds;return Object(d.jsx)("time",{dateTime:"P".concat(Math.round(n),"S"),className:t,children:C(n)})},de=Object(d.jsx)(je,{seconds:W}),be=Object(d.jsx)(je,{seconds:W*H}),he=Object(d.jsx)(je,{seconds:W*(1-H)});return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(i.a,{tag:"h4",children:"Controlled Video"})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{xs:12,children:Object(d.jsx)(j.a,{ref:e,url:b,className:"react-player-video",width:"100%",playing:N,controls:E,loop:ae,playbackRate:ee,volume:U,muted:R,onPlay:function(){return k(!0)},onPause:function(){return k(!1)},onEnded:function(){return k(ae)},onProgress:function(e){ie||(I(e.played),G(e.loaded))},onDuration:function(e){return Y(e)},config:{youtube:{embedOptions:{"allow-same-origin":!0}}}})})})}),Object(d.jsx)(O.a,{borderless:!0,children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Controls"}),Object(d.jsxs)("td",{children:[Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:function(){k(!1),p(null)},className:"my-25 mr-50",children:"Stop"}),Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:function(){return k(!N)},className:"my-25 mr-50",children:N?"Pause":"Play"}),Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:function(){F.a.request(Object(w.findDOMNode)(e.current))},className:"my-25",children:"Fullscreen"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Speed"}),Object(d.jsxs)("td",{children:[Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:ue,value:1,className:"my-25 mr-50",active:1===ee,children:"1x"}),Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:ue,value:1.5,className:"my-25 mr-50",active:1.5===ee,children:"1.5x"}),Object(d.jsx)(x.a,{color:"primary",outline:!0,onClick:ue,value:2,active:2===ee,children:"2x"})]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Seek"}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:H,onMouseDown:function(){return oe(!0)},onChange:function(e){I(parseFloat(e.target.value))},onMouseUp:function(t){oe(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Volume"}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"range",min:0,max:1,step:"any",value:U,onChange:function(e){return q(parseFloat(e.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Controls"}),Object(d.jsx)("td",{children:Object(d.jsx)(m.a,{type:"checkbox",id:"videoControls",checked:E,onChange:function(){T(!E),p(null)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Muted"}),Object(d.jsx)("td",{children:Object(d.jsx)(m.a,{type:"checkbox",id:"videoMuted",checked:R,onChange:function(){return V(!R)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Loop"}),Object(d.jsx)("td",{children:Object(d.jsx)(m.a,{type:"checkbox",id:"videoLoop",checked:ae,onChange:function(){return re(!ae)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Played"}),Object(d.jsx)("td",{children:Object(d.jsx)(f.a,{value:H,max:1})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-right",children:"Loaded"}),Object(d.jsx)("td",{children:Object(d.jsx)(f.a,{value:_,max:1})})]})]})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{xs:12,children:Object(d.jsx)("pre",{className:"language-js",children:Object(d.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(N,",\n  volume: ").concat(U.toFixed(2),",\n  played: ").concat(H.toFixed(2),",\n  loaded: ").concat(_.toFixed(2),",\n  duration: ").concat(C(de.props.seconds),",\n  elapsed: ").concat(C(be.props.seconds),",\n  remaining: ").concat(C(he.props.seconds),"\n}\n")})})})})})]})},E=n(481);t.default=function(){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(E.a,{title:"React Player",subTitle:"React Media Player",link:"https://github.com/CookPete/react-player"}),Object(d.jsxs)(a.a,{children:[Object(d.jsx)(r.a,{sm:"12",children:Object(d.jsx)(b,{})}),Object(d.jsx)(r.a,{sm:"12",children:Object(d.jsx)(P,{})}),Object(d.jsx)(r.a,{sm:"12",children:Object(d.jsx)(N,{})})]})]})}},471:function(e,t,n){"use strict";var c=n(14),a=n(20),r=n(0),s=n.n(r),l=n(5),i=n.n(l),o=n(58),u=n.n(o),j=n(80),d={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,n=e.cssModule,r=e.tag,l=Object(a.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(u()(t,"card-header"),n);return s.a.createElement(r,Object(c.a)({},l,{className:i}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},481:function(e,t,n){"use strict";var c=n(1095),a=n(1096),r=n(6);t.a=function(e){return Object(r.jsx)(c.a,{className:"mb-2",children:Object(r.jsxs)(a.a,{sm:"12",className:"ml-50",children:[Object(r.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(r.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},630:function(e,t,n){"use strict";var c=n(14),a=n(467),r=n(20),s=n(0),l=n.n(s),i=n(5),o=n.n(i),u=n(58),j=n.n(u),d=n(80);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:d.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},x=function(e){var t=e.children,n=e.className,a=e.barClassName,s=e.cssModule,i=e.value,o=e.min,u=e.max,b=e.animated,O=e.striped,x=e.color,m=e.bar,f=e.multi,p=e.tag,g=e.style,y=e.barAriaValueText,v=e.barAriaLabelledBy,N=Object(r.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),w=Object(d.toNumber)(i)/Object(d.toNumber)(u)*100,k=Object(d.mapToCssModules)(j()(n,"progress"),s),F=Object(d.mapToCssModules)(j()("progress-bar",m&&n||a,b?"progress-bar-animated":null,x?"bg-"+x:null,O||b?"progress-bar-striped":null),s),S=f?t:l.a.createElement("div",Object(c.a)({},N,{className:F,style:h(h({},g),{},{width:w+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":o,"aria-valuemax":u,"aria-valuetext":y,"aria-labelledby":v,children:t}));return m?S:l.a.createElement(p,Object(c.a)({},N,{className:k,children:S}))};x.propTypes=O,x.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},t.a=x}}]);
//# sourceMappingURL=128.623b9112.chunk.js.map