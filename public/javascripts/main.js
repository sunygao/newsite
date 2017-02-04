/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _expose$Jquery = __webpack_require__(2);
	
	var _expose$Jquery2 = _interopRequireDefault(_expose$Jquery);
	
	var _TweenMax = __webpack_require__(6);
	
	var _expose_Underscore = __webpack_require__(7);
	
	var _expose_Underscore2 = _interopRequireDefault(_expose_Underscore);
	
	var _backbone = __webpack_require__(9);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _CV = __webpack_require__(11);
	
	var _CV2 = _interopRequireDefault(_CV);
	
	var _router = __webpack_require__(13);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _home = __webpack_require__(16);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);
	  }
	
	  Main.prototype.onReady = function onReady() {
	
	    (0, _expose$Jquery2.default)(document.body).on('keydown', function (e) {
	      if (e.keyCode == 71) {
	        (0, _expose$Jquery2.default)('#grid').toggle();
	      }
	    });
	
	    new _router2.default();
	    _backbone2.default.history.start({ pushState: true });
	  };
	
	  return Main;
	}();
	
	//init main when document is ready
	
	
	var main = module.exports = new Main();
	(0, _expose$Jquery2.default)(document).ready(main.onReady.bind(main));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
	!function (a, b) {
	  "use strict";
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  "use strict";
	  var c = [],
	      d = a.document,
	      e = Object.getPrototypeOf,
	      f = c.slice,
	      g = c.concat,
	      h = c.push,
	      i = c.indexOf,
	      j = {},
	      k = j.toString,
	      l = j.hasOwnProperty,
	      m = l.toString,
	      n = m.call(Object),
	      o = {};function p(a, b) {
	    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	  }var q = "3.1.1",
	      r = function r(a, b) {
	    return new r.fn.init(a, b);
	  },
	      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      t = /^-ms-/,
	      u = /-([a-z])/g,
	      v = function v(a, b) {
	    return b.toUpperCase();
	  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
	      return f.call(this);
	    }, get: function get(a) {
	      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
	    }, pushStack: function pushStack(a) {
	      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
	    }, each: function each(a) {
	      return r.each(this, a);
	    }, map: function map(a) {
	      return this.pushStack(r.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(f.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor();
	    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
	      if (null != (a = arguments[h])) for (b in a) {
	        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	      }
	    }return g;
	  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === r.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
	    }, isPlainObject: function isPlainObject(a) {
	      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
	    }, globalEval: function globalEval(a) {
	      p(a);
	    }, camelCase: function camelCase(a) {
	      return a.replace(t, "ms-").replace(u, v);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b) {
	      var c,
	          d = 0;if (w(a)) {
	        for (c = a.length; d < c; d++) {
	          if (b.call(a[d], d, a[d]) === !1) break;
	        }
	      } else for (d in a) {
	        if (b.call(a[d], d, a[d]) === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(s, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : i.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
	        a[e++] = b[d];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          e,
	          f = 0,
	          h = [];if (w(a)) for (d = a.length; f < d; f++) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      } else for (f in a) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      }return g.apply([], h);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
	        return a.apply(b || this, d.concat(f.call(arguments)));
	      }, e.guid = a.guid = a.guid || r.guid++, e;
	    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	    j["[object " + b + "]"] = b.toLowerCase();
	  });function w(a) {
	    var b = !!a && "length" in a && a.length,
	        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
	  }var x = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ha(),
	        z = ha(),
	        A = ha(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = {}.hasOwnProperty,
	        D = [],
	        E = D.pop,
	        F = D.push,
	        G = D.push,
	        H = D.slice,
	        I = function I(a, b) {
	      for (var c = 0, d = a.length; c < d; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        K = "[\\x20\\t\\r\\n\\f]",
	        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
	        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
	        O = new RegExp(K + "+", "g"),
	        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
	        Q = new RegExp("^" + K + "*," + K + "*"),
	        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
	        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
	        T = new RegExp(N),
	        U = new RegExp("^" + L + "$"),
	        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
	        W = /^(?:input|select|textarea|button)$/i,
	        X = /^h\d$/i,
	        Y = /^[^{]+\{\s*\[native \w/,
	        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        $ = /[+~]/,
	        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
	        aa = function aa(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	        ca = function ca(a, b) {
	      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
	    },
	        da = function da() {
	      m();
	    },
	        ea = ta(function (a) {
	      return a.disabled === !0 && ("form" in a || "label" in a);
	    }, { dir: "parentNode", next: "legend" });try {
	      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
	    } catch (fa) {
	      G = { apply: D.length ? function (a, b) {
	          F.apply(a, H.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function ga(a, b, d, e) {
	      var f,
	          h,
	          j,
	          k,
	          l,
	          o,
	          r,
	          s = b && b.ownerDocument,
	          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
	        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
	          if (9 === w) {
	            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
	          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
	        } else {
	          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
	        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
	          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
	            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
	              o[h] = "#" + k + " " + sa(o[h]);
	            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
	          }if (r) try {
	            return G.apply(d, s.querySelectorAll(r)), d;
	          } catch (x) {} finally {
	            k === u && b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(P, "$1"), b, d, e);
	    }function ha() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ia(a) {
	      return a[u] = !0, a;
	    }function ja(a) {
	      var b = n.createElement("fieldset");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ka(a, b) {
	      var c = a.split("|"),
	          e = c.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function la(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function na(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function oa(a) {
	      return function (b) {
	        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
	      };
	    }function pa(a) {
	      return ia(function (b) {
	        return b = +b, ia(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function qa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = ga.support = {}, f = ga.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
	    }, m = ga.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ja(function (a) {
	        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
	        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
	      }), c.getById ? (d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }, d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c ? [c] : [];
	        }
	      }) : (d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }, d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c,
	              d,
	              e,
	              f = b.getElementById(a);if (f) {
	            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
	              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
	            }
	          }return [];
	        }
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
	      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ja(function (a) {
	        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
	        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            g = [a],
	            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
	          g.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          h.unshift(c);
	        }while (g[d] === h[d]) {
	          d++;
	        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
	      }, n) : n;
	    }, ga.matches = function (a, b) {
	      return ga(a, null, null, b);
	    }, ga.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return ga(b, n, null, [a]).length > 0;
	    }, ga.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, ga.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, ga.escape = function (a) {
	      return (a + "").replace(ba, ca);
	    }, ga.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, ga.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = ga.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h,
	                t = !1;if (q) {
	              if (f) {
	                while (p) {
	                  m = b;while (m = m[p]) {
	                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                  if (1 === m.nodeType && ++t && m === b) {
	                    k[a] = [w, n, t];break;
	                  }
	                }
	              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
	              }return t -= e, t === d || t % d === 0 && t / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ia(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ia(function (a) {
	          return function (b) {
	            return ga(a, b).length > 0;
	          };
	        }), contains: ia(function (a) {
	          return a = a.replace(_, aa), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ia(function (a) {
	          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return X.test(a.nodeName);
	        }, input: function input(a) {
	          return W.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: pa(function () {
	          return [0];
	        }), last: pa(function (a, b) {
	          return [b - 1];
	        }), eq: pa(function (a, b, c) {
	          return [c < 0 ? c + b : c];
	        }), even: pa(function (a, b) {
	          for (var c = 0; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: pa(function (a, b) {
	          for (var c = 1; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = ma(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = na(b);
	    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
	    };function sa(a) {
	      for (var b = 0, c = a.length, d = ""; b < c; b++) {
	        d += a[b].value;
	      }return d;
	    }function ta(a, b, c) {
	      var d = b.dir,
	          e = b.next,
	          f = e || d,
	          g = c && "parentNode" === f,
	          h = x++;return b.first ? function (b, c, e) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || g) return a(b, c, e);
	        }return !1;
	      } : function (b, c, i) {
	        var j,
	            k,
	            l,
	            m = [w, h];if (i) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
	            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
	          }
	        }return !1;
	      };
	    }function ua(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function va(a, b, c) {
	      for (var d = 0, e = b.length; d < e; d++) {
	        ga(a, b[d], c);
	      }return c;
	    }function wa(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
	        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
	      }return g;
	    }function xa(a, b, c, d, e, f) {
	      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || va(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : wa(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
	      });
	    }function ya(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
	        return a === b;
	      }, h, !0), l = ta(function (a) {
	        return I(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; i < f; i++) {
	        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; e < f; e++) {
	              if (d.relative[a[e].type]) break;
	            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
	          }m.push(c);
	        }
	      }return ua(m);
	    }function za(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            o,
	            q,
	            r = 0,
	            s = "0",
	            t = _f && [],
	            u = [],
	            v = j,
	            x = _f || e && d.find.TAG("*", k),
	            y = w += null == v ? 1 : Math.random() || .1,
	            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
	          if (e && l) {
	            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
	              if (q(l, g || n, h)) {
	                i.push(l);break;
	              }
	            }k && (w = y);
	          }c && ((l = !q && l) && r--, _f && t.push(l));
	        }if (r += s, c && s !== r) {
	          o = 0;while (q = b[o++]) {
	            q(t, u, g, h);
	          }if (_f) {
	            if (r > 0) while (s--) {
	              t[s] || u[s] || (u[s] = E.call(i));
	            }u = wa(u);
	          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
	        }return k && (w = y, j = v), t;
	      };return c ? ia(f) : f;
	    }return h = ga.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, za(e, d)), f.selector = a;
	      }return f;
	    }, i = ga.select = function (a, b, c, e) {
	      var f,
	          i,
	          j,
	          k,
	          l,
	          m = "function" == typeof a && a,
	          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
	        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
	          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
	        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
	          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
	            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
	          }
	        }
	      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
	    }), ja(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ka("type|href|height|width", function (a, b, c) {
	      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ja(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ka("value", function (a, b, c) {
	      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
	    }), ja(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ka(J, function (a, b, c) {
	      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), ga;
	  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
	    var d = [],
	        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
	      if (1 === a.nodeType) {
	        if (e && r(a).is(c)) break;d.push(a);
	      }
	    }return d;
	  },
	      z = function z(a, b) {
	    for (var c = []; a; a = a.nextSibling) {
	      1 === a.nodeType && a !== b && c.push(a);
	    }return c;
	  },
	      A = r.expr.match.needsContext,
	      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
	    return r.isFunction(b) ? r.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    }) : b.nodeType ? r.grep(a, function (a) {
	      return a === b !== c;
	    }) : "string" != typeof b ? r.grep(a, function (a) {
	      return i.call(b, a) > -1 !== c;
	    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
	      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
	    }));
	  }r.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, r.fn.extend({ find: function find(a) {
	      var b,
	          c,
	          d = this.length,
	          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
	        for (b = 0; b < d; b++) {
	          if (r.contains(e[b], this)) return !0;
	        }
	      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
	        r.find(a, e[b], c);
	      }return d > 1 ? r.uniqueSort(c) : c;
	    }, filter: function filter(a) {
	      return this.pushStack(D(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(D(this, a || [], !0));
	    }, is: function is(a) {
	      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
	    } });var E,
	      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	      G = r.fn.init = function (a, b, c) {
	    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
	      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
	        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
	          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
	        }return this;
	      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
	    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
	      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
	      var b = r(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; a < c; a++) {
	          if (r.contains(this, b[a])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      var c,
	          d = 0,
	          e = this.length,
	          f = [],
	          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function J(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	  }r.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return y(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return y(a, "parentNode", c);
	    }, next: function next(a) {
	      return J(a, "nextSibling");
	    }, prev: function prev(a) {
	      return J(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return y(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return y(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return y(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return y(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return z((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return z(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || r.merge([], a.childNodes);
	    } }, function (a, b) {
	    r.fn[a] = function (c, d) {
	      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
	    var b = {};return r.each(a.match(K) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }r.Callbacks = function (a) {
	    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f = [],
	        g = [],
	        h = -1,
	        i = function i() {
	      for (e = a.once, d = b = !0; g.length; h = -1) {
	        c = g.shift();while (++h < f.length) {
	          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
	        }
	      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
	    },
	        j = { add: function add() {
	        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
	          r.each(b, function (b, c) {
	            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
	          });
	        }(arguments), c && !b && i()), this;
	      }, remove: function remove() {
	        return r.each(arguments, function (a, b) {
	          var c;while ((c = r.inArray(b, f, c)) > -1) {
	            f.splice(c, 1), c <= h && h--;
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? r.inArray(a, f) > -1 : f.length > 0;
	      }, empty: function empty() {
	        return f && (f = []), this;
	      }, disable: function disable() {
	        return e = g = [], f = c = "", this;
	      }, disabled: function disabled() {
	        return !f;
	      }, lock: function lock() {
	        return e = g = [], c || b || (f = c = ""), this;
	      }, locked: function locked() {
	        return !!e;
	      }, fireWith: function fireWith(a, c) {
	        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	      }, fire: function fire() {
	        return j.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return j;
	  };function M(a) {
	    return a;
	  }function N(a) {
	    throw a;
	  }function O(a, b, c) {
	    var d;try {
	      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
	    } catch (a) {
	      c.call(void 0, a);
	    }
	  }r.extend({ Deferred: function Deferred(b) {
	      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
	          d = "pending",
	          e = { state: function state() {
	          return d;
	        }, always: function always() {
	          return f.done(arguments).fail(arguments), this;
	        }, "catch": function _catch(a) {
	          return e.then(null, a);
	        }, pipe: function pipe() {
	          var a = arguments;return r.Deferred(function (b) {
	            r.each(c, function (c, d) {
	              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
	                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, then: function then(b, d, e) {
	          var f = 0;function g(b, c, d, e) {
	            return function () {
	              var h = this,
	                  i = arguments,
	                  j = function j() {
	                var a, j;if (!(b < f)) {
	                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
	                }
	              },
	                  k = e ? j : function () {
	                try {
	                  j();
	                } catch (a) {
	                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
	                }
	              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
	            };
	          }return r.Deferred(function (a) {
	            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? r.extend(a, e) : e;
	        } },
	          f = {};return r.each(c, function (a, b) {
	        var g = b[2],
	            h = b[5];e[b[1]] = g.add, h && g.add(function () {
	          d = h;
	        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
	          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
	        }, f[b[0] + "With"] = g.fireWith;
	      }), e.promise(f), b && b.call(f, f), f;
	    }, when: function when(a) {
	      var b = arguments.length,
	          c = b,
	          d = Array(c),
	          e = f.call(arguments),
	          g = r.Deferred(),
	          h = function h(a) {
	        return function (c) {
	          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
	        };
	      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
	        O(e[c], h(c), g.reject);
	      }return g.promise();
	    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
	    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	  }, r.readyException = function (b) {
	    a.setTimeout(function () {
	      throw b;
	    });
	  };var Q = r.Deferred();r.fn.ready = function (a) {
	    return Q.then(a)["catch"](function (a) {
	      r.readyException(a);
	    }), this;
	  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? r.readyWait++ : r.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
	    } }), r.ready.then = Q.then;function R() {
	    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
	  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === r.type(c)) {
	      e = !0;for (h in c) {
	        S(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
	      return j.call(r(a), c);
	    })), b)) for (; h < i; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      T = function T(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	  };function U() {
	    this.expando = r.expando + U.uid++;
	  }U.uid = 1, U.prototype = { cache: function cache(a) {
	      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
	        e[r.camelCase(d)] = b[d];
	      }return e;
	    }, get: function get(a, b) {
	      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
	    }, access: function access(a, b, c) {
	      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d = a[this.expando];if (void 0 !== d) {
	        if (void 0 !== b) {
	          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
	            delete d[b[c]];
	          }
	        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
	      }
	    }, hasData: function hasData(a) {
	      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
	    } };var V = new U(),
	      W = new U(),
	      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      Y = /[A-Z]/g;function Z(a) {
	    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
	  }function $(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
	      try {
	        c = Z(c);
	      } catch (e) {}W.set(a, b, c);
	    } else c = void 0;return c;
	  }r.extend({ hasData: function hasData(a) {
	      return W.hasData(a) || V.hasData(a);
	    }, data: function data(a, b, c) {
	      return W.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      W.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return V.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      V.remove(a, b);
	    } }), r.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
	          }V.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
	        W.set(this, a);
	      }) : S(this, function (b) {
	        var c;if (f && void 0 === b) {
	          if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
	        } else this.each(function () {
	          W.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        W.remove(this, a);
	      });
	    } }), r.extend({ queue: function queue(a, b, c) {
	      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = r.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = r._queueHooks(a, b),
	          g = function g() {
	        r.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
	          V.remove(a, [b + "queue", c]);
	        }) });
	    } }), r.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        r.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = r.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
	      ba = ["Top", "Right", "Bottom", "Left"],
	      ca = function ca(a, b) {
	    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	  },
	      da = function da(a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  };function ea(a, b, c, d) {
	    var e,
	        f = 1,
	        g = 20,
	        h = d ? function () {
	      return d.cur();
	    } : function () {
	      return r.css(a, b, "");
	    },
	        i = h(),
	        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
	        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
	      j = j || k[3], c = c || [], k = +i || 1;do {
	        f = f || ".5", k /= f, r.style(a, b, k + j);
	      } while (f !== (f = h() / i) && 1 !== f && --g);
	    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	  }var fa = {};function ga(a) {
	    var b,
	        c = a.ownerDocument,
	        d = a.nodeName,
	        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
	  }function ha(a, b) {
	    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
	      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
	    }for (f = 0; f < g; f++) {
	      null != e[f] && (a[f].style.display = e[f]);
	    }return a;
	  }r.fn.extend({ show: function show() {
	      return ha(this, !0);
	    }, hide: function hide() {
	      return ha(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        ca(this) ? r(this).show() : r(this).hide();
	      });
	    } });var ia = /^(?:checkbox|radio)$/i,
	      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	      ka = /^$|\/(?:java|ecma)script/i,
	      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
	    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
	  }function na(a, b) {
	    for (var c = 0, d = a.length; c < d; c++) {
	      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
	    }
	  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
	      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
	        g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
	          g = g.lastChild;
	        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
	      } else m.push(b.createTextNode(f));
	    }l.textContent = "", n = 0;while (f = m[n++]) {
	      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
	        k = 0;while (f = g[k++]) {
	          ka.test(f.type || "") && c.push(f);
	        }
	      }
	    }return l;
	  }!function () {
	    var a = d.createDocumentFragment(),
	        b = a.appendChild(d.createElement("div")),
	        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  }();var qa = d.documentElement,
	      ra = /^key/,
	      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
	    return !0;
	  }function va() {
	    return !1;
	  }function wa() {
	    try {
	      return d.activeElement;
	    } catch (a) {}
	  }function xa(a, b, c, d, e, f) {
	    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
	      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
	        xa(a, h, c, d, b[h], f);
	      }return a;
	    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
	      return r().off(a), g.apply(this, arguments);
	    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
	      r.event.add(this, b, e, d, c);
	    });
	  }r.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.get(a);if (q) {
	        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
	          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
	        }
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
	        b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
	            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
	              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
	            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
	          } else for (n in i) {
	            r.event.remove(a, n + b[j], c, d, !0);
	          }
	        }r.isEmptyObject(i) && V.remove(a, "handle events");
	      }
	    }, dispatch: function dispatch(a) {
	      var b = r.event.fix(a),
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = new Array(arguments.length),
	          j = (V.get(this, "events") || {})[b.type] || [],
	          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
	        i[c] = arguments[c];
	      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
	        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
	          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
	            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g,
	          h = [],
	          i = b.delegateCount,
	          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
	        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
	          for (f = [], g = {}, c = 0; c < i; c++) {
	            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
	          }f.length && h.push({ elem: j, handlers: f });
	        }
	      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
	    }, addProp: function addProp(a, b) {
	      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
	          if (this.originalEvent) return b(this.originalEvent);
	        } : function () {
	          if (this.originalEvent) return this.originalEvent[a];
	        }, set: function set(b) {
	          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
	        } });
	    }, fix: function fix(a) {
	      return a[r.expando] ? a : new r.Event(a);
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          if (this !== wa() && this.focus) return this.focus(), !1;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          if (this === wa() && this.blur) return this.blur(), !1;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
	        }, _default: function _default(a) {
	          return r.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } } }, r.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c);
	  }, r.Event = function (a, b) {
	    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
	      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
	    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), r.fn.extend({ on: function on(a, b, c, d) {
	      return xa(this, a, b, c, d);
	    }, one: function one(a, b, c, d) {
	      return xa(this, a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
	        r.event.remove(this, a, c, b);
	      });
	    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	      za = /<script|<style|<link/i,
	      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      Ba = /^true\/(.*)/,
	      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
	    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
	  }function Ea(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function Fa(a) {
	    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function Ga(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) {
	          for (c = 0, d = j[e].length; c < d; c++) {
	            r.event.add(b, e, j[e][c]);
	          }
	        }
	      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
	    }
	  }function Ha(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }function Ia(a, b, c, d) {
	    b = g.apply([], b);var e,
	        f,
	        h,
	        i,
	        j,
	        k,
	        l = 0,
	        m = a.length,
	        n = m - 1,
	        q = b[0],
	        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
	      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
	    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
	      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
	        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
	      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
	        j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
	      }
	    }return a;
	  }function Ja(a, b, c) {
	    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
	      c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
	    }return a;
	  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
	      return a.replace(ya, "<$1></$2>");
	    }, clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
	        Ha(f[d], g[d]);
	      }if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
	        Ga(f[d], g[d]);
	      } else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
	        if (T(c)) {
	          if (b = c[V.expando]) {
	            if (b.events) for (d in b.events) {
	              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
	            }c[V.expando] = void 0;
	          }c[W.expando] && (c[W.expando] = void 0);
	        }
	      }
	    } }), r.fn.extend({ detach: function detach(a) {
	      return Ja(this, a, !0);
	    }, remove: function remove(a) {
	      return Ja(this, a);
	    }, text: function text(a) {
	      return S(this, function (a) {
	        return void 0 === a ? r.text(this) : this.empty().each(function () {
	          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return Ia(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Da(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return Ia(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Da(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return Ia(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return Ia(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null != a && a, b = null == b ? a : b, this.map(function () {
	        return r.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return S(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = r.htmlPrefilter(a);try {
	            for (; c < d; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = [];return Ia(this, arguments, function (b) {
	        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
	      }, a);
	    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    r.fn[a] = function (a) {
	      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
	        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
	      }return this.pushStack(d);
	    };
	  });var Ka = /^margin/,
	      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
	      Ma = function Ma(b) {
	    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	  };!function () {
	    function b() {
	      if (i) {
	        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
	      }
	    }var c,
	        e,
	        f,
	        g,
	        h = d.createElement("div"),
	        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
	        return b(), c;
	      }, boxSizingReliable: function boxSizingReliable() {
	        return b(), e;
	      }, pixelMarginRight: function pixelMarginRight() {
	        return b(), f;
	      }, reliableMarginLeft: function reliableMarginLeft() {
	        return b(), g;
	      } }));
	  }();function Na(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	  }function Oa(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }var Pa = /^(none|table(?!-c[ea]).+)/,
	      Qa = { position: "absolute", visibility: "hidden", display: "block" },
	      Ra = { letterSpacing: "0", fontWeight: "400" },
	      Sa = ["Webkit", "Moz", "ms"],
	      Ta = d.createElement("div").style;function Ua(a) {
	    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
	        c = Sa.length;while (c--) {
	      if (a = Sa[c] + b, a in Ta) return a;
	    }
	  }function Va(a, b, c) {
	    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	  }function Wa(a, b, c, d, e) {
	    var f,
	        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
	      "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
	    }return g;
	  }function Xa(a, b, c) {
	    var d,
	        e = !0,
	        f = Ma(a),
	        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
	      if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
	    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
	  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Na(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = r.camelCase(b),
	            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
	    } }), r.each(["height", "width"], function (a, b) {
	    r.cssHooks[b] = { get: function get(a, c, d) {
	        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
	          return Xa(a, b, d);
	        });
	      }, set: function set(a, c, d) {
	        var e,
	            f = d && Ma(a),
	            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
	      } };
	  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
	    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
	      return a.getBoundingClientRect().left;
	    })) + "px";
	  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    r.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
	          e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
	  }), r.fn.extend({ css: function css(a, b) {
	      return S(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (r.isArray(b)) {
	          for (d = Ma(a), e = b.length; g < e; g++) {
	            f[b[g]] = r.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
	      }, a, b, arguments.length > 1);
	    } });function Ya(a, b, c, d, e) {
	    return new Ya.prototype.init(a, b, c, d, e);
	  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
	    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
	        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	      }, set: function set(a) {
	        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
	      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, r.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
	      $a,
	      _a = /^(?:toggle|show|hide)$/,
	      ab = /queueHooks$/;function bb() {
	    $a && (a.requestAnimationFrame(bb), r.fx.tick());
	  }function cb() {
	    return a.setTimeout(function () {
	      Za = void 0;
	    }), Za = r.now();
	  }function db(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
	      c = ba[d], e["margin" + c] = e["padding" + c] = a;
	    }return b && (e.opacity = e.width = a), e;
	  }function eb(a, b, c) {
	    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function fb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = "width" in b || "height" in b,
	        m = this,
	        n = {},
	        o = a.style,
	        p = a.nodeType && ca(a),
	        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
	      g.unqueued || h();
	    }), g.unqueued++, m.always(function () {
	      m.always(function () {
	        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
	      });
	    }));for (d in b) {
	      if (e = b[d], _a.test(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
	          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	        }n[d] = q && q[d] || r.style(a, d);
	      }
	    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
	      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
	        o.display = j;
	      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
	        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	      })), i = !1;for (d in n) {
	        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
	          p || ha([a]), V.remove(a, "fxshow");for (d in n) {
	            r.style(a, d, n[d]);
	          }
	        })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
	      }
	    }
	  }function gb(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function hb(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = hb.prefilters.length,
	        h = r.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
	          j.tweens[c].run(1);
	        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
	      if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
	    }return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
	        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
	      }] }, tweener: function tweener(a, b) {
	      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
	        c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
	      }
	    }, prefilters: [fb], prefilter: function prefilter(a, b) {
	      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
	    } }), r.speed = function (a, b, c) {
	    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
	      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
	    }, e;
	  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = r.isEmptyObject(a),
	          f = r.speed(b, c, d),
	          g = function g() {
	        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = r.timers,
	            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && ab.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }!b && c || r.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = V.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = r.timers,
	            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; b < g; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), r.each(["toggle", "show", "hide"], function (a, b) {
	    var c = r.fn[b];r.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
	    };
	  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    r.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), r.timers = [], r.fx.tick = function () {
	    var a,
	        b = 0,
	        c = r.timers;for (Za = r.now(); b < c.length; b++) {
	      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
	    }c.length || r.fx.stop(), Za = void 0;
	  }, r.fx.timer = function (a) {
	    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
	  }, r.fx.interval = 13, r.fx.start = function () {
	    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
	  }, r.fx.stop = function () {
	    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
	  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
	    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
	      var e = a.setTimeout(c, b);d.stop = function () {
	        a.clearTimeout(e);
	      };
	    });
	  }, function () {
	    var a = d.createElement("input"),
	        b = d.createElement("select"),
	        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	  }();var ib,
	      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
	      return S(this, r.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        r.removeAttr(this, a);
	      });
	    } }), r.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d = 0,
	          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
	        a.removeAttribute(c);
	      }
	    } }), ib = { set: function set(a, b, c) {
	      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
	      var e,
	          f,
	          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
	    };
	  });var kb = /^(?:input|select|textarea|button)$/i,
	      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
	      return S(this, r.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[r.propFix[a] || a];
	      });
	    } }), r.extend({ prop: function prop(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
	        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    }, set: function set(a) {
	      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    r.propFix[this.toLowerCase()] = this;
	  });function mb(a) {
	    var b = a.match(K) || [];return b.join(" ");
	  }function nb(a) {
	    return a.getAttribute && a.getAttribute("class") || "";
	  }r.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).addClass(a.call(this, b, nb(this)));
	      });if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
	            g = 0;while (f = b[g++]) {
	              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
	            }h = mb(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).removeClass(a.call(this, b, nb(this)));
	      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
	            g = 0;while (f = b[g++]) {
	              while (d.indexOf(" " + f + " ") > -1) {
	                d = d.replace(" " + f + " ", " ");
	              }
	            }h = mb(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
	        r(this).toggleClass(a.call(this, c, nb(this), b), b);
	      }) : this.each(function () {
	        var b, d, e, f;if ("string" === c) {
	          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
	      });
	    }, hasClass: function hasClass(a) {
	      var b,
	          c,
	          d = 0;b = " " + a + " ";while (c = this[d++]) {
	        if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
	      }return !1;
	    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
	      }
	    } }), r.extend({ valHooks: { option: { get: function get(a) {
	          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
	        } }, select: { get: function get(a) {
	          var b,
	              c,
	              d,
	              e = a.options,
	              f = a.selectedIndex,
	              g = "select-one" === a.type,
	              h = g ? null : [],
	              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
	            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
	              if (b = r(c).val(), g) return b;h.push(b);
	            }
	          }return h;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = r.makeArray(b),
	              g = e.length;while (g--) {
	            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
	          }return c || (a.selectedIndex = -1), f;
	        } } } }), r.each(["radio", "checkbox"], function () {
	    r.valHooks[this] = { set: function set(a, b) {
	        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
	      } }, o.checkOn || (r.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
	      var g,
	          h,
	          i,
	          j,
	          k,
	          m,
	          n,
	          o = [e || d],
	          p = l.call(b, "type") ? b.type : b,
	          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
	        if (!f && !n.noBubble && !r.isWindow(e)) {
	          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
	            o.push(h), i = h;
	          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
	        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
	          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
	        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
	      }
	    }, simulate: function simulate(a, b, c) {
	      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
	    } }), r.fn.extend({ trigger: function trigger(a, b) {
	      return this.each(function () {
	        r.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
	    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
	    r.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), r.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      r.event.simulate(b, a.target, r.event.fix(a));
	    };r.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
	      } };
	  });var qb = a.location,
	      rb = r.now(),
	      sb = /\?/;r.parseXML = function (b) {
	    var c;if (!b || "string" != typeof b) return null;try {
	      c = new a.DOMParser().parseFromString(b, "text/xml");
	    } catch (d) {
	      c = void 0;
	    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	  };var tb = /\[\]$/,
	      ub = /\r?\n/g,
	      vb = /^(?:submit|button|image|reset|file)$/i,
	      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
	    var e;if (r.isArray(b)) r.each(b, function (b, e) {
	      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
	      xb(a + "[" + e + "]", b[e], c, d);
	    }
	  }r.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
	    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      xb(c, a[c], b, e);
	    }return d.join("&");
	  }, r.fn.extend({ serialize: function serialize() {
	      return r.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
	      }).map(function (a, b) {
	        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
	          return { name: b.name, value: a.replace(ub, "\r\n") };
	        }) : { name: b.name, value: c.replace(ub, "\r\n") };
	      }).get();
	    } });var yb = /%20/g,
	      zb = /#.*$/,
	      Ab = /([?&])_=[^&]*/,
	      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      Db = /^(?:GET|HEAD)$/,
	      Eb = /^\/\//,
	      Fb = {},
	      Gb = {},
	      Hb = "*/".concat("*"),
	      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
	        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function Kb(a, b, c, d) {
	    var e = {},
	        f = a === Gb;function g(h) {
	      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function Lb(a, b) {
	    var c,
	        d,
	        e = r.ajaxSettings.flatOptions || {};for (c in b) {
	      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    }return d && r.extend(!0, a, d), a;
	  }function Mb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (d) for (e in h) {
	      if (h[e] && h[e].test(d)) {
	        i.unshift(e);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }if (f) return f !== i[0] && i.unshift(f), c[f];
	  }function Nb(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
	    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o = r.ajaxSetup({}, c),
	          p = o.context || o,
	          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
	          s = r.Deferred(),
	          t = r.Callbacks("once memory"),
	          u = o.statusCode || {},
	          v = {},
	          w = {},
	          x = "canceled",
	          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (k) {
	            if (!h) {
	              h = {};while (b = Bb.exec(g)) {
	                h[b[1].toLowerCase()] = b[2];
	              }
	            }b = h[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return k ? g : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return null == k && (o.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
	            u[b] = [u[b], a[b]];
	          }return this;
	        }, abort: function abort(a) {
	          var b = a || x;return e && e.abort(b), A(0, b), this;
	        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
	        j = d.createElement("a");try {
	          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
	        } catch (z) {
	          o.crossDomain = !0;
	        }
	      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
	        y.setRequestHeader(m, o.headers[m]);
	      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
	        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
	          y.abort("timeout");
	        }, o.timeout));try {
	          k = !1, e.send(v, A);
	        } catch (z) {
	          if (k) throw z;A(-1, z);
	        }
	      } else A(-1, "No Transport");function A(b, c, d, h) {
	        var j,
	            m,
	            n,
	            v,
	            w,
	            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
	      }return y;
	    }, getJSON: function getJSON(a, b, c) {
	      return r.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return r.get(a, void 0, b, "script");
	    } }), r.each(["get", "post"], function (a, b) {
	    r[b] = function (a, c, d, e) {
	      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
	    };
	  }), r._evalUrl = function (a) {
	    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	  }, r.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) {
	          a = a.firstElementChild;
	        }return a;
	      }).append(this)), this;
	    }, wrapInner: function wrapInner(a) {
	      return r.isFunction(a) ? this.each(function (b) {
	        r(this).wrapInner(a.call(this, b));
	      }) : this.each(function () {
	        var b = r(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = r.isFunction(a);return this.each(function (c) {
	        r(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap(a) {
	      return this.parent(a).not("body").each(function () {
	        r(this).replaceWith(this.childNodes);
	      }), this;
	    } }), r.expr.pseudos.hidden = function (a) {
	    return !r.expr.pseudos.visible(a);
	  }, r.expr.pseudos.visible = function (a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	  }, r.ajaxSettings.xhr = function () {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  };var Ob = { 0: 200, 1223: 204 },
	      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
	    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
	        var g,
	            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
	          h[g] = b.xhrFields[g];
	        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
	          h.setRequestHeader(g, e[g]);
	        }_c = function c(a) {
	          return function () {
	            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
	          };
	        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
	          4 === h.readyState && a.setTimeout(function () {
	            _c && d();
	          });
	        }, _c = _c("abort");try {
	          h.send(b.hasContent && b.data || null);
	        } catch (i) {
	          if (_c) throw i;
	        }
	      }, abort: function abort() {
	        _c && _c();
	      } };
	  }), r.ajaxPrefilter(function (a) {
	    a.crossDomain && (a.contents.script = !1);
	  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
	        return r.globalEval(a), a;
	      } } }), r.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), r.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, _c2;return { send: function send(e, f) {
	          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
	            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
	          }), d.head.appendChild(b[0]);
	        }, abort: function abort() {
	          _c2 && _c2();
	        } };
	    }
	  });var Qb = [],
	      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
	    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || r.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script";
	  }), o.createHTMLDocument = function () {
	    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	  }(), r.parseHTML = function (a, b, c) {
	    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	  }, r.fn.load = function (a, b, c) {
	    var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
	    }).always(c && function (a, b) {
	      g.each(function () {
	        c.apply(this, f || [a.responseText, b, a]);
	      });
	    }), this;
	  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    r.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), r.expr.pseudos.animated = function (a) {
	    return r.grep(r.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };function Sb(a) {
	    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }r.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = r.css(a, "position"),
	          l = r(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, r.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        r.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d,
	          e,
	          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || qa;
	      });
	    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = "pageYOffset" === b;r.fn[a] = function (d) {
	      return S(this, function (a, d, e) {
	        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
	      }, a, d, arguments.length);
	    };
	  }), r.each(["top", "left"], function (a, b) {
	    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
	      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
	    });
	  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
	    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      r.fn[d] = function (e, f) {
	        var g = arguments.length && (c || "boolean" != typeof e),
	            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
	          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
	        }, b, g ? e : void 0, g);
	      };
	    });
	  }), r.fn.extend({ bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } }), r.parseJSON = JSON.parse, "function" == "function" && __webpack_require__(5) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return r;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb = a.jQuery,
	      Ub = a.$;return r.noConflict = function (b) {
	    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
	  }, b || (a.jQuery = a.$ = r), r;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * VERSION: 1.18.5
	 * DATE: 2016-05-24
	 * UPDATES AND DOCS AT: http://greensock.com
	 * 
	 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 **/
	var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : undefined || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
	(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	
		"use strict";
	
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
	
			var _slice = function _slice(a) {
				//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
				    l = a.length,
				    i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			    _applyCycle = function _applyCycle(vars, targets, i) {
				var alt = vars.cycle,
				    p,
				    val;
				for (p in alt) {
					val = alt[p];
					vars[p] = typeof val === "function" ? val.call(targets[i], i) : val[i % val.length];
				}
				delete vars.cycle;
			},
			    TweenMax = function TweenMax(target, duration, vars) {
				TweenLite.call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = this.vars.yoyo === true;
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._dirty = true; //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			    _tinyNum = 0.0000000001,
			    TweenLiteInternals = TweenLite._internals,
			    _isSelector = TweenLiteInternals.isSelector,
			    _isArray = TweenLiteInternals.isArray,
			    p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
			    _blankArray = [];
	
			TweenMax.version = "1.18.5";
			p.constructor = TweenMax;
			p.kill()._gc = false;
			TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
			TweenMax.getTweensOf = TweenLite.getTweensOf;
			TweenMax.lagSmoothing = TweenLite.lagSmoothing;
			TweenMax.ticker = TweenLite.ticker;
			TweenMax.render = TweenLite.render;
	
			p.invalidate = function () {
				this._yoyo = this.vars.yoyo === true;
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._uncache(true);
				return TweenLite.prototype.invalidate.call(this);
			};
	
			p.updateTo = function (vars, resetDuration) {
				var curRatio = this.ratio,
				    immediate = this.vars.immediateRender || vars.immediateRender,
				    p;
				if (resetDuration && this._startTime < this._timeline._time) {
					this._startTime = this._timeline._time;
					this._uncache(false);
					if (this._gc) {
						this._enabled(true, false);
					} else {
						this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
					}
				}
				for (p in vars) {
					this.vars[p] = vars[p];
				}
				if (this._initted || immediate) {
					if (resetDuration) {
						this._initted = false;
						if (immediate) {
							this.render(0, true, true);
						}
					} else {
						if (this._gc) {
							this._enabled(true, false);
						}
						if (this._notifyPluginsOfEnabled && this._firstPT) {
							TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
						}
						if (this._time / this._duration > 0.998) {
							//if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
							var prevTime = this._totalTime;
							this.render(0, true, false);
							this._initted = false;
							this.render(prevTime, true, false);
						} else {
							this._initted = false;
							this._init();
							if (this._time > 0 || immediate) {
								var inv = 1 / (1 - curRatio),
								    pt = this._firstPT,
								    endValue;
								while (pt) {
									endValue = pt.s + pt.c;
									pt.c *= inv;
									pt.s = endValue - pt.c;
									pt = pt._next;
								}
							}
						}
					}
				}
				return this;
			};
	
			p.render = function (time, suppressEvents, force) {
				if (!this._initted) if (this._duration === 0 && this.vars.repeat) {
					//zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
					this.invalidate();
				}
				var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
				    prevTime = this._time,
				    prevTotalTime = this._totalTime,
				    prevCycle = this._cycle,
				    duration = this._duration,
				    prevRawPrevTime = this._rawPrevTime,
				    isComplete,
				    callback,
				    pt,
				    cycleDuration,
				    r,
				    type,
				    pow,
				    rawPrevTime;
				if (time >= totalDur - 0.0000001) {
					//to work around occasional floating point math artifacts.
					this._totalTime = totalDur;
					this._cycle = this._repeat;
					if (this._yoyo && (this._cycle & 1) !== 0) {
						this._time = 0;
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					} else {
						this._time = duration;
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
					}
					if (!this._reversed) {
						isComplete = true;
						callback = "onComplete";
						force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					}
					if (duration === 0) if (this._initted || !this.vars.lazy || force) {
						//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._startTime === this._timeline._duration) {
							//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
							time = 0;
						}
						if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
							//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
							force = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
						this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				} else if (time < 0.0000001) {
					//to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = this._cycle = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					if (prevTotalTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (duration === 0) if (this._initted || !this.vars.lazy || force) {
							//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
							if (prevRawPrevTime >= 0) {
								force = true;
							}
							this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						}
					}
					if (!this._initted) {
						//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
						force = true;
					}
				} else {
					this._totalTime = this._time = time;
					if (this._repeat !== 0) {
						cycleDuration = duration + this._repeatDelay;
						this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - this._cycle * cycleDuration;
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = duration - this._time;
						}
						if (this._time > duration) {
							this._time = duration;
						} else if (this._time < 0) {
							this._time = 0;
						}
					}
	
					if (this._easeType) {
						r = this._time / duration;
						type = this._easeType;
						pow = this._easePower;
						if (type === 1 || type === 3 && r >= 0.5) {
							r = 1 - r;
						}
						if (type === 3) {
							r *= 2;
						}
						if (pow === 1) {
							r *= r;
						} else if (pow === 2) {
							r *= r * r;
						} else if (pow === 3) {
							r *= r * r * r;
						} else if (pow === 4) {
							r *= r * r * r * r;
						}
	
						if (type === 1) {
							this.ratio = 1 - r;
						} else if (type === 2) {
							this.ratio = r;
						} else if (this._time / duration < 0.5) {
							this.ratio = r / 2;
						} else {
							this.ratio = 1 - r / 2;
						}
					} else {
						this.ratio = this._ease.getRatio(this._time / duration);
					}
				}
	
				if (prevTime === this._time && !force && prevCycle === this._cycle) {
					if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
						//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
						this._callback("onUpdate");
					}
					return;
				} else if (!this._initted) {
					this._init();
					if (!this._initted || this._gc) {
						//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
						return;
					} else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
						//we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
						this._time = prevTime;
						this._totalTime = prevTotalTime;
						this._rawPrevTime = prevRawPrevTime;
						this._cycle = prevCycle;
						TweenLiteInternals.lazyTweens.push(this);
						this._lazy = [time, suppressEvents];
						return;
					}
					//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
					if (this._time && !isComplete) {
						this.ratio = this._ease.getRatio(this._time / duration);
					} else if (isComplete && this._ease._calcEnd) {
						this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
					}
				}
				if (this._lazy !== false) {
					this._lazy = false;
				}
	
				if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
					this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
				}
				if (prevTotalTime === 0) {
					if (this._initted === 2 && time > 0) {
						//this.invalidate();
						this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
					}
					if (this._startAt) {
						if (time >= 0) {
							this._startAt.render(time, suppressEvents, force);
						} else if (!callback) {
							callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
						}
					}
					if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
						this._callback("onStart");
					}
				}
	
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](pt.c * this.ratio + pt.s);
					} else {
						pt.t[pt.p] = pt.c * this.ratio + pt.s;
					}
					pt = pt._next;
				}
	
				if (this._onUpdate) {
					if (time < 0) if (this._startAt && this._startTime) {
						//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
					}
					if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
						this._callback("onUpdate");
					}
				}
				if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
					this._callback("onRepeat");
				}
				if (callback) if (!this._gc || force) {
					//check gc because there's a chance that kill() could be called in an onUpdate
					if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
						//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force);
					}
					if (isComplete) {
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this._callback(callback);
					}
					if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
						//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
						this._rawPrevTime = 0;
					}
				}
			};
	
			//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
	
			TweenMax.to = function (target, duration, vars) {
				return new TweenMax(target, duration, vars);
			};
	
			TweenMax.from = function (target, duration, vars) {
				vars.runBackwards = true;
				vars.immediateRender = vars.immediateRender != false;
				return new TweenMax(target, duration, vars);
			};
	
			TweenMax.fromTo = function (target, duration, fromVars, toVars) {
				toVars.startAt = fromVars;
				toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
				return new TweenMax(target, duration, toVars);
			};
	
			TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				stagger = stagger || 0;
				var delay = 0,
				    a = [],
				    finalComplete = function finalComplete() {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
				},
				    cycle = vars.cycle,
				    fromCycle = vars.startAt && vars.startAt.cycle,
				    l,
				    copy,
				    i,
				    p;
				if (!_isArray(targets)) {
					if (typeof targets === "string") {
						targets = TweenLite.selector(targets) || targets;
					}
					if (_isSelector(targets)) {
						targets = _slice(targets);
					}
				}
				targets = targets || [];
				if (stagger < 0) {
					targets = _slice(targets);
					targets.reverse();
					stagger *= -1;
				}
				l = targets.length - 1;
				for (i = 0; i <= l; i++) {
					copy = {};
					for (p in vars) {
						copy[p] = vars[p];
					}
					if (cycle) {
						_applyCycle(copy, targets, i);
						if (copy.duration != null) {
							duration = copy.duration;
							delete copy.duration;
						}
					}
					if (fromCycle) {
						fromCycle = copy.startAt = {};
						for (p in vars.startAt) {
							fromCycle[p] = vars.startAt[p];
						}
						_applyCycle(copy.startAt, targets, i);
					}
					copy.delay = delay + (copy.delay || 0);
					if (i === l && onCompleteAll) {
						copy.onComplete = finalComplete;
					}
					a[i] = new TweenMax(targets[i], duration, copy);
					delay += stagger;
				}
				return a;
			};
	
			TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				vars.runBackwards = true;
				vars.immediateRender = vars.immediateRender != false;
				return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				toVars.startAt = fromVars;
				toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
				return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
				return new TweenMax(callback, 0, { delay: delay, onComplete: callback, onCompleteParams: params, callbackScope: scope, onReverseComplete: callback, onReverseCompleteParams: params, immediateRender: false, useFrames: useFrames, overwrite: 0 });
			};
	
			TweenMax.set = function (target, vars) {
				return new TweenMax(target, 0, vars);
			};
	
			TweenMax.isTweening = function (target) {
				return TweenLite.getTweensOf(target, true).length > 0;
			};
	
			var _getChildrenOf = function _getChildrenOf(timeline, includeTimelines) {
				var a = [],
				    cnt = 0,
				    tween = timeline._first;
				while (tween) {
					if (tween instanceof TweenLite) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			},
			    getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
				return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
			};
	
			TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
				if (tweens == null) {
					tweens = true;
				}
				if (delayedCalls == null) {
					delayedCalls = true;
				}
				var a = getAllTweens(timelines != false),
				    l = a.length,
				    allTrue = tweens && delayedCalls && timelines,
				    isDC,
				    tween,
				    i;
				for (i = 0; i < l; i++) {
					tween = a[i];
					if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
						if (complete) {
							tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
						} else {
							tween._enabled(false, false);
						}
					}
				}
			};
	
			TweenMax.killChildTweensOf = function (parent, complete) {
				if (parent == null) {
					return;
				}
				var tl = TweenLiteInternals.tweenLookup,
				    a,
				    curParent,
				    p,
				    i,
				    l;
				if (typeof parent === "string") {
					parent = TweenLite.selector(parent) || parent;
				}
				if (_isSelector(parent)) {
					parent = _slice(parent);
				}
				if (_isArray(parent)) {
					i = parent.length;
					while (--i > -1) {
						TweenMax.killChildTweensOf(parent[i], complete);
					}
					return;
				}
				a = [];
				for (p in tl) {
					curParent = tl[p].target.parentNode;
					while (curParent) {
						if (curParent === parent) {
							a = a.concat(tl[p].tweens);
						}
						curParent = curParent.parentNode;
					}
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					if (complete) {
						a[i].totalTime(a[i].totalDuration());
					}
					a[i]._enabled(false, false);
				}
			};
	
			var _changePause = function _changePause(pause, tweens, delayedCalls, timelines) {
				tweens = tweens !== false;
				delayedCalls = delayedCalls !== false;
				timelines = timelines !== false;
				var a = getAllTweens(timelines),
				    allTrue = tweens && delayedCalls && timelines,
				    i = a.length,
				    isDC,
				    tween;
				while (--i > -1) {
					tween = a[i];
					if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
						tween.paused(pause);
					}
				}
			};
	
			TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
				_changePause(true, tweens, delayedCalls, timelines);
			};
	
			TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
				_changePause(false, tweens, delayedCalls, timelines);
			};
	
			TweenMax.globalTimeScale = function (value) {
				var tl = Animation._rootTimeline,
				    t = TweenLite.ticker.time;
				if (!arguments.length) {
					return tl._timeScale;
				}
				value = value || _tinyNum; //can't allow zero because it'll throw the math off
				tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
				tl = Animation._rootFramesTimeline;
				t = TweenLite.ticker.frame;
				tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
				tl._timeScale = Animation._rootTimeline._timeScale = value;
				return value;
			};
	
			//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
	
			p.progress = function (value, suppressEvents) {
				return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
			};
	
			p.totalProgress = function (value, suppressEvents) {
				return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
			};
	
			p.time = function (value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				if (value > this._duration) {
					value = this._duration;
				}
				if (this._yoyo && (this._cycle & 1) !== 0) {
					value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
				} else if (this._repeat !== 0) {
					value += this._cycle * (this._duration + this._repeatDelay);
				}
				return this.totalTime(value, suppressEvents);
			};
	
			p.duration = function (value) {
				if (!arguments.length) {
					return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
				}
				return Animation.prototype.duration.call(this, value);
			};
	
			p.totalDuration = function (value) {
				if (!arguments.length) {
					if (this._dirty) {
						//instead of Infinity, we use 999999999999 so that we can accommodate reverses
						this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
						this._dirty = false;
					}
					return this._totalDuration;
				}
				return this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1));
			};
	
			p.repeat = function (value) {
				if (!arguments.length) {
					return this._repeat;
				}
				this._repeat = value;
				return this._uncache(true);
			};
	
			p.repeatDelay = function (value) {
				if (!arguments.length) {
					return this._repeatDelay;
				}
				this._repeatDelay = value;
				return this._uncache(true);
			};
	
			p.yoyo = function (value) {
				if (!arguments.length) {
					return this._yoyo;
				}
				this._yoyo = value;
				return this;
			};
	
			return TweenMax;
		}, true);
	
		/*
	  * ----------------------------------------------------------------
	  * TimelineLite
	  * ----------------------------------------------------------------
	  */
		_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
	
			var TimelineLite = function TimelineLite(vars) {
				SimpleTimeline.call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
				this.smoothChildTiming = this.vars.smoothChildTiming === true;
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
				    val,
				    p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			    _tinyNum = 0.0000000001,
			    TweenLiteInternals = TweenLite._internals,
			    _internals = TimelineLite._internals = {},
			    _isSelector = TweenLiteInternals.isSelector,
			    _isArray = TweenLiteInternals.isArray,
			    _lazyTweens = TweenLiteInternals.lazyTweens,
			    _lazyRender = TweenLiteInternals.lazyRender,
			    _globals = _gsScope._gsDefine.globals,
			    _copy = function _copy(vars) {
				var copy = {},
				    p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			    _applyCycle = function _applyCycle(vars, targets, i) {
				var alt = vars.cycle,
				    p,
				    val;
				for (p in alt) {
					val = alt[p];
					vars[p] = typeof val === "function" ? val.call(targets[i], i) : val[i % val.length];
				}
				delete vars.cycle;
			},
			    _pauseCallback = _internals.pauseCallback = function () {},
			    _slice = function _slice(a) {
				//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
				    l = a.length,
				    i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			    p = TimelineLite.prototype = new SimpleTimeline();
	
			TimelineLite.version = "1.18.5";
			p.constructor = TimelineLite;
			p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
	
			/* might use later...
	  //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
	  function localToGlobal(time, animation) {
	  	while (animation) {
	  		time = (time / animation._timeScale) + animation._startTime;
	  		animation = animation.timeline;
	  	}
	  	return time;
	  }
	  	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
	  function globalToLocal(time, animation) {
	  	var scale = 1;
	  	time -= localToGlobal(0, animation);
	  	while (animation) {
	  		scale *= animation._timeScale;
	  		animation = animation.timeline;
	  	}
	  	return time * scale;
	  }
	  */
	
			p.to = function (target, duration, vars, position) {
				var Engine = vars.repeat && _globals.TweenMax || TweenLite;
				return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
			};
	
			p.from = function (target, duration, vars, position) {
				return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(target, duration, vars), position);
			};
	
			p.fromTo = function (target, duration, fromVars, toVars, position) {
				var Engine = toVars.repeat && _globals.TweenMax || TweenLite;
				return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
			};
	
			p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				var tl = new TimelineLite({ onComplete: onCompleteAll, onCompleteParams: onCompleteAllParams, callbackScope: onCompleteAllScope, smoothChildTiming: this.smoothChildTiming }),
				    cycle = vars.cycle,
				    copy,
				    i;
				if (typeof targets === "string") {
					targets = TweenLite.selector(targets) || targets;
				}
				targets = targets || [];
				if (_isSelector(targets)) {
					//senses if the targets object is a selector. If it is, we should translate it into an array.
					targets = _slice(targets);
				}
				stagger = stagger || 0;
				if (stagger < 0) {
					targets = _slice(targets);
					targets.reverse();
					stagger *= -1;
				}
				for (i = 0; i < targets.length; i++) {
					copy = _copy(vars);
					if (copy.startAt) {
						copy.startAt = _copy(copy.startAt);
						if (copy.startAt.cycle) {
							_applyCycle(copy.startAt, targets, i);
						}
					}
					if (cycle) {
						_applyCycle(copy, targets, i);
						if (copy.duration != null) {
							duration = copy.duration;
							delete copy.duration;
						}
					}
					tl.to(targets[i], duration, copy, i * stagger);
				}
				return this.add(tl, position);
			};
	
			p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				vars.immediateRender = vars.immediateRender != false;
				vars.runBackwards = true;
				return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				toVars.startAt = fromVars;
				toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
				return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			p.call = function (callback, params, scope, position) {
				return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
			};
	
			p.set = function (target, vars, position) {
				position = this._parseTimeOrLabel(position, 0, true);
				if (vars.immediateRender == null) {
					vars.immediateRender = position === this._time && !this._paused;
				}
				return this.add(new TweenLite(target, 0, vars), position);
			};
	
			TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
				vars = vars || {};
				if (vars.smoothChildTiming == null) {
					vars.smoothChildTiming = true;
				}
				var tl = new TimelineLite(vars),
				    root = tl._timeline,
				    tween,
				    next;
				if (ignoreDelayedCalls == null) {
					ignoreDelayedCalls = true;
				}
				root._remove(tl, true);
				tl._startTime = 0;
				tl._rawPrevTime = tl._time = tl._totalTime = root._time;
				tween = root._first;
				while (tween) {
					next = tween._next;
					if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
						tl.add(tween, tween._startTime - tween._delay);
					}
					tween = next;
				}
				root.add(tl, 0);
				return tl;
			};
	
			p.add = function (value, position, align, stagger) {
				var curTime, l, i, child, tl, beforeRawTime;
				if (typeof position !== "number") {
					position = this._parseTimeOrLabel(position, 0, true, value);
				}
				if (!(value instanceof Animation)) {
					if (value instanceof Array || value && value.push && _isArray(value)) {
						align = align || "normal";
						stagger = stagger || 0;
						curTime = position;
						l = value.length;
						for (i = 0; i < l; i++) {
							if (_isArray(child = value[i])) {
								child = new TimelineLite({ tweens: child });
							}
							this.add(child, curTime);
							if (typeof child !== "string" && typeof child !== "function") {
								if (align === "sequence") {
									curTime = child._startTime + child.totalDuration() / child._timeScale;
								} else if (align === "start") {
									child._startTime -= child.delay();
								}
							}
							curTime += stagger;
						}
						return this._uncache(true);
					} else if (typeof value === "string") {
						return this.addLabel(value, position);
					} else if (typeof value === "function") {
						value = TweenLite.delayedCall(0, value);
					} else {
						throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
					}
				}
	
				SimpleTimeline.prototype.add.call(this, value, position);
	
				//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
				if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
					//in case any of the ancestors had completed but should now be enabled...
					tl = this;
					beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
					while (tl._timeline) {
						if (beforeRawTime && tl._timeline.smoothChildTiming) {
							tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
						} else if (tl._gc) {
							tl._enabled(true, false);
						}
						tl = tl._timeline;
					}
				}
	
				return this;
			};
	
			p.remove = function (value) {
				if (value instanceof Animation) {
					this._remove(value, false);
					var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
					value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.
					return this;
				} else if (value instanceof Array || value && value.push && _isArray(value)) {
					var i = value.length;
					while (--i > -1) {
						this.remove(value[i]);
					}
					return this;
				} else if (typeof value === "string") {
					return this.removeLabel(value);
				}
				return this.kill(null, value);
			};
	
			p._remove = function (tween, skipDisable) {
				SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
				var last = this._last;
				if (!last) {
					this._time = this._totalTime = this._duration = this._totalDuration = 0;
				} else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
					this._time = this.duration();
					this._totalTime = this._totalDuration;
				}
				return this;
			};
	
			p.append = function (value, offsetOrLabel) {
				return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
			};
	
			p.insert = p.insertMultiple = function (value, position, align, stagger) {
				return this.add(value, position || 0, align, stagger);
			};
	
			p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
				return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
			};
	
			p.addLabel = function (label, position) {
				this._labels[label] = this._parseTimeOrLabel(position);
				return this;
			};
	
			p.addPause = function (position, callback, params, scope) {
				var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
				t.vars.onComplete = t.vars.onReverseComplete = callback;
				t.data = "isPause";
				this._hasPause = true;
				return this.add(t, position);
			};
	
			p.removeLabel = function (label) {
				delete this._labels[label];
				return this;
			};
	
			p.getLabelTime = function (label) {
				return this._labels[label] != null ? this._labels[label] : -1;
			};
	
			p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
				var i;
				//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
				if (ignore instanceof Animation && ignore.timeline === this) {
					this.remove(ignore);
				} else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
					i = ignore.length;
					while (--i > -1) {
						if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
							this.remove(ignore[i]);
						}
					}
				}
				if (typeof offsetOrLabel === "string") {
					return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - this.duration() : 0, appendIfAbsent);
				}
				offsetOrLabel = offsetOrLabel || 0;
				if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
					//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
					i = timeOrLabel.indexOf("=");
					if (i === -1) {
						if (this._labels[timeOrLabel] == null) {
							return appendIfAbsent ? this._labels[timeOrLabel] = this.duration() + offsetOrLabel : offsetOrLabel;
						}
						return this._labels[timeOrLabel] + offsetOrLabel;
					}
					offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
					timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration();
				} else if (timeOrLabel == null) {
					timeOrLabel = this.duration();
				}
				return Number(timeOrLabel) + offsetOrLabel;
			};
	
			p.seek = function (position, suppressEvents) {
				return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
			};
	
			p.stop = function () {
				return this.paused(true);
			};
	
			p.gotoAndPlay = function (position, suppressEvents) {
				return this.play(position, suppressEvents);
			};
	
			p.gotoAndStop = function (position, suppressEvents) {
				return this.pause(position, suppressEvents);
			};
	
			p.render = function (time, suppressEvents, force) {
				if (this._gc) {
					this._enabled(true, false);
				}
				var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
				    prevTime = this._time,
				    prevStart = this._startTime,
				    prevTimeScale = this._timeScale,
				    prevPaused = this._paused,
				    tween,
				    isComplete,
				    next,
				    callback,
				    internalForce,
				    pauseTween,
				    curTime;
				if (time >= totalDur - 0.0000001) {
					//to work around occasional floating point math artifacts.
					this._totalTime = this._time = totalDur;
					if (!this._reversed) if (!this._hasPausedChild()) {
						isComplete = true;
						callback = "onComplete";
						internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
						if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
							internalForce = true;
							if (this._rawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
					}
					this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
				} else if (time < 0.0000001) {
					//to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = 0;
					if (prevTime !== 0 || this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0)) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (this._timeline.autoRemoveChildren && this._reversed) {
							//ensures proper GC if a timeline is resumed after it's finished reversing.
							internalForce = isComplete = true;
							callback = "onReverseComplete";
						} else if (this._rawPrevTime >= 0 && this._first) {
							//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
							internalForce = true;
						}
						this._rawPrevTime = time;
					} else {
						this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						if (time === 0 && isComplete) {
							//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
							tween = this._first;
							while (tween && tween._startTime === 0) {
								if (!tween._duration) {
									isComplete = false;
								}
								tween = tween._next;
							}
						}
						time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
						if (!this._initted) {
							internalForce = true;
						}
					}
				} else {
	
					if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
						if (time >= prevTime) {
							tween = this._first;
							while (tween && tween._startTime <= time && !pauseTween) {
								if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
									pauseTween = tween;
								}
								tween = tween._next;
							}
						} else {
							tween = this._last;
							while (tween && tween._startTime >= time && !pauseTween) {
								if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
									pauseTween = tween;
								}
								tween = tween._prev;
							}
						}
						if (pauseTween) {
							this._time = time = pauseTween._startTime;
							this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
						}
					}
	
					this._totalTime = this._time = this._rawPrevTime = time;
				}
				if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
					return;
				} else if (!this._initted) {
					this._initted = true;
				}
	
				if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
					this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
				}
	
				if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
					this._callback("onStart");
				}
	
				curTime = this._time;
				if (curTime >= prevTime) {
					tween = this._first;
					while (tween) {
						next = tween._next; //record it here because the value could change after rendering...
						if (curTime !== this._time || this._paused && !prevPaused) {
							//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
							break;
						} else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
							if (pauseTween === tween) {
								this.pause();
							}
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
							}
						}
						tween = next;
					}
				} else {
					tween = this._last;
					while (tween) {
						next = tween._prev; //record it here because the value could change after rendering...
						if (curTime !== this._time || this._paused && !prevPaused) {
							//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
							break;
						} else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
							if (pauseTween === tween) {
								pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
								while (pauseTween && pauseTween.endTime() > this._time) {
									pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
									pauseTween = pauseTween._prev;
								}
								pauseTween = null;
								this.pause();
							}
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
							}
						}
						tween = next;
					}
				}
	
				if (this._onUpdate) if (!suppressEvents) {
					if (_lazyTweens.length) {
						//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					this._callback("onUpdate");
				}
	
				if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
					//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
					if (isComplete) {
						if (_lazyTweens.length) {
							//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
							_lazyRender();
						}
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this._callback(callback);
					}
				}
			};
	
			p._hasPausedChild = function () {
				var tween = this._first;
				while (tween) {
					if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
						return true;
					}
					tween = tween._next;
				}
				return false;
			};
	
			p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
				ignoreBeforeTime = ignoreBeforeTime || -9999999999;
				var a = [],
				    tween = this._first,
				    cnt = 0;
				while (tween) {
					if (tween._startTime < ignoreBeforeTime) {
						//do nothing
					} else if (tween instanceof TweenLite) {
						if (tweens !== false) {
							a[cnt++] = tween;
						}
					} else {
						if (timelines !== false) {
							a[cnt++] = tween;
						}
						if (nested !== false) {
							a = a.concat(tween.getChildren(true, tweens, timelines));
							cnt = a.length;
						}
					}
					tween = tween._next;
				}
				return a;
			};
	
			p.getTweensOf = function (target, nested) {
				var disabled = this._gc,
				    a = [],
				    cnt = 0,
				    tweens,
				    i;
				if (disabled) {
					this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
				}
				tweens = TweenLite.getTweensOf(target);
				i = tweens.length;
				while (--i > -1) {
					if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
						a[cnt++] = tweens[i];
					}
				}
				if (disabled) {
					this._enabled(false, true);
				}
				return a;
			};
	
			p.recent = function () {
				return this._recent;
			};
	
			p._contains = function (tween) {
				var tl = tween.timeline;
				while (tl) {
					if (tl === this) {
						return true;
					}
					tl = tl.timeline;
				}
				return false;
			};
	
			p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
				ignoreBeforeTime = ignoreBeforeTime || 0;
				var tween = this._first,
				    labels = this._labels,
				    p;
				while (tween) {
					if (tween._startTime >= ignoreBeforeTime) {
						tween._startTime += amount;
					}
					tween = tween._next;
				}
				if (adjustLabels) {
					for (p in labels) {
						if (labels[p] >= ignoreBeforeTime) {
							labels[p] += amount;
						}
					}
				}
				return this._uncache(true);
			};
	
			p._kill = function (vars, target) {
				if (!vars && !target) {
					return this._enabled(false, false);
				}
				var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
				    i = tweens.length,
				    changed = false;
				while (--i > -1) {
					if (tweens[i]._kill(vars, target)) {
						changed = true;
					}
				}
				return changed;
			};
	
			p.clear = function (labels) {
				var tweens = this.getChildren(false, true, true),
				    i = tweens.length;
				this._time = this._totalTime = 0;
				while (--i > -1) {
					tweens[i]._enabled(false, false);
				}
				if (labels !== false) {
					this._labels = {};
				}
				return this._uncache(true);
			};
	
			p.invalidate = function () {
				var tween = this._first;
				while (tween) {
					tween.invalidate();
					tween = tween._next;
				}
				return Animation.prototype.invalidate.call(this);;
			};
	
			p._enabled = function (enabled, ignoreTimeline) {
				if (enabled === this._gc) {
					var tween = this._first;
					while (tween) {
						tween._enabled(enabled, true);
						tween = tween._next;
					}
				}
				return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
			};
	
			p.totalTime = function (time, suppressEvents, uncapped) {
				this._forcingPlayhead = true;
				var val = Animation.prototype.totalTime.apply(this, arguments);
				this._forcingPlayhead = false;
				return val;
			};
	
			p.duration = function (value) {
				if (!arguments.length) {
					if (this._dirty) {
						this.totalDuration(); //just triggers recalculation
					}
					return this._duration;
				}
				if (this.duration() !== 0 && value !== 0) {
					this.timeScale(this._duration / value);
				}
				return this;
			};
	
			p.totalDuration = function (value) {
				if (!arguments.length) {
					if (this._dirty) {
						var max = 0,
						    tween = this._last,
						    prevStart = 999999999999,
						    prev,
						    end;
						while (tween) {
							prev = tween._prev; //record it here in case the tween changes position in the sequence...
							if (tween._dirty) {
								tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
							}
							if (tween._startTime > prevStart && this._sortChildren && !tween._paused) {
								//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
								this.add(tween, tween._startTime - tween._delay);
							} else {
								prevStart = tween._startTime;
							}
							if (tween._startTime < 0 && !tween._paused) {
								//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
								max -= tween._startTime;
								if (this._timeline.smoothChildTiming) {
									this._startTime += tween._startTime / this._timeScale;
								}
								this.shiftChildren(-tween._startTime, false, -9999999999);
								prevStart = 0;
							}
							end = tween._startTime + tween._totalDuration / tween._timeScale;
							if (end > max) {
								max = end;
							}
							tween = prev;
						}
						this._duration = this._totalDuration = max;
						this._dirty = false;
					}
					return this._totalDuration;
				}
				return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
			};
	
			p.paused = function (value) {
				if (!value) {
					//if there's a pause directly at the spot from where we're unpausing, skip it.
					var tween = this._first,
					    time = this._time;
					while (tween) {
						if (tween._startTime === time && tween.data === "isPause") {
							tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
						}
						tween = tween._next;
					}
				}
				return Animation.prototype.paused.apply(this, arguments);
			};
	
			p.usesFrames = function () {
				var tl = this._timeline;
				while (tl._timeline) {
					tl = tl._timeline;
				}
				return tl === Animation._rootFramesTimeline;
			};
	
			p.rawTime = function () {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
			};
	
			return TimelineLite;
		}, true);
	
		/*
	  * ----------------------------------------------------------------
	  * TimelineMax
	  * ----------------------------------------------------------------
	  */
		_gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {
	
			var TimelineMax = function TimelineMax(vars) {
				TimelineLite.call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = this.vars.yoyo === true;
				this._dirty = true;
			},
			    _tinyNum = 0.0000000001,
			    TweenLiteInternals = TweenLite._internals,
			    _lazyTweens = TweenLiteInternals.lazyTweens,
			    _lazyRender = TweenLiteInternals.lazyRender,
			    _easeNone = new Ease(null, null, 1, 0),
			    p = TimelineMax.prototype = new TimelineLite();
	
			p.constructor = TimelineMax;
			p.kill()._gc = false;
			TimelineMax.version = "1.18.5";
	
			p.invalidate = function () {
				this._yoyo = this.vars.yoyo === true;
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._uncache(true);
				return TimelineLite.prototype.invalidate.call(this);
			};
	
			p.addCallback = function (callback, position, params, scope) {
				return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
			};
	
			p.removeCallback = function (callback, position) {
				if (callback) {
					if (position == null) {
						this._kill(null, callback);
					} else {
						var a = this.getTweensOf(callback, false),
						    i = a.length,
						    time = this._parseTimeOrLabel(position);
						while (--i > -1) {
							if (a[i]._startTime === time) {
								a[i]._enabled(false, false);
							}
						}
					}
				}
				return this;
			};
	
			p.removePause = function (position) {
				return this.removeCallback(TimelineLite._internals.pauseCallback, position);
			};
	
			p.tweenTo = function (position, vars) {
				vars = vars || {};
				var copy = { ease: _easeNone, useFrames: this.usesFrames(), immediateRender: false },
				    duration,
				    p,
				    t;
				for (p in vars) {
					copy[p] = vars[p];
				}
				copy.time = this._parseTimeOrLabel(position);
				duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001;
				t = new TweenLite(this, duration, copy);
				copy.onStart = function () {
					t.target.paused(true);
					if (t.vars.time !== t.target.time() && duration === t.duration()) {
						//don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
						t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale);
					}
					if (vars.onStart) {
						//in case the user had an onStart in the vars - we don't want to overwrite it.
						t._callback("onStart");
					}
				};
				return t;
			};
	
			p.tweenFromTo = function (fromPosition, toPosition, vars) {
				vars = vars || {};
				fromPosition = this._parseTimeOrLabel(fromPosition);
				vars.startAt = { onComplete: this.seek, onCompleteParams: [fromPosition], callbackScope: this };
				vars.immediateRender = vars.immediateRender !== false;
				var t = this.tweenTo(toPosition, vars);
				return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
			};
	
			p.render = function (time, suppressEvents, force) {
				if (this._gc) {
					this._enabled(true, false);
				}
				var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
				    dur = this._duration,
				    prevTime = this._time,
				    prevTotalTime = this._totalTime,
				    prevStart = this._startTime,
				    prevTimeScale = this._timeScale,
				    prevRawPrevTime = this._rawPrevTime,
				    prevPaused = this._paused,
				    prevCycle = this._cycle,
				    tween,
				    isComplete,
				    next,
				    callback,
				    internalForce,
				    cycleDuration,
				    pauseTween,
				    curTime;
				if (time >= totalDur - 0.0000001) {
					//to work around occasional floating point math artifacts.
					if (!this._locked) {
						this._totalTime = totalDur;
						this._cycle = this._repeat;
					}
					if (!this._reversed) if (!this._hasPausedChild()) {
						isComplete = true;
						callback = "onComplete";
						internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
						if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
							internalForce = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
					}
					this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (this._yoyo && (this._cycle & 1) !== 0) {
						this._time = time = 0;
					} else {
						this._time = dur;
						time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
					}
				} else if (time < 0.0000001) {
					//to work around occasional floating point math artifacts, round super small values to 0.
					if (!this._locked) {
						this._totalTime = this._cycle = 0;
					}
					this._time = 0;
					if (prevTime !== 0 || dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !this._locked) {
						//edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (this._timeline.autoRemoveChildren && this._reversed) {
							internalForce = isComplete = true;
							callback = "onReverseComplete";
						} else if (prevRawPrevTime >= 0 && this._first) {
							//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
							internalForce = true;
						}
						this._rawPrevTime = time;
					} else {
						this._rawPrevTime = dur || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						if (time === 0 && isComplete) {
							//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
							tween = this._first;
							while (tween && tween._startTime === 0) {
								if (!tween._duration) {
									isComplete = false;
								}
								tween = tween._next;
							}
						}
						time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
						if (!this._initted) {
							internalForce = true;
						}
					}
				} else {
					if (dur === 0 && prevRawPrevTime < 0) {
						//without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
						internalForce = true;
					}
					this._time = this._rawPrevTime = time;
					if (!this._locked) {
						this._totalTime = time;
						if (this._repeat !== 0) {
							cycleDuration = dur + this._repeatDelay;
							this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
							if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
								this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
							}
							this._time = this._totalTime - this._cycle * cycleDuration;
							if (this._yoyo) if ((this._cycle & 1) !== 0) {
								this._time = dur - this._time;
							}
							if (this._time > dur) {
								this._time = dur;
								time = dur + 0.0001; //to avoid occasional floating point rounding error
							} else if (this._time < 0) {
								this._time = time = 0;
							} else {
								time = this._time;
							}
						}
					}
	
					if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
						time = this._time;
						if (time >= prevTime) {
							tween = this._first;
							while (tween && tween._startTime <= time && !pauseTween) {
								if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
									pauseTween = tween;
								}
								tween = tween._next;
							}
						} else {
							tween = this._last;
							while (tween && tween._startTime >= time && !pauseTween) {
								if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
									pauseTween = tween;
								}
								tween = tween._prev;
							}
						}
						if (pauseTween) {
							this._time = time = pauseTween._startTime;
							this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
						}
					}
				}
	
				if (this._cycle !== prevCycle) if (!this._locked) {
					/*
	    make sure children at the end/beginning of the timeline are rendered properly. If, for example,
	    a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
	    would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
	    could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
	    we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
	    ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
	    */
					var backwards = this._yoyo && (prevCycle & 1) !== 0,
					    wrap = backwards === (this._yoyo && (this._cycle & 1) !== 0),
					    recTotalTime = this._totalTime,
					    recCycle = this._cycle,
					    recRawPrevTime = this._rawPrevTime,
					    recTime = this._time;
	
					this._totalTime = prevCycle * dur;
					if (this._cycle < prevCycle) {
						backwards = !backwards;
					} else {
						this._totalTime += dur;
					}
					this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
	
					this._rawPrevTime = dur === 0 ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
					this._cycle = prevCycle;
					this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
					prevTime = backwards ? 0 : dur;
					this.render(prevTime, suppressEvents, dur === 0);
					if (!suppressEvents) if (!this._gc) {
						if (this.vars.onRepeat) {
							this._callback("onRepeat");
						}
					}
					if (prevTime !== this._time) {
						//in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
						return;
					}
					if (wrap) {
						prevTime = backwards ? dur + 0.0001 : -0.0001;
						this.render(prevTime, true, false);
					}
					this._locked = false;
					if (this._paused && !prevPaused) {
						//if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
						return;
					}
					this._time = recTime;
					this._totalTime = recTotalTime;
					this._cycle = recCycle;
					this._rawPrevTime = recRawPrevTime;
				}
	
				if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
					if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
						//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
						this._callback("onUpdate");
					}
					return;
				} else if (!this._initted) {
					this._initted = true;
				}
	
				if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
					this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
				}
	
				if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
					this._callback("onStart");
				}
	
				curTime = this._time;
				if (curTime >= prevTime) {
					tween = this._first;
					while (tween) {
						next = tween._next; //record it here because the value could change after rendering...
						if (curTime !== this._time || this._paused && !prevPaused) {
							//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
							break;
						} else if (tween._active || tween._startTime <= this._time && !tween._paused && !tween._gc) {
							if (pauseTween === tween) {
								this.pause();
							}
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
							}
						}
						tween = next;
					}
				} else {
					tween = this._last;
					while (tween) {
						next = tween._prev; //record it here because the value could change after rendering...
						if (curTime !== this._time || this._paused && !prevPaused) {
							//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
							break;
						} else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
							if (pauseTween === tween) {
								pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
								while (pauseTween && pauseTween.endTime() > this._time) {
									pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
									pauseTween = pauseTween._prev;
								}
								pauseTween = null;
								this.pause();
							}
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
							}
						}
						tween = next;
					}
				}
	
				if (this._onUpdate) if (!suppressEvents) {
					if (_lazyTweens.length) {
						//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					this._callback("onUpdate");
				}
				if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
					//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
					if (isComplete) {
						if (_lazyTweens.length) {
							//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
							_lazyRender();
						}
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this._callback(callback);
					}
				}
			};
	
			p.getActive = function (nested, tweens, timelines) {
				if (nested == null) {
					nested = true;
				}
				if (tweens == null) {
					tweens = true;
				}
				if (timelines == null) {
					timelines = false;
				}
				var a = [],
				    all = this.getChildren(nested, tweens, timelines),
				    cnt = 0,
				    l = all.length,
				    i,
				    tween;
				for (i = 0; i < l; i++) {
					tween = all[i];
					if (tween.isActive()) {
						a[cnt++] = tween;
					}
				}
				return a;
			};
	
			p.getLabelAfter = function (time) {
				if (!time) if (time !== 0) {
					//faster than isNan()
					time = this._time;
				}
				var labels = this.getLabelsArray(),
				    l = labels.length,
				    i;
				for (i = 0; i < l; i++) {
					if (labels[i].time > time) {
						return labels[i].name;
					}
				}
				return null;
			};
	
			p.getLabelBefore = function (time) {
				if (time == null) {
					time = this._time;
				}
				var labels = this.getLabelsArray(),
				    i = labels.length;
				while (--i > -1) {
					if (labels[i].time < time) {
						return labels[i].name;
					}
				}
				return null;
			};
	
			p.getLabelsArray = function () {
				var a = [],
				    cnt = 0,
				    p;
				for (p in this._labels) {
					a[cnt++] = { time: this._labels[p], name: p };
				}
				a.sort(function (a, b) {
					return a.time - b.time;
				});
				return a;
			};
	
			//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
	
			p.progress = function (value, suppressEvents) {
				return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
			};
	
			p.totalProgress = function (value, suppressEvents) {
				return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
			};
	
			p.totalDuration = function (value) {
				if (!arguments.length) {
					if (this._dirty) {
						TimelineLite.prototype.totalDuration.call(this); //just forces refresh
						//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
						this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
					}
					return this._totalDuration;
				}
				return this._repeat === -1 || !value ? this : this.timeScale(this.totalDuration() / value);
			};
	
			p.time = function (value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				if (value > this._duration) {
					value = this._duration;
				}
				if (this._yoyo && (this._cycle & 1) !== 0) {
					value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
				} else if (this._repeat !== 0) {
					value += this._cycle * (this._duration + this._repeatDelay);
				}
				return this.totalTime(value, suppressEvents);
			};
	
			p.repeat = function (value) {
				if (!arguments.length) {
					return this._repeat;
				}
				this._repeat = value;
				return this._uncache(true);
			};
	
			p.repeatDelay = function (value) {
				if (!arguments.length) {
					return this._repeatDelay;
				}
				this._repeatDelay = value;
				return this._uncache(true);
			};
	
			p.yoyo = function (value) {
				if (!arguments.length) {
					return this._yoyo;
				}
				this._yoyo = value;
				return this;
			};
	
			p.currentLabel = function (value) {
				if (!arguments.length) {
					return this.getLabelBefore(this._time + 0.00000001);
				}
				return this.seek(value, true);
			};
	
			return TimelineMax;
		}, true);
	
		/*
	  * ----------------------------------------------------------------
	  * BezierPlugin
	  * ----------------------------------------------------------------
	  */
		(function () {
	
			var _RAD2DEG = 180 / Math.PI,
			    _r1 = [],
			    _r2 = [],
			    _r3 = [],
			    _corProps = {},
			    _globals = _gsScope._gsDefine.globals,
			    Segment = function Segment(a, b, c, d) {
				if (c === d) {
					//if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
					c = d - (d - b) / 1000000;
				}
				if (a === b) {
					//if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
					b = a + (c - a) / 1000000;
				}
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			    _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			    cubicToQuadratic = function cubicToQuadratic(a, b, c, d) {
				var q1 = { a: a },
				    q2 = {},
				    q3 = {},
				    q4 = { c: d },
				    mab = (a + b) / 2,
				    mbc = (b + c) / 2,
				    mcd = (c + d) / 2,
				    mabc = (mab + mbc) / 2,
				    mbcd = (mbc + mcd) / 2,
				    m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			    _calculateControlPoints = function _calculateControlPoints(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
				    ii = 0,
				    cp1 = a[0].a,
				    i,
				    p1,
				    p2,
				    p3,
				    seg,
				    m1,
				    m2,
				    mm,
				    cp2,
				    qb,
				    r1,
				    r2,
				    tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii + 1].d;
	
					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = (r2 + r1) * curviness * 0.25 / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : r1 !== 0 ? tl / r1 : 0);
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : r2 !== 0 ? tl / r2 : 0);
						mm = p2 - (m1 + ((m2 - m1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;
	
					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}
	
					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;
	
					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}
	
					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			    _parseAnchors = function _parseAnchors(values, p, correlate, prepend) {
				var a = [],
				    l,
				    i,
				    p1,
				    p2,
				    p3,
				    tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof (tmp = values[i][p]) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[l < -1 ? 0 : 1][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i + 1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i + 2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
				return a;
			},
			    bezierThrough = function bezierThrough(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
				    props = [],
				    first = prepend || values[0],
				    i,
				    p,
				    a,
				    j,
				    r,
				    l,
				    seamless,
				    last;
				correlate = typeof correlate === "string" ? "," + correlate + "," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) {
							//build in a tolerance of +/-0.05 to accommodate rounding errors.
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = correlate.indexOf("," + p + ",") !== -1;
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0;
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			    _parseBezierData = function _parseBezierData(values, type, prepend) {
				type = type || "soft";
				var obj = {},
				    inc = type === "cubic" ? 3 : 2,
				    soft = type === "soft",
				    props = [],
				    a,
				    b,
				    c,
				    d,
				    cur,
				    i,
				    j,
				    l,
				    p,
				    cnt,
				    tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) {
					throw "invalid Bezier data";
				}
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = prepend == null ? values[j][p] : typeof (tmp = values[j][p]) === "string" && tmp.charAt(1) === "=" ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt - 2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j + 1];
						c = cur[j + 2];
						d = inc === 2 ? 0 : cur[j + 3];
						cur[cnt++] = tmp = inc === 3 ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			    _addCubicLengths = function _addCubicLengths(a, steps, resolution) {
				var inc = 1 / resolution,
				    j = a.length,
				    d,
				    d1,
				    s,
				    da,
				    ca,
				    ba,
				    p,
				    i,
				    inv,
				    bez,
				    index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			    _parseLengthData = function _parseLengthData(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
				    lengths = [],
				    d = 0,
				    total = 0,
				    threshold = resolution - 1,
				    segments = [],
				    curLS = [],
				    //current length segments array
				p,
				    i,
				    l,
				    index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = i / resolution >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return { length: total, lengths: lengths, segments: segments };
			},
			    BezierPlugin = _gsScope._gsDefine.plugin({
				propName: "bezier",
				priority: -1,
				version: "1.3.6",
				API: 2,
				global: true,
	
				//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function init(target, vars, tween) {
					this._target = target;
					if (vars instanceof Array) {
						vars = { values: vars };
					}
					this._func = {};
					this._round = {};
					this._props = [];
					this._timeRes = vars.timeResolution == null ? 6 : parseInt(vars.timeResolution, 10);
					var values = vars.values || [],
					    first = {},
					    second = values[0],
					    autoRotate = vars.autoRotate || tween.vars.orientToBezier,
					    p,
					    isFunc,
					    i,
					    j,
					    prepend;
	
					this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [["x", "y", "rotation", autoRotate === true ? 0 : Number(autoRotate) || 0]] : null;
					for (p in second) {
						this._props.push(p);
					}
	
					i = this._props.length;
					while (--i > -1) {
						p = this._props[i];
	
						this._overwriteProps.push(p);
						isFunc = this._func[p] = typeof target[p] === "function";
						first[p] = !isFunc ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
						if (!prepend) if (first[p] !== values[0][p]) {
							prepend = first;
						}
					}
					this._beziers = vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft" ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, vars.type === "thruBasic", vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
					this._segCount = this._beziers[p].length;
	
					if (this._timeRes) {
						var ld = _parseLengthData(this._beziers, this._timeRes);
						this._length = ld.length;
						this._lengths = ld.lengths;
						this._segments = ld.segments;
						this._l1 = this._li = this._s1 = this._si = 0;
						this._l2 = this._lengths[0];
						this._curSeg = this._segments[0];
						this._s2 = this._curSeg[0];
						this._prec = 1 / this._curSeg.length;
					}
	
					if (autoRotate = this._autoRotate) {
						this._initialRotations = [];
						if (!(autoRotate[0] instanceof Array)) {
							this._autoRotate = autoRotate = [autoRotate];
						}
						i = autoRotate.length;
						while (--i > -1) {
							for (j = 0; j < 3; j++) {
								p = autoRotate[i][j];
								this._func[p] = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)] : false;
							}
							p = autoRotate[i][2];
							this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
						}
					}
					this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
					return true;
				},
	
				//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
				set: function set(v) {
					var segments = this._segCount,
					    func = this._func,
					    target = this._target,
					    notStart = v !== this._startRatio,
					    curIndex,
					    inv,
					    i,
					    p,
					    b,
					    t,
					    val,
					    l,
					    lengths,
					    curSeg;
					if (!this._timeRes) {
						curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0;
						t = (v - curIndex * (1 / segments)) * segments;
					} else {
						lengths = this._lengths;
						curSeg = this._curSeg;
						v *= this._length;
						i = this._li;
						//find the appropriate segment (if the currently cached one isn't correct)
						if (v > this._l2 && i < segments - 1) {
							l = segments - 1;
							while (i < l && (this._l2 = lengths[++i]) <= v) {}
							this._l1 = lengths[i - 1];
							this._li = i;
							this._curSeg = curSeg = this._segments[i];
							this._s2 = curSeg[this._s1 = this._si = 0];
						} else if (v < this._l1 && i > 0) {
							while (i > 0 && (this._l1 = lengths[--i]) >= v) {}
							if (i === 0 && v < this._l1) {
								this._l1 = 0;
							} else {
								i++;
							}
							this._l2 = lengths[i];
							this._li = i;
							this._curSeg = curSeg = this._segments[i];
							this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
							this._s2 = curSeg[this._si];
						}
						curIndex = i;
						//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
						v -= this._l1;
						i = this._si;
						if (v > this._s2 && i < curSeg.length - 1) {
							l = curSeg.length - 1;
							while (i < l && (this._s2 = curSeg[++i]) <= v) {}
							this._s1 = curSeg[i - 1];
							this._si = i;
						} else if (v < this._s1 && i > 0) {
							while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}
							if (i === 0 && v < this._s1) {
								this._s1 = 0;
							} else {
								i++;
							}
							this._s2 = curSeg[i];
							this._si = i;
						}
						t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
					}
					inv = 1 - t;
	
					i = this._props.length;
					while (--i > -1) {
						p = this._props[i];
						b = this._beziers[p][curIndex];
						val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
						if (this._round[p]) {
							val = Math.round(val);
						}
						if (func[p]) {
							target[p](val);
						} else {
							target[p] = val;
						}
					}
	
					if (this._autoRotate) {
						var ar = this._autoRotate,
						    b2,
						    x1,
						    y1,
						    x2,
						    y2,
						    add,
						    conv;
						i = ar.length;
						while (--i > -1) {
							p = ar[i][2];
							add = ar[i][3] || 0;
							conv = ar[i][4] === true ? 1 : _RAD2DEG;
							b = this._beziers[ar[i][0]];
							b2 = this._beziers[ar[i][1]];
	
							if (b && b2) {
								//in case one of the properties got overwritten.
								b = b[curIndex];
								b2 = b2[curIndex];
	
								x1 = b.a + (b.b - b.a) * t;
								x2 = b.b + (b.c - b.b) * t;
								x1 += (x2 - x1) * t;
								x2 += (b.c + (b.d - b.c) * t - x2) * t;
	
								y1 = b2.a + (b2.b - b2.a) * t;
								y2 = b2.b + (b2.c - b2.b) * t;
								y1 += (y2 - y1) * t;
								y2 += (b2.c + (b2.d - b2.c) * t - y2) * t;
	
								val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];
	
								if (func[p]) {
									target[p](val);
								} else {
									target[p] = val;
								}
							}
						}
					}
				}
			}),
			    p = BezierPlugin.prototype;
	
			BezierPlugin.bezierThrough = bezierThrough;
			BezierPlugin.cubicToQuadratic = cubicToQuadratic;
			BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
			BezierPlugin.quadraticToCubic = function (a, b, c) {
				return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
			};
	
			BezierPlugin._cssRegister = function () {
				var CSSPlugin = _globals.CSSPlugin;
				if (!CSSPlugin) {
					return;
				}
				var _internals = CSSPlugin._internals,
				    _parseToProxy = _internals._parseToProxy,
				    _setPluginRatio = _internals._setPluginRatio,
				    CSSPropTween = _internals.CSSPropTween;
				_internals._registerComplexSpecialProp("bezier", { parser: function parser(t, e, prop, cssp, pt, plugin) {
						if (e instanceof Array) {
							e = { values: e };
						}
						plugin = new BezierPlugin();
						var values = e.values,
						    l = values.length - 1,
						    pluginValues = [],
						    v = {},
						    i,
						    p,
						    data;
						if (l < 0) {
							return pt;
						}
						for (i = 0; i <= l; i++) {
							data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i);
							pluginValues[i] = data.end;
						}
						for (p in e) {
							v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
						}
						v.values = pluginValues;
						pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
						pt.data = data;
						pt.plugin = plugin;
						pt.setRatio = _setPluginRatio;
						if (v.autoRotate === 0) {
							v.autoRotate = true;
						}
						if (v.autoRotate && !(v.autoRotate instanceof Array)) {
							i = v.autoRotate === true ? 0 : Number(v.autoRotate);
							v.autoRotate = data.end.left != null ? [["left", "top", "rotation", i, false]] : data.end.x != null ? [["x", "y", "rotation", i, false]] : false;
						}
						if (v.autoRotate) {
							if (!cssp._transform) {
								cssp._enableTransforms(false);
							}
							data.autoRotate = cssp._target._gsTransform;
							data.proxy.rotation = data.autoRotate.rotation || 0;
						}
						plugin._onInitTween(data.proxy, v, cssp._tween);
						return pt;
					} });
			};
	
			p._roundProps = function (lookup, value) {
				var op = this._overwriteProps,
				    i = op.length;
				while (--i > -1) {
					if (lookup[op[i]] || lookup.bezier || lookup.bezierThrough) {
						this._round[op[i]] = value;
					}
				}
			};
	
			p._kill = function (lookup) {
				var a = this._props,
				    p,
				    i;
				for (p in this._beziers) {
					if (p in lookup) {
						delete this._beziers[p];
						delete this._func[p];
						i = a.length;
						while (--i > -1) {
							if (a[i] === p) {
								a.splice(i, 1);
							}
						}
					}
				}
				return this._super._kill.call(this, lookup);
			};
		})();
	
		/*
	  * ----------------------------------------------------------------
	  * CSSPlugin
	  * ----------------------------------------------------------------
	  */
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {
	
			/** @constructor **/
			var CSSPlugin = function CSSPlugin() {
				TweenPlugin.call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			    _globals = _gsScope._gsDefine.globals,
			    _hasPriority,
			    //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap,
			    //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs,
			    //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps,
			    //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			    p = CSSPlugin.prototype = new TweenPlugin("css");
	
			p.constructor = CSSPlugin;
			CSSPlugin.version = "1.18.5";
			CSSPlugin.API = 2;
			CSSPlugin.defaultTransformPerspective = 0;
			CSSPlugin.defaultSkewType = "compensated";
			CSSPlugin.defaultSmoothOrigin = true;
			p = "px"; //we'll reuse the "p" variable to keep file size down
			CSSPlugin.suffixMap = { top: p, right: p, bottom: p, left: p, width: p, height: p, fontSize: p, padding: p, margin: p, perspective: p, lineHeight: "" };
	
			var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			    _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			    _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
			    //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
			    //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			    _opacityExp = /opacity *= *([^)]*)/i,
			    _opacityValExp = /opacity:([^;]*)/i,
			    _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			    _rgbhslExp = /^(rgb|hsl)/,
			    _capsExp = /([A-Z])/g,
			    _camelExp = /-([a-z])/gi,
			    _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
			    //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function _camelFunc(s, g) {
				return g.toUpperCase();
			},
			    _horizExp = /(?:Left|Right|Width)/i,
			    _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			    _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			    _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
			    //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i,
			    //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			    _RAD2DEG = 180 / Math.PI,
			    _forcePT = {},
			    _doc = document,
			    _createElement = function _createElement(type) {
				return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			    _tempDiv = _createElement("div"),
			    _tempImg = _createElement("img"),
			    _internals = CSSPlugin._internals = { _specialProps: _specialProps },
			    //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = navigator.userAgent,
			    _autoRound,
			    _reqSafariFix,
			    //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
	
			_isSafari,
			    _isFirefox,
			    //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6,
			    //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			    _supportsOpacity = function () {
				//we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
				    a = _createElement("a");
				_isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i + 8, 1)) > 3);
				_isSafariLT6 = _isSafari && Number(_agent.substr(_agent.indexOf("Version/") + 8, 1)) < 6;
				_isFirefox = _agent.indexOf("Firefox") !== -1;
				if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
					_ieVers = parseFloat(RegExp.$1);
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return (/^0.55/.test(a.style.opacity)
				);
			}(),
			    _getIEOpacity = function _getIEOpacity(v) {
				return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
			},
			    _log = function _log(s) {
				//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (window.console) {
					console.log(s);
				}
			},
			    _prefixCSS = "",
			    //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "",
			    //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
	
			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function _checkPropPrefix(p, e) {
				e = e || _tempDiv;
				var s = e.style,
				    a,
				    i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O", "Moz", "ms", "Ms", "Webkit"];
				i = 5;
				while (--i > -1 && s[a[i] + p] === undefined) {}
				if (i >= 0) {
					_prefix = i === 3 ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},
			    _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function () {},
	
	
			/**
	   * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
	   * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
	   *
	   * @param {!Object} t Target element whose style property you want to query
	   * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
	   * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
	   * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
	   * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
	   * @return {?string} The current property value
	   */
			_getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") {
					//several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if (cs = cs || _getComputedStyle(t)) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
			},
	
	
			/**
	   * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
	   * @param {!Object} t Target element
	   * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
	   * @param {!number} v Value
	   * @param {string=} sfx Suffix (like "px" or "%" or "em")
	   * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
	   * @return {number} value in pixels
	   */
			_convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) {
					return v;
				}
				if (sfx === "auto" || !v) {
					return 0;
				}
				var horiz = _horizExp.test(p),
				    node = t,
				    style = _tempDiv.style,
				    neg = v < 0,
				    precise = v === 1,
				    pix,
				    cache,
				    time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						cache = node._gsCache;
						time = TweenLite.ticker.frame;
						if (cache && horiz && cache.time === time) {
							//performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[horiz ? "width" : "height"] = v + sfx;
					} else {
						style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			    _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
				//for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") {
					return 0;
				}
				var dim = p === "left" ? "Left" : "Top",
				    v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},
	
	
			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function _getAllStyles(t, cs) {
				var s = {},
				    i,
				    tr,
				    p;
				if (cs = cs || _getComputedStyle(t, null)) {
					if (i = cs.length) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
								//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else {
						//some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) {
								//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if (cs = t.currentStyle || t.style) {
					for (i in cs) {
						if (typeof i === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},
	
	
			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
				var difs = {},
				    style = t.style,
				    val,
				    p,
				    mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
						difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) {
							//for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) {
						//copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return { difs: difs, firstMPT: mpt };
			},
			    _dimensions = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
			    _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
	
	
			/**
	   * @private Gets the width or height of an element
	   * @param {!Object} t Target element
	   * @param {!string} p Property name ("width" or "height")
	   * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
	   * @return {number} Dimension (in pixels)
	   */
			_getDimension = function _getDimension(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") {
					//Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getBBox && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
				    a = _dimensions[p],
				    i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
					v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
				}
				return v;
			},
	
	
			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function _parsePosition(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") {
					return v + " ";
				}
				if (v == null || v === "") {
					//note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					v = "0 0";
				}
				var a = v.split(" "),
				    x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
				    y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
				    i;
				if (a.length > 3 && !recObj) {
					//multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = x === "center" ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
					//remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + (a.length > 2 ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = x.indexOf("%") !== -1;
					recObj.oyp = y.indexOf("%") !== -1;
					recObj.oxr = x.charAt(1) === "=";
					recObj.oyr = y.charAt(1) === "=";
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},
	
	
			/**
	   * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
	   * @param {(number|string)} e End value which is typically a string, but could be a number
	   * @param {(number|string)} b Beginning value which is typically a string but could be a number
	   * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
	   */
			_parseChange = function _parseChange(e, b) {
				return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
			},
	
	
			/**
	   * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
	   * @param {Object} v Value to be parsed
	   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
	   * @return {number} Parsed value
	   */
			_parseVal = function _parseVal(v, d) {
				return v == null ? d : typeof v === "string" && v.charAt(1) === "=" ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},
	
	
			/**
	   * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
	   * @param {Object} v Value to be parsed
	   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
	   * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
	   * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
	   * @return {number} parsed angle in radians
	   */
			_parseAngle = function _parseAngle(v, d, p, directionalEnd) {
				var min = 0.000001,
				    cap,
				    split,
				    dif,
				    result,
				    isRelative;
				if (v == null) {
					result = d;
				} else if (typeof v === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = v.charAt(1) === "=";
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = dif < 0 ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},
			    _colorLookup = { aqua: [0, 255, 255],
				lime: [0, 255, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, 255],
				navy: [0, 0, 128],
				white: [255, 255, 255],
				fuchsia: [255, 0, 255],
				olive: [128, 128, 0],
				yellow: [255, 255, 0],
				orange: [255, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [255, 0, 0],
				pink: [255, 192, 203],
				cyan: [0, 255, 255],
				transparent: [255, 255, 255, 0] },
			    _hue = function _hue(h, m1, m2) {
				h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
				return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
			},
	
	
			/**
	   * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
	   * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
	   * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
	   * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
	   */
			_parseColor = CSSPlugin.parseColor = function (v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof v === "number") {
					a = [v >> 16, v >> 8 & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") {
						//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) {
							//for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, v >> 8 & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = Number(a[0]) % 360 / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(v[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) {
							//if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = h + 0.5 | 0;
					a[1] = s * 100 + 0.5 | 0;
					a[2] = l * 100 + 0.5 | 0;
				}
				return a;
			},
			    _formatColors = function _formatColors(s, toHSL) {
				var colors = s.match(_colorExp) || [],
				    charIndex = 0,
				    parsed = colors.length ? "" : s,
				    i,
				    color,
				    temp;
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			    _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.
	
			for (p in _colorLookup) {
				_colorExp += "|" + p + "\\b";
			}
			_colorExp = new RegExp(_colorExp + ")", "gi");
	
			CSSPlugin.colorStringFilter = function (a) {
				var combined = a[0] + a[1],
				    toHSL;
				if (_colorExp.test(combined)) {
					toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
					a[0] = _formatColors(a[0], toHSL);
					a[1] = _formatColors(a[1], toHSL);
				}
				_colorExp.lastIndex = 0;
			};
	
			if (!TweenLite.defaultStringFilter) {
				TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
			}
	
			/**
	   * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
	   * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
	   * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
	   * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
	   * @return {Function} formatter function
	   */
			var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function (v) {
						return v;
					};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
				    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
				    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
				    sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
				    delim = dflt.indexOf(" ") !== -1 ? " " : ",",
				    numVals = dVals.length,
				    dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
				    _formatter2;
				if (!numVals) {
					return function (v) {
						return v;
					};
				}
				if (clr) {
					_formatter2 = function formatter(v) {
						var color, vals, i, a;
						if (typeof v === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = _formatter2(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return _formatter2;
				}
				_formatter2 = function _formatter(v) {
					var vals, a, i;
					if (typeof v === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = _formatter2(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return _formatter2;
			},
	
	
			/**
	   * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
	   * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
	   * @return {Function} a formatter function
	   */
			_getEdgeParser = function _getEdgeParser(props) {
				props = props.split(",");
				return function (t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
					    i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},
	
	
			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function (v) {
				this.plugin.setRatio(v);
				var d = this.data,
				    proxy = d.proxy,
				    mpt = d.firstMPT,
				    min = 0.000001,
				    val,
				    pt,
				    i,
				    str,
				    p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = Math.round(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = proxy.rotation;
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = v === 1 ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn" + i] + pt["xs" + (i + 1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},
	
	
			/**
	   * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
	   * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
	   * @param {!string} p property name
	   * @param {(number|string|object)} v value
	   * @param {MiniPropTween=} next next MiniPropTween in the linked list
	   * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
	   */
			MiniPropTween = function MiniPropTween(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},
	
	
			/**
	   * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
	   * This method returns an object that has the following properties:
	   *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
	   *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
	   *  - firstMPT: the first MiniPropTween in the linked list
	   *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
	   * @param {!Object} t target object to be tweened
	   * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
	   * @param {!CSSPlugin} cssp The CSSPlugin instance
	   * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
	   * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
	   * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
	   * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
	   */
			_parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
				    start = {},
				    end = {},
				    transform = cssp._transform,
				    oldForce = _forcePT,
				    i,
				    p,
				    xp,
				    mpt,
				    firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return { proxy: start, end: end, firstMPT: mpt, pt: firstPT };
			},
	
	
			/**
	   * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
	   * CSSPropTweens have the following optional properties as well (not defined through the constructor):
	   *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
	   *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
	   *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
	   *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
	   *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
	   * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
	   * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
	   * @param {number} s Starting numeric value
	   * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
	   * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
	   * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
	   * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
	   * @param {boolean=} r If true, the value(s) should be rounded
	   * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
	   * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
	   * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
	   */
			CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = r; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = b === undefined ? s : b;
				this.e = e === undefined ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},
			    _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
				//cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},
	
	
			/**
	   * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
	   * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
	   * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
	   * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
	   *
	   * @param {!Object} t Target whose property will be tweened
	   * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
	   * @param {string} b Beginning value
	   * @param {string} e Ending value
	   * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
	   * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
	   * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
	   * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
	   * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
	   * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
	   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
	   */
			_parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) {
					//if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "),
				    //beginning array
				ea = e.split(", ").join(",").split(" "),
				    //ending array
				l = ba.length,
				    autoRound = _autoRound !== false,
				    i,
				    xi,
				    ni,
				    bv,
				    ev,
				    bnums,
				    enums,
				    bn,
				    hasAlpha,
				    temp,
				    cv,
				    str,
				    useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i];
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1, true);
	
						//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = bv.length + ev.length > 6;
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
							//older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) {
								//old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra(hasAlpha ? "hsla(" : "hsl(", bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
							} else {
								pt.appendXtra(hasAlpha ? "rgba(" : "rgb(", bv[0], ev[0] - bv[0], ",", true, true).appendXtra("", bv[1], ev[1] - bv[1], ",", true).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, true);
							}
	
							if (hasAlpha) {
								bv = bv.length < 4 ? 1 : bv[3];
								pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array
	
						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev;
	
							//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px", xi === 0);
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			    i = 9;
	
			p = CSSPropTween.prototype;
			p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
			while (--i > 0) {
				p["xn" + i] = 0;
				p["xs" + i] = "";
			}
			p.xs0 = "";
			p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
	
			/**
	   * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
	   * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
	   * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
	   * @param {string=} pfx Prefix (if any)
	   * @param {!number} s Starting value
	   * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
	   * @param {string=} sfx Suffix (if any)
	   * @param {boolean=} r Round (if true).
	   * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
	   * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
	   */
			p.appendXtra = function (pfx, s, c, sfx, r, pad) {
				var pt = this,
				    l = pt.l;
				pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
				if (!c) if (l !== 0 && !pt.plugin) {
					//typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
					pt["xs" + l] += s + (sfx || "");
					return pt;
				}
				pt.l++;
				pt.type = pt.setRatio ? 2 : 1;
				pt["xs" + pt.l] = sfx || "";
				if (l > 0) {
					pt.data["xn" + l] = s + c;
					pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
					pt["xn" + l] = s;
					if (!pt.plugin) {
						pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
						pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
					}
					return pt;
				}
				pt.data = { s: s + c };
				pt.rxp = {};
				pt.s = s;
				pt.c = c;
				pt.r = r;
				return pt;
			};
	
			/**
	   * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
	   * @param {!string} p Property name (like "boxShadow" or "throwProps")
	   * @param {Object=} options An object containing any of the following configuration options:
	   *                      - defaultValue: the default value
	   *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
	   *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
	   *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
	   *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
	   *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
	   *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
	   *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
	   *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
	   */
			var SpecialProp = function SpecialProp(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},
	
	
			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
				if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
					options = { parser: defaults }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
				    d = options.defaultValue,
				    i,
				    temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = i === 0 && options.prefix;
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},
	
	
			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = function _registerPluginProp(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
							var pluginClass = _globals.com.greensock.plugins[pluginName];
							if (!pluginClass) {
								_log("Error: " + pluginName + " js file not loaded.");
								return pt;
							}
							pluginClass._cssRegister();
							return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
						} });
				}
			};
	
			p = SpecialProp.prototype;
	
			/**
	   * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
	   * @param {!Object} t target element
	   * @param {(string|number|object)} b beginning value
	   * @param {(string|number|object)} e ending (destination) value
	   * @param {CSSPropTween=} pt next CSSPropTween in the linked list
	   * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
	   * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
	   * @return {CSSPropTween=} First CSSPropTween in the linked list
	   */
			p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
				var kwd = this.keyword,
				    i,
				    ba,
				    ea,
				    l,
				    bi,
				    ei;
				//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
				if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
					ba = b.replace(_commasOutsideParenExp, "|").split("|");
					ea = e.replace(_commasOutsideParenExp, "|").split("|");
				} else if (kwd) {
					ba = [b];
					ea = [e];
				}
				if (ea) {
					l = ea.length > ba.length ? ea.length : ba.length;
					for (i = 0; i < l; i++) {
						b = ba[i] = ba[i] || this.dflt;
						e = ea[i] = ea[i] || this.dflt;
						if (kwd) {
							bi = b.indexOf(kwd);
							ei = e.indexOf(kwd);
							if (bi !== ei) {
								if (ei === -1) {
									//if the keyword isn't in the end value, remove it from the beginning one.
									ba[i] = ba[i].split(kwd).join("");
								} else if (bi === -1) {
									//if the keyword isn't in the beginning, add it.
									ba[i] += " " + kwd;
								}
							}
						}
					}
					b = ba.join(", ");
					e = ea.join(", ");
				}
				return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
			};
	
			/**
	   * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
	   * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
	   * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
	   * @param {!Object} t Target object whose property is being tweened
	   * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
	   * @param {!string} p Property name
	   * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
	   * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
	   * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
	   * @param {Object=} vars Original vars object that contains the data for parsing.
	   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
	   */
			p.parse = function (t, e, p, cssp, pt, plugin, vars) {
				return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
			};
	
			/**
	   * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
	   *  1) Target object whose property should be tweened (typically a DOM element)
	   *  2) The end/destination value (could be a string, number, object, or whatever you want)
	   *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
	   *
	   * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
	   *
	   * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
	   *      var start = target.style.width;
	   *      return function(ratio) {
	   *              target.style.width = (start + value * ratio) + "px";
	   *              console.log("set width to " + target.style.width);
	   *          }
	   * }, 0);
	   *
	   * Then, when I do this tween, it will trigger my special property:
	   *
	   * TweenLite.to(element, 1, {css:{myCustomProp:100}});
	   *
	   * In the example, of course, we're just changing the width, but you can do anything you want.
	   *
	   * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
	   * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
	   * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
	   */
			CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
				_registerComplexSpecialProp(name, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
						var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
						rv.plugin = plugin;
						rv.setRatio = onInitTween(t, e, cssp._tween, p);
						return rv;
					}, priority: priority });
			};
	
			//transform-related methods and properties
			CSSPlugin.useSVGTransformAttr = _isSafari || _isFirefox; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
			var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
			    _transformProp = _checkPropPrefix("transform"),
			    //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			    _transformOriginProp = _checkPropPrefix("transformOrigin"),
			    _supports3D = _checkPropPrefix("perspective") !== null,
			    Transform = _internals.Transform = function () {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
			},
			    _SVGElement = window.SVGElement,
			    _useSVGTransformAttr,
	
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
	
			_createSVG = function _createSVG(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
				    reg = /([a-z])([A-Z])/g,
				    p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			    _docElement = _doc.documentElement,
			    _forceSVGTransformAttr = function () {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || /Android/i.test(_agent) && !window.chrome,
				    svg,
				    rect,
				    width;
				if (_doc.createElementNS && !force) {
					//IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, { width: 100, height: 50, x: 100 });
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			}(),
			    _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
				    m = _getMatrix(e, true),
				    v,
				    x,
				    y,
				    xOrigin,
				    yOrigin,
				    a,
				    b,
				    c,
				    d,
				    tx,
				    ty,
				    determinant,
				    xOriginOld,
				    yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) {
					//if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = a * d - b * c;
					x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
					y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
					xOrigin = decoratee.xOrigin = v[0] = x;
					yOrigin = decoratee.yOrigin = v[1] = y;
				}
				if (tm) {
					//avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += x * m[0] + y * m[2] - x;
						tm.yOffset += x * m[1] + y * m[3] - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			    _canGetBBox = function _canGetBBox(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (e) {}
			},
			    _isSVG = function _isSVG(e) {
				//reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getBBox && e.getCTM && _canGetBBox(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM));
			},
			    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
			    _getMatrix = function _getMatrix(e, force2D) {
				var tm = e._gsTransform || new Transform(),
				    rnd = 100000,
				    style = e.style,
				    isDefault,
				    s,
				    m,
				    n,
				    dec,
				    none;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
				}
				isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
				if (isDefault && _transformProp && ((none = _getComputedStyle(e).display === "none") || !e.parentNode)) {
					if (none) {
						//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none".
						n = style.display;
						style.display = "block";
					}
					if (!e.parentNode) {
						dec = 1; //flag
						_docElement.appendChild(e);
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
					if (n) {
						style.display = n;
					} else if (none) {
						_removeProp(style, "display");
					}
					if (dec) {
						_docElement.removeChild(e);
					}
				}
				if (tm.svg || e.getBBox && _isSVG(e)) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
						//some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						if (m.indexOf("matrix") !== -1) {
							//just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
							s = m;
							isDefault = 0;
						} else if (m.indexOf("translate") !== -1) {
							s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
							isDefault = 0;
						}
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},
	
	
			/**
	   * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
	   * @param {!Object} t target element
	   * @param {Object=} cs computed style object (optional)
	   * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
	   * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
	   * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
	   */
			_getTransform = _internals.getTransform = function (t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
				    invX = tm.scaleX < 0,
				    //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
				min = 0.00002,
				    rnd = 100000,
				    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
				    defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
				    m,
				    i,
				    scaleX,
				    scaleY,
				    rotation,
				    skewX;
	
				tm.svg = !!(t.getBBox && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {
	
					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0],
						    a21 = m[1],
						    a31 = m[2],
						    a41 = m[3],
						    a12 = m[4],
						    a22 = m[5],
						    a32 = m[6],
						    a42 = m[7],
						    a13 = m[8],
						    a23 = m[9],
						    a33 = m[10],
						    a14 = m[12],
						    a24 = m[13],
						    a34 = m[14],
						    a43 = m[11],
						    angle = Math.atan2(a32, a33),
						    t1,
						    t2,
						    t3,
						    t4,
						    cos,
						    sin;
	
						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13 * a34 - m[12];
							a24 = a23 * a34 - m[13];
							a34 = a33 * a34 + tm.zOrigin - m[14];
						}
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12 * cos + a13 * sin;
							t2 = a22 * cos + a23 * sin;
							t3 = a32 * cos + a33 * sin;
							a13 = a12 * -sin + a13 * cos;
							a23 = a22 * -sin + a23 * cos;
							a33 = a32 * -sin + a33 * cos;
							a43 = a42 * -sin + a43 * cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11 * cos - a13 * sin;
							t2 = a21 * cos - a23 * sin;
							t3 = a31 * cos - a33 * sin;
							a23 = a21 * sin + a23 * cos;
							a33 = a31 * sin + a33 * cos;
							a43 = a41 * sin + a43 * cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							a11 = a11 * cos + a12 * sin;
							t2 = a21 * cos + a22 * sin;
							a22 = a21 * -sin + a22 * cos;
							a32 = a31 * -sin + a32 * cos;
							a21 = t2;
						}
	
						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
							//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}
	
						tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5 | 0) / rnd;
						tm.scaleY = (Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5 | 0) / rnd;
						tm.scaleZ = (Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5 | 0) / rnd;
						if (tm.rotationX || tm.rotationY) {
							tm.skewX = 0;
						} else {
							tm.skewX = a12 || a22 ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
							if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
								if (invX) {
									tm.scaleX *= -1;
									tm.skewX += tm.rotation <= 0 ? 180 : -180;
									tm.rotation += tm.rotation <= 0 ? 180 : -180;
								} else {
									tm.scaleY *= -1;
									tm.skewX += tm.skewX <= 0 ? 180 : -180;
								}
							}
						}
						tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}
					} else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
						//sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = m.length >= 6,
						    a = k ? m[0] : 1,
						    b = m[1] || 0,
						    c = m[2] || 0,
						    d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
							if (invX) {
								scaleX *= -1;
								skewX += rotation <= 0 ? 180 : -180;
								rotation += rotation <= 0 ? 180 : -180;
							} else {
								scaleY *= -1;
								skewX += skewX <= 0 ? 180 : -180;
							}
						}
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) {
						//if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							TweenLite.delayedCall(0.001, function () {
								//if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							TweenLite.delayedCall(0.001, function () {
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},
	
	
			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function _setIETransformRatio(v) {
				var t = this.data,
				    //refers to the element's _gsTransform object
				ang = -t.rotation * _DEG2RAD,
				    skew = ang + t.skewX * _DEG2RAD,
				    rnd = 100000,
				    a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
				    b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
				    c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
				    d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
				    style = this.t.style,
				    cs = this.t.currentStyle,
				    filters,
				    val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
				    h = this.t.offsetHeight,
				    clip = cs.position !== "absolute",
				    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
				    ox = t.x + w * t.xPercent / 100,
				    oy = t.y + h * t.yPercent / 100,
				    dx,
				    dy;
	
				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}
	
				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = w / 2;
					dy = h / 2;
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}
	
				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}
	
				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = _ieVers < 8 ? 1 : -1,
					    //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
					marg,
					    prop,
					    dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
					}
				}
			},
	
	
			/* translates a super small decimal to a string WITHOUT scientific notation
	  _safeDecimal = function(n) {
	  	var s = (n < 0 ? -n : n) + "",
	  		a = s.split("e-");
	  	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
	  },
	  */
	
			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
				var t = this.data,
				    //refers to the element's _gsTransform object
				style = this.t.style,
				    angle = t.rotation,
				    rotationX = t.rotationX,
				    rotationY = t.rotationY,
				    sx = t.scaleX,
				    sy = t.scaleY,
				    sz = t.scaleZ,
				    x = t.x,
				    y = t.y,
				    z = t.z,
				    isSVG = t.svg,
				    perspective = t.perspective,
				    force3D = t.force3D,
				    a11,
				    a12,
				    a13,
				    a21,
				    a22,
				    a23,
				    a31,
				    a32,
				    a33,
				    a41,
				    a42,
				    a43,
				    zOrigin,
				    min,
				    cos,
				    sin,
				    t1,
				    t2,
				    transform,
				    comma,
				    zero,
				    skew,
				    rnd;
				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
					//on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
	
					//2D
					if (angle || t.skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = t.skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") {
							//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
								//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;
				}
				if (_isFirefox) {
					//Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) {
						//Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || t.skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (t.skewX) {
						angle -= t.skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") {
							//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(t.skewX * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;
				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
					//if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = perspective ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43 * -sin;
					a13 = a11 * sin;
					a23 = a21 * sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12 * cos + a13 * sin;
					t2 = a22 * cos + a23 * sin;
					a32 = a33 * sin;
					a42 = a43 * sin;
					a13 = a12 * -sin + a13 * cos;
					a23 = a22 * -sin + a23 * cos;
					a33 = a33 * cos;
					a43 = a43 * cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13 *= sz;
					a23 *= sz;
					a33 *= sz;
					a43 *= sz;
				}
				if (sy !== 1) {
					a12 *= sy;
					a22 *= sy;
					a32 *= sy;
					a42 *= sy;
				}
				if (sx !== 1) {
					a11 *= sx;
					a21 *= sx;
					a31 *= sx;
					a41 *= sx;
				}
	
				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13 * -zOrigin;
						y += a23 * -zOrigin;
						z += a33 * -zOrigin + zOrigin;
					}
					if (isSVG) {
						//due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}
	
				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
				transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
				transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);
				if (rotationX || rotationY || sz !== 1) {
					//performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
					transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";
	
				style[_transformProp] = transform;
			};
	
			p = Transform.prototype;
			p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
			p.scaleX = p.scaleY = p.scaleZ = 1;
	
			_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
					if (cssp._lastParsedTransform === vars) {
						return pt;
					} //only need to parse the transform once, and only if the browser supports it.
					cssp._lastParsedTransform = vars;
					var originalGSTransform = t._gsTransform,
					    style = t.style,
					    min = 0.000001,
					    i = _transformProps.length,
					    v = vars,
					    endRotations = {},
					    transformOriginString = "transformOrigin",
					    m1 = _getTransform(t, _cs, true, vars.parseTransform),
					    m2,
					    copy,
					    orig,
					    has3D,
					    hasChange,
					    dr,
					    x,
					    y,
					    matrix;
					cssp._transform = m1;
					if (typeof v.transform === "string" && _transformProp) {
						//for values like transform:"rotate(60deg) scale(0.5, 0.8)"
						copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
						copy[_transformProp] = v.transform;
						copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
						copy.position = "absolute";
						_doc.body.appendChild(_tempDiv);
						m2 = _getTransform(_tempDiv, null, false);
						if (m1.svg) {
							//if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
							x = m1.xOrigin;
							y = m1.yOrigin;
							m2.x -= m1.xOffset;
							m2.y -= m1.yOffset;
							if (v.transformOrigin || v.svgOrigin) {
								//if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
								orig = {};
								_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
								x = orig.xOrigin;
								y = orig.yOrigin;
								m2.x -= orig.xOffset - m1.xOffset;
								m2.y -= orig.yOffset - m1.yOffset;
							}
							if (x || y) {
								matrix = _getMatrix(_tempDiv, true);
								m2.x -= x - (x * matrix[0] + y * matrix[2]);
								m2.y -= y - (x * matrix[1] + y * matrix[3]);
							}
						}
						_doc.body.removeChild(_tempDiv);
						if (!m2.perspective) {
							m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
						}
						if (v.xPercent != null) {
							m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
						}
						if (v.yPercent != null) {
							m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
						}
					} else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
						//for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
						m2 = { scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
							scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
							scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
							x: _parseVal(v.x, m1.x),
							y: _parseVal(v.y, m1.y),
							z: _parseVal(v.z, m1.z),
							xPercent: _parseVal(v.xPercent, m1.xPercent),
							yPercent: _parseVal(v.yPercent, m1.yPercent),
							perspective: _parseVal(v.transformPerspective, m1.perspective) };
						dr = v.directionalRotation;
						if (dr != null) {
							if ((typeof dr === "undefined" ? "undefined" : _typeof(dr)) === "object") {
								for (copy in dr) {
									v[copy] = dr[copy];
								}
							} else {
								v.rotation = dr;
							}
						}
						if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
							m2.x = 0;
							m2.xPercent = _parseVal(v.x, m1.xPercent);
						}
						if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
							m2.y = 0;
							m2.yPercent = _parseVal(v.y, m1.yPercent);
						}
	
						m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m1.rotation - m1.skewY, m1.rotation - m1.skewY, "rotation", endRotations); //see notes below about skewY for why we subtract it from rotation here
						if (_supports3D) {
							m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
							m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
						}
						m2.skewX = _parseAngle(v.skewX, m1.skewX - m1.skewY); //see notes below about skewY and why we subtract it from skewX here
	
						//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
						if (m2.skewY = _parseAngle(v.skewY, m1.skewY)) {
							m2.skewX += m2.skewY;
							m2.rotation += m2.skewY;
						}
					}
					if (_supports3D && v.force3D != null) {
						m1.force3D = v.force3D;
						hasChange = true;
					}
	
					m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
	
					has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;
					if (!has3D && v.scale != null) {
						m2.scaleZ = 1; //no need to tween scaleZ.
					}
	
					while (--i > -1) {
						p = _transformProps[i];
						orig = m2[p] - m1[p];
						if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
							hasChange = true;
							pt = new CSSPropTween(m1, p, m1[p], orig, pt);
							if (p in endRotations) {
								pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
							}
							pt.xs0 = 0; //ensures the value stays numeric in setRatio()
							pt.plugin = plugin;
							cssp._overwriteProps.push(pt.n);
						}
					}
	
					orig = v.transformOrigin;
					if (m1.svg && (orig || v.svgOrigin)) {
						x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
						y = m1.yOffset;
						_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
						pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
						pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
						if (x !== m1.xOffset || y !== m1.yOffset) {
							pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
							pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
						}
						orig = _useSVGTransformAttr ? null : "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
					}
					if (orig || _supports3D && has3D && m1.zOrigin) {
						//if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
						if (_transformProp) {
							hasChange = true;
							p = _transformOriginProp;
							orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
							pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
							pt.b = style[p];
							pt.plugin = plugin;
							if (_supports3D) {
								copy = m1.zOrigin;
								orig = orig.split(" ");
								m1.zOrigin = (orig.length > 2 && !(copy !== 0 && orig[2] === "0px") ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
								pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
								pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
								pt.b = copy;
								pt.xs0 = pt.e = m1.zOrigin;
							} else {
								pt.xs0 = pt.e = orig;
							}
	
							//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
						} else {
							_parsePosition(orig + "", m1);
						}
					}
					if (hasChange) {
						cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
					}
					return pt;
				}, prefix: true });
	
			_registerComplexSpecialProp("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: true, color: true, multi: true, keyword: "inset" });
	
			_registerComplexSpecialProp("borderRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
					e = this.format(e);
					var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
					    style = t.style,
					    ea1,
					    i,
					    es2,
					    bs2,
					    bs,
					    es,
					    bn,
					    en,
					    w,
					    h,
					    esfx,
					    bsfx,
					    rel,
					    hn,
					    vn,
					    em;
					w = parseFloat(t.offsetWidth);
					h = parseFloat(t.offsetHeight);
					ea1 = e.split(" ");
					for (i = 0; i < props.length; i++) {
						//if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
						if (this.p.indexOf("border")) {
							//older browsers used a prefix
							props[i] = _checkPropPrefix(props[i]);
						}
						bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
						if (bs.indexOf(" ") !== -1) {
							bs2 = bs.split(" ");
							bs = bs2[0];
							bs2 = bs2[1];
						}
						es = es2 = ea1[i];
						bn = parseFloat(bs);
						bsfx = bs.substr((bn + "").length);
						rel = es.charAt(1) === "=";
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
						} else {
							en = parseFloat(es);
							esfx = es.substr((en + "").length);
						}
						if (esfx === "") {
							esfx = _suffixMap[p] || bsfx;
						}
						if (esfx !== bsfx) {
							hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
							vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
							if (esfx === "%") {
								bs = hn / w * 100 + "%";
								bs2 = vn / h * 100 + "%";
							} else if (esfx === "em") {
								em = _convertToPixels(t, "borderLeft", 1, "em");
								bs = hn / em + "em";
								bs2 = vn / em + "em";
							} else {
								bs = hn + "px";
								bs2 = vn + "px";
							}
							if (rel) {
								es = parseFloat(bs) + en + esfx;
								es2 = parseFloat(bs2) + en + esfx;
							}
						}
						pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
					}
					return pt;
				}, prefix: true, formatter: _getFormatter("0px 0px 0px 0px", false, true) });
			_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
					return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
				}, prefix: true, formatter: _getFormatter("0px 0px", false, true) });
			_registerComplexSpecialProp("backgroundPosition", { defaultValue: "0 0", parser: function parser(t, e, p, cssp, pt, plugin) {
					var bp = "background-position",
					    cs = _cs || _getComputedStyle(t, null),
					    bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
					    //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
					es = this.format(e),
					    ba,
					    ea,
					    i,
					    pct,
					    overlap,
					    src;
					if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
						src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
						if (src && src !== "none") {
							ba = bs.split(" ");
							ea = es.split(" ");
							_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
							i = 2;
							while (--i > -1) {
								bs = ba[i];
								pct = bs.indexOf("%") !== -1;
								if (pct !== (ea[i].indexOf("%") !== -1)) {
									overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
									ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
								}
							}
							bs = ba.join(" ");
						}
					}
					return this.parseComplex(t.style, bs, es, pt, plugin);
				}, formatter: _parsePosition });
			_registerComplexSpecialProp("backgroundSize", { defaultValue: "0 0", formatter: _parsePosition });
			_registerComplexSpecialProp("perspective", { defaultValue: "0px", prefix: true });
			_registerComplexSpecialProp("perspectiveOrigin", { defaultValue: "50% 50%", prefix: true });
			_registerComplexSpecialProp("transformStyle", { prefix: true });
			_registerComplexSpecialProp("backfaceVisibility", { prefix: true });
			_registerComplexSpecialProp("userSelect", { prefix: true });
			_registerComplexSpecialProp("margin", { parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft") });
			_registerComplexSpecialProp("padding", { parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft") });
			_registerComplexSpecialProp("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(t, e, p, cssp, pt, plugin) {
					var b, cs, delim;
					if (_ieVers < 9) {
						//IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
						cs = t.currentStyle;
						delim = _ieVers < 8 ? " " : ",";
						b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
						e = this.format(e).split(",").join(delim);
					} else {
						b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
						e = this.format(e);
					}
					return this.parseComplex(t.style, b, e, pt, plugin);
				} });
			_registerComplexSpecialProp("textShadow", { defaultValue: "0px 0px 0px #999", color: true, multi: true });
			_registerComplexSpecialProp("autoRound,strictUnits", { parser: function parser(t, e, p, cssp, pt) {
					return pt;
				} }); //just so that we can ignore these properties (not tween them)
			_registerComplexSpecialProp("border", { defaultValue: "0px solid #000", parser: function parser(t, e, p, cssp, pt, plugin) {
					var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
					    end = this.format(e).split(" "),
					    esfx = end[0].replace(_suffixExp, "");
					if (esfx !== "px") {
						//if we're animating to a non-px value, we need to convert the beginning width to that unit.
						bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
					}
					return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
				}, color: true, formatter: function formatter(v) {
					var a = v.split(" ");
					return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
				} });
			_registerComplexSpecialProp("borderWidth", { parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
			_registerComplexSpecialProp("float,cssFloat,styleFloat", { parser: function parser(t, e, p, cssp, pt, plugin) {
					var s = t.style,
					    prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
					return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
				} });
	
			//opacity-related
			var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
				var t = this.t,
				    //refers to the element's style property
				filters = t.filter || _getStyle(this.data, "filter") || "",
				    val = this.s + this.c * v | 0,
				    skip;
				if (val === 100) {
					//for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) {
						//only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) {
							//bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
			_registerComplexSpecialProp("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(t, e, p, cssp, pt, plugin) {
					var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
					    style = t.style,
					    isAutoAlpha = p === "autoAlpha";
					if (typeof e === "string" && e.charAt(1) === "=") {
						e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
					}
					if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
						//if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
						b = 0;
					}
					if (_supportsOpacity) {
						pt = new CSSPropTween(style, "opacity", b, e - b, pt);
					} else {
						pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
						pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
						style.zoom = 1; //helps correct an IE issue.
						pt.type = 2;
						pt.b = "alpha(opacity=" + pt.s + ")";
						pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
						pt.data = t;
						pt.plugin = plugin;
						pt.setRatio = _setIEOpacityRatio;
					}
					if (isAutoAlpha) {
						//we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
						pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
						pt.xs0 = "inherit";
						cssp._overwriteProps.push(pt.n);
						cssp._overwriteProps.push(p);
					}
					return pt;
				} });
	
			var _removeProp = function _removeProp(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
							//Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else {
						//note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			    _setClassNameRatio = function _setClassNameRatio(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", v === 0 ? this.b : this.e);
					var mpt = this.data,
					    //first MiniPropTween
					s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
			_registerComplexSpecialProp("className", { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
					var b = t.getAttribute("class") || "",
					    //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
					cssText = t.style.cssText,
					    difData,
					    bs,
					    cnpt,
					    cnptLookup,
					    mpt;
					pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
					pt.setRatio = _setClassNameRatio;
					pt.pr = -11;
					_hasPriority = true;
					pt.b = b;
					bs = _getAllStyles(t, _cs);
					//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
					cnpt = t._gsClassPT;
					if (cnpt) {
						cnptLookup = {};
						mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
						while (mpt) {
							cnptLookup[mpt.p] = 1;
							mpt = mpt._next;
						}
						cnpt.setRatio(1);
					}
					t._gsClassPT = pt;
					pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
					t.setAttribute("class", pt.e);
					difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
					t.setAttribute("class", b);
					pt.data = difData.firstMPT;
					t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
					pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
					return pt;
				} });
	
			var _setClearPropsRatio = function _setClearPropsRatio(v) {
				if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
					//this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
					var s = this.t.style,
					    transformParse = _specialProps.transform.parse,
					    a,
					    p,
					    i,
					    clearTransform,
					    transform;
					if (this.e === "all") {
						s.cssText = "";
						clearTransform = true;
					} else {
						a = this.e.split(" ").join("").split(",");
						i = a.length;
						while (--i > -1) {
							p = a[i];
							if (_specialProps[p]) {
								if (_specialProps[p].parse === transformParse) {
									clearTransform = true;
								} else {
									p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
								}
							}
							_removeProp(s, p);
						}
					}
					if (clearTransform) {
						_removeProp(s, _transformProp);
						transform = this.t._gsTransform;
						if (transform) {
							if (transform.svg) {
								this.t.removeAttribute("data-svg-origin");
								this.t.removeAttribute("transform");
							}
							delete this.t._gsTransform;
						}
					}
				}
			};
			_registerComplexSpecialProp("clearProps", { parser: function parser(t, e, p, cssp, pt) {
					pt = new CSSPropTween(t, p, 0, 0, pt, 2);
					pt.setRatio = _setClearPropsRatio;
					pt.e = e;
					pt.pr = -10;
					pt.data = cssp._tween;
					_hasPriority = true;
					return pt;
				} });
	
			p = "bezier,throwProps,physicsProps,physics2D".split(",");
			i = p.length;
			while (i--) {
				_registerPluginProp(p[i]);
			}
	
			p = CSSPlugin.prototype;
			p._firstPT = p._lastParsedTransform = p._transform = null;
	
			//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
			p._onInitTween = function (target, vars, tween) {
				if (!target.nodeType) {
					//css is only for dom elements
					return false;
				}
				this._target = target;
				this._tween = tween;
				this._vars = vars;
				_autoRound = vars.autoRound;
				_hasPriority = false;
				_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
				_cs = _getComputedStyle(target, "");
				_overwriteProps = this._overwriteProps;
				var style = target.style,
				    v,
				    pt,
				    pt2,
				    first,
				    last,
				    next,
				    zIndex,
				    tpt,
				    threeD;
				if (_reqSafariFix) if (style.zIndex === "") {
					v = _getStyle(target, "zIndex", _cs);
					if (v === "auto" || v === "") {
						//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
						this._addLazySet(style, "zIndex", 0);
					}
				}
	
				if (typeof vars === "string") {
					first = style.cssText;
					v = _getAllStyles(target, _cs);
					style.cssText = first + ";" + vars;
					v = _cssDif(target, v, _getAllStyles(target)).difs;
					if (!_supportsOpacity && _opacityValExp.test(vars)) {
						v.opacity = parseFloat(RegExp.$1);
					}
					vars = v;
					style.cssText = first;
				}
	
				if (vars.className) {
					//className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
					this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
				} else {
					this._firstPT = pt = this.parse(target, vars, null);
				}
	
				if (this._transformType) {
					threeD = this._transformType === 3;
					if (!_transformProp) {
						style.zoom = 1; //helps correct an IE issue.
					} else if (_isSafari) {
						_reqSafariFix = true;
						//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
						if (style.zIndex === "") {
							zIndex = _getStyle(target, "zIndex", _cs);
							if (zIndex === "auto" || zIndex === "") {
								this._addLazySet(style, "zIndex", 0);
							}
						}
						//Setting WebkitBackfaceVisibility corrects 3 bugs:
						// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
						// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
						// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
						//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
						if (_isSafariLT6) {
							this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
						}
					}
					pt2 = pt;
					while (pt2 && pt2._next) {
						pt2 = pt2._next;
					}
					tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
					this._linkCSSP(tpt, null, pt2);
					tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
					tpt.data = this._transform || _getTransform(target, _cs, true);
					tpt.tween = tween;
					tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
					_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
				}
	
				if (_hasPriority) {
					//reorders the linked list in order of pr (priority)
					while (pt) {
						next = pt._next;
						pt2 = first;
						while (pt2 && pt2.pr > pt.pr) {
							pt2 = pt2._next;
						}
						if (pt._prev = pt2 ? pt2._prev : last) {
							pt._prev._next = pt;
						} else {
							first = pt;
						}
						if (pt._next = pt2) {
							pt2._prev = pt;
						} else {
							last = pt;
						}
						pt = next;
					}
					this._firstPT = first;
				}
				return true;
			};
	
			p.parse = function (target, vars, pt, plugin) {
				var style = target.style,
				    p,
				    sp,
				    bn,
				    en,
				    bs,
				    es,
				    bsfx,
				    esfx,
				    isStr,
				    rel;
				for (p in vars) {
					es = vars[p]; //ending value string
					sp = _specialProps[p]; //SpecialProp lookup.
					if (sp) {
						pt = sp.parse(target, es, p, this, pt, plugin, vars);
					} else {
						bs = _getStyle(target, p, _cs) + "";
						isStr = typeof es === "string";
						if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
							//Opera uses background: to define color sometimes in addition to backgroundColor:
							if (!isStr) {
								es = _parseColor(es);
								es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
							}
							pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
						} else if (isStr && _complexExp.test(es)) {
							pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
						} else {
							bn = parseFloat(bs);
							bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.
	
							if (bs === "" || bs === "auto") {
								if (p === "width" || p === "height") {
									bn = _getDimension(target, p, _cs);
									bsfx = "px";
								} else if (p === "left" || p === "top") {
									bn = _calculateOffset(target, p, _cs);
									bsfx = "px";
								} else {
									bn = p !== "opacity" ? 0 : 1;
									bsfx = "";
								}
							}
	
							rel = isStr && es.charAt(1) === "=";
							if (rel) {
								en = parseInt(es.charAt(0) + "1", 10);
								es = es.substr(2);
								en *= parseFloat(es);
								esfx = es.replace(_suffixExp, "");
							} else {
								en = parseFloat(es);
								esfx = isStr ? es.replace(_suffixExp, "") : "";
							}
	
							if (esfx === "") {
								esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
							}
	
							es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
	
							//if the beginning/ending suffixes don't match, normalize them...
							if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) {
								//note: if the beginning value (bn) is 0, we don't need to convert units!
								bn = _convertToPixels(target, p, bn, bsfx);
								if (esfx === "%") {
									bn /= _convertToPixels(target, p, 100, "%") / 100;
									if (vars.strictUnits !== true) {
										//some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
										bs = bn + "%";
									}
								} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
									bn /= _convertToPixels(target, p, 1, esfx);
	
									//otherwise convert to pixels.
								} else if (esfx !== "px") {
									en = _convertToPixels(target, p, en, esfx);
									esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
								}
								if (rel) if (en || en === 0) {
									es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
								}
							}
	
							if (rel) {
								en += bn;
							}
	
							if ((bn || bn === 0) && (en || en === 0)) {
								//faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
								pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
								pt.xs0 = esfx;
								//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
							} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
								_log("invalid " + p + " tween value: " + vars[p]);
							} else {
								pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
								pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
								//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
							}
						}
					}
					if (plugin) if (pt && !pt.plugin) {
						pt.plugin = plugin;
					}
				}
				return pt;
			};
	
			//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
			p.setRatio = function (v) {
				var pt = this._firstPT,
				    min = 0.000001,
				    val,
				    str,
				    i;
				//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
				if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
					while (pt) {
						if (pt.type !== 2) {
							if (pt.r && pt.type !== -1) {
								val = Math.round(pt.s + pt.c);
								if (!pt.type) {
									pt.t[pt.p] = val + pt.xs0;
								} else if (pt.type === 1) {
									//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
									i = pt.l;
									str = pt.xs0 + val + pt.xs1;
									for (i = 1; i < pt.l; i++) {
										str += pt["xn" + i] + pt["xs" + (i + 1)];
									}
									pt.t[pt.p] = str;
								}
							} else {
								pt.t[pt.p] = pt.e;
							}
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}
				} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
					while (pt) {
						val = pt.c * v + pt.s;
						if (pt.r) {
							val = Math.round(val);
						} else if (val < min) if (val > -min) {
							val = 0;
						}
						if (!pt.type) {
							pt.t[pt.p] = val + pt.xs0;
						} else if (pt.type === 1) {
							//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
							i = pt.l;
							if (i === 2) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
							} else if (i === 3) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
							} else if (i === 4) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
							} else if (i === 5) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
							} else {
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn" + i] + pt["xs" + (i + 1)];
								}
								pt.t[pt.p] = str;
							}
						} else if (pt.type === -1) {
							//non-tweening value
							pt.t[pt.p] = pt.xs0;
						} else if (pt.setRatio) {
							//custom setRatio() for things like SpecialProps, external plugins, etc.
							pt.setRatio(v);
						}
						pt = pt._next;
					}
	
					//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
				} else {
					while (pt) {
						if (pt.type !== 2) {
							pt.t[pt.p] = pt.b;
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}
				}
			};
	
			/**
	   * @private
	   * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
	   * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
	   * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
	   * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
	   * doesn't have any transform-related properties of its own. You can call this method as many times as you
	   * want and it won't create duplicate CSSPropTweens.
	   *
	   * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
	   */
			p._enableTransforms = function (threeD) {
				this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
				this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
			};
	
			var lazySet = function lazySet(v) {
				this.t[this.p] = this.e;
				this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
			};
			/** @private Gives us a way to set a value on the first render (and only the first render). **/
			p._addLazySet = function (t, p, v) {
				var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
				pt.e = v;
				pt.setRatio = lazySet;
				pt.data = this;
			};
	
			/** @private **/
			p._linkCSSP = function (pt, next, prev, remove) {
				if (pt) {
					if (next) {
						next._prev = pt;
					}
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
						remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
					}
					if (prev) {
						prev._next = pt;
					} else if (!remove && this._firstPT === null) {
						this._firstPT = pt;
					}
					pt._next = next;
					pt._prev = prev;
				}
				return pt;
			};
	
			//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
			p._kill = function (lookup) {
				var copy = lookup,
				    pt,
				    p,
				    xfirst;
				if (lookup.autoAlpha || lookup.alpha) {
					copy = {};
					for (p in lookup) {
						//copy the lookup so that we're not changing the original which may be passed elsewhere.
						copy[p] = lookup[p];
					}
					copy.opacity = 1;
					if (copy.autoAlpha) {
						copy.visibility = 1;
					}
				}
				if (lookup.className && (pt = this._classNamePT)) {
					//for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
					xfirst = pt.xfirst;
					if (xfirst && xfirst._prev) {
						this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
					} else if (xfirst === this._firstPT) {
						this._firstPT = pt._next;
					}
					if (pt._next) {
						this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
					}
					this._classNamePT = null;
				}
				return TweenPlugin.prototype._kill.call(this, copy);
			};
	
			//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
			var _getChildStyles = function _getChildStyles(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};
	
			/**
	   * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
	   * and then compares the style properties of all the target's child elements at the tween's start and end, and
	   * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
	   * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
	   * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
	   * is because it creates entirely new tweens that may have completely different targets than the original tween,
	   * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
	   * and it would create other problems. For example:
	   *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
	   *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
	   *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
	   *
	   * @param {Object} target object to be tweened
	   * @param {number} Duration in seconds (or frames for frames-based tweens)
	   * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
	   * @return {Array} An array of TweenLite instances
	   */
			CSSPlugin.cascadeTo = function (target, duration, vars) {
				var tween = TweenLite.to(target, duration, vars),
				    results = [tween],
				    b = [],
				    e = [],
				    targets = [],
				    _reservedProps = TweenLite._internals.reservedProps,
				    i,
				    difs,
				    p,
				    from;
				target = tween._targets || tween.target;
				_getChildStyles(target, b, targets);
				tween.render(duration, true, true);
				_getChildStyles(target, e);
				tween.render(0, true, true);
				tween._enabled(true);
				i = targets.length;
				while (--i > -1) {
					difs = _cssDif(targets[i], b[i], e[i]);
					if (difs.firstMPT) {
						difs = difs.difs;
						for (p in vars) {
							if (_reservedProps[p]) {
								difs[p] = vars[p];
							}
						}
						from = {};
						for (p in difs) {
							from[p] = b[i][p];
						}
						results.push(TweenLite.fromTo(targets[i], duration, from, difs));
					}
				}
				return results;
			};
	
			TweenPlugin.activate([CSSPlugin]);
			return CSSPlugin;
		}, true);
	
		/*
	  * ----------------------------------------------------------------
	  * RoundPropsPlugin
	  * ----------------------------------------------------------------
	  */
		(function () {
	
			var RoundPropsPlugin = _gsScope._gsDefine.plugin({
				propName: "roundProps",
				version: "1.5",
				priority: -1,
				API: 2,
	
				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function init(target, value, tween) {
					this._tween = tween;
					return true;
				}
	
			}),
			    _roundLinkedList = function _roundLinkedList(node) {
				while (node) {
					if (!node.f && !node.blob) {
						node.r = 1;
					}
					node = node._next;
				}
			},
			    p = RoundPropsPlugin.prototype;
	
			p._onInitAllProps = function () {
				var tween = this._tween,
				    rp = tween.vars.roundProps.join ? tween.vars.roundProps : tween.vars.roundProps.split(","),
				    i = rp.length,
				    lookup = {},
				    rpt = tween._propLookup.roundProps,
				    prop,
				    pt,
				    next;
				while (--i > -1) {
					lookup[rp[i]] = 1;
				}
				i = rp.length;
				while (--i > -1) {
					prop = rp[i];
					pt = tween._firstPT;
					while (pt) {
						next = pt._next; //record here, because it may get removed
						if (pt.pg) {
							pt.t._roundProps(lookup, true);
						} else if (pt.n === prop) {
							if (pt.f === 2 && pt.t) {
								//a blob (text containing multiple numeric values)
								_roundLinkedList(pt.t._firstPT);
							} else {
								this._add(pt.t, prop, pt.s, pt.c);
								//remove from linked list
								if (next) {
									next._prev = pt._prev;
								}
								if (pt._prev) {
									pt._prev._next = next;
								} else if (tween._firstPT === pt) {
									tween._firstPT = next;
								}
								pt._next = pt._prev = null;
								tween._propLookup[prop] = rpt;
							}
						}
						pt = next;
					}
				}
				return false;
			};
	
			p._add = function (target, p, s, c) {
				this._addTween(target, p, s, s + c, p, true);
				this._overwriteProps.push(p);
			};
		})();
	
		/*
	  * ----------------------------------------------------------------
	  * AttrPlugin
	  * ----------------------------------------------------------------
	  */
	
		(function () {
	
			_gsScope._gsDefine.plugin({
				propName: "attr",
				API: 2,
				version: "0.5.0",
	
				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function init(target, value, tween) {
					var p;
					if (typeof target.setAttribute !== "function") {
						return false;
					}
					for (p in value) {
						this._addTween(target, "setAttribute", target.getAttribute(p) + "", value[p] + "", p, false, p);
						this._overwriteProps.push(p);
					}
					return true;
				}
	
			});
		})();
	
		/*
	  * ----------------------------------------------------------------
	  * DirectionalRotationPlugin
	  * ----------------------------------------------------------------
	  */
		_gsScope._gsDefine.plugin({
			propName: "directionalRotation",
			version: "0.2.1",
			API: 2,
	
			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
			init: function init(target, value, tween) {
				if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") {
					value = { rotation: value };
				}
				this.finals = {};
				var cap = value.useRadians === true ? Math.PI * 2 : 360,
				    min = 0.000001,
				    p,
				    v,
				    start,
				    end,
				    dif,
				    split;
				for (p in value) {
					if (p !== "useRadians") {
						split = (value[p] + "").split("_");
						v = split[0];
						start = parseFloat(typeof target[p] !== "function" ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]());
						end = this.finals[p] = typeof v === "string" && v.charAt(1) === "=" ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
						dif = end - start;
						if (split.length) {
							v = split.join("_");
							if (v.indexOf("short") !== -1) {
								dif = dif % cap;
								if (dif !== dif % (cap / 2)) {
									dif = dif < 0 ? dif + cap : dif - cap;
								}
							}
							if (v.indexOf("_cw") !== -1 && dif < 0) {
								dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
							} else if (v.indexOf("ccw") !== -1 && dif > 0) {
								dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
							}
						}
						if (dif > min || dif < -min) {
							this._addTween(target, p, start, start + dif, p);
							this._overwriteProps.push(p);
						}
					}
				}
				return true;
			},
	
			//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
			set: function set(ratio) {
				var pt;
				if (ratio !== 1) {
					this._super.setRatio.call(this, ratio);
				} else {
					pt = this._firstPT;
					while (pt) {
						if (pt.f) {
							pt.t[pt.p](this.finals[pt.p]);
						} else {
							pt.t[pt.p] = this.finals[pt.p];
						}
						pt = pt._next;
					}
				}
			}
	
		})._autoCSS = true;
	
		/*
	  * ----------------------------------------------------------------
	  * EasePack
	  * ----------------------------------------------------------------
	  */
		_gsScope._gsDefine("easing.Back", ["easing.Ease"], function (Ease) {
	
			var w = _gsScope.GreenSockGlobals || _gsScope,
			    gs = w.com.greensock,
			    _2PI = Math.PI * 2,
			    _HALF_PI = Math.PI / 2,
			    _class = gs._class,
			    _create = function _create(n, f) {
				var C = _class("easing." + n, function () {}, true),
				    p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			    _easeReg = Ease.register || function () {},
			    //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function _wrap(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing." + name, {
					easeOut: new EaseOut(),
					easeIn: new EaseIn(),
					easeInOut: new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			    EasePoint = function EasePoint(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},
	
	
			//Back
			_createBack = function _createBack(n, f) {
				var C = _class("easing." + n, function (overshoot) {
					this._p1 = overshoot || overshoot === 0 ? overshoot : 1.70158;
					this._p2 = this._p1 * 1.525;
				}, true),
				    p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function (overshoot) {
					return new C(overshoot);
				};
				return C;
			},
			    Back = _wrap("Back", _createBack("BackOut", function (p) {
				return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
			}), _createBack("BackIn", function (p) {
				return p * p * ((this._p1 + 1) * p - this._p1);
			}), _createBack("BackInOut", function (p) {
				return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
			})),
	
	
			//SlowMo
			SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
				power = power || power === 0 ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = linearRatio !== 1 ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = yoyoMode === true;
			}, true),
			    p = SlowMo.prototype = new Ease(),
			    SteppedEase,
			    RoughEase,
			    _createElastic;
	
			p.constructor = SlowMo;
			p.getRatio = function (p) {
				var r = p + (0.5 - p) * this._p;
				if (p < this._p1) {
					return this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r;
				} else if (p > this._p3) {
					return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p;
				}
				return this._calcEnd ? 1 : r;
			};
			SlowMo.ease = new SlowMo(0.7, 0.7);
	
			p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
				return new SlowMo(linearRatio, power, yoyoMode);
			};
	
			//SteppedEase
			SteppedEase = _class("easing.SteppedEase", function (steps) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + 1;
			}, true);
			p = SteppedEase.prototype = new Ease();
			p.constructor = SteppedEase;
			p.getRatio = function (p) {
				if (p < 0) {
					p = 0;
				} else if (p >= 1) {
					p = 0.999999999;
				}
				return (this._p2 * p >> 0) * this._p1;
			};
			p.config = SteppedEase.config = function (steps) {
				return new SteppedEase(steps);
			};
	
			//RoughEase
			RoughEase = _class("easing.RoughEase", function (vars) {
				vars = vars || {};
				var taper = vars.taper || "none",
				    a = [],
				    cnt = 0,
				    points = (vars.points || 20) | 0,
				    i = points,
				    randomize = vars.randomize !== false,
				    clamp = vars.clamp === true,
				    template = vars.template instanceof Ease ? vars.template : null,
				    strength = typeof vars.strength === "number" ? vars.strength * 0.4 : 0.4,
				    x,
				    y,
				    bump,
				    invX,
				    obj,
				    pnt;
				while (--i > -1) {
					x = randomize ? Math.random() : 1 / points * i;
					y = template ? template.getRatio(x) : x;
					if (taper === "none") {
						bump = strength;
					} else if (taper === "out") {
						invX = 1 - x;
						bump = invX * invX * strength;
					} else if (taper === "in") {
						bump = x * x * strength;
					} else if (x < 0.5) {
						//"both" (start)
						invX = x * 2;
						bump = invX * invX * 0.5 * strength;
					} else {
						//"both" (end)
						invX = (1 - x) * 2;
						bump = invX * invX * 0.5 * strength;
					}
					if (randomize) {
						y += Math.random() * bump - bump * 0.5;
					} else if (i % 2) {
						y += bump * 0.5;
					} else {
						y -= bump * 0.5;
					}
					if (clamp) {
						if (y > 1) {
							y = 1;
						} else if (y < 0) {
							y = 0;
						}
					}
					a[cnt++] = { x: x, y: y };
				}
				a.sort(function (a, b) {
					return a.x - b.x;
				});
	
				pnt = new EasePoint(1, 1, null);
				i = points;
				while (--i > -1) {
					obj = a[i];
					pnt = new EasePoint(obj.x, obj.y, pnt);
				}
	
				this._prev = new EasePoint(0, 0, pnt.t !== 0 ? pnt : pnt.next);
			}, true);
			p = RoughEase.prototype = new Ease();
			p.constructor = RoughEase;
			p.getRatio = function (p) {
				var pnt = this._prev;
				if (p > pnt.t) {
					while (pnt.next && p >= pnt.t) {
						pnt = pnt.next;
					}
					pnt = pnt.prev;
				} else {
					while (pnt.prev && p <= pnt.t) {
						pnt = pnt.prev;
					}
				}
				this._prev = pnt;
				return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
			};
			p.config = function (vars) {
				return new RoughEase(vars);
			};
			RoughEase.ease = new RoughEase();
	
			//Bounce
			_wrap("Bounce", _create("BounceOut", function (p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}), _create("BounceIn", function (p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}), _create("BounceInOut", function (p) {
				var invert = p < 0.5;
				if (invert) {
					p = 1 - p * 2;
				} else {
					p = p * 2 - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			}));
	
			//CIRC
			_wrap("Circ", _create("CircOut", function (p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}), _create("CircIn", function (p) {
				return -(Math.sqrt(1 - p * p) - 1);
			}), _create("CircInOut", function (p) {
				return (p *= 2) < 1 ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			}));
	
			//Elastic
			_createElastic = function _createElastic(n, f, def) {
				var C = _class("easing." + n, function (amplitude, period) {
					this._p1 = amplitude >= 1 ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				    p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function (amplitude, period) {
					return new C(amplitude, period);
				};
				return C;
			};
			_wrap("Elastic", _createElastic("ElasticOut", function (p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
			}, 0.3), _createElastic("ElasticIn", function (p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
			}, 0.3), _createElastic("ElasticInOut", function (p) {
				return (p *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
			}, 0.45));
	
			//Expo
			_wrap("Expo", _create("ExpoOut", function (p) {
				return 1 - Math.pow(2, -10 * p);
			}), _create("ExpoIn", function (p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}), _create("ExpoInOut", function (p) {
				return (p *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			}));
	
			//Sine
			_wrap("Sine", _create("SineOut", function (p) {
				return Math.sin(p * _HALF_PI);
			}), _create("SineIn", function (p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}), _create("SineInOut", function (p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			}));
	
			_class("easing.EaseLookup", {
				find: function find(s) {
					return Ease.map[s];
				}
			}, true);
	
			//register the non-standard eases
			_easeReg(w.SlowMo, "SlowMo", "ease,");
			_easeReg(RoughEase, "RoughEase", "ease,");
			_easeReg(SteppedEase, "SteppedEase", "ease,");
	
			return Back;
		}, true);
	});
	
	if (_gsScope._gsDefine) {
		_gsScope._gsQueue.pop()();
	} //necessary in case TweenLite was already loaded separately.
	
	
	/*
	 * ----------------------------------------------------------------
	 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
	 * ----------------------------------------------------------------
	 */
	(function (window, moduleName) {
	
		"use strict";
	
		var _exports = {},
		    _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function _namespace(ns) {
			var a = ns.split("."),
			    p = _globals,
			    i;
			for (i = 0; i < a.length; i++) {
				p[a[i]] = p = p[a[i]] || {};
			}
			return p;
		},
		    gs = _namespace("com.greensock"),
		    _tinyNum = 0.0000000001,
		    _slice = function _slice(a) {
			//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
			var b = [],
			    l = a.length,
			    i;
			for (i = 0; i !== l; b.push(a[i++])) {}
			return b;
		},
		    _emptyFunc = function _emptyFunc() {},
		    _isArray = function () {
			//works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
			var toString = Object.prototype.toString,
			    array = toString.call([]);
			return function (obj) {
				return obj != null && (obj instanceof Array || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && !!obj.push && toString.call(obj) === array);
			};
		}(),
		    a,
		    i,
		    p,
		    _ticker,
		    _tickerActive,
		    _defLookup = {},
	
	
		/**
	  * @constructor
	  * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
	  * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
	  * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
	  * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
	  *
	  * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
	  * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
	  * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
	  * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
	  * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
	  * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
	  * sandbox the banner one like:
	  *
	  * <script>
	  *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
	  * </script>
	  * <script src="js/greensock/v1.7/TweenMax.js"></script>
	  * <script>
	  *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
	  * </script>
	  * <script src="js/greensock/v1.6/TweenMax.js"></script>
	  * <script>
	  *     gs.TweenLite.to(...); //would use v1.7
	  *     TweenLite.to(...); //would use v1.6
	  * </script>
	  *
	  * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
	  * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
	  * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
	  * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
	  */
		Definition = function Definition(ns, dependencies, func, global) {
			this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses
			_defLookup[ns] = this;
			this.gsClass = null;
			this.func = func;
			var _classes = [];
			this.check = function (init) {
				var i = dependencies.length,
				    missing = i,
				    cur,
				    a,
				    n,
				    cl,
				    hasModule;
				while (--i > -1) {
					if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
						_classes[i] = cur.gsClass;
						missing--;
					} else if (init) {
						cur.sc.push(this);
					}
				}
				if (missing === 0 && func) {
					a = ("com.greensock." + ns).split(".");
					n = a.pop();
					cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
	
					//exports to multiple environments
					if (global) {
						_globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
						hasModule = typeof module !== "undefined" && module.exports;
						if (!hasModule && "function" === "function" && __webpack_require__(5)) {
							//AMD
							!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return cl;
							}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
						} else if (hasModule) {
							//node
							if (ns === moduleName) {
								module.exports = _exports[moduleName] = cl;
								for (i in _exports) {
									cl[i] = _exports[i];
								}
							} else if (_exports[moduleName]) {
								_exports[moduleName][n] = cl;
							}
						}
					}
					for (i = 0; i < this.sc.length; i++) {
						this.sc[i].check();
					}
				}
			};
			this.check(true);
		},
	
	
		//used to create Definition instances (which basically registers a class that has dependencies).
		_gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
			return new Definition(ns, dependencies, func, global);
		},
	
	
		//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
		_class = gs._class = function (ns, func, global) {
			func = func || function () {};
			_gsDefine(ns, [], function () {
				return func;
			}, global);
			return func;
		};
	
		_gsDefine.globals = _globals;
	
		/*
	  * ----------------------------------------------------------------
	  * Ease
	  * ----------------------------------------------------------------
	  */
		var _baseParams = [0, 0, 1, 1],
		    _blankArray = [],
		    Ease = _class("easing.Ease", function (func, extraParams, type, power) {
			this._func = func;
			this._type = type || 0;
			this._power = power || 0;
			this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
		}, true),
		    _easeMap = Ease.map = {},
		    _easeReg = Ease.register = function (ease, names, types, create) {
			var na = names.split(","),
			    i = na.length,
			    ta = (types || "easeIn,easeOut,easeInOut").split(","),
			    e,
			    name,
			    j,
			    type;
			while (--i > -1) {
				name = na[i];
				e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
				j = ta.length;
				while (--j > -1) {
					type = ta[j];
					_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
				}
			}
		};
	
		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function (p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
			    pw = this._power,
			    r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
		};
	
		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i] + ",Power" + i;
			_easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
			_easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));
			_easeReg(new Ease(null, null, 3, i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks
	
	
		/*
	  * ----------------------------------------------------------------
	  * EventDispatcher
	  * ----------------------------------------------------------------
	  */
		var EventDispatcher = _class("events.EventDispatcher", function (target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;
	
		p.addEventListener = function (type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
			    index = 0,
			    listener,
			    i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, { c: callback, s: scope, up: useParam, pr: priority });
		};
	
		p.removeEventListener = function (type, callback) {
			var list = this._listeners[type],
			    i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};
	
		p.dispatchEvent = function (type) {
			var list = this._listeners[type],
			    i,
			    t,
			    listener;
			if (list) {
				i = list.length;
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, { type: type, target: t });
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};
	
		/*
	  * ----------------------------------------------------------------
	  * Ticker
	  * ----------------------------------------------------------------
	  */
		var _reqAnimFrame = window.requestAnimationFrame,
		    _cancelAnimFrame = window.cancelAnimationFrame,
		    _getTime = Date.now || function () {
			return new Date().getTime();
		},
		    _lastUpdate = _getTime();
	
		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms", "moz", "webkit", "o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}
	
		_class("Ticker", function (fps, useRAF) {
			var _self = this,
			    _startTime = _getTime(),
			    _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
			    _lagThreshold = 500,
			    _adjustedLag = 33,
			    _tickWord = "tick",
			    //helps reduce gc burden
			_fps,
			    _req,
			    _id,
			    _gap,
			    _nextTime,
			    _tick = function _tick(manual) {
				var elapsed = _getTime() - _lastUpdate,
				    overlap,
				    dispatch;
				if (elapsed > _lagThreshold) {
					_startTime += elapsed - _adjustedLag;
				}
				_lastUpdate += elapsed;
				_self.time = (_lastUpdate - _startTime) / 1000;
				overlap = _self.time - _nextTime;
				if (!_fps || overlap > 0 || manual === true) {
					_self.frame++;
					_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
					dispatch = true;
				}
				if (manual !== true) {
					//make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
					_id = _req(_tick);
				}
				if (dispatch) {
					_self.dispatchEvent(_tickWord);
				}
			};
	
			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function () {
				_tick(true);
			};
	
			_self.lagSmoothing = function (threshold, adjustedLag) {
				_lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};
	
			_self.sleep = function () {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};
	
			_self.wake = function (seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) {
					//don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
					return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
				} : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};
	
			_self.fps = function (value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};
	
			_self.useRAF = function (value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);
	
			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function () {
				if (_useRAF === "auto" && _self.frame < 5 && document.visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});
	
		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;
	
		/*
	  * ----------------------------------------------------------------
	  * Animation
	  * ----------------------------------------------------------------
	  */
		var Animation = _class("core.Animation", function (duration, vars) {
			this.vars = vars = vars || {};
			this._duration = this._totalDuration = duration || 0;
			this._delay = Number(vars.delay) || 0;
			this._timeScale = 1;
			this._active = vars.immediateRender === true;
			this.data = vars.data;
			this._reversed = vars.reversed === true;
	
			if (!_rootTimeline) {
				return;
			}
			if (!_tickerActive) {
				//some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
				_ticker.wake();
			}
	
			var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
			tl.add(this, tl._time);
	
			if (this.vars.paused) {
				this.paused(true);
			}
		});
	
		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;
	
		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function _checkTimeout() {
			if (_tickerActive && _getTime() - _lastUpdate > 2000) {
				_ticker.wake();
			}
			setTimeout(_checkTimeout, 2000);
		};
		_checkTimeout();
	
		p.play = function (from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};
	
		p.pause = function (atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};
	
		p.resume = function (from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};
	
		p.seek = function (time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};
	
		p.restart = function (includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
		};
	
		p.reverse = function (from, suppressEvents) {
			if (from != null) {
				this.seek(from || this.totalDuration(), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};
	
		p.render = function (time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};
	
		p.invalidate = function () {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};
	
		p.isActive = function () {
			var tl = this._timeline,
			    //the 2 root timelines won't have a _timeline; they're always active.
			startTime = this._startTime,
			    rawTime;
			return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale;
		};
	
		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};
	
		p._kill = function (vars, target) {
			return this._enabled(false, false);
		};
	
		p.kill = function (vars, target) {
			this._kill(vars, target);
			return this;
		};
	
		p._uncache = function (includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};
	
		p._swapSelfInParams = function (params) {
			var i = params.length,
			    copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};
	
		p._callback = function (type) {
			var v = this.vars;
			v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
		};
	
		//----Animation getters/setters --------------------------------------------------------
	
		p.eventCallback = function (type, callback, params, scope) {
			if ((type || "").substr(0, 2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};
	
		p.delay = function (value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime(this._startTime + value - this._delay);
			}
			this._delay = value;
			return this;
		};
	
		p.duration = function (value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};
	
		p.totalDuration = function (value) {
			this._dirty = false;
			return !arguments.length ? this._totalDuration : this.duration(value);
		};
	
		p.time = function (value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
		};
	
		p.totalTime = function (time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
					    tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;
					if (!tl._dirty) {
						//for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) {
						//in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};
	
		p.progress = p.totalProgress = function (value, suppressEvents) {
			var duration = this.duration();
			return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
		};
	
		p.startTime = function (value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};
	
		p.endTime = function (includeRepeats) {
			return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
		};
	
		p.timeScale = function (value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				var pauseTime = this._pauseTime,
				    t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
				this._startTime = t - (t - this._startTime) * this._timeScale / value;
			}
			this._timeScale = value;
			return this._uncache(false);
		};
	
		p.reversed = function (value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
			}
			return this;
		};
	
		p.paused = function (value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
			    raw,
			    elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};
	
		/*
	  * ----------------------------------------------------------------
	  * SimpleTimeline
	  * ----------------------------------------------------------------
	  */
		var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});
	
		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;
	
		p.add = p.insert = function (child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) {
				//we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = child._startTime + (this.rawTime() - child._startTime) / child._timeScale;
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};
	
		p._remove = function (tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}
	
				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}
	
				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};
	
		p.render = function (time, suppressEvents, force) {
			var tween = this._first,
			    next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || time >= tween._startTime && !tween._paused) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
					}
				}
				tween = next;
			}
		};
	
		p.rawTime = function () {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};
	
		/*
	  * ----------------------------------------------------------------
	  * TweenLite
	  * ----------------------------------------------------------------
	  */
		var TweenLite = _class("TweenLite", function (target, duration, vars) {
			Animation.call(this, duration, vars);
			this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
	
			if (target == null) {
				throw "Cannot tween a null target.";
			}
	
			this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
	
			var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
			    overwrite = this.vars.overwrite,
			    i,
			    targ,
			    targets;
	
			this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];
	
			if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
				this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				this._propLookup = [];
				this._siblings = [];
				for (i = 0; i < targets.length; i++) {
					targ = targets[i];
					if (!targ) {
						targets.splice(i--, 1);
						continue;
					} else if (typeof targ === "string") {
						targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
						if (typeof targ === "string") {
							targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
						}
						continue;
					} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
						//in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
						targets.splice(i--, 1);
						this._targets = targets = targets.concat(_slice(targ));
						continue;
					}
					this._siblings[i] = _register(targ, this, false);
					if (overwrite === 1) if (this._siblings[i].length > 1) {
						_applyOverwrite(targ, this, null, 1, this._siblings[i]);
					}
				}
			} else {
				this._propLookup = {};
				this._siblings = _register(target, this, false);
				if (overwrite === 1) if (this._siblings.length > 1) {
					_applyOverwrite(target, this, null, 1, this._siblings);
				}
			}
			if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative
			}
		}, true),
		    _isSelector = function _isSelector(v) {
			return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
		},
		    _autoCSS = function _autoCSS(vars, target) {
			var css = {},
			    p;
			for (p in vars) {
				if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
					//note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
					css[p] = vars[p];
					delete vars[p];
				}
			}
			vars.css = css;
		};
	
		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;
	
		//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
	
		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;
	
		TweenLite.version = "1.18.5";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function (threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};
	
		TweenLite.selector = window.$ || window.jQuery || function (e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			return typeof document === "undefined" ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
		};
	
		var _lazyTweens = [],
		    _lazyLookup = {},
		    _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	
		//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
		_setRatio = function _setRatio(v) {
			var pt = this._firstPT,
			    min = 0.000001,
			    val;
			while (pt) {
				val = !pt.blob ? pt.c * v + pt.s : v ? this.join("") : this.start;
				if (pt.r) {
					val = Math.round(val);
				} else if (val < min) if (val > -min) {
					//prevents issues with converting very small numbers to strings in the browser
					val = 0;
				}
				if (!pt.f) {
					pt.t[pt.p] = val;
				} else if (pt.fp) {
					pt.t[pt.p](pt.fp, val);
				} else {
					pt.t[pt.p](val);
				}
				pt = pt._next;
			}
		},
	
		//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
		_blobDif = function _blobDif(start, end, filter, pt) {
			var a = [start, end],
			    charIndex = 0,
			    s = "",
			    color = 0,
			    startNums,
			    endNums,
			    num,
			    i,
			    l,
			    nonNumbers,
			    currentNum;
			a.start = start;
			if (filter) {
				filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
				start = a[0];
				end = a[1];
			}
			a.length = 0;
			startNums = start.match(_numbersExp) || [];
			endNums = end.match(_numbersExp) || [];
			if (pt) {
				pt._next = null;
				pt.blob = 1;
				a._firstPT = pt; //apply last in the linked list (which means inserting it first)
			}
			l = endNums.length;
			for (i = 0; i < l; i++) {
				currentNum = endNums[i];
				nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
				s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
				charIndex += nonNumbers.length;
				if (color) {
					//sense rgba() values and round them.
					color = (color + 1) % 5;
				} else if (nonNumbers.substr(-5) === "rgba(") {
					color = 1;
				}
				if (currentNum === startNums[i] || startNums.length <= i) {
					s += currentNum;
				} else {
					if (s) {
						a.push(s);
						s = "";
					}
					num = parseFloat(startNums[i]);
					a.push(num);
					a._firstPT = { _next: a._firstPT, t: a, p: a.length - 1, s: num, c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0, f: 0, r: color && color < 4 };
					//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
				}
				charIndex += currentNum.length;
			}
			s += end.substr(charIndex);
			if (s) {
				a.push(s);
			}
			a.setRatio = _setRatio;
			return a;
		},
	
		//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
		_addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, round, funcParam, stringFilter) {
			var s = start === "get" ? target[prop] : start,
			    type = _typeof(target[prop]),
			    isRelative = typeof end === "string" && end.charAt(1) === "=",
			    pt = { t: target, p: prop, s: s, f: type === "function", pg: 0, n: overwriteProp || prop, r: round, pr: 0, c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0 },
			    blob,
			    getterName;
			if (type !== "number") {
				if (type === "function" && start === "get") {
					getterName = prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3);
					pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]();
				}
				if (typeof s === "string" && (funcParam || isNaN(s))) {
					//a blob (string that has multiple numbers in it)
					pt.fp = funcParam;
					blob = _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt);
					pt = { t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0 }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
				} else if (!isRelative) {
					pt.s = parseFloat(s);
					pt.c = parseFloat(end) - pt.s || 0;
				}
			}
			if (pt.c) {
				//only add it to the linked list if there's a change.
				if (pt._next = this._firstPT) {
					pt._next._prev = pt;
				}
				this._firstPT = pt;
				return pt;
			}
		},
		    _internals = TweenLite._internals = { isArray: _isArray, isSelector: _isSelector, lazyTweens: _lazyTweens, blobDif: _blobDif },
		    //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
		_plugins = TweenLite._plugins = {},
		    _tweenLookup = _internals.tweenLookup = {},
		    _tweenLookupNum = 0,
		    _reservedProps = _internals.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
		    _overwriteLookup = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
		    _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
		    _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
		    _nextGCFrame = 30,
		    _lazyRender = _internals.lazyRender = function () {
			var i = _lazyTweens.length,
			    tween;
			_lazyLookup = {};
			while (--i > -1) {
				tween = _lazyTweens[i];
				if (tween && tween._lazy !== false) {
					tween.render(tween._lazy[0], tween._lazy[1], true);
					tween._lazy = false;
				}
			}
			_lazyTweens.length = 0;
		};
	
		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
	
		Animation._updateRoot = TweenLite.render = function () {
			var i, a, p;
			if (_lazyTweens.length) {
				//if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
				_lazyRender();
			}
			_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
			_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
			if (_lazyTweens.length) {
				_lazyRender();
			}
			if (_ticker.frame >= _nextGCFrame) {
				//dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
				_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
				for (p in _tweenLookup) {
					a = _tweenLookup[p].tweens;
					i = a.length;
					while (--i > -1) {
						if (a[i]._gc) {
							a.splice(i, 1);
						}
					}
					if (a.length === 0) {
						delete _tweenLookup[p];
					}
				}
				//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
				p = _rootTimeline._first;
				if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
					while (p && p._paused) {
						p = p._next;
					}
					if (!p) {
						_ticker.sleep();
					}
				}
			}
		};
	
		_ticker.addEventListener("tick", Animation._updateRoot);
	
		var _register = function _register(target, tween, scrub) {
			var id = target._gsTweenID,
			    a,
			    i;
			if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
				_tweenLookup[id] = { target: target, tweens: [] };
			}
			if (tween) {
				a = _tweenLookup[id].tweens;
				a[i = a.length] = tween;
				if (scrub) {
					while (--i > -1) {
						if (a[i] === tween) {
							a.splice(i, 1);
						}
					}
				}
			}
			return _tweenLookup[id].tweens;
		},
		    _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
			var func = overwrittenTween.vars.onOverwrite,
			    r1,
			    r2;
			if (func) {
				r1 = func(overwrittenTween, overwritingTween, target, killedProps);
			}
			func = TweenLite.onOverwrite;
			if (func) {
				r2 = func(overwrittenTween, overwritingTween, target, killedProps);
			}
			return r1 !== false && r2 !== false;
		},
		    _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
			var i, changed, curTween, l;
			if (mode === 1 || mode >= 4) {
				l = siblings.length;
				for (i = 0; i < l; i++) {
					if ((curTween = siblings[i]) !== tween) {
						if (!curTween._gc) {
							if (curTween._kill(null, target, tween)) {
								changed = true;
							}
						}
					} else if (mode === 5) {
						break;
					}
				}
				return changed;
			}
			//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
			var startTime = tween._startTime + _tinyNum,
			    overlaps = [],
			    oCount = 0,
			    zeroDur = tween._duration === 0,
			    globalStart;
			i = siblings.length;
			while (--i > -1) {
				if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
					//ignore
				} else if (curTween._timeline !== tween._timeline) {
					globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
					if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
						overlaps[oCount++] = curTween;
					}
				} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
					overlaps[oCount++] = curTween;
				}
			}
	
			i = oCount;
			while (--i > -1) {
				curTween = overlaps[i];
				if (mode === 2) if (curTween._kill(props, target, tween)) {
					changed = true;
				}
				if (mode !== 2 || !curTween._firstPT && curTween._initted) {
					if (mode !== 2 && !_onOverwrite(curTween, tween)) {
						continue;
					}
					if (curTween._enabled(false, false)) {
						//if all property tweens have been overwritten, kill the tween.
						changed = true;
					}
				}
			}
			return changed;
		},
		    _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
			var tl = tween._timeline,
			    ts = tl._timeScale,
			    t = tween._startTime;
			while (tl._timeline) {
				t += tl._startTime;
				ts *= tl._timeScale;
				if (tl._paused) {
					return -100;
				}
				tl = tl._timeline;
			}
			t /= ts;
			return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
		};
	
		//---- TweenLite instance methods -----------------------------------------------------------------------------
	
		p._init = function () {
			var v = this.vars,
			    op = this._overwrittenProps,
			    dur = this._duration,
			    immediate = !!v.immediateRender,
			    ease = v.ease,
			    i,
			    initPlugins,
			    pt,
			    p,
			    startVars;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) {
					//copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = immediate && v.lazy !== false;
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				this._startAt = TweenLite.to(this.target, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) {
						//in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) {
						//copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = immediate && v.lazy !== false;
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;
	
			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null)) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
			}
	
			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof this.target !== "function") {
				//if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};
	
		p._initProps = function (target, propLookup, siblings, overwrittenProps) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}
	
			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}
	
			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
				//it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}
				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {
	
					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					this._firstPT = pt = { _next: this._firstPT, t: plugin, p: "setRatio", s: 0, c: 1, f: 1, n: p, pg: 1, pr: plugin._priority };
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}
				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter);
				}
			}
	
			if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
				//another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
				//zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};
	
		p.render = function (time, suppressEvents, force) {
			var prevTime = this._time,
			    duration = this._duration,
			    prevRawPrevTime = this._rawPrevTime,
			    isComplete,
			    callback,
			    pt,
			    rawPrevTime;
			if (time >= duration - 0.0000001) {
				//to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
					force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) {
					//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) {
						//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
						//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
			} else if (time < 0.0000001) {
				//to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) {
						//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) {
					//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;
	
				if (this._easeType) {
					var r = time / duration,
					    type = this._easeType,
					    pow = this._easePower;
					if (type === 1 || type === 3 && r >= 0.5) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}
	
					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - r / 2;
					}
				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}
	
			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) {
					//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
				}
			}
			if (this._lazy !== false) {
				//in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}
	
			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) {
					//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) {
				//check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) {
					//-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
					//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};
	
		p._kill = function (vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
			var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
			    i,
			    overwrittenProps,
			    p,
			    pt,
			    propLookup,
			    changed,
			    killProps,
			    record,
			    killed;
			if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}
	
				if (propLookup) {
					killProps = vars || propLookup;
					record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && ((typeof vars === "undefined" ? "undefined" : _typeof(vars)) !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
							//if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}
	
					for (p in killProps) {
						if (pt = propLookup[p]) {
							if (simultaneousOverwrite) {
								//if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) {
						//if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};
	
		p.invalidate = function () {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = this._targets ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};
	
		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
				    i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
			}
			return false;
		};
	
		//----TweenLite static methods -----------------------------------------------------
	
		TweenLite.to = function (target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};
	
		TweenLite.from = function (target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = vars.immediateRender != false;
			return new TweenLite(target, duration, vars);
		};
	
		TweenLite.fromTo = function (target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
			return new TweenLite(target, duration, toVars);
		};
	
		TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, { delay: delay, onComplete: callback, onCompleteParams: params, callbackScope: scope, onReverseComplete: callback, onReverseCompleteParams: params, immediateRender: false, lazy: false, useFrames: useFrames, overwrite: 0 });
		};
	
		TweenLite.set = function (target, vars) {
			return new TweenLite(target, 0, vars);
		};
	
		TweenLite.getTweensOf = function (target, onlyActive) {
			if (target == null) {
				return [];
			}
			target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || onlyActive && !a[i].isActive()) {
						a.splice(i, 1);
					}
				}
			}
			return a;
		};
	
		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
			if ((typeof onlyActive === "undefined" ? "undefined" : _typeof(onlyActive)) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
			    i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};
	
		/*
	  * ----------------------------------------------------------------
	  * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
	  * ----------------------------------------------------------------
	  */
		var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
			this._overwriteProps = (props || "").split(",");
			this._propName = this._overwriteProps[0];
			this._priority = priority || 0;
			this._super = TweenPlugin.prototype;
		}, true);
	
		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.18.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;
	
		p._kill = function (lookup) {
			var a = this._overwriteProps,
			    pt = this._firstPT,
			    i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};
	
		p._roundProps = function (lookup, value) {
			var pt = this._firstPT;
			while (pt) {
				if (lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")]) {
					//some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					pt.r = value;
				}
				pt = pt._next;
			}
		};
	
		TweenLite._onPluginEvent = function (type, tween) {
			var pt = tween._firstPT,
			    changed,
			    pt2,
			    first,
			    last,
			    next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if (pt._prev = pt2 ? pt2._prev : last) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if (pt._next = pt2) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};
	
		TweenPlugin.activate = function (plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[new plugins[i]()._propName] = plugins[i];
				}
			}
			return true;
		};
	
		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function (config) {
			if (!config || !config.propName || !config.init || !config.API) {
				throw "illegal plugin definition.";
			}
			var propName = config.propName,
			    priority = config.priority || 0,
			    overwriteProps = config.overwriteProps,
			    map = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
			    Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
				TweenPlugin.call(this, propName, priority);
				this._overwriteProps = overwriteProps || [];
			}, config.global === true),
			    p = Plugin.prototype = new TweenPlugin(propName),
			    prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof config[prop] === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};
	
		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: com.greensock." + p);
				}
			}
		}
	
		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
	})(typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : undefined || window, "TweenMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["_"] = __webpack_require__(8);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function () {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype,
	      FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeBind = FuncProto.bind,
	      nativeCreate = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function Ctor() {};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function _(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function optimizeCb(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1:
	        return function (value) {
	          return func.call(context, value);
	        };
	      case 2:
	        return function (value, other) {
	          return func.call(context, value, other);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(context, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(context, accumulator, value, index, collection);
	        };
	    }
	    return function () {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function cb(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function (value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	    return function (obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function baseCreate(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor();
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function property(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function (obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function (obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function (obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function (obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function (value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function (obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function (obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function (value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function (obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function (obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function (obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function (obj, iteratee, context) {
	    var result = -Infinity,
	        lastComputed = -Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function (obj, iteratee, context) {
	    var result = Infinity,
	        lastComputed = Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function (obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function (value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function (left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function group(behavior) {
	    return function (obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function (result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key]++;else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function (obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function (obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [],
	        fail = [];
	    _.each(obj, function (value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function (array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function (array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function flatten(input, shallow, strict, startIndex) {
	    var output = [],
	        idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0,
	            len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function () {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function (array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function (array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function () {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function (array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function (list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function (array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function (array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0,
	        high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function (array, item, idx) {
	      var i = 0,
	          length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function (start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function (func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function bound() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function (func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function bound() {
	      var position = 0,
	          length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) {
	        args.push(arguments[position++]);
	      }return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function (obj) {
	    var i,
	        length = arguments.length,
	        key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function (func, hasher) {
	    var memoize = function memoize(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function (func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function () {
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function (func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function later() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function () {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function (func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function later() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function () {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function (func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function (predicate) {
	    return function () {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function () {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) {
	        result = args[i].call(this, result);
	      }return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function (times, func) {
	    return function () {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function (times, func) {
	    var memo;
	    return function () {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) {
	      if (_.has(obj, key)) keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) {
	      keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {},
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function (obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function (obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj),
	        key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function (object, oiteratee, context) {
	    var result = {},
	        obj = object,
	        iteratee,
	        keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function iteratee(value, key, obj) {
	        return key in obj;
	      };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	  // Return a copy of the object without the blacklisted properties.
	  _.omit = function (obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function iteratee(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function (prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function (obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function (object, attrs) {
	    var keys = _.keys(attrs),
	        length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor,
	          bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a),
	          key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function (a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function (obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function (obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	    _.isFunction = function (obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function (obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function (obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function (obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function () {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function (value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function (value) {
	    return function () {
	      return value;
	    };
	  };
	
	  _.noop = function () {};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function (obj) {
	    return obj == null ? function () {} : function (key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function (attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function (obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function (n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) {
	      accum[i] = iteratee(i);
	    }return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function () {
	    return new Date().getTime();
	  };
	
	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function createEscaper(map) {
	    var escaper = function escaper(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function (string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function (object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function (prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function escapeChar(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function (text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function template(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function (obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function result(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function (obj) {
	    _.each(_.functions(obj), function (name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function () {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function () {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function () {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	//     Backbone.js 1.3.3
	
	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org
	
	(function (factory) {
	
	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global;
	
	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(3), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	    // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'),
	        $;
	    try {
	      $ = require('jquery');
	    } catch (e) {}
	    factory(root, exports, _, $);
	
	    // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
	  }
	})(function (root, Backbone, _, $) {
	
	  // Initial Setup
	  // -------------
	
	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;
	
	  // Create a local reference to a common array method we'll want to use later.
	  var _slice = Array.prototype.slice;
	
	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';
	
	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;
	
	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function () {
	    root.Backbone = previousBackbone;
	    return this;
	  };
	
	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;
	
	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;
	
	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function addMethod(length, method, attribute) {
	    switch (length) {
	      case 1:
	        return function () {
	          return _[method](this[attribute]);
	        };
	      case 2:
	        return function (value) {
	          return _[method](this[attribute], value);
	        };
	      case 3:
	        return function (iteratee, context) {
	          return _[method](this[attribute], cb(iteratee, this), context);
	        };
	      case 4:
	        return function (iteratee, defaultVal, context) {
	          return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	        };
	      default:
	        return function () {
	          var args = _slice.call(arguments);
	          args.unshift(this[attribute]);
	          return _[method].apply(_, args);
	        };
	    }
	  };
	  var addUnderscoreMethods = function addUnderscoreMethods(Class, methods, attribute) {
	    _.each(methods, function (length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };
	
	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function cb(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function (model) {
	      return model.get(iteratee);
	    };
	    return iteratee;
	  };
	  var modelMatcher = function modelMatcher(attrs) {
	    var matcher = _.matches(attrs);
	    return function (model) {
	      return matcher(model.attributes);
	    };
	  };
	
	  // Backbone.Events
	  // ---------------
	
	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};
	
	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;
	
	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function eventsApi(iteratee, events, name, callback, opts) {
	    var i = 0,
	        names;
	    if (name && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };
	
	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function (name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };
	
	  // Guard the `listening` argument from the public API.
	  var internalOn = function internalOn(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });
	
	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }
	
	    return obj;
	  };
	
	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function (obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];
	
	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
	    }
	
	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };
	
	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function onApi(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context,
	          ctx = options.ctx,
	          listening = options.listening;
	      if (listening) listening.count++;
	
	      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	    }
	    return events;
	  };
	
	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function (name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };
	
	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function (obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;
	
	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);
	
	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];
	
	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;
	
	      listening.obj.off(name, callback, this);
	    }
	
	    return this;
	  };
	
	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function offApi(events, name, callback, options) {
	    if (!events) return;
	
	    var i = 0,
	        listening;
	    var context = options.context,
	        listeners = options.listeners;
	
	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }
	
	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];
	
	      // Bail out if there are no events stored.
	      if (!handlers) break;
	
	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }
	
	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };
	
	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function (name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };
	
	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function (obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };
	
	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function onceMap(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function () {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };
	
	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function (name) {
	    if (!this._events) return this;
	
	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) {
	      args[i] = arguments[i + 1];
	    }eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };
	
	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function triggerApi(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };
	
	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function triggerEvents(events, args) {
	    var ev,
	        i = -1,
	        l = events.length,
	        a1 = args[0],
	        a2 = args[1],
	        a3 = args[2];
	    switch (args.length) {
	      case 0:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx);
	        }return;
	      case 1:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1);
	        }return;
	      case 2:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1, a2);
	        }return;
	      case 3:
	        while (++i < l) {
	          (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
	        }return;
	      default:
	        while (++i < l) {
	          (ev = events[i]).callback.apply(ev.ctx, args);
	        }return;
	    }
	  };
	
	  // Aliases for backwards compatibility.
	  Events.bind = Events.on;
	  Events.unbind = Events.off;
	
	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);
	
	  // Backbone.Model
	  // --------------
	
	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.
	
	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function (attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };
	
	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {
	
	    // A hash of attributes whose current and previous value differ.
	    changed: null,
	
	    // The value returned during the last failed validation.
	    validationError: null,
	
	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',
	
	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // Return a copy of the model's `attributes` object.
	    toJSON: function toJSON(options) {
	      return _.clone(this.attributes);
	    },
	
	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function sync() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Get the value of an attribute.
	    get: function get(attr) {
	      return this.attributes[attr];
	    },
	
	    // Get the HTML-escaped value of an attribute.
	    escape: function escape(attr) {
	      return _.escape(this.get(attr));
	    },
	
	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function has(attr) {
	      return this.get(attr) != null;
	    },
	
	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function matches(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },
	
	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function set(key, val, options) {
	      if (key == null) return this;
	
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options || (options = {});
	
	      // Run validation.
	      if (!this._validate(attrs, options)) return false;
	
	      // Extract attributes and options.
	      var unset = options.unset;
	      var silent = options.silent;
	      var changes = [];
	      var changing = this._changing;
	      this._changing = true;
	
	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	
	      var current = this.attributes;
	      var changed = this.changed;
	      var prev = this._previousAttributes;
	
	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }
	
	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);
	
	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }
	
	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },
	
	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function unset(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, { unset: true }));
	    },
	
	    // Clear all attributes on the model, firing `"change"`.
	    clear: function clear(options) {
	      var attrs = {};
	      for (var key in this.attributes) {
	        attrs[key] = void 0;
	      }return this.set(attrs, _.extend({}, options, { unset: true }));
	    },
	
	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function hasChanged(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },
	
	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function changedAttributes(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },
	
	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function previous(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },
	
	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function previousAttributes() {
	      return _.clone(this._previousAttributes);
	    },
	
	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function fetch(options) {
	      options = _.extend({ parse: true }, options);
	      var model = this;
	      var success = options.success;
	      options.success = function (resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function save(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options = _.extend({ validate: true, parse: true }, options);
	      var wait = options.wait;
	
	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }
	
	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function (resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	
	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);
	
	      var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);
	
	      // Restore attributes.
	      this.attributes = attributes;
	
	      return xhr;
	    },
	
	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function destroy(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;
	
	      var destroy = function destroy() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };
	
	      options.success = function (resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };
	
	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },
	
	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function url() {
	      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },
	
	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function parse(resp, options) {
	      return resp;
	    },
	
	    // Create a new model with identical attributes to this one.
	    clone: function clone() {
	      return new this.constructor(this.attributes);
	    },
	
	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function isNew() {
	      return !this.has(this.idAttribute);
	    },
	
	    // Check if the model is currently in a valid state.
	    isValid: function isValid(options) {
	      return this._validate({}, _.extend({}, options, { validate: true }));
	    },
	
	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function _validate(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
	      return false;
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	    omit: 0, chain: 1, isEmpty: 1 };
	
	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');
	
	  // Backbone.Collection
	  // -------------------
	
	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.
	
	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function (models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({ silent: true }, options));
	  };
	
	  // Default options for `Collection#set`.
	  var setOptions = { add: true, remove: true, merge: true };
	  var addOptions = { add: true, remove: false };
	
	  // Splices `insert` into `array` at index `at`.
	  var splice = function splice(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) {
	      tail[i] = array[i + at];
	    }for (i = 0; i < length; i++) {
	      array[i + at] = insert[i];
	    }for (i = 0; i < tail.length; i++) {
	      array[i + length + at] = tail[i];
	    }
	  };
	
	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {
	
	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function toJSON(options) {
	      return this.map(function (model) {
	        return model.toJSON(options);
	      });
	    },
	
	    // Proxy `Backbone.sync` by default.
	    sync: function sync() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function add(models, options) {
	      return this.set(models, _.extend({ merge: false }, options, addOptions));
	    },
	
	    // Remove a model, or a list of models from the set.
	    remove: function remove(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = { added: [], merged: [], removed: removed };
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },
	
	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function set(models, options) {
	      if (models == null) return;
	
	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }
	
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	
	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;
	
	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};
	
	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;
	
	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	
	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];
	
	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;
	
	          // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }
	
	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }
	
	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function (m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }
	
	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({ silent: true });
	
	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }
	
	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },
	
	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function reset(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({ silent: true }, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },
	
	    // Add a model to the end of the collection.
	    push: function push(model, options) {
	      return this.add(model, _.extend({ at: this.length }, options));
	    },
	
	    // Remove a model from the end of the collection.
	    pop: function pop(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },
	
	    // Add a model to the beginning of the collection.
	    unshift: function unshift(model, options) {
	      return this.add(model, _.extend({ at: 0 }, options));
	    },
	
	    // Remove a model from the beginning of the collection.
	    shift: function shift(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },
	
	    // Slice out a sub-array of models from the collection.
	    slice: function slice() {
	      return _slice.apply(this.models, arguments);
	    },
	
	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function get(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[this.modelId(obj.attributes || obj)] || obj.cid && this._byId[obj.cid];
	    },
	
	    // Returns `true` if the model is in the collection.
	    has: function has(obj) {
	      return this.get(obj) != null;
	    },
	
	    // Get the model at the given index.
	    at: function at(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },
	
	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function where(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },
	
	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function findWhere(attrs) {
	      return this.where(attrs, true);
	    },
	
	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function sort(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});
	
	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);
	
	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },
	
	    // Pluck an attribute from each model in the collection.
	    pluck: function pluck(attr) {
	      return this.map(attr + '');
	    },
	
	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function fetch(options) {
	      options = _.extend({ parse: true }, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function (resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function create(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function (m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },
	
	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function parse(resp, options) {
	      return resp;
	    },
	
	    // Create a new collection with an identical list of models as this one.
	    clone: function clone() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },
	
	    // Define how to uniquely identify models in the collection.
	    modelId: function modelId(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },
	
	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function _reset() {
	      this.length = 0;
	      this.models = [];
	      this._byId = {};
	    },
	
	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function _prepareModel(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },
	
	    // Internal method called by both remove and set.
	    _removeModels: function _removeModels(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;
	
	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	
	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];
	
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	
	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },
	
	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function _isModel(model) {
	      return model instanceof Model;
	    },
	
	    // Internal method to create a model's ties to a collection.
	    _addReference: function _addReference(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },
	
	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function _removeReference(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },
	
	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function _onModelEvent(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	    foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	    select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	    contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	    head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	    without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	    isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	    sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3 };
	
	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');
	
	  // Backbone.View
	  // -------------
	
	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.
	
	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function (options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
	
	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {
	
	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',
	
	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function $(selector) {
	      return this.$el.find(selector);
	    },
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function render() {
	      return this;
	    },
	
	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function remove() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },
	
	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function _removeElement() {
	      this.$el.remove();
	    },
	
	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function setElement(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },
	
	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function _setElement(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },
	
	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function delegateEvents(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },
	
	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function delegate(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },
	
	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function undelegateEvents() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },
	
	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function undelegate(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },
	
	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function _createElement(tagName) {
	      return document.createElement(tagName);
	    },
	
	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function _ensureElement() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },
	
	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function _setAttributes(attributes) {
	      this.$el.attr(attributes);
	    }
	
	  });
	
	  // Backbone.sync
	  // -------------
	
	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function (method, model, options) {
	    var type = methodMap[method];
	
	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });
	
	    // Default JSON-request options.
	    var params = { type: type, dataType: 'json' };
	
	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }
	
	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }
	
	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? { model: params.data } : {};
	    }
	
	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function (xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }
	
	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }
	
	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function (xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };
	
	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };
	
	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };
	
	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function () {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };
	
	  // Backbone.Router
	  // ---------------
	
	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function (options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam = /(\(\?)?:\w+/g;
	  var splatParam = /\*\w+/g;
	  var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	
	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function initialize() {},
	
	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function route(_route, name, callback) {
	      if (!_.isRegExp(_route)) _route = this._routeToRegExp(_route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(_route, function (fragment) {
	        var args = router._extractParameters(_route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },
	
	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function execute(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },
	
	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function navigate(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },
	
	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function _bindRoutes() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route,
	          routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },
	
	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function _routeToRegExp(route) {
	      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
	        return optional ? match : '([^/?]+)';
	      }).replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },
	
	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function _extractParameters(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function (param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }
	
	  });
	
	  // Backbone.History
	  // ----------------
	
	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function () {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);
	
	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };
	
	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;
	
	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;
	
	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;
	
	  // Has the history handling already been started?
	  History.started = false;
	
	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {
	
	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,
	
	    // Are we at the app root?
	    atRoot: function atRoot() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },
	
	    // Does the pathname match the root?
	    matchRoot: function matchRoot() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },
	
	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function decodeFragment(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },
	
	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function getSearch() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },
	
	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function getHash(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },
	
	    // Get the pathname and search params, without the root.
	    getPath: function getPath() {
	      var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },
	
	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function getFragment(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },
	
	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function start(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;
	
	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options = _.extend({ root: '/' }, this.options, options);
	      this.root = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState = !!this.options.pushState;
	      this._hasPushState = !!(this.history && this.history.pushState);
	      this._usePushState = this._wantsPushState && this._hasPushState;
	      this.fragment = this.getFragment();
	
	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');
	
	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {
	
	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;
	
	          // Or if we've started out with a hash-based route, but we're currently
	          // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), { replace: true });
	        }
	      }
	
	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }
	
	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function (eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };
	
	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }
	
	      if (!this.options.silent) return this.loadUrl();
	    },
	
	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function stop() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function (eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };
	
	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }
	
	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }
	
	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },
	
	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function route(_route2, callback) {
	      this.handlers.unshift({ route: _route2, callback: callback });
	    },
	
	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function checkUrl(e) {
	      var current = this.getFragment();
	
	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }
	
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },
	
	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function loadUrl(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function (handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },
	
	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function navigate(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = { trigger: !!options };
	
	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');
	
	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;
	
	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));
	
	      if (this.fragment === fragment) return;
	      this.fragment = fragment;
	
	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
	
	        // If hash changes haven't been explicitly disabled, update the hash
	        // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;
	
	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }
	
	          this._updateHash(iWindow.location, fragment, options.replace);
	        }
	
	        // If you've told us that you explicitly don't want fallback hashchange-
	        // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },
	
	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function _updateHash(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }
	
	  });
	
	  // Create the default Backbone.history.
	  Backbone.history = new History();
	
	  // Helpers
	  // -------
	
	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function extend(protoProps, staticProps) {
	    var parent = this;
	    var child;
	
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function child() {
	        return parent.apply(this, arguments);
	      };
	    }
	
	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);
	
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;
	
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	
	    return child;
	  };
	
	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
	
	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function urlError() {
	    throw new Error('A "url" property or function must be specified');
	  };
	
	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function wrapError(model, options) {
	    var error = options.error;
	    options.error = function (resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };
	
	  return Backbone;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Config = {
	  bkptLrg: 1440,
	  bkptMed: 960,
	  bkptSml: 767,
	  throttle: {
	    scroll: 10,
	    resize: 100
	  },
	  defaultEase: Expo.easeOut
	};
	
	exports.default = Config;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//current values
	var CV = {
	  viewport: { width: 0, height: 0 },
	  bkpt: null,
	  touch: { x: 0, y: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0, direction: null },
	  scroll: { y: 0 },
	  scrollEl: null,
	  isTouchDevice: 'ontouchstart' in document.documentElement,
	  OS: _utils2.default.getOS(),
	  isIE: _utils2.default.isIE(),
	  isChrome: /CriOS/.test(navigator.userAgent),
	  OSVersion: _utils2.default.getOSVersion(_utils2.default.getOS()),
	  isiPhone: /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent),
	  animate: false,
	  customScroll: false
	};
	
	exports.default = CV;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }
	
	  Utils.whichTransitionEvent = function whichTransitionEvent(el) {
	    var t;
	    var transitions = {
	      'transition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    };
	
	    for (t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	  };
	
	  Utils.browser = function browser() {
	    var ua = navigator.userAgent,
	        tem,
	        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	
	    if (/trident/i.test(M[1])) {
	      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	      return ['IE', tem[1] || ''];
	    }
	
	    if (M[1] === 'Chrome') {
	      tem = ua.match(/\bOPR\/(\d+)/);
	      if (tem != null) return 'Opera ' + tem[1];
	    }
	
	    M = M[2] ? [M[1], M[2]] : [navigator.appName.toLowerCase(), navigator.appVersion, '-?'];
	    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	
	    M[0] = M[0].toLowerCase();
	
	    return M;
	  };
	
	  Utils.getOS = function getOS() {
	    var ua = navigator.userAgent;
	    var uaindex;
	    var userOS;
	
	    // determine OS
	    if (ua.match(/iPad/i) || ua.match(/iPod/i) || ua.match(/iPhone/i)) {
	      userOS = 'iOS';
	      uaindex = ua.indexOf('OS ');
	    } else if (ua.match(/Android/i)) {
	      userOS = 'Android';
	      uaindex = ua.indexOf('Android ');
	    } else {
	      userOS = 'unknown';
	    }
	
	    return userOS;
	
	    // determine version
	  };
	
	  Utils.getOSVersion = function getOSVersion(userOS) {
	    var ua = navigator.userAgent;
	    var uaindex;
	    var userOSver;
	
	    if (userOS === 'iOS') {
	      uaindex = ua.indexOf('OS ');
	      userOSver = ua.substr(uaindex + 3, 3).replace('_', '.');
	    } else if (userOS === 'Android') {
	      uaindex = ua.indexOf('Android ');
	      userOSver = ua.substr(uaindex + 8, 3);
	    } else {
	      userOSver = 'unknown';
	    }
	
	    return userOSver;
	  };
	
	  /*
	   * included support for IE 11 and 12
	   * http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie/21712356#21712356
	   */
	
	
	  Utils.isIE = function isIE() {
	    var ua = window.navigator.userAgent;
	
	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	      // IE 10 or older => return version number
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }
	
	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	      // IE 11 => return version number
	      var rv = ua.indexOf('rv:');
	      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }
	
	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	      // IE 12 => return version number
	      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    }
	
	    // other browser
	    return -1;
	  };
	
	  Utils.preventScroll = function preventScroll() {
	    $('html').addClass('no-scroll');
	  };
	
	  Utils.permitScroll = function permitScroll() {
	    $('html').removeClass('no-scroll');
	  };
	
	  Utils.scrollTo = function scrollTo(options) {
	    TweenMax.to(options.el, options.time, {
	      scrollTo: { y: options.scrollTop },
	      ease: _config2.default.defaultEase
	    });
	  };
	
	  return Utils;
	}();
	
	exports.default = Utils;
	
	
	window.requestAnimFrame = function () {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */callback, /* DOMElement */element) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	}();
	
	window.requestTimeout = function (fn, delay) {
	  if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
	  !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setTimeout(fn, delay);
	
	  var start = new Date().getTime(),
	      handle = new Object();
	
	  function loop() {
	    var current = new Date().getTime(),
	        delta = current - start;
	
	    delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
	  };
	
	  handle.value = requestAnimFrame(loop);
	  return handle;
	};
	
	/**
	 * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
	 * @param {int|object} fn The callback function
	 */
	window.clearRequestTimeout = function (handle) {
	  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
	  window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);
	};
	
	window.requestInterval = function (fn, delay) {
	  if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
	  !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setInterval(fn, delay);
	
	  var start = new Date().getTime(),
	      handle = new Object();
	
	  function loop() {
	    var current = new Date().getTime(),
	        delta = current - start;
	
	    if (delta >= delay) {
	      fn.call();
	      start = new Date().getTime();
	    }
	
	    handle.value = requestAnimFrame(loop);
	  };
	
	  handle.value = requestAnimFrame(loop);
	  return handle;
	};
	
	window.clearRequestInterval = function (handle) {
	  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
	  window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) : clearInterval(handle);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pageManager = __webpack_require__(14);
	
	var _pageManager2 = _interopRequireDefault(_pageManager);
	
	var _home = __webpack_require__(16);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _workDetail = __webpack_require__(21);
	
	var _workDetail2 = _interopRequireDefault(_workDetail);
	
	var _home3 = __webpack_require__(24);
	
	var _home4 = _interopRequireDefault(_home3);
	
	var _work = __webpack_require__(22);
	
	var _work2 = _interopRequireDefault(_work);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//page views
	
	
	//page json
	
	
	var Router = function (_Backbone$Router$exte) {
	    _inherits(Router, _Backbone$Router$exte);
	
	    function Router() {
	        _classCallCheck(this, Router);
	
	        return _possibleConstructorReturn(this, _Backbone$Router$exte.apply(this, arguments));
	    }
	
	    Router.prototype.initialize = function initialize() {
	        console.log('router initialized');
	
	        var _this = this;
	
	        $(document).on("click", "a[href^='/']", function (e) {
	
	            e.preventDefault();
	
	            var url = $(this).attr('href');
	
	            _this.navigate(url, { trigger: true });
	        });
	
	        this.pageManager = new _pageManager2.default();
	    };
	
	    Router.prototype.home = function home() {
	        this.pageManager.loadPage({
	            view: _home2.default,
	            data: _home4.default
	        });
	    };
	
	    Router.prototype.workDetail = function workDetail(route) {
	        this.pageManager.loadPage({
	            view: _workDetail2.default,
	            data: _work2.default[route],
	            params: {
	                slug: route,
	                nextData: _work2.default[_work2.default[route].next]
	            }
	        });
	    };
	
	    return Router;
	}(Backbone.Router.extend({
	    routes: {
	        "(/)": "home",
	        "work(/)": "home",
	        "work/:case(/)": "workDetail"
	    }
	}));
	
	exports.default = Router;
	;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _CV = __webpack_require__(11);
	
	var _CV2 = _interopRequireDefault(_CV);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _about = __webpack_require__(15);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageManager = function () {
		function PageManager() {
			_classCallCheck(this, PageManager);
	
			//backbone view els
			this.previousPageView = null;
			this.currentPageView = null;
	
			this.currentPageName = "", this.previousPageAnimateComplete = false;
	
			this.init();
	
			this.bindEvents();
	
			this.onResize();
	
			this.onScroll();
	
			//this.loader = new Loader();
			this.aboutPage = new _about2.default();
		}
	
		PageManager.prototype.init = function init() {
			console.log('init page manager');
	
			if (_CV2.default.isTouchDevice) {
				//touch devices
				_CV2.default.animate = false;
				$('html').addClass('is-touch');
				$('body').scrollTop(0);
			} else {
				//desktop
				_CV2.default.animate = true;
			}
	
			if (_CV2.default.isIE !== -1) {
				$('html').addClass('is-ie-' + _CV2.default.isIE);
			}
		};
	
		PageManager.prototype.bindEvents = function bindEvents() {
			window.requestAnimationFrame(_onRAF.bind(this));
	
			window.addEventListener('resize', _.debounce($.proxy(function () {
				this.onResize();
			}, this), _config2.default.throttle.resize));
	
			window.addEventListener('scroll', _.debounce($.proxy(function () {
				this.onScroll();
			}, this), _config2.default.throttle.scroll));
	
			$(document.body).on('touchstart', $.proxy(function (e) {
				this.onTouchStart(e);
			}, this));
	
			$(document.body).on('touchmove', $.proxy(function (e) {
				this.onTouchMove(e);
			}, this));
	
			$(document.body).on('touchend', $.proxy(function (e) {
				this.onTouchEnd(e);
			}, this));
	
			$(document.body).on('scroll', $.proxy(function (e) {
				this.onTouchEnd(e);
			}, this));
		};
	
		PageManager.prototype.onScroll = function onScroll() {
			_CV2.default.scroll.y = window.pageYOffset;
		};
	
		PageManager.prototype.onResize = function onResize() {
			_CV2.default.viewport.width = window.innerWidth;
			_CV2.default.viewport.height = window.innerHeight;
	
			if (_CV2.default.viewport.width > _config2.default.bkptMed) {
				_CV2.default.bkpt = 'lrg';
			} else if (_CV2.default.viewport.width > _config2.default.bkptSml) {
				_CV2.default.bkpt = 'med';
			} else {
				_CV2.default.bkpt = 'sml';
			}
	
			if (this.currentPageView && this.currentPageView.onResize) {
				this.currentPageView.onResize();
			}
		};
	
		PageManager.prototype.onTouchStart = function onTouchStart(e) {
			_CV2.default.touch.direction = null;
	
			_CV2.default.touch.x = _CV2.default.touch.startX = e.touches[0].clientX;
			_CV2.default.touch.y = _CV2.default.touch.startY = e.touches[0].clientY;
			_CV2.default.touch.deltaX = 0;
			_CV2.default.touch.deltaY = 0;
		};
	
		PageManager.prototype.onTouchMove = function onTouchMove(e) {
			_CV2.default.touch.x = e.touches[0].clientX;
			_CV2.default.touch.y = e.touches[0].clientY;
	
			_CV2.default.touch.deltaX = _CV2.default.touch.x - _CV2.default.touch.startX;
			_CV2.default.touch.deltaY = _CV2.default.touch.y - _CV2.default.touch.startY;
	
			_CV2.default.touch.startX = _CV2.default.touch.x;
			_CV2.default.touch.startY = _CV2.default.touch.y;
	
			if (Math.abs(_CV2.default.touch.deltaX) < this.touchThreshold) {
				return;
			}
	
			if (Math.abs(_CV2.default.touch.deltaX) > Math.abs(_CV2.default.touch.deltaY)) {
				_CV2.default.touch.direction = 'horizontal';
			} else {
				_CV2.default.touch.direction = 'vertical';
			}
		};
	
		PageManager.prototype.onTouchEnd = function onTouchEnd(e) {
			_CV2.default.touch.direction == null;
		};
	
		PageManager.prototype.onRAF = function onRAF() {
			//call raf on current page view
			if (this.currentPageView && this.currentPageView.onRAF) {
				this.currentPageView.onRAF();
			}
		};
	
		PageManager.prototype.loadPage = function loadPage(options) {
			var View = options.view,
			    data = options.data,
			    params = options.params;
	
			if (this.aboutPage.isOpen) {
				this.aboutPage.close();
			}
	
			if (this.currentPageView == null) {
				//first time loading
				this.loadView(View, data, params);
			} else {
				//a previous page exists
				this.previousPageAnimateComplete = false;
				this.previousPageView = this.currentPageView;
	
				this.previousPageView.on('animatedOut', $.proxy(function () {
					this.loadView(View, data, params);
				}, this));
	
				this.previousPageView.animateOut();
			}
		};
	
		PageManager.prototype.loadView = function loadView(View, data, params) {
			this.currentPageView = new View(data, params);
			this.currentPageView.animateIn();
			document.title = data.meta.title;
		};
	
		return PageManager;
	}();
	
	exports.default = PageManager;
	
	
	var _isIE = function _isIE() {
		return navigator.appName == 'Microsoft Internet Explorer' || navigator.appName == 'Netscape' && new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null;
	};
	
	var _onRAF = function _onRAF() {
		this.onRAF();
		window.requestAnimationFrame(_onRAF.bind(this));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _CV = __webpack_require__(11);
	
	var _CV2 = _interopRequireDefault(_CV);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_Backbone$View$extend) {
	  _inherits(About, _Backbone$View$extend);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, _Backbone$View$extend.apply(this, arguments));
	  }
	
	  About.prototype.initialize = function initialize() {
	    this.isOpen = false;
	
	    this.bindEvents();
	  };
	
	  About.prototype.bindEvents = function bindEvents() {
	    $('#open-about').on('click', $.proxy(function (e) {
	      e.preventDefault();
	      this.open();
	    }, this));
	
	    $('#close-about').on('click', $.proxy(function (e) {
	      e.preventDefault();
	      this.close();
	    }, this));
	
	    $('#main-nav h1 a').on('click', $.proxy(function (e) {
	      this.close();
	    }, this));
	  };
	
	  About.prototype.open = function open() {
	    this.$el.addClass('show');
	    $('#main-nav').addClass('about-open');
	    $('body').addClass('no-scroll');
	    this.isOpen = true;
	  };
	
	  About.prototype.close = function close() {
	    this.$el.removeClass('show');
	    $('#main-nav').removeClass('about-open');
	    $('body').removeClass('no-scroll');
	    this.isOpen = true;
	  };
	
	  return About;
	}(Backbone.View.extend({
	  el: '#about'
	}));
	
	exports.default = About;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _page = __webpack_require__(17);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_Page) {
		_inherits(Home, _Page);
	
		function Home() {
			_classCallCheck(this, Home);
	
			return _possibleConstructorReturn(this, _Page.apply(this, arguments));
		}
	
		Home.prototype.initialize = function initialize(data, params) {
			_Page.prototype.initialize.call(this, data, params);
	
			this.template = _index2.default;
			this.render();
	
			this.workContainer = this.$el.find('section.work-list');
			this.imageContainer = this.$el.find('section.images');
			this.workLinks = [];
			this.images = [];
			this.currentWorkIndex = -1;
	
			var _this = this;
	
			_.each(this.workContainer.find('li'), function (el) {
				_this.workLinks.push($(el));
			});
	
			_.each(this.imageContainer.find('ul'), function (el) {
				_this.images.push($(el));
			});
	
			this.bindEvents();
		};
	
		Home.prototype.events = function events() {
			return {};
		};
	
		Home.prototype.render = function render() {
			this.$el = $(this.template({ data: this.data }));
	
			_Page.prototype.render.call(this);
		};
	
		Home.prototype.bindEvents = function bindEvents() {
			_Page.prototype.bindEvents.call(this);
	
			var _this = this;
	
			_.each(this.workLinks, function ($el, i) {
				$el.on('mouseover', function () {
					_this.onMouseOver($el, i);
				});
	
				$el.on('mouseout', function () {
					_this.onMouseOff($el);
				});
			});
		};
	
		Home.prototype.onMouseOff = function onMouseOff() {
			this.currentWorkIndex = -1;
			this.showCurrentWork();
			_.each(this.workLinks, function ($el) {
				$el.removeClass('inactive');
			});
		};
	
		Home.prototype.onMouseOver = function onMouseOver($el, i) {
	
			this.currentWorkIndex = i;
	
			_.each(_.without(this.workLinks, $el), function ($el) {
				$el.addClass('inactive');
			});
			this.showCurrentWork();
		};
	
		Home.prototype.showCurrentWork = function showCurrentWork() {
			if (this.currentWorkIndex == -1) {
				_.each(this.images, function ($el) {
					$el.removeClass('active');
				});
			} else {
				this.images[this.currentWorkIndex].addClass('active');
			}
		};
	
		return Home;
	}(_page2.default);
	
	exports.default = Home;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _CV = __webpack_require__(11);
	
	var _CV2 = _interopRequireDefault(_CV);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page = function (_Backbone$View$extend) {
	  _inherits(Page, _Backbone$View$extend);
	
	  function Page() {
	    _classCallCheck(this, Page);
	
	    return _possibleConstructorReturn(this, _Backbone$View$extend.apply(this, arguments));
	  }
	
	  Page.prototype.initialize = function initialize(data, params) {
	    //shared components
	    this.data = data;
	
	    this.params = params;
	
	    this.components = [];
	
	    this.subviews = [];
	
	    this.initSubviews();
	
	    this.initComponents();
	
	    this.createTimelines;
	  };
	
	  Page.prototype.createTimelines = function createTimelines() {};
	
	  Page.prototype.animateIn = function animateIn() {
	    //play the intro timeline
	    this.onShown();
	  };
	
	  Page.prototype.animateOut = function animateOut() {
	    //play the outro timeline
	    this.dispose();
	    this.trigger('animatedOut');
	  };
	
	  Page.prototype.onShown = function onShown() {};
	
	  Page.prototype.initComponents = function initComponents() {};
	
	  Page.prototype.initSubviews = function initSubviews() {};
	
	  Page.prototype.onScroll = function onScroll() {};
	
	  Page.prototype.onResize = function onResize() {
	    _.forEach(this.components, function (el) {
	      if (el && el.onResize) {
	        el.onResize();
	      }
	    });
	
	    _.forEach(this.subviews, function (el) {
	      if (el && el.onResize) {
	        el.onResize();
	      }
	    });
	  };
	
	  Page.prototype.onRAF = function onRAF() {
	    _.forEach(this.components, function (el) {
	      if (el && el.onRAF) {
	        el.onRAF();
	      }
	    });
	
	    _.forEach(this.subviews, function (el) {
	      if (el && el.onRAF) {
	        el.onRAF();
	      }
	    });
	  };
	
	  Page.prototype.bindEvents = function bindEvents() {};
	
	  Page.prototype.render = function render() {
	    this.el = this.$el[0];
	    $('#main-content').html(this.el);
	  };
	
	  Page.prototype.dispose = function dispose() {
	    _.forEach(this.components, function (el) {
	      if (el.dispose) {
	        el.dispose();
	      }
	    });
	
	    _.forEach(this.subviews, function (el) {
	      if (el.dispose) {
	        el.dispose();
	      }
	    });
	
	    this.components = [];
	    this.subviews = [];
	    this.remove();
	  };
	
	  Page.prototype.openAbout = function openAbout() {
	    $('#about').addClass('show');
	    $('#main-nav').addClass('about-open');
	    $('body').addClass('no-scroll');
	  };
	
	  Page.prototype.closeAbout = function closeAbout() {
	    $('#about').removeClass('show');
	    $('#main-nav').removeClass('about-open');
	    $('body').removeClass('no-scroll');
	  };
	
	  return Page;
	}(Backbone.View.extend({}));
	
	exports.default = Page;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug":"#home\n\tsection.images\n\t\teach project in data.projects\n\t\t\tif project.previewImages\n\t\t\t\tul(class=\"image-wrapper\", id=project.slug)\n\t\t\t\t\teach previewImage in project.previewImages\n\t\t\t\t\t\tli(style=\"background-image: url(..\u002Fimages\u002Fprojects\u002F\" + project.slug + \"\u002F\" + previewImage + \")\")\n\t\t\t\t\t\n\n\tsection.work-list\n\t\tul\n\t\t\teach project in data.projects\n\t\t\t\tli\n\t\t\t\t\ta(href=\"\u002Fwork\u002F\" + project.slug)\n\t\t\t\t\t\th2= project.title\n\t\t\t\t\t\th3= project.client"};
	;var locals_for_with = (locals || {});(function (data) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cdiv id=\"home\"\u003E";
	;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Csection class=\"images\"\u003E";
	;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	// iterate data.projects
	;(function(){
	  var $$obj = data.projects;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var project = $$obj[pug_index0];
	;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	if (project.previewImages) {
	;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cul" + (" class=\"image-wrapper\""+pug.attr("id", project.slug, true, true)) + "\u003E";
	;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	// iterate project.previewImages
	;(function(){
	  var $$obj = project.previewImages;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var previewImage = $$obj[pug_index1];
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli" + (pug.attr("style", pug.style("background-image: url(../images/projects/" + project.slug + "/" + previewImage + ")"), true, true)) + "\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var previewImage = $$obj[pug_index1];
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli" + (pug.attr("style", pug.style("background-image: url(../images/projects/" + project.slug + "/" + previewImage + ")"), true, true)) + "\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var project = $$obj[pug_index0];
	;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	if (project.previewImages) {
	;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cul" + (" class=\"image-wrapper\""+pug.attr("id", project.slug, true, true)) + "\u003E";
	;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	// iterate project.previewImages
	;(function(){
	  var $$obj = project.previewImages;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
	        var previewImage = $$obj[pug_index2];
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli" + (pug.attr("style", pug.style("background-image: url(../images/projects/" + project.slug + "/" + previewImage + ")"), true, true)) + "\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index2 in $$obj) {
	      $$l++;
	      var previewImage = $$obj[pug_index2];
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli" + (pug.attr("style", pug.style("background-image: url(../images/projects/" + project.slug + "/" + previewImage + ")"), true, true)) + "\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fsection\u003E";
	;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Csection class=\"work-list\"\u003E";
	;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	// iterate data.projects
	;(function(){
	  var $$obj = data.projects;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
	        var project = $$obj[pug_index3];
	;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", "/work/" + project.slug, true, true)) + "\u003E";
	;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ch2\u003E";
	;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = project.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
	;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ch3\u003E";
	;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = project.client) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index3 in $$obj) {
	      $$l++;
	      var project = $$obj[pug_index3];
	;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", "/work/" + project.slug, true, true)) + "\u003E";
	;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ch2\u003E";
	;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = project.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
	;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + "\u003Ch3\u003E";
	;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002Findex.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = project.client) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
	module.exports = template;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pug_has_own_property = Object.prototype.hasOwnProperty;
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	
	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}
	
	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */
	
	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + style + ':' + val[style] + ';';
	      }
	    }
	    return out;
	  } else {
	    val += '';
	    if (val[val.length - 1] !== ';') 
	      return val + ';';
	    return val;
	  }
	};
	
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';
	
	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];
	
	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }
	
	  return attrs;
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;
	
	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */
	
	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(20).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _page = __webpack_require__(17);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _work = __webpack_require__(22);
	
	var _work2 = _interopRequireDefault(_work);
	
	var _workDetail = __webpack_require__(23);
	
	var _workDetail2 = _interopRequireDefault(_workDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WorkDetail = function (_Page) {
		_inherits(WorkDetail, _Page);
	
		function WorkDetail() {
			_classCallCheck(this, WorkDetail);
	
			return _possibleConstructorReturn(this, _Page.apply(this, arguments));
		}
	
		WorkDetail.prototype.initialize = function initialize(data, params) {
			_Page.prototype.initialize.call(this, data, params);
	
			this.slug = params.slug;
			this.nextData = params.nextData;
	
			this.template = _workDetail2.default;
			this.render();
	
			this.bindEvents();
		};
	
		WorkDetail.prototype.events = function events() {
			return {};
		};
	
		WorkDetail.prototype.render = function render() {
			this.$el = $(this.template({
				data: this.data,
				slug: this.slug,
				nextData: this.nextData
			}));
	
			_Page.prototype.render.call(this);
		};
	
		WorkDetail.prototype.bindEvents = function bindEvents() {
			_Page.prototype.bindEvents.call(this);
		};
	
		return WorkDetail;
	}(_page2.default);
	
	exports.default = WorkDetail;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
		"i-smoke-weed": {
			"meta": {
				"title": "Suny Gao - I Smoke Weed",
				"description": "I Smoke Weed - Viceland"
			},
			"next": "year-in-music",
			"title": "I Smoke Weed",
			"client": "Viceland",
			"heroImage": "weed-form-hero.jpg",
			"description": "Thought marijuana has been decriminalized in many states, weed usage is still stigmatized in the America, and admitting to smoking weed is likely to invoke cartoonish stoner stereotypes. In conjunction with Viceland's TV campaign, Stink Studios created a platform for users to publicly and proudly declare &quote;I smoke weed.&quote",
			"credits": [
				{
					"type": "Agency",
					"text": "Stink Studios",
					"url": "http://www.stinkstudios.com"
				},
				{
					"type": "role",
					"text": "Front End Developer"
				},
				{
					"type": "date",
					"text": "October 2016"
				}
			],
			"links": [
				{
					"title": "launch site",
					"url": "http://www.ismokeweed.com"
				},
				{
					"title": "case study",
					"url": "http://www.stinkstudios.com/work/viceland-i-smoke-weed"
				}
			],
			"mainContent": [
				{
					"type": "image",
					"images": [
						"weed-hero.jpg"
					]
				},
				{
					"type": "image",
					"images": [
						"weed-mobile-desktop.jpg"
					]
				},
				{
					"type": "image",
					"images": [
						"weed-form.jpg",
						"weed-form-filled.jpg",
						"weed-submission-preview.jpg"
					],
					"description": "Visitors can tell their story, upload a photo, and share their declaration on Facebook and Twitter."
				},
				{
					"type": "image",
					"images": [
						"weed-featured-gallery.jpg",
						"weed-featured-story.jpg"
					],
					"description": "The site also featured stories from Viceland's TV campaign."
				},
				{
					"type": "image",
					"images": [
						"weed-gallery.jpg"
					],
					"description": "Submissions gallery"
				}
			]
		},
		"year-in-music": {
			"meta": {
				"title": "Suny Gao - Year in Music 2015",
				"description": "Spotify's Year in Music, 2015"
			},
			"next": "i-smoke-weed",
			"title": "Year in Music",
			"client": "Spotify",
			"heroImage": "yim-1.jpg",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nunc velit, id cursus libero porta quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus laoreet nisi ut nisl ultricies, vitae tincidunt purus rhoncus. Vestibulum libero metus, mollis a laoreet nec, euismod sed erat. Aenean tortor elit, blandit et felis nec, placerat dapibus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam facilisis metus sed ex vehicula tincidunt. Pellentesque vel suscipit quam. Cras pharetra venenatis neque, a feugiat ex scelerisque ut. Fusce mattis non dolor at dictum.",
			"credits": [
				{
					"type": "Agency",
					"text": "Stink Studios",
					"url": "http://www.stinkstudios.com"
				},
				{
					"type": "role",
					"text": "Front End Developer"
				},
				{
					"type": "date",
					"text": "December 2015"
				}
			],
			"press": [
				{
					"title": "press link 1",
					"url": "http://www.nytimes.com"
				},
				{
					"title": "press link 2",
					"url": "http://www.nytimes.com"
				},
				{
					"title": "press link 3",
					"url": "http://www.nytimes.com"
				}
			],
			"links": [
				{
					"title": "case study",
					"url": "http://www.stinkstudios.com"
				}
			],
			"mainContent": [
				{
					"type": "image",
					"images": [
						"desktop1.jpg",
						"desktop2.jpg",
						"desktop3.jpg"
					],
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nunc velit, id cursus libero porta quis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
				},
				{
					"type": "col-2",
					"images": [
						"mobile1.jpg",
						"mobile2.jpg",
						"mobile3.jpg",
						"mobile4.jpg"
					],
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nunc velit, id cursus libero porta quis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
				}
			]
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug":"#work-detail\n\tsection.next-project\n\t\tul\n\t\t\t\n\t\t\tli\n\t\t\t\ta(href=\"\u002Fwork\u002F\" + data.next)\n\t\t\t\t\th2=nextData.title\n\t\t\t\t\th3=nextData.client\n\n\n\tsection.work-detail\n\t\tarticle.headline\n\t\t\th2=data.title\n\t\t\th3=data.client\n\t\t\n\t\tarticle.hero\n\t\t\timg(src=\"..\u002Fimages\u002Fprojects\u002F\" + slug + \"\u002F\" + data.heroImage)\n\t\t\t\n\n\t\t.project-details\n\t\t\tarticle.description\n\t\t\t\t\tp=data.description\n\n\t\t\tarticle.credits\n\t\t\t\tul \n\t\t\t\t\teach credit in data.credits\n\t\t\t\t\t\tli\n\t\t\t\t\t\t\th4= credit.type\n\t\t\t\t\t\t\tif credit.url\n\t\t\t\t\t\t\t\tp\n\t\t\t\t\t\t\t\t\ta(href= credit.url)= credit.text\n\t\t\t\t\t\t\telse\n\t\t\t\t\t\t\t\tp= credit.text\n\t\t\tarticle.recognition\n\t\t\t\tif data.press\n\t\t\t\t\t.press\n\t\t\t\t\t\th4 Press\n\t\t\t\t\t\tul\n\t\t\t\t\t\t\teach article in data.press\n\t\t\t\t\t\t\t\tli \n\t\t\t\t\t\t\t\t\tp\n\t\t\t\t\t\t\t\t\t\ta(href= article.url, target=\"_blank\")= article.title\n\n\t\t\t\tif data.awards\n\t\t\t\t\t.awards\n\t\t\t\t\t\th4 Recognition\n\t\t\t\t\t\tul\n\t\t\t\t\t\t\teach article in data.awards\n\t\t\t\t\t\t\t\tli \n\t\t\t\t\t\t\t\t\tp\n\t\t\t\t\t\t\t\t\t\ta(href= article.url, target=\"_blank\")= article.title\n\t\t\tif data.links\n\t\t\t\tarticle.links\n\t\t\t\t\tul\n\t\t\t\t\t\teach link in data.links\n\t\t\t\t\t\t\tli\n\t\t\t\t\t\t\t\ta(class=\"button\", href= link.url, target=\"_blank\")= link.title\n\t\t\n\t\t.project-images\n\t\t\t\u002F\u002F-video\n\t\t\teach content in data.mainContent\n\t\t\t\tif(content.type == \"video\")\n\t\t\t\t\tarticle.video\n\t\t\t\t\t\t.video-player\n\t\t\t\t\t\t\timg(class=\"preview-image\", src=\"..\u002Fimages\u002Fprojects\u002F\" + slug + \"\u002F\" +content.previewImage)\n\t\t\t\t\t\t\tvideo\n\t\t\t\t\t\t\t\teach src in content.videoSrc\n\t\t\t\t\t\t\t\t\tsource(src=src.src, type=\"..\u002Fimages\u002Fprojects\u002F\" + slug + \"\u002F\" + src.type)\n\t\t\t\t\t\tif(content.description)\n\t\t\t\t\t\t\t.description\n\t\t\t\t\t\t\t\tp= content.description\n\t\t\t\telse\n\t\t\t\t\t\u002F\u002F-2 column\n\t\t\t\t\tif(content.type == \"col-2\")\n\t\t\t\t\t\tarticle.col-2\n\t\t\t\t\t\t\t.image-container\n\t\t\t\t\t\t\t\teach image in content.images\n\t\t\t\t\t\t\t\t\t.image-wrapper\n\t\t\t\t\t\t\t\t\t\timg(class=\"preview-image\", src=\"..\u002Fimages\u002Fprojects\u002F\" + slug + \"\u002F\" +image)\n\t\t\t\t\t\t\tif(content.description)\n\t\t\t\t\t\t\t\t.description\n\t\t\t\t\t\t\t\t\tp= content.description\n\t\t\t\t\t\u002F\u002F-1 column\n\t\t\t\t\telse\n\t\t\t\t\t\tarticle\n\t\t\t\t\t\t\teach image in content.images\n\t\t\t\t\t\t\t\t.image-wrapper\n\t\t\t\t\t\t\t\t\timg(class=\"preview-image\", src=\"..\u002Fimages\u002Fprojects\u002F\" + slug + \"\u002F\" +image)\n\t\t\t\t\t\t\tif(content.description)\n\t\t\t\t\t\t\t\t.description\n\t\t\t\t\t\t\t\t\tp= content.description\n\n\n"};
	;var locals_for_with = (locals || {});(function (data, nextData, slug) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv id=\"work-detail\"\u003E";
	;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csection class=\"next-project\"\u003E";
	;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", "/work/" + data.next, true, true)) + "\u003E";
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch2\u003E";
	;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = nextData.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
	;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch3\u003E";
	;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = nextData.client) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E";
	;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csection class=\"work-detail\"\u003E";
	;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"headline\"\u003E";
	;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch2\u003E";
	;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
	;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch3\u003E";
	;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = data.client) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Farticle\u003E";
	;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"hero\"\u003E";
	;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (pug.attr("src", "../images/projects/" + slug + "/" + data.heroImage, true, true)) + "\u003E\u003C\u002Farticle\u003E";
	;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"project-details\"\u003E";
	;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"description\"\u003E";
	;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = data.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Farticle\u003E";
	;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"credits\"\u003E";
	;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + " ";
	;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate data.credits
	;(function(){
	  var $$obj = data.credits;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var credit = $$obj[pug_index0];
	;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch4\u003E";
	;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.type) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
	;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if (credit.url) {
	;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", credit.url, true, true)) + "\u003E";
	;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E";
	}
	else {
	;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var credit = $$obj[pug_index0];
	;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch4\u003E";
	;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.type) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
	;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if (credit.url) {
	;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", credit.url, true, true)) + "\u003E";
	;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E";
	}
	else {
	;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = credit.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Farticle\u003E";
	;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"recognition\"\u003E";
	;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if (data.press) {
	;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"press\"\u003E";
	;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch4\u003E";
	;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "Press\u003C\u002Fh4\u003E";
	;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate data.press
	;(function(){
	  var $$obj = data.press;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var article = $$obj[pug_index1];
	;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + " ";
	;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", article.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var article = $$obj[pug_index1];
	;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + " ";
	;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", article.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
	}
	;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if (data.awards) {
	;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"awards\"\u003E";
	;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ch4\u003E";
	;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "Recognition\u003C\u002Fh4\u003E";
	;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate data.awards
	;(function(){
	  var $$obj = data.awards;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
	        var article = $$obj[pug_index2];
	;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + " ";
	;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", article.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index2 in $$obj) {
	      $$l++;
	      var article = $$obj[pug_index2];
	;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + " ";
	;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", article.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = article.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if (data.links) {
	;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"links\"\u003E";
	;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cul\u003E";
	;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate data.links
	;(function(){
	  var $$obj = data.links;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
	        var link = $$obj[pug_index3];
	;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (" class=\"button\""+pug.attr("href", link.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = link.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index3 in $$obj) {
	      $$l++;
	      var link = $$obj[pug_index3];
	;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cli\u003E";
	;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Ca" + (" class=\"button\""+pug.attr("href", link.url, true, true)+" target=\"_blank\"") + "\u003E";
	;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = link.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Farticle\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";
	;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"project-images\"\u003E";
	;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate data.mainContent
	;(function(){
	  var $$obj = data.mainContent;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
	        var content = $$obj[pug_index4];
	;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.type == "video")) {
	;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"video\"\u003E";
	;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"video-player\"\u003E";
	;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +content.previewImage, true, true)) + "\u003E";
	;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cvideo\u003E";
	;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.videoSrc
	;(function(){
	  var $$obj = content.videoSrc;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
	        var src = $$obj[pug_index5];
	;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csource" + (pug.attr("src", src.src, true, true)+pug.attr("type", "../images/projects/" + slug + "/" + src.type, true, true)) + "\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index5 in $$obj) {
	      $$l++;
	      var src = $$obj[pug_index5];
	;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csource" + (pug.attr("src", src.src, true, true)+pug.attr("type", "../images/projects/" + slug + "/" + src.type, true, true)) + "\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E";
	;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	else {
	;pug_debug_line = 74;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.type == "col-2")) {
	;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"col-2\"\u003E";
	;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E";
	;pug_debug_line = 77;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.images
	;(function(){
	  var $$obj = content.images;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
	        var image = $$obj[pug_index6];
	;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index6 in $$obj) {
	      $$l++;
	      var image = $$obj[pug_index6];
	;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";
	;pug_debug_line = 80;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 81;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	else {
	;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle\u003E";
	;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.images
	;(function(){
	  var $$obj = content.images;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
	        var image = $$obj[pug_index7];
	;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index7 in $$obj) {
	      $$l++;
	      var image = $$obj[pug_index7];
	;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	
	;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	}
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index4 in $$obj) {
	      $$l++;
	      var content = $$obj[pug_index4];
	;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.type == "video")) {
	;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"video\"\u003E";
	;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"video-player\"\u003E";
	;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +content.previewImage, true, true)) + "\u003E";
	;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cvideo\u003E";
	;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.videoSrc
	;(function(){
	  var $$obj = content.videoSrc;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
	        var src = $$obj[pug_index8];
	;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csource" + (pug.attr("src", src.src, true, true)+pug.attr("type", "../images/projects/" + slug + "/" + src.type, true, true)) + "\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index8 in $$obj) {
	      $$l++;
	      var src = $$obj[pug_index8];
	;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Csource" + (pug.attr("src", src.src, true, true)+pug.attr("type", "../images/projects/" + slug + "/" + src.type, true, true)) + "\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E";
	;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	else {
	;pug_debug_line = 74;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.type == "col-2")) {
	;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle class=\"col-2\"\u003E";
	;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E";
	;pug_debug_line = 77;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.images
	;(function(){
	  var $$obj = content.images;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
	        var image = $$obj[pug_index9];
	;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index9 in $$obj) {
	      $$l++;
	      var image = $$obj[pug_index9];
	;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";
	;pug_debug_line = 80;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 81;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	else {
	;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Carticle\u003E";
	;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	// iterate content.images
	;(function(){
	  var $$obj = content.images;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
	        var image = $$obj[pug_index10];
	;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index10 in $$obj) {
	      $$l++;
	      var image = $$obj[pug_index10];
	;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"image-wrapper\"\u003E";
	;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cimg" + (" class=\"preview-image\""+pug.attr("src", "../images/projects/" + slug + "/" +image, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	
	;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	if ((content.description)) {
	;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
	;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + "\u003Cp\u003E";
	;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Fsunygao\u002FDocuments\u002Fsites\u002Fsunygao.com\u002Fsite_2016\u002Fnewsite\u002Fviews\u002FworkDetail.pug";
	pug_html = pug_html + (pug.escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
	}
	pug_html = pug_html + "\u003C\u002Farticle\u003E";
	}
	}
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"nextData" in locals_for_with?locals_for_with.nextData:typeof nextData!=="undefined"?nextData:undefined,"slug" in locals_for_with?locals_for_with.slug:typeof slug!=="undefined"?slug:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
	module.exports = template;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
		"meta": {
			"title": "Suny Gao - Home",
			"description": "Suny Gao - Interactive developer in Brooklyn, NY"
		},
		"projects": [
			{
				"title": "ismokeweed.com",
				"client": "vice weediquette",
				"slug": "i-smoke-weed",
				"previewImages": [
					"weed-1.jpg",
					"weed-2.jpg",
					"weed-3.jpg"
				]
			},
			{
				"title": "Year in Music",
				"client": "spotify",
				"slug": "year-in-music",
				"previewImages": [
					"yim-1.jpg",
					"yim-2.jpg"
				]
			},
			{
				"title": "Camp Google",
				"client": "google",
				"slug": "camp-google",
				"previewImages": [
					"camp-google-1.jpg",
					"camp-google-2.jpg"
				]
			},
			{
				"title": "Google Calendar",
				"client": "google",
				"slug": "google-calendar"
			},
			{
				"title": "Internet.org",
				"client": "facebook",
				"slug": "internet-org"
			},
			{
				"title": "Hello Chime",
				"client": "chime",
				"slug": "hello-chime"
			}
		]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map