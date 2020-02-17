module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		40: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+TY7":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCACWAJYDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFB//aAAgBAQAAAAD7KAAAAAAAAAAAAAAAAAAAAAAAAABGc6IzvYAOLOmmkc8esAFcbWWxtsAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAAAAAAAAAAAAAAAP/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAxAAAAAAAAAAAAAAAAAAAAAP/8QALhAAAgIBAgQDBgcAAAAAAAAAAQIDEQASMQQhQVEFEyIjMGFwcYEQFDJykdHw/9oACAEBAAE/APk6zBVLMQABZJ6ZJPBGQHlRSdtTAY0sSBS0iqG2s1f46hqC2LIsDPzEGvR50eq606hf8YskbMUV1LLuAeY954jGH4Oey3pQkUavl175xEbtO7oYToiFqws7k/b657Kd3d0Gk8IhUEbBrvHLHw5XMhVhEj6r6qL55wLtJCZHYlnYkrf6elZ5YXxBXBYloXuzfVdu2KHifzPYurzkChbDUaHPOHVVXw5lADMDqIHM+mzf3946K6Mji1YUR8Ml4WCZgzpZArcix2PfJeGgl064wdIodOXb6Y8UbqFdbUEED9u2JGiM5UUXOpue5wopcPXqAKg/Bq/rBwvDiXzBH6ru7NX3ra8j4aCNy6IAx6/7b5P/AP/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ASf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ASf/Z"

/***/ }),

/***/ "/Arq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-banner-shape2-726bc8d79749f3a9ee4a81d1e9185d8d.png";

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/huC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

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

/***/ "/oDF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-image3-38f603fa826d22343bdf222b9d3cfdf5.png";

/***/ }),

/***/ "/q0W":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape11-e946c10a7c3ffef7e636ece48e1ad0ce.png";

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

/***/ "0S//":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FrA1");


/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "2cPZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/testimonial-shape-2-b8b1b92b77f0b5ab2e8e8a0451c0cd15.png";

/***/ }),

/***/ "2glx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SolutionsTab extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("div", {
      className: "tab-section ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "tab solutions-list-tab"
    }, __jsx("ul", {
      className: "tabs"
    }, __jsx("li", {
      className: "current",
      onClick: e => this.openTabSection(e, 'tab1')
    }, __jsx("span", null, "Research & Solution")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab2')
    }, __jsx("span", null, "Design & Strategy")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab3')
    }, __jsx("span", null, "Analytics AI")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab4')
    }, __jsx("span", null, "Cloud Deployment"))), __jsx("div", {
      className: "tab_content"
    }, __jsx("div", {
      id: "tab1",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7"
    }, __jsx("div", {
      className: "tab-solution-content"
    }, __jsx("h3", null, "Enterprise AI & Data Platform Solutions"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry."), __jsx("ul", {
      className: "tab-list"
    }, __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Innovation idea the latest business technology"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Safe secure services for your online email account"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "default-btn"
    }, "Read More ", __jsx("span", null)))))), __jsx("div", {
      className: "col-lg-5"
    }, __jsx("div", {
      className: "tab-image-right"
    }, __jsx("img", {
      src: __webpack_require__("grc4"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab2",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-5"
    }, __jsx("div", {
      className: "tab-image-left"
    }, __jsx("img", {
      src: __webpack_require__("grc4"),
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-7"
    }, __jsx("div", {
      className: "tab-solution-content"
    }, __jsx("h3", null, "Design & Strategy Data Platform Solutions"), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."), __jsx("ul", {
      className: "tab-list"
    }, __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Innovation idea the latest business technology"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Safe secure services for your online email account"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "default-btn"
    }, "Read More ", __jsx("span", null)))))))), __jsx("div", {
      id: "tab3",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7"
    }, __jsx("div", {
      className: "tab-solution-content"
    }, __jsx("h3", null, "Analytics AI & Data Platform Solutions"), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."), __jsx("ul", {
      className: "tab-list"
    }, __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Innovation idea the latest business technology"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Safe secure services for your online email account"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "default-btn"
    }, "Read More ", __jsx("span", null)))))), __jsx("div", {
      className: "col-lg-5"
    }, __jsx("div", {
      className: "tab-image-right"
    }, __jsx("img", {
      src: __webpack_require__("grc4"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab4",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-5"
    }, __jsx("div", {
      className: "tab-image-left"
    }, __jsx("img", {
      src: __webpack_require__("grc4"),
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-7"
    }, __jsx("div", {
      className: "tab-solution-content"
    }, __jsx("h3", null, "Cloud Deployment AI & Data Platform Solutions"), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."), __jsx("ul", {
      className: "tab-list"
    }, __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Innovation idea the latest business technology"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Safe secure services for your online email account"), __jsx("li", null, __jsx("i", {
      className: "flaticon-tick-1"
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "default-btn"
    }, "Read More ", __jsx("span", null))))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (SolutionsTab);

/***/ }),

/***/ "37O5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "4M+Y":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "6SNM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/testimonial-shape-1-d3061a8712b41838f00aa373736fd9ef.png";

/***/ }),

/***/ "7Ywq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Customers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "partner-section pt-100 pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "partner-title"
    }, __jsx("span", null, "Customer"), __jsx("h2", null, "Discover Customer Successful Stories")), __jsx("div", {
      className: "partner-list"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("sPoK"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("SnAM"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("cmlh"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("pNIi"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("ia68"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("ia68"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("otcV"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("/huC"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("U3Yi"),
      alt: "image"
    })))))), __jsx("div", {
      className: "partner-shape"
    }, __jsx("img", {
      src: __webpack_require__("Md3M"),
      alt: "main-image"
    })), __jsx("div", {
      className: "partner-shape-img1"
    }, __jsx("img", {
      src: __webpack_require__("/zF+"),
      alt: "image"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Customers);

/***/ }),

/***/ "7h8k":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACRCAYAAAA1vR3+AAARMUlEQVR42u2deXAb93XHPaOxpupo4kYzjqZ2lWgUq3U1deJx49FEw8RHHLmMUrFhZdMqXZqSKIqTw3YsSjzEEzwA4t4F9gAWe+LiCYCHGsceT+KcduwkY7WxEzdjuYmTyHZ8RUoUiyLV91sAFASDwILhAgvx98d3bFIksNzPvve+7/1+2L1GluVrjKquzq57aZJ+SeCFi/D1pbQkSbrko3yvDfQO1Bv5+Feish9AX1ff/X3dfU1trW2b098bNA12sV72dUmUFjNBZAuBYSn2zd6u3joM5C9Qx7GObR6n55QoiAvopMqSfEkUxUWWZt/2Mb5380FYDozdbB/FQFag7s7u+0RevFjsSdciy5BlGAMpQq1HWz+WXQ9WUyji2tvaP4KBaJRjxHFSLxhpEU7iOQxEozgfd05vIHyAv9B9ovuvMBANKuSaVkPoPQBIFQZSQO3H2z+E3JTeQJD6e/sbMJACGu4bfrAUMFCE9HT13IaBFNBQ/9DDpQDi9/nfw0VdS4T0D39VdyCQEs0D5iYMxCBAbBY7hRtDrUBMw1/TE0ZQlhfw6KQ4IF/RGchFU2fnOgxEoyC3d+iaskTxAo6QImQfsU9iIAYC4rA6ZnUFwvNvYyBFyGl16gpE4bj/wUCKi5BpXYGw7FEMpAi5HK5v6wZDlhdNvb1/g4EUIS/pfUUvIBFZvirqR2mBEPoBYUiiDQMxSISEef65qwVGSYFQHurVVVs7DwR+K/r9P3NYLHfhfVkrFKx1/2gVi/hbsqKcD4ZCvxQEQR6xWu/DQIp1WXbX47raXgBEM0wjBqIdyDdLsUAFEfMEBqJllmWxk6UAkoLyNAZSaAnXNFRXKiDqdiBBiGMghbYBoX28JYQS4PnDGEgewTbS+VICUaEIQj0GsoxoD/1iqYGA+1ocHh7egoHkKux2h6vUQFJaHDab/x4DyVIwHD5dJiAqFIfTWYWBZAiljzICSdaUQKARAwGxPp+n3DAyoHSveSChcPgdowBJNY/fWbNAzBbLJ4yQrnJ8NvG3axKI0+0mjAYjwxZfJAjis2sKCIzJ3zAqkCUwweBP104NKVO6CgaD54v8nQUuEJgozcbBkaqyAIE1iqNlSkVvqeMaQXh+JWnMz/M2Pc6HzWL5NCywXQjCezhGRq4tORBBFH9RjnGJmyD+eumioOm2lUSpCobjTq7GeWA8ntaQJL2XuXUp/W9Ws/kmwuF4zNTff63uQMKRyPlSA2EYZtcHFsgI4sOSLK/0U8CL4MjOkCR574osvyie+UAvRHlPqBPwQOC5FJxLQ0NDd+p7H5O+vh2ltrtw4l4uELHf+AujbwFuA3IaoAsut/vGvFFBkh5FkhayXyMqSb+UeP4XaRCZn2/RFYg/EGjLu8EtGv39qjd8oviTgnncZtsCBX+13ntBUpQ/wIl/ORgIPBXkkfifwNealxqCknQhzHFUUBBO692d5y2oTqfzNjgxf1xNIKIkzRZhOA5AbXm/nHYbIuN90BI8fWtIMHg2X+irG+i8XvuqfgrX7y96eAhFvx/6kHNl74XAfendfyx7oxmIntcypsALq/iHrXx3JUXdCPXh1+UY86AooVyue/VrfByOW+APW94J+XwWuJo7IWWt5t2BFlfr+ME2t8Lxo+2vC6WCEgoEfqDfTkWP55G8bx4Kva9D/zGvm0HhuCjP86fBxZ1NRfSqRpEiCG+7Rka26Le5mqJCZWgIS/bRaIvF8hGr1boTtrF+zm63N4BanDbbEYfN1qz4/Rw4pmcVUXxNBge1LDxJWgQQv4Pf2ad7p07R9BNlKo6GXHhy2azXel2uT4D+0ety3lry4SI0Ti+UaYb1Dt5KmjvnviiXb40DLdN+DwNJCU7G00ZYIUQ1BZzc4JoFAi7EAzZ2XjbY4hMc01mKomrWDBBwG7Wjo6PvygZfFQTL+n9XNRCwfjeHw+GX8jWABlxDX4RufPKqAwJpYBK0UCkgcqSxeVjfOFLxQGCHRlekDItOOoJ5B8D8U8UBgYP+DIA4c7WAyAHmZxUBpL29fcPExMSP4IAXr1YYmTaZ4zjesECg+MEMMDR/tYPItX2IZdlGwwCBQdnhsbGx99YaiBw2+bWyAhkYGLgtEgm/stZBZNtkAPNkyYFAavqvSraxJUhjF2GpV/cxzDVut/tfo9HoOXzSNYPRNY2hyFjEJ7o4+ZIfPtItZeGTXKTAGv8YAzGQWJ//GQzEWEB+iIEYCQiLgRhKDOt7GgMxksvihFMYiJFGKrKy2Ndv2oyBGEiDg0PVGIiBZDKZPomBGEZqyroRAzFODbmIi7qBJMqhcxiIkfoQH3caAzGQSC/zXQzEWEC+gYEYSB6afRwDMZAohsURYiggNHsSAzEWkDkMxFhAZjAQA8lLsdMYiKGA0BiIwYDEMRAj9SEUHcNAMBCs5Ucn1AQGYiQgHgzEUCI81DgGYiC5PdQYBmIkICQVxUAMBcSLgRhJLtIbwUCMFSFhDGTtpCwFn+Qi5XR7LboBYYRRpxyMzOMTrU2RsYkzPX0D63X9WDQpxu+SQhNv4ROe7/PqcGuR0fhTun8s2hmIfdzJxz9HCPEv+kOJUYiW9zGArI9CR8bP0HK8g4RzZKOUOx997Ng63YAQYuJBt5B4CAT/jX+RlKYfCIRjz8lKCN9EABSQx38O5+XTpBB7CHSEDs0e6THZPqYbEFKaeQABgQhpQII3h6/j93ikxFfE0MRv1nrRp6XJUUKI1XjEqcOgI3Rw7nC3aeTvdAMywkQ/Sspz/0ZI0wdSUBAciJh4PeheNpggpdDomrzTA/qkFCXF2j1CrB7BoKTEl13+sTvbukzrdC3q7b3mD9l8Y1UeefY/IYUdSkNJgontJYTEF/zB2KwcDK8pNybIkbOkGPt3Sk4c8cozD1g8wj/IcgnvBtRpsv6tR5mr9sgzBwgxfkCFIsYbkdx87F8gjR3iQ1MvygZ8aueK3VNk9GwkGMr5nJOwHH7VLU7vtlLKzmMdPRv0hiEvd78sMyneBLXlPo8y2wRQDqWhgP4D0tjnaSXRJYbG36xoGGBjxWj8SScd7VGk3I+kiMihM+2DzvWlACEXuqPcsfbu9QDmU+C6HiSlxGHoVQ6kBWlsH4CqZpUYDzb5zxXpnpTxXzt8k7tFUVo22sOi+F4pYcha7rnYM+zeBFFxl1eZRTCaL4OJHQQwtaQUrwuEYt+vNJvsV6aedXnkp/L9TAjuwWjp67vJUEDS6rdSWwl+qgbqyyEAcigNBdIYssrVXineLIQmf1UpNpmVJp4JBAo/SW1kYKDLkECQjp/oX2/3je0AN3Y/FPjmJJjYwaRUy7ybUeI2KTRmkNuO53vkkqKpBkYDgZcMCyStLpN1o52NVkHRb0ymsTSUZBpD9cUXjI+WzyYrl5To5Ctg1R+Xl73nlaRpRBRKPtKuMu793tlnuZ6UZ6rBozcBjKZMMC7oXyCKGsEmP48cTcnmTuHRc2wwTjqFxO2MOEXmbviCiywr/kFzt24d2V8RQNIaJgLbPNJ0rVeZab4SjNrtA7D415NjGB37iVB4ng/HT0J07oEorQMgdwvSWHiZYn3B7eCe0fraIV76eY+V3jTooKuGHPRdGfrsoJ361ICd3t5vpTcaBghSa9uJdWZC+GewyPWkWl8uRwvMgvaj+RjUF0oKRVf1yZ5oLC5Fpk6haHTx8T3o/TzydK2TDkclMXd/Ac8MXOzvGeqRJG3vEZaVeVaZOQgp+hBcdF9Oy6PMtICaQfD92YdcgckvOf3jn+zoGd5QdiBL9WXAfh1coVVwwAezwaT6lz1cKPbEatQXJTL+BqMkOl18bDcyFamobIT32OvzS3kfGCC4qXp4vrDmi4OXxsMuIfGllMPMpWZVUqLFG5y730xKWw0BJMMmb3Hxk3sATFZ9gTEMQIH+pVEIT65oDKOEoue5cFyE19mNIGe8fhNExz43E6UKXf2jft+TZgvxwtLdGfI0iKrbkoNvwFT8C3mAZKrFq8wdNHukLYYBgvT11rZ1/SOe7XBw+6DGZNcXdCVXwxhmUOsYRgmGFvhw7Fvwu7UwW6vNjD4QujobHf6JmxlW7bALpCH5vMMd+JZa5AGeiw778kFEj9r2SVMPu8X4Q5qhQKQ8dqx9g2GApHXCZF1vY8I7IQc3pGxyU0Z92ZeyyXJyzK/kBCFHpl4GeC2QnvagZYIMsE1eeboZoO/tGyFvaDveV6OlNiioW2dlNUIEQVog5ekqmpF+nx9i+JRLnL5DI5BDEK0tMOnYajggabX3DG2CdZe71fqCruis/gX+iH2wVGpj5JgCjulpLhhLMEqMg+8dRW7tShAxtUbBpKBuxCPvOHq8U12j6O4eMmser3OSuo8AdezwWtWkL5r36aTIDHgDYxZCSuzWBATqCWqkDQskrUGnfytcPTXQv6BCmJ3GUMTUoFU6d1Ko0dyfCQJNCWCE0wBwdwLkK+xmZ8dgk1b3BFNetW74fOKfEBCCm+guVEvgtRfdXvlZuBD2Qh3cfznacwOxMZHthgeC9NixjnVmUrgFDrzOk+XG8qgJ7GWTKzCxG3z/9ble99FH2tfxvKT5CdQCL80TlPwCAKlxcxNNHCdqcn+sT3oXXUCo17oMJPNYUcqaOXi8s3dTRQC53O2bN0I62gUH35gC05QDRDOqE/Aztb1momBOdjrZ/9UKJKpEv+OUZnYlB6WJarDLZzV38Iz0BkRKbRJM9jFDrVRm7zaUyyrOJns3oyufCs7Vo1EMqAWlNNBBcCu1Vjp0K5iDvGvZsNa9EU7qdjcTHtfchcvKBdS3oAU4GAPdTbHyrzRHFzIDySjJBgL2e2Y/XGzXVSyQpYlyZ+91xzt7bgBtSWkzfK/gqh1MCbYhxwa1qZ7gxq3pOsL6xHOF6gKMWASXGK+BCN3voiNUoZ9fWuRCZkBNWVcAQWn1YO+Qc5uhGsNSyspEbkcnQTUIEszP/BOtUEfUsQnJhr9J0vJPCzR9Z6ALr045t1q3b2wQgSx8myb5RXBcezPTFBxHg5Ob2G6Y0Ukp9fAjj66D/uaO1LQ5ZYVhwYybbOQC6oPlL5G+yLQ7MNmS76pHPQknTx51w4BUrWFSog7VBkh9YWgy30W/iyIOCf0/uLI/ElTw28l6tzSyQTVuX/eAbbMhhovli4yZKx1aEkhDejXQzURET3DuFj8n/SmvBRblPzvoqAn2EFQv1QWIFvgatkHFa11MtM+J/h16JfQ9VcmfUesc1J+qzn7LBsNMe0utYULcgizwB9yNCmSqHuzrhSSQcAAmBLu8lPRqwY1x0GMQtPx8yjllN6H1qrItOD+1d8DBbpGNtB5SDiFnlL1auSQh1kCwkTDJhJ4kApMPw1hkL+GVv6v59kuM9DuYldXltrMxdVQDI/f9Jqv3ZphVreouxoqE0TPkuAHsccMyPUvqioZ6IE/vSaaVeB3JjbuL+iw6WGdwXTXZvQWlzDXA8vXOrkG7LhvnKhPIoP3mnOlqWThgTQOTrVrtrOqg2ND3AWj1UmMK8zeIynugt7je8Eu4pY8Q+46igCSnyvUEHXxCCxR1HM9EvNDT1KFlA3ivGjPBb5MrZU299ECcmyFlNeZNWbkEV7zbP95BM+Kbyw0g0fdpVnodCjgsfMX3W7zKra1tXSXbTlqxRd3NT+2G4tpSFJCkW6pDk10XO2ryMMopxq+8npaXUf6b8I1bwZXtARu7q7178LpS/10VCwTWPzbCYtXeD65EagZTr9YIeeYONMPyBE/eA8PAO2Bmdnu/jd5Urr+rohtDGOGvh50eOyHXN6gNorS0GplXnmQz15zaiIGau2oLKe5Aw8ly/01XxSwL7aQcdnM7HP6xe0jVqsbrUkO/bO1D/26jQ9VDLt/OQRe3tctk22Ckv+X/AZ820Vy1Z+DMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "8/GB":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-a1205181128e50b727af6c531202e3d9.png";

/***/ }),

/***/ "DwR1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-shape-3-8a32b5685b9984dd8afa0e47353305a1.png";

/***/ }),

/***/ "EaQB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAmCAYAAAAIjkMFAAASf0lEQVR42u2ceXhN1/rHd0KCIK2foQ6lFzE0Zu1ttdLSayhB3eKqH57e0iKuudSUmGIIYkjMYh7rirlqKol5vOZrrpnQ3pgSQpCs+1k7+xx7n7N3BtKbP9jP8z4ZrL2zz16f813v933XoYT/WyjeC4SizCbmEfMJ+fMiYokWS4l/ijFKpEhWlosYZaVoTijKamIN8ROxjviZWE9sIDZp8QuxRXyrbBX3iCdKtBhAKMo2Yjuxg9iZ8nPAeaEI8TqyIhQVBDn5s4i5OhgWEotVEHIrP4opwBCvLOOMSJGkrBBXAeEbZZUJDOu12KiC4K5sFl2B4SYwJAOCUKIAIloMZ+I9VRjsIABHwLnXE5J1IJwABAnATE0VnGFYJPoAgwAGgSqkRCSxXDwChmoOZVhrqgx1gOEZMAhgEMAgVBhkRIu2BlWIeg1C1oMwh28iNFWYo4EwT10isgPDIZRBGGBYpsGwQgxSQVilqcJaF2WYjDIIYBAuMESJjYYl4jUIWQzCcUCQSjBdB8NzZfBCGc4Ag0AZhIkyhKIMigMGV2WYDwwCZTCDYQ+hOGDg+4Cz/9sXn5yc/BoCAwhy8qcRM7QlwgjDcpRBuMCwVFWGdsCgGGAwKkN/YEgBwVUZpqggRGkgbAGEMy/0IryI/ycGEwPTEYOIAcS3165dq7ts2bIiQ4YMUfr27asMHjxYCQ4OfqVCvvbx48cDwjFAkEowxQKGOaI6MMSiDEYYlqgw/IAyKCoMK5yUIQWIacAgVBj0yrBJXAIGX9VR2GHg+84ZVwRPAkxf7EhISEi8xLF+/fo5jRo1ek95RY/cuXNrIMjJn0xMFQVZIsoCw1tOyuAHDBtQhhhguEzOEK8pww1g+BBlcIVhjWgDCAkogwCG3wHhCnEDZVgNCFVRBru1lDAU4Xdl2p4S/5dBEKoRSSJzjvipU6d2zZYt2ysHgs1mA4QjgDANKzdRBKMKl4DhFspwGRhGAUNOHQyewFAcZSgKDFVQhm2aMtxEFQYQnYBhJDB8BwyhwPAIZRAAsQgYSgBDUZShGDC46+oM3sAwBRiuELfyRIkLrU6IH649FtnTCUJtkblH8tixYzu9miAcVkEIUsJ5spOJKVpMJyLEWGBwd8Awz2AtC6MM+xzLhD2BXK66CQEMMpYCQk5HzvCToc7ggSosUHOGLbpg+WhwVPRMSMoSEMSTJ0/uNGjQ4N1XEYT3vaeIC0oYT3aiDoapKgxxKEMZkwTSDkMjR86w1MVaxgFCaQs3IWH4kElPdnETRLYocenMQ5HvRUG4cePGvmbNmn360Ucf+X2qO2rUqOHXrl27ehMmTOh6+vTpDVIBzM4ngQx+FUHo5T1JPFDG82TNYJgm6qoJZIQGglEZ6qiOQsKw2MVaxgFDKUfBabWTo1gvWqvJ4wYNhM0GEMSph8L3RUE4d+7cuvz586f54rdu3Rpidv758+f3eHt7v2IgHBINAeGWMo4nO4EI12CY5IDhQ7XGYG4tmzrchHnRqapLneF5Obqxw0norWWKOtw++UAUeVEQfv31141vv/12mg/Ax8cn9/379391Pp/fXf3ggw/yvyogvPHGGyoIHt7hFH7G8mTNYJgs2gPDc2tpLzqlVCHLAcQjFYYFLtbyIkDkd6kzPFeGQNVROFtLfi63U8y481S4/dEgyCMqKmqTi32Ij48BhKJW5+TJk0chjyjbs2fPlvPmzRuwcOHCKQsWLFhILFi0aNGE0aNHd2Vpek+OS+0oXbp0fjx8V04byPjq6bnf4sWLu3H9losXLx4yaNCgJmbKBeD5R44c2YUxkzi6V61a9U37v2XPnl358ssvK02ePLkT9zpm/vz5E6gl1FTC/0WyGEY2P0ZsAoRn6hJhhOE3lKGOCsN00zrDCJRBOClDMsrQQe1aLjOtMzQDhvvAIK1lsgrCehWCxHe3i8gdd0TBl3EN6QUhR44cyuHDh7c4n//gwYMY8osizuMrVqyYf+LEiZ25/k6Synup2o/k5AfHjx9f3bRp0yru7u6mk3Xq1Klo+/ikpKS477//vlVq91uyZEmPQ4cOzdD9mWdMdpCHh4djTPXq1fNfv359m/5eLl++vKFgwYIe5cuXL7B79+4I+becbvd6CgjjmZzRZPehwh8YAohGwNAQGHZoMPwHGHoCw1coQw9g8EcZsmvK4Ikq9AaGE8DwOzDsRRm+1rWwvVCGJsDQHWX4GzAEEXGatfwJVagPDH8FigD/A6LuzfRbx5cGoVatWvmZsGvO5/MgTxcrViyHfiwK4Hv79u1/ZdSF8NB/69Onz6fOfzskJORb57HPnj273717d3+ze33zzTcVwApzPic2NvYWylLcPo7qaAuT23hMjcSf8zdY3acSfhAQxjFho4gxxFhC/izhCBMFgCHaKWeQbuIZMKxDGWw6a5mXsLFE5NS1sEujDDsBIUnnJlKs5SqxAhi8HDkDStHtRIYri5bJYlrJXqVKlfLJd4fZ+dHR0Qv1Y3nHuW3evHnRi1pSFOYcjqWg/prTpk3rYTE8Fhj8nP9+REREsOng2NjbFSpUKGsfi8y3NSuWEQdSu8cUEOTkj7SAYYL4BBiSTNyEAIbFJo0qu7X0QBk2W7Sw44GhosFasmwEHM0cEO7du3eEB/fVuHHjvmINbqkL+bt2rIsjeICHrB5K7969GzuVYN327du32WL4Y0rVZ4k9LBeXrK6JhPd0c3NzXLNx48blGH/LbOzTp0+vd+nSpap9LOt8P6vrnjhx4p9A76lThL+/AKhHUkAI1UAIUZcIZxg+RhmS1JxhkkudIR4YfBw5g7GF/SEwPLGoM0hr6WtoVK3IPBBe5jhy5MjyIkWKeOpBkBM4ffr0rjoJv33gwIGfqEJ2btKkScV33nknD0uJByrjPXPmzG4sN4+cr3v27NmthQsXzq6/bseOHf2BId7iVs61bNmy5KhRozpa3StL1b7atWsbktp0gPCUnGE/CvfjmjVrxoeFhXUmeSyuhO8HBDnxw3WqYFSGL10SyOcwJKIMHxncxByHMnyBMiRbtLCTgMHP4CZIKAOOZC0IuIU9JImFzZaSt956yxPZbTpr1qyA+vXrV1YbNSaHXJIoVq1xvvbVq1fPlypVyiUB7dy5c0vAemjxTr0kk06zf7tz586+zz//3MXZpAYCtvhUhw4dGpQoUcJLf06+fPmUFBCkCgwjRmiqoFeGUPoKdjcR5lJn+A0YClnUGcoCwwNHC3uxoYV9G2UoZbCWuIuAw1kGQsK2bdvm1qxZs1Bm+HKs2WATF/E7HU5fs/Ekk60ZkpjemwWCk8D4J7NrpQJCPBB8bF1Q2gcIUgGGWsLQDBiS1BqDq7UM0rqWVi3sMNVaLnBpYScCQy1DC5vvAw79z0F4tH///nB/f/+KXl5e6Z5o3vXuvr6+BevVq1c5KCioPn6+zcCBAzvx/T8CAwM7ck2z7DyOZaSa2fWk/Vu5cmUnueqkdcPkP6caNmxo2QuxAgHbuTpv3rxK6iCEaCAEa0uEHYZR4n1guAgMAhgeAcNNYEhAGc4CQz9gyAYMci9DLmD4C8rQmCWiBjC4aTDkRBlGAsNFYEgAhhiU4YmmDMeAoZRaZ5Cq8KNQumfS0sDaeX7MmDFdBwwYEMDEBPBwehw8eHCdmd1nO8LWHj161JSFlrQOfLg3y8N3x44dW4OcX03PxOlB+OKLL6qlVqSiwCPzgYdWF4iJiTlWt27dVBtiViAsWbJkVOol5r2AICd+MMndUDEdVdhIRADDFGC4SQhg2A8MNcgZfIChMjAUQRk4mZjIZE4SvwBDopZAPkAZlgBDAd0yURwYKpMz+ABDXZThlAaDrD5OBIY5fN1YboMIX3FdVMgE+7hNLZvqDllQ2bRp0xirpYGk6W+pPWA/Pz9f6gu7XkJ9UgVBHi1atKjCuLtWFwDa5WXKlHF7ERAiIyP7pweEeoBwDxAEqiAAQaAMguRRAMIhlKGYukyEutQZcgLDL4YEcpqjhT3D0cI2uglpLd9FGc679CaWqj/fDD0rarxkQWkXBaVczi+YRlR2EjlTG5iYmPgfJqKy2YPCRXixrS3KYn5uoTZrsYczeNcNp9wcSNNqd0ZBwE76svafSYsm7n8+ZWbPzAdhjyjsPUzsVtjNBwzCBYYRZP8hltbSz8JNSBjuoQx/MlhLY52hvam15Gve1WL7lQSRI7NBkAdJViVp/8zOI7PfREbtska0adPmM7OWtbSETG5Zqn5uTsni0IyAAAQ+OJaT6ZUW8omJuXLlcs9sEL4DhPtKEE+WbZ3KEBcY/Bw1hlEaDM+VoZkhgZzkogzVHAnkbBdlaOpwEz8ai05ukSLxZJzw+SNAkAfl1t5WD5kGUA/n3gDNpU5mY/v169fM+dqenp7K3r17I9MLAmC+c/fu3cMZXWdQn1BgyFQQ2nsH8+4N5MkO1GAwKkMtpwRSrwyfmLqJFBhuowxFXazlcxhamLawUQf3ZeLJyfui9B8FAkuEJ3nELxa9gdhWrVqV14/v1q1bd7OxFJQ6Ol+7ffv21VGc+PSAQP+iEN5+p9VmKa7/zc6dO2enAm2QbJxl3tIwlC1nbPBWVWGgFoNVdbgIDIVUNzFMV30McRSduqiOYpwW9o0tKdYyERhqq7bS/pmJmboW9lxREhjuGja2LEn5mjtS7L70UOT8o0CQB56+EqXc2xbnry9atKijpUe5t7lFgebM119//eecOXOq+Uf//v3rss6fTk+yWKVKlQK4my1WvSpZ8ZPjqlWr5k2Sut4KhtmzZ/eSKvTyIOwmWRxCN7E/Zd9AHQyDyP4H864dotlKZ2sZwjmj2eaeYi3vAsItlOEBMMSgDAkaDGeAoZJlC3sunc55AGOvM8ivc8VvQ06IWknpSxbrWEzkbkBItTAgy8ZUCXtaPWC6g23tvQH6+W+TTF6xSDLvXbhwYTv5hexdPE6Pa2CntBvJZYjVQMrZgfrliYZVIbbf7bC6LnWFP2cOCIOZlH7Yw/7YuEARRcwHhs+AQdpKRYVhKBM6jM8rDmOL2Ug+uBKC9EtrOUr8DAzvs0yUBYZPgKEUy8RngHBCg+ECMHQAhtaowzeGPZCz1CXCn1gCAFvLrRQRSy6Kasnpt4+1zF70lStXdpBZp1kYKFCggCcZ/haLDuQq3mlu2sTJbmH3DCzhsSbJZTx7E97XWso5eJfvtSj8jFdLvk4Hpe9i1BGOm51DzyLAPm748OHtLBLMgWmDICe8L9GfGIAlDORrEDGQGMS+g8FiCCDcc3IT0lpGE3lM3IS0lmVQhnMmbuI2MPRwsZYzRM4uezJcUCom6yzOL3rt2rXj01MgkgeTU4m8wGWJWLdu3Qz9NWQ1kSbN2LSKSEzkOnYtfWvSUbzMppGi2oYYN0Cb4zwGGzqHBpa71b2y/1ZazHPO57Vu3bqeLkepa3ZfUilSB2EXIMgJ76Oqgh0GRQdDW0cCaXcUw7QYIf5ucBSuLeyBptZyGiXrGdhSfaOKZaPT7hf6yFsb4qZWzxe0i7eWLVu2SEZ6A1QgW/GAY+3XOHr06F4eeknncRIM+gLNmbAtdA0TdX0EmS/cAcDJ5BaFKBlnW758+RySRntZ+G6vXr3a66/FHgIfNooctJ9PsWthoUKF8qR1r2xpq3Lx4sUTWhc0efXq1WNpgHnodl3loAM6+vHjx4+05DeJTuNcmmZ5ra4pN70YQejrAkM2YNjlcBOu1rKni5swFp1CHI0q1xb2KoO1JKkM2PnCH+KUyvAXbNjHWEMvysoKe/bSFSNGjFDoESg7duwoxTWa0/Hz5x3tLX9HnmAYi+wqWEYlPDw8B66jPOP/Snz18OHDhkxkCfYSOj4/GRoamo0x7zEPdWho+cjf268jrwt8ytKlS98AgkZxcXG12ALnTs8izfuVr431viDnNSE3+Yh7UYYOHer4d/m35fVRJnl/dYCmComnu/7vO79+eQ0lnIfvLd/5P5jC4AUM53QJpLMyTHA0qka5WEsJw+JUWtj7DI0qPnsZsOP1p5Kz7tPQEgS5DPTWYOhrgMENGDY6uYnnMAST9Qfr9jI41xlC+f8T7HWGMBcYFjjcRETKZy8Dtr+ekCwDYQLvQi856T2InkQvLewK0YdNrP3EU0KotQZ7vSFInAaKwjpXkVJrMFrM0kBxBSCEYbt8GJXMcHY+TXR8+FYml0r76NcTkmUgRNB0KsPk2cgTbLgHGxNrY2JtTKwtWIthorltuNhlGyFiiEu2ELGCqGDjna8G734buYGNvMBGkmijM2kL12KS+MA2WfxsmyKu2qaK67bpYptthvjchgrYWBJs5Ac2ehAFWSL67Ho9IVkV/wU7VW4WgXhQtQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "FrA1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 1 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// CONCATENATED MODULE: ./components/HomeThree/MainBanner.js
var __jsx = external_react_default.a.createElement;




class MainBanner_MainBanner extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "main-banner-three"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "main-banner-content"
    }, __jsx("h1", null, "Data Science as a Service"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."), __jsx("div", {
      className: "banner-btn"
    }, __jsx(link_default.a, {
      href: "/about-us"
    }, __jsx("a", {
      className: "default-btn-one"
    }, "About Us ", __jsx("span", null))), __jsx(link_default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: "default-btn"
    }, "Contact Us ", __jsx("span", null)))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "banner-image"
    }, __jsx(external_react_wow_default.a, {
      animation: "fadeInUp",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("iyTD"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "fadeInUp",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("7h8k"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "fadeInLeft",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("4M+Y"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "zoomIn",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("xbf1"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "bounceIn",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("YD8r"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "fadeInDown",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("ZdAV"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "zoomIn",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("tgZ7"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "fadeInUp",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("upI5"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "rotateIn",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("dqK2"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "fadeInUp",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("xmFj"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "zoomIn",
      delay: "0.6s"
    }, __jsx("img", {
      src: __webpack_require__("/q0W"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      animation: "zoomIn",
      delay: "0.12s"
    }, __jsx("img", {
      src: __webpack_require__("/oDF"),
      alt: "image"
    })))))))), __jsx("div", {
      className: "creative-shape"
    }, __jsx("img", {
      src: __webpack_require__("DwR1"),
      alt: "Image"
    })), __jsx("div", {
      className: "shape-img1"
    }, __jsx("img", {
      src: __webpack_require__("/Arq"),
      alt: "main-image"
    })), __jsx("div", {
      className: "shape-img2"
    }, __jsx("img", {
      src: __webpack_require__("rh3E"),
      alt: "main-image"
    })));
  }

}

/* harmony default export */ var HomeThree_MainBanner = (MainBanner_MainBanner);
// CONCATENATED MODULE: ./components/HomeThree/AboutUs.js
var AboutUs_jsx = external_react_default.a.createElement;



class AboutUs_AboutUs extends external_react_["Component"] {
  render() {
    return AboutUs_jsx("section", {
      className: "about-section ptb-100"
    }, AboutUs_jsx("div", {
      className: "container"
    }, AboutUs_jsx("div", {
      className: "row align-items-center"
    }, AboutUs_jsx("div", {
      className: "col-lg-6"
    }, AboutUs_jsx("div", {
      className: "about-image"
    }, AboutUs_jsx("img", {
      src: __webpack_require__("8/GB"),
      alt: "image"
    }))), AboutUs_jsx("div", {
      className: "col-lg-6"
    }, AboutUs_jsx("div", {
      className: "about-content"
    }, AboutUs_jsx("span", null, "About Us"), AboutUs_jsx("h2", null, "Focused On Actionable Insights"), AboutUs_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis."), AboutUs_jsx("ul", {
      className: "about-list"
    }, AboutUs_jsx("li", null, AboutUs_jsx("i", {
      className: "flaticon-tick"
    }), "Professional Consultancy Service"), AboutUs_jsx("li", null, AboutUs_jsx("i", {
      className: "flaticon-tick"
    }), "24/7 Support Center"), AboutUs_jsx("li", null, AboutUs_jsx("i", {
      className: "flaticon-tick"
    }), "Custom Service & Operation"), AboutUs_jsx("li", null, AboutUs_jsx("i", {
      className: "flaticon-tick"
    }), "Advanced Advisory Team")), AboutUs_jsx(link_default.a, {
      href: "/about-us"
    }, AboutUs_jsx("a", {
      className: "default-btn"
    }, "Read More ", AboutUs_jsx("span", null))))))));
  }

}

/* harmony default export */ var HomeThree_AboutUs = (AboutUs_AboutUs);
// CONCATENATED MODULE: ./components/HomeThree/OurServices.js
var OurServices_jsx = external_react_default.a.createElement;



class OurServices_OurServices extends external_react_["Component"] {
  render() {
    return OurServices_jsx("section", {
      className: "data-service-section pb-100"
    }, OurServices_jsx("div", {
      className: "container"
    }, OurServices_jsx("div", {
      className: "section-title"
    }, OurServices_jsx("span", null, "Our Services"), OurServices_jsx("h2", null, "Explore Our Data Services")), OurServices_jsx("div", {
      className: "row align-items-center"
    }, OurServices_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, OurServices_jsx("div", {
      className: "data-services-item"
    }, OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-big-data"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Big Data", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))), OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-science"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Data Science", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))), OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-document"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Managed Analytics", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))))), OurServices_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, OurServices_jsx("div", {
      className: "data-services-item"
    }, OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-data-analytics"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Data Analytics", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))), OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-chart"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Business Intelligence", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))), OurServices_jsx("div", {
      className: "single-data-service-box"
    }, OurServices_jsx("div", {
      className: "icon"
    }, OurServices_jsx("i", {
      className: "flaticon-data"
    })), OurServices_jsx("h3", null, OurServices_jsx(link_default.a, {
      href: "/service-details"
    }, OurServices_jsx("a", null, "Data Management", OurServices_jsx("i", {
      className: "flaticon-right"
    }))))))), OurServices_jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, OurServices_jsx("div", {
      className: "data-service-image"
    }, OurServices_jsx("img", {
      src: __webpack_require__("KYfF"),
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var HomeThree_OurServices = (OurServices_OurServices);
// EXTERNAL MODULE: ./components/Common/FunFacts.js
var FunFacts = __webpack_require__("wh+f");

// EXTERNAL MODULE: ./components/Common/SolutionsTab.js
var SolutionsTab = __webpack_require__("2glx");

// CONCATENATED MODULE: ./components/HomeThree/Projects.js
var Projects_jsx = external_react_default.a.createElement;



class Projects_Projects extends external_react_["Component"] {
  render() {
    return Projects_jsx("section", {
      className: "project-section pb-70"
    }, Projects_jsx("div", {
      className: "container"
    }, Projects_jsx("div", {
      className: "section-title"
    }, Projects_jsx("span", null, "Project"), Projects_jsx("h2", null, "Our Latest Project")), Projects_jsx("div", {
      className: "row"
    }, Projects_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Projects_jsx("div", {
      className: "single-project"
    }, Projects_jsx("div", {
      className: "project-image"
    }, Projects_jsx("img", {
      src: __webpack_require__("wwPA"),
      alt: "image"
    })), Projects_jsx("div", {
      className: "image-hover"
    }, Projects_jsx("div", {
      className: "text"
    }, Projects_jsx("h3", null, Projects_jsx(link_default.a, {
      href: "/project-details"
    }, Projects_jsx("a", null, "Data is the new science big data holds the answer"))), Projects_jsx("p", null, "Data Analysis"))))), Projects_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Projects_jsx("div", {
      className: "single-project"
    }, Projects_jsx("div", {
      className: "project-image"
    }, Projects_jsx("img", {
      src: __webpack_require__("b+rP"),
      alt: "image"
    })), Projects_jsx("div", {
      className: "image-hover"
    }, Projects_jsx("div", {
      className: "text"
    }, Projects_jsx("h3", null, Projects_jsx(link_default.a, {
      href: "/project-details"
    }, Projects_jsx("a", null, "Data is the new science big data holds the answer"))), Projects_jsx("p", null, "Business Intelligence"))))), Projects_jsx("div", {
      className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0"
    }, Projects_jsx("div", {
      className: "single-project"
    }, Projects_jsx("div", {
      className: "project-image"
    }, Projects_jsx("img", {
      src: __webpack_require__("37O5"),
      alt: "image"
    })), Projects_jsx("div", {
      className: "image-hover"
    }, Projects_jsx("div", {
      className: "text"
    }, Projects_jsx("h3", null, Projects_jsx(link_default.a, {
      href: "/project-details"
    }, Projects_jsx("a", null, "Data is the new science big data holds the answer"))), Projects_jsx("p", null, "Data Management"))))))));
  }

}

/* harmony default export */ var HomeThree_Projects = (Projects_Projects);
// EXTERNAL MODULE: ./components/Common/Testimonial.js
var Testimonial = __webpack_require__("bHh/");

// EXTERNAL MODULE: ./components/Common/BlogPost.js
var BlogPost = __webpack_require__("azCz");

// CONCATENATED MODULE: ./components/Common/SubscribeStyleTwo.js
var SubscribeStyleTwo_jsx = external_react_default.a.createElement;


class SubscribeStyleTwo_SubscribeStyleTwo extends external_react_["Component"] {
  render() {
    return SubscribeStyleTwo_jsx("section", {
      className: "subscribe-section"
    }, SubscribeStyleTwo_jsx("div", {
      className: "container"
    }, SubscribeStyleTwo_jsx("div", {
      className: "subscribe-content-area"
    }, SubscribeStyleTwo_jsx("div", {
      className: "row align-items-center"
    }, SubscribeStyleTwo_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SubscribeStyleTwo_jsx("div", {
      className: "subscribe-image"
    }, SubscribeStyleTwo_jsx("img", {
      src: __webpack_require__("Xd4C"),
      alt: "image"
    }))), SubscribeStyleTwo_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SubscribeStyleTwo_jsx("div", {
      className: "subscribe-content"
    }, SubscribeStyleTwo_jsx("h2", null, "Don't Miss Our News And Updates"), SubscribeStyleTwo_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")), SubscribeStyleTwo_jsx("form", {
      className: "newsletter-form"
    }, SubscribeStyleTwo_jsx("input", {
      type: "email",
      className: "input-newsletter",
      placeholder: "Enter your email",
      name: "email"
    }), SubscribeStyleTwo_jsx("button", {
      type: "submit"
    }, "Subscribe Now")))))));
  }

}

/* harmony default export */ var Common_SubscribeStyleTwo = (SubscribeStyleTwo_SubscribeStyleTwo);
// EXTERNAL MODULE: ./components/Common/Customers.js
var Customers = __webpack_require__("7Ywq");

// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// CONCATENATED MODULE: ./pages/index3.js
var index3_jsx = external_react_default.a.createElement;














class index3_Index3 extends external_react_["Component"] {
  render() {
    return index3_jsx(external_react_default.a.Fragment, null, index3_jsx(Navbar["a" /* default */], null), index3_jsx(HomeThree_MainBanner, null), index3_jsx(HomeThree_AboutUs, null), index3_jsx(HomeThree_OurServices, null), index3_jsx(FunFacts["a" /* default */], null), index3_jsx(SolutionsTab["a" /* default */], null), index3_jsx(HomeThree_Projects, null), index3_jsx(Testimonial["a" /* default */], null), index3_jsx(BlogPost["a" /* default */], null), index3_jsx(Common_SubscribeStyleTwo, null), index3_jsx(Customers["a" /* default */], null), index3_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var index3 = __webpack_exports__["default"] = (index3_Index3);

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HD3b":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCACWAJYDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFB//aAAgBAQAAAAD7KAAAAAAAAAAAAAAAAAAAAAAAAABGc6IzvYAOLOmmkc8esAFcbWWxtsAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAAAAAAAAAAAAAAAP/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAxAAAAAAAAAAAAAAAAAAAAAP/8QALhAAAgIBAgQDBgcAAAAAAAAAAQIDEQASMQQhQVEFEyIjMGFwcYEQFDJykdHw/9oACAEBAAE/APk6zBVLMQABZJ6ZJPBGQHlRSdtTAY0sSBS0iqG2s1f46hqC2LIsDPzEGvR50eq606hf8YskbMUV1LLuAeY954jGH4Oey3pQkUavl175xEbtO7oYToiFqws7k/b657Kd3d0Gk8IhUEbBrvHLHw5XMhVhEj6r6qL55wLtJCZHYlnYkrf6elZ5YXxBXBYloXuzfVdu2KHifzPYurzkChbDUaHPOHVVXw5lADMDqIHM+mzf3946K6Mji1YUR8Ml4WCZgzpZArcix2PfJeGgl064wdIodOXb6Y8UbqFdbUEED9u2JGiM5UUXOpue5wopcPXqAKg/Bq/rBwvDiXzBH6ru7NX3ra8j4aCNy6IAx6/7b5P/AP/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ASf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ASf/Z"

/***/ }),

/***/ "IS36":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "JFqn":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCACWAJYDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFB//aAAgBAQAAAAD7KAAAAAAAAAAAAAAAAAAAAAAAAABGc6IzvYAOLOmmkc8esAFcbWWxtsAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAAAAAAAAAAAAAAAP/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAxAAAAAAAAAAAAAAAAAAAAAP/8QALhAAAgIBAgQDBgcAAAAAAAAAAQIDEQASMQQhQVEFEyIjMGFwcYEQFDJykdHw/9oACAEBAAE/APk6zBVLMQABZJ6ZJPBGQHlRSdtTAY0sSBS0iqG2s1f46hqC2LIsDPzEGvR50eq606hf8YskbMUV1LLuAeY954jGH4Oey3pQkUavl175xEbtO7oYToiFqws7k/b657Kd3d0Gk8IhUEbBrvHLHw5XMhVhEj6r6qL55wLtJCZHYlnYkrf6elZ5YXxBXBYloXuzfVdu2KHifzPYurzkChbDUaHPOHVVXw5lADMDqIHM+mzf3946K6Mji1YUR8Ml4WCZgzpZArcix2PfJeGgl064wdIodOXb6Y8UbqFdbUEED9u2JGiM5UUXOpue5wopcPXqAKg/Bq/rBwvDiXzBH6ru7NX3ra8j4aCNy6IAx6/7b5P/AP/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8ASf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8ASf/Z"

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

/***/ "KYfF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/data-service-05ab2440ad59f0b2988cf7199f25362c.png";

/***/ }),

/***/ "Md3M":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partnar-shape-1-762115c4919c31df8ccf35c0f053d181.png";

/***/ }),

/***/ "OJyO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAADHVLbdAAAARVBMVEWMjIuLlJaLmJqLlJeLlpiLlZaLlZeLk5SLk5SLkZKLkJCLkJCLj4+Lj46Ljo6LjY2LjYyLjYyLjYyMjYyLjYyMjYyMjIvMDmCoAAAAFnRSTlMAChYdQUVITZ+hytfc6ev0+fr8/f7+2kGOYAAAAEhJREFUCB1VwQsWQCAARcHr/xept/+lqiPUDEFzKTI8Fr2IRv2ATpkDrHIDKqyoYFHhRIUZo1xF7fXbgVYfT9QrcSSbl+QmghtOIQ5BQMZQkgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "SnAM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U3Yi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xd4C":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/subscribe-dd0962e1b416f9fe080359d96d489742.png";

/***/ }),

/***/ "YD8r":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape5-437209e7b1f4ed3808d6b58661812ba7.png";

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

/***/ "ZdAV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "aeWK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "azCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BlogPost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-section pt-100 pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", null, "Blog"), __jsx("h2", null, "Our Recent Post")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "blog-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("0S//"),
      alt: "image"
    }))), __jsx("div", {
      className: "blog-content"
    }, __jsx("ul", {
      className: "meta-tags"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fa fa-user-alt"
    }), "Admin"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fas fa-calendar-week"
    }), "7 Dec 2020"))), __jsx("li", null, __jsx("i", {
      className: "far fa-comments"
    }), "3 Comments")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Startup marketing solution for business owner"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more"
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right"
    })))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "blog-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("dnij"),
      alt: "image"
    }))), __jsx("div", {
      className: "blog-content"
    }, __jsx("ul", {
      className: "meta-tags"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fa fa-user-alt"
    }), "Admin"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fas fa-calendar-week"
    }), "7 Dec 2020"))), __jsx("li", null, __jsx("i", {
      className: "far fa-comments"
    }), "3 Comments")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Web developement best work in future world"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more"
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right"
    })))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "blog-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("aeWK"),
      alt: "image"
    }))), __jsx("div", {
      className: "blog-content"
    }, __jsx("ul", {
      className: "meta-tags"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fa fa-user-alt"
    }), "Admin"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fas fa-calendar-week"
    }), "7 Dec 2020"))), __jsx("li", null, __jsx("i", {
      className: "far fa-comments"
    }), "3 Comments")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Creative solutions to improve your business!"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", {
      className: "read-more"
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right"
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlogPost);

/***/ }),

/***/ "b+rP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAGQAf4DASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/2gAIAQEAAAAA/ZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArLKGaOvcAeY5qsk0UVoAAAAAAr8zb3+ftbXJzaWoBz097Bj6zk5N64AAAAAAz8nR1MuLVxOg5vpK2H86CarkTw7edDNo4nQAAAAAAKUGduM7Sy9zm+kczL0Ll9eh56HOz9DR57ogAAAAAGddy7Uuds850GD0TlfvUufr1te9nXKejR2gAAAAAFXmZ+pho6nPUOosU60WlYQ0dDlbHTczX6qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrN78EUn3348wySPkf33KAAAAAAApePP33GuQxzPHiT39i8WpgAAAAAAAB8fQA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAvEAACAgEDAwMCBQQDAAAAAAACAwEEBQAREhMUMRAhNCJQBhUWI0EkMFSgICVk/9oACAEBAAEMAP8AWSmdo3nx3lP/ACVa7yn/AJKtRO8bx4mYiJmfFeymyEmo+Q6a1SgkzMRFWQpNPgDxkv7BmIARnOw17KbISaj5Dp96oguLHCJJsIeMktglGnWEIHkxgjCb1V5cVuEi+z3D4VLBapYibSIb1uOv09/6tey17zPtdzSjSS0CW+B+Gz0bDcpkCAS2XcwgqQRpYRTibU2asc53L/nmbJHPar95wPw2av2e2qmyPNHFd0uXuYUQ5LcVbUwCkg5jw57/AEpQ3K2msMpEL2K7VcPSwpihZ7mqDJ8/ZsqXHHv1XyyatRKhCTKnl0WTgCGQIhghkZjeLWOpBWeYoGCwPw2aefBDT1gAiEvZ/PnWG/buXEx41crRZrmufOFsktp1Ge05ZxWbKqivfVdA10gsPGrtoa1cmTtvVqkNG3Zb7swPw2az57JQGkBAJUEeM2EFSkv560/kfPfWECBowX8vCGIaE+MAcyl4fZ79UrSOmJwM1cVWSuIMBYWXx6lBD0jx1SdL6qWT5u/Ds6wPw2at+9SxGsDP9I2PTGe+WuzHj0zKOi9Vpc8Swlfl1bRzyL0sOVdyMAxgim1aqTUsCNhUzhLCF1TE3LEvxB4rTqJ3iJ1mJ/692tp/T+sPO+PTqZ2iZ1+H/Fmfs+RvFTFRQuChLYaoGD4zbRClITMcsYEhQrjPm78OzrA/DZoxgwIZ8YNnTdYrnOxOaKlGw59sEEkVhxerynJ5GFhP7eNaVK6dVs7D6NwPNhn3O2nYLpJazud9Y/F92qWdbjrOqk6onGqD4fUScTvOefAoBUT79tP5X0P5wL4JBqmfe++EVHHM7TglSFUjn7PcqjaQSynaRVl6kyACfFGNu2nwy3JQMRERERG0WQI6zwGNyxFZ1asQNDiWsljny/ua2/IlZe5MLZDONWsNZArH39L/AHBVyBAcjxNEqyiJg7My2PbYkGJHc6svlAdYeLPSyBHWeAxuWIrOrViBocSasWrIDjcZq5SiZQnmQ08dafYh9vltq5jraLEvq8toq5S8Yw7mIqUKliARsP8Ap/nagCbEqZI9VXPhzHlBDPgonRNUIcyYMCTVAMERiI9ZO4x1A3s2BSps8wg7DJXXcY7TIuSUFIsCY5D9P1RqWRDBD33N3EyAVmRd7EI68pbAtsqX0d9y0DIMmjG+7GCseRbzoG8oKTWYaC0JEMStgiuyo4dMbjpDheqDGCiPtnakbLHMzgOi3lw6WmIf1jMI+llZohWkJKZGvPCqMjMw+s0mu26kjaS4htAKOerIEdZ4DG5KA5bBkmFjTCZIimdwcjqPUU8oFKOm9pRykYS2KVdfH6ppyEbiXLQk1bbH9OwoaLTmCEI3mDepwGslxPcN4AaeMRTk43IuOq4EATBRtP3QhghkSiJgRgRgRiIj+3//xAA3EAABAwEFBQUFCAMAAAAAAAABAAIRIQMSMUFREBNhcbEiUIGhwTBykZLhIzJCUmKgwtGCsvD/2gAIAQEADT8A/bJ++F742BAwTBFfHZqSjgDIn4+xaJJKBgmCK+OzTE+SGMZbOOa0wPn3QLM9ESRF2fVe59UxtT7qcILiIgLfHoNjJAOQGvimiS12Y4KzN0nXQ+wAv2kaNrHqt8egWDeacaRieKPmMwVF6eCb5DIBNNZxHFYO59zkAeYQEurAF4yjgCZB8URBCbZPINaGFvj0Ca0nyRcG/KPrsH8THrsNWnQ5KSWg5HMIGvvfRNEc9mDRqVa2TzJyEHqt8egRcT8o+qa0BMcD6eq3V3zhPcT6eic0hBwPzdzlwJJRxc4T8AgYcBhzTm15rcv6LfHoFun9FvT0Gz7T/YbSa825pxIHqdtkTN50TqjZPAAcNEbUmHOAOAXb9EV2OoUfzQv9Ts7Hr3O4kGTEJzQU8gAe7VXZ+Yyty/ot8egREKZHNtCmiSnGPHE7WUkaZlOMeOR8drnExdw80xpdF3G6OabaXYichx4pjq8nK7DubU90kcGrc+ePVMdIHByuw3m5PdTk3ufFp0Kn8IvBDGTU8AMkE6zeAOMI2hIEg0gabMXBpgzqFP4hdH1QxOp12OpiBA8U81EzAQoRIEhAQ6oM8abXWbwBxhG0JAkGkDROEFHNokHwQMwcXf0NhMw3Fv0QzcIA8E0QP2gFmYc8RAoDrOei/LNfgpihzUxJNJRwJMAp9W9odrkgwua1xxujRMsy4T+kJv3iHCnNOwrinNLh/jH9poBIbGDp1I0UMLcJdewiDxVq4Bt39WfKqY66fgD6qYAAkkptTej0KdRrnCh/rxVk4h179OfKiJIh2PZMd2vtAbgiHC6BpOS3+83sjCZ5zkmHeWYmJc6JHl5qzaQ4NuyS6K9uiZalzg4gkUdpTE5K1j7pYIpFZE8aK1HZdIEUiK/FOs3gDjCbZXIkGajTIQrMlllyn/gm2bwS1xbVxbGB4J1mwAucXVaXTieKZurwnC6RPRC0s7giLjWvBIT7QOBaW/lAzI0VlaXmgn74iDyxTmlokgntDgmuDnOvAg3TNM8kbS0viJvtc8kBby0Pg5xI71Igg5oYADD2n//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8ASD//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AEg//9k="

/***/ }),

/***/ "bHh/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 20,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 1
    }
  }
};

class Testimonial extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("section", {
      className: "testimonial-section ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", null, "Testimonial"), __jsx("h2", null, "What Our Client Say")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "testimonial-slider owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "testimonial-single-item"
    }, __jsx("div", {
      className: "testimonial-image"
    }, __jsx("img", {
      src: __webpack_require__("+TY7"),
      alt: "image"
    })), __jsx("div", {
      className: "testimonial-info"
    }, __jsx("h3", null, "Richard Denial"), __jsx("span", null, "IT Executive")), __jsx("div", {
      className: "testimonial-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-quote"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))), __jsx("div", {
      className: "testimonial-single-item"
    }, __jsx("div", {
      className: "testimonial-image"
    }, __jsx("img", {
      src: __webpack_require__("HD3b"),
      alt: "image"
    })), __jsx("div", {
      className: "testimonial-info"
    }, __jsx("h3", null, "Sarah Taylor"), __jsx("span", null, "Lead Architecure")), __jsx("div", {
      className: "testimonial-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-quote"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))), __jsx("div", {
      className: "testimonial-single-item"
    }, __jsx("div", {
      className: "testimonial-image"
    }, __jsx("img", {
      src: __webpack_require__("JFqn"),
      alt: "image"
    })), __jsx("div", {
      className: "testimonial-info"
    }, __jsx("h3", null, "Alastair Cook"), __jsx("span", null, "Marketing Manager")), __jsx("div", {
      className: "testimonial-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-quote"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")))) : ''), __jsx("div", {
      className: "testimonial-shape"
    }, __jsx("img", {
      src: __webpack_require__("6SNM"),
      alt: "main-image"
    })), __jsx("div", {
      className: "testimonial-shape-img1"
    }, __jsx("img", {
      src: __webpack_require__("2cPZ"),
      alt: "main-image"
    })), __jsx("div", {
      className: "testimonial-shape-img2"
    }, __jsx("img", {
      src: __webpack_require__("OJyO"),
      alt: "main-image"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Testimonial);

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

/***/ "cmlh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

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

/***/ "dnij":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAGQAf4DASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/2gAIAQEAAAAA/ZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArLKGaOvcAeY5qsk0UVoAAAAAAr8zb3+ftbXJzaWoBz097Bj6zk5N64AAAAAAz8nR1MuLVxOg5vpK2H86CarkTw7edDNo4nQAAAAAAKUGduM7Sy9zm+kczL0Ll9eh56HOz9DR57ogAAAAAGddy7Uuds850GD0TlfvUufr1te9nXKejR2gAAAAAFXmZ+pho6nPUOosU60WlYQ0dDlbHTczX6qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrN78EUn3348wySPkf33KAAAAAAApePP33GuQxzPHiT39i8WpgAAAAAAAB8fQA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAvEAACAgEDAwMCBQQDAAAAAAACAwEEBQAREhMUMRAhNCJQBhUWI0EkMFSgICVk/9oACAEBAAEMAP8AWSmdo3nx3lP/ACVa7yn/AJKtRO8bx4mYiJmfFeymyEmo+Q6a1SgkzMRFWQpNPgDxkv7BmIARnOw17KbISaj5Dp96oguLHCJJsIeMktglGnWEIHkxgjCb1V5cVuEi+z3D4VLBapYibSIb1uOv09/6tey17zPtdzSjSS0CW+B+Gz0bDcpkCAS2XcwgqQRpYRTibU2asc53L/nmbJHPar95wPw2av2e2qmyPNHFd0uXuYUQ5LcVbUwCkg5jw57/AEpQ3K2msMpEL2K7VcPSwpihZ7mqDJ8/ZsqXHHv1XyyatRKhCTKnl0WTgCGQIhghkZjeLWOpBWeYoGCwPw2aefBDT1gAiEvZ/PnWG/buXEx41crRZrmufOFsktp1Ge05ZxWbKqivfVdA10gsPGrtoa1cmTtvVqkNG3Zb7swPw2az57JQGkBAJUEeM2EFSkv560/kfPfWECBowX8vCGIaE+MAcyl4fZ79UrSOmJwM1cVWSuIMBYWXx6lBD0jx1SdL6qWT5u/Ds6wPw2at+9SxGsDP9I2PTGe+WuzHj0zKOi9Vpc8Swlfl1bRzyL0sOVdyMAxgim1aqTUsCNhUzhLCF1TE3LEvxB4rTqJ3iJ1mJ/692tp/T+sPO+PTqZ2iZ1+H/Fmfs+RvFTFRQuChLYaoGD4zbRClITMcsYEhQrjPm78OzrA/DZoxgwIZ8YNnTdYrnOxOaKlGw59sEEkVhxerynJ5GFhP7eNaVK6dVs7D6NwPNhn3O2nYLpJazud9Y/F92qWdbjrOqk6onGqD4fUScTvOefAoBUT79tP5X0P5wL4JBqmfe++EVHHM7TglSFUjn7PcqjaQSynaRVl6kyACfFGNu2nwy3JQMRERERG0WQI6zwGNyxFZ1asQNDiWsljny/ua2/IlZe5MLZDONWsNZArH39L/AHBVyBAcjxNEqyiJg7My2PbYkGJHc6svlAdYeLPSyBHWeAxuWIrOrViBocSasWrIDjcZq5SiZQnmQ08dafYh9vltq5jraLEvq8toq5S8Yw7mIqUKliARsP8Ap/nagCbEqZI9VXPhzHlBDPgonRNUIcyYMCTVAMERiI9ZO4x1A3s2BSps8wg7DJXXcY7TIuSUFIsCY5D9P1RqWRDBD33N3EyAVmRd7EI68pbAtsqX0d9y0DIMmjG+7GCseRbzoG8oKTWYaC0JEMStgiuyo4dMbjpDheqDGCiPtnakbLHMzgOi3lw6WmIf1jMI+llZohWkJKZGvPCqMjMw+s0mu26kjaS4htAKOerIEdZ4DG5KA5bBkmFjTCZIimdwcjqPUU8oFKOm9pRykYS2KVdfH6ppyEbiXLQk1bbH9OwoaLTmCEI3mDepwGslxPcN4AaeMRTk43IuOq4EATBRtP3QhghkSiJgRgRgRiIj+3//xAA3EAABAwEFBQUFCAMAAAAAAAABAAIRIQMSMUFREBNhcbEiUIGhwTBykZLhIzJCUmKgwtGCsvD/2gAIAQEADT8A/bJ++F742BAwTBFfHZqSjgDIn4+xaJJKBgmCK+OzTE+SGMZbOOa0wPn3QLM9ESRF2fVe59UxtT7qcILiIgLfHoNjJAOQGvimiS12Y4KzN0nXQ+wAv2kaNrHqt8egWDeacaRieKPmMwVF6eCb5DIBNNZxHFYO59zkAeYQEurAF4yjgCZB8URBCbZPINaGFvj0Ca0nyRcG/KPrsH8THrsNWnQ5KSWg5HMIGvvfRNEc9mDRqVa2TzJyEHqt8egRcT8o+qa0BMcD6eq3V3zhPcT6eic0hBwPzdzlwJJRxc4T8AgYcBhzTm15rcv6LfHoFun9FvT0Gz7T/YbSa825pxIHqdtkTN50TqjZPAAcNEbUmHOAOAXb9EV2OoUfzQv9Ts7Hr3O4kGTEJzQU8gAe7VXZ+Yyty/ot8egREKZHNtCmiSnGPHE7WUkaZlOMeOR8drnExdw80xpdF3G6OabaXYichx4pjq8nK7DubU90kcGrc+ePVMdIHByuw3m5PdTk3ufFp0Kn8IvBDGTU8AMkE6zeAOMI2hIEg0gabMXBpgzqFP4hdH1QxOp12OpiBA8U81EzAQoRIEhAQ6oM8abXWbwBxhG0JAkGkDROEFHNokHwQMwcXf0NhMw3Fv0QzcIA8E0QP2gFmYc8RAoDrOei/LNfgpihzUxJNJRwJMAp9W9odrkgwua1xxujRMsy4T+kJv3iHCnNOwrinNLh/jH9poBIbGDp1I0UMLcJdewiDxVq4Bt39WfKqY66fgD6qYAAkkptTej0KdRrnCh/rxVk4h179OfKiJIh2PZMd2vtAbgiHC6BpOS3+83sjCZ5zkmHeWYmJc6JHl5qzaQ4NuyS6K9uiZalzg4gkUdpTE5K1j7pYIpFZE8aK1HZdIEUiK/FOs3gDjCbZXIkGajTIQrMlllyn/gm2bwS1xbVxbGB4J1mwAucXVaXTieKZurwnC6RPRC0s7giLjWvBIT7QOBaW/lAzI0VlaXmgn74iDyxTmlokgntDgmuDnOvAg3TNM8kbS0viJvtc8kBby0Pg5xI71Igg5oYADD2n//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8ASD//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AEg//9k="

/***/ }),

/***/ "dqK2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape9-b395d2449947f7a4f4202bcbb5797740.png";

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

/***/ "grc4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tab-solution-4ccb90728a353dd14edc58bd6d66bf26.png";

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

/***/ "ia68":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "iyTD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape1-6e16ad1d5fdb3d1c879e50765e1db4d9.png";

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

/***/ "otcV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

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

/***/ "pNIi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

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

/***/ "rh3E":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "sPoK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyBAMAAADrf4nSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAACIElEQVRYw+1WTY/aMBB9zgfh6CBY9hi+ujlGtLvq0SkI9UgiLe0xSFRwDFSlV5ZW/d2dcQILpURVle2ledLMZMaOn8czjgJUqFChQoUKFSq8KIYD2N1US47IbZ26JcC820zXj02w5Hh4/HjqlgCxc7xPuAcLIhVSAksKa7c0hKjLJjZggRE8UGilkLklwu43sbdIAKd9S4EbN8jcEhF9lwgtEnqeB6Ra7we5WxomvnXMBFHWU5uSM7F6CseaoJvo4FPJNTEDbqXXmJMI229TYSRmOlRiC3/4mq4fb8EiwnRIoVdf2tr9W7iNN7+2sOtKvt6CZQi+Jz8aKVrdVAjXddGgxpaQeu6oQ1do4i4gPKBzlURa105B5HKYqD3SNztscxJroL6RGsdKrODMr5PgHYY9GMqhB7sbQMSSjdmNmCTuoZbSyAlJO8EyJzGnmbIDsUVtXURiLyZTMw3xGbPxPcRCm9mYNyZoqO7pD8qRRPp1LycxVKYsTxi7vSg6LkNZXj2I07fo056F0qav756gISxJqHhcD02yraU5iTgoKZxkKYoKrzfo+YnHC/E7bOShJhJ7Mz3LxNjgMhPceQWZ8CzebrJKaPt6JTYnmRjxWeGl3cJlTRBNC0m4JojTzRRbNeKV2DzXhD6S5yTa0fqku85b8ZKEuwtPKlRwOj5PZfPcXXC835BkRzpyD/ekkOQPUEvx8tj8Aw7hV/9WFf4r/AREblyD+jiFMgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "tgZ7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape7-cc60d1566c33a70f210f24afb9db08dc.png";

/***/ }),

/***/ "upI5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wh+f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FunFacts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "fun-facts-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".2s"
    }, __jsx("div", {
      className: "single-fun-fact"
    }, __jsx("h3", null, "820", __jsx("span", {
      className: "sign-icon"
    }, "+")), __jsx("p", null, "Data Analytics")))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".3s"
    }, __jsx("div", {
      className: "single-fun-fact"
    }, __jsx("h3", null, "150", __jsx("span", {
      className: "sign-icon"
    }, "+")), __jsx("p", null, "Data Management")))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".4s"
    }, __jsx("div", {
      className: "single-fun-fact"
    }, __jsx("h3", null, "20", __jsx("span", {
      className: "sign-icon"
    }, "+")), __jsx("p", null, "Managed  Analytics")))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".5s"
    }, __jsx("div", {
      className: "single-fun-fact"
    }, __jsx("h3", null, "120", __jsx("span", {
      className: "sign-icon"
    }, "+")), __jsx("p", null, "Big Data")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FunFacts);

/***/ }),

/***/ "wwPA":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAGQAf4DASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/2gAIAQEAAAAA/ZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArLKGaOvcAeY5qsk0UVoAAAAAAr8zb3+ftbXJzaWoBz097Bj6zk5N64AAAAAAz8nR1MuLVxOg5vpK2H86CarkTw7edDNo4nQAAAAAAKUGduM7Sy9zm+kczL0Ll9eh56HOz9DR57ogAAAAAGddy7Uuds850GD0TlfvUufr1te9nXKejR2gAAAAAFXmZ+pho6nPUOosU60WlYQ0dDlbHTczX6qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrN78EUn3348wySPkf33KAAAAAAApePP33GuQxzPHiT39i8WpgAAAAAAAB8fQA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAvEAACAgEDAwMCBQQDAAAAAAACAwEEBQAREhMUMRAhNCJQBhUWI0EkMFSgICVk/9oACAEBAAEMAP8AWSmdo3nx3lP/ACVa7yn/AJKtRO8bx4mYiJmfFeymyEmo+Q6a1SgkzMRFWQpNPgDxkv7BmIARnOw17KbISaj5Dp96oguLHCJJsIeMktglGnWEIHkxgjCb1V5cVuEi+z3D4VLBapYibSIb1uOv09/6tey17zPtdzSjSS0CW+B+Gz0bDcpkCAS2XcwgqQRpYRTibU2asc53L/nmbJHPar95wPw2av2e2qmyPNHFd0uXuYUQ5LcVbUwCkg5jw57/AEpQ3K2msMpEL2K7VcPSwpihZ7mqDJ8/ZsqXHHv1XyyatRKhCTKnl0WTgCGQIhghkZjeLWOpBWeYoGCwPw2aefBDT1gAiEvZ/PnWG/buXEx41crRZrmufOFsktp1Ge05ZxWbKqivfVdA10gsPGrtoa1cmTtvVqkNG3Zb7swPw2az57JQGkBAJUEeM2EFSkv560/kfPfWECBowX8vCGIaE+MAcyl4fZ79UrSOmJwM1cVWSuIMBYWXx6lBD0jx1SdL6qWT5u/Ds6wPw2at+9SxGsDP9I2PTGe+WuzHj0zKOi9Vpc8Swlfl1bRzyL0sOVdyMAxgim1aqTUsCNhUzhLCF1TE3LEvxB4rTqJ3iJ1mJ/692tp/T+sPO+PTqZ2iZ1+H/Fmfs+RvFTFRQuChLYaoGD4zbRClITMcsYEhQrjPm78OzrA/DZoxgwIZ8YNnTdYrnOxOaKlGw59sEEkVhxerynJ5GFhP7eNaVK6dVs7D6NwPNhn3O2nYLpJazud9Y/F92qWdbjrOqk6onGqD4fUScTvOefAoBUT79tP5X0P5wL4JBqmfe++EVHHM7TglSFUjn7PcqjaQSynaRVl6kyACfFGNu2nwy3JQMRERERG0WQI6zwGNyxFZ1asQNDiWsljny/ua2/IlZe5MLZDONWsNZArH39L/AHBVyBAcjxNEqyiJg7My2PbYkGJHc6svlAdYeLPSyBHWeAxuWIrOrViBocSasWrIDjcZq5SiZQnmQ08dafYh9vltq5jraLEvq8toq5S8Yw7mIqUKliARsP8Ap/nagCbEqZI9VXPhzHlBDPgonRNUIcyYMCTVAMERiI9ZO4x1A3s2BSps8wg7DJXXcY7TIuSUFIsCY5D9P1RqWRDBD33N3EyAVmRd7EI68pbAtsqX0d9y0DIMmjG+7GCseRbzoG8oKTWYaC0JEMStgiuyo4dMbjpDheqDGCiPtnakbLHMzgOi3lw6WmIf1jMI+llZohWkJKZGvPCqMjMw+s0mu26kjaS4htAKOerIEdZ4DG5KA5bBkmFjTCZIimdwcjqPUU8oFKOm9pRykYS2KVdfH6ppyEbiXLQk1bbH9OwoaLTmCEI3mDepwGslxPcN4AaeMRTk43IuOq4EATBRtP3QhghkSiJgRgRgRiIj+3//xAA3EAABAwEFBQUFCAMAAAAAAAABAAIRIQMSMUFREBNhcbEiUIGhwTBykZLhIzJCUmKgwtGCsvD/2gAIAQEADT8A/bJ++F742BAwTBFfHZqSjgDIn4+xaJJKBgmCK+OzTE+SGMZbOOa0wPn3QLM9ESRF2fVe59UxtT7qcILiIgLfHoNjJAOQGvimiS12Y4KzN0nXQ+wAv2kaNrHqt8egWDeacaRieKPmMwVF6eCb5DIBNNZxHFYO59zkAeYQEurAF4yjgCZB8URBCbZPINaGFvj0Ca0nyRcG/KPrsH8THrsNWnQ5KSWg5HMIGvvfRNEc9mDRqVa2TzJyEHqt8egRcT8o+qa0BMcD6eq3V3zhPcT6eic0hBwPzdzlwJJRxc4T8AgYcBhzTm15rcv6LfHoFun9FvT0Gz7T/YbSa825pxIHqdtkTN50TqjZPAAcNEbUmHOAOAXb9EV2OoUfzQv9Ts7Hr3O4kGTEJzQU8gAe7VXZ+Yyty/ot8egREKZHNtCmiSnGPHE7WUkaZlOMeOR8drnExdw80xpdF3G6OabaXYichx4pjq8nK7DubU90kcGrc+ePVMdIHByuw3m5PdTk3ufFp0Kn8IvBDGTU8AMkE6zeAOMI2hIEg0gabMXBpgzqFP4hdH1QxOp12OpiBA8U81EzAQoRIEhAQ6oM8abXWbwBxhG0JAkGkDROEFHNokHwQMwcXf0NhMw3Fv0QzcIA8E0QP2gFmYc8RAoDrOei/LNfgpihzUxJNJRwJMAp9W9odrkgwua1xxujRMsy4T+kJv3iHCnNOwrinNLh/jH9poBIbGDp1I0UMLcJdewiDxVq4Bt39WfKqY66fgD6qYAAkkptTej0KdRrnCh/rxVk4h179OfKiJIh2PZMd2vtAbgiHC6BpOS3+83sjCZ5zkmHeWYmJc6JHl5qzaQ4NuyS6K9uiZalzg4gkUdpTE5K1j7pYIpFZE8aK1HZdIEUiK/FOs3gDjCbZXIkGajTIQrMlllyn/gm2bwS1xbVxbGB4J1mwAucXVaXTieKZurwnC6RPRC0s7giLjWvBIT7QOBaW/lAzI0VlaXmgn74iDyxTmlokgntDgmuDnOvAg3TNM8kbS0viJvtc8kBby0Pg5xI71Igg5oYADD2n//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8ASD//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AEg//9k="

/***/ }),

/***/ "xbf1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "xmFj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-three-shape10-9543cd118626c8370a1e03bb683114de.png";

/***/ })

/******/ });