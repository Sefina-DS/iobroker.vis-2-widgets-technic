function j(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const u in n) if (u !== "default" && !(u in e)) {
        const s = Object.getOwnPropertyDescriptor(n, u);
        s && Object.defineProperty(e, u, s.get ? s : { enumerable: true, get: () => n[u] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function N(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qe(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(e).forEach(function(n) {
    var u = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, u.get ? u : { enumerable: true, get: function() {
      return e[n];
    } });
  }), r;
}
var k = { exports: {} }, o = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var y = Symbol.for("react.element"), A = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), H = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), C = Symbol.iterator;
function J(e) {
  return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
}
var T = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, x = Object.assign, P = {};
function p(e, t, r) {
  this.props = e, this.context = t, this.refs = P, this.updater = r || T;
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
p.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $() {
}
$.prototype = p.prototype;
function S(e, t, r) {
  this.props = e, this.context = t, this.refs = P, this.updater = r || T;
}
var b = S.prototype = new $();
b.constructor = S;
x(b, p.prototype);
b.isPureReactComponent = true;
var O = Array.isArray, I = Object.prototype.hasOwnProperty, R = { current: null }, D = { key: true, ref: true, __self: true, __source: true };
function M(e, t, r) {
  var n, u = {}, s = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) I.call(t, n) && !D.hasOwnProperty(n) && (u[n] = t[n]);
  var c = arguments.length - 2;
  if (c === 1) u.children = r;
  else if (1 < c) {
    for (var f = Array(c), i = 0; i < c; i++) f[i] = arguments[i + 2];
    u.children = f;
  }
  if (e && e.defaultProps) for (n in c = e.defaultProps, c) u[n] === void 0 && (u[n] = c[n]);
  return { $$typeof: y, type: e, key: s, ref: a, props: u, _owner: R.current };
}
function Q(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function g(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function X(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var w = /\/+/g;
function E(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? X("" + e.key) : t.toString(36);
}
function d(e, t, r, n, u) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = false;
  if (e === null) a = true;
  else switch (s) {
    case "string":
    case "number":
      a = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case y:
        case A:
          a = true;
      }
  }
  if (a) return a = e, u = u(a), e = n === "" ? "." + E(a, 0) : n, O(u) ? (r = "", e != null && (r = e.replace(w, "$&/") + "/"), d(u, t, r, "", function(i) {
    return i;
  })) : u != null && (g(u) && (u = Q(u, r + (!u.key || a && a.key === u.key ? "" : ("" + u.key).replace(w, "$&/") + "/") + e)), t.push(u)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", O(e)) for (var c = 0; c < e.length; c++) {
    s = e[c];
    var f = n + E(s, c);
    a += d(s, t, r, f, u);
  }
  else if (f = J(e), typeof f == "function") for (e = f.call(e), c = 0; !(s = e.next()).done; ) s = s.value, f = n + E(s, c++), a += d(s, t, r, f, u);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function m(e, t, r) {
  if (e == null) return e;
  var n = [], u = 0;
  return d(e, n, "", "", function(s) {
    return t.call(r, s, u++);
  }), n;
}
function Z(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var l = { current: null }, h = { transition: null }, ee = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: h, ReactCurrentOwner: R };
function L() {
  throw Error("act(...) is not supported in production builds of React.");
}
o.Children = { map: m, forEach: function(e, t, r) {
  m(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return m(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return m(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!g(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
o.Component = p;
o.Fragment = U;
o.Profiler = z;
o.PureComponent = S;
o.StrictMode = q;
o.Suspense = G;
o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee;
o.act = L;
o.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = x({}, e.props), u = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (f in t) I.call(t, f) && !D.hasOwnProperty(f) && (n[f] = t[f] === void 0 && c !== void 0 ? c[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) n.children = r;
  else if (1 < f) {
    c = Array(f);
    for (var i = 0; i < f; i++) c[i] = arguments[i + 2];
    n.children = c;
  }
  return { $$typeof: y, type: e.type, key: u, ref: s, props: n, _owner: a };
};
o.createContext = function(e) {
  return e = { $$typeof: H, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: B, _context: e }, e.Consumer = e;
};
o.createElement = M;
o.createFactory = function(e) {
  var t = M.bind(null, e);
  return t.type = e, t;
};
o.createRef = function() {
  return { current: null };
};
o.forwardRef = function(e) {
  return { $$typeof: W, render: e };
};
o.isValidElement = g;
o.lazy = function(e) {
  return { $$typeof: K, _payload: { _status: -1, _result: e }, _init: Z };
};
o.memo = function(e, t) {
  return { $$typeof: Y, type: e, compare: t === void 0 ? null : t };
};
o.startTransition = function(e) {
  var t = h.transition;
  h.transition = {};
  try {
    e();
  } finally {
    h.transition = t;
  }
};
o.unstable_act = L;
o.useCallback = function(e, t) {
  return l.current.useCallback(e, t);
};
o.useContext = function(e) {
  return l.current.useContext(e);
};
o.useDebugValue = function() {
};
o.useDeferredValue = function(e) {
  return l.current.useDeferredValue(e);
};
o.useEffect = function(e, t) {
  return l.current.useEffect(e, t);
};
o.useId = function() {
  return l.current.useId();
};
o.useImperativeHandle = function(e, t, r) {
  return l.current.useImperativeHandle(e, t, r);
};
o.useInsertionEffect = function(e, t) {
  return l.current.useInsertionEffect(e, t);
};
o.useLayoutEffect = function(e, t) {
  return l.current.useLayoutEffect(e, t);
};
o.useMemo = function(e, t) {
  return l.current.useMemo(e, t);
};
o.useReducer = function(e, t, r) {
  return l.current.useReducer(e, t, r);
};
o.useRef = function(e) {
  return l.current.useRef(e);
};
o.useState = function(e) {
  return l.current.useState(e);
};
o.useSyncExternalStore = function(e, t, r) {
  return l.current.useSyncExternalStore(e, t, r);
};
o.useTransition = function() {
  return l.current.useTransition();
};
o.version = "18.3.1";
k.exports = o;
var V = k.exports;
const te = N(V), re = j({ __proto__: null, default: te }, [V]), v = "__mf_module_cache__";
globalThis[v] ||= { share: {}, remote: {} };
globalThis[v].share ||= {};
globalThis[v].remote ||= {};
const F = globalThis[v];
let _ = F.share.react;
_ === void 0 && (_ = re, F.share.react = _);
const ne = _, oe = _.__esModule ? _.default : _.default ?? _, { Children: ue, Component: se, Fragment: fe, Profiler: ce, PureComponent: ae, StrictMode: le, Suspense: ie, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _e, act: pe, cloneElement: ye, createContext: me, createElement: de, createFactory: he, createRef: ve, forwardRef: Ee, isValidElement: Se, lazy: be, memo: Re, startTransition: ge, unstable_act: Ce, useCallback: Oe, useContext: we, useDebugValue: je, useDeferredValue: ke, useEffect: Te, useId: xe, useImperativeHandle: Pe, useInsertionEffect: $e, useLayoutEffect: Ie, useMemo: De, useReducer: Me, useRef: Le, useState: Ve, useSyncExternalStore: Fe, useTransition: Ne, version: Ae } = _, ze = j({ __proto__: null, Children: ue, Component: se, Fragment: fe, Profiler: ce, PureComponent: ae, StrictMode: le, Suspense: ie, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _e, act: pe, cloneElement: ye, createContext: me, createElement: de, createFactory: he, createRef: ve, default: oe, forwardRef: Ee, isValidElement: Se, lazy: be, memo: Re, startTransition: ge, unstable_act: Ce, useCallback: Oe, useContext: we, useDebugValue: je, useDeferredValue: ke, useEffect: Te, useId: xe, useImperativeHandle: Pe, useInsertionEffect: $e, useLayoutEffect: Ie, useMemo: De, useReducer: Me, useRef: Le, useState: Ve, useSyncExternalStore: Fe, useTransition: Ne, version: Ae }, [ne]);
export {
  ze as R,
  re as _,
  N as a,
  Ie as b,
  Ee as c,
  we as d,
  me as e,
  de as f,
  qe as g,
  fe as h,
  Le as i,
  Se as j,
  Te as k,
  Oe as l,
  De as m,
  Ve as n,
  Ae as o,
  Re as p,
  oe as q,
  ye as r,
  ue as s,
  Pe as t,
  se as u,
  Ue as v,
  ae as w,
  Me as x
};
