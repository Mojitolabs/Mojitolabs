(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2RFb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=d(n("q1tI")),r=d(n("i8i4")),s=n("17x9"),l=n("dwFv"),c=d(n("b7n0")),u=d(n("j5U0")),f=d(n("Ci6P"));function d(e){return e&&e.__esModule?e:{default:e}}var p=0,m=0,g={listeners:[],pending:[]},v=!1;try{var h=Object.defineProperty({},"passive",{get:function(){v=!0}});window.addEventListener("test",null,h)}catch(R){}var A=!!v&&{capture:!1,passive:!0},b=function(e){var t=r.default.findDOMNode(e);if(t){var n=(0,f.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=r.default.findDOMNode(e),o=void 0,i=void 0;try{var a=t.getBoundingClientRect();o=a.top,i=a.height}catch(R){o=p,i=m}var s=window.innerHeight||document.documentElement.clientHeight,l=Math.max(o,0),c=Math.min(s,o+i)-l,u=void 0,f=void 0;try{var d=n.getBoundingClientRect();u=d.top,f=d.height}catch(R){u=p,f=m}var g=u-l,v=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return g-v[0]<=c&&g+f+v[1]>=0}(e,n):function(e){var t=r.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var i=t.getBoundingClientRect();n=i.top,o=i.height}catch(R){n=p,o=m}var a=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-s[0]<=a&&n+o+s[1]>=0}(e))&&(e.visible||(g.pending.push(e),e.visible=!0,e.setState({stopped:!1}),e.forceUpdate()))}},y=function(){g.listeners.forEach((function(e){return b(e)})),g.pending.forEach((function(e){return(0,c.default)(g.listeners,e)})),g.pending=[]},w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.customStyle=function(e){var t=n.props,o=t.duration,i=t.delay,a=t.iteration,r=t.animation,s=t.disabled,l={animationName:e?"none":r,visibility:e&&!s?"hidden":"visible"};return o&&(l.animationDuration=o),i&&(l.animationDelay=i),a&&(l.animationIterationCount=a),l},n.resetAnimation=function(e){-1!==e.type.toLowerCase().indexOf("animationend")&&n.setState({stopped:!0},(function(){var e=n.props.callback;"function"===typeof e&&e.call(n,r.default.findDOMNode(n))}))},n.visible=!1,n.state={stopped:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,f.default)(r.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute("data-react-wow")+1;1===t&&(0,l.on)(e,"scroll",y,A),e.setAttribute("data-react-wow",t)}}else if(!g.listeners.length){var n=this.props,o=n.scroll,i=n.resize;o&&(0,l.on)(window,"scroll",y,A),i&&(0,l.on)(window,"resize",y,A)}g.listeners.push(this),b(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,f.default)(r.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute("data-react-wow")-1;0===t?((0,l.off)(e,"scroll",y,A),e.removeAttribute("data-react-wow")):e.setAttribute("data-react-wow",t)}}(0,c.default)(g.listeners,this),g.listeners.length||((0,l.off)(window,"scroll",y,A),(0,l.off)(window,"resize",y,A))}},{key:"mergeProps",value:function(e){var t=this.props,n=t.animation,i=t.animateClass,a=this.customStyle(!this.visible),r=this.visible?n+" "+(this.state.stopped?"":i):n;return o({},e,{style:o({},e.style,a),className:(0,u.default)((e.className?e.className:"")+" "+r),onAnimationEnd:this.resetAnimation})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children;return t.disabled?n:n?a.default.Children.map(n,(function(t){return a.default.cloneElement(t,e.mergeProps(t.props))})):null}}]),t}(a.default.Component);w.propTypes={duration:s.string,delay:s.string,iteration:s.string,animation:s.string,children:s.node,scroll:s.bool,resize:s.bool,animateClass:s.string,offset:(0,s.oneOfType)([s.number,(0,s.arrayOf)(s.number)]),overflow:s.bool,callback:s.func},w.defaultProps={duration:"",delay:"",iteration:"",animation:"",scroll:!0,resize:!0,animateClass:"animated",offset:0,overflow:!1,disabled:!1,callback:function(){}},t.default=w},Ci6P:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(o),a=i.position,r=i.overflow,s=i["overflow-x"],l=i["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(r)&&n.test(s)&&n.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},SnAM:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="},b7n0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=e.indexOf(t);-1!==n&&e.splice(n,1)}},cmlh:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="},dwFv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.on=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},ia68:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="},j5U0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.trim().split(" ");return t.filter((function(e,n){return!!e&&t.indexOf(e)===n})).join(" ")}},"wh+f":function(e,t,n){"use strict";var o=n("0iUn"),i=n("sLSF"),a=n("MI3g"),r=n("a7VT"),s=n("Tit0"),l=n("q1tI"),c=n.n(l),u=n("2RFb"),f=n.n(u),d=c.a.createElement,p=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return d("div",{className:"fun-facts-area ptb-100"},d("div",{className:"container"},d("div",{className:"row"},d("div",{className:"col-lg-3 col-sm-6"},d(f.a,{animation:"fadeInUp",delay:".2s"},d("div",{className:"single-fun-fact"},d("h3",null,"820",d("span",{className:"sign-icon"},"+")),d("p",null,"Data Analytics")))),d("div",{className:"col-lg-3 col-sm-6"},d(f.a,{animation:"fadeInUp",delay:".3s"},d("div",{className:"single-fun-fact"},d("h3",null,"150",d("span",{className:"sign-icon"},"+")),d("p",null,"Data Management")))),d("div",{className:"col-lg-3 col-sm-6"},d(f.a,{animation:"fadeInUp",delay:".4s"},d("div",{className:"single-fun-fact"},d("h3",null,"20",d("span",{className:"sign-icon"},"+")),d("p",null,"Managed  Analytics")))),d("div",{className:"col-lg-3 col-sm-6"},d(f.a,{animation:"fadeInUp",delay:".5s"},d("div",{className:"single-fun-fact"},d("h3",null,"120",d("span",{className:"sign-icon"},"+")),d("p",null,"Big Data")))))))}}]),t}(l.Component);t.a=p}}]);