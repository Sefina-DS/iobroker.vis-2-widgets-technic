import { _ as l } from "./preload-helper-CmsKOCeN.js";
let p;
let __tla = (async () => {
  const u = {}, r = /* @__PURE__ */ new Set();
  let o = Promise.resolve();
  async function c(t) {
    const e = o.then(t, t);
    return o = e.then(() => {
    }, () => {
    }), e;
  }
  async function m(t) {
    if (typeof document > "u") return;
    const e = u[t] || [];
    await Promise.all(e.map((i) => {
      const s = new URL(i, import.meta.url).href;
      return r.has(s) || (r.add(s), document.querySelector(`link[rel="stylesheet"][data-mf-href="${s}"]`)) ? Promise.resolve() : new Promise((a, d) => {
        const n = document.createElement("link");
        n.rel = "stylesheet", n.href = s, n.setAttribute("data-mf-href", s), n.onload = () => a(), n.onerror = () => d(new Error(`[Module Federation] Failed to load CSS asset: ${s}`)), document.head.appendChild(n);
      });
    }));
  }
  p = {
    "./FensterRolloWidget": async () => {
      await m("./FensterRolloWidget");
      const t = await c(() => l(() => import("./FensterRolloWidget-CIRUMrgU.js"), [], import.meta.url)), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    }
  };
})();
export {
  __tla,
  p as default
};
