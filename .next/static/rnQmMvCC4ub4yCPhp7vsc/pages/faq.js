(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{Ix5F:function(e,t,n){"use strict";var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),l=n("Tit0"),c=n("q1tI"),u=n.n(c),d=n("YFqc"),s=n.n(d),p=u.a.createElement,m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.breadcrumbTextOne,r=e.breadcrumbTextTwo,a=e.breadcrumbUrl;return p("div",{className:"page-title-area"},p("div",{className:"d-table"},p("div",{className:"d-table-cell"},p("div",{className:"container"},p("div",{className:"page-title-content"},p("h2",null,t),p("ul",null,p("li",null,p(s.a,{href:a},p("a",null,n))),p("li",null,r)))))))}}]),t}(c.Component);t.a=m},csvi:function(e,t,n){"use strict";n.r(t);var r,a=n("0iUn"),o=n("sLSF"),i=n("MI3g"),l=n("a7VT"),c=n("Tit0"),u=n("q1tI"),d=n.n(u),s=n("pFRj"),p=n("Ix5F");function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?w(e):t}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(r||(r={}));var j=r,I=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,i=void 0!==o&&o,l=t.allowZeroExpanded,c=void 0!==l&&l;m(this,e),b(this,"expanded",void 0),b(this,"allowMultipleExpanded",void 0),b(this,"allowZeroExpanded",void 0),b(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(O(n.expanded),[e]):[e]})})),b(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),b(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),b(this,"getPanelAttributes",(function(e){var t=n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!t:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!t||void 0}})),b(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),b(this,"getButtonAttributes",(function(e){var t=n.isItemExpanded(e),r=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":r,"aria-expanded":t,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),b(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),b(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),b(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=c},N=Object(u.createContext)(null),P=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"state",new I({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),b(w(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),b(w(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),b(w(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),b(w(n),"getPanelAttributes",(function(e){return n.state.getPanelAttributes(e)})),b(w(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),b(w(n),"getButtonAttributes",(function(e){return n.state.getButtonAttributes(e)})),n}return v(t,e),h(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(u.createElement)(N.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(u.PureComponent);b(P,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var C=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return v(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(N.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),k=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"renderAccordion",(function(e){var t=n.props,r=(t.preExpanded,t.allowMultipleExpanded,t.allowZeroExpanded,t.onChange,x(t,["preExpanded","allowMultipleExpanded","allowZeroExpanded","onChange"]));return Object(u.createElement)("div",g({"data-accordion-component":"Accordion"},r))})),n}return v(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(P,{preExpanded:this.props.preExpanded,allowMultipleExpanded:this.props.allowMultipleExpanded,allowZeroExpanded:this.props.allowZeroExpanded,onChange:this.props.onChange},Object(u.createElement)(C,null,this.renderAccordion))}}]),t}(u.Component);b(k,"defaultProps",{allowMultipleExpanded:void 0,allowZeroExpanded:void 0,onChange:void 0,className:"accordion",children:void 0}),b(k,"displayName",j.Accordion);var T=0,_=T;var M=Object(u.createContext)(null),D=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),b(w(n),"renderChildren",(function(e){var t=n.props.uuid,r=e.isItemExpanded(t),a=e.isItemDisabled(t),o=e.getPanelAttributes(t),i=e.getHeadingAttributes(t),l=e.getButtonAttributes(t);return Object(u.createElement)(M.Provider,{value:{uuid:t,expanded:r,disabled:a,toggleExpanded:n.toggleExpanded,panelAttributes:o,headingAttributes:i,buttonAttributes:l},children:n.props.children})})),n}return v(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(C,null,this.renderChildren)}}]),t}(u.Component),q=function(e){return Object(u.createElement)(C,null,(function(t){return Object(u.createElement)(D,g({},e,{accordionContext:t}))}))},B=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return v(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(M.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),H=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"instanceUuid",function(){var e=_;return _+=1,e}()),n}return v(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=x(e,["uuid"]);return Object(u.createElement)(q,{uuid:n},Object(u.createElement)("div",g({"data-accordion-component":"AccordionItem"},r)))}}]),t}(u.Component);function S(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}b(H,"defaultProps",{className:"accordion__item"}),b(H,"displayName",j.AccordionItem);var Z={DOWN:"40",END:"35",ENTER:"13",HOME:"36",LEFT:"37",RIGHT:"39",SPACE:"32",UP:"38"},F=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"handleKeyPress",(function(e){var t=e.which.toString();if(t!==Z.ENTER&&t!==Z.SPACE||(e.preventDefault(),n.props.toggleExpanded()),e.target instanceof HTMLElement)switch(t){case Z.HOME:e.preventDefault(),function(e){var t=(S(e)||[])[0];t&&t.focus()}(e.target);break;case Z.END:e.preventDefault(),function(e){var t=S(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case Z.LEFT:case Z.UP:e.preventDefault(),function(e){var t=S(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case Z.RIGHT:case Z.DOWN:e.preventDefault(),function(e){var t=S(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}})),n}return v(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.toggleExpanded,n=x(e,["toggleExpanded"]);return Object(u.createElement)("div",g({},n,{onClick:t,onKeyDown:this.handleKeyPress,"data-accordion-component":"AccordionItemButton"}))}}]),t}(u.PureComponent);b(F,"defaultProps",{className:"accordion__button"});var R=function(e){return Object(u.createElement)(B,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(u.createElement)(F,g({toggleExpanded:n},e,r))}))};R.displayName=j.AccordionItemButton;var L=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"ref",void 0),b(w(n),"setRef",(function(e){n.ref=e})),n}return v(t,e),h(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(u.createElement)("div",g({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(u.PureComponent);b(L,"defaultProps",{className:"accordion__heading","aria-level":3});var U=function(e){return Object(u.createElement)(B,null,(function(t){var n=t.headingAttributes;return Object(u.createElement)(L,g({},e,n))}))};U.displayName=j.AccordionItemHeading;var Q=function(e){function t(){var e,n;m(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return b(w(n=A(this,(e=E(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){var t=e.panelAttributes;return Object(u.createElement)("div",g({"data-accordion-component":"AccordionItemPanel"},n.props,t))})),n}return v(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(B,null,this.renderChildren)}}]),t}(u.Component);b(Q,"defaultProps",{className:"accordion__panel"}),b(Q,"displayName",j.AccordionItemPanel);u.Component,n("QYuT");var V=d.a.createElement,W=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return V("section",{className:"faq-section ptb-100"},V("div",{className:"container"},V("div",{className:"section-title"},V("span",null,"Faq"),V("h2",null,"Frequently Asked Questions")),V("div",{className:"faq-accordion"},V(k,null,V(H,null,V(U,null,V(R,null,"A satisfied customer is the best business strategies")),V(Q,null,V("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))),V(H,null,V(U,null,V(R,null,"We challenge everything")),V(Q,null,V("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),V(H,null,V(U,null,V(R,null,"Cooperation is our best policy")),V(Q,null,V("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),V(H,null,V(U,null,V(R,null,"Read the most popular medical news & article?")),V(Q,null,V("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")))))))}}]),t}(u.Component),Y=d.a.createElement,K=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Y("div",{className:"faq-contact-section pb-100"},Y("div",{className:"container"},Y("div",{className:"section-title"},Y("h2",null,"Do You Have Any Questions")),Y("div",{className:"faq-contact-form"},Y("div",{className:"contact-form"},Y("form",{id:"contactForm"},Y("div",{className:"row"},Y("div",{className:"col-lg-6 col-md-6"},Y("div",{className:"form-group"},Y("input",{type:"text",id:"name",className:"form-control",required:!0,placeholder:"Name"}))),Y("div",{className:"col-lg-6 col-md-6"},Y("div",{className:"form-group"},Y("input",{type:"email",id:"email",className:"form-control",required:!0,placeholder:"Email"}))),Y("div",{className:"col-lg-6 col-md-6"},Y("div",{className:"form-group"},Y("input",{type:"text",id:"phone_number",required:!0,className:"form-control",placeholder:"Phone"}))),Y("div",{className:"col-lg-6 col-md-6"},Y("div",{className:"form-group"},Y("input",{type:"text",id:"msg_subject",className:"form-control",required:!0,placeholder:"Subject"}))),Y("div",{className:"col-lg-12 col-md-12"},Y("div",{className:"form-group"},Y("textarea",{name:"message",className:"form-control",id:"message",rows:"6",required:!0,placeholder:"Your Message"}))),Y("div",{className:"col-lg-12 col-md-12 mt-2"},Y("button",{type:"submit",className:"submit-btn"},"Send Message"))))))))}}]),t}(u.Component),G=n("g7ta"),J=d.a.createElement,X=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return J(d.a.Fragment,null,J(s.a,null),J(p.a,{pageTitle:"Frequently Asked Questions",breadcrumbTextOne:"Home",breadcrumbTextTwo:"Faq",breadcrumbUrl:"/"}),J(W,null),J(K,null),J(G.a,null))}}]),t}(u.Component);t.default=X},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("csvi")}])}},[["l//U",1,2,0,37,8]]]);