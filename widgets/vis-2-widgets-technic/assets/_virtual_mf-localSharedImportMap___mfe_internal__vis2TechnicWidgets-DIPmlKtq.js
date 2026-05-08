import { _ as o } from "./preload-helper-CmsKOCeN.js";
let s, a;
let __tla = (async () => {
  let n;
  n = {
    "@iobroker/vis-2-widgets-react-dev": async () => await o(() => import("./__mfe_internal__vis2TechnicWidgets__loadShare___mf_0_iobroker_mf_1_vis_mf_2_2_mf_2_widgets_mf_2_react_mf_2_dev__loadShare__.mjs-BHpuGpwt.js").then((r) => r.b), [], import.meta.url),
    react: async () => await o(() => import("./__mfe_internal__vis2TechnicWidgets__loadShare__react__loadShare__.mjs-BINqmtDG.js").then((r) => r._), [], import.meta.url),
    "react-dom": async () => await o(() => import("./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_2_dom__loadShare__.mjs-BAjGtrz2.js").then((r) => r._), [], import.meta.url),
    "react/jsx-runtime": async () => await o(() => import("./__mfe_internal__vis2TechnicWidgets__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-D07bb3-N.js").then((r) => r._), [], import.meta.url)
  };
  a = {
    "@iobroker/vis-2-widgets-react-dev": {
      name: "@iobroker/vis-2-widgets-react-dev",
      version: "4.0.4",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__vis2TechnicWidgets",
      async get() {
        a["@iobroker/vis-2-widgets-react-dev"].loaded = true;
        const { "@iobroker/vis-2-widgets-react-dev": e } = n, t = {
          ...await e()
        };
        return Object.defineProperty(t, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__vis2TechnicWidgets",
      async get() {
        a.react.loaded = true;
        const { react: e } = n, t = {
          ...await e()
        };
        return Object.defineProperty(t, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__vis2TechnicWidgets",
      async get() {
        a["react-dom"].loaded = true;
        const { "react-dom": e } = n, t = {
          ...await e()
        };
        return Object.defineProperty(t, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react/jsx-runtime": {
      name: "react/jsx-runtime",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__vis2TechnicWidgets",
      async get() {
        a["react/jsx-runtime"].loaded = true;
        const { "react/jsx-runtime": e } = n, t = {
          ...await e()
        };
        return Object.defineProperty(t, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  };
  s = [];
})();
export {
  __tla,
  s as usedRemotes,
  a as usedShared
};
