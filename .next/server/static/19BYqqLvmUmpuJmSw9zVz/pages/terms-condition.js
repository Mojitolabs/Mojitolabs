module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "/zF+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partnar-shape-2-8bcc99a2be5a6b5d0e3e1bf5b23db1ab.png";

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OaeJ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "EaQB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "IS36":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Ix5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PageBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let {
      pageTitle,
      breadcrumbTextOne,
      breadcrumbTextTwo,
      breadcrumbUrl
    } = this.props;
    return __jsx("div", {
      className: "page-title-area"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "page-title-content"
    }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: breadcrumbUrl
    }, __jsx("a", null, breadcrumbTextOne))), __jsx("li", null, breadcrumbTextTwo)))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PageBanner);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "OaeJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 1 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__("Ix5F");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/TermsCondition/TermsConditionContent.js
var __jsx = external_react_default.a.createElement;



class TermsConditionContent_TermsConditionContent extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "privacy-policy ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "single-privacy"
    }, __jsx("h3", {
      className: "mt-0"
    }, "Welcome to Raxr Terms & Conditions"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."), __jsx("h3", null, "What is Lorem Ipsum?"), __jsx("p", null, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain."), __jsx("p", null, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."), __jsx("h3", null, "Why do we use it?"), __jsx("p", null, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."), __jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"))));
  }

}

/* harmony default export */ var TermsCondition_TermsConditionContent = (TermsConditionContent_TermsConditionContent);
// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// CONCATENATED MODULE: ./pages/terms-condition.js
var terms_condition_jsx = external_react_default.a.createElement;






class terms_condition_TermsCondition extends external_react_["Component"] {
  render() {
    return terms_condition_jsx(external_react_default.a.Fragment, null, terms_condition_jsx(Navbar["a" /* default */], null), terms_condition_jsx(PageBanner["a" /* default */], {
      pageTitle: "Terms & Conditions",
      breadcrumbTextOne: "Home",
      breadcrumbTextTwo: "Terms & Conditions",
      breadcrumbUrl: "/"
    }), terms_condition_jsx(TermsCondition_TermsConditionContent, null), terms_condition_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var terms_condition = __webpack_exports__["default"] = (terms_condition_TermsCondition);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g7ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
      className: "footer-section ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "About Us")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("ul", {
      className: "footer-social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-pinterest"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-linkedin"
    }))))))), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "Important Links")), __jsx("ul", {
      className: "footer-quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("a", null, "Project"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "services"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/team"
    }, __jsx("a", null, "Team"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact")))))), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "Featured Service")), __jsx("ul", {
      className: "footer-quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Blog"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, "Client"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact")))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "Contact Info")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-call-answer"
    }), __jsx("h3", null, "Phone"), __jsx("span", null, "+123(456)123")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-envelope"
    }), __jsx("h3", null, "Email"), __jsx("span", null, "helloraxro@gmail.com")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-maps-and-flags"
    }), __jsx("h3", null, "Address"), __jsx("span", null, "32 st Kilda Road, Melbourne VIC, 3004 Australia")))))), __jsx("div", {
      className: "lines"
    }, __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    })), __jsx("div", {
      className: "partner-shape-img1"
    }, __jsx("img", {
      src: __webpack_require__("/zF+"),
      alt: "image"
    }))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "\xA9 ", currentYear, " Raxr. All Rights Reserved by", __jsx("a", {
      href: "https://envytheme.com/",
      target: "_blank"
    }, "EnvyTheme"))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-condition"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy"
    }, __jsx("a", null, "Privacy Policy")))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "pFRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(link_default.a, props, external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/Layouts/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Navbar_Navbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("div", {
      id: "navbar",
      className: "navbar-area"
    }, Navbar_jsx("div", {
      className: "main-nav"
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/"
    }, Navbar_jsx("a", {
      className: "navbar-brand"
    }, Navbar_jsx("img", {
      src: __webpack_require__("EaQB"),
      className: "white-logo",
      alt: "logo"
    }), Navbar_jsx("img", {
      src: __webpack_require__("IS36"),
      className: "black-logo",
      alt: "logo"
    }))), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "navbar-toggler-icon"
    })), Navbar_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home ", Navbar_jsx("i", {
      className: "fas fa-chevron-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown-menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home One"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/index2",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home Two"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/index3",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home Three"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/index4",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home Four"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/about-us",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About us"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Services ", Navbar_jsx("i", {
      className: "fas fa-chevron-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown-menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/services",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Services"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/service-details",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Service Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Projects ", Navbar_jsx("i", {
      className: "fas fa-chevron-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown-menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/projects",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Projects"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/project-details",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Project Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Pages ", Navbar_jsx("i", {
      className: "fas fa-chevron-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown-menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/about-us",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About Us"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/team",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Team"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/pricing",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Pricing"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/partner",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Partner"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/faq",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "FAQ"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/error",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "404 error"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/coming-soon",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Coming Soon"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "#"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog ", Navbar_jsx("i", {
      className: "fas fa-chevron-down"
    }))), Navbar_jsx("ul", {
      className: "dropdown-menu"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/blog",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog Grid"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/blog2",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog Right Sidebar"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/blog3",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog Left Sidebar"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/blog-details",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Blog Details"))))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/contact",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact Us")))), Navbar_jsx("div", {
      className: "others-options"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/pricing"
    }, Navbar_jsx("a", {
      className: "default-btn"
    }, "Free Quote", Navbar_jsx("span", null))))))))));
  }

}

/* harmony default export */ var Layouts_Navbar = __webpack_exports__["a"] = (Navbar_Navbar);

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });