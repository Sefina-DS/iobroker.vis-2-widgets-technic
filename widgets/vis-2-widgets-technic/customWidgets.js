import { _ as be } from "./assets/preload-helper-CmsKOCeN.js";
let va, Pa;
let __tla = (async () => {
  var cr = {}, ur = {}, vt = {}, I = {}, L = {}, P = {};
  const fn = "federation-manifest.json", dn = ".json", hn = "FEDERATION_DEBUG", B = {
    AT: "@",
    HYPHEN: "-",
    SLASH: "/"
  }, Ue = {
    [B.AT]: "scope_",
    [B.HYPHEN]: "_",
    [B.SLASH]: "__"
  }, mn = {
    [Ue[B.AT]]: B.AT,
    [Ue[B.HYPHEN]]: B.HYPHEN,
    [Ue[B.SLASH]]: B.SLASH
  }, _n = ":", pn = "mf-manifest.json", gn = "mf-stats.json", En = {
    NPM: "npm",
    APP: "app"
  }, yn = "__MF_DEVTOOLS_MODULE_INFO__", Sn = "ENCODE_NAME_PREFIX", bn = ".federation";
  let Rn = function(e) {
    return e[e.UNKNOWN = 1] = "UNKNOWN", e[e.CALCULATED = 2] = "CALCULATED", e[e.NO_USE = 0] = "NO_USE", e;
  }({});
  P.BROWSER_LOG_KEY = hn;
  P.ENCODE_NAME_PREFIX = Sn;
  P.EncodedNameTransformMap = mn;
  P.FederationModuleManifest = fn;
  P.MANIFEST_EXT = dn;
  P.MFModuleType = En;
  P.MODULE_DEVTOOL_IDENTIFIER = yn;
  P.ManifestFileName = pn;
  P.NameTransformMap = Ue;
  P.NameTransformSymbol = B;
  P.SEPARATOR = _n;
  P.StatsFileName = gn;
  P.TEMP_DIR = bn;
  P.TreeShakingStatus = Rn;
  var fr = {}, ee = {}, Ht = Object.defineProperty, Tn = (e, t) => {
    let r = {};
    for (var n in e) Ht(r, n, {
      get: e[n],
      enumerable: true
    });
    return t || Ht(r, Symbol.toStringTag, {
      value: "Module"
    }), r;
  };
  ee.__exportAll = Tn;
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "ContainerPlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(fr);
  var dr = {};
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "ContainerReferencePlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(dr);
  var hr = {};
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "ModuleFederationPlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(hr);
  var mr = {};
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "SharePlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(mr);
  var _r = {};
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "ConsumeSharedPlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(_r);
  var pr = {};
  (function(e) {
    var r = ee.__exportAll({});
    Object.defineProperty(e, "ProvideSharedPlugin_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(pr);
  var z = {}, Re = {};
  const In = P, gr = true;
  function Er() {
    return gr;
  }
  function Nn() {
    return typeof navigator < "u" && (navigator == null ? void 0 : navigator.product) === "ReactNative";
  }
  function Mn() {
    try {
      if (Er() && window.localStorage) return !!localStorage.getItem(In.BROWSER_LOG_KEY);
    } catch {
      return false;
    }
    return false;
  }
  function Pn() {
    return typeof process < "u" && Re && Re.FEDERATION_DEBUG ? !!Re.FEDERATION_DEBUG : typeof FEDERATION_DEBUG < "u" && FEDERATION_DEBUG ? true : Mn();
  }
  const vn = function() {
    return typeof process < "u" && Re ? Re : {};
  };
  z.getProcessEnv = vn;
  z.isBrowserEnv = Er;
  z.isBrowserEnvValue = gr;
  z.isDebugMode = Pn;
  z.isReactNativeEnv = Nn;
  var D = {};
  const y = P, gt = z, yr = "[ Federation Runtime ]", On = (e, t, r = y.SEPARATOR) => {
    const n = e.split(r), o = gt.getProcessEnv().NODE_ENV === "development" && t, s = "*", i = (a) => a.startsWith("http") || a.includes(y.MANIFEST_EXT);
    if (n.length >= 2) {
      let [a, ...c] = n;
      e.startsWith(r) && (a = n.slice(0, 2).join(r), c = [
        o || n.slice(2).join(r)
      ]);
      let l = o || c.join(r);
      return i(l) ? {
        name: a,
        entry: l
      } : {
        name: a,
        version: l || s
      };
    } else if (n.length === 1) {
      const [a] = n;
      return o && i(o) ? {
        name: a,
        entry: o
      } : {
        name: a,
        version: o || s
      };
    } else throw `Invalid entry value: ${e}`;
  }, An = function(...e) {
    return e.length ? e.reduce((t, r) => r ? t ? `${t}${y.SEPARATOR}${r}` : r : t, "") : "";
  }, Ot = function(e, t = "", r = false) {
    try {
      const n = r ? ".js" : "";
      return `${t}${e.replace(new RegExp(`${y.NameTransformSymbol.AT}`, "g"), y.NameTransformMap[y.NameTransformSymbol.AT]).replace(new RegExp(`${y.NameTransformSymbol.HYPHEN}`, "g"), y.NameTransformMap[y.NameTransformSymbol.HYPHEN]).replace(new RegExp(`${y.NameTransformSymbol.SLASH}`, "g"), y.NameTransformMap[y.NameTransformSymbol.SLASH])}${n}`;
    } catch (n) {
      throw n;
    }
  }, $n = function(e, t, r) {
    try {
      let n = e;
      if (t) {
        if (!n.startsWith(t)) return n;
        n = n.replace(new RegExp(t, "g"), "");
      }
      return n = n.replace(new RegExp(`${y.NameTransformMap[y.NameTransformSymbol.AT]}`, "g"), y.EncodedNameTransformMap[y.NameTransformMap[y.NameTransformSymbol.AT]]).replace(new RegExp(`${y.NameTransformMap[y.NameTransformSymbol.SLASH]}`, "g"), y.EncodedNameTransformMap[y.NameTransformMap[y.NameTransformSymbol.SLASH]]).replace(new RegExp(`${y.NameTransformMap[y.NameTransformSymbol.HYPHEN]}`, "g"), y.EncodedNameTransformMap[y.NameTransformMap[y.NameTransformSymbol.HYPHEN]]), r && (n = n.replace(".js", "")), n;
    } catch (n) {
      throw n;
    }
  }, kn = (e, t) => {
    if (!e) return "";
    let r = e;
    return r === "." && (r = "default_export"), r.startsWith("./") && (r = r.replace("./", "")), Ot(r, "__federation_expose_", t);
  }, wn = (e, t) => e ? Ot(e, "__federation_shared_", t) : "", Fn = (e, t) => {
    if ("getPublicPath" in e) {
      let r;
      return e.getPublicPath.startsWith("function") ? r = new Function("return " + e.getPublicPath)()() : r = new Function(e.getPublicPath)(), `${r}${t}`;
    } else return "publicPath" in e ? !gt.isBrowserEnv() && !gt.isReactNativeEnv() && "ssrPublicPath" in e && typeof e.ssrPublicPath == "string" ? `${e.ssrPublicPath}${t}` : `${e.publicPath}${t}` : (console.warn("Cannot get resource URL. If in debug mode, please ignore.", e, t), "");
  }, Ln = (e, t) => {
    e || Sr(t);
  }, Sr = (e) => {
    throw new Error(`${yr}: ${e}`);
  }, Dn = (e) => {
    console.warn(`${yr}: ${e}`);
  };
  function Hn(e) {
    try {
      return JSON.stringify(e, null, 2);
    } catch {
      return "";
    }
  }
  const qn = /^([\d^=v<>~]|[*xX]$)/;
  function Cn(e) {
    return qn.test(e);
  }
  D.assert = Ln;
  D.composeKeyWithSeparator = An;
  D.decodeName = $n;
  D.encodeName = Ot;
  D.error = Sr;
  D.generateExposeFilename = kn;
  D.generateShareFilename = wn;
  D.getResourceUrl = Fn;
  D.isRequiredVersion = Cn;
  D.parseEntry = On;
  D.safeToString = Hn;
  D.warn = Dn;
  var ue = {};
  const Ee = P, le = (e, t) => {
    if (!e) return t;
    const n = ((o) => {
      if (o === ".") return "";
      if (o.startsWith("./")) return o.replace("./", "");
      if (o.startsWith("/")) {
        const s = o.slice(1);
        return s.endsWith("/") ? s.slice(0, -1) : s;
      }
      return o;
    })(e);
    return n ? n.endsWith("/") ? `${n}${t}` : `${n}/${t}` : t;
  };
  function br(e) {
    return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  }
  function Un(e, t = {}) {
    var _a2;
    const { remotes: r = {}, overrides: n = {}, version: o } = t;
    let s;
    const i = () => "publicPath" in e.metaData ? (e.metaData.publicPath === "auto" || e.metaData.publicPath === "") && o ? br(o) : e.metaData.publicPath : e.metaData.getPublicPath, a = Object.keys(n);
    let c = {};
    Object.keys(r).length || (c = ((_a2 = e.remotes) == null ? void 0 : _a2.reduce((p, $) => {
      let w;
      const v = $.federationContainerName;
      return a.includes(v) ? w = n[v] : "version" in $ ? w = $.version : w = $.entry, p[v] = {
        matchedVersion: w
      }, p;
    }, {})) || {}), Object.keys(r).forEach((p) => c[p] = {
      matchedVersion: a.includes(p) ? n[p] : r[p]
    });
    const { remoteEntry: { path: l, name: u, type: f }, types: d = {
      path: "",
      name: "",
      zip: "",
      api: ""
    }, buildInfo: { buildVersion: h }, globalName: _, ssrRemoteEntry: m } = e.metaData, { exposes: E } = e;
    let g = {
      version: o || "",
      buildVersion: h,
      globalName: _,
      remoteEntry: le(l, u),
      remoteEntryType: f,
      remoteTypes: le(d.path, d.name),
      remoteTypesZip: d.zip || "",
      remoteTypesAPI: d.api || "",
      remotesInfo: c,
      shared: e == null ? void 0 : e.shared.map((p) => ({
        assets: p.assets,
        sharedName: p.name,
        version: p.version,
        usedExports: p.referenceExports || []
      })),
      modules: E == null ? void 0 : E.map((p) => ({
        moduleName: p.name,
        modulePath: p.path,
        assets: p.assets
      }))
    };
    if ("publicPath" in e.metaData ? (s = {
      ...g,
      publicPath: i()
    }, typeof e.metaData.ssrPublicPath == "string" && (s.ssrPublicPath = e.metaData.ssrPublicPath)) : s = {
      ...g,
      getPublicPath: i()
    }, m) {
      const p = le(m.path, m.name);
      s.ssrRemoteEntry = p, s.ssrRemoteEntryType = m.type || "commonjs-module";
    }
    return s;
  }
  function Gn(e) {
    return !!("remoteEntry" in e && e.remoteEntry.includes(Ee.MANIFEST_EXT));
  }
  function Wn(e) {
    if (!e) return {
      statsFileName: Ee.StatsFileName,
      manifestFileName: Ee.ManifestFileName
    };
    let t = typeof e == "boolean" ? "" : e.filePath || "", r = typeof e == "boolean" ? "" : e.fileName || "";
    const n = ".json", o = (a) => a.endsWith(n) ? a : `${a}${n}`, s = (a, c) => a.replace(n, `${c}${n}`), i = r ? o(r) : Ee.ManifestFileName;
    return {
      statsFileName: le(t, r ? s(i, "-stats") : Ee.StatsFileName),
      manifestFileName: le(t, i)
    };
  }
  ue.generateSnapshotFromManifest = Un;
  ue.getManifestFileName = Wn;
  ue.inferAutoPublicPath = br;
  ue.isManifestProvider = Gn;
  ue.simpleJoinRemoteEntry = le;
  var fe = {};
  const qt = z, Rr = "[ Module Federation ]", pe = console, Bn = [
    "logger.ts",
    "logger.js",
    "captureStackTrace",
    "Logger.emit",
    "Logger.log",
    "Logger.info",
    "Logger.warn",
    "Logger.error",
    "Logger.debug"
  ];
  function Vn() {
    try {
      const e = new Error().stack;
      if (!e) return;
      const [, ...t] = e.split(`
`), r = t.filter((n) => !Bn.some((o) => n.includes(o)));
      return r.length ? `Stack trace:
${r.slice(0, 5).join(`
`)}` : void 0;
    } catch {
      return;
    }
  }
  var Tr = class {
    constructor(e, t = pe) {
      this.prefix = e, this.delegate = t ?? pe;
    }
    setPrefix(e) {
      this.prefix = e;
    }
    setDelegate(e) {
      this.delegate = e ?? pe;
    }
    emit(e, t) {
      const r = this.delegate, n = qt.isDebugMode() ? Vn() : void 0, o = n ? [
        ...t,
        n
      ] : t, s = (() => {
        switch (e) {
          case "log":
            return [
              "log",
              "info"
            ];
          case "info":
            return [
              "info",
              "log"
            ];
          case "warn":
            return [
              "warn",
              "info",
              "log"
            ];
          case "error":
            return [
              "error",
              "warn",
              "log"
            ];
          default:
            return [
              "debug",
              "log"
            ];
        }
      })();
      for (const i of s) {
        const a = r[i];
        if (typeof a == "function") {
          a.call(r, this.prefix, ...o);
          return;
        }
      }
      for (const i of s) {
        const a = pe[i];
        if (typeof a == "function") {
          a.call(pe, this.prefix, ...o);
          return;
        }
      }
    }
    log(...e) {
      this.emit("log", e);
    }
    warn(...e) {
      this.emit("warn", e);
    }
    error(...e) {
      this.emit("error", e);
    }
    success(...e) {
      this.emit("info", e);
    }
    info(...e) {
      this.emit("info", e);
    }
    ready(...e) {
      this.emit("info", e);
    }
    debug(...e) {
      qt.isDebugMode() && this.emit("debug", e);
    }
  };
  function Ir(e) {
    return new Tr(e);
  }
  function Nr(e) {
    const t = new Tr(e);
    return Object.defineProperty(t, "__mf_infrastructure_logger__", {
      value: true,
      enumerable: false,
      configurable: false
    }), t;
  }
  function jn(e, t, r) {
    if (e.__mf_infrastructure_logger__ && (t == null ? void 0 : t.getInfrastructureLogger)) try {
      const n = t.getInfrastructureLogger(r);
      n && typeof n == "object" && (typeof n.log == "function" || typeof n.info == "function" || typeof n.warn == "function" || typeof n.error == "function") && e.setDelegate(n);
    } catch {
      e.setDelegate(void 0);
    }
  }
  const xn = Ir(Rr), Xn = Nr(Rr);
  fe.bindLoggerToCompiler = jn;
  fe.createInfrastructureLogger = Nr;
  fe.createLogger = Ir;
  fe.infrastructureLogger = Xn;
  fe.logger = xn;
  var de = {};
  const Kn = D;
  async function At(e, t) {
    try {
      return await e();
    } catch (r) {
      !t && Kn.warn(r);
      return;
    }
  }
  function je(e, t) {
    const r = /^(https?:)?\/\//i;
    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "");
  }
  function Mr(e) {
    let t = null, r = true, n = 2e4, o;
    const s = document.getElementsByTagName("script");
    for (let l = 0; l < s.length; l++) {
      const u = s[l], f = u.getAttribute("src");
      if (f && je(f, e.url)) {
        t = u, r = false;
        break;
      }
    }
    if (!t) {
      const l = e.attrs;
      t = document.createElement("script"), t.type = (l == null ? void 0 : l.type) === "module" ? "module" : "text/javascript";
      let u;
      e.createScriptHook && (u = e.createScriptHook(e.url, e.attrs), u instanceof HTMLScriptElement ? t = u : typeof u == "object" && ("script" in u && u.script && (t = u.script), "timeout" in u && u.timeout && (n = u.timeout))), t.src || (t.src = e.url), l && !u && Object.keys(l).forEach((f) => {
        t && (f === "async" || f === "defer" ? t[f] = l[f] : t.getAttribute(f) || t.setAttribute(f, l[f]));
      });
    }
    let i = null;
    const a = typeof window < "u" ? (l) => {
      if (l.filename && je(l.filename, e.url)) {
        const u = new Error(`ScriptExecutionError: Script "${e.url}" loaded but threw a runtime error during execution: ${l.message} (${l.filename}:${l.lineno}:${l.colno})`);
        u.name = "ScriptExecutionError", i = u;
      }
    } : null;
    a && window.addEventListener("error", a);
    const c = async (l, u) => {
      clearTimeout(o), a && window.removeEventListener("error", a);
      const f = () => {
        if ((u == null ? void 0 : u.type) === "error") {
          const d = new Error((u == null ? void 0 : u.isTimeout) ? `ScriptNetworkError: Script "${e.url}" timed out.` : `ScriptNetworkError: Failed to load script "${e.url}" - the script URL is unreachable or the server returned an error (network failure, 404, CORS, etc.)`);
          d.name = "ScriptNetworkError", (e == null ? void 0 : e.onErrorCallback) && (e == null ? void 0 : e.onErrorCallback(d));
        } else i ? (e == null ? void 0 : e.onErrorCallback) && (e == null ? void 0 : e.onErrorCallback(i)) : (e == null ? void 0 : e.cb) && (e == null ? void 0 : e.cb());
      };
      if (t && (t.onerror = null, t.onload = null, At(() => {
        const { needDeleteScript: d = true } = e;
        d && (t == null ? void 0 : t.parentNode) && t.parentNode.removeChild(t);
      }), l && typeof l == "function")) {
        const d = l(u);
        if (d instanceof Promise) {
          const h = await d;
          return f(), h;
        }
        return f(), d;
      }
      f();
    };
    return t.onerror = c.bind(null, t.onerror), t.onload = c.bind(null, t.onload), o = setTimeout(() => {
      c(null, {
        type: "error",
        isTimeout: true
      });
    }, n), {
      script: t,
      needAttach: r
    };
  }
  function Yn(e) {
    let t = null, r = true;
    const n = document.getElementsByTagName("link");
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i.getAttribute("href"), c = i.getAttribute("rel");
      if (a && je(a, e.url) && c === e.attrs.rel) {
        t = i, r = false;
        break;
      }
    }
    if (!t) {
      t = document.createElement("link"), t.setAttribute("href", e.url);
      let s;
      const i = e.attrs;
      e.createLinkHook && (s = e.createLinkHook(e.url, i), s instanceof HTMLLinkElement && (t = s)), i && !s && Object.keys(i).forEach((a) => {
        t && !t.getAttribute(a) && t.setAttribute(a, i[a]);
      });
    }
    const o = (s, i) => {
      const a = () => {
        (i == null ? void 0 : i.type) === "error" ? (e == null ? void 0 : e.onErrorCallback) && (e == null ? void 0 : e.onErrorCallback(i)) : (e == null ? void 0 : e.cb) && (e == null ? void 0 : e.cb());
      };
      if (t && (t.onerror = null, t.onload = null, At(() => {
        const { needDeleteLink: c = true } = e;
        c && (t == null ? void 0 : t.parentNode) && t.parentNode.removeChild(t);
      }), s)) {
        const c = s(i);
        return a(), c;
      }
      a();
    };
    return t.onerror = o.bind(null, t.onerror), t.onload = o.bind(null, t.onload), {
      link: t,
      needAttach: r
    };
  }
  function zn(e, t) {
    const { attrs: r = {}, createScriptHook: n } = t;
    return new Promise((o, s) => {
      const { script: i, needAttach: a } = Mr({
        url: e,
        cb: o,
        onErrorCallback: s,
        attrs: {
          fetchpriority: "high",
          ...r
        },
        createScriptHook: n,
        needDeleteScript: true
      });
      a && document.head.appendChild(i);
    });
  }
  de.createLink = Yn;
  de.createScript = Mr;
  de.isStaticResourcesEqual = je;
  de.loadScript = zn;
  de.safeWrapper = At;
  var $t = {};
  const Jn = (e, t, r, n) => {
    t(new Error("createScriptNode is disabled in non-Node.js environment"));
  }, Zn = (e, t) => {
    throw new Error("loadScriptNode is disabled in non-Node.js environment");
  };
  $t.createScriptNode = Jn;
  $t.loadScriptNode = Zn;
  var Pr = {};
  function Qn(e, t, r) {
    return function(n) {
      if (n === false) return false;
      if (typeof n > "u") return e ? t : false;
      if (n === true) return t;
      if (n && typeof n == "object") return {
        ...t,
        ...n
      };
      throw new Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof n}`);
    };
  }
  Pr.normalizeOptions = Qn;
  var vr = {};
  const eo = (e) => e;
  vr.createModuleFederationConfig = eo;
  (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    const t = P, r = fr, n = dr, o = hr, s = mr, i = _r, a = pr, c = z, l = D, u = ue, f = fe, d = de, h = $t, _ = Pr, m = vr;
    e.BROWSER_LOG_KEY = t.BROWSER_LOG_KEY, e.ENCODE_NAME_PREFIX = t.ENCODE_NAME_PREFIX, e.EncodedNameTransformMap = t.EncodedNameTransformMap, e.FederationModuleManifest = t.FederationModuleManifest, e.MANIFEST_EXT = t.MANIFEST_EXT, e.MFModuleType = t.MFModuleType, e.MODULE_DEVTOOL_IDENTIFIER = t.MODULE_DEVTOOL_IDENTIFIER, e.ManifestFileName = t.ManifestFileName, e.NameTransformMap = t.NameTransformMap, e.NameTransformSymbol = t.NameTransformSymbol, e.SEPARATOR = t.SEPARATOR, e.StatsFileName = t.StatsFileName, e.TEMP_DIR = t.TEMP_DIR, e.TreeShakingStatus = t.TreeShakingStatus, e.assert = l.assert, e.bindLoggerToCompiler = f.bindLoggerToCompiler, e.composeKeyWithSeparator = l.composeKeyWithSeparator, Object.defineProperty(e, "consumeSharedPlugin", {
      enumerable: true,
      get: function() {
        return i.ConsumeSharedPlugin_exports;
      }
    }), Object.defineProperty(e, "containerPlugin", {
      enumerable: true,
      get: function() {
        return r.ContainerPlugin_exports;
      }
    }), Object.defineProperty(e, "containerReferencePlugin", {
      enumerable: true,
      get: function() {
        return n.ContainerReferencePlugin_exports;
      }
    }), e.createInfrastructureLogger = f.createInfrastructureLogger, e.createLink = d.createLink, e.createLogger = f.createLogger, e.createModuleFederationConfig = m.createModuleFederationConfig, e.createScript = d.createScript, e.createScriptNode = h.createScriptNode, e.decodeName = l.decodeName, e.encodeName = l.encodeName, e.error = l.error, e.generateExposeFilename = l.generateExposeFilename, e.generateShareFilename = l.generateShareFilename, e.generateSnapshotFromManifest = u.generateSnapshotFromManifest, e.getManifestFileName = u.getManifestFileName, e.getProcessEnv = c.getProcessEnv, e.getResourceUrl = l.getResourceUrl, e.inferAutoPublicPath = u.inferAutoPublicPath, e.infrastructureLogger = f.infrastructureLogger, e.isBrowserEnv = c.isBrowserEnv, e.isBrowserEnvValue = c.isBrowserEnvValue, e.isDebugMode = c.isDebugMode, e.isManifestProvider = u.isManifestProvider, e.isReactNativeEnv = c.isReactNativeEnv, e.isRequiredVersion = l.isRequiredVersion, e.isStaticResourcesEqual = d.isStaticResourcesEqual, e.loadScript = d.loadScript, e.loadScriptNode = h.loadScriptNode, e.logger = f.logger, Object.defineProperty(e, "moduleFederationPlugin", {
      enumerable: true,
      get: function() {
        return o.ModuleFederationPlugin_exports;
      }
    }), e.normalizeOptions = _.normalizeOptions, e.parseEntry = l.parseEntry, Object.defineProperty(e, "provideSharedPlugin", {
      enumerable: true,
      get: function() {
        return a.ProvideSharedPlugin_exports;
      }
    }), e.safeToString = l.safeToString, e.safeWrapper = d.safeWrapper, Object.defineProperty(e, "sharePlugin", {
      enumerable: true,
      get: function() {
        return s.SharePlugin_exports;
      }
    }), e.simpleJoinRemoteEntry = u.simpleJoinRemoteEntry, e.warn = l.warn;
  })(L);
  var Or = {}, kt = {};
  const to = (e) => `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${e.split("-")[0].toLowerCase()}#${e.toLowerCase()}`, ro = (e, t, r, n) => {
    const o = [
      `${[
        t[e]
      ]} #${e}`
    ];
    return r && o.push(`args: ${JSON.stringify(r)}`), o.push(to(e)), n && o.push(`Original Error Message:
 ${n}`), o.join(`
`);
  };
  kt.getShortErrorMsg = ro;
  (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    const t = kt;
    function r(n, o, s, i, a, c) {
      return i(t.getShortErrorMsg(n, o, s, a));
    }
    e.logAndReport = r;
  })(Or);
  let no = L, oo = Or;
  const Z = "[ Federation Runtime ]", Et = (0, no.createLogger)(Z);
  function so(e, t, r, n, o) {
    e || (r !== void 0 ? yt(t, r, n, void 0, o) : yt(t));
  }
  function yt(e, t, r, n, o) {
    if (t !== void 0) return (0, oo.logAndReport)(e, t, r ?? {}, (i) => {
      throw new Error(`${Z}: ${i}`);
    }, n, o);
    const s = e;
    throw s instanceof Error ? (s.message.startsWith(Z) || (s.message = `${Z}: ${s.message}`), s) : new Error(`${Z}: ${s}`);
  }
  function io(e) {
    e instanceof Error && (e.message.startsWith(Z) || (e.message = `${Z}: ${e.message}`)), Et.warn(e);
  }
  I.assert = so;
  I.error = yt;
  I.logger = Et;
  I.warn = io;
  var R = {};
  const ao = I;
  let Ct = L;
  function lo(e, t) {
    return e.findIndex((r) => r === t) === -1 && e.push(t), e;
  }
  function co(e) {
    return "version" in e && e.version ? `${e.name}:${e.version}` : "entry" in e && e.entry ? `${e.name}:${e.entry}` : `${e.name}`;
  }
  function uo(e) {
    return typeof e.entry < "u";
  }
  function fo(e) {
    return !e.entry.includes(".json");
  }
  async function ho(e, t) {
    try {
      return await e();
    } catch (r) {
      !t && ao.warn(r);
      return;
    }
  }
  function mo(e) {
    return e && typeof e == "object";
  }
  const Ar = Object.prototype.toString;
  function _o(e) {
    return Ar.call(e) === "[object Object]";
  }
  function po(e, t) {
    const r = /^(https?:)?\/\//i;
    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "");
  }
  function go(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  function Eo(e) {
    const t = {
      url: "",
      type: "global",
      globalName: ""
    };
    return Ct.isBrowserEnvValue || (0, Ct.isReactNativeEnv)() || !("ssrRemoteEntry" in e) ? "remoteEntry" in e ? {
      url: e.remoteEntry,
      type: e.remoteEntryType,
      globalName: e.globalName
    } : t : "ssrRemoteEntry" in e ? {
      url: e.ssrRemoteEntry || t.url,
      type: e.ssrRemoteEntryType || t.type,
      globalName: e.globalName
    } : t;
  }
  const yo = (e, t) => {
    let r;
    return e.endsWith("/") ? r = e.slice(0, -1) : r = e, t.startsWith(".") && (t = t.slice(1)), r = r + t, r;
  };
  R.addUniqueItem = lo;
  R.arrayOptions = go;
  R.getFMId = co;
  R.getRemoteEntryInfoFromSnapshot = Eo;
  R.isObject = mo;
  R.isPlainObject = _o;
  R.isPureRemoteEntry = fo;
  R.isRemoteInfoWithEntry = uo;
  R.isStaticResourcesEqual = po;
  R.objectToString = Ar;
  R.processModuleAlias = yo;
  R.safeWrapper = ho;
  var S = {};
  const $r = I, St = R;
  let So = L;
  const M = typeof globalThis == "object" ? globalThis : window, H = (() => {
    try {
      return document.defaultView;
    } catch {
      return M;
    }
  })(), bo = H;
  function Ge(e, t, r) {
    Object.defineProperty(e, t, {
      value: r,
      configurable: false,
      writable: true
    });
  }
  function We(e, t) {
    return Object.hasOwnProperty.call(e, t);
  }
  We(M, "__GLOBAL_LOADING_REMOTE_ENTRY__") || Ge(M, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
  const bt = M.__GLOBAL_LOADING_REMOTE_ENTRY__;
  function kr(e) {
    We(e, "__VMOK__") && !We(e, "__FEDERATION__") && Ge(e, "__FEDERATION__", e.__VMOK__), We(e, "__FEDERATION__") || (Ge(e, "__FEDERATION__", {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    }), Ge(e, "__VMOK__", e.__FEDERATION__)), e.__FEDERATION__.__GLOBAL_PLUGIN__ ??= [], e.__FEDERATION__.__INSTANCES__ ??= [], e.__FEDERATION__.moduleInfo ??= {}, e.__FEDERATION__.__SHARE__ ??= {}, e.__FEDERATION__.__MANIFEST_LOADING__ ??= {}, e.__FEDERATION__.__PRELOADED_MAP__ ??= /* @__PURE__ */ new Map();
  }
  kr(M);
  kr(H);
  function Ro() {
    M.__FEDERATION__.__GLOBAL_PLUGIN__ = [], M.__FEDERATION__.__INSTANCES__ = [], M.__FEDERATION__.moduleInfo = {}, M.__FEDERATION__.__SHARE__ = {}, M.__FEDERATION__.__MANIFEST_LOADING__ = {}, Object.keys(bt).forEach((e) => {
      delete bt[e];
    });
  }
  function To(e) {
    M.__FEDERATION__.__INSTANCES__.push(e);
  }
  function Io() {
    return M.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
  }
  function No(e, t = (0, So.isDebugMode)()) {
    t && (M.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e, M.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "2.4.0");
  }
  function Rt(e, t) {
    if (typeof t == "string") {
      if (e[t]) return {
        value: e[t],
        key: t
      };
      {
        const r = Object.keys(e);
        for (const n of r) {
          const [o, s] = n.split(":"), i = `${o}:${t}`, a = e[i];
          if (a) return {
            value: a,
            key: i
          };
        }
        return {
          value: void 0,
          key: t
        };
      }
    } else $r.error(`getInfoWithoutType: "key" must be a string, got ${typeof t} (${JSON.stringify(t)}).`);
  }
  const Mo = () => H.__FEDERATION__.moduleInfo, wr = (e, t) => {
    const r = Rt(t, St.getFMId(e)).value;
    if (r && !r.version && "version" in e && e.version && (r.version = e.version), r) return r;
    if ("version" in e && e.version) {
      const { version: n, ...o } = e, s = St.getFMId(o), i = Rt(H.__FEDERATION__.moduleInfo, s).value;
      if ((i == null ? void 0 : i.version) === n) return i;
    }
  }, Po = (e) => wr(e, H.__FEDERATION__.moduleInfo), vo = (e, t) => {
    const r = St.getFMId(e);
    return H.__FEDERATION__.moduleInfo[r] = t, H.__FEDERATION__.moduleInfo;
  }, Oo = (e) => (H.__FEDERATION__.moduleInfo = {
    ...H.__FEDERATION__.moduleInfo,
    ...e
  }, () => {
    const t = Object.keys(e);
    for (const r of t) delete H.__FEDERATION__.moduleInfo[r];
  }), Ao = (e, t) => {
    const r = t || `__FEDERATION_${e}:custom__`;
    return {
      remoteEntryKey: r,
      entryExports: M[r]
    };
  }, $o = (e) => {
    const { __GLOBAL_PLUGIN__: t } = H.__FEDERATION__;
    e.forEach((r) => {
      t.findIndex((n) => n.name === r.name) === -1 ? t.push(r) : $r.warn(`The plugin ${r.name} has been registered.`);
    });
  }, ko = () => H.__FEDERATION__.__GLOBAL_PLUGIN__, wo = (e) => M.__FEDERATION__.__PRELOADED_MAP__.get(e), Fo = (e) => M.__FEDERATION__.__PRELOADED_MAP__.set(e, true);
  S.CurrentGlobal = M;
  S.Global = bo;
  S.addGlobalSnapshot = Oo;
  S.getGlobalFederationConstructor = Io;
  S.getGlobalHostPlugins = ko;
  S.getGlobalSnapshot = Mo;
  S.getGlobalSnapshotInfoByModuleInfo = Po;
  S.getInfoWithoutType = Rt;
  S.getPreloaded = wo;
  S.getRemoteEntryExports = Ao;
  S.getTargetSnapshotInfoByModuleInfo = wr;
  S.globalLoading = bt;
  S.nativeGlobal = H;
  S.registerGlobalPlugins = $o;
  S.resetFederationGlobalInfo = Ro;
  S.setGlobalFederationConstructor = No;
  S.setGlobalFederationInstance = To;
  S.setGlobalSnapshotInfoByModuleInfo = vo;
  S.setPreloaded = Fo;
  var wt = {}, te = {}, G = {};
  const Ut = "[0-9A-Za-z-]+", Ft = `(?:\\+(${Ut}(?:\\.${Ut})*))`, Te = "0|[1-9]\\d*", Be = "[0-9]+", Fr = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", Gt = `(?:${Be}|${Fr})`, Lo = `(?:-?(${Gt}(?:\\.${Gt})*))`, Wt = `(?:${Te}|${Fr})`, Lr = `(?:-(${Wt}(?:\\.${Wt})*))`, tt = `${Te}|x|X|\\*`, ce = `[v=\\s]*(${tt})(?:\\.(${tt})(?:\\.(${tt})(?:${Lr})?${Ft}?)?)?`, Do = `^\\s*(${ce})\\s+-\\s+(${ce})\\s*$`, Ho = `[v=\\s]*${`(${Be})\\.(${Be})\\.(${Be})`}${Lo}?${Ft}?`, Lt = "((?:<|>)?=?)", qo = `(\\s*)${Lt}\\s*(${Ho}|${ce})`, Dr = "(?:~>?)", Co = `(\\s*)${Dr}\\s+`, Hr = "(?:\\^)", Uo = `(\\s*)${Hr}\\s+`, Go = "(<|>)?=?\\s*\\*", Wo = `^${Hr}${ce}$`, Bo = `v?${`(${Te})\\.(${Te})\\.(${Te})`}${Lr}?${Ft}?`, Vo = `^${Dr}${ce}$`, jo = `^${Lt}\\s*${ce}$`, xo = `^${Lt}\\s*(${Bo})$|^$`, Xo = "^\\s*>=\\s*0.0.0\\s*$";
  G.caret = Wo;
  G.caretTrim = Uo;
  G.comparator = xo;
  G.comparatorTrim = qo;
  G.gte0 = Xo;
  G.hyphenRange = Do;
  G.star = Go;
  G.tilde = Vo;
  G.tildeTrim = Co;
  G.xRange = jo;
  const Ko = G;
  function qr(e) {
    return new RegExp(e);
  }
  function Yo(e) {
    return !e || e.toLowerCase() === "x" || e === "*";
  }
  function zo(...e) {
    return (t) => e.reduce((r, n) => n(r), t);
  }
  function Jo(e) {
    return e.match(qr(Ko.comparator));
  }
  function Zo(e, t, r, n) {
    const o = `${e}.${t}.${r}`;
    return n ? `${o}-${n}` : o;
  }
  te.combineVersion = Zo;
  te.extractComparator = Jo;
  te.isXVersion = Yo;
  te.parseRegex = qr;
  te.pipe = zo;
  var V = {};
  const X = G, b = te;
  function Qo(e) {
    return e.replace(b.parseRegex(X.hyphenRange), (t, r, n, o, s, i, a, c, l, u, f, d) => (b.isXVersion(n) ? r = "" : b.isXVersion(o) ? r = `>=${n}.0.0` : b.isXVersion(s) ? r = `>=${n}.${o}.0` : r = `>=${r}`, b.isXVersion(l) ? c = "" : b.isXVersion(u) ? c = `<${Number(l) + 1}.0.0-0` : b.isXVersion(f) ? c = `<${l}.${Number(u) + 1}.0-0` : d ? c = `<=${l}.${u}.${f}-${d}` : c = `<=${c}`, `${r} ${c}`.trim()));
  }
  function es(e) {
    return e.replace(b.parseRegex(X.comparatorTrim), "$1$2$3");
  }
  function ts(e) {
    return e.replace(b.parseRegex(X.tildeTrim), "$1~");
  }
  function rs(e) {
    return e.replace(b.parseRegex(X.caretTrim), "$1^");
  }
  function ns(e) {
    return e.trim().split(/\s+/).map((t) => t.replace(b.parseRegex(X.caret), (r, n, o, s, i) => b.isXVersion(n) ? "" : b.isXVersion(o) ? `>=${n}.0.0 <${Number(n) + 1}.0.0-0` : b.isXVersion(s) ? n === "0" ? `>=${n}.${o}.0 <${n}.${Number(o) + 1}.0-0` : `>=${n}.${o}.0 <${Number(n) + 1}.0.0-0` : i ? n === "0" ? o === "0" ? `>=${n}.${o}.${s}-${i} <${n}.${o}.${Number(s) + 1}-0` : `>=${n}.${o}.${s}-${i} <${n}.${Number(o) + 1}.0-0` : `>=${n}.${o}.${s}-${i} <${Number(n) + 1}.0.0-0` : n === "0" ? o === "0" ? `>=${n}.${o}.${s} <${n}.${o}.${Number(s) + 1}-0` : `>=${n}.${o}.${s} <${n}.${Number(o) + 1}.0-0` : `>=${n}.${o}.${s} <${Number(n) + 1}.0.0-0`)).join(" ");
  }
  function os(e) {
    return e.trim().split(/\s+/).map((t) => t.replace(b.parseRegex(X.tilde), (r, n, o, s, i) => b.isXVersion(n) ? "" : b.isXVersion(o) ? `>=${n}.0.0 <${Number(n) + 1}.0.0-0` : b.isXVersion(s) ? `>=${n}.${o}.0 <${n}.${Number(o) + 1}.0-0` : i ? `>=${n}.${o}.${s}-${i} <${n}.${Number(o) + 1}.0-0` : `>=${n}.${o}.${s} <${n}.${Number(o) + 1}.0-0`)).join(" ");
  }
  function ss(e) {
    return e.split(/\s+/).map((t) => t.trim().replace(b.parseRegex(X.xRange), (r, n, o, s, i, a) => {
      const c = b.isXVersion(o), l = c || b.isXVersion(s), u = l || b.isXVersion(i);
      return n === "=" && u && (n = ""), a = "", c ? n === ">" || n === "<" ? "<0.0.0-0" : "*" : n && u ? (l && (s = 0), i = 0, n === ">" ? (n = ">=", l ? (o = Number(o) + 1, s = 0, i = 0) : (s = Number(s) + 1, i = 0)) : n === "<=" && (n = "<", l ? o = Number(o) + 1 : s = Number(s) + 1), n === "<" && (a = "-0"), `${n + o}.${s}.${i}${a}`) : l ? `>=${o}.0.0${a} <${Number(o) + 1}.0.0-0` : u ? `>=${o}.${s}.0${a} <${o}.${Number(s) + 1}.0-0` : r;
    })).join(" ");
  }
  function is(e) {
    return e.trim().replace(b.parseRegex(X.star), "");
  }
  function as(e) {
    return e.trim().replace(b.parseRegex(X.gte0), "");
  }
  V.parseCaretTrim = rs;
  V.parseCarets = ns;
  V.parseComparatorTrim = es;
  V.parseGTE0 = as;
  V.parseHyphen = Qo;
  V.parseStar = is;
  V.parseTildeTrim = ts;
  V.parseTildes = os;
  V.parseXRanges = ss;
  var Cr = {};
  function Ve(e, t) {
    return e = Number(e) || e, t = Number(t) || t, e > t ? 1 : e === t ? 0 : -1;
  }
  function ls(e, t) {
    const { preRelease: r } = e, { preRelease: n } = t;
    if (r === void 0 && n) return 1;
    if (r && n === void 0) return -1;
    if (r === void 0 && n === void 0) return 0;
    for (let o = 0, s = r.length; o <= s; o++) {
      const i = r[o], a = n[o];
      if (i !== a) return i === void 0 && a === void 0 ? 0 : i ? a ? Ve(i, a) : -1 : 1;
    }
    return 0;
  }
  function we(e, t) {
    return Ve(e.major, t.major) || Ve(e.minor, t.minor) || Ve(e.patch, t.patch) || ls(e, t);
  }
  function rt(e, t) {
    return e.version === t.version;
  }
  function cs(e, t) {
    switch (e.operator) {
      case "":
      case "=":
        return rt(e, t);
      case ">":
        return we(e, t) < 0;
      case ">=":
        return rt(e, t) || we(e, t) < 0;
      case "<":
        return we(e, t) > 0;
      case "<=":
        return rt(e, t) || we(e, t) > 0;
      case void 0:
        return true;
      default:
        return false;
    }
  }
  Cr.compare = cs;
  const ie = te, x = V, us = Cr;
  function fs(e) {
    return ie.pipe(x.parseCarets, x.parseTildes, x.parseXRanges, x.parseStar)(e);
  }
  function ds(e) {
    return ie.pipe(x.parseHyphen, x.parseComparatorTrim, x.parseTildeTrim, x.parseCaretTrim)(e.trim()).split(/\s+/).join(" ");
  }
  function hs(e, t) {
    if (!e) return false;
    const r = ie.extractComparator(e);
    if (!r) return false;
    const [, n, , o, s, i, a] = r, c = {
      operator: n,
      version: ie.combineVersion(o, s, i, a),
      major: o,
      minor: s,
      patch: i,
      preRelease: a == null ? void 0 : a.split(".")
    }, l = t.split("||");
    for (const u of l) {
      const f = u.trim();
      if (!f || f === "*" || f === "x") return true;
      try {
        const d = ds(f);
        if (!d.trim()) return true;
        const h = d.split(" ").map((E) => fs(E)).join(" ");
        if (!h.trim()) return true;
        const _ = h.split(/\s+/).map((E) => x.parseGTE0(E)).filter(Boolean);
        if (_.length === 0) continue;
        let m = true;
        for (const E of _) {
          const g = ie.extractComparator(E);
          if (!g) {
            m = false;
            break;
          }
          const [, p, , $, w, v, T] = g;
          if (!us.compare({
            operator: p,
            version: ie.combineVersion($, w, v, T),
            major: $,
            minor: w,
            patch: v,
            preRelease: T == null ? void 0 : T.split(".")
          }, c)) {
            m = false;
            break;
          }
        }
        if (m) return true;
      } catch (d) {
        console.error(`[semver] Error processing range part "${f}":`, d);
        continue;
      }
    }
    return false;
  }
  wt.satisfy = hs;
  var q = {}, re = {};
  const ms = "default", _s = "global";
  re.DEFAULT_REMOTE_TYPE = _s;
  re.DEFAULT_SCOPE = ms;
  const xe = I, Ur = R, Gr = S, ps = re, ye = wt;
  let Tt = L;
  function gs(e, t, r, n) {
    var _a2, _b;
    let o;
    return "get" in e ? o = e.get : "lib" in e ? o = () => Promise.resolve(e.lib) : o = () => Promise.resolve(() => {
      xe.error(`Cannot get shared "${r}" from "${t}": neither "get" nor "lib" is provided in the share config.`);
    }), ((_a2 = e.shareConfig) == null ? void 0 : _a2.eager) && ((_b = e.treeShaking) == null ? void 0 : _b.mode) && xe.error(`Invalid shared config for "${r}" from "${t}": cannot use both "eager: true" and "treeShaking.mode" simultaneously. Choose one strategy.`), {
      deps: [],
      useIn: [],
      from: t,
      loading: null,
      ...e,
      shareConfig: {
        requiredVersion: `^${e.version}`,
        singleton: false,
        eager: false,
        strictVersion: false,
        ...e.shareConfig
      },
      get: o,
      loaded: (e == null ? void 0 : e.loaded) || "lib" in e ? true : void 0,
      version: e.version ?? "0",
      scope: Array.isArray(e.scope) ? e.scope : [
        e.scope ?? "default"
      ],
      strategy: (e.strategy ?? n) || "version-first",
      treeShaking: e.treeShaking ? {
        ...e.treeShaking,
        mode: e.treeShaking.mode ?? "server-calc",
        status: e.treeShaking.status ?? Tt.TreeShakingStatus.UNKNOWN,
        useIn: []
      } : void 0
    };
  }
  function Es(e, t) {
    const r = t.shared || {}, n = t.name, o = Object.keys(r).reduce((i, a) => {
      const c = Ur.arrayOptions(r[a]);
      return i[a] = i[a] || [], c.forEach((l) => {
        i[a].push(gs(l, n, a, t.shareStrategy));
      }), i;
    }, {}), s = {
      ...e.shared
    };
    return Object.keys(o).forEach((i) => {
      s[i] ? o[i].forEach((a) => {
        s[i].find((c) => c.version === a.version) || s[i].push(a);
      }) : s[i] = o[i];
    }), {
      allShareInfos: s,
      newShareInfos: o
    };
  }
  function Ie(e, t) {
    if (!e) return false;
    const { status: r, mode: n } = e;
    return r === Tt.TreeShakingStatus.NO_USE ? false : r === Tt.TreeShakingStatus.CALCULATED ? true : n === "runtime-infer" ? t ? Ss(e, t) : true : false;
  }
  function Q(e, t) {
    const r = (n) => {
      if (!Number.isNaN(Number(n))) {
        const o = n.split(".");
        let s = n;
        for (let i = 0; i < 3 - o.length; i++) s += ".0";
        return s;
      }
      return n;
    };
    return !!ye.satisfy(r(e), `<=${r(t)}`);
  }
  const Ne = (e, t) => {
    const r = t || function(n, o) {
      return Q(n, o);
    };
    return Object.keys(e).reduce((n, o) => !n || r(n, o) || n === "0" ? o : n, 0);
  }, Xe = (e) => !!e.loaded || typeof e.lib == "function", ys = (e) => !!e.loading, Ss = (e, t) => {
    if (!e || !t) return false;
    const { usedExports: r } = e;
    return r ? !!t.every((n) => r.includes(n)) : false;
  };
  function bs(e, t, r, n) {
    const o = e[t][r];
    let s = "", i = Ie(n);
    const a = function(c, l) {
      return i ? o[c].treeShaking ? o[l].treeShaking ? !Xe(o[c].treeShaking) && Q(c, l) : false : true : !Xe(o[c]) && Q(c, l);
    };
    if (i) {
      if (s = Ne(e[t][r], a), s) return {
        version: s,
        useTreesShaking: i
      };
      i = false;
    }
    return {
      version: Ne(e[t][r], a),
      useTreesShaking: i
    };
  }
  const ne = (e) => Xe(e) || ys(e);
  function Rs(e, t, r, n) {
    const o = e[t][r];
    let s = "", i = Ie(n);
    const a = function(c, l) {
      if (i) {
        if (!o[c].treeShaking) return true;
        if (!o[l].treeShaking) return false;
        if (ne(o[l].treeShaking)) return ne(o[c].treeShaking) ? !!Q(c, l) : true;
        if (ne(o[c].treeShaking)) return false;
      }
      return ne(o[l]) ? ne(o[c]) ? !!Q(c, l) : true : ne(o[c]) ? false : Q(c, l);
    };
    if (i) {
      if (s = Ne(e[t][r], a), s) return {
        version: s,
        useTreesShaking: i
      };
      i = false;
    }
    return {
      version: Ne(e[t][r], a),
      useTreesShaking: i
    };
  }
  function Ts(e) {
    return e === "loaded-first" ? Rs : bs;
  }
  function Is(e, t, r, n) {
    if (!e) return;
    const { shareConfig: o, scope: s = ps.DEFAULT_SCOPE, strategy: i, treeShaking: a } = r, c = Array.isArray(s) ? s : [
      s
    ];
    for (const l of c) if (o && e[l] && e[l][t]) {
      const { requiredVersion: u } = o, { version: f, useTreesShaking: d } = Ts(i)(e, l, t, a), h = () => {
        const m = e[l][t][f];
        if (o.singleton) {
          if (typeof u == "string" && !ye.satisfy(f, u)) {
            const E = `Version ${f} from ${f && m.from} of shared singleton module ${t} does not satisfy the requirement of ${r.from} which needs ${u})`;
            o.strictVersion ? xe.error(E) : xe.warn(E);
          }
          return {
            shared: m,
            useTreesShaking: d
          };
        } else {
          if (u === false || u === "*") return {
            shared: m,
            useTreesShaking: d
          };
          if (ye.satisfy(f, u)) return {
            shared: m,
            useTreesShaking: d
          };
          const E = Ie(a);
          if (E) {
            for (const [g, p] of Object.entries(e[l][t])) if (Ie(p.treeShaking, a == null ? void 0 : a.usedExports) && ye.satisfy(g, u)) return {
              shared: p,
              useTreesShaking: E
            };
          }
          for (const [g, p] of Object.entries(e[l][t])) if (ye.satisfy(g, u)) return {
            shared: p,
            useTreesShaking: false
          };
        }
      }, _ = {
        shareScopeMap: e,
        scope: l,
        pkgName: t,
        version: f,
        GlobalFederation: Gr.Global.__FEDERATION__,
        shareInfo: r,
        resolver: h
      };
      return (n.emit(_) || _).resolver();
    }
  }
  function Ns() {
    return Gr.Global.__FEDERATION__.__SHARE__;
  }
  function Ms(e) {
    const { pkgName: t, extraOptions: r, shareInfos: n } = e, o = (c) => {
      if (!c) return;
      const l = {};
      return c.forEach((f) => {
        l[f.version] = f;
      }), l[Ne(l, function(f, d) {
        return !Xe(l[f]) && Q(f, d);
      })];
    }, s = (r == null ? void 0 : r.resolver) ?? o, i = (c) => c !== null && typeof c == "object" && !Array.isArray(c), a = (...c) => {
      const l = {};
      for (const u of c) if (u) for (const [f, d] of Object.entries(u)) {
        const h = l[f];
        i(h) && i(d) ? l[f] = a(h, d) : d !== void 0 && (l[f] = d);
      }
      return l;
    };
    return a(s(n[t]), r == null ? void 0 : r.customShareInfo);
  }
  const Ps = (e, t) => {
    e.useIn || (e.useIn = []), Ur.addUniqueItem(e.useIn, t);
  };
  function vs(e, t) {
    return t && e.treeShaking ? e.treeShaking : e;
  }
  q.addUseIn = Ps;
  q.directShare = vs;
  q.formatShareConfigs = Es;
  q.getGlobalShareScope = Ns;
  q.getRegisteredShare = Is;
  q.getTargetSharedOptions = Ms;
  q.shouldUseTreeShaking = Ie;
  var he = {};
  function Os(e, t) {
    for (const r of e) {
      const n = t.startsWith(r.name);
      let o = t.replace(r.name, "");
      if (n) {
        if (o.startsWith("/")) {
          const a = r.name;
          return o = `.${o}`, {
            pkgNameOrAlias: a,
            expose: o,
            remote: r
          };
        } else if (o === "") return {
          pkgNameOrAlias: r.name,
          expose: ".",
          remote: r
        };
      }
      const s = r.alias && t.startsWith(r.alias);
      let i = r.alias && t.replace(r.alias, "");
      if (r.alias && s) {
        if (i && i.startsWith("/")) {
          const a = r.alias;
          return i = `.${i}`, {
            pkgNameOrAlias: a,
            expose: i,
            remote: r
          };
        } else if (i === "") return {
          pkgNameOrAlias: r.alias,
          expose: ".",
          remote: r
        };
      }
    }
  }
  function As(e, t) {
    for (const r of e) if (t === r.name || r.alias && t === r.alias) return r;
  }
  he.matchRemote = As;
  he.matchRemoteWithNameAndExpose = Os;
  var j = {}, K = {}, A = {};
  const $s = "RUNTIME-001", ks = "RUNTIME-002", ws = "RUNTIME-003", Fs = "RUNTIME-004", Ls = "RUNTIME-005", Ds = "RUNTIME-006", Hs = "RUNTIME-007", qs = "RUNTIME-008", Cs = "RUNTIME-009", Us = "RUNTIME-010", Gs = "RUNTIME-011", Ws = "RUNTIME-012", Bs = "TYPE-001", Vs = "BUILD-001", js = "BUILD-002";
  A.BUILD_001 = Vs;
  A.BUILD_002 = js;
  A.RUNTIME_001 = $s;
  A.RUNTIME_002 = ks;
  A.RUNTIME_003 = ws;
  A.RUNTIME_004 = Fs;
  A.RUNTIME_005 = Ls;
  A.RUNTIME_006 = Ds;
  A.RUNTIME_007 = Hs;
  A.RUNTIME_008 = qs;
  A.RUNTIME_009 = Cs;
  A.RUNTIME_010 = Us;
  A.RUNTIME_011 = Gs;
  A.RUNTIME_012 = Ws;
  A.TYPE_001 = Bs;
  var ve = {};
  const k = A, Wr = {
    [k.RUNTIME_001]: "Failed to get remoteEntry exports.",
    [k.RUNTIME_002]: 'The remote entry interface does not contain "init"',
    [k.RUNTIME_003]: "Failed to get manifest.",
    [k.RUNTIME_004]: "Failed to locate remote.",
    [k.RUNTIME_005]: "Invalid loadShareSync function call from bundler runtime",
    [k.RUNTIME_006]: "Invalid loadShareSync function call from runtime",
    [k.RUNTIME_007]: "Failed to get remote snapshot.",
    [k.RUNTIME_008]: "Failed to load script resources.",
    [k.RUNTIME_009]: "Please call createInstance first.",
    [k.RUNTIME_010]: 'The name option cannot be changed after initialization. If you want to create a new instance with a different name, please use "createInstance" api.',
    [k.RUNTIME_011]: "The remoteEntry URL is missing from the remote snapshot.",
    [k.RUNTIME_012]: 'The getter for the shared module is not a function. This may be caused by setting "shared.import: false" without the host providing the corresponding lib.'
  }, Br = {
    [k.TYPE_001]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
  }, Vr = {
    [k.BUILD_001]: "Failed to find expose module.",
    [k.BUILD_002]: "PublicPath is required in prod mode."
  }, xs = {
    ...Wr,
    ...Br,
    ...Vr
  };
  ve.buildDescMap = Vr;
  ve.errorDescMap = xs;
  ve.runtimeDescMap = Wr;
  ve.typeDescMap = Br;
  (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    const t = A, r = kt, n = ve;
    e.BUILD_001 = t.BUILD_001, e.BUILD_002 = t.BUILD_002, e.RUNTIME_001 = t.RUNTIME_001, e.RUNTIME_002 = t.RUNTIME_002, e.RUNTIME_003 = t.RUNTIME_003, e.RUNTIME_004 = t.RUNTIME_004, e.RUNTIME_005 = t.RUNTIME_005, e.RUNTIME_006 = t.RUNTIME_006, e.RUNTIME_007 = t.RUNTIME_007, e.RUNTIME_008 = t.RUNTIME_008, e.RUNTIME_009 = t.RUNTIME_009, e.RUNTIME_010 = t.RUNTIME_010, e.RUNTIME_011 = t.RUNTIME_011, e.RUNTIME_012 = t.RUNTIME_012, e.TYPE_001 = t.TYPE_001, e.buildDescMap = n.buildDescMap, e.errorDescMap = n.errorDescMap, e.getShortErrorMsg = r.getShortErrorMsg, e.runtimeDescMap = n.runtimeDescMap, e.typeDescMap = n.typeDescMap;
  })(K);
  const Ye = I, ae = S, Bt = re;
  let jr = L, Me = K;
  const xr = ".then(callbacks[0]).catch(callbacks[1])";
  async function Xs({ entry: e, remoteEntryExports: t }) {
    return new Promise((r, n) => {
      try {
        t ? r(t) : typeof FEDERATION_ALLOW_NEW_FUNCTION < "u" ? new Function("callbacks", `import("${e}")${xr}`)([
          r,
          n
        ]) : import(e).then(async (m) => {
          await m.__tla;
          return m;
        }).then(r).catch(n);
      } catch (o) {
        Ye.error(`Failed to load ESM entry from "${e}". ${o instanceof Error ? o.message : String(o)}`);
      }
    });
  }
  async function Ks({ entry: e, remoteEntryExports: t }) {
    return new Promise((r, n) => {
      try {
        t ? r(t) : typeof __system_context__ > "u" ? System.import(e).then(r).catch(n) : new Function("callbacks", `System.import("${e}")${xr}`)([
          r,
          n
        ]);
      } catch (o) {
        Ye.error(`Failed to load SystemJS entry from "${e}". ${o instanceof Error ? o.message : String(o)}`);
      }
    });
  }
  function Ys(e, t, r) {
    const { remoteEntryKey: n, entryExports: o } = ae.getRemoteEntryExports(e, t);
    return o || Ye.error(Me.RUNTIME_001, Me.runtimeDescMap, {
      remoteName: e,
      remoteEntryUrl: r,
      remoteEntryKey: n
    }), o;
  }
  async function zs({ name: e, globalName: t, entry: r, remoteInfo: n, loaderHook: o, getEntryUrl: s }) {
    const { entryExports: i } = ae.getRemoteEntryExports(e, t);
    if (i) return i;
    const a = s ? s(r) : r;
    return (0, jr.loadScript)(a, {
      attrs: {},
      createScriptHook: (c, l) => {
        const u = o.lifecycle.createScript.emit({
          url: c,
          attrs: l,
          remoteInfo: n
        });
        if (u && (u instanceof HTMLScriptElement || "script" in u || "timeout" in u)) return u;
      }
    }).then(() => Ys(e, t, r), (c) => {
      const l = c instanceof Error ? c.message : String(c);
      Ye.error(Me.RUNTIME_008, Me.runtimeDescMap, {
        remoteName: e,
        resourceUrl: a
      }, l);
    });
  }
  async function Js({ remoteInfo: e, remoteEntryExports: t, loaderHook: r, getEntryUrl: n }) {
    const { entry: o, entryGlobalName: s, name: i, type: a } = e;
    switch (a) {
      case "esm":
      case "module":
        return Xs({
          entry: o,
          remoteEntryExports: t
        });
      case "system":
        return Ks({
          entry: o,
          remoteEntryExports: t
        });
      default:
        return zs({
          entry: o,
          globalName: s,
          name: i,
          remoteInfo: e,
          loaderHook: r,
          getEntryUrl: n
        });
    }
  }
  function It(e) {
    const { entry: t, name: r } = e;
    return (0, jr.composeKeyWithSeparator)(r, t);
  }
  async function Xr(e) {
    const { origin: t, remoteEntryExports: r, remoteInfo: n, getEntryUrl: o, _inErrorHandling: s = false } = e, i = It(n);
    if (r) return r;
    if (!ae.globalLoading[i]) {
      const a = t.remoteHandler.hooks.lifecycle.loadEntry, c = t.loaderHook;
      ae.globalLoading[i] = a.emit({
        loaderHook: c,
        remoteInfo: n,
        remoteEntryExports: r
      }).then((l) => l || Js({
        remoteInfo: n,
        remoteEntryExports: r,
        loaderHook: c,
        getEntryUrl: o
      })).catch(async (l) => {
        const u = It(n), f = l instanceof Error && l.message.includes("ScriptExecutionError");
        if (l instanceof Error && l.message.includes(Me.RUNTIME_008) && !f && !s) {
          const d = (_) => Xr({
            ..._,
            _inErrorHandling: true
          }), h = await t.loaderHook.lifecycle.loadEntryError.emit({
            getRemoteEntry: d,
            origin: t,
            remoteInfo: n,
            remoteEntryExports: r,
            globalLoading: ae.globalLoading,
            uniqueKey: u
          });
          if (h) return h;
        }
        throw l;
      });
    }
    return ae.globalLoading[i];
  }
  function Zs(e) {
    return {
      ...e,
      entry: "entry" in e ? e.entry : "",
      type: e.type || Bt.DEFAULT_REMOTE_TYPE,
      entryGlobalName: e.entryGlobalName || e.name,
      shareScope: e.shareScope || Bt.DEFAULT_SCOPE
    };
  }
  j.getRemoteEntry = Xr;
  j.getRemoteEntryUniqueKey = It;
  j.getRemoteInfo = Zs;
  var Kr = {};
  function Qs() {
    return typeof FEDERATION_BUILD_IDENTIFIER < "u" ? FEDERATION_BUILD_IDENTIFIER : "";
  }
  Kr.getBuilderId = Qs;
  var Yr = {};
  const ei = S;
  function ti(e, t) {
    const r = ei.getGlobalHostPlugins(), n = [
      t.hooks,
      t.remoteHandler.hooks,
      t.sharedHandler.hooks,
      t.snapshotHandler.hooks,
      t.loaderHook,
      t.bridgeHook
    ];
    return r.length > 0 && r.forEach((o) => {
      (e == null ? void 0 : e.find((s) => s.name !== o.name)) && e.push(o);
    }), e && e.length > 0 && e.forEach((o) => {
      n.forEach((s) => {
        s.applyPlugin(o, t);
      });
    }), e;
  }
  Yr.registerPlugins = ti;
  var Oe = {};
  function ri(e) {
    return {
      name: e.name,
      alias: e.alias,
      entry: "entry" in e ? e.entry : void 0,
      version: "version" in e ? e.version : void 0,
      type: e.type,
      entryGlobalName: e.entryGlobalName,
      shareScope: e.shareScope
    };
  }
  function ni(e) {
    var _a2, _b, _c, _d, _e2, _f;
    const t = {};
    for (const [r, n] of Object.entries(e.shared)) {
      const o = n[0];
      o && (t[r] = {
        version: o.version,
        singleton: (_a2 = o.shareConfig) == null ? void 0 : _a2.singleton,
        requiredVersion: ((_b = o.shareConfig) == null ? void 0 : _b.requiredVersion) === false ? false : (_c = o.shareConfig) == null ? void 0 : _c.requiredVersion,
        eager: o.eager,
        strictVersion: (_d = o.shareConfig) == null ? void 0 : _d.strictVersion
      });
    }
    return {
      project: {
        name: e.name,
        mfRole: ((_e2 = e.remotes) == null ? void 0 : _e2.length) > 0 ? "host" : "unknown"
      },
      mfConfig: {
        name: e.name,
        remotes: ((_f = e.remotes) == null ? void 0 : _f.map(ri)) ?? [],
        shared: t
      }
    };
  }
  Oe.optionsToMFContext = ni;
  var zr = {}, J = {};
  const oi = I, si = he, Vt = j;
  let Se = L;
  function Jr(e) {
    return {
      resourceCategory: "sync",
      share: true,
      depsRemote: true,
      ...e
    };
  }
  function ii(e, t) {
    return t.map((r) => {
      const n = si.matchRemote(e, r.nameOrAlias);
      return oi.assert(n, `Unable to preload ${r.nameOrAlias} as it is not included in ${!n && (0, Se.safeToString)({
        remoteInfo: n,
        remotes: e
      })}`), {
        remote: n,
        preloadConfig: Jr(r)
      };
    });
  }
  function ai(e) {
    return e ? e.map((t) => t === "." ? t : t.startsWith("./") ? t.replace("./", "") : t) : [];
  }
  function li(e, t, r, n = true) {
    const { cssAssets: o, jsAssetsWithoutEntry: s, entryAssets: i } = r;
    if (t.options.inBrowser) {
      if (i.forEach((a) => {
        const { moduleInfo: c } = a, l = t.moduleCache.get(e.name);
        l ? Vt.getRemoteEntry({
          origin: t,
          remoteInfo: c,
          remoteEntryExports: l.remoteEntryExports
        }) : Vt.getRemoteEntry({
          origin: t,
          remoteInfo: c,
          remoteEntryExports: void 0
        });
      }), n) {
        const a = {
          rel: "preload",
          as: "style"
        };
        o.forEach((c) => {
          const { link: l, needAttach: u } = (0, Se.createLink)({
            url: c,
            cb: () => {
            },
            attrs: a,
            createLinkHook: (f, d) => {
              const h = t.loaderHook.lifecycle.createLink.emit({
                url: f,
                attrs: d,
                remoteInfo: e
              });
              if (h instanceof HTMLLinkElement) return h;
            }
          });
          u && document.head.appendChild(l);
        });
      } else {
        const a = {
          rel: "stylesheet",
          type: "text/css"
        };
        o.forEach((c) => {
          const { link: l, needAttach: u } = (0, Se.createLink)({
            url: c,
            cb: () => {
            },
            attrs: a,
            createLinkHook: (f, d) => {
              const h = t.loaderHook.lifecycle.createLink.emit({
                url: f,
                attrs: d,
                remoteInfo: e
              });
              if (h instanceof HTMLLinkElement) return h;
            },
            needDeleteLink: false
          });
          u && document.head.appendChild(l);
        });
      }
      if (n) {
        const a = {
          rel: "preload",
          as: "script"
        };
        s.forEach((c) => {
          const { link: l, needAttach: u } = (0, Se.createLink)({
            url: c,
            cb: () => {
            },
            attrs: a,
            createLinkHook: (f, d) => {
              const h = t.loaderHook.lifecycle.createLink.emit({
                url: f,
                attrs: d,
                remoteInfo: e
              });
              if (h instanceof HTMLLinkElement) return h;
            }
          });
          u && document.head.appendChild(l);
        });
      } else {
        const a = {
          fetchpriority: "high",
          type: (e == null ? void 0 : e.type) === "module" ? "module" : "text/javascript"
        };
        s.forEach((c) => {
          const { script: l, needAttach: u } = (0, Se.createScript)({
            url: c,
            cb: () => {
            },
            attrs: a,
            createScriptHook: (f, d) => {
              const h = t.loaderHook.lifecycle.createScript.emit({
                url: f,
                attrs: d,
                remoteInfo: e
              });
              if (h instanceof HTMLScriptElement) return h;
            },
            needDeleteScript: true
          });
          u && document.head.appendChild(l);
        });
      }
    }
  }
  J.defaultPreloadArgs = Jr;
  J.formatPreloadArgs = ii;
  J.normalizePreloadExposes = ai;
  J.preloadAssets = li;
  const O = S, jt = q, ci = he, ui = j, fi = J, di = {
    getRegisteredShare: jt.getRegisteredShare,
    getGlobalShareScope: jt.getGlobalShareScope
  }, hi = {
    Global: O.Global,
    nativeGlobal: O.nativeGlobal,
    resetFederationGlobalInfo: O.resetFederationGlobalInfo,
    setGlobalFederationInstance: O.setGlobalFederationInstance,
    getGlobalFederationConstructor: O.getGlobalFederationConstructor,
    setGlobalFederationConstructor: O.setGlobalFederationConstructor,
    getInfoWithoutType: O.getInfoWithoutType,
    getGlobalSnapshot: O.getGlobalSnapshot,
    getTargetSnapshotInfoByModuleInfo: O.getTargetSnapshotInfoByModuleInfo,
    getGlobalSnapshotInfoByModuleInfo: O.getGlobalSnapshotInfoByModuleInfo,
    setGlobalSnapshotInfoByModuleInfo: O.setGlobalSnapshotInfoByModuleInfo,
    addGlobalSnapshot: O.addGlobalSnapshot,
    getRemoteEntryExports: O.getRemoteEntryExports,
    registerGlobalPlugins: O.registerGlobalPlugins,
    getGlobalHostPlugins: O.getGlobalHostPlugins,
    getPreloaded: O.getPreloaded,
    setPreloaded: O.setPreloaded
  };
  var mi = {
    global: hi,
    share: di,
    utils: {
      matchRemoteWithNameAndExpose: ci.matchRemoteWithNameAndExpose,
      preloadAssets: fi.preloadAssets,
      getRemoteInfo: ui.getRemoteInfo
    }
  };
  zr.default = mi;
  var ze = {};
  const nt = I, xt = R, _i = j, pi = Oe;
  let gi = L, Xt = K;
  function Ei(e, t, r) {
    const n = t, o = Array.isArray(e.shareScope) ? e.shareScope : [
      e.shareScope
    ];
    o.length || o.push("default"), o.forEach((i) => {
      n[i] || (n[i] = {});
    });
    const s = {
      version: e.version || "",
      shareScopeKeys: Array.isArray(e.shareScope) ? o : e.shareScope || "default"
    };
    return Object.defineProperty(s, "shareScopeMap", {
      value: n,
      enumerable: false
    }), {
      remoteEntryInitOptions: s,
      shareScope: n[o[0]],
      initScope: r ?? []
    };
  }
  var yi = class {
    constructor({ remoteInfo: e, host: t }) {
      this.inited = false, this.initing = false, this.lib = void 0, this.remoteInfo = e, this.host = t;
    }
    async getEntry() {
      if (this.remoteEntryExports) return this.remoteEntryExports;
      const e = await _i.getRemoteEntry({
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports
      });
      return nt.assert(e, `remoteEntryExports is undefined 
 ${(0, gi.safeToString)(this.remoteInfo)}`), this.remoteEntryExports = e, this.remoteEntryExports;
    }
    async init(e, t, r) {
      const n = await this.getEntry();
      if (this.inited) return n;
      if (this.initPromise) return await this.initPromise, n;
      this.initing = true, this.initPromise = (async () => {
        const { remoteEntryInitOptions: o, shareScope: s, initScope: i } = Ei(this.remoteInfo, this.host.shareScopeMap, r), a = await this.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope: s,
          remoteEntryInitOptions: o,
          initScope: i,
          remoteInfo: this.remoteInfo,
          origin: this.host
        });
        typeof (n == null ? void 0 : n.init) > "u" && nt.error(Xt.RUNTIME_002, Xt.runtimeDescMap, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          remoteEntryKey: this.remoteInfo.entryGlobalName
        }, void 0, pi.optionsToMFContext(this.host.options)), await n.init(a.shareScope, a.initScope, a.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit({
          ...a,
          id: e,
          remoteSnapshot: t,
          remoteEntryExports: n
        }), this.inited = true;
      })();
      try {
        await this.initPromise;
      } finally {
        this.initing = false, this.initPromise = void 0;
      }
      return n;
    }
    async get(e, t, r, n) {
      const { loadFactory: o = true } = r || {
        loadFactory: true
      }, s = await this.init(e, n);
      this.lib = s;
      let i;
      i = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
        remoteEntryExports: s,
        expose: t,
        moduleInfo: this.remoteInfo
      }), i || (i = await s.get(t)), nt.assert(i, `${xt.getFMId(this.remoteInfo)} remote don't export ${t}.`);
      const a = xt.processModuleAlias(this.remoteInfo.name, t), c = this.wraperFactory(i, a);
      return o ? await c() : c;
    }
    wraperFactory(e, t) {
      function r(n, o) {
        n && typeof n == "object" && Object.isExtensible(n) && !Object.getOwnPropertyDescriptor(n, Symbol.for("mf_module_id")) && Object.defineProperty(n, Symbol.for("mf_module_id"), {
          value: o,
          enumerable: false
        });
      }
      return e instanceof Promise ? async () => {
        const n = await e();
        return r(n, t), n;
      } : () => {
        const n = e();
        return r(n, t), n;
      };
    }
  };
  ze.Module = yi;
  var Zr = {}, me = {}, Si = class {
    constructor(e) {
      this.type = "", this.listeners = /* @__PURE__ */ new Set(), e && (this.type = e);
    }
    on(e) {
      typeof e == "function" && this.listeners.add(e);
    }
    once(e) {
      const t = this;
      this.on(function r(...n) {
        return t.remove(r), e.apply(null, n);
      });
    }
    emit(...e) {
      let t;
      return this.listeners.size > 0 && this.listeners.forEach((r) => {
        t = r(...e);
      }), t;
    }
    remove(e) {
      this.listeners.delete(e);
    }
    removeAll() {
      this.listeners.clear();
    }
  };
  me.SyncHook = Si;
  var Ae = {};
  const bi = me;
  var Ri = class extends bi.SyncHook {
    emit(...e) {
      let t;
      const r = Array.from(this.listeners);
      if (r.length > 0) {
        let n = 0;
        const o = (s) => s === false ? false : n < r.length ? Promise.resolve(r[n++].apply(null, e)).then(o) : s;
        t = o();
      }
      return Promise.resolve(t);
    }
  };
  Ae.AsyncHook = Ri;
  var _e = {};
  const ot = I, Qr = R, Ti = me;
  function en(e, t) {
    if (!Qr.isObject(t)) return false;
    if (e !== t) {
      for (const r in e) if (!(r in t)) return false;
    }
    return true;
  }
  var Ii = class extends Ti.SyncHook {
    constructor(e) {
      super(), this.onerror = ot.error, this.type = e;
    }
    emit(e) {
      Qr.isObject(e) || ot.error(`The data for the "${this.type}" hook should be an object.`);
      for (const t of this.listeners) try {
        const r = t(e);
        if (en(e, r)) e = r;
        else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (r) {
        ot.warn(r), this.onerror(r);
      }
      return e;
    }
  };
  _e.SyncWaterfallHook = Ii;
  _e.checkReturnData = en;
  var $e = {};
  const st = I, Ni = R, Mi = me, Pi = _e;
  var vi = class extends Mi.SyncHook {
    constructor(e) {
      super(), this.onerror = st.error, this.type = e;
    }
    emit(e) {
      Ni.isObject(e) || st.error(`The response data for the "${this.type}" hook must be an object.`);
      const t = Array.from(this.listeners);
      if (t.length > 0) {
        let r = 0;
        const n = (s) => (st.warn(s), this.onerror(s), e), o = (s) => {
          if (Pi.checkReturnData(e, s)) {
            if (e = s, r < t.length) try {
              return Promise.resolve(t[r++](e)).then(o, n);
            } catch (i) {
              return n(i);
            }
          } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
          return e;
        };
        return Promise.resolve(o(e));
      }
      return Promise.resolve(e);
    }
  };
  $e.AsyncWaterfallHook = vi;
  var ke = {};
  const Fe = I, Oi = R;
  var Ai = class {
    constructor(e) {
      this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e);
    }
    applyPlugin(e, t) {
      var _a2;
      Fe.assert(Oi.isPlainObject(e), "Plugin configuration is invalid.");
      const r = e.name;
      Fe.assert(r, "A name must be provided by the plugin."), this.registerPlugins[r] || (this.registerPlugins[r] = e, (_a2 = e.apply) == null ? void 0 : _a2.call(e, t), Object.keys(this.lifecycle).forEach((n) => {
        const o = e[n];
        o && this.lifecycle[n].on(o);
      }));
    }
    removePlugin(e) {
      Fe.assert(e, "A name is required.");
      const t = this.registerPlugins[e];
      Fe.assert(t, `The plugin "${e}" is not registered.`), Object.keys(t).forEach((r) => {
        r !== "name" && this.lifecycle[r].remove(t[r]);
      });
    }
  };
  ke.PluginSystem = Ai;
  var Je = {};
  const $i = I, Nt = R, ki = J;
  let Kt = L, Yt = K;
  function tn(e, t) {
    const r = Nt.getRemoteEntryInfoFromSnapshot(t);
    r.url || $i.error(Yt.RUNTIME_011, Yt.runtimeDescMap, {
      remoteName: e.name
    });
    let n = (0, Kt.getResourceUrl)(t, r.url);
    !Kt.isBrowserEnvValue && !n.startsWith("http") && (n = `https:${n}`), e.type = r.type, e.entryGlobalName = r.globalName, e.entry = n, e.version = t.version, e.buildVersion = t.buildVersion;
  }
  function wi() {
    return {
      name: "snapshot-plugin",
      async afterResolve(e) {
        const { remote: t, pkgNameOrAlias: r, expose: n, origin: o, remoteInfo: s, id: i } = e;
        if (!Nt.isRemoteInfoWithEntry(t) || !Nt.isPureRemoteEntry(t)) {
          const { remoteSnapshot: a, globalSnapshot: c } = await o.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: t,
            id: i
          });
          tn(s, a);
          const l = {
            remote: t,
            preloadConfig: {
              nameOrAlias: r,
              exposes: [
                n
              ],
              resourceCategory: "sync",
              share: false,
              depsRemote: false
            }
          }, u = await o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin: o,
            preloadOptions: l,
            remoteInfo: s,
            remote: t,
            remoteSnapshot: a,
            globalSnapshot: c
          });
          return u && ki.preloadAssets(s, o, u, false), {
            ...e,
            remoteSnapshot: a
          };
        }
        return e;
      }
    };
  }
  Je.assignRemoteInfo = tn;
  Je.snapshotPlugin = wi;
  var rn = {};
  const Pe = R, Mt = S, Fi = q, zt = J, Li = Je;
  let Ke = L;
  function Di(e) {
    const t = e.split(":");
    return t.length === 1 ? {
      name: t[0],
      version: void 0
    } : t.length === 2 ? {
      name: t[0],
      version: t[1]
    } : {
      name: t[1],
      version: t[2]
    };
  }
  function nn(e, t, r, n, o = {}, s) {
    const { value: i } = Mt.getInfoWithoutType(e, Pe.getFMId(t)), a = s || i;
    if (a && !(0, Ke.isManifestProvider)(a) && (r(a, t, n), a.remotesInfo)) {
      const c = Object.keys(a.remotesInfo);
      for (const l of c) {
        if (o[l]) continue;
        o[l] = true;
        const u = Di(l), f = a.remotesInfo[l];
        nn(e, {
          name: u.name,
          version: f.matchedVersion
        }, r, false, o, void 0);
      }
    }
  }
  const it = (e, t) => document.querySelector(`${e}[${e === "link" ? "href" : "src"}="${t}"]`);
  function Hi(e, t, r, n, o) {
    const s = [], i = [], a = [], c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), { options: u } = e, { preloadConfig: f } = t, { depsRemote: d } = f;
    if (nn(n, r, (_, m, E) => {
      var _a2;
      let g;
      if (E) g = f;
      else if (Array.isArray(d)) {
        const T = d.find((F) => F.nameOrAlias === m.name || F.nameOrAlias === m.alias);
        if (!T) return;
        g = zt.defaultPreloadArgs(T);
      } else if (d === true) g = f;
      else return;
      const p = (0, Ke.getResourceUrl)(_, Pe.getRemoteEntryInfoFromSnapshot(_).url);
      p && a.push({
        name: m.name,
        moduleInfo: {
          name: m.name,
          entry: p,
          type: "remoteEntryType" in _ ? _.remoteEntryType : "global",
          entryGlobalName: "globalName" in _ ? _.globalName : m.name,
          shareScope: "",
          version: "version" in _ ? _.version : void 0
        },
        url: p
      });
      let $ = "modules" in _ ? _.modules : [];
      const w = zt.normalizePreloadExposes(g.exposes);
      w.length && "modules" in _ && ($ = (_a2 = _ == null ? void 0 : _.modules) == null ? void 0 : _a2.reduce((T, F) => ((w == null ? void 0 : w.indexOf(F.moduleName)) !== -1 && T.push(F), T), []));
      function v(T) {
        const F = T.map((W) => (0, Ke.getResourceUrl)(_, W));
        return g.filter ? F.filter(g.filter) : F;
      }
      if ($) {
        const T = $.length;
        for (let F = 0; F < T; F++) {
          const W = $[F], et = `${m.name}/${W.moduleName}`;
          e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
            id: W.moduleName === "." ? m.name : et,
            name: m.name,
            remoteSnapshot: _,
            preloadConfig: g,
            remote: m,
            origin: e
          }), !Mt.getPreloaded(et) && (g.resourceCategory === "all" ? (s.push(...v(W.assets.css.async)), s.push(...v(W.assets.css.sync)), i.push(...v(W.assets.js.async)), i.push(...v(W.assets.js.sync))) : g.resourceCategory === "sync" && (s.push(...v(W.assets.css.sync)), i.push(...v(W.assets.js.sync))), Mt.setPreloaded(et));
        }
      }
    }, true, {}, o), o.shared && o.shared.length > 0) {
      const _ = (m, E) => {
        const { shared: g } = Fi.getRegisteredShare(e.shareScopeMap, E.sharedName, m, e.sharedHandler.hooks.lifecycle.resolveShare) || {};
        g && typeof g.lib == "function" && (E.assets.js.sync.forEach((p) => {
          c.add(p);
        }), E.assets.css.sync.forEach((p) => {
          l.add(p);
        }));
      };
      o.shared.forEach((m) => {
        var _a2;
        const E = (_a2 = u.shared) == null ? void 0 : _a2[m.sharedName];
        if (!E) return;
        const g = m.version ? E.find((p) => p.version === m.version) : E;
        g && Pe.arrayOptions(g).forEach((p) => {
          _(p, m);
        });
      });
    }
    const h = i.filter((_) => !c.has(_) && !it("script", _));
    return {
      cssAssets: s.filter((_) => !l.has(_) && !it("link", _)),
      jsAssetsWithoutEntry: h,
      entryAssets: a.filter((_) => !it("script", _.url))
    };
  }
  const qi = function() {
    return {
      name: "generate-preload-assets-plugin",
      async generatePreloadAssets(e) {
        const { origin: t, preloadOptions: r, remoteInfo: n, remote: o, globalSnapshot: s, remoteSnapshot: i } = e;
        return Ke.isBrowserEnvValue ? Pe.isRemoteInfoWithEntry(o) && Pe.isPureRemoteEntry(o) ? {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: o.name,
              url: o.entry,
              moduleInfo: {
                name: n.name,
                entry: o.entry,
                type: n.type || "global",
                entryGlobalName: "",
                shareScope: ""
              }
            }
          ]
        } : (Li.assignRemoteInfo(n, i), Hi(t, r, n, s, i)) : {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: []
        };
      }
    };
  };
  rn.generatePreloadAssetsPlugin = qi;
  var Ze = {};
  const at = I, Ci = R, U = S, Ui = j, Jt = Oe, Gi = Ae, lt = $e, Wi = ke;
  let ct = L, Le = K;
  function on(e, t) {
    const r = U.getGlobalSnapshotInfoByModuleInfo({
      name: t.name,
      version: t.options.version
    }), n = r && "remotesInfo" in r && r.remotesInfo && U.getInfoWithoutType(r.remotesInfo, e.name).value;
    return n && n.matchedVersion ? {
      hostGlobalSnapshot: r,
      globalSnapshot: U.getGlobalSnapshot(),
      remoteSnapshot: U.getGlobalSnapshotInfoByModuleInfo({
        name: e.name,
        version: n.matchedVersion
      })
    } : {
      hostGlobalSnapshot: void 0,
      globalSnapshot: U.getGlobalSnapshot(),
      remoteSnapshot: U.getGlobalSnapshotInfoByModuleInfo({
        name: e.name,
        version: "version" in e ? e.version : void 0
      })
    };
  }
  var Bi = class {
    constructor(e) {
      this.loadingHostSnapshot = null, this.manifestCache = /* @__PURE__ */ new Map(), this.hooks = new Wi.PluginSystem({
        beforeLoadRemoteSnapshot: new Gi.AsyncHook("beforeLoadRemoteSnapshot"),
        loadSnapshot: new lt.AsyncWaterfallHook("loadGlobalSnapshot"),
        loadRemoteSnapshot: new lt.AsyncWaterfallHook("loadRemoteSnapshot"),
        afterLoadSnapshot: new lt.AsyncWaterfallHook("afterLoadSnapshot")
      }), this.manifestLoading = U.Global.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook;
    }
    async loadRemoteSnapshotInfo({ moduleInfo: e, id: t, expose: r }) {
      const { options: n } = this.HostInstance;
      await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options: n,
        moduleInfo: e
      });
      let o = U.getGlobalSnapshotInfoByModuleInfo({
        name: this.HostInstance.options.name,
        version: this.HostInstance.options.version
      });
      o || (o = {
        version: this.HostInstance.options.version || "",
        remoteEntry: "",
        remotesInfo: {}
      }, U.addGlobalSnapshot({
        [this.HostInstance.options.name]: o
      })), o && "remotesInfo" in o && !U.getInfoWithoutType(o.remotesInfo, e.name).value && ("version" in e || "entry" in e) && (o.remotesInfo = {
        ...o == null ? void 0 : o.remotesInfo,
        [e.name]: {
          matchedVersion: "version" in e ? e.version : e.entry
        }
      });
      const { hostGlobalSnapshot: s, remoteSnapshot: i, globalSnapshot: a } = this.getGlobalRemoteInfo(e), { remoteSnapshot: c, globalSnapshot: l } = await this.hooks.lifecycle.loadSnapshot.emit({
        options: n,
        moduleInfo: e,
        hostGlobalSnapshot: s,
        remoteSnapshot: i,
        globalSnapshot: a
      });
      let u, f;
      if (c) if ((0, ct.isManifestProvider)(c)) {
        const d = ct.isBrowserEnvValue ? c.remoteEntry : c.ssrRemoteEntry || c.remoteEntry || "", h = await this.getManifestJson(d, e, {}), _ = U.setGlobalSnapshotInfoByModuleInfo({
          ...e,
          entry: d
        }, h);
        u = h, f = _;
      } else {
        const { remoteSnapshot: d } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e,
          remoteSnapshot: c,
          from: "global"
        });
        u = d, f = l;
      }
      else if (Ci.isRemoteInfoWithEntry(e)) {
        const d = await this.getManifestJson(e.entry, e, {}), h = U.setGlobalSnapshotInfoByModuleInfo(e, d), { remoteSnapshot: _ } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e,
          remoteSnapshot: d,
          from: "global"
        });
        u = _, f = h;
      } else at.error(Le.RUNTIME_007, Le.runtimeDescMap, {
        remoteName: e.name,
        remoteVersion: e.version,
        hostName: this.HostInstance.options.name,
        globalSnapshot: JSON.stringify(l)
      }, void 0, Jt.optionsToMFContext(this.HostInstance.options));
      return await this.hooks.lifecycle.afterLoadSnapshot.emit({
        id: t,
        host: this.HostInstance,
        options: n,
        moduleInfo: e,
        remoteSnapshot: u
      }), {
        remoteSnapshot: u,
        globalSnapshot: f
      };
    }
    getGlobalRemoteInfo(e) {
      return on(e, this.HostInstance);
    }
    async getManifestJson(e, t, r) {
      const n = async () => {
        let s = this.manifestCache.get(e);
        if (s) return s;
        try {
          let i = await this.loaderHook.lifecycle.fetch.emit(e, {}, Ui.getRemoteInfo(t));
          (!i || !(i instanceof Response)) && (i = await fetch(e, {})), s = await i.json();
        } catch (i) {
          s = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e,
            error: i,
            from: "runtime",
            lifecycle: "afterResolve",
            origin: this.HostInstance
          }), s || (delete this.manifestLoading[e], at.error(Le.RUNTIME_003, Le.runtimeDescMap, {
            manifestUrl: e,
            moduleName: t.name,
            hostName: this.HostInstance.options.name
          }, `${i}`, Jt.optionsToMFContext(this.HostInstance.options)));
        }
        return at.assert(s.metaData && s.exposes && s.shared, `"${e}" is not a valid federation manifest for remote "${t.name}". Missing required fields: ${[
          !s.metaData && "metaData",
          !s.exposes && "exposes",
          !s.shared && "shared"
        ].filter(Boolean).join(", ")}.`), this.manifestCache.set(e, s), s;
      }, o = async () => {
        const s = await n(), i = (0, ct.generateSnapshotFromManifest)(s, {
          version: e
        }), { remoteSnapshot: a } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: t,
          manifestJson: s,
          remoteSnapshot: i,
          manifestUrl: e,
          from: "manifest"
        });
        return a;
      };
      return this.manifestLoading[e] || (this.manifestLoading[e] = o().then((s) => s)), this.manifestLoading[e];
    }
  };
  Ze.SnapshotHandler = Bi;
  Ze.getGlobalRemoteInfo = on;
  var sn = {};
  const ut = I, Vi = re, N = q, Zt = Oe, ji = Ae, ft = _e, Qt = $e, xi = ke;
  let ge = K;
  var Xi = class {
    constructor(e) {
      this.hooks = new xi.PluginSystem({
        beforeRegisterShare: new ft.SyncWaterfallHook("beforeRegisterShare"),
        afterResolve: new Qt.AsyncWaterfallHook("afterResolve"),
        beforeLoadShare: new Qt.AsyncWaterfallHook("beforeLoadShare"),
        loadShare: new ji.AsyncHook(),
        resolveShare: new ft.SyncWaterfallHook("resolveShare"),
        initContainerShareScopeMap: new ft.SyncWaterfallHook("initContainerShareScopeMap")
      }), this.host = e, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e.options);
    }
    registerShared(e, t) {
      const { newShareInfos: r, allShareInfos: n } = N.formatShareConfigs(e, t);
      return Object.keys(r).forEach((o) => {
        r[o].forEach((s) => {
          s.scope.forEach((i) => {
            var _a2;
            this.hooks.lifecycle.beforeRegisterShare.emit({
              origin: this.host,
              pkgName: o,
              shared: s
            }), ((_a2 = this.shareScopeMap[i]) == null ? void 0 : _a2[o]) || this.setShared({
              pkgName: o,
              lib: s.lib,
              get: s.get,
              loaded: s.loaded || !!s.lib,
              shared: s,
              from: t.name
            });
          });
        });
      }), {
        newShareInfos: r,
        allShareInfos: n
      };
    }
    async loadShare(e, t) {
      const { host: r } = this, n = N.getTargetSharedOptions({
        pkgName: e,
        extraOptions: t,
        shareInfos: r.options.shared
      });
      (n == null ? void 0 : n.scope) && await Promise.all(n.scope.map(async (a) => {
        await Promise.all(this.initializeSharing(a, {
          strategy: n.strategy
        }));
      }));
      const { shareInfo: o } = await this.hooks.lifecycle.beforeLoadShare.emit({
        pkgName: e,
        shareInfo: n,
        shared: r.options.shared,
        origin: r
      });
      ut.assert(o, `Cannot find shared "${e}" in host "${r.options.name}". Ensure the shared config for "${e}" is declared in the federation plugin options and the host has been initialized before loading shares.`);
      const { shared: s, useTreesShaking: i } = N.getRegisteredShare(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare) || {};
      if (s) {
        const a = N.directShare(s, i);
        if (a.lib) return N.addUseIn(a, r.options.name), a.lib;
        if (a.loading && !a.loaded) {
          const c = await a.loading;
          return a.loaded = true, a.lib || (a.lib = c), N.addUseIn(a, r.options.name), c;
        } else {
          const l = (async () => {
            const u = await a.get();
            return N.addUseIn(a, r.options.name), a.loaded = true, a.lib = u, u;
          })();
          return this.setShared({
            pkgName: e,
            loaded: false,
            shared: s,
            from: r.options.name,
            lib: null,
            loading: l,
            treeShaking: i ? a : void 0
          }), l;
        }
      } else {
        if (t == null ? void 0 : t.customShareInfo) return false;
        const a = N.shouldUseTreeShaking(o.treeShaking), c = N.directShare(o, a), u = (async () => {
          const f = await c.get();
          c.lib = f, c.loaded = true, N.addUseIn(c, r.options.name);
          const { shared: d, useTreesShaking: h } = N.getRegisteredShare(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare) || {};
          if (d) {
            const _ = N.directShare(d, h);
            _.lib = f, _.loaded = true, d.from = o.from;
          }
          return f;
        })();
        return this.setShared({
          pkgName: e,
          loaded: false,
          shared: o,
          from: r.options.name,
          lib: null,
          loading: u,
          treeShaking: a ? c : void 0
        }), u;
      }
    }
    initializeSharing(e = Vi.DEFAULT_SCOPE, t) {
      const { host: r } = this, n = t == null ? void 0 : t.from, o = t == null ? void 0 : t.strategy;
      let s = t == null ? void 0 : t.initScope;
      const i = [];
      if (n !== "build") {
        const { initTokens: d } = this;
        s || (s = []);
        let h = d[e];
        if (h || (h = d[e] = {
          from: this.host.name
        }), s.indexOf(h) >= 0) return i;
        s.push(h);
      }
      const a = this.shareScopeMap, c = r.options.name;
      a[e] || (a[e] = {});
      const l = a[e], u = (d, h) => {
        var _a2;
        const { version: _, eager: m } = h;
        l[d] = l[d] || {};
        const E = l[d], g = E[_] && N.directShare(E[_]), p = !!(g && ("eager" in g && g.eager || "shareConfig" in g && ((_a2 = g.shareConfig) == null ? void 0 : _a2.eager)));
        (!g || g.strategy !== "loaded-first" && !g.loaded && (!m != !p ? m : c > E[_].from)) && (E[_] = h);
      }, f = async (d) => {
        const { module: h } = await r.remoteHandler.getRemoteModuleAndOptions({
          id: d
        });
        let _;
        try {
          _ = await h.getEntry();
        } catch (m) {
          if (_ = await r.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: d,
            error: m,
            from: "runtime",
            lifecycle: "beforeLoadShare",
            origin: r
          }), !_) return;
        } finally {
          (_ == null ? void 0 : _.init) && !h.initing && (h.remoteEntryExports = _, await h.init(void 0, void 0, s));
        }
      };
      return Object.keys(r.options.shared).forEach((d) => {
        r.options.shared[d].forEach((h) => {
          h.scope.includes(e) && u(d, h);
        });
      }), (r.options.shareStrategy === "version-first" || o === "version-first") && r.options.remotes.forEach((d) => {
        d.shareScope === e && i.push(f(d.name));
      }), i;
    }
    loadShareSync(e, t) {
      const { host: r } = this, n = N.getTargetSharedOptions({
        pkgName: e,
        extraOptions: t,
        shareInfos: r.options.shared
      });
      (n == null ? void 0 : n.scope) && n.scope.forEach((i) => {
        this.initializeSharing(i, {
          strategy: n.strategy
        });
      });
      const { shared: o, useTreesShaking: s } = N.getRegisteredShare(this.shareScopeMap, e, n, this.hooks.lifecycle.resolveShare) || {};
      if (o) {
        if (typeof o.lib == "function") return N.addUseIn(o, r.options.name), o.loaded || (o.loaded = true, o.from === r.options.name && (n.loaded = true)), o.lib;
        if (typeof o.get == "function") {
          const i = o.get();
          if (!(i instanceof Promise)) return N.addUseIn(o, r.options.name), this.setShared({
            pkgName: e,
            loaded: true,
            from: r.options.name,
            lib: i,
            shared: o
          }), i;
        }
      }
      if (n.lib) return n.loaded || (n.loaded = true), n.lib;
      if (n.get) {
        const i = n.get();
        return i instanceof Promise && ut.error((t == null ? void 0 : t.from) === "build" ? ge.RUNTIME_005 : ge.RUNTIME_006, ge.runtimeDescMap, {
          hostName: r.options.name,
          sharedPkgName: e
        }, void 0, Zt.optionsToMFContext(r.options)), n.lib = i, this.setShared({
          pkgName: e,
          loaded: true,
          from: r.options.name,
          lib: n.lib,
          shared: n
        }), n.lib;
      }
      ut.error(ge.RUNTIME_006, ge.runtimeDescMap, {
        hostName: r.options.name,
        sharedPkgName: e
      }, void 0, Zt.optionsToMFContext(r.options));
    }
    initShareScopeMap(e, t, r = {}) {
      const { host: n } = this;
      this.shareScopeMap[e] = t, this.hooks.lifecycle.initContainerShareScopeMap.emit({
        shareScope: t,
        options: n.options,
        origin: n,
        scopeName: e,
        hostShareScopeMap: r.hostShareScopeMap
      });
    }
    setShared({ pkgName: e, shared: t, from: r, lib: n, loading: o, loaded: s, get: i, treeShaking: a }) {
      const { version: c, scope: l = "default", ...u } = t, f = Array.isArray(l) ? l : [
        l
      ], d = (h) => {
        const _ = (E, g, p) => {
          p && !E[g] && (E[g] = p);
        }, m = a ? h.treeShaking : h;
        _(m, "loaded", s), _(m, "loading", o), _(m, "get", i);
      };
      f.forEach((h) => {
        this.shareScopeMap[h] || (this.shareScopeMap[h] = {}), this.shareScopeMap[h][e] || (this.shareScopeMap[h][e] = {}), this.shareScopeMap[h][e][c] || (this.shareScopeMap[h][e][c] = {
          version: c,
          scope: [
            h
          ],
          ...u,
          lib: n
        });
        const _ = this.shareScopeMap[h][e][c];
        d(_), r && _.from !== r && (_.from = r);
      });
    }
    _setGlobalShareScopeMap(e) {
      const t = N.getGlobalShareScope(), r = e.id || e.name;
      r && !t[r] && (t[r] = this.shareScopeMap);
    }
  };
  sn.SharedHandler = Xi;
  var an = {};
  const De = I, C = S, er = re, Ki = q, Yi = he, dt = j, zi = Oe, tr = J, Ji = ze, Zi = me, oe = Ae, rr = _e, Qi = $e, ea = ke, ta = Ze;
  let ht = L, nr = K;
  var ra = class {
    constructor(e) {
      this.hooks = new ea.PluginSystem({
        beforeRegisterRemote: new rr.SyncWaterfallHook("beforeRegisterRemote"),
        registerRemote: new rr.SyncWaterfallHook("registerRemote"),
        beforeRequest: new Qi.AsyncWaterfallHook("beforeRequest"),
        onLoad: new oe.AsyncHook("onLoad"),
        handlePreloadModule: new Zi.SyncHook("handlePreloadModule"),
        errorLoadRemote: new oe.AsyncHook("errorLoadRemote"),
        beforePreloadRemote: new oe.AsyncHook("beforePreloadRemote"),
        generatePreloadAssets: new oe.AsyncHook("generatePreloadAssets"),
        afterPreloadRemote: new oe.AsyncHook(),
        loadEntry: new oe.AsyncHook()
      }), this.host = e, this.idToRemoteMap = {};
    }
    formatAndRegisterRemote(e, t) {
      return (t.remotes || []).reduce((r, n) => (this.registerRemote(n, r, {
        force: false
      }), r), e.remotes);
    }
    setIdToRemoteMap(e, t) {
      const { remote: r, expose: n } = t, { name: o, alias: s } = r;
      if (this.idToRemoteMap[e] = {
        name: r.name,
        expose: n
      }, s && e.startsWith(o)) {
        const i = e.replace(o, s);
        this.idToRemoteMap[i] = {
          name: r.name,
          expose: n
        };
        return;
      }
      if (s && e.startsWith(s)) {
        const i = e.replace(s, o);
        this.idToRemoteMap[i] = {
          name: r.name,
          expose: n
        };
      }
    }
    async loadRemote(e, t) {
      const { host: r } = this;
      try {
        const { loadFactory: n = true } = t || {
          loadFactory: true
        }, { module: o, moduleOptions: s, remoteMatchInfo: i } = await this.getRemoteModuleAndOptions({
          id: e
        }), { pkgNameOrAlias: a, remote: c, expose: l, id: u, remoteSnapshot: f } = i, d = await o.get(u, l, t, f), h = await this.hooks.lifecycle.onLoad.emit({
          id: u,
          pkgNameOrAlias: a,
          expose: l,
          exposeModule: n ? d : void 0,
          exposeModuleFactory: n ? void 0 : d,
          remote: c,
          options: s,
          moduleInstance: o,
          origin: r
        });
        return this.setIdToRemoteMap(e, i), typeof h == "function" ? h : d;
      } catch (n) {
        const { from: o = "runtime" } = t || {
          from: "runtime"
        }, s = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: e,
          error: n,
          from: o,
          lifecycle: "onLoad",
          origin: r
        });
        if (!s) throw n;
        return s;
      }
    }
    async preloadRemote(e) {
      const { host: t } = this;
      await this.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: e,
        options: t.options,
        origin: t
      });
      const r = tr.formatPreloadArgs(t.options.remotes, e);
      await Promise.all(r.map(async (n) => {
        const { remote: o } = n, s = dt.getRemoteInfo(o), { globalSnapshot: i, remoteSnapshot: a } = await t.snapshotHandler.loadRemoteSnapshotInfo({
          moduleInfo: o
        }), c = await this.hooks.lifecycle.generatePreloadAssets.emit({
          origin: t,
          preloadOptions: n,
          remote: o,
          remoteInfo: s,
          globalSnapshot: i,
          remoteSnapshot: a
        });
        c && tr.preloadAssets(s, t, c);
      }));
    }
    registerRemotes(e, t) {
      const { host: r } = this;
      e.forEach((n) => {
        this.registerRemote(n, r.options.remotes, {
          force: t == null ? void 0 : t.force
        });
      });
    }
    async getRemoteModuleAndOptions(e) {
      const { host: t } = this, { id: r } = e;
      let n;
      try {
        n = await this.hooks.lifecycle.beforeRequest.emit({
          id: r,
          options: t.options,
          origin: t
        });
      } catch (h) {
        if (n = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: r,
          options: t.options,
          origin: t,
          from: "runtime",
          error: h,
          lifecycle: "beforeRequest"
        }), !n) throw h;
      }
      const { id: o } = n, s = Yi.matchRemoteWithNameAndExpose(t.options.remotes, o);
      s || De.error(nr.RUNTIME_004, nr.runtimeDescMap, {
        hostName: t.options.name,
        requestId: o
      }, void 0, zi.optionsToMFContext(t.options));
      const { remote: i } = s, a = dt.getRemoteInfo(i), c = await t.sharedHandler.hooks.lifecycle.afterResolve.emit({
        id: o,
        ...s,
        options: t.options,
        origin: t,
        remoteInfo: a
      }), { remote: l, expose: u } = c;
      De.assert(l && u, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${o}.`);
      let f = t.moduleCache.get(l.name);
      const d = {
        host: t,
        remoteInfo: a
      };
      return f || (f = new Ji.Module(d), t.moduleCache.set(l.name, f)), {
        module: f,
        moduleOptions: d,
        remoteMatchInfo: c
      };
    }
    registerRemote(e, t, r) {
      const { host: n } = this, o = () => {
        if (e.alias) {
          const i = t.find((a) => {
            var _a2;
            return e.alias && (a.name.startsWith(e.alias) || ((_a2 = a.alias) == null ? void 0 : _a2.startsWith(e.alias)));
          });
          De.assert(!i, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${i && i.name} name or alias`);
        }
        "entry" in e && ht.isBrowserEnvValue && typeof window < "u" && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = er.DEFAULT_SCOPE), e.type || (e.type = er.DEFAULT_REMOTE_TYPE);
      };
      this.hooks.lifecycle.beforeRegisterRemote.emit({
        remote: e,
        origin: n
      });
      const s = t.find((i) => i.name === e.name);
      if (!s) o(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
        remote: e,
        origin: n
      });
      else {
        const i = [
          `The remote "${e.name}" is already registered.`,
          "Please note that overriding it may cause unexpected errors."
        ];
        (r == null ? void 0 : r.force) && (this.removeRemote(s), o(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
          remote: e,
          origin: n
        }), (0, ht.warn)(i.join(" ")));
      }
    }
    removeRemote(e) {
      var _a2;
      try {
        const { host: t } = this, { name: r } = e, n = t.options.remotes.findIndex((s) => s.name === r);
        n !== -1 && t.options.remotes.splice(n, 1);
        const o = t.moduleCache.get(e.name);
        if (o) {
          const s = o.remoteInfo, i = s.entryGlobalName;
          C.CurrentGlobal[i] && (((_a2 = Object.getOwnPropertyDescriptor(C.CurrentGlobal, i)) == null ? void 0 : _a2.configurable) ? delete C.CurrentGlobal[i] : C.CurrentGlobal[i] = void 0);
          const a = dt.getRemoteEntryUniqueKey(o.remoteInfo);
          C.globalLoading[a] && delete C.globalLoading[a], t.snapshotHandler.manifestCache.delete(s.entry);
          let c = s.buildVersion ? (0, ht.composeKeyWithSeparator)(s.name, s.buildVersion) : s.name;
          const l = C.CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((f) => s.buildVersion ? f.options.id === c : f.name === c);
          if (l !== -1) {
            const f = C.CurrentGlobal.__FEDERATION__.__INSTANCES__[l];
            c = f.options.id || c;
            const d = Ki.getGlobalShareScope();
            let h = true;
            const _ = [];
            Object.keys(d).forEach((m) => {
              const E = d[m];
              E && Object.keys(E).forEach((g) => {
                const p = E[g];
                p && Object.keys(p).forEach(($) => {
                  const w = p[$];
                  w && Object.keys(w).forEach((v) => {
                    const T = w[v];
                    T && typeof T == "object" && T.from === s.name && (T.loaded || T.loading ? (T.useIn = T.useIn.filter((F) => F !== s.name), T.useIn.length ? h = false : _.push([
                      m,
                      g,
                      $,
                      v
                    ])) : _.push([
                      m,
                      g,
                      $,
                      v
                    ]));
                  });
                });
              });
            }), h && (f.shareScopeMap = {}, delete d[c]), _.forEach(([m, E, g, p]) => {
              var _a3, _b, _c;
              (_c = (_b = (_a3 = d[m]) == null ? void 0 : _a3[E]) == null ? void 0 : _b[g]) == null ? true : delete _c[p];
            }), C.CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(l, 1);
          }
          const { hostGlobalSnapshot: u } = ta.getGlobalRemoteInfo(e, t);
          if (u) {
            const f = u && "remotesInfo" in u && u.remotesInfo && C.getInfoWithoutType(u.remotesInfo, e.name).key;
            f && (delete u.remotesInfo[f], C.Global.__FEDERATION__.__MANIFEST_LOADING__[f] && delete C.Global.__FEDERATION__.__MANIFEST_LOADING__[f]);
          }
          t.moduleCache.delete(e.name);
        }
      } catch (t) {
        De.logger.error(`removeRemote failed: ${t instanceof Error ? t.message : String(t)}`);
      }
    }
  };
  an.RemoteHandler = ra;
  const na = I, oa = re, sa = q, ia = Kr, aa = Yr, la = j, ca = ze, Y = me, mt = Ae, ua = _e, or = $e, _t = ke, fa = Je, da = rn, ha = Ze, ma = sn, _a = an;
  let pa = L, pt = K;
  const ga = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN == "boolean" ? !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN : true;
  var Ea = class {
    constructor(e) {
      this.hooks = new _t.PluginSystem({
        beforeInit: new ua.SyncWaterfallHook("beforeInit"),
        init: new Y.SyncHook(),
        beforeInitContainer: new or.AsyncWaterfallHook("beforeInitContainer"),
        initContainer: new or.AsyncWaterfallHook("initContainer")
      }), this.version = "2.4.0", this.moduleCache = /* @__PURE__ */ new Map(), this.loaderHook = new _t.PluginSystem({
        getModuleInfo: new Y.SyncHook(),
        createScript: new Y.SyncHook(),
        createLink: new Y.SyncHook(),
        fetch: new mt.AsyncHook(),
        loadEntryError: new mt.AsyncHook(),
        getModuleFactory: new mt.AsyncHook()
      }), this.bridgeHook = new _t.PluginSystem({
        beforeBridgeRender: new Y.SyncHook(),
        afterBridgeRender: new Y.SyncHook(),
        beforeBridgeDestroy: new Y.SyncHook(),
        afterBridgeDestroy: new Y.SyncHook()
      });
      const t = ga ? [
        fa.snapshotPlugin(),
        da.generatePreloadAssetsPlugin()
      ] : [], r = {
        id: ia.getBuilderId(),
        name: e.name,
        plugins: t,
        remotes: [],
        shared: {},
        inBrowser: pa.isBrowserEnvValue
      };
      this.name = e.name, this.options = r, this.snapshotHandler = new ha.SnapshotHandler(this), this.sharedHandler = new ma.SharedHandler(this), this.remoteHandler = new _a.RemoteHandler(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([
        ...r.plugins,
        ...e.plugins || []
      ]), this.options = this.formatOptions(r, e);
    }
    initOptions(e) {
      e.name && e.name !== this.options.name && na.error((0, pt.getShortErrorMsg)(pt.RUNTIME_010, pt.runtimeDescMap)), this.registerPlugins(e.plugins);
      const t = this.formatOptions(this.options, e);
      return this.options = t, t;
    }
    async loadShare(e, t) {
      return this.sharedHandler.loadShare(e, t);
    }
    loadShareSync(e, t) {
      return this.sharedHandler.loadShareSync(e, t);
    }
    initializeSharing(e = oa.DEFAULT_SCOPE, t) {
      return this.sharedHandler.initializeSharing(e, t);
    }
    initRawContainer(e, t, r) {
      const n = la.getRemoteInfo({
        name: e,
        entry: t
      }), o = new ca.Module({
        host: this,
        remoteInfo: n
      });
      return o.remoteEntryExports = r, this.moduleCache.set(e, o), o;
    }
    async loadRemote(e, t) {
      return this.remoteHandler.loadRemote(e, t);
    }
    async preloadRemote(e) {
      return this.remoteHandler.preloadRemote(e);
    }
    initShareScopeMap(e, t, r = {}) {
      this.sharedHandler.initShareScopeMap(e, t, r);
    }
    formatOptions(e, t) {
      const { allShareInfos: r } = sa.formatShareConfigs(e, t), { userOptions: n, options: o } = this.hooks.lifecycle.beforeInit.emit({
        origin: this,
        userOptions: t,
        options: e,
        shareInfo: r
      }), s = this.remoteHandler.formatAndRegisterRemote(o, n), { allShareInfos: i } = this.sharedHandler.registerShared(o, n), a = [
        ...o.plugins
      ];
      n.plugins && n.plugins.forEach((l) => {
        a.includes(l) || a.push(l);
      });
      const c = {
        ...e,
        ...t,
        plugins: a,
        remotes: s,
        shared: i,
        id: n.id || e.id
      };
      return this.hooks.lifecycle.init.emit({
        origin: this,
        options: c
      }), c;
    }
    registerPlugins(e) {
      const t = aa.registerPlugins(e, this);
      this.options.plugins = this.options.plugins.reduce((r, n) => (n && r && !r.find((o) => o.name === n.name) && r.push(n), r), t || []);
    }
    registerRemotes(e, t) {
      return this.remoteHandler.registerRemotes(e, t);
    }
    registerShared(e) {
      this.sharedHandler.registerShared(this.options, {
        ...this.options,
        shared: e
      });
    }
  };
  Zr.ModuleFederation = Ea;
  var ln = {}, cn = {}, sr = Object.defineProperty, ya = (e, t) => {
    let r = {};
    for (var n in e) sr(r, n, {
      get: e[n],
      enumerable: true
    });
    return t || sr(r, Symbol.toStringTag, {
      value: "Module"
    }), r;
  };
  cn.__exportAll = ya;
  (function(e) {
    var r = cn.__exportAll({});
    Object.defineProperty(e, "type_exports", {
      enumerable: true,
      get: function() {
        return r;
      }
    });
  })(ln);
  (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    const t = I, r = R, n = S, o = wt, s = q, i = he, a = j, c = zr, l = ze, u = Zr, f = ln;
    let d = L;
    const h = c.default;
    e.CurrentGlobal = n.CurrentGlobal, e.Global = n.Global, e.Module = l.Module, e.ModuleFederation = u.ModuleFederation, e.addGlobalSnapshot = n.addGlobalSnapshot, e.assert = t.assert, e.error = t.error, e.getGlobalFederationConstructor = n.getGlobalFederationConstructor, e.getGlobalSnapshot = n.getGlobalSnapshot, e.getInfoWithoutType = n.getInfoWithoutType, e.getRegisteredShare = s.getRegisteredShare, e.getRemoteEntry = a.getRemoteEntry, e.getRemoteInfo = a.getRemoteInfo, e.helpers = h, e.isStaticResourcesEqual = r.isStaticResourcesEqual, Object.defineProperty(e, "loadScript", {
      enumerable: true,
      get: function() {
        return d.loadScript;
      }
    }), Object.defineProperty(e, "loadScriptNode", {
      enumerable: true,
      get: function() {
        return d.loadScriptNode;
      }
    }), e.matchRemoteWithNameAndExpose = i.matchRemoteWithNameAndExpose, e.registerGlobalPlugins = n.registerGlobalPlugins, e.resetFederationGlobalInfo = n.resetFederationGlobalInfo, e.safeWrapper = r.safeWrapper, e.satisfy = o.satisfy, e.setGlobalFederationConstructor = n.setGlobalFederationConstructor, e.setGlobalFederationInstance = n.setGlobalFederationInstance, Object.defineProperty(e, "types", {
      enumerable: true,
      get: function() {
        return f.type_exports;
      }
    });
  })(vt);
  let Sa = vt;
  function ba() {
    return typeof FEDERATION_BUILD_IDENTIFIER < "u" ? FEDERATION_BUILD_IDENTIFIER : "";
  }
  function Ra(e, t) {
    const r = ba();
    return Sa.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((n) => !!(r && n.options.id === r || n.options.name === e && !n.options.version && !t || n.options.name === e && t && n.options.version === t));
  }
  ur.getGlobalFederationInstance = Ra;
  (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    const t = ur;
    let r = vt, n = K;
    function o(m) {
      const E = new ((0, r.getGlobalFederationConstructor)() || r.ModuleFederation)({
        id: `${m.name}@${m.version || Date.now()}`,
        ...m
      });
      return (0, r.setGlobalFederationInstance)(E), E;
    }
    let s = null;
    function i(m) {
      const E = t.getGlobalFederationInstance(m.name, m.version), g = {
        ...m,
        id: m.id || ""
      };
      return E ? (E.initOptions(g), s || (s = E), E) : (s = o(g), s);
    }
    function a(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.loadRemote.apply(s, m);
    }
    function c(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.loadShare.apply(s, m);
    }
    function l(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.loadShareSync.apply(s, m);
    }
    function u(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.preloadRemote.apply(s, m);
    }
    function f(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.registerRemotes.apply(s, m);
    }
    function d(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.registerPlugins.apply(s, m);
    }
    function h() {
      return s;
    }
    function _(...m) {
      return (0, r.assert)(s, n.RUNTIME_009, n.runtimeDescMap), s.registerShared.apply(s, m);
    }
    (0, r.setGlobalFederationConstructor)(r.ModuleFederation), Object.defineProperty(e, "Module", {
      enumerable: true,
      get: function() {
        return r.Module;
      }
    }), e.ModuleFederation = r.ModuleFederation, e.createInstance = o, e.getInstance = h, Object.defineProperty(e, "getRemoteEntry", {
      enumerable: true,
      get: function() {
        return r.getRemoteEntry;
      }
    }), Object.defineProperty(e, "getRemoteInfo", {
      enumerable: true,
      get: function() {
        return r.getRemoteInfo;
      }
    }), e.init = i, e.loadRemote = a, Object.defineProperty(e, "loadScript", {
      enumerable: true,
      get: function() {
        return r.loadScript;
      }
    }), Object.defineProperty(e, "loadScriptNode", {
      enumerable: true,
      get: function() {
        return r.loadScriptNode;
      }
    }), e.loadShare = c, e.loadShareSync = l, e.preloadRemote = u, Object.defineProperty(e, "registerGlobalPlugins", {
      enumerable: true,
      get: function() {
        return r.registerGlobalPlugins;
      }
    }), e.registerPlugins = d, e.registerRemotes = f, e.registerShared = _;
  })(cr);
  typeof __VUE_HMR_RUNTIME__ > "u" && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  const un = "__mf_init____mf__virtual/__mfe_internal__vis2TechnicWidgets__mf_v__runtimeInit__mf_v__.js__";
  let Pt = globalThis[un];
  if (!Pt) {
    let e, t;
    const r = new Promise((n, o) => {
      e = n, t = o;
    });
    Pt = globalThis[un] = {
      initPromise: r,
      initResolve: e,
      initReject: t
    }, typeof window > "u" && e({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  const Ta = Pt.initResolve, Qe = "__mf_module_cache__";
  globalThis[Qe] ||= {
    share: {},
    remote: {}
  };
  globalThis[Qe].share ||= {};
  globalThis[Qe].remote ||= {};
  const se = globalThis[Qe], ir = {}, ar = "default", lr = "__mfe_internal__vis2TechnicWidgets";
  let He, qe, Ce;
  async function Dt(e) {
    for (let t = 0; ; t++) try {
      return await e();
    } catch (r) {
      throw r;
    }
  }
  async function Ia() {
    return qe || (qe = Dt(() => be(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__vis2TechnicWidgets-DIPmlKtq.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)).catch((e) => {
      throw qe = void 0, e;
    })), qe;
  }
  async function Na() {
    return Ce || (Ce = Dt(() => be(() => import("./assets/virtualExposes-qTpVxCh3.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)).then((e) => e.default ?? e).catch((e) => {
      throw Ce = void 0, e;
    })), Ce;
  }
  Pa = async function(e = {}, t = []) {
    const { usedShared: r, usedRemotes: n } = await Ia();
    if (se.share.react === void 0) {
      const c = {
        ...await be(() => import("./assets/__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs-BINqmtDG.js").then((l) => l.R), [], import.meta.url)
      };
      Object.defineProperty(c, "__esModule", {
        value: true,
        enumerable: false
      }), se.share.react = c;
    }
    if (se.share["react-dom"] === void 0) {
      const c = {
        ...await be(() => import("./assets/__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_2_dom__loadShare__.mjs-BAjGtrz2.js").then((l) => l.a), [], import.meta.url)
      };
      Object.defineProperty(c, "__esModule", {
        value: true,
        enumerable: false
      }), se.share["react-dom"] = c;
    }
    if (se.share["@iobroker/vis-2-widgets-react-dev"] === void 0) {
      const c = {
        ...await be(() => import("./assets/__mfe_internal__vis2TechnicWidgets__loadShare___mf_0_iobroker_mf_1_vis_mf_2_2_mf_2_widgets_mf_2_react_mf_2_dev__loadShare__.mjs-BHpuGpwt.js").then((l) => l._), [], import.meta.url)
      };
      Object.defineProperty(c, "__esModule", {
        value: true,
        enumerable: false
      }), se.share["@iobroker/vis-2-widgets-react-dev"] = c;
    }
    const o = {
      name: lr,
      remotes: n,
      shared: r,
      plugins: [],
      shareStrategy: "version-first"
    };
    He ? He.initOptions(o) : He = cr.createInstance(o);
    const s = He;
    var i = ir[ar];
    if (i || (i = ir[ar] = {
      from: lr
    }), !(t.indexOf(i) >= 0)) {
      t.push(i), s.initShareScopeMap("default", e), Ta(s);
      try {
        await Dt(async () => {
          await Promise.all(await s.initializeSharing("default", {
            strategy: "version-first",
            from: "build",
            initScope: t
          }));
        });
      } catch (a) {
        console.error("[Module Federation]", a);
      }
      return s;
    }
  };
  va = async function(e) {
    const t = await Na();
    if (!(e in t)) throw new Error(`[Module Federation] Module ${e} does not exist in container.`);
    return t[e]().then((r) => () => r);
  };
})();
export {
  __tla,
  va as get,
  Pa as init
};
