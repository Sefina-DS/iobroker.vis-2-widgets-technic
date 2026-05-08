import { _ as c } from "./preload-helper-CmsKOCeN.js";
let e, u;
let __tla = (async () => {
  const o = "__mf_module_cache__";
  globalThis[o] ||= {
    share: {},
    remote: {}
  };
  globalThis[o].share ||= {};
  globalThis[o].remote ||= {};
  const n = globalThis[o];
  u = async function() {
    return e || (e = (async () => {
      const i = await (await c(() => import("../customWidgets.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url)).init(), s = {
        react: {
          shareConfig: {
            singleton: true,
            requiredVersion: "*"
          }
        },
        "react-dom": {
          shareConfig: {
            singleton: true,
            requiredVersion: "*"
          }
        },
        "@iobroker/vis-2-widgets-react-dev": {
          shareConfig: {
            singleton: true,
            requiredVersion: "*"
          }
        }
      };
      for (const [r, h] of Object.entries(s)) n.share[r] === void 0 && await i.loadShare(r, {
        customShareInfo: {
          shareConfig: h.shareConfig
        }
      }).then((t) => {
        const l = typeof t == "function" ? t() : t;
        return Promise.resolve(l).then((m) => {
          n.share[r] = m;
        });
      });
      const a = [];
      return await Promise.all(a), i;
    })()), e;
  };
  e = u();
})();
export {
  __tla,
  e as hostInitPromise,
  u as initHost
};
