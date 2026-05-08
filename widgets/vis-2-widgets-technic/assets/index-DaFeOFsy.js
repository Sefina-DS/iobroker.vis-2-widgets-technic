import "./FensterRolloWidget-CIRUMrgU.js";
import "./virtualExposes-qTpVxCh3.js";
import "./preload-helper-CmsKOCeN.js";
import "../customWidgets.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-D07bb3-N.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs-BINqmtDG.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs_commonjs-proxy-CkJrQ5pa.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare___mf_0_iobroker_mf_1_vis_mf_2_2_mf_2_widgets_mf_2_react_mf_2_dev__loadShare__.mjs-BHpuGpwt.js";
import "./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_2_dom__loadShare__.mjs-BAjGtrz2.js";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const r of e) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: true, subtree: true });
  function s(e) {
    const r = {};
    return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function i(e) {
    if (e.ep) return;
    e.ep = true;
    const r = s(e);
    fetch(e.href, r);
  }
})();
