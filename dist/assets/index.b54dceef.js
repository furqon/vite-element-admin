var r=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(n,t,e)=>t in n?r(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;import{d as i,r as l,o as c,c as d,a as p,t as m,w as u,p as f,g as b,h as g,x as h,a2 as x,F as y,l as v,z as _,C as w,V as k,B as S}from"./vendor.e2133354.js";import{c as z}from"./clipboard.578b7ec1.js";import{_ as B}from"./index.934aafbc.js";import{_ as L}from"./index.9d0a10ba.js";import"./index.8c4d74a8.js";var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".arrowBounce {\r\n    position: relative;\r\n    -webkit-animation: bounce 2s infinite;\r\n            animation: bounce 2s infinite;\r\n}\r\n\r\n.arrowBounce svg {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    fill: hsl(243, 80%, 62%);\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    40% {\r\n        transform: translateY(-30px);\r\n    }\r\n    60% {\r\n        transform: translateY(-15px);\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    40% {\r\n        transform: translateY(-30px);\r\n    }\r\n    60% {\r\n        transform: translateY(-15px);\r\n    }\r\n}\r\n"}),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".arrowFromLeft {\r\n    overflow: hidden;\r\n    padding: 12px 30px;\r\n    border-radius: 6px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    color: hsl(243, 80%, 62%);\r\n    position: relative;\r\n}\r\n\r\n.arrowFromLeft div {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.arrowFromLeft:hover span {\r\n    transform: translateX(15px);\r\n}\r\n\r\n.arrowFromLeft:hover svg {\r\n    opacity: 1;\r\n    transform: translate(15px, -50%);\r\n}\r\n\r\n.arrowFromLeft span {\r\n    display: inline-block;\r\n    transition: transform .3s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.arrowFromLeft svg {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 10px;\r\n    fill: hsl(243, 80%, 62%);\r\n    opacity: 0;\r\n    transform: translate(-10px, -50%);\r\n    transition: opacity .3s .05s cubic-bezier(.455,.03,.515,.955), transform .3s .05s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n"}),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".arrowScrollDown svg {\r\n    fill: hsl(243, 80%, 62%);\r\n    -webkit-animation: arrowAnimation 1.5s infinite ease-out;\r\n            animation: arrowAnimation 1.5s infinite ease-out;\r\n}\r\n\r\n\r\n@-webkit-keyframes arrowAnimation {\r\n    0% {\r\n      transform: translateY(-20px);\r\n      opacity: 0\r\n    }\r\n    30% {\r\n      opacity: 1\r\n    }\r\n    60% {\r\n      opacity: 1\r\n    }\r\n    to {\r\n      transform: translateY(10px);\r\n      opacity: 0\r\n    }\r\n  }\r\n\r\n\r\n@keyframes arrowAnimation {\r\n    0% {\r\n      transform: translateY(-20px);\r\n      opacity: 0\r\n    }\r\n    30% {\r\n      opacity: 1\r\n    }\r\n    60% {\r\n      opacity: 1\r\n    }\r\n    to {\r\n      transform: translateY(10px);\r\n      opacity: 0\r\n    }\r\n  }"}),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".borderFade {\r\n    padding-bottom: 1px;\r\n    color: hsl(222, 25%, 14%);\r\n    position: relative;\r\n}\r\n\r\n.borderFade::after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    transform: translateY(3px);\r\n    background: hsl(243, 80%, 62%);\r\n    transition: opacity 0.2s ease, transform 0.2s ease;\r\n}\r\n\r\n.borderFade:hover::after {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n}\r\n"}),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".borderLeftRight {\r\n  display: inline-block;\r\n  position: relative;\r\n  color: hsl(222, 25%, 14%);\r\n}\r\n\r\n.borderLeftRight::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: hsl(243, 80%, 62%);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);\r\n}\r\n\r\n.borderLeftRight:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n"}),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:'.borderMarker {\r\n    position: relative;\r\n  }\r\n\r\n  .borderMarker span {\r\n      z-index: 1;\r\n      position: relative;\r\n  }\r\n  \r\n  .borderMarker::after {\r\n    content: "";\r\n    position: absolute;\r\n    left: -0.1px;\r\n    right: -0.1px;\r\n    bottom: 0;\r\n    height: 100%;\r\n    transform: scaleY(.3);\r\n    transition: transform .1s ease-in-out;\r\n    transform-origin: bottom;\r\n    background-color: hsl(222, 100%, 93%);\r\n  }\r\n  \r\n  .borderMarker:hover::after {\r\n    transform: scaleY(1);\r\n  }\r\n  '}),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:'.bouncingLoader > div, .bouncingLoader:before, .bouncingLoader:after {\r\n    display: inline-block;\r\n    width: 13px;\r\n    height: 13px;\r\n    background: hsl(243, 80%, 62%);\r\n    margin-bottom: -5px;\r\n    border-radius: 50%;\r\n    -webkit-animation: bouncing-loader 0.6s infinite alternate;\r\n            animation: bouncing-loader 0.6s infinite alternate;\r\n}\r\n\r\n.bouncingLoader > div, .bouncingLoader:before, .bouncingLoader:after {\r\n    content: "";\r\n}\r\n\r\n.bouncingLoader > div {\r\n    margin: 0 5px;\r\n}\r\n\r\n.bouncingLoader > div {\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n}\r\n\r\n.bouncingLoader:after {\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n}\r\n\r\n@-webkit-keyframes bouncing-loader {\r\n    to {\r\n        opacity: 0.1;\r\n        transform: translate3d(0, -16px, 0);\r\n    }\r\n}\r\n\r\n@keyframes bouncing-loader {\r\n    to {\r\n        opacity: 0.1;\r\n        transform: translate3d(0, -16px, 0);\r\n    }\r\n}\r\n'}),Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".buttonOverlay {\r\n    padding: 12px 24px;\r\n    position: relative;\r\n    color: hsl(243, 80%, 62%);\r\n}\r\n\r\n.buttonOverlay span {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.buttonOverlay::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 5px;\r\n    right: 5px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.buttonOverlay::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid #474E51;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.buttonOverlay:hover::before {\r\n    transform: translate(6px, -4px);\r\n}\r\n\r\n.buttonOverlay:hover::after {\r\n    transform: translate(-6px, 4px);\r\n}\r\n"}),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".circleScaleBtn {\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    color: hsl(243, 80%, 62%);\r\n    position: relative;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n}\r\n\r\n.circleScaleBtn span {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.circleScaleBtn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 140px;\r\n    height: 140px;\r\n    border-radius: 50%;\r\n    transform: translate3d(-50%,-50%,0) scale3d(0,0,0);\r\n    transition: opacity .4s cubic-bezier(.19,1,.22,1),transform .75s cubic-bezier(.19,1,.22,1);\r\n    background-color: hsl(243, 80%, 62%);\r\n    opacity: 0;\r\n}\r\n\r\n.circleScaleBtn:hover span {\r\n    color: hsl(222, 100%, 95%);\r\n}\r\n\r\n.circleScaleBtn:hover::before {\r\n    opacity: 1;\r\n    transition-duration: .85s;\r\n    transform: translate3d(-50%,-50%,0) scale3d(1,1,1)\r\n}\r\n"}),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".donutSpinner {\r\n    display: inline-block;\r\n    border: 4px solid hsl(222 100% 95%);\r\n    border-left-color: hsl(243 80% 62%);\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    -webkit-animation: donut-spin 1.2s linear infinite;\r\n            animation: donut-spin 1.2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes donut-spin {\r\n    to {\r\n        transform: rotate(1turn);\r\n    }\r\n}\r\n\r\n@keyframes donut-spin {\r\n    to {\r\n        transform: rotate(1turn);\r\n    }\r\n}\r\n"}),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".lineThrough {\r\n    color: hsl(222, 25%, 14%);\r\n    text-decoration: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.lineThrough::before {\r\n     content: '';\r\n     position: absolute;\r\n     top: 50%;\r\n     background: hsl(243, 80%, 62%);\r\n     height: 2px;\r\n     left: 0;\r\n     width: 100%;\r\n     transform: translate3d(-101%, 0, 0);\r\n     transition: transform 0.7s ease-in-out;\r\n }\r\n\r\n.lineThrough::after {\r\n     content: '';\r\n     position: absolute;\r\n     top: 0;\r\n     left: 0;\r\n     width: 100%;\r\n     height: 100%;\r\n     background: hsl(243, 80%, 62%);;\r\n     transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);\r\n     transition: transform 0.7s ease-in-out;\r\n }\r\n\r\n.lineThrough:hover::after {\r\n     transform: translate3d(100%, 0, 0) translate3d(1px, 0, 0);\r\n }\r\n\r\n\r\n.lineThrough:hover::before {\r\n    transform: translate3d(0, 0, 0);\r\n}"}),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".magnifyBorder {\r\n    padding: 18px 36px;\r\n    border-radius: 61px;\r\n    box-shadow: inset 0 0 0 2px hsl(243, 80%, 62%);\r\n    transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1), 300ms color cubic-bezier(0.4, 0, 0.6, 1);;\r\n    color: hsl(243, 80%, 62%);\r\n}\r\n\r\n.magnifyBorder:hover {\r\n    box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);\r\n    color: hsl(243, 80%, 62%);\r\n}\r\n"}),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".magnifyBtn {\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    color: hsl(243, 80%, 62%);\r\n    border-radius: 6px;\r\n    transition: transform 250ms ease-in-out;\r\n}\r\n\r\n.magnifyBtn:hover {\r\n    transform: scale(1.10);\r\n}\r\n\r\n.magnifyBtn:active {\r\n    transform: scale(.9);\r\n}"}),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".magnifyText {\r\n    color: hsl(222, 25%, 14%);\r\n    transition: color 0.25s ease-in-out, transform 0.25s ease-in-out;\r\n}\r\n\r\n.magnifyText:hover {\r\n    transform: scale(1.05);\r\n    color: hsl(243, 80%, 62%);\r\n}\r\n\r\n.magnifyText:active {\r\n    transform: scale(.9);\r\n}"}),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".overlayLeftBtn {\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    border-radius: 6px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.overlayLeftBtn span {\r\n    color: hsl(243, 80%, 62%);\r\n    position: relative;\r\n    z-index: 1;\r\n    transition: color 0.25s cubic-bezier(.7,0,.9,1);\r\n}\r\n\r\n.overlayLeftBtn::before {\r\n    content: '';;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    border-radius: 6px;\r\n    transform: translate(-101%, -50%);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: hsl(243, 80%, 62%);\r\n    transition: transform 0.25s cubic-bezier(.7,0,.9,1);\r\n}\r\n\r\n.overlayLeftBtn:hover span {\r\n    color: hsl(222, 100%, 95%);\r\n}\r\n\r\n.overlayLeftBtn:hover::before {\r\n    transform: translate(0, -50%);\r\n}"}),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".pressDownButton {\r\n    background-color: hsl(222, 100%, 95%);\r\n    padding: 12px 24px;\r\n    color: hsl(243, 80%, 62%);\r\n    border-radius: 6px;\r\n    border-bottom: 4px solid hsl(221, 89%, 85%);\r\n    border-top: 0px solid rgba(249, 250, 251);\r\n    transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.pressDownButton:hover {\r\n    border-bottom-width: 0;\r\n    border-top-width: 4px;\r\n}\r\n"}),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".pulseAnim {\r\n    display: block;\r\n    padding: 16px;\r\n    border-radius: 50%;\r\n    background:hsl(243, 80%, 62%);\r\n    cursor: pointer;\r\n    box-shadow: 0 0 0 rgba(88, 120, 243, 0.4);\r\n    -webkit-animation: pulseAnim 2s infinite;\r\n            animation: pulseAnim 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes pulseAnim {\r\n    0% {\r\n        box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.4);\r\n    }\r\n    70% {\r\n        box-shadow: 0 0 0 10px rgba(88, 120, 243, 0);\r\n    }\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(88, 120, 243, 0);\r\n    }\r\n}\r\n\r\n@keyframes pulseAnim {\r\n    0% {\r\n        box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.4);\r\n    }\r\n    70% {\r\n        box-shadow: 0 0 0 10px rgba(88, 120, 243, 0);\r\n    }\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(88, 120, 243, 0);\r\n    }\r\n}"}),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"\r\n.pulseBtn {\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    color: hsl(243, 80%, 62%);\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 0 0 rgba(230, 237, 255, 0.7);\r\n    -webkit-animation: pulse 1.75s infinite cubic-bezier(0.66, 0, 0, 1);\r\n            animation: pulse 1.75s infinite cubic-bezier(0.66, 0, 0, 1);\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n    to {\r\n      box-shadow: 0 0 0 30px rgba(230, 237, 255, 0);\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    to {\r\n      box-shadow: 0 0 0 30px rgba(230, 237, 255, 0);\r\n    }\r\n}"}),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".pushUpBtn {\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    color: hsl(243, 80%, 62%);\r\n    border-radius: 6px;\r\n    transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;\r\n    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);\r\n}\r\n\r\n.pushUpBtn:hover {\r\n    transform: translate3d(0px,-1px,0px);\r\n    background-color: hsl(222, 100%, 92%);\r\n    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);\r\n}"}),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:'.radiusPulse {\r\n    padding: 15px;\r\n    position: relative;\r\n}\r\n\r\n.radiusPulse::before {\r\n    content: "";\r\n    position: absolute;\r\n    top: -1px;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    left: -1px;\r\n    background-color: hsl(243, 80%, 62%);\r\n    border-radius: 50%;\r\n    transform: scale(0);\r\n    transition: transform .3s cubic-bezier(.215,.61,.355,1);\r\n}\r\n\r\n.radiusPulse::after {\r\n    content: "";\r\n    position: absolute;\r\n    top: -1px;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    left: -1px;\r\n    border: 2px solid hsl(243, 80%, 62%);\r\n    border-radius: 50%;\r\n    transform: scale(1);\r\n    opacity: 1;\r\n    transition: opacity .3s cubic-bezier(.215,.61,.355,1),transform .3s cubic-bezier(.215,.61,.355,1);\r\n}\r\n\r\n.radiusPulse:hover::before {\r\n    transform: scale(1);\r\n}\r\n\r\n.radiusPulse:hover::after {\r\n    transform: scale(1.2);\r\n    opacity: 0;\r\n}\r\n'}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".siblingFade span {\r\n    padding: 0 1rem;\r\n    transition: opacity 0.2s;\r\n}\r\n.siblingFade:hover span:not(:hover) {\r\n    opacity: 0.5;\r\n}\r\n"}),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".slideUpBtn {\r\n    padding: 12px 24px;\r\n    background-color: transparent;\r\n    border: 2px solid hsl(243, 80%, 62%);\r\n    border-radius: 6px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: all 0.5s cubic-bezier(1,.15,.34,.92)\r\n}\r\n\r\n.slideUpBtn span {\r\n    display: inline-block;\r\n    transition: inherit;\r\n    color: hsl(243, 80%, 62%);\r\n}\r\n\r\n.slideUpBtn:hover span {\r\n    opacity: 0;\r\n    transform: translateY(-100%)\r\n}\r\n\r\n.slideUpBtn::before {\r\n    content: \"\";\r\n    background-color: hsl(243, 80%, 62%);;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    transform: translateY(100%);\r\n    transition: inherit;\r\n    width: 100%;\r\n    transition: transform 0.5s cubic-bezier(1,.15,.34,.92)\r\n}\r\n\r\n.slideUpBtn::after {\r\n    content: 'Hover me';\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n    justify-content: center;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    transition: inherit;\r\n    transform: translateY(100%);\r\n    width: 100%;\r\n\r\n}\r\n\r\n.slideUpBtn:hover::before {\r\n    transform: translateY(0) scale(3);\r\n    transition-delay: .025s;\r\n}\r\n\r\n.slideUpBtn:hover::after {\r\n    opacity: 1;\r\n    color: hsl(222, 100%, 95%);\r\n    transform: translateY(0);\r\n}"}),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".snapLeftBtn {\r\n    text-align: center;\r\n    padding: 12px 24px;\r\n    background-color: hsl(222, 100%, 95%);\r\n    position: relative;\r\n    border-radius: 6px;\r\n    color: hsl(243, 80%, 62%);\r\n    overflow: hidden;\r\n}\r\n\r\n.snapLeftBtn::before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 6px;\r\n    transform: translateX(-101%);\r\n    background:hsl(243, 80%, 62%);\r\n    transition: transform .25s ease-in;\r\n}\r\n\r\n.snapLeftBtn:hover::before {\r\n    transform: translateX(0);\r\n}\r\n\r\n.snapLeftBtn span {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    transition: color 0.1s .15s ease-in;\r\n}\r\n\r\n.snapLeftBtn:hover span {\r\n    color: hsl(222, 100%, 95%);\r\n    -webkit-animation: animButtonSpan 0.4s;\r\n            animation: animButtonSpan 0.4s;\r\n}\r\n\r\n@-webkit-keyframes animButtonSpan {\r\n    0% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n    }\r\n\r\n    35% {\r\n        transform: translateX(20px);\r\n        opacity: 0;\r\n    }\r\n\r\n    50.001% {\r\n        transform: translateX(-20px);\r\n    }\r\n\r\n    60% {\r\n        transform: translateX(0px);\r\n    }\r\n\r\n}\r\n\r\n@keyframes animButtonSpan {\r\n    0% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n    }\r\n\r\n    35% {\r\n        transform: translateX(20px);\r\n        opacity: 0;\r\n    }\r\n\r\n    50.001% {\r\n        transform: translateX(-20px);\r\n    }\r\n\r\n    60% {\r\n        transform: translateX(0px);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n"}),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".swingHorizontal{\r\n    color:hsl(222, 25%, 14%);\r\n}\r\n\r\n.swingHorizontal:hover\r\n{\r\n    -webkit-animation: swingHorizontal 1s ease;\r\n            animation: swingHorizontal 1s ease;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n}\r\n\r\n@-webkit-keyframes swingHorizontal\r\n{\r\n    15%\r\n    {\r\n        transform: translateX(5px);\r\n    }\r\n    30%\r\n    {\r\n        transform: translateX(-5px);\r\n    }\r\n    50%\r\n    {\r\n        transform: translateX(3px);\r\n    }\r\n    65%\r\n    {\r\n        transform: translateX(-3px);\r\n    }\r\n    80%\r\n    {\r\n        transform: translateX(2px);\r\n    }\r\n    100%\r\n    {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes swingHorizontal\r\n{\r\n    15%\r\n    {\r\n        transform: translateX(5px);\r\n    }\r\n    30%\r\n    {\r\n        transform: translateX(-5px);\r\n    }\r\n    50%\r\n    {\r\n        transform: translateX(3px);\r\n    }\r\n    65%\r\n    {\r\n        transform: translateX(-3px);\r\n    }\r\n    80%\r\n    {\r\n        transform: translateX(2px);\r\n    }\r\n    100%\r\n    {\r\n        transform: translateX(0);\r\n    }\r\n}"}),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".textTransformX {\r\n    color: hsl(222, 25%, 14%);\r\n    transition: transform 0.2s ease, color 0.2s ease;\r\n}\r\n\r\n.textTransformX:hover {\r\n    transform: translateX(4px);\r\n    color: hsl(243, 80%, 62%);\r\n}"}),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:".visibleBorderLeftRight {\r\n    display: inline-block;\r\n    color: hsl(222, 25%, 14%);\r\n    position: relative;\r\n}\r\n\r\n.visibleBorderLeftRight::after {\r\n     content: '';\r\n     position: absolute;\r\n     width: 100%;\r\n     transform: scaleX(1);\r\n     height: 2px;\r\n     bottom: 0;\r\n     left: 0;\r\n     background-color: hsl(243, 80%, 62%);\r\n     transform-origin: bottom left;\r\n     transition: transform .3s ease-in-out;\r\n }\r\n\r\n.visibleBorderLeftRight:hover::after {\r\n     transform: scaleX(0);\r\n     transform-origin: bottom right;\r\n }\r\n"});let rr={};const nr={"./arrowBounce.css":T,"./arrowFromLeft.css":O,"./arrowScrollDown.css":N,"./borderFade.css":j,"./borderLeftRight.css":M,"./borderMarker.css":X,"./bouncingLoader.css":H,"./buttonOverlay.css":Y,"./circleScaleBtn.css":C,"./donutSpinner.css":F,"./lineThrough.css":P,"./magnifyBorder.css":A,"./magnifyBtn.css":U,"./magnifyText.css":R,"./overlayLeftBtn.css":D,"./pressDownButton.css":V,"./pulseAnim.css":I,"./pulseBtn.css":E,"./pushUpBtn.css":q,"./radiusPulse.css":Z,"./siblingFade.css":$,"./slideUpBtn.css":G,"./snapLeftBtn.css":J,"./swingHorizontal.css":K,"./textTransformX.css":Q,"./visibleBorderLeftRight.css":W};for(const xr in nr){const r=xr.replace(/(.*\/)*([^.]+).*/gi,"$2");rr[r]||(rr[r]={path:xr,label:r,value:nr[xr].default})}const tr=[{className:"borderLeftRight",category:"text",html:"Hover me"},{className:"donutSpinner",category:"animation"},{className:"pulseBtn",category:"button",html:"I'm pulsing"},{className:"siblingFade",category:"text",html:"<span>Item 1 </span><span>Item 2 </span>"},{className:"radiusPulse",category:"button"},{className:"pressDownButton",category:"button",html:"Hover me"},{className:"bouncingLoader",category:"animation",html:"<div></div>"},{className:"arrowFromLeft",category:"button",html:'<svg xmlns="http://www.w3.org/2000/svg" width="5.002" height="8.576" viewBox="0 0 5.002 8.576"><path d="M1.06,8.428a.5.5,0,0,1-.71,0l-.2-.2A.49.49,0,0,1,0,7.868V.708A.49.49,0,0,1,.15.348l.2-.2a.5.5,0,0,1,.71,0l3.79,3.79a.48.48,0,0,1,0,.7Z"/></svg><span>Hover me</span>'},{className:"borderFade",category:"text",html:"Hover me"},{className:"arrowBounce",category:"animation",html:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'},{className:"lineThrough",category:"text",html:"Hover me"},{className:"overlayLeftBtn",category:"button",html:"<span>Hover me</span>"},{className:"textTransformX",category:"text",html:"Hover me"},{className:"arrowScrollDown",category:"animation",html:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'},{className:"swingHorizontal",category:"text",html:"Hover me"},{className:"pulseAnim",category:"text"},{className:"visibleBorderLeftRight",category:"text",html:"Hover me"},{className:"slideUpBtn",category:"button",html:"<span>Hover me</span>"},{className:"circleScaleBtn",category:"button",html:"<span>Hover me</span>"},{className:"pushUpBtn",category:"button",html:"Hover me"},{className:"snapLeftBtn",category:"button",html:"<span>Hover me</span>"},{className:"magnifyBtn",category:"button",html:"Hover & click me"},{className:"magnifyText",category:"text",html:"Hover & click me"},{className:"magnifyBorder",category:"button",html:"Hover me"},{className:"borderMarker",category:"text",html:"<span>Hover me</span>"},{className:"buttonOverlay",category:"text",html:"<span>Hover me</span>"}].map((r=>{return i=((r,n)=>{for(var t in n||(n={}))o.call(n,t)&&s(r,t,n[t]);if(e)for(var t of e(n))a.call(n,t)&&s(r,t,n[t]);return r})({},r),l={css:rr[r.className]?rr[r.className].value:"--"},n(i,t(l));var i,l}));const er=i({name:"PanelCard",props:{icon:{type:String,required:!0,default:"about"},message:{type:String,required:!0,default:"Panel Card"},start:{type:Number,default:0},end:{type:Number,default:102400},duration:{type:Number,default:3e3},type:{type:String,default:"people"}},components:{CountTo:L},emits:["handleClick"],setup:(r,{emit:n})=>({handleClick:function(){n("handleClick")}})}),or=u();f("data-v-660d96e6");const ar={class:"card-panel-description"},sr={class:"card-panel-text"};b();const ir=or(((r,n,t,e,o,a)=>{const s=l("svg-icon"),i=l("count-to");return c(),d("div",{class:"card-panel",onClick:n[1]||(n[1]=(...n)=>r.handleClick&&r.handleClick(...n))},[p("div",{class:["card-panel-icon-wrapper","icon-"+r.type]},[p(s,{"icon-class":r.icon,"class-name":"card-panel-icon"},null,8,["icon-class"])],2),p("div",ar,[p("div",sr,m(r.message),1),p(i,{"start-val":r.start,"end-val":r.end,duration:r.duration,class:"card-panel-num"},null,8,["start-val","end-val","duration"])])])}));er.render=ir,er.__scopeId="data-v-660d96e6";const{ElMessage:lr}=k,cr=i({name:"Animate",components:{PageLayout:B,CountTo:L,PanelCard:er},directives:{copy:z},setup(){const r=g("first"),n=g(tr);return h((()=>{})),{animateList:n,copySuccess:function(){lr.success("复制成功")},activeName:r,handleClick:function(){console.log("handleClick")}}}}),dr=u();f("data-v-3ceeefd4");const pr={class:"section-container "},mr={class:"animate-item"},ur={key:0},fr=S(" 默认： "),br=S(" 示例一： "),gr=S(" 示例二： ");b();const hr=dr(((r,n,t,e,o,a)=>{const s=l("el-col"),i=l("el-row"),m=l("el-tab-pane"),u=l("CountTo"),f=l("panel-card"),b=l("el-tabs"),g=l("page-layout"),h=x("copy");return c(),d(g,{title:"动画组件的简单使用",subtitle:"非常实用的Vue动画组件(本页面所用css 均来自于 ： https://emilkowalski.github.io/css-effects-snippets/)"},{body:dr((()=>[p("div",pr,[p(b,{modelValue:r.activeName,"onUpdate:modelValue":n[1]||(n[1]=n=>r.activeName=n)},{default:dr((()=>[p(m,{label:"常用css动画",name:"first"},{default:dr((()=>[p(i,{gutter:10},{default:dr((()=>[(c(!0),d(y,null,v(r.animateList,(n=>(c(),d(s,{xs:12,sm:8,md:6,lg:4,xl:4,key:n.className},{default:dr((()=>[_(p("div",mr,[p("div",{class:n.className,innerHTML:n.html},null,10,["innerHTML"])],512),[[h,n.css,"copy"],[h,r.copySuccess,"success"]])])),_:2},1024)))),128))])),_:1})])),_:1}),p(m,{label:"数字动画",name:"second"},{default:dr((()=>["second"===r.activeName?(c(),d("div",ur,[p(i,{gutter:40,class:"panel-group"},{default:dr((()=>[p(s,{span:8,class:"card-panel-col"},{default:dr((()=>[fr,p(u,{duration:2e3,"start-val":1,"end-val":9527})])),_:1}),p(s,{span:8,class:"card-panel-col"},{default:dr((()=>[br,p(u,{prefix:"￥",duration:2e3,color:"#f4516c",fontSize:"2.5em","start-val":0,"end-val":9527},null,8,["fontSize"])])),_:1}),p(s,{span:8,class:"card-panel-col"},{default:dr((()=>[gr,p(u,{suffix:"-test",duration:2e3,color:"red",fontSize:"2.5em","start-val":0,"end-val":9527},null,8,["fontSize"])])),_:1})])),_:1}),p(i,{gutter:40,class:"panel-group"},{default:dr((()=>[p(s,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:dr((()=>[p(f,{icon:"application",start:0,end:9527,duration:2600,message:"App Nums",onHandleClick:r.handleClick},null,8,["onHandleClick"])])),_:1}),p(s,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:dr((()=>[p(f,{icon:"money",start:0,end:9527e3,duration:4e3,type:"money",message:"Revenue"})])),_:1}),p(s,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:dr((()=>[p(f,{icon:"peoples",start:0,end:81212,duration:3e3,type:"message",message:"User Nums"})])),_:1}),p(s,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:dr((()=>[p(f,{icon:"shopping",start:0,end:13600,duration:3600,type:"shopping",message:"Product Nums"})])),_:1})])),_:1})])):w("",!0)])),_:1})])),_:1},8,["modelValue"])])])),_:1})}));cr.render=hr,cr.__scopeId="data-v-3ceeefd4";export default cr;
