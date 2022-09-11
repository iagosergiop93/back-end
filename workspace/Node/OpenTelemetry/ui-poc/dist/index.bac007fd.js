// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jFZnV":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "47d2ea5ebac007fd";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7W6wI":[function(require,module,exports) {
var _sdkTraceBase = require("@opentelemetry/sdk-trace-base");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _instrumentationDocumentLoad = require("@opentelemetry/instrumentation-document-load");
var _contextZone = require("@opentelemetry/context-zone");
var _instrumentation = require("@opentelemetry/instrumentation");
var _instrumentationXmlHttpRequest = require("@opentelemetry/instrumentation-xml-http-request");
const { OTLPTraceExporter  } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource  } = require('@opentelemetry/resources');
const { SemanticResourceAttributes  } = require('@opentelemetry/semantic-conventions');
const provider = new _sdkTraceWeb.WebTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'ui-poc'
    })
});
const exporter = new OTLPTraceExporter({
    url: 'http://localhost:6832/v1/traces',
    headers: {
    }
});
provider.addSpanProcessor(new _sdkTraceBase.BatchSpanProcessor(exporter));
provider.register({
    // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
    contextManager: new _contextZone.ZoneContextManager()
});
// Registering instrumentations
_instrumentation.registerInstrumentations({
    instrumentations: [
        new _instrumentationDocumentLoad.DocumentLoadInstrumentation(),
        new _instrumentationXmlHttpRequest.XMLHttpRequestInstrumentation()
    ]
});

},{"@opentelemetry/sdk-trace-web":"eXZZL","@opentelemetry/instrumentation-document-load":"exbkI","@opentelemetry/context-zone":"cmUfS","@opentelemetry/instrumentation":"3OTpd","@opentelemetry/sdk-trace-base":"jj5uM","@opentelemetry/resources":"loqSh","@opentelemetry/semantic-conventions":"lCgfj","@opentelemetry/exporter-trace-otlp-http":"9CGFP","@opentelemetry/instrumentation-xml-http-request":"jYPe9"}],"eXZZL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _webTracerProvider = require("./WebTracerProvider");
parcelHelpers.exportAll(_webTracerProvider, exports);
var _stackContextManager = require("./StackContextManager");
parcelHelpers.exportAll(_stackContextManager, exports);
var _performanceTimingNames = require("./enums/PerformanceTimingNames");
parcelHelpers.exportAll(_performanceTimingNames, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);

},{"./WebTracerProvider":"gYn17","./StackContextManager":"dXLQl","./enums/PerformanceTimingNames":"eNyqo","./types":"5dYQ0","./utils":"ccAWO","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gYn17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebTracerProvider", ()=>WebTracerProvider
);
var _sdkTraceBase = require("@opentelemetry/sdk-trace-base");
var _stackContextManager = require("./StackContextManager");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * This class represents a web tracer with {@link StackContextManager}
 */ var WebTracerProvider = function(_super) {
    __extends(WebTracerProvider1, _super);
    /**
     * Constructs a new Tracer instance.
     * @param config Web Tracer config
     */ function WebTracerProvider1(config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this, config) || this;
        if (config.contextManager) throw "contextManager should be defined in register method not in constructor";
        if (config.propagator) throw 'propagator should be defined in register method not in constructor';
        return _this;
    }
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */ WebTracerProvider1.prototype.register = function(config) {
        if (config === void 0) config = {
        };
        if (config.contextManager === undefined) config.contextManager = new _stackContextManager.StackContextManager();
        if (config.contextManager) config.contextManager.enable();
        _super.prototype.register.call(this, config);
    };
    return WebTracerProvider1;
}(_sdkTraceBase.BasicTracerProvider);

},{"@opentelemetry/sdk-trace-base":"jj5uM","./StackContextManager":"dXLQl","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jj5uM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _tracer = require("./Tracer");
parcelHelpers.exportAll(_tracer, exports);
var _basicTracerProvider = require("./BasicTracerProvider");
parcelHelpers.exportAll(_basicTracerProvider, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _consoleSpanExporter = require("./export/ConsoleSpanExporter");
parcelHelpers.exportAll(_consoleSpanExporter, exports);
var _inMemorySpanExporter = require("./export/InMemorySpanExporter");
parcelHelpers.exportAll(_inMemorySpanExporter, exports);
var _readableSpan = require("./export/ReadableSpan");
parcelHelpers.exportAll(_readableSpan, exports);
var _simpleSpanProcessor = require("./export/SimpleSpanProcessor");
parcelHelpers.exportAll(_simpleSpanProcessor, exports);
var _spanExporter = require("./export/SpanExporter");
parcelHelpers.exportAll(_spanExporter, exports);
var _noopSpanProcessor = require("./export/NoopSpanProcessor");
parcelHelpers.exportAll(_noopSpanProcessor, exports);
var _span = require("./Span");
parcelHelpers.exportAll(_span, exports);
var _spanProcessor = require("./SpanProcessor");
parcelHelpers.exportAll(_spanProcessor, exports);
var _timedEvent = require("./TimedEvent");
parcelHelpers.exportAll(_timedEvent, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./Tracer":"zYo79","./BasicTracerProvider":"bv1bF","./platform":"alGsY","./export/ConsoleSpanExporter":"hWVp2","./export/InMemorySpanExporter":"Yr1u5","./export/ReadableSpan":"fSt4P","./export/SimpleSpanProcessor":"Nq2MM","./export/SpanExporter":"lzLTj","./export/NoopSpanProcessor":"j2TGv","./Span":"3tWGt","./SpanProcessor":"iqrBb","./TimedEvent":"hdnwm","./types":"cwYEn","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"zYo79":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tracer", ()=>Tracer
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _span = require("./Span");
var _utility = require("./utility");
/**
 * This class represents a basic tracer.
 */ var Tracer = function() {
    /**
     * Constructs a new Tracer instance.
     */ function Tracer1(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        var localConfig = _utility.mergeConfig(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new _core.RandomIdGenerator();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */ Tracer1.prototype.startSpan = function(name, options, context) {
        var _a, _b;
        if (options === void 0) options = {
        };
        if (context === void 0) context = _api.context.active();
        if (_core.isTracingSuppressed(context)) {
            _api.diag.debug('Instrumentation suppressed, returning Noop Span');
            return _api.trace.wrapSpanContext(_api.INVALID_SPAN_CONTEXT);
        }
        var parentContext = getParent(options, context);
        var spanId = this._idGenerator.generateSpanId();
        var traceId;
        var traceState;
        var parentSpanId;
        if (!parentContext || !_api.trace.isSpanContextValid(parentContext)) // New root span.
        traceId = this._idGenerator.generateTraceId();
        else {
            // New child span.
            traceId = parentContext.traceId;
            traceState = parentContext.traceState;
            parentSpanId = parentContext.spanId;
        }
        var spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : _api.SpanKind.INTERNAL;
        var links = (_b = options.links) !== null && _b !== void 0 ? _b : [];
        var attributes = _core.sanitizeAttributes(options.attributes);
        // make sampling decision
        var samplingResult = this._sampler.shouldSample(options.root ? _api.trace.setSpanContext(context, _api.INVALID_SPAN_CONTEXT) : context, traceId, name, spanKind, attributes, links);
        var traceFlags = samplingResult.decision === _api.SamplingDecision.RECORD_AND_SAMPLED ? _api.TraceFlags.SAMPLED : _api.TraceFlags.NONE;
        var spanContext = {
            traceId: traceId,
            spanId: spanId,
            traceFlags: traceFlags,
            traceState: traceState
        };
        if (samplingResult.decision === _api.SamplingDecision.NOT_RECORD) {
            _api.diag.debug('Recording is off, propagating context in a non-recording span');
            return _api.trace.wrapSpanContext(spanContext);
        }
        var span = new _span.Span(this, context, name, spanContext, spanKind, parentSpanId, links, options.startTime);
        // Set default attributes
        span.setAttributes(Object.assign(attributes, samplingResult.attributes));
        return span;
    };
    Tracer1.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) return;
        else if (arguments.length === 2) fn = arg2;
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : _api.context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = _api.trace.setSpan(parentContext, span);
        return _api.context.with(contextWithSpanSet, fn, undefined, span);
    };
    /** Returns the active {@link GeneralLimits}. */ Tracer1.prototype.getGeneralLimits = function() {
        return this._generalLimits;
    };
    /** Returns the active {@link SpanLimits}. */ Tracer1.prototype.getSpanLimits = function() {
        return this._spanLimits;
    };
    Tracer1.prototype.getActiveSpanProcessor = function() {
        return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer1;
}();
/**
 * Get the parent to assign to a started span. If options.parent is null,
 * do not assign a parent.
 *
 * @param options span options
 * @param context context to check for parent
 */ function getParent(options, context) {
    if (options.root) return undefined;
    return _api.trace.getSpanContext(context);
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","./Span":"3tWGt","./utility":"99Faf","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"6AC4z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageEntryMetadataFromString", ()=>_utils.baggageEntryMetadataFromString
);
parcelHelpers.export(exports, "isSpanContextValid", ()=>_spancontextUtils.isSpanContextValid
);
parcelHelpers.export(exports, "isValidTraceId", ()=>_spancontextUtils.isValidTraceId
);
parcelHelpers.export(exports, "isValidSpanId", ()=>_spancontextUtils.isValidSpanId
);
parcelHelpers.export(exports, "INVALID_SPANID", ()=>_invalidSpanConstants.INVALID_SPANID
);
parcelHelpers.export(exports, "INVALID_TRACEID", ()=>_invalidSpanConstants.INVALID_TRACEID
);
parcelHelpers.export(exports, "INVALID_SPAN_CONTEXT", ()=>_invalidSpanConstants.INVALID_SPAN_CONTEXT
);
parcelHelpers.export(exports, "context", ()=>context
);
parcelHelpers.export(exports, "trace", ()=>trace
);
parcelHelpers.export(exports, "propagation", ()=>propagation
);
parcelHelpers.export(exports, "diag", ()=>diag
);
var _context = require("./api/context");
var _trace = require("./api/trace");
var _propagation = require("./api/propagation");
var _diag = require("./api/diag");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _types = require("./baggage/types");
parcelHelpers.exportAll(_types, exports);
var _utils = require("./baggage/utils");
var _exception = require("./common/Exception");
parcelHelpers.exportAll(_exception, exports);
var _time = require("./common/Time");
parcelHelpers.exportAll(_time, exports);
var _diag1 = require("./diag");
parcelHelpers.exportAll(_diag1, exports);
var _textMapPropagator = require("./propagation/TextMapPropagator");
parcelHelpers.exportAll(_textMapPropagator, exports);
var _attributes = require("./trace/attributes");
parcelHelpers.exportAll(_attributes, exports);
var _link = require("./trace/link");
parcelHelpers.exportAll(_link, exports);
var _proxyTracer = require("./trace/ProxyTracer");
parcelHelpers.exportAll(_proxyTracer, exports);
var _proxyTracerProvider = require("./trace/ProxyTracerProvider");
parcelHelpers.exportAll(_proxyTracerProvider, exports);
var _sampler = require("./trace/Sampler");
parcelHelpers.exportAll(_sampler, exports);
var _samplingResult = require("./trace/SamplingResult");
parcelHelpers.exportAll(_samplingResult, exports);
var _spanContext = require("./trace/span_context");
parcelHelpers.exportAll(_spanContext, exports);
var _spanKind = require("./trace/span_kind");
parcelHelpers.exportAll(_spanKind, exports);
var _span = require("./trace/span");
parcelHelpers.exportAll(_span, exports);
var _spanOptions = require("./trace/SpanOptions");
parcelHelpers.exportAll(_spanOptions, exports);
var _status = require("./trace/status");
parcelHelpers.exportAll(_status, exports);
var _traceFlags = require("./trace/trace_flags");
parcelHelpers.exportAll(_traceFlags, exports);
var _traceState = require("./trace/trace_state");
parcelHelpers.exportAll(_traceState, exports);
var _tracerProvider = require("./trace/tracer_provider");
parcelHelpers.exportAll(_tracerProvider, exports);
var _tracer = require("./trace/tracer");
parcelHelpers.exportAll(_tracer, exports);
var _spancontextUtils = require("./trace/spancontext-utils");
var _invalidSpanConstants = require("./trace/invalid-span-constants");
var _context1 = require("./context/context");
parcelHelpers.exportAll(_context1, exports);
var _types1 = require("./context/types");
parcelHelpers.exportAll(_types1, exports);
var context = _context.ContextAPI.getInstance();
var trace = _trace.TraceAPI.getInstance();
var propagation = _propagation.PropagationAPI.getInstance();
var diag = _diag.DiagAPI.instance();
exports.default = {
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag
};

},{"./api/context":"1ZQ7h","./api/trace":"9U6uF","./api/propagation":"9PDZ8","./api/diag":"gZAmK","./baggage/types":"f2zck","./baggage/utils":"1FtTJ","./common/Exception":"2ca19","./common/Time":"ijv0S","./diag":"dfWAH","./propagation/TextMapPropagator":"fbpGl","./trace/attributes":"jS7z1","./trace/link":"8a8Ao","./trace/ProxyTracer":"4RJSP","./trace/ProxyTracerProvider":"5OsDv","./trace/Sampler":"kOtOq","./trace/SamplingResult":"9hHpb","./trace/span_context":"8kOz3","./trace/span_kind":"8JdQL","./trace/span":"6dsX7","./trace/SpanOptions":"aZc5i","./trace/status":"caBJ1","./trace/trace_flags":"58Fpe","./trace/trace_state":"7fKnu","./trace/tracer_provider":"dFDcb","./trace/tracer":"4f6Wy","./trace/spancontext-utils":"g40FB","./trace/invalid-span-constants":"9v7Cm","./context/context":"8Hj8X","./context/types":"BMV1s","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"1ZQ7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContextAPI", ()=>ContextAPI
);
var _noopContextManager = require("../context/NoopContextManager");
var _globalUtils = require("../internal/global-utils");
var _diag = require("./diag");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _noopContextManager.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */ var ContextAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function ContextAPI1() {
    }
    /** Get the singleton instance of the Context API */ ContextAPI1.getInstance = function() {
        if (!this._instance) this._instance = new ContextAPI1();
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ ContextAPI1.prototype.setGlobalContextManager = function(contextManager) {
        return _globalUtils.registerGlobal(API_NAME, contextManager, _diag.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */ ContextAPI1.prototype.active = function() {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ContextAPI1.prototype.with = function(context, fn, thisArg) {
        var _a;
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
            context,
            fn,
            thisArg
        ], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ ContextAPI1.prototype.bind = function(context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI1.prototype._getContextManager = function() {
        return _globalUtils.getGlobal(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */ ContextAPI1.prototype.disable = function() {
        this._getContextManager().disable();
        _globalUtils.unregisterGlobal(API_NAME, _diag.DiagAPI.instance());
    };
    return ContextAPI1;
}();

},{"../context/NoopContextManager":"gHU7f","../internal/global-utils":"h4XAN","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gHU7f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopContextManager", ()=>NoopContextManager
);
var _context = require("./context");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var NoopContextManager = function() {
    function NoopContextManager1() {
    }
    NoopContextManager1.prototype.active = function() {
        return _context.ROOT_CONTEXT;
    };
    NoopContextManager1.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        return fn.call.apply(fn, __spreadArray([
            thisArg
        ], args));
    };
    NoopContextManager1.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager1.prototype.enable = function() {
        return this;
    };
    NoopContextManager1.prototype.disable = function() {
        return this;
    };
    return NoopContextManager1;
}();

},{"./context":"8Hj8X","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8Hj8X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Get a key to uniquely identify a context value */ parcelHelpers.export(exports, "createContextKey", ()=>createContextKey
);
parcelHelpers.export(exports, "ROOT_CONTEXT", ()=>ROOT_CONTEXT
);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = function() {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ function BaseContext1(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function(key) {
            return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
            var context = new BaseContext1(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function(key) {
            var context = new BaseContext1(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext1;
}();
var ROOT_CONTEXT = new BaseContext();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"6YfbT":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h4XAN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerGlobal", ()=>registerGlobal
);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal
);
parcelHelpers.export(exports, "unregisterGlobal", ()=>unregisterGlobal
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _platform = require("../platform");
var _version = require("../version");
var _semver = require("./semver");
var major = _version.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) allowOverride = false;
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version.VERSION
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !_semver.isCompatible(globalVersion)) return;
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) delete api[type];
}

},{"../platform":"dO2ZQ","../version":"k412A","./semver":"9IXna","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dO2ZQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);

},{"./globalThis":"dRquK","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dRquK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis
);
var global = arguments[3];
var _globalThis = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : typeof window === 'object' ? window : typeof global === 'object' ? global : {
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"k412A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
var VERSION = '1.0.4';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9IXna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */ parcelHelpers.export(exports, "_makeCompatibilityCheck", ()=>_makeCompatibilityCheck
);
parcelHelpers.export(exports, "isCompatible", ()=>isCompatible
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _version = require("../version");
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([
        ownVersion
    ]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) // we cannot guarantee compatibility so we always return noop
    return function() {
        return false;
    };
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
        return globalVersion === ownVersion;
    };
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) return true;
        if (rejectedVersions.has(globalVersion)) return false;
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) // cannot parse other version
        // we cannot guarantee compatibility so we always noop
        return _reject(globalVersion);
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck(_version.VERSION);

},{"../version":"k412A","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gZAmK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagAPI", ()=>DiagAPI
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _componentLogger = require("../diag/ComponentLogger");
var _logLevelLogger = require("../diag/internal/logLevelLogger");
var _types = require("../diag/types");
var _globalUtils = require("../internal/global-utils");
var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */ var DiagAPI = function() {
    /**
     * Private internal constructor
     * @private
     */ function DiagAPI1() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var logger = _globalUtils.getGlobal('diag');
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName].apply(logger, args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function(logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) logLevel = _types.DiagLogLevel.INFO;
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = _globalUtils.getGlobal('diag');
            var newLogger = _logLevelLogger.createLogLevelDiagLogger(logLevel, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return _globalUtils.registerGlobal('diag', newLogger, self, true);
        };
        self.disable = function() {
            _globalUtils.unregisterGlobal(API_NAME, self);
        };
        self.createComponentLogger = function(options) {
            return new _componentLogger.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */ DiagAPI1.instance = function() {
        if (!this._instance) this._instance = new DiagAPI1();
        return this._instance;
    };
    return DiagAPI1;
}();

},{"../diag/ComponentLogger":"3nsjJ","../diag/internal/logLevelLogger":"d3Qu4","../diag/types":"f917i","../internal/global-utils":"h4XAN","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3nsjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagComponentLogger", ()=>DiagComponentLogger
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _globalUtils = require("../internal/global-utils");
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */ var DiagComponentLogger = function() {
    function DiagComponentLogger1(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger1.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger1.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger1.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger1.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger1.prototype.verbose = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger1;
}();
function logProxy(funcName, namespace, args) {
    var logger = _globalUtils.getGlobal('diag');
    // shortcut if logger not set
    if (!logger) return;
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}

},{"../internal/global-utils":"h4XAN","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"d3Qu4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLogLevelDiagLogger", ()=>createLogLevelDiagLogger
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _types = require("../types");
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types.DiagLogLevel.NONE) maxLevel = _types.DiagLogLevel.NONE;
    else if (maxLevel > _types.DiagLogLevel.ALL) maxLevel = _types.DiagLogLevel.ALL;
    // In case the logger is null or undefined
    logger = logger || {
    };
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) return theFunc.bind(logger);
        return function() {
        };
    }
    return {
        error: _filterFunc('error', _types.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types.DiagLogLevel.WARN),
        info: _filterFunc('info', _types.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types.DiagLogLevel.VERBOSE)
    };
}

},{"../types":"f917i","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"f917i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagLogLevel", ()=>DiagLogLevel
);
var DiagLogLevel;
(function(DiagLogLevel1) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel1[DiagLogLevel1["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel1[DiagLogLevel1["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel1[DiagLogLevel1["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel1[DiagLogLevel1["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel1[DiagLogLevel1["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel1[DiagLogLevel1["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel1[DiagLogLevel1["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9U6uF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceAPI", ()=>TraceAPI
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _globalUtils = require("../internal/global-utils");
var _proxyTracerProvider = require("../trace/ProxyTracerProvider");
var _spancontextUtils = require("../trace/spancontext-utils");
var _contextUtils = require("../trace/context-utils");
var _diag = require("./diag");
var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */ var TraceAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function TraceAPI1() {
        this._proxyTracerProvider = new _proxyTracerProvider.ProxyTracerProvider();
        this.wrapSpanContext = _spancontextUtils.wrapSpanContext;
        this.isSpanContextValid = _spancontextUtils.isSpanContextValid;
        this.deleteSpan = _contextUtils.deleteSpan;
        this.getSpan = _contextUtils.getSpan;
        this.getSpanContext = _contextUtils.getSpanContext;
        this.setSpan = _contextUtils.setSpan;
        this.setSpanContext = _contextUtils.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */ TraceAPI1.getInstance = function() {
        if (!this._instance) this._instance = new TraceAPI1();
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ TraceAPI1.prototype.setGlobalTracerProvider = function(provider) {
        var success = _globalUtils.registerGlobal(API_NAME, this._proxyTracerProvider, _diag.DiagAPI.instance());
        if (success) this._proxyTracerProvider.setDelegate(provider);
        return success;
    };
    /**
     * Returns the global tracer provider.
     */ TraceAPI1.prototype.getTracerProvider = function() {
        return _globalUtils.getGlobal(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */ TraceAPI1.prototype.getTracer = function(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */ TraceAPI1.prototype.disable = function() {
        _globalUtils.unregisterGlobal(API_NAME, _diag.DiagAPI.instance());
        this._proxyTracerProvider = new _proxyTracerProvider.ProxyTracerProvider();
    };
    return TraceAPI1;
}();

},{"../internal/global-utils":"h4XAN","../trace/ProxyTracerProvider":"5OsDv","../trace/spancontext-utils":"g40FB","../trace/context-utils":"c8keb","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5OsDv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProxyTracerProvider", ()=>ProxyTracerProvider
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _proxyTracer = require("./ProxyTracer");
var _noopTracerProvider = require("./NoopTracerProvider");
var NOOP_TRACER_PROVIDER = new _noopTracerProvider.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */ var ProxyTracerProvider = function() {
    function ProxyTracerProvider1() {
    }
    /**
     * Get a {@link ProxyTracer}
     */ ProxyTracerProvider1.prototype.getTracer = function(name, version) {
        var _a;
        return (_a = this.getDelegateTracer(name, version)) !== null && _a !== void 0 ? _a : new _proxyTracer.ProxyTracer(this, name, version);
    };
    ProxyTracerProvider1.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */ ProxyTracerProvider1.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider1.prototype.getDelegateTracer = function(name, version) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version);
    };
    return ProxyTracerProvider1;
}();

},{"./ProxyTracer":"4RJSP","./NoopTracerProvider":"j8CJP","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"4RJSP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProxyTracer", ()=>ProxyTracer
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _noopTracer = require("./NoopTracer");
var NOOP_TRACER = new _noopTracer.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */ var ProxyTracer = function() {
    function ProxyTracer1(_provider, name, version) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
    }
    ProxyTracer1.prototype.startSpan = function(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer1.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ ProxyTracer1.prototype._getTracer = function() {
        if (this._delegate) return this._delegate;
        var tracer = this._provider.getDelegateTracer(this.name, this.version);
        if (!tracer) return NOOP_TRACER;
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer1;
}();

},{"./NoopTracer":"ciEOJ","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"ciEOJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTracer", ()=>NoopTracer
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _context = require("../api/context");
var _contextUtils = require("../trace/context-utils");
var _nonRecordingSpan = require("./NonRecordingSpan");
var _spancontextUtils = require("./spancontext-utils");
var context = _context.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */ var NoopTracer = function() {
    function NoopTracer1() {
    }
    // startSpan starts a noop span.
    NoopTracer1.prototype.startSpan = function(name, options, context1) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) return new _nonRecordingSpan.NonRecordingSpan();
        var parentFromContext = context1 && _contextUtils.getSpanContext(context1);
        if (isSpanContext(parentFromContext) && _spancontextUtils.isSpanContextValid(parentFromContext)) return new _nonRecordingSpan.NonRecordingSpan(parentFromContext);
        else return new _nonRecordingSpan.NonRecordingSpan();
    };
    NoopTracer1.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) return;
        else if (arguments.length === 2) fn = arg2;
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = _contextUtils.setSpan(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer1;
}();
function isSpanContext(spanContext) {
    return typeof spanContext === 'object' && typeof spanContext['spanId'] === 'string' && typeof spanContext['traceId'] === 'string' && typeof spanContext['traceFlags'] === 'number';
}

},{"../api/context":"1ZQ7h","../trace/context-utils":"c8keb","./NonRecordingSpan":"80R4i","./spancontext-utils":"g40FB","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"c8keb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */ parcelHelpers.export(exports, "getSpan", ()=>getSpan
);
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */ parcelHelpers.export(exports, "setSpan", ()=>setSpan
);
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */ parcelHelpers.export(exports, "deleteSpan", ()=>deleteSpan
);
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */ parcelHelpers.export(exports, "setSpanContext", ()=>setSpanContext
);
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */ parcelHelpers.export(exports, "getSpanContext", ()=>getSpanContext
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _context = require("../context/context");
var _nonRecordingSpan = require("./NonRecordingSpan");
/**
 * span key
 */ var SPAN_KEY = _context.createContextKey('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new _nonRecordingSpan.NonRecordingSpan(spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}

},{"../context/context":"8Hj8X","./NonRecordingSpan":"80R4i","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"80R4i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NonRecordingSpan", ()=>NonRecordingSpan
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _invalidSpanConstants = require("./invalid-span-constants");
/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */ var NonRecordingSpan = function() {
    function NonRecordingSpan1(_spanContext) {
        if (_spanContext === void 0) _spanContext = _invalidSpanConstants.INVALID_SPAN_CONTEXT;
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan1.prototype.spanContext = function() {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.setAttributes = function(_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.setStatus = function(_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.updateName = function(_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.end = function(_endTime) {
    };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan1.prototype.isRecording = function() {
        return false;
    };
    // By default does nothing
    NonRecordingSpan1.prototype.recordException = function(_exception, _time) {
    };
    return NonRecordingSpan1;
}();

},{"./invalid-span-constants":"9v7Cm","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9v7Cm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INVALID_SPANID", ()=>INVALID_SPANID
);
parcelHelpers.export(exports, "INVALID_TRACEID", ()=>INVALID_TRACEID
);
parcelHelpers.export(exports, "INVALID_SPAN_CONTEXT", ()=>INVALID_SPAN_CONTEXT
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _traceFlags = require("./trace_flags");
var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _traceFlags.TraceFlags.NONE
};

},{"./trace_flags":"58Fpe","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"58Fpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceFlags", ()=>TraceFlags
);
var TraceFlags;
(function(TraceFlags1) {
    /** Represents no flag set. */ TraceFlags1[TraceFlags1["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags1[TraceFlags1["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"g40FB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidTraceId", ()=>isValidTraceId
);
parcelHelpers.export(exports, "isValidSpanId", ()=>isValidSpanId
);
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */ parcelHelpers.export(exports, "isSpanContextValid", ()=>isSpanContextValid
);
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */ parcelHelpers.export(exports, "wrapSpanContext", ()=>wrapSpanContext
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _invalidSpanConstants = require("./invalid-span-constants");
var _nonRecordingSpan = require("./NonRecordingSpan");
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalidSpanConstants.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalidSpanConstants.INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new _nonRecordingSpan.NonRecordingSpan(spanContext);
}

},{"./invalid-span-constants":"9v7Cm","./NonRecordingSpan":"80R4i","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"j8CJP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTracerProvider", ()=>NoopTracerProvider
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _noopTracer = require("./NoopTracer");
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */ var NoopTracerProvider = function() {
    function NoopTracerProvider1() {
    }
    NoopTracerProvider1.prototype.getTracer = function(_name, _version) {
        return new _noopTracer.NoopTracer();
    };
    return NoopTracerProvider1;
}();

},{"./NoopTracer":"ciEOJ","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9PDZ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PropagationAPI", ()=>PropagationAPI
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _globalUtils = require("../internal/global-utils");
var _noopTextMapPropagator = require("../propagation/NoopTextMapPropagator");
var _textMapPropagator = require("../propagation/TextMapPropagator");
var _contextHelpers = require("../baggage/context-helpers");
var _utils = require("../baggage/utils");
var _diag = require("./diag");
var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _noopTextMapPropagator.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */ var PropagationAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function PropagationAPI1() {
        this.createBaggage = _utils.createBaggage;
        this.getBaggage = _contextHelpers.getBaggage;
        this.setBaggage = _contextHelpers.setBaggage;
        this.deleteBaggage = _contextHelpers.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */ PropagationAPI1.getInstance = function() {
        if (!this._instance) this._instance = new PropagationAPI1();
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */ PropagationAPI1.prototype.setGlobalPropagator = function(propagator) {
        return _globalUtils.registerGlobal(API_NAME, propagator, _diag.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */ PropagationAPI1.prototype.inject = function(context, carrier, setter) {
        if (setter === void 0) setter = _textMapPropagator.defaultTextMapSetter;
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */ PropagationAPI1.prototype.extract = function(context, carrier, getter) {
        if (getter === void 0) getter = _textMapPropagator.defaultTextMapGetter;
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */ PropagationAPI1.prototype.fields = function() {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */ PropagationAPI1.prototype.disable = function() {
        _globalUtils.unregisterGlobal(API_NAME, _diag.DiagAPI.instance());
    };
    PropagationAPI1.prototype._getGlobalPropagator = function() {
        return _globalUtils.getGlobal(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI1;
}();

},{"../internal/global-utils":"h4XAN","../propagation/NoopTextMapPropagator":"5aVXl","../propagation/TextMapPropagator":"fbpGl","../baggage/context-helpers":"lnCoA","../baggage/utils":"1FtTJ","./diag":"gZAmK","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5aVXl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopTextMapPropagator", ()=>NoopTextMapPropagator
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * No-op implementations of {@link TextMapPropagator}.
 */ var NoopTextMapPropagator = function() {
    function NoopTextMapPropagator1() {
    }
    /** Noop inject function does nothing */ NoopTextMapPropagator1.prototype.inject = function(_context, _carrier) {
    };
    /** Noop extract function does nothing and returns the input context */ NoopTextMapPropagator1.prototype.extract = function(context, _carrier) {
        return context;
    };
    NoopTextMapPropagator1.prototype.fields = function() {
        return [];
    };
    return NoopTextMapPropagator1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"fbpGl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTextMapGetter", ()=>defaultTextMapGetter
);
parcelHelpers.export(exports, "defaultTextMapSetter", ()=>defaultTextMapSetter
);
var defaultTextMapGetter = {
    get: function(carrier, key) {
        if (carrier == null) return undefined;
        return carrier[key];
    },
    keys: function(carrier) {
        if (carrier == null) return [];
        return Object.keys(carrier);
    }
};
var defaultTextMapSetter = {
    set: function(carrier, key, value) {
        if (carrier == null) return;
        carrier[key] = value;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lnCoA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */ parcelHelpers.export(exports, "getBaggage", ()=>getBaggage
);
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */ parcelHelpers.export(exports, "setBaggage", ()=>setBaggage
);
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */ parcelHelpers.export(exports, "deleteBaggage", ()=>deleteBaggage
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _context = require("../context/context");
/**
 * Baggage key
 */ var BAGGAGE_KEY = _context.createContextKey('OpenTelemetry Baggage Key');
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}

},{"../context/context":"8Hj8X","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"1FtTJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */ parcelHelpers.export(exports, "createBaggage", ()=>createBaggage
);
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */ parcelHelpers.export(exports, "baggageEntryMetadataFromString", ()=>baggageEntryMetadataFromString
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _diag = require("../api/diag");
var _baggageImpl = require("./internal/baggage-impl");
var _symbol = require("./internal/symbol");
var diag = _diag.DiagAPI.instance();
function createBaggage(entries) {
    if (entries === void 0) entries = {
    };
    return new _baggageImpl.BaggageImpl(new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _symbol.baggageEntryMetadataSymbol,
        toString: function() {
            return str;
        }
    };
}

},{"../api/diag":"gZAmK","./internal/baggage-impl":"1JRmx","./internal/symbol":"bwKBN","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"1JRmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaggageImpl", ()=>BaggageImpl
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var BaggageImpl = function() {
    function BaggageImpl1(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl1.prototype.getEntry = function(key) {
        var entry = this._entries.get(key);
        if (!entry) return undefined;
        return Object.assign({
        }, entry);
    };
    BaggageImpl1.prototype.getAllEntries = function() {
        return Array.from(this._entries.entries()).map(function(_a) {
            var k = _a[0], v = _a[1];
            return [
                k,
                v
            ];
        });
    };
    BaggageImpl1.prototype.setEntry = function(key, entry) {
        var newBaggage = new BaggageImpl1(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl1.prototype.removeEntry = function(key) {
        var newBaggage = new BaggageImpl1(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl1.prototype.removeEntries = function() {
        var keys = [];
        for(var _i = 0; _i < arguments.length; _i++)keys[_i] = arguments[_i];
        var newBaggage = new BaggageImpl1(this._entries);
        for(var _a = 0, keys_1 = keys; _a < keys_1.length; _a++){
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl1.prototype.clear = function() {
        return new BaggageImpl1();
    };
    return BaggageImpl1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"bwKBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageEntryMetadataSymbol", ()=>baggageEntryMetadataSymbol
);
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"f2zck":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2ca19":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"ijv0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dfWAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _consoleLogger = require("./consoleLogger");
parcelHelpers.exportAll(_consoleLogger, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./consoleLogger":"cqEiU","./types":"f917i","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cqEiU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DiagConsoleLogger", ()=>DiagConsoleLogger
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var consoleMap = [
    {
        n: 'error',
        c: 'error'
    },
    {
        n: 'warn',
        c: 'warn'
    },
    {
        n: 'info',
        c: 'info'
    },
    {
        n: 'debug',
        c: 'debug'
    },
    {
        n: 'verbose',
        c: 'trace'
    }, 
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */ var DiagConsoleLogger = function() {
    function DiagConsoleLogger1() {
        function _consoleFunc(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') // Not all environments support all functions
                    // eslint-disable-next-line no-console
                    theFunc = console.log;
                    // One last final check
                    if (typeof theFunc === 'function') return theFunc.apply(console, args);
                }
            };
        }
        for(var i = 0; i < consoleMap.length; i++)this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
    }
    return DiagConsoleLogger1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jS7z1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8a8Ao":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kOtOq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9hHpb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SamplingDecision", ()=>SamplingDecision
);
var SamplingDecision;
(function(SamplingDecision1) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision1[SamplingDecision1["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision1[SamplingDecision1["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision1[SamplingDecision1["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8kOz3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8JdQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpanKind", ()=>SpanKind
);
var SpanKind;
(function(SpanKind1) {
    /** Default value. Indicates that the span is used internally. */ SpanKind1[SpanKind1["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */ SpanKind1[SpanKind1["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */ SpanKind1[SpanKind1["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind1[SpanKind1["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind1[SpanKind1["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"6dsX7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"aZc5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"caBJ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpanStatusCode", ()=>SpanStatusCode
);
var SpanStatusCode;
(function(SpanStatusCode1) {
    /**
     * The default status.
     */ SpanStatusCode1[SpanStatusCode1["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode1[SpanStatusCode1["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode1[SpanStatusCode1["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"7fKnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dFDcb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"4f6Wy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"BMV1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dBsXh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baggageUtils", ()=>_utils
);
var _utils = require("./baggage/utils");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _w3CbaggagePropagator = require("./baggage/propagation/W3CBaggagePropagator");
parcelHelpers.exportAll(_w3CbaggagePropagator, exports);
var _attributes = require("./common/attributes");
parcelHelpers.exportAll(_attributes, exports);
var _globalErrorHandler = require("./common/global-error-handler");
parcelHelpers.exportAll(_globalErrorHandler, exports);
var _loggingErrorHandler = require("./common/logging-error-handler");
parcelHelpers.exportAll(_loggingErrorHandler, exports);
var _time = require("./common/time");
parcelHelpers.exportAll(_time, exports);
var _types = require("./common/types");
parcelHelpers.exportAll(_types, exports);
var _exportResult = require("./ExportResult");
parcelHelpers.exportAll(_exportResult, exports);
var _version = require("./version");
parcelHelpers.exportAll(_version, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _composite = require("./propagation/composite");
parcelHelpers.exportAll(_composite, exports);
var _w3CtraceContextPropagator = require("./trace/W3CTraceContextPropagator");
parcelHelpers.exportAll(_w3CtraceContextPropagator, exports);
var _idGenerator = require("./trace/IdGenerator");
parcelHelpers.exportAll(_idGenerator, exports);
var _rpcMetadata = require("./trace/rpc-metadata");
parcelHelpers.exportAll(_rpcMetadata, exports);
var _alwaysOffSampler = require("./trace/sampler/AlwaysOffSampler");
parcelHelpers.exportAll(_alwaysOffSampler, exports);
var _alwaysOnSampler = require("./trace/sampler/AlwaysOnSampler");
parcelHelpers.exportAll(_alwaysOnSampler, exports);
var _parentBasedSampler = require("./trace/sampler/ParentBasedSampler");
parcelHelpers.exportAll(_parentBasedSampler, exports);
var _traceIdRatioBasedSampler = require("./trace/sampler/TraceIdRatioBasedSampler");
parcelHelpers.exportAll(_traceIdRatioBasedSampler, exports);
var _suppressTracing = require("./trace/suppress-tracing");
parcelHelpers.exportAll(_suppressTracing, exports);
var _traceState = require("./trace/TraceState");
parcelHelpers.exportAll(_traceState, exports);
var _environment = require("./utils/environment");
parcelHelpers.exportAll(_environment, exports);
var _merge = require("./utils/merge");
parcelHelpers.exportAll(_merge, exports);
var _sampling = require("./utils/sampling");
parcelHelpers.exportAll(_sampling, exports);
var _url = require("./utils/url");
parcelHelpers.exportAll(_url, exports);
var _wrap = require("./utils/wrap");
parcelHelpers.exportAll(_wrap, exports);
parcelHelpers.exportAll(_version, exports);

},{"./baggage/utils":"kLEpF","./baggage/propagation/W3CBaggagePropagator":"3dmoE","./common/attributes":"bYq4q","./common/global-error-handler":"hKz5C","./common/logging-error-handler":"8D49l","./common/time":"oOZeC","./common/types":"dYgp0","./ExportResult":"2fJSh","./version":"2JrQh","./platform":"a3NCV","./propagation/composite":"8mhmB","./trace/W3CTraceContextPropagator":"j30mQ","./trace/IdGenerator":"fzitc","./trace/rpc-metadata":"eyPsO","./trace/sampler/AlwaysOffSampler":"9KkRt","./trace/sampler/AlwaysOnSampler":"jalnp","./trace/sampler/ParentBasedSampler":"gERye","./trace/sampler/TraceIdRatioBasedSampler":"69Ird","./trace/suppress-tracing":"51l3B","./trace/TraceState":"9sU1J","./utils/environment":"k6o1y","./utils/merge":"6klbq","./utils/sampling":"fxM1u","./utils/url":"lafWE","./utils/wrap":"kPm4I","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kLEpF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeKeyPairs", ()=>serializeKeyPairs
);
parcelHelpers.export(exports, "getKeyPairs", ()=>getKeyPairs
);
parcelHelpers.export(exports, "parsePairKeyValue", ()=>parsePairKeyValue
);
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */ parcelHelpers.export(exports, "parseKeyPairsIntoRecord", ()=>parseKeyPairsIntoRecord
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _constants = require("./constants");
function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce(function(hValue, current) {
        var value = "" + hValue + (hValue !== '' ? _constants.BAGGAGE_ITEMS_SEPARATOR : '') + current;
        return value.length > _constants.BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
    }, '');
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(function(_a) {
        var key = _a[0], value = _a[1];
        return encodeURIComponent(key) + "=" + encodeURIComponent(value.value);
    });
}
function parsePairKeyValue(entry) {
    var valueProps = entry.split(_constants.BAGGAGE_PROPERTIES_SEPARATOR);
    if (valueProps.length <= 0) return;
    var keyPairPart = valueProps.shift();
    if (!keyPairPart) return;
    var keyPair = keyPairPart.split(_constants.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (keyPair.length !== 2) return;
    var key = decodeURIComponent(keyPair[0].trim());
    var value = decodeURIComponent(keyPair[1].trim());
    var metadata;
    if (valueProps.length > 0) metadata = _api.baggageEntryMetadataFromString(valueProps.join(_constants.BAGGAGE_PROPERTIES_SEPARATOR));
    return {
        key: key,
        value: value,
        metadata: metadata
    };
}
function parseKeyPairsIntoRecord(value) {
    if (typeof value !== 'string' || value.length === 0) return {
    };
    return value.split(_constants.BAGGAGE_ITEMS_SEPARATOR).map(function(entry) {
        return parsePairKeyValue(entry);
    }).filter(function(keyPair) {
        return keyPair !== undefined && keyPair.value.length > 0;
    }).reduce(function(headers, keyPair) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        headers[keyPair.key] = keyPair.value;
        return headers;
    }, {
    });
}

},{"@opentelemetry/api":"6AC4z","./constants":"bxSBV","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"bxSBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BAGGAGE_KEY_PAIR_SEPARATOR", ()=>BAGGAGE_KEY_PAIR_SEPARATOR
);
parcelHelpers.export(exports, "BAGGAGE_PROPERTIES_SEPARATOR", ()=>BAGGAGE_PROPERTIES_SEPARATOR
);
parcelHelpers.export(exports, "BAGGAGE_ITEMS_SEPARATOR", ()=>BAGGAGE_ITEMS_SEPARATOR
);
parcelHelpers.export(exports, "BAGGAGE_HEADER", ()=>BAGGAGE_HEADER
);
parcelHelpers.export(exports, "BAGGAGE_MAX_NAME_VALUE_PAIRS", ()=>BAGGAGE_MAX_NAME_VALUE_PAIRS
);
parcelHelpers.export(exports, "BAGGAGE_MAX_PER_NAME_VALUE_PAIRS", ()=>BAGGAGE_MAX_PER_NAME_VALUE_PAIRS
);
parcelHelpers.export(exports, "BAGGAGE_MAX_TOTAL_LENGTH", ()=>BAGGAGE_MAX_TOTAL_LENGTH
);
var BAGGAGE_KEY_PAIR_SEPARATOR = '=';
var BAGGAGE_PROPERTIES_SEPARATOR = ';';
var BAGGAGE_ITEMS_SEPARATOR = ',';
var BAGGAGE_HEADER = 'baggage';
var BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
var BAGGAGE_MAX_TOTAL_LENGTH = 8192;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3dmoE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "W3CBaggagePropagator", ()=>W3CBaggagePropagator
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _suppressTracing = require("../../trace/suppress-tracing");
var _constants = require("../constants");
var _utils = require("../utils");
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */ var W3CBaggagePropagator = function() {
    function W3CBaggagePropagator1() {
    }
    W3CBaggagePropagator1.prototype.inject = function(context, carrier, setter) {
        var baggage = _api.propagation.getBaggage(context);
        if (!baggage || _suppressTracing.isTracingSuppressed(context)) return;
        var keyPairs = _utils.getKeyPairs(baggage).filter(function(pair) {
            return pair.length <= _constants.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        }).slice(0, _constants.BAGGAGE_MAX_NAME_VALUE_PAIRS);
        var headerValue = _utils.serializeKeyPairs(keyPairs);
        if (headerValue.length > 0) setter.set(carrier, _constants.BAGGAGE_HEADER, headerValue);
    };
    W3CBaggagePropagator1.prototype.extract = function(context, carrier, getter) {
        var headerValue = getter.get(carrier, _constants.BAGGAGE_HEADER);
        if (!headerValue) return context;
        var baggage = {
        };
        if (headerValue.length === 0) return context;
        var pairs = headerValue.split(_constants.BAGGAGE_ITEMS_SEPARATOR);
        pairs.forEach(function(entry) {
            var keyPair = _utils.parsePairKeyValue(entry);
            if (keyPair) {
                var baggageEntry = {
                    value: keyPair.value
                };
                if (keyPair.metadata) baggageEntry.metadata = keyPair.metadata;
                baggage[keyPair.key] = baggageEntry;
            }
        });
        if (Object.entries(baggage).length === 0) return context;
        return _api.propagation.setBaggage(context, _api.propagation.createBaggage(baggage));
    };
    W3CBaggagePropagator1.prototype.fields = function() {
        return [
            _constants.BAGGAGE_HEADER
        ];
    };
    return W3CBaggagePropagator1;
}();

},{"@opentelemetry/api":"6AC4z","../../trace/suppress-tracing":"51l3B","../constants":"bxSBV","../utils":"kLEpF","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"51l3B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "suppressTracing", ()=>suppressTracing
);
parcelHelpers.export(exports, "unsuppressTracing", ()=>unsuppressTracing
);
parcelHelpers.export(exports, "isTracingSuppressed", ()=>isTracingSuppressed
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var SUPPRESS_TRACING_KEY = _api.createContextKey('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"bYq4q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitizeAttributes", ()=>sanitizeAttributes
);
parcelHelpers.export(exports, "isAttributeValue", ()=>isAttributeValue
);
function sanitizeAttributes(attributes) {
    var out = {
    };
    if (attributes == null || typeof attributes !== 'object') return out;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for(var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++){
        var _b = _a[_i], k = _b[0], v = _b[1];
        if (isAttributeValue(v)) {
            if (Array.isArray(v)) out[k] = v.slice();
            else out[k] = v;
        }
    }
    return out;
}
function isAttributeValue(val) {
    if (val == null) return true;
    if (Array.isArray(val)) return isHomogeneousAttributeValueArray(val);
    return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
    var type;
    for(var _i = 0, arr_1 = arr; _i < arr_1.length; _i++){
        var element = arr_1[_i];
        // null/undefined elements are allowed
        if (element == null) continue;
        if (!type) {
            if (isValidPrimitiveAttributeValue(element)) {
                type = typeof element;
                continue;
            }
            // encountered an invalid primitive
            return false;
        }
        if (typeof element === type) continue;
        return false;
    }
    return true;
}
function isValidPrimitiveAttributeValue(val) {
    switch(typeof val){
        case 'number':
            return true;
        case 'boolean':
            return true;
        case 'string':
            return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hKz5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set the global error handler
 * @param {ErrorHandler} handler
 */ parcelHelpers.export(exports, "setGlobalErrorHandler", ()=>setGlobalErrorHandler
);
/**
 * Return the global error handler
 * @param {Exception} ex
 */ parcelHelpers.export(exports, "globalErrorHandler", ()=>globalErrorHandler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _loggingErrorHandler = require("./logging-error-handler");
/** The global error handler delegate */ var delegateHandler = _loggingErrorHandler.loggingErrorHandler();
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    } catch (_a) {
    } // eslint-disable-line no-empty
}

},{"./logging-error-handler":"8D49l","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8D49l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a function that logs an error using the provided logger, or a
 * console logger if one was not provided.
 */ parcelHelpers.export(exports, "loggingErrorHandler", ()=>loggingErrorHandler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
function loggingErrorHandler() {
    return function(ex) {
        _api.diag.error(stringifyException(ex));
    };
}
/**
 * Converts an exception into a string representation
 * @param {Exception} ex
 */ function stringifyException(ex) {
    if (typeof ex === 'string') return ex;
    else return JSON.stringify(flattenException(ex));
}
/**
 * Flattens an exception into key-value pairs by traversing the prototype chain
 * and coercing values to strings. Duplicate properties will not be overwritten;
 * the first insert wins.
 */ function flattenException(ex) {
    var result = {
    };
    var current = ex;
    while(current !== null){
        Object.getOwnPropertyNames(current).forEach(function(propertyName) {
            if (result[propertyName]) return;
            var value = current[propertyName];
            if (value) result[propertyName] = String(value);
        });
        current = Object.getPrototypeOf(current);
    }
    return result;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"oOZeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */ parcelHelpers.export(exports, "hrTime", ()=>hrTime
);
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */ parcelHelpers.export(exports, "timeInputToHrTime", ()=>timeInputToHrTime
);
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */ parcelHelpers.export(exports, "hrTimeDuration", ()=>hrTimeDuration
);
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToTimeStamp", ()=>hrTimeToTimeStamp
);
/**
 * Convert hrTime to nanoseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToNanoseconds", ()=>hrTimeToNanoseconds
);
/**
 * Convert hrTime to milliseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToMilliseconds", ()=>hrTimeToMilliseconds
);
/**
 * Convert hrTime to microseconds.
 * @param time
 */ parcelHelpers.export(exports, "hrTimeToMicroseconds", ()=>hrTimeToMicroseconds
);
/**
 * check if time is HrTime
 * @param value
 */ parcelHelpers.export(exports, "isTimeInputHrTime", ()=>isTimeInputHrTime
);
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */ parcelHelpers.export(exports, "isTimeInput", ()=>isTimeInput
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _platform = require("../platform");
var NANOSECOND_DIGITS = 9;
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
/**
 * Converts a number to HrTime, HrTime = [number, number].
 * The first number is UNIX Epoch time in seconds since 00:00:00 UTC on 1 January 1970.
 * The second number represents the partial second elapsed since Unix Epoch time represented by first number in nanoseconds.
 * For example, 2021-01-01T12:30:10.150Z in UNIX Epoch time in milliseconds is represented as 1609504210150.
 * numberToHrtime calculates the first number by converting and truncating the Epoch time in milliseconds to seconds:
 * HrTime[0] = Math.trunc(1609504210150 / 1000) = 1609504210.
 * numberToHrtime calculates the second number by converting the digits after the decimal point of the subtraction, (1609504210150 / 1000) - HrTime[0], to nanoseconds:
 * HrTime[1] = Number((1609504210.150 - HrTime[0]).toFixed(9)) * SECOND_TO_NANOSECONDS = 150000000.
 * This is represented in HrTime format as [1609504210, 150000000].
 * @param epochMillis
 */ function numberToHrtime(epochMillis) {
    var epochSeconds = epochMillis / 1000;
    // Decimals only.
    var seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    var nanos = Number((epochSeconds - seconds).toFixed(NANOSECOND_DIGITS)) * SECOND_TO_NANOSECONDS;
    return [
        seconds,
        nanos
    ];
}
function getTimeOrigin() {
    var timeOrigin = _platform.otperformance.timeOrigin;
    if (typeof timeOrigin !== 'number') {
        var perf = _platform.otperformance;
        timeOrigin = perf.timing && perf.timing.fetchStart;
    }
    return timeOrigin;
}
function hrTime(performanceNow) {
    var timeOrigin = numberToHrtime(getTimeOrigin());
    var now = numberToHrtime(typeof performanceNow === 'number' ? performanceNow : _platform.otperformance.now());
    var seconds = timeOrigin[0] + now[0];
    var nanos = timeOrigin[1] + now[1];
    // Nanoseconds
    if (nanos > SECOND_TO_NANOSECONDS) {
        nanos -= SECOND_TO_NANOSECONDS;
        seconds += 1;
    }
    return [
        seconds,
        nanos
    ];
}
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) return time;
    else if (typeof time === 'number') {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < getTimeOrigin()) return hrTime(time);
        else // epoch milliseconds or performance.timeOrigin
        return numberToHrtime(time);
    } else if (time instanceof Date) return numberToHrtime(time.getTime());
    else throw TypeError('Invalid input type');
}
function hrTimeDuration(startTime, endTime) {
    var seconds = endTime[0] - startTime[0];
    var nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [
        seconds,
        nanos
    ];
}
function hrTimeToTimeStamp(time) {
    var precision = NANOSECOND_DIGITS;
    var tmp = "" + '0'.repeat(precision) + time[1] + "Z";
    var nanoString = tmp.substr(tmp.length - precision - 1);
    var date = new Date(time[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
function hrTimeToMilliseconds(time) {
    return Math.round(time[0] * 1000 + time[1] / 1000000);
}
function hrTimeToMicroseconds(time) {
    return Math.round(time[0] * 1000000 + time[1] / 1000);
}
function isTimeInputHrTime(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number';
}
function isTimeInput(value) {
    return isTimeInputHrTime(value) || typeof value === 'number' || value instanceof Date;
}

},{"../platform":"a3NCV","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"a3NCV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _environment = require("./environment");
parcelHelpers.exportAll(_environment, exports);
var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);
var _hexToBase64 = require("./hex-to-base64");
parcelHelpers.exportAll(_hexToBase64, exports);
var _randomIdGenerator = require("./RandomIdGenerator");
parcelHelpers.exportAll(_randomIdGenerator, exports);
var _performance = require("./performance");
parcelHelpers.exportAll(_performance, exports);
var _sdkInfo = require("./sdk-info");
parcelHelpers.exportAll(_sdkInfo, exports);
var _timerUtil = require("./timer-util");
parcelHelpers.exportAll(_timerUtil, exports);

},{"./environment":"a8j04","./globalThis":"cav7A","./hex-to-base64":"aSaRw","./RandomIdGenerator":"2zz95","./performance":"3XRRP","./sdk-info":"3i6TP","./timer-util":"gOhxt","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"a8j04":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets the environment variables
 */ parcelHelpers.export(exports, "getEnv", ()=>getEnv
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _environment = require("../../utils/environment");
var _globalThis = require("./globalThis");
function getEnv() {
    var globalEnv = _environment.parseEnvironment(_globalThis._globalThis);
    return Object.assign({
    }, _environment.DEFAULT_ENVIRONMENT, globalEnv);
}

},{"../../utils/environment":"k6o1y","./globalThis":"cav7A","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"k6o1y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT", ()=>DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
);
parcelHelpers.export(exports, "DEFAULT_ATTRIBUTE_COUNT_LIMIT", ()=>DEFAULT_ATTRIBUTE_COUNT_LIMIT
);
parcelHelpers.export(exports, "DEFAULT_ENVIRONMENT", ()=>DEFAULT_ENVIRONMENT
);
/**
 * Parses environment values
 * @param values
 */ parcelHelpers.export(exports, "parseEnvironment", ()=>parseEnvironment
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _sampling = require("./sampling");
var DEFAULT_LIST_SEPARATOR = ',';
/**
 * Environment interface to define all names
 */ var ENVIRONMENT_NUMBERS_KEYS = [
    'OTEL_BSP_EXPORT_TIMEOUT',
    'OTEL_BSP_MAX_EXPORT_BATCH_SIZE',
    'OTEL_BSP_MAX_QUEUE_SIZE',
    'OTEL_BSP_SCHEDULE_DELAY',
    'OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT',
    'OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT',
    'OTEL_SPAN_EVENT_COUNT_LIMIT',
    'OTEL_SPAN_LINK_COUNT_LIMIT', 
];
function isEnvVarANumber(key) {
    return ENVIRONMENT_NUMBERS_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_LISTS_KEYS = [
    'OTEL_NO_PATCH_MODULES',
    'OTEL_PROPAGATORS', 
];
function isEnvVarAList(key) {
    return ENVIRONMENT_LISTS_KEYS.indexOf(key) > -1;
}
var DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
var DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
var DEFAULT_ENVIRONMENT = {
    CONTAINER_NAME: '',
    ECS_CONTAINER_METADATA_URI_V4: '',
    ECS_CONTAINER_METADATA_URI: '',
    HOSTNAME: '',
    KUBERNETES_SERVICE_HOST: '',
    NAMESPACE: '',
    OTEL_BSP_EXPORT_TIMEOUT: 30000,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5000,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: '',
    OTEL_EXPORTER_JAEGER_ENDPOINT: '',
    OTEL_EXPORTER_JAEGER_PASSWORD: '',
    OTEL_EXPORTER_JAEGER_USER: '',
    OTEL_EXPORTER_OTLP_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: '',
    OTEL_EXPORTER_OTLP_HEADERS: '',
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: '',
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: '',
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: 'http://localhost:9411/api/v2/spans',
    OTEL_LOG_LEVEL: _api.DiagLogLevel.INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: [
        'tracecontext',
        'baggage'
    ],
    OTEL_RESOURCE_ATTRIBUTES: '',
    OTEL_SERVICE_NAME: '',
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_TRACES_EXPORTER: 'none',
    OTEL_TRACES_SAMPLER: _sampling.TracesSamplerValues.ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: ''
};
/**
 * Parses a variable as number with number validation
 * @param name
 * @param environment
 * @param values
 * @param min
 * @param max
 */ function parseNumber(name, environment, values, min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    if (typeof values[name] !== 'undefined') {
        var value = Number(values[name]);
        if (!isNaN(value)) {
            if (value < min) environment[name] = min;
            else if (value > max) environment[name] = max;
            else environment[name] = value;
        }
    }
}
/**
 * Parses list-like strings from input into output.
 * @param name
 * @param environment
 * @param values
 * @param separator
 */ function parseStringList(name, output, input, separator) {
    if (separator === void 0) separator = DEFAULT_LIST_SEPARATOR;
    var givenValue = input[name];
    if (typeof givenValue === 'string') output[name] = givenValue.split(separator).map(function(v) {
        return v.trim();
    });
}
// The support string -> DiagLogLevel mappings
var logLevelMap = {
    ALL: _api.DiagLogLevel.ALL,
    VERBOSE: _api.DiagLogLevel.VERBOSE,
    DEBUG: _api.DiagLogLevel.DEBUG,
    INFO: _api.DiagLogLevel.INFO,
    WARN: _api.DiagLogLevel.WARN,
    ERROR: _api.DiagLogLevel.ERROR,
    NONE: _api.DiagLogLevel.NONE
};
/**
 * Environmentally sets log level if valid log level string is provided
 * @param key
 * @param environment
 * @param values
 */ function setLogLevelFromEnv(key, environment, values) {
    var value = values[key];
    if (typeof value === 'string') {
        var theLevel = logLevelMap[value.toUpperCase()];
        if (theLevel != null) environment[key] = theLevel;
    }
}
function parseEnvironment(values) {
    var environment = {
    };
    for(var env in DEFAULT_ENVIRONMENT){
        var key = env;
        switch(key){
            case 'OTEL_LOG_LEVEL':
                setLogLevelFromEnv(key, environment, values);
                break;
            default:
                if (isEnvVarANumber(key)) parseNumber(key, environment, values);
                else if (isEnvVarAList(key)) parseStringList(key, environment, values);
                else {
                    var value = values[key];
                    if (typeof value !== 'undefined' && value !== null) environment[key] = String(value);
                }
        }
    }
    return environment;
}

},{"@opentelemetry/api":"6AC4z","./sampling":"fxM1u","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"fxM1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TracesSamplerValues", ()=>TracesSamplerValues
);
var TracesSamplerValues;
(function(TracesSamplerValues1) {
    TracesSamplerValues1["AlwaysOff"] = "always_off";
    TracesSamplerValues1["AlwaysOn"] = "always_on";
    TracesSamplerValues1["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues1["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues1["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues1["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cav7A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis
);
var global = arguments[3];
var _globalThis = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : typeof window === 'object' ? window : typeof global === 'object' ? global : {
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"aSaRw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ parcelHelpers.export(exports, "hexToBase64", ()=>hexToBase64
);
function hexToBase64(hexStr) {
    var hexStrLen = hexStr.length;
    var hexAsciiCharsStr = '';
    for(var i = 0; i < hexStrLen; i += 2){
        var hexPair = hexStr.substring(i, i + 2);
        var hexVal = parseInt(hexPair, 16);
        hexAsciiCharsStr += String.fromCharCode(hexVal);
    }
    return btoa(hexAsciiCharsStr);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2zz95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandomIdGenerator", ()=>RandomIdGenerator
);
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
var RandomIdGenerator = function() {
    function RandomIdGenerator1() {
        /**
         * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
         * characters corresponding to 128 bits.
         */ this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
        /**
         * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
         * characters corresponding to 64 bits.
         */ this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator1;
}();
var SHARED_CHAR_CODES_ARRAY = Array(32);
function getIdGenerator(bytes) {
    return function generateId() {
        for(var i = 0; i < bytes * 2; i++){
            SHARED_CHAR_CODES_ARRAY[i] = Math.floor(Math.random() * 16) + 48;
            // valid hex characters in the range 48-57 and 97-102
            if (SHARED_CHAR_CODES_ARRAY[i] >= 58) SHARED_CHAR_CODES_ARRAY[i] += 39;
        }
        return String.fromCharCode.apply(null, SHARED_CHAR_CODES_ARRAY.slice(0, bytes * 2));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3XRRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "otperformance", ()=>otperformance
);
var otperformance = performance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3i6TP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SDK_INFO", ()=>SDK_INFO
);
var _version = require("../../version");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _a;
var SDK_INFO = (_a = {
}, _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_NAME] = 'opentelemetry', _a[_semanticConventions.SemanticResourceAttributes.PROCESS_RUNTIME_NAME] = 'browser', _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE] = _semanticConventions.TelemetrySdkLanguageValues.WEBJS, _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_VERSION] = _version.VERSION, _a);

},{"../../version":"2JrQh","@opentelemetry/semantic-conventions":"lCgfj","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2JrQh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
var VERSION = '1.0.1';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lCgfj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _trace = require("./trace");
parcelHelpers.exportAll(_trace, exports);
var _resource = require("./resource");
parcelHelpers.exportAll(_resource, exports);

},{"./trace":"9Fj5N","./resource":"6gLs0","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9Fj5N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _semanticAttributes = require("./SemanticAttributes");
parcelHelpers.exportAll(_semanticAttributes, exports);

},{"./SemanticAttributes":"jqkBD","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jqkBD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SemanticAttributes", ()=>SemanticAttributes
);
parcelHelpers.export(exports, "DbSystemValues", ()=>DbSystemValues
);
parcelHelpers.export(exports, "DbCassandraConsistencyLevelValues", ()=>DbCassandraConsistencyLevelValues
);
parcelHelpers.export(exports, "FaasTriggerValues", ()=>FaasTriggerValues
);
parcelHelpers.export(exports, "FaasDocumentOperationValues", ()=>FaasDocumentOperationValues
);
parcelHelpers.export(exports, "FaasInvokedProviderValues", ()=>FaasInvokedProviderValues
);
parcelHelpers.export(exports, "NetTransportValues", ()=>NetTransportValues
);
parcelHelpers.export(exports, "NetHostConnectionTypeValues", ()=>NetHostConnectionTypeValues
);
parcelHelpers.export(exports, "NetHostConnectionSubtypeValues", ()=>NetHostConnectionSubtypeValues
);
parcelHelpers.export(exports, "HttpFlavorValues", ()=>HttpFlavorValues
);
parcelHelpers.export(exports, "MessagingDestinationKindValues", ()=>MessagingDestinationKindValues
);
parcelHelpers.export(exports, "MessagingOperationValues", ()=>MessagingOperationValues
);
parcelHelpers.export(exports, "RpcGrpcStatusCodeValues", ()=>RpcGrpcStatusCodeValues
);
parcelHelpers.export(exports, "MessageTypeValues", ()=>MessageTypeValues
);
var SemanticAttributes = {
    /**
    * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
    *
    * Note: This may be different from `faas.id` if an alias is involved.
    */ AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    /**
    * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
    */ DB_SYSTEM: 'db.system',
    /**
    * The connection string used to connect to the database. It is recommended to remove embedded credentials.
    */ DB_CONNECTION_STRING: 'db.connection_string',
    /**
    * Username for accessing the database.
    */ DB_USER: 'db.user',
    /**
    * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
    */ DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    /**
    * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
    *
    * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
    */ DB_NAME: 'db.name',
    /**
    * The database statement being executed.
    *
    * Note: The value may be sanitized to exclude sensitive information.
    */ DB_STATEMENT: 'db.statement',
    /**
    * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
    *
    * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
    */ DB_OPERATION: 'db.operation',
    /**
    * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
    *
    * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
    */ DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
    * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
    */ DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
    * The fetch size used for paging, i.e. how many rows will be returned at once.
    */ DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    /**
    * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
    */ DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */ DB_CASSANDRA_TABLE: 'db.cassandra.table',
    /**
    * Whether or not the query is idempotent.
    */ DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    /**
    * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
    */ DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    /**
    * The ID of the coordinating node for a query.
    */ DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    /**
    * The data center of the coordinating node for a query.
    */ DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    /**
    * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
    */ DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
    * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
    */ DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
    * The collection being accessed within the database stated in `db.name`.
    */ DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */ DB_SQL_TABLE: 'db.sql.table',
    /**
    * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    */ EXCEPTION_TYPE: 'exception.type',
    /**
    * The exception message.
    */ EXCEPTION_MESSAGE: 'exception.message',
    /**
    * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    */ EXCEPTION_STACKTRACE: 'exception.stacktrace',
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */ EXCEPTION_ESCAPED: 'exception.escaped',
    /**
    * Type of the trigger on which the function is executed.
    */ FAAS_TRIGGER: 'faas.trigger',
    /**
    * The execution ID of the current function execution.
    */ FAAS_EXECUTION: 'faas.execution',
    /**
    * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    */ FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    /**
    * Describes the type of the operation that was performed on the data.
    */ FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    /**
    * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */ FAAS_DOCUMENT_TIME: 'faas.document.time',
    /**
    * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    */ FAAS_DOCUMENT_NAME: 'faas.document.name',
    /**
    * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */ FAAS_TIME: 'faas.time',
    /**
    * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
    */ FAAS_CRON: 'faas.cron',
    /**
    * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    */ FAAS_COLDSTART: 'faas.coldstart',
    /**
    * The name of the invoked function.
    *
    * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
    */ FAAS_INVOKED_NAME: 'faas.invoked_name',
    /**
    * The cloud provider of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
    */ FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    /**
    * The cloud region of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
    */ FAAS_INVOKED_REGION: 'faas.invoked_region',
    /**
    * Transport protocol used. See note below.
    */ NET_TRANSPORT: 'net.transport',
    /**
    * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
    */ NET_PEER_IP: 'net.peer.ip',
    /**
    * Remote port number.
    */ NET_PEER_PORT: 'net.peer.port',
    /**
    * Remote hostname or similar, see note below.
    */ NET_PEER_NAME: 'net.peer.name',
    /**
    * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
    */ NET_HOST_IP: 'net.host.ip',
    /**
    * Like `net.peer.port` but for the host port.
    */ NET_HOST_PORT: 'net.host.port',
    /**
    * Local hostname or similar, see note below.
    */ NET_HOST_NAME: 'net.host.name',
    /**
    * The internet connection type currently being used by the host.
    */ NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    /**
    * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
    */ NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    /**
    * The name of the mobile carrier.
    */ NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    /**
    * The mobile carrier country code.
    */ NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    /**
    * The mobile carrier network code.
    */ NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    /**
    * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
    */ NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    /**
    * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
    */ PEER_SERVICE: 'peer.service',
    /**
    * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
    */ ENDUSER_ID: 'enduser.id',
    /**
    * Actual/assumed role the client is making the request under extracted from token or application security context.
    */ ENDUSER_ROLE: 'enduser.role',
    /**
    * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    */ ENDUSER_SCOPE: 'enduser.scope',
    /**
    * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
    */ THREAD_ID: 'thread.id',
    /**
    * Current thread name.
    */ THREAD_NAME: 'thread.name',
    /**
    * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
    */ CODE_FUNCTION: 'code.function',
    /**
    * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
    */ CODE_NAMESPACE: 'code.namespace',
    /**
    * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    */ CODE_FILEPATH: 'code.filepath',
    /**
    * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
    */ CODE_LINENO: 'code.lineno',
    /**
    * HTTP request method.
    */ HTTP_METHOD: 'http.method',
    /**
    * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
    *
    * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
    */ HTTP_URL: 'http.url',
    /**
    * The full request target as passed in a HTTP request line or equivalent.
    */ HTTP_TARGET: 'http.target',
    /**
    * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
    *
    * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
    */ HTTP_HOST: 'http.host',
    /**
    * The URI scheme identifying the used protocol.
    */ HTTP_SCHEME: 'http.scheme',
    /**
    * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
    */ HTTP_STATUS_CODE: 'http.status_code',
    /**
    * Kind of HTTP protocol used.
    *
    * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
    */ HTTP_FLAVOR: 'http.flavor',
    /**
    * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
    */ HTTP_USER_AGENT: 'http.user_agent',
    /**
    * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */ HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    /**
    * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
    */ HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    /**
    * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */ HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    /**
    * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
    */ HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    /**
    * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
    *
    * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
    */ HTTP_SERVER_NAME: 'http.server_name',
    /**
    * The matched route (path template).
    */ HTTP_ROUTE: 'http.route',
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would
  identify the network-level peer, which may be a proxy.
  
  This attribute should be set when a source of information different
  from the one used for `net.peer.ip`, is available even if that other
  source just confirms the same value as `net.peer.ip`.
  Rationale: For `net.peer.ip`, one typically does not know if it
  comes from a proxy, reverse proxy, or the actual client. Setting
  `http.client_ip` when it&#39;s the same as `net.peer.ip` means that
  one is at least somewhat confident that the address is not that of
  the closest proxy.
    */ HTTP_CLIENT_IP: 'http.client_ip',
    /**
    * The keys in the `RequestItems` object field.
    */ AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    /**
    * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    */ AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    /**
    * The JSON-serialized value of the `ItemCollectionMetrics` response field.
    */ AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    /**
    * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    */ AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    /**
    * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    */ AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    /**
    * The value of the `ConsistentRead` request parameter.
    */ AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    /**
    * The value of the `ProjectionExpression` request parameter.
    */ AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    /**
    * The value of the `Limit` request parameter.
    */ AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    /**
    * The value of the `AttributesToGet` request parameter.
    */ AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    /**
    * The value of the `IndexName` request parameter.
    */ AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    /**
    * The value of the `Select` request parameter.
    */ AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    /**
    * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    */ AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    /**
    * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    */ AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    /**
    * The value of the `ExclusiveStartTableName` request parameter.
    */ AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    /**
    * The the number of items in the `TableNames` response parameter.
    */ AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    /**
    * The value of the `ScanIndexForward` request parameter.
    */ AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    /**
    * The value of the `Segment` request parameter.
    */ AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    /**
    * The value of the `TotalSegments` request parameter.
    */ AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    /**
    * The value of the `Count` response parameter.
    */ AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    /**
    * The value of the `ScannedCount` response parameter.
    */ AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    /**
    * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    */ AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    /**
    * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
    */ AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    /**
    * A string identifying the messaging system.
    */ MESSAGING_SYSTEM: 'messaging.system',
    /**
    * The message destination name. This might be equal to the span name but is required nevertheless.
    */ MESSAGING_DESTINATION: 'messaging.destination',
    /**
    * The kind of message destination.
    */ MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    /**
    * A boolean that is true if the message destination is temporary.
    */ MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    /**
    * The name of the transport protocol.
    */ MESSAGING_PROTOCOL: 'messaging.protocol',
    /**
    * The version of the transport protocol.
    */ MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    /**
    * Connection string.
    */ MESSAGING_URL: 'messaging.url',
    /**
    * A value used by the messaging system as an identifier for the message, represented as a string.
    */ MESSAGING_MESSAGE_ID: 'messaging.message_id',
    /**
    * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
    */ MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    /**
    * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
    */ MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    /**
    * The compressed size of the message payload in bytes.
    */ MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    /**
    * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
    */ MESSAGING_OPERATION: 'messaging.operation',
    /**
    * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
    */ MESSAGING_CONSUMER_ID: 'messaging.consumer_id',
    /**
    * RabbitMQ message routing key.
    */ MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    /**
    * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
    *
    * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
    */ MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    /**
    * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
    */ MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    /**
    * Client Id for the Consumer or Producer that is handling the message.
    */ MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    /**
    * Partition the message is sent to.
    */ MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    /**
    * A boolean that is true if the message is a tombstone.
    */ MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    /**
    * A string identifying the remoting system.
    */ RPC_SYSTEM: 'rpc.system',
    /**
    * The full (logical) name of the service being called, including its package name, if applicable.
    *
    * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
    */ RPC_SERVICE: 'rpc.service',
    /**
    * The name of the (logical) method being called, must be equal to the $method part in the span name.
    *
    * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
    */ RPC_METHOD: 'rpc.method',
    /**
    * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
    */ RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    /**
    * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
    */ RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    /**
    * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
    */ RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    /**
    * `error.code` property of response if it is an error response.
    */ RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    /**
    * `error.message` property of response if it is an error response.
    */ RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
    /**
    * Whether this is a received or sent message.
    */ MESSAGE_TYPE: 'message.type',
    /**
    * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
    *
    * Note: This way we guarantee that the values will be consistent between different implementations.
    */ MESSAGE_ID: 'message.id',
    /**
    * Compressed size of the message in bytes.
    */ MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
    /**
    * Uncompressed size of the message in bytes.
    */ MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size'
};
var DbSystemValues = {
    /** Some other SQL database. Fallback only. See notes. */ OTHER_SQL: 'other_sql',
    /** Microsoft SQL Server. */ MSSQL: 'mssql',
    /** MySQL. */ MYSQL: 'mysql',
    /** Oracle Database. */ ORACLE: 'oracle',
    /** IBM Db2. */ DB2: 'db2',
    /** PostgreSQL. */ POSTGRESQL: 'postgresql',
    /** Amazon Redshift. */ REDSHIFT: 'redshift',
    /** Apache Hive. */ HIVE: 'hive',
    /** Cloudscape. */ CLOUDSCAPE: 'cloudscape',
    /** HyperSQL DataBase. */ HSQLDB: 'hsqldb',
    /** Progress Database. */ PROGRESS: 'progress',
    /** SAP MaxDB. */ MAXDB: 'maxdb',
    /** SAP HANA. */ HANADB: 'hanadb',
    /** Ingres. */ INGRES: 'ingres',
    /** FirstSQL. */ FIRSTSQL: 'firstsql',
    /** EnterpriseDB. */ EDB: 'edb',
    /** InterSystems Caché. */ CACHE: 'cache',
    /** Adabas (Adaptable Database System). */ ADABAS: 'adabas',
    /** Firebird. */ FIREBIRD: 'firebird',
    /** Apache Derby. */ DERBY: 'derby',
    /** FileMaker. */ FILEMAKER: 'filemaker',
    /** Informix. */ INFORMIX: 'informix',
    /** InstantDB. */ INSTANTDB: 'instantdb',
    /** InterBase. */ INTERBASE: 'interbase',
    /** MariaDB. */ MARIADB: 'mariadb',
    /** Netezza. */ NETEZZA: 'netezza',
    /** Pervasive PSQL. */ PERVASIVE: 'pervasive',
    /** PointBase. */ POINTBASE: 'pointbase',
    /** SQLite. */ SQLITE: 'sqlite',
    /** Sybase. */ SYBASE: 'sybase',
    /** Teradata. */ TERADATA: 'teradata',
    /** Vertica. */ VERTICA: 'vertica',
    /** H2. */ H2: 'h2',
    /** ColdFusion IMQ. */ COLDFUSION: 'coldfusion',
    /** Apache Cassandra. */ CASSANDRA: 'cassandra',
    /** Apache HBase. */ HBASE: 'hbase',
    /** MongoDB. */ MONGODB: 'mongodb',
    /** Redis. */ REDIS: 'redis',
    /** Couchbase. */ COUCHBASE: 'couchbase',
    /** CouchDB. */ COUCHDB: 'couchdb',
    /** Microsoft Azure Cosmos DB. */ COSMOSDB: 'cosmosdb',
    /** Amazon DynamoDB. */ DYNAMODB: 'dynamodb',
    /** Neo4j. */ NEO4J: 'neo4j',
    /** Apache Geode. */ GEODE: 'geode',
    /** Elasticsearch. */ ELASTICSEARCH: 'elasticsearch',
    /** Memcached. */ MEMCACHED: 'memcached',
    /** CockroachDB. */ COCKROACHDB: 'cockroachdb'
};
var DbCassandraConsistencyLevelValues = {
    /** all. */ ALL: 'all',
    /** each_quorum. */ EACH_QUORUM: 'each_quorum',
    /** quorum. */ QUORUM: 'quorum',
    /** local_quorum. */ LOCAL_QUORUM: 'local_quorum',
    /** one. */ ONE: 'one',
    /** two. */ TWO: 'two',
    /** three. */ THREE: 'three',
    /** local_one. */ LOCAL_ONE: 'local_one',
    /** any. */ ANY: 'any',
    /** serial. */ SERIAL: 'serial',
    /** local_serial. */ LOCAL_SERIAL: 'local_serial'
};
var FaasTriggerValues = {
    /** A response to some data source operation such as a database or filesystem read/write. */ DATASOURCE: 'datasource',
    /** To provide an answer to an inbound HTTP request. */ HTTP: 'http',
    /** A function is set to be executed when messages are sent to a messaging system. */ PUBSUB: 'pubsub',
    /** A function is scheduled to be executed regularly. */ TIMER: 'timer',
    /** If none of the others apply. */ OTHER: 'other'
};
var FaasDocumentOperationValues = {
    /** When a new object is created. */ INSERT: 'insert',
    /** When an object is modified. */ EDIT: 'edit',
    /** When an object is deleted. */ DELETE: 'delete'
};
var FaasInvokedProviderValues = {
    /** Alibaba Cloud. */ ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */ AWS: 'aws',
    /** Microsoft Azure. */ AZURE: 'azure',
    /** Google Cloud Platform. */ GCP: 'gcp'
};
var NetTransportValues = {
    /** ip_tcp. */ IP_TCP: 'ip_tcp',
    /** ip_udp. */ IP_UDP: 'ip_udp',
    /** Another IP-based protocol. */ IP: 'ip',
    /** Unix Domain socket. See below. */ UNIX: 'unix',
    /** Named or anonymous pipe. See note below. */ PIPE: 'pipe',
    /** In-process communication. */ INPROC: 'inproc',
    /** Something else (non IP-based). */ OTHER: 'other'
};
var NetHostConnectionTypeValues = {
    /** wifi. */ WIFI: 'wifi',
    /** wired. */ WIRED: 'wired',
    /** cell. */ CELL: 'cell',
    /** unavailable. */ UNAVAILABLE: 'unavailable',
    /** unknown. */ UNKNOWN: 'unknown'
};
var NetHostConnectionSubtypeValues = {
    /** GPRS. */ GPRS: 'gprs',
    /** EDGE. */ EDGE: 'edge',
    /** UMTS. */ UMTS: 'umts',
    /** CDMA. */ CDMA: 'cdma',
    /** EVDO Rel. 0. */ EVDO_0: 'evdo_0',
    /** EVDO Rev. A. */ EVDO_A: 'evdo_a',
    /** CDMA2000 1XRTT. */ CDMA2000_1XRTT: 'cdma2000_1xrtt',
    /** HSDPA. */ HSDPA: 'hsdpa',
    /** HSUPA. */ HSUPA: 'hsupa',
    /** HSPA. */ HSPA: 'hspa',
    /** IDEN. */ IDEN: 'iden',
    /** EVDO Rev. B. */ EVDO_B: 'evdo_b',
    /** LTE. */ LTE: 'lte',
    /** EHRPD. */ EHRPD: 'ehrpd',
    /** HSPAP. */ HSPAP: 'hspap',
    /** GSM. */ GSM: 'gsm',
    /** TD-SCDMA. */ TD_SCDMA: 'td_scdma',
    /** IWLAN. */ IWLAN: 'iwlan',
    /** 5G NR (New Radio). */ NR: 'nr',
    /** 5G NRNSA (New Radio Non-Standalone). */ NRNSA: 'nrnsa',
    /** LTE CA. */ LTE_CA: 'lte_ca'
};
var HttpFlavorValues = {
    /** HTTP 1.0. */ HTTP_1_0: '1.0',
    /** HTTP 1.1. */ HTTP_1_1: '1.1',
    /** HTTP 2. */ HTTP_2_0: '2.0',
    /** SPDY protocol. */ SPDY: 'SPDY',
    /** QUIC protocol. */ QUIC: 'QUIC'
};
var MessagingDestinationKindValues = {
    /** A message sent to a queue. */ QUEUE: 'queue',
    /** A message sent to a topic. */ TOPIC: 'topic'
};
var MessagingOperationValues = {
    /** receive. */ RECEIVE: 'receive',
    /** process. */ PROCESS: 'process'
};
var RpcGrpcStatusCodeValues = {
    /** OK. */ OK: 0,
    /** CANCELLED. */ CANCELLED: 1,
    /** UNKNOWN. */ UNKNOWN: 2,
    /** INVALID_ARGUMENT. */ INVALID_ARGUMENT: 3,
    /** DEADLINE_EXCEEDED. */ DEADLINE_EXCEEDED: 4,
    /** NOT_FOUND. */ NOT_FOUND: 5,
    /** ALREADY_EXISTS. */ ALREADY_EXISTS: 6,
    /** PERMISSION_DENIED. */ PERMISSION_DENIED: 7,
    /** RESOURCE_EXHAUSTED. */ RESOURCE_EXHAUSTED: 8,
    /** FAILED_PRECONDITION. */ FAILED_PRECONDITION: 9,
    /** ABORTED. */ ABORTED: 10,
    /** OUT_OF_RANGE. */ OUT_OF_RANGE: 11,
    /** UNIMPLEMENTED. */ UNIMPLEMENTED: 12,
    /** INTERNAL. */ INTERNAL: 13,
    /** UNAVAILABLE. */ UNAVAILABLE: 14,
    /** DATA_LOSS. */ DATA_LOSS: 15,
    /** UNAUTHENTICATED. */ UNAUTHENTICATED: 16
};
var MessageTypeValues = {
    /** sent. */ SENT: 'SENT',
    /** received. */ RECEIVED: 'RECEIVED'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"6gLs0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _semanticResourceAttributes = require("./SemanticResourceAttributes");
parcelHelpers.exportAll(_semanticResourceAttributes, exports);

},{"./SemanticResourceAttributes":"7C7hx","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"7C7hx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SemanticResourceAttributes", ()=>SemanticResourceAttributes
);
parcelHelpers.export(exports, "CloudProviderValues", ()=>CloudProviderValues
);
parcelHelpers.export(exports, "CloudPlatformValues", ()=>CloudPlatformValues
);
parcelHelpers.export(exports, "AwsEcsLaunchtypeValues", ()=>AwsEcsLaunchtypeValues
);
parcelHelpers.export(exports, "HostArchValues", ()=>HostArchValues
);
parcelHelpers.export(exports, "OsTypeValues", ()=>OsTypeValues
);
parcelHelpers.export(exports, "TelemetrySdkLanguageValues", ()=>TelemetrySdkLanguageValues
);
var SemanticResourceAttributes = {
    /**
    * Name of the cloud provider.
    */ CLOUD_PROVIDER: 'cloud.provider',
    /**
    * The cloud account ID the resource is assigned to.
    */ CLOUD_ACCOUNT_ID: 'cloud.account.id',
    /**
    * The geographical region the resource is running. Refer to your provider&#39;s docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/geographies/), or [Google Cloud regions](https://cloud.google.com/about/locations).
    */ CLOUD_REGION: 'cloud.region',
    /**
    * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
    *
    * Note: Availability zones are called &#34;zones&#34; on Alibaba Cloud and Google Cloud.
    */ CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
    /**
    * The cloud platform in use.
    *
    * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
    */ CLOUD_PLATFORM: 'cloud.platform',
    /**
    * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).
    */ AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
    /**
    * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).
    */ AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
    /**
    * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
    */ AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
    /**
    * The ARN of an [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html).
    */ AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
    /**
    * The task definition family this task definition is a member of.
    */ AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
    /**
    * The revision for this task definition.
    */ AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
    /**
    * The ARN of an EKS cluster.
    */ AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
    /**
    * The name(s) of the AWS log group(s) an application is writing to.
    *
    * Note: Multiple log groups must be supported for cases like multi-container applications, where a single application has sidecar containers, and each write to their own log group.
    */ AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
    /**
    * The Amazon Resource Name(s) (ARN) of the AWS log group(s).
    *
    * Note: See the [log group ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format).
    */ AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
    /**
    * The name(s) of the AWS log stream(s) an application is writing to.
    */ AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
    /**
    * The ARN(s) of the AWS log stream(s).
    *
    * Note: See the [log stream ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format). One log group can contain several log streams, so these ARNs necessarily identify both a log group and a log stream.
    */ AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
    /**
    * Container name.
    */ CONTAINER_NAME: 'container.name',
    /**
    * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/reference/run/#container-identification). The UUID might be abbreviated.
    */ CONTAINER_ID: 'container.id',
    /**
    * The container runtime managing this container.
    */ CONTAINER_RUNTIME: 'container.runtime',
    /**
    * Name of the image the container was built on.
    */ CONTAINER_IMAGE_NAME: 'container.image.name',
    /**
    * Container image tag.
    */ CONTAINER_IMAGE_TAG: 'container.image.tag',
    /**
    * Name of the [deployment environment](https://en.wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
    */ DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
    /**
    * A unique identifier representing the device.
    *
    * Note: The device identifier MUST only be defined using the values outlined below. This value is not an advertising identifier and MUST NOT be used as such. On iOS (Swift or Objective-C), this value MUST be equal to the [vendor identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android (Java or Kotlin), this value MUST be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application. More information can be found [here](https://developer.android.com/training/articles/user-data-ids) on best practices and exact implementation details. Caution should be taken when storing personal data or anything which can identify a user. GDPR and data protection laws may apply, ensure you do your own due diligence.
    */ DEVICE_ID: 'device.id',
    /**
    * The model identifier for the device.
    *
    * Note: It&#39;s recommended this value represents a machine readable version of the model identifier rather than the market or consumer-friendly name of the device.
    */ DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
    /**
    * The marketing name for the device model.
    *
    * Note: It&#39;s recommended this value represents a human readable version of the device model rather than a machine readable alternative.
    */ DEVICE_MODEL_NAME: 'device.model.name',
    /**
    * The name of the single function that this runtime instance executes.
    *
    * Note: This is the name of the function as configured/deployed on the FaaS platform and is usually different from the name of the callback function (which may be stored in the [`code.namespace`/`code.function`](../../trace/semantic_conventions/span-general.md#source-code-attributes) span attributes).
    */ FAAS_NAME: 'faas.name',
    /**
    * The unique ID of the single function that this runtime instance executes.
    *
    * Note: Depending on the cloud provider, use:
  
  * **AWS Lambda:** The function [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
  Take care not to use the &#34;invoked ARN&#34; directly but replace any
  [alias suffix](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) with the resolved function version, as the same runtime instance may be invokable with multiple
  different aliases.
  * **GCP:** The [URI of the resource](https://cloud.google.com/iam/docs/full-resource-names)
  * **Azure:** The [Fully Qualified Resource ID](https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id).
  
  On some providers, it may not be possible to determine the full ID at startup,
  which is why this field cannot be made required. For example, on AWS the account ID
  part of the ARN is not available without calling another AWS API
  which may be deemed too slow for a short-running lambda function.
  As an alternative, consider setting `faas.id` as a span attribute instead.
    */ FAAS_ID: 'faas.id',
    /**
    * The immutable version of the function being executed.
    *
    * Note: Depending on the cloud provider and platform, use:
  
  * **AWS Lambda:** The [function version](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
    (an integer represented as a decimal string).
  * **Google Cloud Run:** The [revision](https://cloud.google.com/run/docs/managing/revisions)
    (i.e., the function name plus the revision suffix).
  * **Google Cloud Functions:** The value of the
    [`K_REVISION` environment variable](https://cloud.google.com/functions/docs/env-var#runtime_environment_variables_set_automatically).
  * **Azure Functions:** Not applicable. Do not set this attribute.
    */ FAAS_VERSION: 'faas.version',
    /**
    * The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
    *
    * Note: * **AWS Lambda:** Use the (full) log stream name.
    */ FAAS_INSTANCE: 'faas.instance',
    /**
    * The amount of memory available to the serverless function in MiB.
    *
    * Note: It&#39;s recommended to set this attribute since e.g. too little memory can easily stop a Java AWS Lambda function from working correctly. On AWS Lambda, the environment variable `AWS_LAMBDA_FUNCTION_MEMORY_SIZE` provides this information.
    */ FAAS_MAX_MEMORY: 'faas.max_memory',
    /**
    * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider.
    */ HOST_ID: 'host.id',
    /**
    * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
    */ HOST_NAME: 'host.name',
    /**
    * Type of host. For Cloud, this must be the machine type.
    */ HOST_TYPE: 'host.type',
    /**
    * The CPU architecture the host system is running on.
    */ HOST_ARCH: 'host.arch',
    /**
    * Name of the VM image or OS install the host was instantiated from.
    */ HOST_IMAGE_NAME: 'host.image.name',
    /**
    * VM image ID. For Cloud, this value is from the provider.
    */ HOST_IMAGE_ID: 'host.image.id',
    /**
    * The version string of the VM image as defined in [Version Attributes](README.md#version-attributes).
    */ HOST_IMAGE_VERSION: 'host.image.version',
    /**
    * The name of the cluster.
    */ K8S_CLUSTER_NAME: 'k8s.cluster.name',
    /**
    * The name of the Node.
    */ K8S_NODE_NAME: 'k8s.node.name',
    /**
    * The UID of the Node.
    */ K8S_NODE_UID: 'k8s.node.uid',
    /**
    * The name of the namespace that the pod is running in.
    */ K8S_NAMESPACE_NAME: 'k8s.namespace.name',
    /**
    * The UID of the Pod.
    */ K8S_POD_UID: 'k8s.pod.uid',
    /**
    * The name of the Pod.
    */ K8S_POD_NAME: 'k8s.pod.name',
    /**
    * The name of the Container in a Pod template.
    */ K8S_CONTAINER_NAME: 'k8s.container.name',
    /**
    * The UID of the ReplicaSet.
    */ K8S_REPLICASET_UID: 'k8s.replicaset.uid',
    /**
    * The name of the ReplicaSet.
    */ K8S_REPLICASET_NAME: 'k8s.replicaset.name',
    /**
    * The UID of the Deployment.
    */ K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
    /**
    * The name of the Deployment.
    */ K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
    /**
    * The UID of the StatefulSet.
    */ K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
    /**
    * The name of the StatefulSet.
    */ K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
    /**
    * The UID of the DaemonSet.
    */ K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
    /**
    * The name of the DaemonSet.
    */ K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
    /**
    * The UID of the Job.
    */ K8S_JOB_UID: 'k8s.job.uid',
    /**
    * The name of the Job.
    */ K8S_JOB_NAME: 'k8s.job.name',
    /**
    * The UID of the CronJob.
    */ K8S_CRONJOB_UID: 'k8s.cronjob.uid',
    /**
    * The name of the CronJob.
    */ K8S_CRONJOB_NAME: 'k8s.cronjob.name',
    /**
    * The operating system type.
    */ OS_TYPE: 'os.type',
    /**
    * Human readable (not intended to be parsed) OS version information, like e.g. reported by `ver` or `lsb_release -a` commands.
    */ OS_DESCRIPTION: 'os.description',
    /**
    * Human readable operating system name.
    */ OS_NAME: 'os.name',
    /**
    * The version string of the operating system as defined in [Version Attributes](../../resource/semantic_conventions/README.md#version-attributes).
    */ OS_VERSION: 'os.version',
    /**
    * Process identifier (PID).
    */ PROCESS_PID: 'process.pid',
    /**
    * The name of the process executable. On Linux based systems, can be set to the `Name` in `proc/[pid]/status`. On Windows, can be set to the base name of `GetProcessImageFileNameW`.
    */ PROCESS_EXECUTABLE_NAME: 'process.executable.name',
    /**
    * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
    */ PROCESS_EXECUTABLE_PATH: 'process.executable.path',
    /**
    * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
    */ PROCESS_COMMAND: 'process.command',
    /**
    * The full command used to launch the process as a single string representing the full command. On Windows, can be set to the result of `GetCommandLineW`. Do not set this if you have to assemble it just for monitoring; use `process.command_args` instead.
    */ PROCESS_COMMAND_LINE: 'process.command_line',
    /**
    * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
    */ PROCESS_COMMAND_ARGS: 'process.command_args',
    /**
    * The username of the user that owns the process.
    */ PROCESS_OWNER: 'process.owner',
    /**
    * The name of the runtime of this process. For compiled native binaries, this SHOULD be the name of the compiler.
    */ PROCESS_RUNTIME_NAME: 'process.runtime.name',
    /**
    * The version of the runtime of this process, as returned by the runtime without modification.
    */ PROCESS_RUNTIME_VERSION: 'process.runtime.version',
    /**
    * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
    */ PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
    /**
    * Logical name of the service.
    *
    * Note: MUST be the same for all instances of horizontally scaled services. If the value was not specified, SDKs MUST fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md#process), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value MUST be set to `unknown_service`.
    */ SERVICE_NAME: 'service.name',
    /**
    * A namespace for `service.name`.
    *
    * Note: A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
    */ SERVICE_NAMESPACE: 'service.namespace',
    /**
    * The string ID of the service instance.
    *
    * Note: MUST be unique for each instance of the same `service.namespace,service.name` pair (in other words `service.namespace,service.name,service.instance.id` triplet MUST be globally unique). The ID helps to distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled service). It is preferable for the ID to be persistent and stay the same for the lifetime of the service instance, however it is acceptable that the ID is ephemeral and changes during important lifetime events for the service (e.g. service restarts). If the service has no inherent unique ID that can be used as the value of this attribute it is recommended to generate a random Version 1 or Version 4 RFC 4122 UUID (services aiming for reproducible UUIDs may also use Version 5, see RFC 4122 for more recommendations).
    */ SERVICE_INSTANCE_ID: 'service.instance.id',
    /**
    * The version string of the service API or implementation.
    */ SERVICE_VERSION: 'service.version',
    /**
    * The name of the telemetry SDK as defined above.
    */ TELEMETRY_SDK_NAME: 'telemetry.sdk.name',
    /**
    * The language of the telemetry SDK.
    */ TELEMETRY_SDK_LANGUAGE: 'telemetry.sdk.language',
    /**
    * The version string of the telemetry SDK.
    */ TELEMETRY_SDK_VERSION: 'telemetry.sdk.version',
    /**
    * The version string of the auto instrumentation agent, if used.
    */ TELEMETRY_AUTO_VERSION: 'telemetry.auto.version',
    /**
    * The name of the web engine.
    */ WEBENGINE_NAME: 'webengine.name',
    /**
    * The version of the web engine.
    */ WEBENGINE_VERSION: 'webengine.version',
    /**
    * Additional description of the web engine (e.g. detailed version and edition information).
    */ WEBENGINE_DESCRIPTION: 'webengine.description'
};
var CloudProviderValues = {
    /** Alibaba Cloud. */ ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */ AWS: 'aws',
    /** Microsoft Azure. */ AZURE: 'azure',
    /** Google Cloud Platform. */ GCP: 'gcp'
};
var CloudPlatformValues = {
    /** Alibaba Cloud Elastic Compute Service. */ ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
    /** Alibaba Cloud Function Compute. */ ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
    /** AWS Elastic Compute Cloud. */ AWS_EC2: 'aws_ec2',
    /** AWS Elastic Container Service. */ AWS_ECS: 'aws_ecs',
    /** AWS Elastic Kubernetes Service. */ AWS_EKS: 'aws_eks',
    /** AWS Lambda. */ AWS_LAMBDA: 'aws_lambda',
    /** AWS Elastic Beanstalk. */ AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
    /** Azure Virtual Machines. */ AZURE_VM: 'azure_vm',
    /** Azure Container Instances. */ AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
    /** Azure Kubernetes Service. */ AZURE_AKS: 'azure_aks',
    /** Azure Functions. */ AZURE_FUNCTIONS: 'azure_functions',
    /** Azure App Service. */ AZURE_APP_SERVICE: 'azure_app_service',
    /** Google Cloud Compute Engine (GCE). */ GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
    /** Google Cloud Run. */ GCP_CLOUD_RUN: 'gcp_cloud_run',
    /** Google Cloud Kubernetes Engine (GKE). */ GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
    /** Google Cloud Functions (GCF). */ GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
    /** Google Cloud App Engine (GAE). */ GCP_APP_ENGINE: 'gcp_app_engine'
};
var AwsEcsLaunchtypeValues = {
    /** ec2. */ EC2: 'ec2',
    /** fargate. */ FARGATE: 'fargate'
};
var HostArchValues = {
    /** AMD64. */ AMD64: 'amd64',
    /** ARM32. */ ARM32: 'arm32',
    /** ARM64. */ ARM64: 'arm64',
    /** Itanium. */ IA64: 'ia64',
    /** 32-bit PowerPC. */ PPC32: 'ppc32',
    /** 64-bit PowerPC. */ PPC64: 'ppc64',
    /** 32-bit x86. */ X86: 'x86'
};
var OsTypeValues = {
    /** Microsoft Windows. */ WINDOWS: 'windows',
    /** Linux. */ LINUX: 'linux',
    /** Apple Darwin. */ DARWIN: 'darwin',
    /** FreeBSD. */ FREEBSD: 'freebsd',
    /** NetBSD. */ NETBSD: 'netbsd',
    /** OpenBSD. */ OPENBSD: 'openbsd',
    /** DragonFly BSD. */ DRAGONFLYBSD: 'dragonflybsd',
    /** HP-UX (Hewlett Packard Unix). */ HPUX: 'hpux',
    /** AIX (Advanced Interactive eXecutive). */ AIX: 'aix',
    /** Oracle Solaris. */ SOLARIS: 'solaris',
    /** IBM z/OS. */ Z_OS: 'z_os'
};
var TelemetrySdkLanguageValues = {
    /** cpp. */ CPP: 'cpp',
    /** dotnet. */ DOTNET: 'dotnet',
    /** erlang. */ ERLANG: 'erlang',
    /** go. */ GO: 'go',
    /** java. */ JAVA: 'java',
    /** nodejs. */ NODEJS: 'nodejs',
    /** php. */ PHP: 'php',
    /** python. */ PYTHON: 'python',
    /** ruby. */ RUBY: 'ruby',
    /** webjs. */ WEBJS: 'webjs'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gOhxt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ parcelHelpers.export(exports, "unrefTimer", ()=>unrefTimer
);
function unrefTimer(_timer) {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dYgp0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2fJSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExportResultCode", ()=>ExportResultCode
);
var ExportResultCode;
(function(ExportResultCode1) {
    ExportResultCode1[ExportResultCode1["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode1[ExportResultCode1["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8mhmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CompositePropagator", ()=>CompositePropagator
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
/** Combines multiple propagators into a single propagator. */ var CompositePropagator = function() {
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */ function CompositePropagator1(config) {
        if (config === void 0) config = {
        };
        var _a;
        this._propagators = (_a = config.propagators) !== null && _a !== void 0 ? _a : [];
        this._fields = Array.from(new Set(this._propagators// older propagators may not have fields function, null check to be sure
        .map(function(p) {
            return typeof p.fields === 'function' ? p.fields() : [];
        }).reduce(function(x, y) {
            return x.concat(y);
        }, [])));
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */ CompositePropagator1.prototype.inject = function(context, carrier, setter) {
        for(var _i = 0, _a = this._propagators; _i < _a.length; _i++){
            var propagator = _a[_i];
            try {
                propagator.inject(context, carrier, setter);
            } catch (err) {
                _api.diag.warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
            }
        }
    };
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */ CompositePropagator1.prototype.extract = function(context, carrier, getter) {
        return this._propagators.reduce(function(ctx, propagator) {
            try {
                return propagator.extract(ctx, carrier, getter);
            } catch (err) {
                _api.diag.warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
            }
            return ctx;
        }, context);
    };
    CompositePropagator1.prototype.fields = function() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    };
    return CompositePropagator1;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"j30mQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRACE_PARENT_HEADER", ()=>TRACE_PARENT_HEADER
);
parcelHelpers.export(exports, "TRACE_STATE_HEADER", ()=>TRACE_STATE_HEADER
);
/**
 * Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
 * @param traceParent - A meta property that comes from server.
 *     It should be dynamically generated server side to have the server's request trace Id,
 *     a parent span Id that was set on the server's request span,
 *     and the trace flags to indicate the server's sampling decision
 *     (01 = sampled, 00 = not sampled).
 *     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
 *     For more information see {@link https://www.w3.org/TR/trace-context/}
 */ parcelHelpers.export(exports, "parseTraceParent", ()=>parseTraceParent
);
parcelHelpers.export(exports, "W3CTraceContextPropagator", ()=>W3CTraceContextPropagator
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _suppressTracing = require("./suppress-tracing");
var _traceState = require("./TraceState");
var TRACE_PARENT_HEADER = 'traceparent';
var TRACE_STATE_HEADER = 'tracestate';
var VERSION = '00';
var VERSION_PART = '(?!ff)[\\da-f]{2}';
var TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
var PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
var FLAGS_PART = '[\\da-f]{2}';
var TRACE_PARENT_REGEX = new RegExp("^\\s?(" + VERSION_PART + ")-(" + TRACE_ID_PART + ")-(" + PARENT_ID_PART + ")-(" + FLAGS_PART + ")(-.*)?\\s?$");
function parseTraceParent(traceParent) {
    var match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match) return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5]) return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16)
    };
}
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */ var W3CTraceContextPropagator = function() {
    function W3CTraceContextPropagator1() {
    }
    W3CTraceContextPropagator1.prototype.inject = function(context, carrier, setter) {
        var spanContext = _api.trace.getSpanContext(context);
        if (!spanContext || _suppressTracing.isTracingSuppressed(context) || !_api.isSpanContextValid(spanContext)) return;
        var traceParent = VERSION + "-" + spanContext.traceId + "-" + spanContext.spanId + "-0" + Number(spanContext.traceFlags || _api.TraceFlags.NONE).toString(16);
        setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
    };
    W3CTraceContextPropagator1.prototype.extract = function(context, carrier, getter) {
        var traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
        if (!traceParentHeader) return context;
        var traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
        if (typeof traceParent !== 'string') return context;
        var spanContext = parseTraceParent(traceParent);
        if (!spanContext) return context;
        spanContext.isRemote = true;
        var traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            var state = Array.isArray(traceStateHeader) ? traceStateHeader.join(',') : traceStateHeader;
            spanContext.traceState = new _traceState.TraceState(typeof state === 'string' ? state : undefined);
        }
        return _api.trace.setSpanContext(context, spanContext);
    };
    W3CTraceContextPropagator1.prototype.fields = function() {
        return [
            TRACE_PARENT_HEADER,
            TRACE_STATE_HEADER
        ];
    };
    return W3CTraceContextPropagator1;
}();

},{"@opentelemetry/api":"6AC4z","./suppress-tracing":"51l3B","./TraceState":"9sU1J","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9sU1J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceState", ()=>TraceState
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _validators = require("../internal/validators");
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */ var TraceState = function() {
    function TraceState1(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    TraceState1.prototype.set = function(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) traceState._internalState.delete(key);
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceState1.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceState1.prototype.get = function(key) {
        return this._internalState.get(key);
    };
    TraceState1.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceState1.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce(function(agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if (_validators.validateKey(key) && _validators.validateValue(value)) agg.set(key, value);
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
        .slice(0, MAX_TRACE_STATE_ITEMS));
    };
    TraceState1.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceState1.prototype._clone = function() {
        var traceState = new TraceState1();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceState1;
}();

},{"../internal/validators":"kdvPR","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kdvPR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */ parcelHelpers.export(exports, "validateKey", ()=>validateKey
);
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */ parcelHelpers.export(exports, "validateValue", ()=>validateValue
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"fzitc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"eyPsO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RPCType", ()=>RPCType
);
parcelHelpers.export(exports, "setRPCMetadata", ()=>setRPCMetadata
);
parcelHelpers.export(exports, "deleteRPCMetadata", ()=>deleteRPCMetadata
);
parcelHelpers.export(exports, "getRPCMetadata", ()=>getRPCMetadata
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var RPC_METADATA_KEY = _api.createContextKey('OpenTelemetry SDK Context Key RPC_METADATA');
var RPCType;
(function(RPCType1) {
    RPCType1["HTTP"] = "http";
})(RPCType || (RPCType = {
}));
function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9KkRt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOffSampler", ()=>AlwaysOffSampler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
/** Sampler that samples no traces. */ var AlwaysOffSampler = function() {
    function AlwaysOffSampler1() {
    }
    AlwaysOffSampler1.prototype.shouldSample = function() {
        return {
            decision: _api.SamplingDecision.NOT_RECORD
        };
    };
    AlwaysOffSampler1.prototype.toString = function() {
        return 'AlwaysOffSampler';
    };
    return AlwaysOffSampler1;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jalnp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlwaysOnSampler", ()=>AlwaysOnSampler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
/** Sampler that samples all traces. */ var AlwaysOnSampler = function() {
    function AlwaysOnSampler1() {
    }
    AlwaysOnSampler1.prototype.shouldSample = function() {
        return {
            decision: _api.SamplingDecision.RECORD_AND_SAMPLED
        };
    };
    AlwaysOnSampler1.prototype.toString = function() {
        return 'AlwaysOnSampler';
    };
    return AlwaysOnSampler1;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gERye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParentBasedSampler", ()=>ParentBasedSampler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _globalErrorHandler = require("../../common/global-error-handler");
var _alwaysOffSampler = require("./AlwaysOffSampler");
var _alwaysOnSampler = require("./AlwaysOnSampler");
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */ var ParentBasedSampler = function() {
    function ParentBasedSampler1(config) {
        var _a, _b, _c, _d;
        this._root = config.root;
        if (!this._root) {
            _globalErrorHandler.globalErrorHandler(new Error('ParentBasedSampler must have a root sampler configured'));
            this._root = new _alwaysOnSampler.AlwaysOnSampler();
        }
        this._remoteParentSampled = (_a = config.remoteParentSampled) !== null && _a !== void 0 ? _a : new _alwaysOnSampler.AlwaysOnSampler();
        this._remoteParentNotSampled = (_b = config.remoteParentNotSampled) !== null && _b !== void 0 ? _b : new _alwaysOffSampler.AlwaysOffSampler();
        this._localParentSampled = (_c = config.localParentSampled) !== null && _c !== void 0 ? _c : new _alwaysOnSampler.AlwaysOnSampler();
        this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new _alwaysOffSampler.AlwaysOffSampler();
    }
    ParentBasedSampler1.prototype.shouldSample = function(context, traceId, spanName, spanKind, attributes, links) {
        var parentContext = _api.trace.getSpanContext(context);
        if (!parentContext || !_api.isSpanContextValid(parentContext)) return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & _api.TraceFlags.SAMPLED) return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & _api.TraceFlags.SAMPLED) return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler1.prototype.toString = function() {
        return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler1;
}();

},{"@opentelemetry/api":"6AC4z","../../common/global-error-handler":"hKz5C","./AlwaysOffSampler":"9KkRt","./AlwaysOnSampler":"jalnp","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"69Ird":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TraceIdRatioBasedSampler", ()=>TraceIdRatioBasedSampler
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
/** Sampler that samples a given fraction of traces based of trace id deterministically. */ var TraceIdRatioBasedSampler = function() {
    function TraceIdRatioBasedSampler1(_ratio) {
        if (_ratio === void 0) _ratio = 0;
        this._ratio = _ratio;
        this._ratio = this._normalize(_ratio);
        this._upperBound = Math.floor(this._ratio * 4294967295);
    }
    TraceIdRatioBasedSampler1.prototype.shouldSample = function(context, traceId) {
        return {
            decision: _api.isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? _api.SamplingDecision.RECORD_AND_SAMPLED : _api.SamplingDecision.NOT_RECORD
        };
    };
    TraceIdRatioBasedSampler1.prototype.toString = function() {
        return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler1.prototype._normalize = function(ratio) {
        if (typeof ratio !== 'number' || isNaN(ratio)) return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler1.prototype._accumulate = function(traceId) {
        var accumulation = 0;
        for(var i = 0; i < traceId.length / 8; i++){
            var pos = i * 8;
            var part = parseInt(traceId.slice(pos, pos + 8), 16);
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    };
    return TraceIdRatioBasedSampler1;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"6klbq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Merges objects together
 * @param args - objects / values to be merged
 */ parcelHelpers.export(exports, "merge", ()=>merge
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ var _lodashMerge = require("./lodash.merge");
var MAX_LEVEL = 20;
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var result = args.shift();
    var objects = new WeakMap();
    while(args.length > 0)result = mergeTwoObjects(result, args.shift(), 0, objects);
    return result;
}
function takeValue(value) {
    if (isArray(value)) return value.slice();
    return value;
}
/**
 * Merges two objects
 * @param one - first object
 * @param two - second object
 * @param level - current deep level
 * @param objects - objects holder that has been already referenced - to prevent
 * cyclic dependency
 */ function mergeTwoObjects(one, two, level, objects) {
    if (level === void 0) level = 0;
    var result;
    if (level > MAX_LEVEL) return undefined;
    level++;
    if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) result = takeValue(two);
    else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) for(var i = 0, j = two.length; i < j; i++)result.push(takeValue(two[i]));
        else if (isObject(two)) {
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                result[key] = takeValue(two[key]);
            }
        }
    } else if (isObject(one)) {
        if (isObject(two)) {
            if (!shouldMerge(one, two)) return two;
            result = Object.assign({
            }, one);
            var keys = Object.keys(two);
            for(var i = 0, j = keys.length; i < j; i++){
                var key = keys[i];
                var twoValue = two[key];
                if (isPrimitive(twoValue)) {
                    if (typeof twoValue === 'undefined') delete result[key];
                    else // result[key] = takeValue(twoValue);
                    result[key] = twoValue;
                } else {
                    var obj1 = result[key];
                    var obj2 = twoValue;
                    if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) delete result[key];
                    else {
                        if (isObject(obj1) && isObject(obj2)) {
                            var arr1 = objects.get(obj1) || [];
                            var arr2 = objects.get(obj2) || [];
                            arr1.push({
                                obj: one,
                                key: key
                            });
                            arr2.push({
                                obj: two,
                                key: key
                            });
                            objects.set(obj1, arr1);
                            objects.set(obj2, arr2);
                        }
                        result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
                    }
                }
            }
        } else result = two;
    }
    return result;
}
/**
 * Function to check if object has been already reference
 * @param obj
 * @param key
 * @param objects
 */ function wasObjectReferenced(obj, key, objects) {
    var arr = objects.get(obj[key]) || [];
    for(var i = 0, j = arr.length; i < j; i++){
        var info = arr[i];
        if (info.key === key && info.obj === obj) return true;
    }
    return false;
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function isObject(value) {
    return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === 'object';
}
function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined' || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
    if (!_lodashMerge.isPlainObject(one) || !_lodashMerge.isPlainObject(two)) return false;
    return true;
}

},{"./lodash.merge":"dGhva","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dGhva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/ var objectTag = '[object Object]';
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
var objectCtorString = funcToString.call(Object);
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
var nativeObjectToString = objectProto.toString;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    var unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {
    // silence
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lafWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ parcelHelpers.export(exports, "urlMatches", ()=>urlMatches
);
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */ parcelHelpers.export(exports, "isUrlIgnored", ()=>isUrlIgnored
);
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') return url === urlToMatch;
    else return !!url.match(urlToMatch);
}
function isUrlIgnored(url, ignoredUrls) {
    if (!ignoredUrls) return false;
    for(var _i = 0, ignoredUrls_1 = ignoredUrls; _i < ignoredUrls_1.length; _i++){
        var ignoreUrl = ignoredUrls_1[_i];
        if (urlMatches(url, ignoreUrl)) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kPm4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Checks if certain function has been already wrapped
 * @param func
 */ parcelHelpers.export(exports, "isWrapped", ()=>isWrapped
);
function isWrapped(func) {
    return typeof func === 'function' && typeof func.__original === 'function' && typeof func.__unwrap === 'function' && func.__wrapped === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3tWGt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Span", ()=>Span
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _enums = require("./enums");
/**
 * This class represents a span.
 */ var Span = function() {
    /** Constructs a new Span instance. */ function Span1(parentTracer, context, spanName, spanContext, kind, parentSpanId, links, startTime) {
        if (links === void 0) links = [];
        if (startTime === void 0) startTime = _core.hrTime();
        this.attributes = {
        };
        this.links = [];
        this.events = [];
        this.status = {
            code: _api.SpanStatusCode.UNSET
        };
        this.endTime = [
            0,
            0
        ];
        this._ended = false;
        this._duration = [
            -1,
            -1
        ];
        this.name = spanName;
        this._spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        this.startTime = _core.timeInputToHrTime(startTime);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._spanLimits = parentTracer.getSpanLimits();
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this, context);
        this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
    }
    Span1.prototype.spanContext = function() {
        return this._spanContext;
    };
    Span1.prototype.setAttribute = function(key, value) {
        if (value == null || this._isSpanEnded()) return this;
        if (key.length === 0) {
            _api.diag.warn("Invalid attribute key: " + key);
            return this;
        }
        if (!_core.isAttributeValue(value)) {
            _api.diag.warn("Invalid attribute value set for key: " + key);
            return this;
        }
        if (Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) return this;
        this.attributes[key] = this._truncateToSize(value);
        return this;
    };
    Span1.prototype.setAttributes = function(attributes) {
        for(var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++){
            var _b = _a[_i], k = _b[0], v = _b[1];
            this.setAttribute(k, v);
        }
        return this;
    };
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] Specified start time for the event
     */ Span1.prototype.addEvent = function(name, attributesOrStartTime, startTime) {
        if (this._isSpanEnded()) return this;
        if (this.events.length >= this._spanLimits.eventCountLimit) {
            _api.diag.warn('Dropping extra events.');
            this.events.shift();
        }
        if (_core.isTimeInput(attributesOrStartTime)) {
            if (typeof startTime === 'undefined') startTime = attributesOrStartTime;
            attributesOrStartTime = undefined;
        }
        if (typeof startTime === 'undefined') startTime = _core.hrTime();
        this.events.push({
            name: name,
            attributes: attributesOrStartTime,
            time: _core.timeInputToHrTime(startTime)
        });
        return this;
    };
    Span1.prototype.setStatus = function(status) {
        if (this._isSpanEnded()) return this;
        this.status = status;
        return this;
    };
    Span1.prototype.updateName = function(name) {
        if (this._isSpanEnded()) return this;
        this.name = name;
        return this;
    };
    Span1.prototype.end = function(endTime) {
        if (endTime === void 0) endTime = _core.hrTime();
        if (this._isSpanEnded()) {
            _api.diag.error('You can only call end() on a span once.');
            return;
        }
        this._ended = true;
        this.endTime = _core.timeInputToHrTime(endTime);
        this._duration = _core.hrTimeDuration(this.startTime, this.endTime);
        if (this._duration[0] < 0) _api.diag.warn('Inconsistent start and end time, startTime > endTime', this.startTime, this.endTime);
        this._spanProcessor.onEnd(this);
    };
    Span1.prototype.isRecording = function() {
        return this._ended === false;
    };
    Span1.prototype.recordException = function(exception, time) {
        if (time === void 0) time = _core.hrTime();
        var attributes = {
        };
        if (typeof exception === 'string') attributes[_semanticConventions.SemanticAttributes.EXCEPTION_MESSAGE] = exception;
        else if (exception) {
            if (exception.code) attributes[_semanticConventions.SemanticAttributes.EXCEPTION_TYPE] = exception.code.toString();
            else if (exception.name) attributes[_semanticConventions.SemanticAttributes.EXCEPTION_TYPE] = exception.name;
            if (exception.message) attributes[_semanticConventions.SemanticAttributes.EXCEPTION_MESSAGE] = exception.message;
            if (exception.stack) attributes[_semanticConventions.SemanticAttributes.EXCEPTION_STACKTRACE] = exception.stack;
        }
        // these are minimum requirements from spec
        if (attributes[_semanticConventions.SemanticAttributes.EXCEPTION_TYPE] || attributes[_semanticConventions.SemanticAttributes.EXCEPTION_MESSAGE]) this.addEvent(_enums.ExceptionEventName, attributes, time);
        else _api.diag.warn("Failed to record an exception " + exception);
    };
    Object.defineProperty(Span1.prototype, "duration", {
        get: function() {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span1.prototype, "ended", {
        get: function() {
            return this._ended;
        },
        enumerable: false,
        configurable: true
    });
    Span1.prototype._isSpanEnded = function() {
        if (this._ended) _api.diag.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}");
        return this._ended;
    };
    // Utility function to truncate given value within size
    // for value type of string, will truncate to given limit
    // for type of non-string, will return same value
    Span1.prototype._truncateToLimitUtil = function(value, limit) {
        if (value.length <= limit) return value;
        return value.substr(0, limit);
    };
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with trucated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */ Span1.prototype._truncateToSize = function(value) {
        var _this = this;
        var limit = this._attributeValueLengthLimit;
        // Check limit
        if (limit <= 0) {
            // Negative values are invalid, so do not truncate
            _api.diag.warn("Attribute value limit must be positive, got " + limit);
            return value;
        }
        // String
        if (typeof value === 'string') return this._truncateToLimitUtil(value, limit);
        // Array of strings
        if (Array.isArray(value)) return value.map(function(val) {
            return typeof val === 'string' ? _this._truncateToLimitUtil(val, limit) : val;
        });
        // Other types, no need to apply value length limit
        return value;
    };
    return Span1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","./enums":"7XjQf","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"7XjQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExceptionEventName", ()=>ExceptionEventName
);
var ExceptionEventName = 'exception';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"99Faf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */ parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
var _config = require("./config");
function mergeConfig(userConfig) {
    var perInstanceDefaults = {
        sampler: _config.buildSamplerFromEnv()
    };
    var target = Object.assign({
    }, _config.DEFAULT_CONFIG, perInstanceDefaults, userConfig);
    target.generalLimits = Object.assign({
    }, _config.DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {
    });
    target.spanLimits = Object.assign({
    }, _config.DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {
    });
    /**
     * When span attribute count limit is not defined, but general attribute count limit is defined
     * Then, span attribute count limit will be same as general one
     */ if (target.spanLimits.attributeCountLimit === _core.DEFAULT_ATTRIBUTE_COUNT_LIMIT && target.generalLimits.attributeCountLimit !== _core.DEFAULT_ATTRIBUTE_COUNT_LIMIT) target.spanLimits.attributeCountLimit = target.generalLimits.attributeCountLimit;
    /**
     * When span attribute value length limit is not defined, but general attribute value length limit is defined
     * Then, span attribute value length limit will be same as general one
     */ if (target.spanLimits.attributeValueLengthLimit === _core.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT && target.generalLimits.attributeValueLengthLimit !== _core.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT) target.spanLimits.attributeValueLengthLimit = target.generalLimits.attributeValueLengthLimit;
    return target;
}

},{"@opentelemetry/core":"dBsXh","./config":"jo0pp","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jo0pp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_CONFIG", ()=>DEFAULT_CONFIG
);
/**
 * Based on environment, builds a sampler, complies with specification.
 * @param environment optional, by default uses getEnv(), but allows passing a value to reuse parsed environment
 */ parcelHelpers.export(exports, "buildSamplerFromEnv", ()=>buildSamplerFromEnv
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var env = _core.getEnv();
var FALLBACK_OTEL_TRACES_SAMPLER = _core.TracesSamplerValues.AlwaysOn;
var DEFAULT_RATIO = 1;
var DEFAULT_CONFIG = {
    sampler: buildSamplerFromEnv(env),
    forceFlushTimeoutMillis: 30000,
    generalLimits: {
        attributeValueLengthLimit: _core.getEnv().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: _core.getEnv().OTEL_ATTRIBUTE_COUNT_LIMIT
    },
    spanLimits: {
        attributeValueLengthLimit: _core.getEnv().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: _core.getEnv().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
        linkCountLimit: _core.getEnv().OTEL_SPAN_LINK_COUNT_LIMIT,
        eventCountLimit: _core.getEnv().OTEL_SPAN_EVENT_COUNT_LIMIT
    }
};
function buildSamplerFromEnv(environment) {
    if (environment === void 0) environment = _core.getEnv();
    switch(environment.OTEL_TRACES_SAMPLER){
        case _core.TracesSamplerValues.AlwaysOn:
            return new _core.AlwaysOnSampler();
        case _core.TracesSamplerValues.AlwaysOff:
            return new _core.AlwaysOffSampler();
        case _core.TracesSamplerValues.ParentBasedAlwaysOn:
            return new _core.ParentBasedSampler({
                root: new _core.AlwaysOnSampler()
            });
        case _core.TracesSamplerValues.ParentBasedAlwaysOff:
            return new _core.ParentBasedSampler({
                root: new _core.AlwaysOffSampler()
            });
        case _core.TracesSamplerValues.TraceIdRatio:
            return new _core.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment));
        case _core.TracesSamplerValues.ParentBasedTraceIdRatio:
            return new _core.ParentBasedSampler({
                root: new _core.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment))
            });
        default:
            _api.diag.error("OTEL_TRACES_SAMPLER value \"" + environment.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + FALLBACK_OTEL_TRACES_SAMPLER + "\".");
            return new _core.AlwaysOnSampler();
    }
}
function getSamplerProbabilityFromEnv(environment) {
    if (environment.OTEL_TRACES_SAMPLER_ARG === undefined || environment.OTEL_TRACES_SAMPLER_ARG === '') {
        _api.diag.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    var probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
    if (isNaN(probability)) {
        _api.diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        _api.diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + DEFAULT_RATIO + ".");
        return DEFAULT_RATIO;
    }
    return probability;
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"bv1bF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ForceFlushState", ()=>ForceFlushState
);
parcelHelpers.export(exports, "BasicTracerProvider", ()=>BasicTracerProvider
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _resources = require("@opentelemetry/resources");
var _ = require(".");
var _config = require("./config");
var _multiSpanProcessor = require("./MultiSpanProcessor");
var _noopSpanProcessor = require("./export/NoopSpanProcessor");
var _platform = require("./platform");
var ForceFlushState;
(function(ForceFlushState1) {
    ForceFlushState1[ForceFlushState1["resolved"] = 0] = "resolved";
    ForceFlushState1[ForceFlushState1["timeout"] = 1] = "timeout";
    ForceFlushState1[ForceFlushState1["error"] = 2] = "error";
    ForceFlushState1[ForceFlushState1["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {
}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */ var BasicTracerProvider = function() {
    function BasicTracerProvider1(config) {
        if (config === void 0) config = {
        };
        var _a;
        this._registeredSpanProcessors = [];
        this._tracers = new Map();
        var mergedConfig = _core.merge({
        }, _config.DEFAULT_CONFIG, config);
        this.resource = (_a = mergedConfig.resource) !== null && _a !== void 0 ? _a : _resources.Resource.empty();
        this.resource = _resources.Resource.default().merge(this.resource);
        this._config = Object.assign({
        }, mergedConfig, {
            resource: this.resource
        });
        var defaultExporter = this._buildExporterFromEnv();
        if (defaultExporter !== undefined) {
            var batchProcessor = new _platform.BatchSpanProcessor(defaultExporter);
            this.activeSpanProcessor = batchProcessor;
        } else this.activeSpanProcessor = new _noopSpanProcessor.NoopSpanProcessor();
    }
    BasicTracerProvider1.prototype.getTracer = function(name, version) {
        var key = name + "@" + (version || '');
        if (!this._tracers.has(key)) this._tracers.set(key, new _.Tracer({
            name: name,
            version: version
        }, this._config, this));
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._tracers.get(key);
    };
    /**
     * Adds a new {@link SpanProcessor} to this tracer.
     * @param spanProcessor the new SpanProcessor to be added.
     */ BasicTracerProvider1.prototype.addSpanProcessor = function(spanProcessor) {
        if (this._registeredSpanProcessors.length === 0) // since we might have enabled by default a batchProcessor, we disable it
        // before adding the new one
        this.activeSpanProcessor.shutdown().catch(function(err) {
            return _api.diag.error('Error while trying to shutdown current span processor', err);
        });
        this._registeredSpanProcessors.push(spanProcessor);
        this.activeSpanProcessor = new _multiSpanProcessor.MultiSpanProcessor(this._registeredSpanProcessors);
    };
    BasicTracerProvider1.prototype.getActiveSpanProcessor = function() {
        return this.activeSpanProcessor;
    };
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */ BasicTracerProvider1.prototype.register = function(config) {
        if (config === void 0) config = {
        };
        _api.trace.setGlobalTracerProvider(this);
        if (config.propagator === undefined) config.propagator = this._buildPropagatorFromEnv();
        if (config.contextManager) _api.context.setGlobalContextManager(config.contextManager);
        if (config.propagator) _api.propagation.setGlobalPropagator(config.propagator);
    };
    BasicTracerProvider1.prototype.forceFlush = function() {
        var timeout = this._config.forceFlushTimeoutMillis;
        var promises = this._registeredSpanProcessors.map(function(spanProcessor) {
            return new Promise(function(resolve) {
                var state;
                var timeoutInterval = setTimeout(function() {
                    resolve(new Error("Span processor did not completed within timeout period of " + timeout + " ms"));
                    state = ForceFlushState.timeout;
                }, timeout);
                spanProcessor.forceFlush().then(function() {
                    clearTimeout(timeoutInterval);
                    if (state !== ForceFlushState.timeout) {
                        state = ForceFlushState.resolved;
                        resolve(state);
                    }
                }).catch(function(error) {
                    clearTimeout(timeoutInterval);
                    state = ForceFlushState.error;
                    resolve(error);
                });
            });
        });
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function(results) {
                var errors = results.filter(function(result) {
                    return result !== ForceFlushState.resolved;
                });
                if (errors.length > 0) reject(errors);
                else resolve();
            }).catch(function(error) {
                return reject([
                    error
                ]);
            });
        });
    };
    BasicTracerProvider1.prototype.shutdown = function() {
        return this.activeSpanProcessor.shutdown();
    };
    BasicTracerProvider1.prototype._getPropagator = function(name) {
        var _a;
        return (_a = BasicTracerProvider1._registeredPropagators.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider1.prototype._getSpanExporter = function(name) {
        var _a;
        return (_a = BasicTracerProvider1._registeredExporters.get(name)) === null || _a === void 0 ? void 0 : _a();
    };
    BasicTracerProvider1.prototype._buildPropagatorFromEnv = function() {
        var _this = this;
        // per spec, propagators from env must be deduplicated
        var uniquePropagatorNames = Array.from(new Set(_core.getEnv().OTEL_PROPAGATORS));
        var propagators = uniquePropagatorNames.map(function(name) {
            var propagator = _this._getPropagator(name);
            if (!propagator) _api.diag.warn("Propagator \"" + name + "\" requested through environment variable is unavailable.");
            return propagator;
        });
        var validPropagators = propagators.reduce(function(list, item) {
            if (item) list.push(item);
            return list;
        }, []);
        if (validPropagators.length === 0) return;
        else if (uniquePropagatorNames.length === 1) return validPropagators[0];
        else return new _core.CompositePropagator({
            propagators: validPropagators
        });
    };
    BasicTracerProvider1.prototype._buildExporterFromEnv = function() {
        var exporterName = _core.getEnv().OTEL_TRACES_EXPORTER;
        if (exporterName === 'none') return;
        var exporter = this._getSpanExporter(exporterName);
        if (!exporter) _api.diag.error("Exporter \"" + exporterName + "\" requested through environment variable is unavailable.");
        return exporter;
    };
    BasicTracerProvider1._registeredPropagators = new Map([
        [
            'tracecontext',
            function() {
                return new _core.W3CTraceContextPropagator();
            }
        ],
        [
            'baggage',
            function() {
                return new _core.W3CBaggagePropagator();
            }
        ], 
    ]);
    BasicTracerProvider1._registeredExporters = new Map();
    return BasicTracerProvider1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/resources":"loqSh",".":"jj5uM","./config":"jo0pp","./MultiSpanProcessor":"5mHtM","./export/NoopSpanProcessor":"j2TGv","./platform":"alGsY","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"loqSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _resource = require("./Resource");
parcelHelpers.exportAll(_resource, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _config = require("./config");
parcelHelpers.exportAll(_config, exports);

},{"./Resource":"205Or","./platform":"4c85l","./types":"74xPH","./config":"i9JeY","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"205Or":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resource", ()=>Resource
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _core = require("@opentelemetry/core");
var _platform = require("./platform");
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */ var Resource = function() {
    function Resource1(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ attributes) {
        this.attributes = attributes;
    }
    /**
     * Returns an empty Resource
     */ Resource1.empty = function() {
        return Resource1.EMPTY;
    };
    /**
     * Returns a Resource that indentifies the SDK in use.
     */ Resource1.default = function() {
        var _a;
        return new Resource1((_a = {
        }, _a[_semanticConventions.SemanticResourceAttributes.SERVICE_NAME] = _platform.defaultServiceName(), _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE] = _core.SDK_INFO[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE], _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_NAME] = _core.SDK_INFO[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_NAME], _a[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_VERSION] = _core.SDK_INFO[_semanticConventions.SemanticResourceAttributes.TELEMETRY_SDK_VERSION], _a));
    };
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */ Resource1.prototype.merge = function(other) {
        if (!other || !Object.keys(other.attributes).length) return this;
        // SpanAttributes from resource overwrite attributes from other resource.
        var mergedAttributes = Object.assign({
        }, this.attributes, other.attributes);
        return new Resource1(mergedAttributes);
    };
    Resource1.EMPTY = new Resource1({
    });
    return Resource1;
}();

},{"@opentelemetry/semantic-conventions":"lCgfj","@opentelemetry/core":"dBsXh","./platform":"4c85l","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"4c85l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _defaultServiceName = require("./default-service-name");
parcelHelpers.exportAll(_defaultServiceName, exports);
var _detectResources = require("./detect-resources");
parcelHelpers.exportAll(_detectResources, exports);

},{"./default-service-name":"7YE6D","./detect-resources":"1dCCp","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"7YE6D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ parcelHelpers.export(exports, "defaultServiceName", ()=>defaultServiceName
);
function defaultServiceName() {
    return 'unknown_service';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"1dCCp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectResources", ()=>detectResources
);
var _resource = require("../../Resource");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var detectResources = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a) {
            return [
                2 /*return*/ ,
                _resource.Resource.empty()
            ];
        });
    });
};

},{"../../Resource":"205Or","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"74xPH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"i9JeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5mHtM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiSpanProcessor", ()=>MultiSpanProcessor
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */ var MultiSpanProcessor = function() {
    function MultiSpanProcessor1(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor1.prototype.forceFlush = function() {
        var promises = [];
        for(var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++){
            var spanProcessor = _a[_i];
            promises.push(spanProcessor.forceFlush());
        }
        return new Promise(function(resolve) {
            Promise.all(promises).then(function() {
                resolve();
            }).catch(function(error) {
                _core.globalErrorHandler(error || new Error('MultiSpanProcessor: forceFlush failed'));
                resolve();
            });
        });
    };
    MultiSpanProcessor1.prototype.onStart = function(span, context) {
        for(var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++){
            var spanProcessor = _a[_i];
            spanProcessor.onStart(span, context);
        }
    };
    MultiSpanProcessor1.prototype.onEnd = function(span) {
        for(var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++){
            var spanProcessor = _a[_i];
            spanProcessor.onEnd(span);
        }
    };
    MultiSpanProcessor1.prototype.shutdown = function() {
        var promises = [];
        for(var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++){
            var spanProcessor = _a[_i];
            promises.push(spanProcessor.shutdown());
        }
        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function() {
                resolve();
            }, reject);
        });
    };
    return MultiSpanProcessor1;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"j2TGv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopSpanProcessor", ()=>NoopSpanProcessor
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** No-op implementation of SpanProcessor */ var NoopSpanProcessor = function() {
    function NoopSpanProcessor1() {
    }
    NoopSpanProcessor1.prototype.onStart = function(_span, _context) {
    };
    NoopSpanProcessor1.prototype.onEnd = function(_span) {
    };
    NoopSpanProcessor1.prototype.shutdown = function() {
        return Promise.resolve();
    };
    NoopSpanProcessor1.prototype.forceFlush = function() {
        return Promise.resolve();
    };
    return NoopSpanProcessor1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"alGsY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _batchSpanProcessor = require("./export/BatchSpanProcessor");
parcelHelpers.exportAll(_batchSpanProcessor, exports);

},{"./export/BatchSpanProcessor":"cdQdB","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cdQdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchSpanProcessor", ()=>BatchSpanProcessor
);
var _batchSpanProcessorBase = require("../../../export/BatchSpanProcessorBase");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var BatchSpanProcessor = function(_super) {
    __extends(BatchSpanProcessor1, _super);
    function BatchSpanProcessor1(_exporter, config) {
        var _this = _super.call(this, _exporter, config) || this;
        _this.onInit(config);
        return _this;
    }
    BatchSpanProcessor1.prototype.onInit = function(config) {
        var _this = this;
        if ((config === null || config === void 0 ? void 0 : config.disableAutoFlushOnDocumentHide) !== true && document != null) {
            this._visibilityChangeListener = function() {
                if (document.visibilityState === 'hidden') _this.forceFlush();
            };
            this._pageHideListener = function() {
                _this.forceFlush();
            };
            document.addEventListener('visibilitychange', this._visibilityChangeListener);
            // use 'pagehide' event as a fallback for Safari; see https://bugs.webkit.org/show_bug.cgi?id=116769
            document.addEventListener('pagehide', this._pageHideListener);
        }
    };
    BatchSpanProcessor1.prototype.onShutdown = function() {
        if (this._visibilityChangeListener) document.removeEventListener('visibilitychange', this._visibilityChangeListener);
        if (this._pageHideListener) document.removeEventListener('pagehide', this._pageHideListener);
    };
    return BatchSpanProcessor1;
}(_batchSpanProcessorBase.BatchSpanProcessorBase);

},{"../../../export/BatchSpanProcessorBase":"bVOll","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"bVOll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchSpanProcessorBase", ()=>BatchSpanProcessorBase
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */ var BatchSpanProcessorBase = function() {
    function BatchSpanProcessorBase1(_exporter, config) {
        this._exporter = _exporter;
        this._finishedSpans = [];
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
        var env = _core.getEnv();
        this._maxExportBatchSize = typeof (config === null || config === void 0 ? void 0 : config.maxExportBatchSize) === 'number' ? config.maxExportBatchSize : env.OTEL_BSP_MAX_EXPORT_BATCH_SIZE;
        this._maxQueueSize = typeof (config === null || config === void 0 ? void 0 : config.maxQueueSize) === 'number' ? config.maxQueueSize : env.OTEL_BSP_MAX_QUEUE_SIZE;
        this._scheduledDelayMillis = typeof (config === null || config === void 0 ? void 0 : config.scheduledDelayMillis) === 'number' ? config.scheduledDelayMillis : env.OTEL_BSP_SCHEDULE_DELAY;
        this._exportTimeoutMillis = typeof (config === null || config === void 0 ? void 0 : config.exportTimeoutMillis) === 'number' ? config.exportTimeoutMillis : env.OTEL_BSP_EXPORT_TIMEOUT;
    }
    BatchSpanProcessorBase1.prototype.forceFlush = function() {
        if (this._isShutdown) return this._shuttingDownPromise;
        return this._flushAll();
    };
    // does nothing.
    BatchSpanProcessorBase1.prototype.onStart = function(_span) {
    };
    BatchSpanProcessorBase1.prototype.onEnd = function(span) {
        if (this._isShutdown) return;
        if ((span.spanContext().traceFlags & _api.TraceFlags.SAMPLED) === 0) return;
        this._addToBuffer(span);
    };
    BatchSpanProcessorBase1.prototype.shutdown = function() {
        var _this = this;
        if (this._isShutdown) return this._shuttingDownPromise;
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise(function(resolve, reject) {
            Promise.resolve().then(function() {
                return _this.onShutdown();
            }).then(function() {
                return _this._flushAll();
            }).then(function() {
                return _this._exporter.shutdown();
            }).then(resolve).catch(function(e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    /** Add a span in the buffer. */ BatchSpanProcessorBase1.prototype._addToBuffer = function(span) {
        if (this._finishedSpans.length >= this._maxQueueSize) // limit reached, drop span
        return;
        this._finishedSpans.push(span);
        this._maybeStartTimer();
    };
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */ BatchSpanProcessorBase1.prototype._flushAll = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var promises = [];
            // calculate number of batches
            var count = Math.ceil(_this._finishedSpans.length / _this._maxExportBatchSize);
            for(var i = 0, j = count; i < j; i++)promises.push(_this._flushOneBatch());
            Promise.all(promises).then(function() {
                resolve();
            }).catch(reject);
        });
    };
    BatchSpanProcessorBase1.prototype._flushOneBatch = function() {
        var _this = this;
        this._clearTimer();
        if (this._finishedSpans.length === 0) return Promise.resolve();
        return new Promise(function(resolve, reject) {
            var timer = setTimeout(function() {
                // don't wait anymore for export, this way the next batch can start
                reject(new Error('Timeout'));
            }, _this._exportTimeoutMillis);
            // prevent downstream exporter calls from generating spans
            _api.context.with(_core.suppressTracing(_api.context.active()), function() {
                // Reset the finished spans buffer here because the next invocations of the _flush method
                // could pass the same finished spans to the exporter if the buffer is cleared
                // outside of the execution of this callback.
                _this._exporter.export(_this._finishedSpans.splice(0, _this._maxExportBatchSize), function(result) {
                    var _a;
                    clearTimeout(timer);
                    if (result.code === _core.ExportResultCode.SUCCESS) resolve();
                    else reject((_a = result.error) !== null && _a !== void 0 ? _a : new Error('BatchSpanProcessor: span export failed'));
                });
            });
        });
    };
    BatchSpanProcessorBase1.prototype._maybeStartTimer = function() {
        var _this = this;
        if (this._timer !== undefined) return;
        this._timer = setTimeout(function() {
            _this._flushOneBatch().then(function() {
                if (_this._finishedSpans.length > 0) {
                    _this._clearTimer();
                    _this._maybeStartTimer();
                }
            }).catch(function(e) {
                _core.globalErrorHandler(e);
            });
        }, this._scheduledDelayMillis);
        _core.unrefTimer(this._timer);
    };
    BatchSpanProcessorBase1.prototype._clearTimer = function() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    };
    return BatchSpanProcessorBase1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hWVp2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConsoleSpanExporter", ()=>ConsoleSpanExporter
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
/**
 * This is implementation of {@link SpanExporter} that prints spans to the
 * console. This class can be used for diagnostic purposes.
 */ /* eslint-disable no-console */ var ConsoleSpanExporter = function() {
    function ConsoleSpanExporter1() {
    }
    /**
     * Export spans.
     * @param spans
     * @param resultCallback
     */ ConsoleSpanExporter1.prototype.export = function(spans, resultCallback) {
        return this._sendSpans(spans, resultCallback);
    };
    /**
     * Shutdown the exporter.
     */ ConsoleSpanExporter1.prototype.shutdown = function() {
        this._sendSpans([]);
        return Promise.resolve();
    };
    /**
     * converts span info into more readable format
     * @param span
     */ ConsoleSpanExporter1.prototype._exportInfo = function(span) {
        return {
            traceId: span.spanContext().traceId,
            parentId: span.parentSpanId,
            name: span.name,
            id: span.spanContext().spanId,
            kind: span.kind,
            timestamp: _core.hrTimeToMicroseconds(span.startTime),
            duration: _core.hrTimeToMicroseconds(span.duration),
            attributes: span.attributes,
            status: span.status,
            events: span.events
        };
    };
    /**
     * Showing spans in console
     * @param spans
     * @param done
     */ ConsoleSpanExporter1.prototype._sendSpans = function(spans, done) {
        for(var _i = 0, spans_1 = spans; _i < spans_1.length; _i++){
            var span = spans_1[_i];
            console.log(this._exportInfo(span));
        }
        if (done) return done({
            code: _core.ExportResultCode.SUCCESS
        });
    };
    return ConsoleSpanExporter1;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"Yr1u5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InMemorySpanExporter", ()=>InMemorySpanExporter
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */ var InMemorySpanExporter = function() {
    function InMemorySpanExporter1() {
        this._finishedSpans = [];
        /**
         * Indicates if the exporter has been "shutdown."
         * When false, exported spans will not be stored in-memory.
         */ this._stopped = false;
    }
    InMemorySpanExporter1.prototype.export = function(spans, resultCallback) {
        var _a;
        if (this._stopped) return resultCallback({
            code: _core.ExportResultCode.FAILED,
            error: new Error('Exporter has been stopped')
        });
        (_a = this._finishedSpans).push.apply(_a, spans);
        setTimeout(function() {
            return resultCallback({
                code: _core.ExportResultCode.SUCCESS
            });
        }, 0);
    };
    InMemorySpanExporter1.prototype.shutdown = function() {
        this._stopped = true;
        this._finishedSpans = [];
        return Promise.resolve();
    };
    InMemorySpanExporter1.prototype.reset = function() {
        this._finishedSpans = [];
    };
    InMemorySpanExporter1.prototype.getFinishedSpans = function() {
        return this._finishedSpans;
    };
    return InMemorySpanExporter1;
}();

},{"@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"fSt4P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"Nq2MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleSpanProcessor", ()=>SimpleSpanProcessor
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */ var SimpleSpanProcessor = function() {
    function SimpleSpanProcessor1(_exporter) {
        this._exporter = _exporter;
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
    }
    SimpleSpanProcessor1.prototype.forceFlush = function() {
        // do nothing as all spans are being exported without waiting
        return Promise.resolve();
    };
    // does nothing.
    SimpleSpanProcessor1.prototype.onStart = function(_span) {
    };
    SimpleSpanProcessor1.prototype.onEnd = function(span) {
        var _this = this;
        if (this._isShutdown) return;
        if ((span.spanContext().traceFlags & _api.TraceFlags.SAMPLED) === 0) return;
        // prevent downstream exporter calls from generating spans
        _api.context.with(_core.suppressTracing(_api.context.active()), function() {
            _this._exporter.export([
                span
            ], function(result) {
                var _a;
                if (result.code !== _core.ExportResultCode.SUCCESS) _core.globalErrorHandler((_a = result.error) !== null && _a !== void 0 ? _a : new Error("SimpleSpanProcessor: span export failed (status " + result + ")"));
            });
        });
    };
    SimpleSpanProcessor1.prototype.shutdown = function() {
        var _this = this;
        if (this._isShutdown) return this._shuttingDownPromise;
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise(function(resolve, reject) {
            Promise.resolve().then(function() {
                return _this._exporter.shutdown();
            }).then(resolve).catch(function(e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    return SimpleSpanProcessor1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lzLTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"iqrBb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hdnwm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cwYEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dXLQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackContextManager", ()=>StackContextManager
);
var _api = require("@opentelemetry/api");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
/**
 * Stack Context Manager for managing the state in web
 * it doesn't fully support the async calls though
 */ var StackContextManager = function() {
    function StackContextManager1() {
        /**
         * whether the context manager is enabled or not
         */ this._enabled = false;
        /**
         * Keeps the reference to current context
         */ this._currentContext = _api.ROOT_CONTEXT;
    }
    /**
     *
     * @param context
     * @param target Function to be executed within the context
     */ StackContextManager1.prototype._bindFunction = function(context, target) {
        if (context === void 0) context = _api.ROOT_CONTEXT;
        var manager = this;
        var contextWrapper = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return manager.with(context, function() {
                return target.apply(_this, args);
            });
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        return contextWrapper;
    };
    /**
     * Returns the active context
     */ StackContextManager1.prototype.active = function() {
        return this._currentContext;
    };
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ StackContextManager1.prototype.bind = function(context, target) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) context = this.active();
        if (typeof target === 'function') return this._bindFunction(context, target);
        return target;
    };
    /**
     * Disable the context manager (clears the current context)
     */ StackContextManager1.prototype.disable = function() {
        this._currentContext = _api.ROOT_CONTEXT;
        this._enabled = false;
        return this;
    };
    /**
     * Enables the context manager and creates a default(root) context
     */ StackContextManager1.prototype.enable = function() {
        if (this._enabled) return this;
        this._enabled = true;
        this._currentContext = _api.ROOT_CONTEXT;
        return this;
    };
    /**
     * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
     * The context will be set as active
     * @param context
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ StackContextManager1.prototype.with = function(context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        var previousContext = this._currentContext;
        this._currentContext = context || _api.ROOT_CONTEXT;
        try {
            return fn.call.apply(fn, __spreadArray([
                thisArg
            ], args));
        } finally{
            this._currentContext = previousContext;
        }
    };
    return StackContextManager1;
}();

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"eNyqo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PerformanceTimingNames", ()=>PerformanceTimingNames
);
var PerformanceTimingNames;
(function(PerformanceTimingNames1) {
    PerformanceTimingNames1["CONNECT_END"] = "connectEnd";
    PerformanceTimingNames1["CONNECT_START"] = "connectStart";
    PerformanceTimingNames1["DECODED_BODY_SIZE"] = "decodedBodySize";
    PerformanceTimingNames1["DOM_COMPLETE"] = "domComplete";
    PerformanceTimingNames1["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
    PerformanceTimingNames1["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
    PerformanceTimingNames1["DOM_INTERACTIVE"] = "domInteractive";
    PerformanceTimingNames1["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
    PerformanceTimingNames1["DOMAIN_LOOKUP_START"] = "domainLookupStart";
    PerformanceTimingNames1["ENCODED_BODY_SIZE"] = "encodedBodySize";
    PerformanceTimingNames1["FETCH_START"] = "fetchStart";
    PerformanceTimingNames1["LOAD_EVENT_END"] = "loadEventEnd";
    PerformanceTimingNames1["LOAD_EVENT_START"] = "loadEventStart";
    PerformanceTimingNames1["NAVIGATION_START"] = "navigationStart";
    PerformanceTimingNames1["REDIRECT_END"] = "redirectEnd";
    PerformanceTimingNames1["REDIRECT_START"] = "redirectStart";
    PerformanceTimingNames1["REQUEST_START"] = "requestStart";
    PerformanceTimingNames1["RESPONSE_END"] = "responseEnd";
    PerformanceTimingNames1["RESPONSE_START"] = "responseStart";
    PerformanceTimingNames1["SECURE_CONNECTION_START"] = "secureConnectionStart";
    PerformanceTimingNames1["UNLOAD_EVENT_END"] = "unloadEventEnd";
    PerformanceTimingNames1["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames || (PerformanceTimingNames = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5dYQ0":[function(require,module,exports) {
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _performanceTimingNames = require("./enums/PerformanceTimingNames");

},{"./enums/PerformanceTimingNames":"eNyqo"}],"ccAWO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUrlNormalizingAnchor", ()=>getUrlNormalizingAnchor
);
/**
 * Helper function to be able to use enum as typed key in type and in interface when using forEach
 * @param obj
 * @param key
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
parcelHelpers.export(exports, "hasKey", ()=>hasKey
);
/**
 * Helper function for starting an event on span based on {@link PerformanceEntries}
 * @param span
 * @param performanceName name of performance entry for time start
 * @param entries
 */ parcelHelpers.export(exports, "addSpanNetworkEvent", ()=>addSpanNetworkEvent
);
/**
 * Helper function for adding network events
 * @param span
 * @param resource
 */ parcelHelpers.export(exports, "addSpanNetworkEvents", ()=>addSpanNetworkEvents
);
/**
 * sort resources by startTime
 * @param filteredResources
 */ parcelHelpers.export(exports, "sortResources", ()=>sortResources
);
/**
 * Get closest performance resource ignoring the resources that have been
 * already used.
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 * @param initiatorType
 */ parcelHelpers.export(exports, "getResource", ()=>getResource
);
/**
 * Parses url using anchor element
 * @param url
 */ parcelHelpers.export(exports, "parseUrl", ()=>parseUrl
);
/**
 * Get element XPath
 * @param target - target element
 * @param optimised - when id attribute of element is present the xpath can be
 * simplified to contain id
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
parcelHelpers.export(exports, "getElementXPath", ()=>getElementXPath
);
/**
 * Checks if trace headers should be propagated
 * @param spanUrl
 * @private
 */ parcelHelpers.export(exports, "shouldPropagateTraceHeaders", ()=>shouldPropagateTraceHeaders
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _performanceTimingNames = require("./enums/PerformanceTimingNames");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
// Used to normalize relative URLs
var a;
function getUrlNormalizingAnchor() {
    if (!a) a = document.createElement('a');
    return a;
}
function hasKey(obj, key) {
    return key in obj;
}
function addSpanNetworkEvent(span, performanceName, entries) {
    if (hasKey(entries, performanceName) && typeof entries[performanceName] === 'number') {
        span.addEvent(performanceName, entries[performanceName]);
        return span;
    }
    return undefined;
}
function addSpanNetworkEvents(span, resource) {
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.FETCH_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.DOMAIN_LOOKUP_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.DOMAIN_LOOKUP_END, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.CONNECT_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.SECURE_CONNECTION_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.CONNECT_END, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.REQUEST_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.RESPONSE_START, resource);
    addSpanNetworkEvent(span, _performanceTimingNames.PerformanceTimingNames.RESPONSE_END, resource);
    var encodedLength = resource[_performanceTimingNames.PerformanceTimingNames.ENCODED_BODY_SIZE];
    if (encodedLength !== undefined) span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH, encodedLength);
    var decodedLength = resource[_performanceTimingNames.PerformanceTimingNames.DECODED_BODY_SIZE];
    // Spec: Not set if transport encoding not used (in which case encoded and decoded sizes match)
    if (decodedLength !== undefined && encodedLength !== decodedLength) span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, decodedLength);
}
function sortResources(filteredResources) {
    return filteredResources.slice().sort(function(a1, b) {
        var valueA = a1[_performanceTimingNames.PerformanceTimingNames.FETCH_START];
        var valueB = b[_performanceTimingNames.PerformanceTimingNames.FETCH_START];
        if (valueA > valueB) return 1;
        else if (valueA < valueB) return -1;
        return 0;
    });
}
function getResource(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    if (ignoredResources === void 0) ignoredResources = new WeakSet();
    // de-relativize the URL before usage (does no harm to absolute URLs)
    var urlNormalizingAnchor = getUrlNormalizingAnchor();
    urlNormalizingAnchor.href = spanUrl;
    spanUrl = urlNormalizingAnchor.href;
    var filteredResources = filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType);
    if (filteredResources.length === 0) return {
        mainRequest: undefined
    };
    if (filteredResources.length === 1) return {
        mainRequest: filteredResources[0]
    };
    var sorted = sortResources(filteredResources);
    var parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin !== window.location.origin && sorted.length > 1) {
        var corsPreFlightRequest = sorted[0];
        var mainRequest = findMainRequest(sorted, corsPreFlightRequest[_performanceTimingNames.PerformanceTimingNames.RESPONSE_END], endTimeHR);
        var responseEnd = corsPreFlightRequest[_performanceTimingNames.PerformanceTimingNames.RESPONSE_END];
        var fetchStart = mainRequest[_performanceTimingNames.PerformanceTimingNames.FETCH_START];
        // no corsPreFlightRequest
        if (fetchStart < responseEnd) {
            mainRequest = corsPreFlightRequest;
            corsPreFlightRequest = undefined;
        }
        return {
            corsPreFlightRequest: corsPreFlightRequest,
            mainRequest: mainRequest
        };
    } else return {
        mainRequest: filteredResources[0]
    };
}
/**
 * Will find the main request skipping the cors pre flight requests
 * @param resources
 * @param corsPreFlightRequestEndTime
 * @param spanEndTimeHR
 */ function findMainRequest(resources, corsPreFlightRequestEndTime, spanEndTimeHR) {
    var spanEndTime = _core.hrTimeToNanoseconds(spanEndTimeHR);
    var minTime = _core.hrTimeToNanoseconds(_core.timeInputToHrTime(corsPreFlightRequestEndTime));
    var mainRequest = resources[1];
    var bestGap;
    var length = resources.length;
    for(var i = 1; i < length; i++){
        var resource = resources[i];
        var resourceStartTime = _core.hrTimeToNanoseconds(_core.timeInputToHrTime(resource[_performanceTimingNames.PerformanceTimingNames.FETCH_START]));
        var resourceEndTime = _core.hrTimeToNanoseconds(_core.timeInputToHrTime(resource[_performanceTimingNames.PerformanceTimingNames.RESPONSE_END]));
        var currentGap = spanEndTime - resourceEndTime;
        if (resourceStartTime >= minTime && (!bestGap || currentGap < bestGap)) {
            bestGap = currentGap;
            mainRequest = resource;
        }
    }
    return mainRequest;
}
/**
 * Filter all resources that has started and finished according to span start time and end time.
 *     It will return the closest resource to a start time
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 */ function filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    var startTime = _core.hrTimeToNanoseconds(startTimeHR);
    var endTime = _core.hrTimeToNanoseconds(endTimeHR);
    var filteredResources = resources.filter(function(resource) {
        var resourceStartTime = _core.hrTimeToNanoseconds(_core.timeInputToHrTime(resource[_performanceTimingNames.PerformanceTimingNames.FETCH_START]));
        var resourceEndTime = _core.hrTimeToNanoseconds(_core.timeInputToHrTime(resource[_performanceTimingNames.PerformanceTimingNames.RESPONSE_END]));
        return resource.initiatorType.toLowerCase() === (initiatorType || 'xmlhttprequest') && resource.name === spanUrl && resourceStartTime >= startTime && resourceEndTime <= endTime;
    });
    if (filteredResources.length > 0) filteredResources = filteredResources.filter(function(resource) {
        return !ignoredResources.has(resource);
    });
    return filteredResources;
}
function parseUrl(url) {
    var a2 = document.createElement('a');
    a2.href = url;
    return a2;
}
function getElementXPath(target, optimised) {
    if (target.nodeType === Node.DOCUMENT_NODE) return '/';
    var targetValue = getNodeValue(target, optimised);
    if (optimised && targetValue.indexOf('@id') > 0) return targetValue;
    var xpath = '';
    if (target.parentNode) xpath += getElementXPath(target.parentNode, false);
    xpath += targetValue;
    return xpath;
}
/**
 * get node index within the siblings
 * @param target
 */ function getNodeIndex(target) {
    if (!target.parentNode) return 0;
    var allowedTypes = [
        target.nodeType
    ];
    if (target.nodeType === Node.CDATA_SECTION_NODE) allowedTypes.push(Node.TEXT_NODE);
    var elements = Array.from(target.parentNode.childNodes);
    elements = elements.filter(function(element) {
        var localName = element.localName;
        return allowedTypes.indexOf(element.nodeType) >= 0 && localName === target.localName;
    });
    if (elements.length >= 1) return elements.indexOf(target) + 1; // xpath starts from 1
    // if there are no other similar child xpath doesn't need index
    return 0;
}
/**
 * get node value for xpath
 * @param target
 * @param optimised
 */ function getNodeValue(target, optimised) {
    var nodeType = target.nodeType;
    var index = getNodeIndex(target);
    var nodeValue = '';
    if (nodeType === Node.ELEMENT_NODE) {
        var id = target.getAttribute('id');
        if (optimised && id) return "//*[@id=\"" + id + "\"]";
        nodeValue = target.localName;
    } else if (nodeType === Node.TEXT_NODE || nodeType === Node.CDATA_SECTION_NODE) nodeValue = 'text()';
    else if (nodeType === Node.COMMENT_NODE) nodeValue = 'comment()';
    else return '';
    // if index is 1 it can be omitted in xpath
    if (nodeValue && index > 1) return "/" + nodeValue + "[" + index + "]";
    return "/" + nodeValue;
}
function shouldPropagateTraceHeaders(spanUrl, propagateTraceHeaderCorsUrls) {
    var propagateTraceHeaderUrls = propagateTraceHeaderCorsUrls || [];
    if (typeof propagateTraceHeaderUrls === 'string' || propagateTraceHeaderUrls instanceof RegExp) propagateTraceHeaderUrls = [
        propagateTraceHeaderUrls
    ];
    var parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin === window.location.origin) return true;
    else return propagateTraceHeaderUrls.some(function(propagateTraceHeaderUrl) {
        return _core.urlMatches(spanUrl, propagateTraceHeaderUrl);
    });
}

},{"./enums/PerformanceTimingNames":"eNyqo","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"exbkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _instrumentation = require("./instrumentation");
parcelHelpers.exportAll(_instrumentation, exports);

},{"./instrumentation":"b9rsS","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"b9rsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentLoadInstrumentation", ()=>DocumentLoadInstrumentation
);
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _instrumentation = require("@opentelemetry/instrumentation");
var _attributeNames = require("./enums/AttributeNames");
var _version = require("./version");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _utils = require("./utils");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * This class represents a document load plugin
 */ var DocumentLoadInstrumentation = function(_super) {
    __extends(DocumentLoadInstrumentation1, _super);
    /**
     *
     * @param config
     */ function DocumentLoadInstrumentation1(config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this, '@opentelemetry/instrumentation-document-load', _version.VERSION, config) || this;
        _this.component = 'document-load';
        _this.version = '1';
        _this.moduleName = _this.component;
        return _this;
    }
    DocumentLoadInstrumentation1.prototype.init = function() {
    };
    /**
     * callback to be executed when page is loaded
     */ DocumentLoadInstrumentation1.prototype._onDocumentLoaded = function() {
        var _this = this;
        // Timeout is needed as load event doesn't have yet the performance metrics for loadEnd.
        // Support for event "loadend" is very limited and cannot be used
        window.setTimeout(function() {
            _this._collectPerformance();
        });
    };
    /**
     * Adds spans for all resources
     * @param rootSpan
     */ DocumentLoadInstrumentation1.prototype._addResourcesSpans = function(rootSpan) {
        var _this = this;
        var _a, _b;
        var resources = (_b = (_a = _core.otperformance).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a, 'resource');
        if (resources) resources.forEach(function(resource) {
            _this._initResourceSpan(resource, rootSpan);
        });
    };
    /**
     * Collects information about performance and creates appropriate spans
     */ DocumentLoadInstrumentation1.prototype._collectPerformance = function() {
        var _this = this;
        var metaElement = Array.from(document.getElementsByTagName('meta')).find(function(e) {
            return e.getAttribute('name') === _core.TRACE_PARENT_HEADER;
        });
        var entries = _utils.getPerformanceNavigationEntries();
        var traceparent = metaElement && metaElement.content || '';
        _api.context.with(_api.propagation.extract(_api.ROOT_CONTEXT, {
            traceparent: traceparent
        }), function() {
            var rootSpan = _this._startSpan(_attributeNames.AttributeNames.DOCUMENT_LOAD, _sdkTraceWeb.PerformanceTimingNames.FETCH_START, entries);
            if (!rootSpan) return;
            _api.context.with(_api.trace.setSpan(_api.context.active(), rootSpan), function() {
                var fetchSpan = _this._startSpan(_attributeNames.AttributeNames.DOCUMENT_FETCH, _sdkTraceWeb.PerformanceTimingNames.FETCH_START, entries);
                if (fetchSpan) _api.context.with(_api.trace.setSpan(_api.context.active(), fetchSpan), function() {
                    _sdkTraceWeb.addSpanNetworkEvents(fetchSpan, entries);
                    _this._endSpan(fetchSpan, _sdkTraceWeb.PerformanceTimingNames.RESPONSE_END, entries);
                });
            });
            rootSpan.setAttribute(_semanticConventions.SemanticAttributes.HTTP_URL, location.href);
            rootSpan.setAttribute(_semanticConventions.SemanticAttributes.HTTP_USER_AGENT, navigator.userAgent);
            _this._addResourcesSpans(rootSpan);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.FETCH_START, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.UNLOAD_EVENT_START, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.UNLOAD_EVENT_END, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.DOM_INTERACTIVE, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_START, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_END, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.DOM_COMPLETE, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.LOAD_EVENT_START, entries);
            _sdkTraceWeb.addSpanNetworkEvent(rootSpan, _sdkTraceWeb.PerformanceTimingNames.LOAD_EVENT_END, entries);
            _utils.addSpanPerformancePaintEvents(rootSpan);
            _this._endSpan(rootSpan, _sdkTraceWeb.PerformanceTimingNames.LOAD_EVENT_END, entries);
        });
    };
    /**
     * Helper function for ending span
     * @param span
     * @param performanceName name of performance entry for time end
     * @param entries
     */ DocumentLoadInstrumentation1.prototype._endSpan = function(span, performanceName, entries) {
        // span can be undefined when entries are missing the certain performance - the span will not be created
        if (span) {
            if (_sdkTraceWeb.hasKey(entries, performanceName)) span.end(entries[performanceName]);
            else // just end span
            span.end();
        }
    };
    /**
     * Creates and ends a span with network information about resource added as timed events
     * @param resource
     * @param parentSpan
     */ DocumentLoadInstrumentation1.prototype._initResourceSpan = function(resource, parentSpan) {
        var span = this._startSpan(_attributeNames.AttributeNames.RESOURCE_FETCH, _sdkTraceWeb.PerformanceTimingNames.FETCH_START, resource, parentSpan);
        if (span) {
            span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_URL, resource.name);
            _sdkTraceWeb.addSpanNetworkEvents(span, resource);
            this._endSpan(span, _sdkTraceWeb.PerformanceTimingNames.RESPONSE_END, resource);
        }
    };
    /**
     * Helper function for starting a span
     * @param spanName name of span
     * @param performanceName name of performance entry for time start
     * @param entries
     * @param parentSpan
     */ DocumentLoadInstrumentation1.prototype._startSpan = function(spanName, performanceName, entries, parentSpan) {
        if (_sdkTraceWeb.hasKey(entries, performanceName) && typeof entries[performanceName] === 'number') {
            var span = this.tracer.startSpan(spanName, {
                startTime: entries[performanceName]
            }, parentSpan ? _api.trace.setSpan(_api.context.active(), parentSpan) : undefined);
            span.setAttribute(_attributeNames.AttributeNames.COMPONENT, this.component);
            return span;
        }
        return undefined;
    };
    /**
     * executes callback {_onDocumentLoaded} when the page is loaded
     */ DocumentLoadInstrumentation1.prototype._waitForPageLoad = function() {
        if (window.document.readyState === 'complete') this._onDocumentLoaded();
        else {
            this._onDocumentLoaded = this._onDocumentLoaded.bind(this);
            window.addEventListener('load', this._onDocumentLoaded);
        }
    };
    /**
     * implements enable function
     */ DocumentLoadInstrumentation1.prototype.enable = function() {
        // remove previously attached load to avoid adding the same event twice
        // in case of multiple enable calling.
        window.removeEventListener('load', this._onDocumentLoaded);
        this._waitForPageLoad();
    };
    /**
     * implements disable function
     */ DocumentLoadInstrumentation1.prototype.disable = function() {
        window.removeEventListener('load', this._onDocumentLoaded);
    };
    return DocumentLoadInstrumentation1;
}(_instrumentation.InstrumentationBase);

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","@opentelemetry/instrumentation":"3OTpd","./enums/AttributeNames":"2uTf8","./version":"kjKSa","@opentelemetry/semantic-conventions":"lCgfj","./utils":"hRpx5","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3OTpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _autoLoader = require("./autoLoader");
parcelHelpers.exportAll(_autoLoader, exports);
var _index = require("./platform/index");
parcelHelpers.exportAll(_index, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _typesInternal = require("./types_internal");
parcelHelpers.exportAll(_typesInternal, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);

},{"./autoLoader":"4D6OU","./platform/index":"lLPwY","./types":"jnhcd","./types_internal":"98zfe","./utils":"3YarC","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"4D6OU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * It will register instrumentations and plugins
 * @param options
 * @return returns function to unload instrumentation and plugins that were
 *   registered
 */ parcelHelpers.export(exports, "registerInstrumentations", ()=>registerInstrumentations
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _apiMetrics = require("@opentelemetry/api-metrics");
var _autoLoaderUtils = require("./autoLoaderUtils");
function registerInstrumentations(options) {
    var instrumentations = _autoLoaderUtils.parseInstrumentationOptions(options.instrumentations).instrumentations;
    var tracerProvider = options.tracerProvider || _api.trace.getTracerProvider();
    var meterProvider = options.meterProvider || _apiMetrics.metrics.getMeterProvider();
    _autoLoaderUtils.enableInstrumentations(instrumentations, tracerProvider, meterProvider);
    return function() {
        _autoLoaderUtils.disableInstrumentations(instrumentations);
    };
}

},{"@opentelemetry/api":"6AC4z","@opentelemetry/api-metrics":"gpPIp","./autoLoaderUtils":"7OC7p","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"gpPIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metrics", ()=>metrics
);
var _metrics = require("./api/metrics");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _noopMeter = require("./NoopMeter");
parcelHelpers.exportAll(_noopMeter, exports);
var _noopMeterProvider = require("./NoopMeterProvider");
parcelHelpers.exportAll(_noopMeterProvider, exports);
var _meter = require("./types/Meter");
parcelHelpers.exportAll(_meter, exports);
var _meterProvider = require("./types/MeterProvider");
parcelHelpers.exportAll(_meterProvider, exports);
var _metric = require("./types/Metric");
parcelHelpers.exportAll(_metric, exports);
var _observation = require("./types/Observation");
parcelHelpers.exportAll(_observation, exports);
var _observableResult = require("./types/ObservableResult");
parcelHelpers.exportAll(_observableResult, exports);
var metrics = _metrics.MetricsAPI.getInstance();

},{"./api/metrics":"i9Aut","./NoopMeter":"a0xSf","./NoopMeterProvider":"ivt85","./types/Meter":"8rRiG","./types/MeterProvider":"5PgZn","./types/Metric":"dUGT7","./types/Observation":"iwITG","./types/ObservableResult":"cu7mY","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"i9Aut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MetricsAPI", ()=>MetricsAPI
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _noopMeterProvider = require("../NoopMeterProvider");
var _globalUtils = require("./global-utils");
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */ var MetricsAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function MetricsAPI1() {
    }
    /** Get the singleton instance of the Metrics API */ MetricsAPI1.getInstance = function() {
        if (!this._instance) this._instance = new MetricsAPI1();
        return this._instance;
    };
    /**
     * Set the current global meter. Returns the initialized global meter provider.
     */ MetricsAPI1.prototype.setGlobalMeterProvider = function(provider) {
        if (_globalUtils._global[_globalUtils.GLOBAL_METRICS_API_KEY]) // global meter provider has already been set
        return this.getMeterProvider();
        _globalUtils._global[_globalUtils.GLOBAL_METRICS_API_KEY] = _globalUtils.makeGetter(_globalUtils.API_BACKWARDS_COMPATIBILITY_VERSION, provider, _noopMeterProvider.NOOP_METER_PROVIDER);
        return provider;
    };
    /**
     * Returns the global meter provider.
     */ MetricsAPI1.prototype.getMeterProvider = function() {
        var _a, _b;
        return (_b = (_a = _globalUtils._global[_globalUtils.GLOBAL_METRICS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_globalUtils._global, _globalUtils.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : _noopMeterProvider.NOOP_METER_PROVIDER;
    };
    /**
     * Returns a meter from the global meter provider.
     */ MetricsAPI1.prototype.getMeter = function(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    };
    /** Remove the global meter provider */ MetricsAPI1.prototype.disable = function() {
        delete _globalUtils._global[_globalUtils.GLOBAL_METRICS_API_KEY];
    };
    return MetricsAPI1;
}();

},{"../NoopMeterProvider":"ivt85","./global-utils":"909qD","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"ivt85":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopMeterProvider", ()=>NoopMeterProvider
);
parcelHelpers.export(exports, "NOOP_METER_PROVIDER", ()=>NOOP_METER_PROVIDER
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _noopMeter = require("./NoopMeter");
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */ var NoopMeterProvider = function() {
    function NoopMeterProvider1() {
    }
    NoopMeterProvider1.prototype.getMeter = function(_name, _version, _options) {
        return _noopMeter.NOOP_METER;
    };
    return NoopMeterProvider1;
}();
var NOOP_METER_PROVIDER = new NoopMeterProvider();

},{"./NoopMeter":"a0xSf","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"a0xSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoopMeter", ()=>NoopMeter
);
parcelHelpers.export(exports, "NoopMetric", ()=>NoopMetric
);
parcelHelpers.export(exports, "NoopCounterMetric", ()=>NoopCounterMetric
);
parcelHelpers.export(exports, "NoopUpDownCounterMetric", ()=>NoopUpDownCounterMetric
);
parcelHelpers.export(exports, "NoopHistogramMetric", ()=>NoopHistogramMetric
);
parcelHelpers.export(exports, "NoopObservableBaseMetric", ()=>NoopObservableBaseMetric
);
parcelHelpers.export(exports, "NOOP_METER", ()=>NOOP_METER
);
parcelHelpers.export(exports, "NOOP_COUNTER_METRIC", ()=>NOOP_COUNTER_METRIC
);
parcelHelpers.export(exports, "NOOP_HISTOGRAM_METRIC", ()=>NOOP_HISTOGRAM_METRIC
);
parcelHelpers.export(exports, "NOOP_UP_DOWN_COUNTER_METRIC", ()=>NOOP_UP_DOWN_COUNTER_METRIC
);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_COUNTER_METRIC", ()=>NOOP_OBSERVABLE_COUNTER_METRIC
);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_GAUGE_METRIC", ()=>NOOP_OBSERVABLE_GAUGE_METRIC
);
parcelHelpers.export(exports, "NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC", ()=>NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */ var NoopMeter = function() {
    function NoopMeter1() {
    }
    /**
     * Returns a constant noop histogram.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */ NoopMeter1.prototype.createHistogram = function(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    };
    /**
     * Returns a constant noop counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */ NoopMeter1.prototype.createCounter = function(_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop UpDownCounter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */ NoopMeter1.prototype.createUpDownCounter = function(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop observable gauge.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the observable gauge callback
     */ NoopMeter1.prototype.createObservableGauge = function(_name, _options, _callback) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    /**
     * Returns a constant noop observable counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the observable counter callback
     */ NoopMeter1.prototype.createObservableCounter = function(_name, _options, _callback) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop up down observable counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the up down observable counter callback
     */ NoopMeter1.prototype.createObservableUpDownCounter = function(_name, _options, _callback) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    return NoopMeter1;
}();
var NoopMetric = function() {
    function NoopMetric1() {
    }
    return NoopMetric1;
}();
var NoopCounterMetric = function(_super) {
    __extends(NoopCounterMetric1, _super);
    function NoopCounterMetric1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric1.prototype.add = function(_value, _attributes) {
    };
    return NoopCounterMetric1;
}(NoopMetric);
var NoopUpDownCounterMetric = function(_super) {
    __extends(NoopUpDownCounterMetric1, _super);
    function NoopUpDownCounterMetric1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric1.prototype.add = function(_value, _attributes) {
    };
    return NoopUpDownCounterMetric1;
}(NoopMetric);
var NoopHistogramMetric = function(_super) {
    __extends(NoopHistogramMetric1, _super);
    function NoopHistogramMetric1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric1.prototype.record = function(_value, _attributes) {
    };
    return NoopHistogramMetric1;
}(NoopMetric);
var NoopObservableBaseMetric = function(_super) {
    __extends(NoopObservableBaseMetric1, _super);
    function NoopObservableBaseMetric1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopObservableBaseMetric1.prototype.observation = function() {
        return {
            observable: this,
            value: 0
        };
    };
    return NoopObservableBaseMetric1;
}(NoopMetric);
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableBaseMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableBaseMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableBaseMetric();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"909qD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLOBAL_METRICS_API_KEY", ()=>GLOBAL_METRICS_API_KEY
);
parcelHelpers.export(exports, "_global", ()=>_global
);
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */ parcelHelpers.export(exports, "makeGetter", ()=>makeGetter
);
parcelHelpers.export(exports, "API_BACKWARDS_COMPATIBILITY_VERSION", ()=>API_BACKWARDS_COMPATIBILITY_VERSION
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _platform = require("../platform");
var GLOBAL_METRICS_API_KEY = Symbol.for('io.opentelemetry.js.api.metrics');
var _global = _platform._globalThis;
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 4;

},{"../platform":"8phkl","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8phkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _globalThis = require("./globalThis");
parcelHelpers.exportAll(_globalThis, exports);

},{"./globalThis":"fwQnQ","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"fwQnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_globalThis", ()=>_globalThis
);
var global = arguments[3];
var _globalThis = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : typeof window === 'object' ? window : typeof global === 'object' ? global : {
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"8rRiG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5PgZn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"dUGT7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValueType", ()=>ValueType
);
parcelHelpers.export(exports, "AggregationTemporality", ()=>AggregationTemporality
);
var ValueType;
(function(ValueType1) {
    ValueType1[ValueType1["INT"] = 0] = "INT";
    ValueType1[ValueType1["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {
}));
var AggregationTemporality;
(function(AggregationTemporality1) {
    AggregationTemporality1[AggregationTemporality1["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
    AggregationTemporality1[AggregationTemporality1["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
    AggregationTemporality1[AggregationTemporality1["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
})(AggregationTemporality || (AggregationTemporality = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"iwITG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cu7mY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"7OC7p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Parses the options and returns instrumentations, node plugins and
 *   web plugins
 * @param options
 */ parcelHelpers.export(exports, "parseInstrumentationOptions", ()=>parseInstrumentationOptions
);
/**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */ parcelHelpers.export(exports, "enableInstrumentations", ()=>enableInstrumentations
);
/**
 * Disable instrumentations
 * @param instrumentations
 */ parcelHelpers.export(exports, "disableInstrumentations", ()=>disableInstrumentations
);
function parseInstrumentationOptions(options) {
    if (options === void 0) options = [];
    var instrumentations = [];
    for(var i = 0, j = options.length; i < j; i++){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var option = options[i];
        if (Array.isArray(option)) {
            var results = parseInstrumentationOptions(option);
            instrumentations = instrumentations.concat(results.instrumentations);
        } else if (typeof option === 'function') instrumentations.push(new option());
        else if (option.instrumentationName) instrumentations.push(option);
    }
    return {
        instrumentations: instrumentations
    };
}
function enableInstrumentations(instrumentations, tracerProvider, meterProvider) {
    for(var i = 0, j = instrumentations.length; i < j; i++){
        var instrumentation = instrumentations[i];
        if (tracerProvider) instrumentation.setTracerProvider(tracerProvider);
        if (meterProvider) instrumentation.setMeterProvider(meterProvider);
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) instrumentation.enable();
    }
}
function disableInstrumentations(instrumentations) {
    instrumentations.forEach(function(instrumentation) {
        return instrumentation.disable();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lLPwY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _instrumentation = require("./instrumentation");
parcelHelpers.exportAll(_instrumentation, exports);

},{"./instrumentation":"hCn2q","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hCn2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationBase", ()=>InstrumentationBase
);
var _instrumentation = require("../../instrumentation");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Base abstract class for instrumenting web plugins
 */ var InstrumentationBase = function(_super) {
    __extends(InstrumentationBase1, _super);
    function InstrumentationBase1(instrumentationName, instrumentationVersion, config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this, instrumentationName, instrumentationVersion, config) || this;
        if (_this._config.enabled) _this.enable();
        return _this;
    }
    return InstrumentationBase1;
}(_instrumentation.InstrumentationAbstract);

},{"../../instrumentation":"jMsGo","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jMsGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstrumentationAbstract", ()=>InstrumentationAbstract
);
var _api = require("@opentelemetry/api");
var _apiMetrics = require("@opentelemetry/api-metrics");
var _shimmer = require("shimmer");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Base abstract internal class for instrumenting node and web plugins
 */ var InstrumentationAbstract = function() {
    function InstrumentationAbstract1(instrumentationName, instrumentationVersion, config) {
        if (config === void 0) config = {
        };
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        /* Api to wrap instrumented method */ this._wrap = _shimmer.wrap;
        /* Api to unwrap instrumented methods */ this._unwrap = _shimmer.unwrap;
        /* Api to mass wrap instrumented method */ this._massWrap = _shimmer.massWrap;
        /* Api to mass unwrap instrumented methods */ this._massUnwrap = _shimmer.massUnwrap;
        this._config = __assign({
            enabled: true
        }, config);
        this._diag = _api.diag.createComponentLogger({
            namespace: instrumentationName
        });
        this._tracer = _api.trace.getTracer(instrumentationName, instrumentationVersion);
        this._meter = _apiMetrics.metrics.getMeter(instrumentationName, instrumentationVersion);
    }
    Object.defineProperty(InstrumentationAbstract1.prototype, "meter", {
        /* Returns meter */ get: function() {
            return this._meter;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */ InstrumentationAbstract1.prototype.setMeterProvider = function(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
    };
    /* Returns InstrumentationConfig */ InstrumentationAbstract1.prototype.getConfig = function() {
        return this._config;
    };
    /**
     * Sets InstrumentationConfig to this plugin
     * @param InstrumentationConfig
     */ InstrumentationAbstract1.prototype.setConfig = function(config) {
        if (config === void 0) config = {
        };
        this._config = Object.assign({
        }, config);
    };
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */ InstrumentationAbstract1.prototype.setTracerProvider = function(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    };
    Object.defineProperty(InstrumentationAbstract1.prototype, "tracer", {
        /* Returns tracer */ get: function() {
            return this._tracer;
        },
        enumerable: false,
        configurable: true
    });
    return InstrumentationAbstract1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/api-metrics":"gpPIp","shimmer":"kGpxk","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kGpxk":[function(require,module,exports) {
'use strict';
function isFunction(funktion) {
    return typeof funktion === 'function';
}
// Default to complaining loudly when things don't go according to plan.
var logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: enumerable,
        writable: true,
        value: value
    });
}
// Keep initialization idempotent.
function shimmer(options) {
    if (options && options.logger) {
        if (!isFunction(options.logger)) logger("new logger isn't a function, not replacing");
        else logger = options.logger;
    }
}
function wrap(nodule, name, wrapper) {
    if (!nodule || !nodule[name]) {
        logger('no original function ' + name + ' to wrap');
        return;
    }
    if (!wrapper) {
        logger('no wrapper function');
        logger(new Error().stack);
        return;
    }
    if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
        logger('original object and wrapper must be functions');
        return;
    }
    var original = nodule[name];
    var wrapped = wrapper(original, name);
    defineProperty(wrapped, '__original', original);
    defineProperty(wrapped, '__unwrap', function() {
        if (nodule[name] === wrapped) defineProperty(nodule, name, original);
    });
    defineProperty(wrapped, '__wrapped', true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
}
function massWrap(nodules, names, wrapper) {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) nodules = [
        nodules
    ];
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to wrap on modules');
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            wrap(nodule, name, wrapper);
        });
    });
}
function unwrap(nodule, name) {
    if (!nodule || !nodule[name]) {
        logger('no function to unwrap.');
        logger(new Error().stack);
        return;
    }
    if (!nodule[name].__unwrap) logger('no original to unwrap to -- has ' + name + ' already been unwrapped?');
    else return nodule[name].__unwrap();
}
function massUnwrap(nodules, names) {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) nodules = [
        nodules
    ];
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to unwrap on modules');
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            unwrap(nodule, name);
        });
    });
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
module.exports = shimmer;

},{}],"jnhcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"98zfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3YarC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */ parcelHelpers.export(exports, "safeExecuteInTheMiddle", ()=>safeExecuteInTheMiddle
);
/**
 * Async function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */ parcelHelpers.export(exports, "safeExecuteInTheMiddleAsync", ()=>safeExecuteInTheMiddleAsync
);
/**
 * Checks if certain function has been already wrapped
 * @param func
 */ parcelHelpers.export(exports, "isWrapped", ()=>isWrapped
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    var error;
    var result;
    try {
        result = execute();
    } catch (e) {
        error = e;
    } finally{
        onFinish(error, result);
        if (error && !preventThrowingError) // eslint-disable-next-line no-unsafe-finally
        throw error;
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    return __awaiter(this, void 0, void 0, function() {
        var error, result, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        3,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        execute()
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    e_1 = _a.sent();
                    error = e_1;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    onFinish(error, result);
                    if (error && !preventThrowingError) // eslint-disable-next-line no-unsafe-finally
                    throw error;
                    // eslint-disable-next-line no-unsafe-finally
                    return [
                        2 /*return*/ ,
                        result
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function isWrapped(func) {
    return typeof func === 'function' && typeof func.__original === 'function' && typeof func.__unwrap === 'function' && func.__wrapped === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2uTf8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames
);
var AttributeNames;
(function(AttributeNames1) {
    AttributeNames1["COMPONENT"] = "component";
    AttributeNames1["DOCUMENT_LOAD"] = "documentLoad";
    AttributeNames1["DOCUMENT_FETCH"] = "documentFetch";
    AttributeNames1["RESOURCE_FETCH"] = "resourceFetch";
})(AttributeNames || (AttributeNames = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kjKSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
var VERSION = '0.27.1';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hRpx5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPerformanceNavigationEntries", ()=>getPerformanceNavigationEntries
);
parcelHelpers.export(exports, "addSpanPerformancePaintEvents", ()=>addSpanPerformancePaintEvents
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _eventNames = require("./enums/EventNames");
var getPerformanceNavigationEntries = function() {
    var _a, _b;
    var entries = {
    };
    var performanceNavigationTiming = (_b = (_a = _core.otperformance).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a, 'navigation')[0];
    if (performanceNavigationTiming) {
        var keys = Object.values(_sdkTraceWeb.PerformanceTimingNames);
        keys.forEach(function(key) {
            if (_sdkTraceWeb.hasKey(performanceNavigationTiming, key)) {
                var value = performanceNavigationTiming[key];
                if (typeof value === 'number') entries[key] = value;
            }
        });
    } else {
        // // fallback to previous version
        var perf = _core.otperformance;
        var performanceTiming_1 = perf.timing;
        if (performanceTiming_1) {
            var keys = Object.values(_sdkTraceWeb.PerformanceTimingNames);
            keys.forEach(function(key) {
                if (_sdkTraceWeb.hasKey(performanceTiming_1, key)) {
                    var value = performanceTiming_1[key];
                    if (typeof value === 'number') entries[key] = value;
                }
            });
        }
    }
    return entries;
};
var performancePaintNames = {
    'first-paint': _eventNames.EventNames.FIRST_PAINT,
    'first-contentful-paint': _eventNames.EventNames.FIRST_CONTENTFUL_PAINT
};
var addSpanPerformancePaintEvents = function(span) {
    var _a1, _b;
    var performancePaintTiming = (_b = (_a1 = _core.otperformance).getEntriesByType) === null || _b === void 0 ? void 0 : _b.call(_a1, 'paint');
    if (performancePaintTiming) performancePaintTiming.forEach(function(_a) {
        var name = _a.name, startTime = _a.startTime;
        if (_sdkTraceWeb.hasKey(performancePaintNames, name)) span.addEvent(performancePaintNames[name], startTime);
    });
};

},{"@opentelemetry/core":"dBsXh","@opentelemetry/sdk-trace-web":"eXZZL","./enums/EventNames":"kWXpn","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"kWXpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventNames", ()=>EventNames
);
var EventNames;
(function(EventNames1) {
    EventNames1["FIRST_PAINT"] = "firstPaint";
    EventNames1["FIRST_CONTENTFUL_PAINT"] = "firstContentfulPaint";
})(EventNames || (EventNames = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"cmUfS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zoneJs = require("zone.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _contextZonePeerDep = require("@opentelemetry/context-zone-peer-dep");
parcelHelpers.exportAll(_contextZonePeerDep, exports);

},{"zone.js":"9REDz","@opentelemetry/context-zone-peer-dep":"lln3o","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9REDz":[function(require,module,exports) {
'use strict';
var global = arguments[3];
/**
 * @license Angular v12.0.0-next.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */ /**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ const Zone$1 = function(global1) {
    const performance = global1['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.
    const symbolPrefix = global1['__Zone_symbol_prefix'] || '__zone_symbol__';
    function __symbol__(name) {
        return symbolPrefix + name;
    }
    const checkDuplicate = global1[__symbol__('forceDuplicateZoneCheck')] === true;
    if (global1['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global1['Zone'].__symbol__ !== 'function') throw new Error('Zone already loaded.');
        else return global1['Zone'];
    }
    class Zone {
        constructor(parent, zoneSpec){
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {
            };
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        static assertZonePatched() {
            if (global1['Promise'] !== patches['ZoneAwarePromise']) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
        }
        static get root() {
            let zone = Zone.current;
            while(zone.parent)zone = zone.parent;
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        // tslint:disable-next-line:require-internal-with-underscore
        static __load_patch(name, fn, ignoreDuplicate = false) {
            if (patches.hasOwnProperty(name)) {
                // `checkDuplicate` option is defined from global variable
                // so it works for all modules.
                // `ignoreDuplicate` can work for the specified module
                if (!ignoreDuplicate && checkDuplicate) throw Error('Already loaded patch: ' + name);
            } else if (!global1['__Zone_disable_' + name]) {
                const perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global1, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while(current){
                if (current._properties.hasOwnProperty(key)) return current;
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec) throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== 'function') throw new Error('Expecting function got: ' + callback);
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function() {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally{
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) throw error;
                }
            } finally{
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) return;
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
            };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) task.cancelFn = undefined;
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) throw error;
                }
            } finally{
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || task.data && task.data.isPeriodic) reEntryGuard && task._transitionTo(scheduled, running);
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while(newZone){
                    if (newZone === task.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) // we have to check because internally the delegate can reschedule the task.
            this._updateTaskCount(task, 1);
            if (task.state == scheduling) task._transitionTo(scheduled, scheduling);
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) task._zoneDelegates = null;
            for(let i = 0; i < zoneDelegates.length; i++)zoneDelegates[i]._updateTaskCount(task.type, count);
        }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    Zone.__symbol__ = __symbol__;
    const DELEGATE_ZS = {
        name: '',
        onHasTask: (delegate, _, target, hasTaskState)=>delegate.hasTask(target, hasTaskState)
        ,
        onScheduleTask: (delegate, _, target, task)=>delegate.scheduleTask(target, task)
        ,
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs)=>delegate.invokeTask(target, task, applyThis, applyArgs)
        ,
        onCancelTask: (delegate, _, target, task)=>delegate.cancelTask(target, task)
    };
    class ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec){
            this._taskCounts = {
                'microTask': 0,
                'macroTask': 0,
                'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                // clang-format off
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                // clang-format on
                if (!returnTask) returnTask = task;
            } else {
                if (task.scheduleFn) task.scheduleFn(task);
                else if (task.type == microTask) scheduleMicroTask(task);
                else throw new Error('Task is missing scheduleFn.');
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            else {
                if (!task.cancelFn) throw Error('Task is not cancelable');
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
                this.handleError(targetZone, err);
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) throw new Error('More tasks executed then were scheduled.');
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn){
            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0;
            // tslint:disable-next-line:require-internal-with-underscore
            this._zoneDelegates = null;
            // tslint:disable-next-line:require-internal-with-underscore
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            if (!callback) throw new Error('callback is not defined');
            this.callback = callback;
            const self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) this.invoke = ZoneTask.invokeTask;
            else this.invoke = function() {
                return ZoneTask.invokeTask.call(global1, self, this, arguments);
            };
        }
        static invokeTask(task, target, args) {
            if (!task) task = this;
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            } finally{
                if (_numberOfNestedTaskFrames == 1) drainMicroTaskQueue();
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) this._zoneDelegates = null;
            } else throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
        }
        toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') return this.data.handleId.toString();
            else return Object.prototype.toString.call(this);
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__('setTimeout');
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global1[symbolPromise]) nativeMicroTaskQueuePromise = global1[symbolPromise].resolve(0);
            }
            if (nativeMicroTaskQueuePromise) {
                let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else global1[symbolSetTimeout](drainMicroTaskQueue, 0);
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while(_microTaskQueue.length){
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for(let i = 0; i < queue.length; i++){
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    } catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = {
        name: 'NO ZONE'
    };
    const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    const patches = {
    };
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: ()=>_currentZoneFrame
        ,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: ()=>!Zone[__symbol__('ignoreConsoleErrorUncaughtError')]
        ,
        patchEventTarget: ()=>[]
        ,
        patchOnProperties: noop,
        patchMethod: ()=>noop
        ,
        bindArguments: ()=>[]
        ,
        patchThen: ()=>noop
        ,
        patchMacroTask: ()=>noop
        ,
        patchEventPrototype: ()=>noop
        ,
        isIEOrEdge: ()=>false
        ,
        getGlobalObjects: ()=>undefined
        ,
        ObjectDefineProperty: ()=>noop
        ,
        ObjectGetOwnPropertyDescriptor: ()=>undefined
        ,
        ObjectCreate: ()=>undefined
        ,
        ArraySlice: ()=>[]
        ,
        patchClass: ()=>noop
        ,
        wrapWithCurrentZone: ()=>noop
        ,
        filterProperties: ()=>[]
        ,
        attachOriginToPatched: ()=>noop
        ,
        _redefineProperty: ()=>noop
        ,
        patchCallbacks: ()=>noop
    };
    let _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
    };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() {
    }
    performanceMeasure('Zone', 'Zone');
    return global1['Zone'] = Zone;
}(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */ /// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */ const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */ const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */ const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */ const ObjectCreate = Object.create;
/** Array.prototype.slice */ const ArraySlice = Array.prototype.slice;
/** addEventListener string const */ const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */ const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */ const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */ const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */ const TRUE_STR = 'true';
/** false string const */ const FALSE_STR = 'false';
/** Zone symbol prefix string const. */ const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
const NULL_ON_PROP_VALUE = [
    null
];
function bindArguments(args, source) {
    for(let i = args.length - 1; i >= 0; i--)if (typeof args[i] === 'function') args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor['name'];
    for(let i = 0; i < fnNames.length; i++){
        const name = fnNames[i];
        const delegate1 = prototype[name];
        if (delegate1) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) continue;
            prototype[name] = ((delegate)=>{
                const patched = function() {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate1);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) return true;
    if (propertyDesc.writable === false) return false;
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && ({
}).toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && ({
}).toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames = {
};
const wrapFn = function(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) return;
    let eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) event.preventDefault();
    } else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) desc = {
            enumerable: true,
            configurable: true
        };
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) return;
    const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) return;
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.substr(2);
    let eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    desc.set = function(newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) target = _global;
        if (!target) return;
        let previousValue = target[eventNameSymbol];
        if (previousValue) target.removeEventListener(eventName, wrapFn);
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        } else target[eventNameSymbol] = null;
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function() {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) target = _global;
        if (!target) return null;
        const listener = target[eventNameSymbol];
        if (listener) return listener;
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') target.removeAttribute(prop);
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) for(let i = 0; i < properties.length; i++)patchProperty(obj, 'on' + properties[i], prototype);
    else {
        const onProperties = [];
        for(const prop in obj)if (prop.substr(0, 2) == 'on') onProperties.push(prop);
        for(let j = 0; j < onProperties.length; j++)patchProperty(obj, onProperties[j], prototype);
    }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass) return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function() {
        const a = bindArguments(arguments, className);
        switch(a.length){
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function() {
    });
    let prop1;
    for(prop1 in instance){
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop1 === 'responseBlob') continue;
        (function(prop) {
            if (typeof instance[prop] === 'function') _global[className].prototype[prop] = function() {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
            else ObjectDefineProperty(_global[className].prototype, prop, {
                set: function(fn) {
                    if (typeof fn === 'function') {
                        this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                        // keep callback in wrapped function so we can
                        // use it in Function.prototype.toString to return
                        // the native one.
                        attachOriginToPatched(this[originalInstanceKey][prop], fn);
                    } else this[originalInstanceKey][prop] = fn;
                },
                get: function() {
                    return this[originalInstanceKey][prop];
                }
            });
        })(prop1);
    }
    for(prop1 in OriginalClass)if (prop1 !== 'prototype' && OriginalClass.hasOwnProperty(prop1)) _global[className][prop1] = OriginalClass[prop1];
}
function patchMethod(target, name, patchFn) {
    let proto = target;
    while(proto && !proto.hasOwnProperty(name))proto = ObjectGetPrototypeOf(proto);
    if (!proto && target[name]) // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function() {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function() {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate)=>function(self, args) {
            const meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            else // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    );
}
function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) return true;
    } catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) return ieOrEdge;
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) ieOrEdge = true;
    } catch (error) {
    }
    return ieOrEdge;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ Zone.__load_patch('ZoneAwarePromise', (global2, Zone, api)=>{
    const ObjectGetOwnPropertyDescriptor1 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty1 = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = (e)=>{
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            else console.error(e);
        }
    };
    api.microtaskDrainDone = ()=>{
        while(_uncaughtPromiseErrors.length){
            const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
            try {
                uncaughtPromiseError.zone.runGuarded(()=>{
                    if (uncaughtPromiseError.throwOriginal) throw uncaughtPromiseError.rejection;
                    throw uncaughtPromiseError;
                });
            } catch (error) {
                handleUnhandledRejection(error);
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (typeof handler === 'function') handler.call(this, e);
        } catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v)=>{
            try {
                resolvePromise(promise, state, v);
            } catch (err) {
                resolvePromise(promise, false, err);
            }
        // Do not return value or you will break the Promise spec.
        };
    }
    const once = function() {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function() {
                if (wasCalled) return;
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) throw new TypeError(TYPE_ERROR);
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') then = value && value.then;
            } catch (err) {
                onceWrapper(()=>{
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err1) {
                onceWrapper(()=>{
                    resolvePromise(promise, false, err1);
                })();
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) // the promise is generated by Promise.prototype.finally
                {
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
                    if (trace) // only keep the long stack trace into error when in longStackTraceZone
                    ObjectDefineProperty1(value, CURRENT_TASK_TRACE_SYMBOL, {
                        configurable: true,
                        enumerable: false,
                        writable: true,
                        value: trace
                    });
                }
                for(let i = 0; i < queue.length;)scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    let uncaughtPromiseError = value;
                    try {
                        // Here we throws a new Error to print more readable error log
                        // and if the value is not an error, zone.js builds an `Error`
                        // Object here to attach the stack information.
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                    } catch (err) {
                        uncaughtPromiseError = err;
                    }
                    if (isDisableWrappingUncaughtPromiseRejection) // If disable wrapping uncaught promise reject
                    // use the value instead of wrapping it.
                    uncaughtPromiseError.throwOriginal = true;
                    uncaughtPromiseError.rejection = value;
                    uncaughtPromiseError.promise = promise;
                    uncaughtPromiseError.zone = Zone.current;
                    uncaughtPromiseError.task = Zone.currentTask;
                    _uncaughtPromiseErrors.push(uncaughtPromiseError);
                    api.scheduleMicroTask(); // to make sure that it is running
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') handler.call(this, {
                    rejection: promise[symbolValue],
                    promise: promise
                });
            } catch (err) {
            }
            promise[symbolState] = REJECTED;
            for(let i = 0; i < _uncaughtPromiseErrors.length; i++)if (promise === _uncaughtPromiseErrors[i].promise) _uncaughtPromiseErrors.splice(i, 1);
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, ()=>{
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [
                    parentPromiseValue
                ]);
                resolvePromise(chainPromise, true, value);
            } catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    const noop = function() {
    };
    class ZoneAwarePromise {
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej)=>{
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value1 of values){
                if (!isThenable(value1)) value1 = this.resolve(value1);
                value1.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            return ZoneAwarePromise.allWithCallback(values);
        }
        static allSettled(values) {
            const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
            return P.allWithCallback(values, {
                thenCallback: (value)=>({
                        status: 'fulfilled',
                        value
                    })
                ,
                errorCallback: (err)=>({
                        status: 'rejected',
                        reason: err
                    })
            });
        }
        static allWithCallback(values, callback) {
            let resolve;
            let reject;
            let promise = new this((res, rej)=>{
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value2 of values){
                if (!isThenable(value2)) value2 = this.resolve(value2);
                const curValueIndex = valueIndex;
                try {
                    value2.then((value)=>{
                        resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                        unresolvedCount--;
                        if (unresolvedCount === 0) resolve(resolvedValues);
                    }, (err)=>{
                        if (!callback) reject(err);
                        else {
                            resolvedValues[curValueIndex] = callback.errorCallback(err);
                            unresolvedCount--;
                            if (unresolvedCount === 0) resolve(resolvedValues);
                        }
                    });
                } catch (thenErr) {
                    reject(thenErr);
                }
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) resolve(resolvedValues);
            return promise;
        }
        constructor(executor){
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) throw new Error('Must be an instanceof Promise.');
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        get [Symbol.toStringTag]() {
            return 'Promise';
        }
        get [Symbol.species]() {
            return ZoneAwarePromise;
        }
        then(onFulfilled, onRejected) {
            let C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') C = this.constructor || ZoneAwarePromise;
            const chainPromise = new C(noop);
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            else scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            let C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') C = ZoneAwarePromise;
            const chainPromise = new C(noop);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            else scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global2[symbolPromise] = global2['Promise'];
    global2['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor1(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function(onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject)=>{
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function(self, args) {
            let resultPromise = fn.apply(self, args);
            if (resultPromise instanceof ZoneAwarePromise) return resultPromise;
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) patchThen(ctor);
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        patchMethod(global2, 'fetch', (delegate)=>zoneify(delegate)
        );
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ // override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', (global3)=>{
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
        if (typeof this === 'function') {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') return originalFunctionToString.call(originalDelegate);
                else return Object.prototype.toString.call(originalDelegate);
            }
            if (this === Promise) {
                const nativePromise = global3[PROMISE_SYMBOL];
                if (nativePromise) return originalFunctionToString.call(nativePromise);
            }
            if (this === Error) {
                const nativeError = global3[ERROR_SYMBOL];
                if (nativeError) return originalFunctionToString.call(nativeError);
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function() {
        if (typeof Promise === 'function' && this instanceof Promise) return PROMISE_OBJECT_TO_STRING;
        return originalObjectToString.call(this);
    };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ let passiveSupported = false;
if (typeof window !== 'undefined') try {
    const options = Object.defineProperty({
    }, 'passive', {
        get: function() {
            passiveSupported = true;
        }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
} catch (err) {
    passiveSupported = false;
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames$1 = {
};
const globalSources = {
};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames$1[eventName] = {
    };
    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global1, apis, patchOptions1) {
    const ADD_EVENT_LISTENER = patchOptions1 && patchOptions1.add || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = patchOptions1 && patchOptions1.rm || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = patchOptions1 && patchOptions1.listeners || 'eventListeners';
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions1 && patchOptions1.rmAll || 'removeAllListeners';
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    const PREPEND_EVENT_LISTENER = 'prependListener';
    const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    const invokeTask = function(task, target, event1) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) return;
        const delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event)=>delegate.handleEvent(event)
            ;
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [
            event1
        ]);
        const options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event1.type, delegate, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global1.event;
        if (!event) return;
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global1;
        const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) invokeTask(tasks[0], target, event);
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for(let i = 0; i < copyTasks.length; i++){
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) break;
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global1.event;
        if (!event) return;
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global1;
        const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) invokeTask(tasks[0], target, event);
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for(let i = 0; i < copyTasks.length; i++){
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) break;
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) return false;
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) useGlobalCallback = patchOptions.useG;
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) checkDuplicate = patchOptions.chkDup;
        let returnTarget1 = false;
        if (patchOptions && patchOptions.rt !== undefined) returnTarget1 = patchOptions.rt;
        let proto = obj;
        while(proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER))proto = ObjectGetPrototypeOf(proto);
        if (!proto && obj[ADD_EVENT_LISTENER]) // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
        if (!proto) return false;
        if (proto[zoneSymbolAddEventListener]) return false;
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {
        };
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        /**
         * This util function will build an option object with passive option
         * to handle all possible input from the user.
         */ function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) // doesn't support passive but user want to pass an object as options.
            // this will not work on some old browser, so we just pass a boolean
            // as useCapture parameter
            return !!options.capture;
            if (!passiveSupported || !passive) return options;
            if (typeof options === 'boolean') return {
                capture: options,
                passive: true
            };
            if (!options) return {
                passive: true
            };
            if (typeof options === 'object' && options.passive !== false) return Object.assign(Object.assign({
            }, options), {
                passive: true
            });
            return options;
        }
        const customScheduleGlobal = function(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) return;
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                let symbolEventName;
                if (symbolEventNames) symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) for(let i = 0; i < existingTasks.length; i++){
                    const existingTask = existingTasks[i];
                    if (existingTask === task) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        task.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            task.allRemoved = true;
                            task.target[symbolEventName] = null;
                        }
                        break;
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) return;
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function(task, delegate) {
            const typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };
        const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
        const passiveEvents = _global1[zoneSymbol('PASSIVE_EVENTS')];
        const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function() {
                const target = this || _global1;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
                let delegate = arguments[1];
                if (!delegate) return nativeListener.apply(this, arguments);
                if (isNode && eventName === 'uncaughtException') // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) return nativeListener.apply(this, arguments);
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) return;
                const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                const options = buildEventListenerOptions(arguments[2], passive);
                if (unpatchedEvents) {
                    // check upatched list
                    for(let i = 0; i < unpatchedEvents.length; i++)if (eventName === unpatchedEvents[i]) {
                        if (passive) return nativeListener.call(target, eventName, delegate, options);
                        else return nativeListener.apply(this, arguments);
                    }
                }
                const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                const once = options && typeof options === 'object' ? options.once : false;
                const zone = Zone.current;
                let symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (!symbolEventNames) {
                    prepareEventNames(eventName, eventNameToString);
                    symbolEventNames = zoneSymbolEventNames$1[eventName];
                }
                const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) for(let i = 0; i < existingTasks.length; i++){
                        if (compare(existingTasks[i], delegate)) // same callback, same capture, same event name, just return
                        return;
                    }
                } else existingTasks = target[symbolEventName] = [];
                let source;
                const constructorName = target.constructor['name'];
                const targetSource = globalSources[constructorName];
                if (targetSource) source = targetSource[eventName];
                if (!source) source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) data.taskData = taskData;
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) data.taskData = null;
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) options.once = true;
                if (!(!passiveSupported && typeof task.options === 'boolean')) // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
                if (!prepend) existingTasks.push(task);
                else existingTasks.unshift(task);
                if (returnTarget) return target;
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget1);
        if (nativePrependEventListener) proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget1, true);
        proto[REMOVE_EVENT_LISTENER] = function() {
            const target = this || _global1;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
            const options = arguments[2];
            const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            const delegate = arguments[1];
            if (!delegate) return nativeRemoveEventListener.apply(this, arguments);
            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) return;
            const symbolEventNames = zoneSymbolEventNames$1[eventName];
            let symbolEventName;
            if (symbolEventNames) symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) for(let i = 0; i < existingTasks.length; i++){
                const existingTask = existingTasks[i];
                if (compare(existingTask, delegate)) {
                    existingTasks.splice(i, 1);
                    // set isRemoved to data for faster invokeTask check
                    existingTask.isRemoved = true;
                    if (existingTasks.length === 0) {
                        // all tasks for the eventName + capture have gone,
                        // remove globalZoneAwareCallback and remove the task cache from target
                        existingTask.allRemoved = true;
                        target[symbolEventName] = null;
                        // in the target, we have an event listener which is added by on_property
                        // such as target.onclick = function() {}, so we need to clear this internal
                        // property too if all delegates all removed
                        if (typeof eventName === 'string') {
                            const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                            target[onPropertySymbol] = null;
                        }
                    }
                    existingTask.zone.cancelTask(existingTask);
                    if (returnTarget1) return target;
                    return;
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function() {
            const target = this || _global1;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for(let i = 0; i < tasks.length; i++){
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
            const target = this || _global1;
            let eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for(let i = 0; i < keys.length; i++){
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
                if (patchOptions && patchOptions.transferEventName) eventName = patchOptions.transferEventName(eventName);
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for(let i = 0; i < removeTasks.length; i++){
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for(let i = 0; i < removeTasks.length; i++){
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget1) return this;
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        if (nativeListeners) attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        return true;
    }
    let results = [];
    for(let i1 = 0; i1 < apis.length; i1++)results[i1] = patchEventTargetMethods(apis[i1], patchOptions1);
    return results;
}
function findEventTasks(target, eventName) {
    if (!eventName) {
        const foundTasks = [];
        for(let prop in target){
            const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            let evtName = match && match[1];
            if (evtName && (!eventName || evtName === eventName)) {
                const tasks = target[prop];
                if (tasks) for(let i = 0; i < tasks.length; i++)foundTasks.push(tasks[i]);
            }
        }
        return foundTasks;
    }
    let symbolEventName = zoneSymbolEventNames$1[eventName];
    if (!symbolEventName) {
        prepareEventNames(eventName);
        symbolEventName = zoneSymbolEventNames$1[eventName];
    }
    const captureFalseTasks = target[symbolEventName[FALSE_STR]];
    const captureTrueTasks = target[symbolEventName[TRUE_STR]];
    if (!captureFalseTasks) return captureTrueTasks ? captureTrueTasks.slice() : [];
    else return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
}
function patchEventPrototype(global4, api) {
    const Event = global4['Event'];
    if (Event && Event.prototype) api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate)=>function(self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }
    );
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) return;
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function(name, opts, options) {
        if (opts && opts.prototype) callbacks.forEach(function(callback) {
            const source = `${targetName}.${method}::` + callback;
            const prototype = opts.prototype;
            if (prototype.hasOwnProperty(callback)) {
                const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                if (descriptor && descriptor.value) {
                    descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                    api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            } else if (prototype[callback]) prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
        });
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ const globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
const documentEventNames = [
    'afterscriptexecute',
    'beforescriptexecute',
    'DOMContentLoaded',
    'freeze',
    'fullscreenchange',
    'mozfullscreenchange',
    'webkitfullscreenchange',
    'msfullscreenchange',
    'fullscreenerror',
    'mozfullscreenerror',
    'webkitfullscreenerror',
    'msfullscreenerror',
    'readystatechange',
    'visibilitychange',
    'resume'
];
const windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplayconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
const htmlElementEventNames = [
    'beforecopy',
    'beforecut',
    'beforepaste',
    'copy',
    'cut',
    'paste',
    'dragstart',
    'loadend',
    'animationstart',
    'search',
    'transitionrun',
    'transitionstart',
    'webkitanimationend',
    'webkitanimationiteration',
    'webkitanimationstart',
    'webkittransitionend'
];
const mediaElementEventNames = [
    'encrypted',
    'waitingforkey',
    'msneedkey',
    'mozinterruptbegin',
    'mozinterruptend'
];
const ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
const webglEventNames = [
    'webglcontextrestored',
    'webglcontextlost',
    'webglcontextcreationerror'
];
const formEventNames = [
    'autocomplete',
    'autocompleteerror'
];
const detailEventNames = [
    'toggle'
];
const frameEventNames = [
    'load'
];
const frameSetEventNames = [
    'blur',
    'error',
    'focus',
    'load',
    'resize',
    'scroll',
    'messageerror'
];
const marqueeEventNames = [
    'bounce',
    'finish',
    'start'
];
const XMLHttpRequestEventNames = [
    'loadstart',
    'progress',
    'abort',
    'error',
    'load',
    'progress',
    'timeout',
    'loadend',
    'readystatechange'
];
const IDBIndexEventNames = [
    'upgradeneeded',
    'complete',
    'abort',
    'success',
    'error',
    'blocked',
    'versionchange',
    'close'
];
const websocketEventNames = [
    'close',
    'error',
    'open',
    'message'
];
const workerEventNames = [
    'error',
    'message'
];
const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) return onProperties;
    const tip = ignoreProperties.filter((ip)=>ip.target === target
    );
    if (!tip || tip.length === 0) return onProperties;
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter((op)=>targetIgnoreProperties.indexOf(op) === -1
    );
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) return;
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global2) {
    if (isNode && !isMix) return;
    if (Zone[api.symbol('patchEvents')]) // events are already been patched by legacy patch.
    return;
    const supportsWebSocket = typeof WebSocket !== 'undefined';
    const ignoreProperties = _global2['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        const internalWindow1 = window;
        const ignoreErrorProperties = isIE() ? [
            {
                target: internalWindow1,
                ignoreProperties: [
                    'error'
                ]
            }
        ] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow1, eventNames.concat([
            'messageerror'
        ]), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow1));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow1['SVGElement'] !== 'undefined') patchFilteredProperties(internalWindow1['SVGElement'].prototype, eventNames, ignoreProperties);
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        const HTMLMarqueeElement = internalWindow1['HTMLMarqueeElement'];
        if (HTMLMarqueeElement) patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        const Worker = internalWindow1['Worker'];
        if (Worker) patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
    }
    const XMLHttpRequest = _global2['XMLHttpRequest'];
    if (XMLHttpRequest) // XMLHttpRequest is not available in ServiceWorker, so we need to check here
    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    const XMLHttpRequestEventTarget = _global2['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ Zone.__load_patch('util', (global5, Zone, api)=>{
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global5[SYMBOL_UNPATCHED_EVENTS]) global5[SYMBOL_BLACK_LISTED_EVENTS] = global5[SYMBOL_UNPATCHED_EVENTS];
    if (global5[SYMBOL_BLACK_LISTED_EVENTS]) Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global5[SYMBOL_BLACK_LISTED_EVENTS];
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = ()=>({
            globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames,
            isBrowser,
            isMix,
            isNode,
            TRUE_STR,
            FALSE_STR,
            ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR
        })
    ;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {
    };
    function scheduleTask(task) {
        const data = task.data;
        data.args[0] = function() {
            return task.invoke.apply(this, arguments);
        };
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative.call(window, task.data.handleId);
    }
    setNative = patchMethod(window, setName, (delegate)=>function(self, args) {
            if (typeof args[0] === 'function') {
                const options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                    args: args
                };
                const callback = args[0];
                args[0] = function timer() {
                    try {
                        return callback.apply(this, arguments);
                    } finally{
                        // issue-934, task will be cancelled
                        // even it is a periodic task such as
                        // setInterval
                        // https://github.com/angular/angular/issues/40387
                        // Cleanup tasksByHandleId should be handled before scheduleTask
                        // Since some zoneSpec may intercept and doesn't trigger
                        // scheduleFn(scheduleTask) provided here.
                        if (!options.isPeriodic) {
                            if (typeof options.handleId === 'number') // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[options.handleId];
                            else if (options.handleId) // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            options.handleId[taskSymbol] = null;
                        }
                    }
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) return task;
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === 'number') // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
                else if (handle) // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) return handle;
                return task;
            } else // cause an error by calling it directly.
            return delegate.apply(window, args);
        }
    );
    clearNative = patchMethod(window, cancelName, (delegate)=>function(self, args) {
            const id = args[0];
            let task;
            if (typeof id === 'number') // non nodejs env.
            task = tasksByHandleId[id];
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) task = id;
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') delete tasksByHandleId[id];
                    else if (id) id[taskSymbol] = null;
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            } else // cause an error by calling it directly.
            delegate.apply(window, args);
        }
    );
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function patchCustomElements(_global3, api) {
    const { isBrowser: isBrowser1 , isMix: isMix1  } = api.getGlobalObjects();
    if (!isBrowser1 && !isMix1 || !_global3['customElements'] || !('customElements' in _global3)) return;
    const callbacks = [
        'connectedCallback',
        'disconnectedCallback',
        'adoptedCallback',
        'attributeChangedCallback'
    ];
    api.patchCallbacks(api, _global3.customElements, 'customElements', 'define', callbacks);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function eventTargetPatch(_global4, api) {
    if (Zone[api.symbol('patchEventTarget')]) // EventTarget is already patched.
    return;
    const { eventNames: eventNames1 , zoneSymbolEventNames: zoneSymbolEventNames1 , TRUE_STR: TRUE_STR1 , FALSE_STR: FALSE_STR1 , ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX1  } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for(let i = 0; i < eventNames1.length; i++){
        const eventName = eventNames1[i];
        const falseEventName = eventName + FALSE_STR1;
        const trueEventName = eventName + TRUE_STR1;
        const symbol = ZONE_SYMBOL_PREFIX1 + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX1 + trueEventName;
        zoneSymbolEventNames1[eventName] = {
        };
        zoneSymbolEventNames1[eventName][FALSE_STR1] = symbol;
        zoneSymbolEventNames1[eventName][TRUE_STR1] = symbolCapture;
    }
    const EVENT_TARGET = _global4['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) return;
    api.patchEventTarget(_global4, [
        EVENT_TARGET && EVENT_TARGET.prototype
    ]);
    return true;
}
function patchEvent(global6, api) {
    api.patchEventPrototype(global6, api);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ Zone.__load_patch('legacy', (global7)=>{
    const legacyPatch = global7[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) legacyPatch();
});
Zone.__load_patch('queueMicrotask', (global8, Zone, api)=>{
    api.patchMethod(global8, 'queueMicrotask', (delegate)=>{
        return function(self, args) {
            Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
        };
    });
});
Zone.__load_patch('timers', (global9)=>{
    const set = 'set';
    const clear = 'clear';
    patchTimer(global9, set, clear, 'Timeout');
    patchTimer(global9, set, clear, 'Interval');
    patchTimer(global9, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', (global10)=>{
    patchTimer(global10, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global10, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global10, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global11, Zone)=>{
    const blockingMethods = [
        'alert',
        'prompt',
        'confirm'
    ];
    for(let i = 0; i < blockingMethods.length; i++){
        const name1 = blockingMethods[i];
        patchMethod(global11, name1, (delegate, symbol, name)=>{
            return function(s, args) {
                return Zone.current.run(delegate, global11, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', (global12, Zone, api)=>{
    patchEvent(global12, api);
    eventTargetPatch(global12, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global12['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) api.patchEventTarget(global12, [
        XMLHttpRequestEventTarget.prototype
    ]);
});
Zone.__load_patch('MutationObserver', (global, Zone, api)=>{
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api)=>{
    patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api)=>{
    patchClass('FileReader');
});
Zone.__load_patch('on_property', (global13, Zone, api)=>{
    propertyDescriptorPatch(api, global13);
});
Zone.__load_patch('customElements', (global14, Zone, api)=>{
    patchCustomElements(global14, api);
});
Zone.__load_patch('XHR', (global15, Zone)=>{
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global15);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        const XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) // XMLHttpRequest is not available in service worker
        return;
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = 'readystatechange';
        const SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            const newListener = target[XHR_LISTENER] = ()=>{
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        // Also if the request failed without response (status = 0), the load event handler
                        // will not be triggered, in that case, we should also invoke the placeholder callback
                        // to close the XMLHttpRequest::send macroTask.
                        // https://github.com/angular/angular/issues/38795
                        const loadTasks1 = target[Zone.__symbol__('loadfalse')];
                        if (target.status !== 0 && loadTasks1 && loadTasks1.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function() {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target[Zone.__symbol__('loadfalse')];
                                for(let i = 0; i < loadTasks.length; i++)if (loadTasks[i] === task) loadTasks.splice(i, 1);
                                if (!data.aborted && task.state === SCHEDULED) oriInvoke.call(task);
                            };
                            loadTasks1.push(task);
                        } else task.invoke();
                    } else if (!data.aborted && target[XHR_SCHEDULED] === false) // error occurs when xhr.send()
                    target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) target[XHR_TASK] = task;
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() {
        }
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, 'open', ()=>function(self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            }
        );
        const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', ()=>function(self, args) {
                if (Zone.current[fetchTaskScheduling] === true) // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
                if (self[XHR_SYNC]) // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
                else {
                    const options = {
                        target: self,
                        url: self[XHR_URL],
                        isPeriodic: false,
                        args: args,
                        aborted: false
                    };
                    const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        );
        const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', ()=>function(self, args) {
                const task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || task.data && task.data.aborted) return;
                    task.zone.cancelTask(task);
                } else if (Zone.current[fetchTaskAborting] === true) // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
            }
        );
    }
});
Zone.__load_patch('geolocation', (global16)=>{
    /// GEO_LOCATION
    if (global16['navigator'] && global16['navigator'].geolocation) patchPrototype(global16['navigator'].geolocation, [
        'getCurrentPosition',
        'watchPosition'
    ]);
});
Zone.__load_patch('PromiseRejectionEvent', (global17, Zone)=>{
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function(e) {
            const eventTasks = findEventTasks(global17, evtName);
            eventTasks.forEach((eventTask)=>{
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global17['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, {
                        promise: e.promise,
                        reason: e.rejection
                    });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global17['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
});

},{}],"lln3o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _zoneContextManager = require("./ZoneContextManager");
parcelHelpers.exportAll(_zoneContextManager, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./ZoneContextManager":"la9bE","./types":"240Px","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"la9bE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZoneContextManager", ()=>ZoneContextManager
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _util = require("./util");
/* Key name to be used to save a context reference in Zone */ var ZONE_CONTEXT_KEY = 'OT_ZONE_CONTEXT';
/**
 * ZoneContextManager
 * This module provides an easy functionality for tracing action between asynchronous operations in web.
 * It was not possible with standard [StackContextManager]{@link https://github.com/open-telemetry/opentelemetry-js/blob/main/packages/opentelemetry-sdk-trace-web/src/StackContextManager.ts}.
 * It heavily depends on [zone.js]{@link https://www.npmjs.com/package/zone.js}.
 * It stores the information about context in zone. Each Context will have always new Zone;
 * It also supports binding a certain Span to a target that has "addEventListener" and "removeEventListener".
 * When this happens a new zone is being created and the provided Span is being assigned to this zone.
 */ var ZoneContextManager = function() {
    function ZoneContextManager1() {
        /**
         * whether the context manager is enabled or not
         */ this._enabled = false;
        /**
         * Helps to create a unique name for the zones - part of zone name
         */ this._zoneCounter = 0;
    }
    /**
     * Returns the active context from certain zone name
     * @param activeZone
     */ ZoneContextManager1.prototype._activeContextFromZone = function(activeZone) {
        return activeZone && activeZone.get(ZONE_CONTEXT_KEY) || _api.ROOT_CONTEXT;
    };
    /**
     * @param context A context (span) to be executed within target function
     * @param target Function to be executed within the context
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    ZoneContextManager1.prototype._bindFunction = function(context, target) {
        var manager = this;
        var contextWrapper = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return manager.with(context, function() {
                return target.apply(_this, args);
            });
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        return contextWrapper;
    };
    /**
     * @param context A context (span) to be bind to target
     * @param obj target object on which the listeners will be patched
     */ ZoneContextManager1.prototype._bindListener = function(context, obj) {
        var target = obj;
        if (target.__ot_listeners !== undefined) return obj;
        target.__ot_listeners = {
        };
        if (typeof target.addEventListener === 'function') target.addEventListener = this._patchAddEventListener(target, target.addEventListener, context);
        if (typeof target.removeEventListener === 'function') target.removeEventListener = this._patchRemoveEventListener(target, target.removeEventListener);
        return obj;
    };
    /**
     * Creates a new unique zone name
     */ ZoneContextManager1.prototype._createZoneName = function() {
        this._zoneCounter++;
        var random = Math.random();
        return this._zoneCounter + "-" + random;
    };
    /**
     * Creates a new zone
     * @param zoneName zone name
     * @param context A context (span) to be bind with Zone
     */ ZoneContextManager1.prototype._createZone = function(zoneName, context) {
        var _a;
        return Zone.current.fork({
            name: zoneName,
            properties: (_a = {
            }, _a[ZONE_CONTEXT_KEY] = context, _a)
        });
    };
    /**
     * Returns the active zone
     */ ZoneContextManager1.prototype._getActiveZone = function() {
        return Zone.current;
    };
    /**
     * Patches addEventListener method
     * @param target any target that has "addEventListener" method
     * @param original reference to the patched method
     * @param [context] context to be bind to the listener
     */ ZoneContextManager1.prototype._patchAddEventListener = function(target, original, context) {
        var contextManager = this;
        return function(event, listener, opts) {
            if (target.__ot_listeners === undefined) target.__ot_listeners = {
            };
            var listeners = target.__ot_listeners[event];
            if (listeners === undefined) {
                listeners = new WeakMap();
                target.__ot_listeners[event] = listeners;
            }
            var patchedListener = contextManager.bind(context, listener);
            // store a weak reference of the user listener to ours
            listeners.set(listener, patchedListener);
            return original.call(this, event, patchedListener, opts);
        };
    };
    /**
     * Patches removeEventListener method
     * @param target any target that has "removeEventListener" method
     * @param original reference to the patched method
     */ ZoneContextManager1.prototype._patchRemoveEventListener = function(target, original) {
        return function(event, listener) {
            if (target.__ot_listeners === undefined || target.__ot_listeners[event] === undefined) return original.call(this, event, listener);
            var events = target.__ot_listeners[event];
            var patchedListener = events.get(listener);
            events.delete(listener);
            return original.call(this, event, patchedListener || listener);
        };
    };
    /**
     * Returns the active context
     */ ZoneContextManager1.prototype.active = function() {
        if (!this._enabled) return _api.ROOT_CONTEXT;
        var activeZone = this._getActiveZone();
        var active = this._activeContextFromZone(activeZone);
        if (active) return active;
        return _api.ROOT_CONTEXT;
    };
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ ZoneContextManager1.prototype.bind = function(context, target) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) context = this.active();
        if (typeof target === 'function') return this._bindFunction(context, target);
        else if (_util.isListenerObject(target)) this._bindListener(context, target);
        return target;
    };
    /**
     * Disable the context manager (clears all the contexts)
     */ ZoneContextManager1.prototype.disable = function() {
        this._enabled = false;
        return this;
    };
    /**
     * Enables the context manager and creates a default(root) context
     */ ZoneContextManager1.prototype.enable = function() {
        this._enabled = true;
        return this;
    };
    /**
     * Calls the callback function [fn] with the provided [context].
     *     If [context] is undefined then it will use the active context.
     *     The context will be set as active
     * @param context A context (span) to be called with provided callback
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ZoneContextManager1.prototype.with = function(context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
        var zoneName = this._createZoneName();
        var newZone = this._createZone(zoneName, context);
        return newZone.run(fn, thisArg, args);
    };
    return ZoneContextManager1;
}();

},{"@opentelemetry/api":"6AC4z","./util":"5r8zZ","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5r8zZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * check if an object has addEventListener and removeEventListener functions then it will return true
 * @param obj
 */ parcelHelpers.export(exports, "isListenerObject", ()=>isListenerObject
);
function isListenerObject(obj) {
    if (obj === void 0) obj = {
    };
    return typeof obj.addEventListener === 'function' && typeof obj.removeEventListener === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"240Px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9CGFP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "otlpTypes", ()=>_types
);
parcelHelpers.export(exports, "toCollectorResource", ()=>_transform.toCollectorResource
);
parcelHelpers.export(exports, "toOTLPExportTraceServiceRequest", ()=>_transform.toOTLPExportTraceServiceRequest
);
parcelHelpers.export(exports, "appendResourcePathToUrlIfNotPresent", ()=>_util.appendResourcePathToUrlIfNotPresent
);
var _types = require("./types");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _otlpexporterBase = require("./OTLPExporterBase");
parcelHelpers.exportAll(_otlpexporterBase, exports);
var _platform = require("./platform");
parcelHelpers.exportAll(_platform, exports);
var _transform = require("./transform");
var _util = require("./util");

},{"./types":"lUN26","./OTLPExporterBase":"5IeUP","./platform":"hQqaR","./transform":"4YMIx","./util":"2YOCs","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"lUN26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "opentelemetryProto", ()=>opentelemetryProto
);
parcelHelpers.export(exports, "OTLPExporterError", ()=>OTLPExporterError
);
parcelHelpers.export(exports, "OTLP_SPAN_KIND_MAPPING", ()=>OTLP_SPAN_KIND_MAPPING
);
var _api = require("@opentelemetry/api");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var _a;
var opentelemetryProto;
(function(opentelemetryProto1) {
    var metrics1;
    (function(metrics) {
        var v11;
        (function(v1) {
            var AggregationTemporality1;
            (function(AggregationTemporality) {
                // UNSPECIFIED is the default AggregationTemporality, it MUST not be used.
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
                // DELTA is an AggregationTemporality for a metric aggregator which reports
                // changes since last report time. Successive metrics contain aggregation of
                // values from continuous and non-overlapping intervals.
                //
                // The values for a DELTA metric are based only on the time interval
                // associated with one measurement cycle. There is no dependency on
                // previous measurements like is the case for CUMULATIVE metrics.
                //
                // For example, consider a system measuring the number of requests that
                // it receives and reports the sum of these requests every second as a
                // DELTA metric:
                //
                //   1. The system starts receiving at time=t_0.
                //   2. A request is received, the system measures 1 request.
                //   3. A request is received, the system measures 1 request.
                //   4. A request is received, the system measures 1 request.
                //   5. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+1 with a value of 3.
                //   6. A request is received, the system measures 1 request.
                //   7. A request is received, the system measures 1 request.
                //   8. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0+1 to
                //      t_0+2 with a value of 2.
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
                // CUMULATIVE is an AggregationTemporality for a metric aggregator which
                // reports changes since a fixed start time. This means that current values
                // of a CUMULATIVE metric depend on all previous measurements since the
                // start time. Because of this, the sender is required to retain this state
                // in some form. If this state is lost or invalidated, the CUMULATIVE metric
                // values MUST be reset and a new fixed start time following the last
                // reported measurement time sent MUST be used.
                //
                // For example, consider a system measuring the number of requests that
                // it receives and reports the sum of these requests every second as a
                // CUMULATIVE metric:
                //
                //   1. The system starts receiving at time=t_0.
                //   2. A request is received, the system measures 1 request.
                //   3. A request is received, the system measures 1 request.
                //   4. A request is received, the system measures 1 request.
                //   5. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+1 with a value of 3.
                //   6. A request is received, the system measures 1 request.
                //   7. A request is received, the system measures 1 request.
                //   8. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_0 to
                //      t_0+2 with a value of 5.
                //   9. The system experiences a fault and loses state.
                //   10. The system recovers and resumes receiving at time=t_1.
                //   11. A request is received, the system measures 1 request.
                //   12. The 1 second collection cycle ends. A metric is exported for the
                //      number of requests received over the interval of time t_1 to
                //      t_0+1 with a value of 1.
                //
                // Note: Even though, when reporting changes since last report time, using
                // CUMULATIVE is valid, it is not recommended. This may cause problems for
                // systems that do not use start_time to determine when the aggregation
                // value was reset (e.g. Prometheus).
                AggregationTemporality[AggregationTemporality["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
            })(AggregationTemporality1 = v1.AggregationTemporality || (v1.AggregationTemporality = {
            }));
        })(v11 = metrics.v1 || (metrics.v1 = {
        }));
    })(metrics1 = opentelemetryProto1.metrics || (opentelemetryProto1.metrics = {
    }));
    var trace1;
    (function(trace) {
        var v12;
        (function(v1) {
            var ConstantSampler1;
            (function(ConstantSampler) {
                var ConstantDecision1;
                (function(ConstantDecision) {
                    ConstantDecision[ConstantDecision["ALWAYS_OFF"] = 0] = "ALWAYS_OFF";
                    ConstantDecision[ConstantDecision["ALWAYS_ON"] = 1] = "ALWAYS_ON";
                    ConstantDecision[ConstantDecision["ALWAYS_PARENT"] = 2] = "ALWAYS_PARENT";
                })(ConstantDecision1 = ConstantSampler.ConstantDecision || (ConstantSampler.ConstantDecision = {
                }));
            })(ConstantSampler1 = v1.ConstantSampler || (v1.ConstantSampler = {
            }));
            var Span1;
            (function(Span) {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                var SpanKind1;
                (function(SpanKind) {
                    SpanKind[SpanKind["SPAN_KIND_UNSPECIFIED"] = 0] = "SPAN_KIND_UNSPECIFIED";
                    SpanKind[SpanKind["SPAN_KIND_INTERNAL"] = 1] = "SPAN_KIND_INTERNAL";
                    SpanKind[SpanKind["SPAN_KIND_SERVER"] = 2] = "SPAN_KIND_SERVER";
                    SpanKind[SpanKind["SPAN_KIND_CLIENT"] = 3] = "SPAN_KIND_CLIENT";
                    SpanKind[SpanKind["SPAN_KIND_PRODUCER"] = 4] = "SPAN_KIND_PRODUCER";
                    SpanKind[SpanKind["SPAN_KIND_CONSUMER"] = 5] = "SPAN_KIND_CONSUMER";
                })(SpanKind1 = Span.SpanKind || (Span.SpanKind = {
                }));
            })(Span1 = v1.Span || (v1.Span = {
            }));
        })(v12 = trace.v1 || (trace.v1 = {
        }));
    })(trace1 = opentelemetryProto1.trace || (opentelemetryProto1.trace = {
    }));
    var common1;
    (function(common) {
        var v13;
        (function(v1) {
            var ValueType1;
            (function(ValueType) {
                ValueType[ValueType["STRING"] = 0] = "STRING";
                ValueType[ValueType["INT"] = 1] = "INT";
                ValueType[ValueType["DOUBLE"] = 2] = "DOUBLE";
                ValueType[ValueType["BOOL"] = 3] = "BOOL";
            })(ValueType1 = v1.ValueType || (v1.ValueType = {
            }));
        })(v13 = common.v1 || (common.v1 = {
        }));
    })(common1 = opentelemetryProto1.common || (opentelemetryProto1.common = {
    }));
})(opentelemetryProto || (opentelemetryProto = {
}));
/**
 * Interface for handling error
 */ var OTLPExporterError = function(_super) {
    __extends(OTLPExporterError1, _super);
    function OTLPExporterError1(message, code, data) {
        var _this = _super.call(this, message) || this;
        _this.name = 'OTLPExporterError';
        _this.data = data;
        _this.code = code;
        return _this;
    }
    return OTLPExporterError1;
}(Error);
var OTLP_SPAN_KIND_MAPPING = (_a = {
}, _a[_api.SpanKind.INTERNAL] = opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_INTERNAL, _a[_api.SpanKind.SERVER] = opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_SERVER, _a[_api.SpanKind.CLIENT] = opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_CLIENT, _a[_api.SpanKind.PRODUCER] = opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_PRODUCER, _a[_api.SpanKind.CONSUMER] = opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_CONSUMER, _a);

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"5IeUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OTLPExporterBase", ()=>OTLPExporterBase
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
/**
 * Collector Exporter abstract base class
 */ var OTLPExporterBase = function() {
    /**
     * @param config
     */ function OTLPExporterBase1(config) {
        if (config === void 0) config = {
        };
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
        this._sendingPromises = [];
        this.url = this.getDefaultUrl(config);
        if (typeof config.hostname === 'string') this.hostname = config.hostname;
        this.attributes = config.attributes;
        this.shutdown = this.shutdown.bind(this);
        this._concurrencyLimit = typeof config.concurrencyLimit === 'number' ? config.concurrencyLimit : Infinity;
        // platform dependent
        this.onInit(config);
    }
    /**
     * Export items.
     * @param items
     * @param resultCallback
     */ OTLPExporterBase1.prototype.export = function(items, resultCallback) {
        if (this._isShutdown) {
            resultCallback({
                code: _core.ExportResultCode.FAILED,
                error: new Error('Exporter has been shutdown')
            });
            return;
        }
        if (this._sendingPromises.length >= this._concurrencyLimit) {
            resultCallback({
                code: _core.ExportResultCode.FAILED,
                error: new Error('Concurrent export limit reached')
            });
            return;
        }
        this._export(items).then(function() {
            resultCallback({
                code: _core.ExportResultCode.SUCCESS
            });
        }).catch(function(error) {
            resultCallback({
                code: _core.ExportResultCode.FAILED,
                error: error
            });
        });
    };
    OTLPExporterBase1.prototype._export = function(items) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            try {
                _api.diag.debug('items to be sent', items);
                _this.send(items, resolve, reject);
            } catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Shutdown the exporter.
     */ OTLPExporterBase1.prototype.shutdown = function() {
        var _this = this;
        if (this._isShutdown) {
            _api.diag.debug('shutdown already started');
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        _api.diag.debug('shutdown started');
        this._shuttingDownPromise = new Promise(function(resolve, reject) {
            Promise.resolve().then(function() {
                return _this.onShutdown();
            }).then(function() {
                return Promise.all(_this._sendingPromises);
            }).then(function() {
                resolve();
            }).catch(function(e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    return OTLPExporterBase1;
}();

},{"@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"hQqaR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _otlptraceExporter = require("./OTLPTraceExporter");
parcelHelpers.exportAll(_otlptraceExporter, exports);
var _otlpexporterBrowserBase = require("./OTLPExporterBrowserBase");
parcelHelpers.exportAll(_otlpexporterBrowserBase, exports);

},{"./OTLPTraceExporter":"9LJHM","./OTLPExporterBrowserBase":"g8OeB","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"9LJHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OTLPTraceExporter", ()=>OTLPTraceExporter
);
var _otlpexporterBrowserBase = require("./OTLPExporterBrowserBase");
var _transform = require("../../transform");
var _core = require("@opentelemetry/core");
var _util = require("../../util");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var DEFAULT_COLLECTOR_RESOURCE_PATH = '/v1/traces';
var DEFAULT_COLLECTOR_URL = "http://localhost:55681" + DEFAULT_COLLECTOR_RESOURCE_PATH;
/**
 * Collector Trace Exporter for Web
 */ var OTLPTraceExporter = function(_super) {
    __extends(OTLPTraceExporter1, _super);
    function OTLPTraceExporter1(config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this, config) || this;
        _this._headers = Object.assign(_this._headers, _core.baggageUtils.parseKeyPairsIntoRecord(_core.getEnv().OTEL_EXPORTER_OTLP_TRACES_HEADERS));
        return _this;
    }
    OTLPTraceExporter1.prototype.convert = function(spans) {
        return _transform.toOTLPExportTraceServiceRequest(spans, this, true);
    };
    OTLPTraceExporter1.prototype.getDefaultUrl = function(config) {
        return typeof config.url === 'string' ? config.url : _core.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0 ? _core.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT : _core.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0 ? _util.appendResourcePathToUrlIfNotPresent(_core.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT, DEFAULT_COLLECTOR_RESOURCE_PATH) : DEFAULT_COLLECTOR_URL;
    };
    return OTLPTraceExporter1;
}(_otlpexporterBrowserBase.OTLPExporterBrowserBase);

},{"./OTLPExporterBrowserBase":"g8OeB","../../transform":"4YMIx","@opentelemetry/core":"dBsXh","../../util":"2YOCs","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"g8OeB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OTLPExporterBrowserBase", ()=>OTLPExporterBrowserBase
);
var _otlpexporterBase = require("../../OTLPExporterBase");
var _util = require("../../util");
var _util1 = require("./util");
var _api = require("@opentelemetry/api");
var _core = require("@opentelemetry/core");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Collector Metric Exporter abstract base class
 */ var OTLPExporterBrowserBase = function(_super) {
    __extends(OTLPExporterBrowserBase1, _super);
    /**
     * @param config
     */ function OTLPExporterBrowserBase1(config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this, config) || this;
        _this._useXHR = false;
        _this._useXHR = !!config.headers || typeof navigator.sendBeacon !== 'function';
        if (_this._useXHR) _this._headers = Object.assign({
        }, _util.parseHeaders(config.headers), _core.baggageUtils.parseKeyPairsIntoRecord(_core.getEnv().OTEL_EXPORTER_OTLP_HEADERS));
        else _this._headers = {
        };
        return _this;
    }
    OTLPExporterBrowserBase1.prototype.onInit = function() {
        window.addEventListener('unload', this.shutdown);
    };
    OTLPExporterBrowserBase1.prototype.onShutdown = function() {
        window.removeEventListener('unload', this.shutdown);
    };
    OTLPExporterBrowserBase1.prototype.send = function(items, onSuccess, onError) {
        var _this = this;
        if (this._isShutdown) {
            _api.diag.debug('Shutdown already started. Cannot send objects');
            return;
        }
        var serviceRequest = this.convert(items);
        var body = JSON.stringify(serviceRequest);
        var promise = new Promise(function(resolve, reject) {
            if (_this._useXHR) _util1.sendWithXhr(body, _this.url, _this._headers, resolve, reject);
            else _util1.sendWithBeacon(body, _this.url, {
                type: 'application/json'
            }, resolve, reject);
        }).then(onSuccess, onError);
        this._sendingPromises.push(promise);
        var popPromise = function() {
            var index = _this._sendingPromises.indexOf(promise);
            _this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    };
    return OTLPExporterBrowserBase1;
}(_otlpexporterBase.OTLPExporterBase);

},{"../../OTLPExporterBase":"5IeUP","../../util":"2YOCs","./util":"jljuE","@opentelemetry/api":"6AC4z","@opentelemetry/core":"dBsXh","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2YOCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parses headers from config leaving only those that have defined values
 * @param partialHeaders
 */ parcelHelpers.export(exports, "parseHeaders", ()=>parseHeaders
);
parcelHelpers.export(exports, "appendResourcePathToUrlIfNotPresent", ()=>appendResourcePathToUrlIfNotPresent
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
function parseHeaders(partialHeaders) {
    if (partialHeaders === void 0) partialHeaders = {
    };
    var headers = {
    };
    Object.entries(partialHeaders).forEach(function(_a) {
        var key = _a[0], value = _a[1];
        if (typeof value !== 'undefined') headers[key] = String(value);
        else _api.diag.warn("Header \"" + key + "\" has wrong value and will be ignored");
    });
    return headers;
}
function appendResourcePathToUrlIfNotPresent(url, path) {
    if (url.match(/v\d\/(traces|metrics)$/)) return url;
    return url + path;
}

},{"@opentelemetry/api":"6AC4z","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jljuE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Send metrics/spans using browser navigator.sendBeacon
 * @param body
 * @param onSuccess
 * @param onError
 */ parcelHelpers.export(exports, "sendWithBeacon", ()=>sendWithBeacon
);
/**
 * function to send metrics/spans using browser XMLHttpRequest
 *     used when navigator.sendBeacon is not available
 * @param body
 * @param onSuccess
 * @param onError
 */ parcelHelpers.export(exports, "sendWithXhr", ()=>sendWithXhr
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _api = require("@opentelemetry/api");
var _types = require("../../types");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function sendWithBeacon(body, url, blobPropertyBag, onSuccess, onError) {
    if (navigator.sendBeacon(url, new Blob([
        body
    ], blobPropertyBag))) {
        _api.diag.debug('sendBeacon - can send', body);
        onSuccess();
    } else {
        var error = new _types.OTLPExporterError("sendBeacon - cannot send " + body);
        onError(error);
    }
}
function sendWithXhr(body, url, headers, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    var defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    Object.entries(__assign(__assign({
    }, defaultHeaders), headers)).forEach(function(_a) {
        var k = _a[0], v = _a[1];
        xhr.setRequestHeader(k, v);
    });
    xhr.send(body);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 299) {
                _api.diag.debug('xhr success', body);
                onSuccess();
            } else {
                var error = new _types.OTLPExporterError("Failed to export with XHR (status: " + xhr.status + ")", xhr.status);
                onError(error);
            }
        }
    };
}

},{"@opentelemetry/api":"6AC4z","../../types":"lUN26","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"4YMIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts attributes to KeyValue array
 * @param attributes
 */ parcelHelpers.export(exports, "toCollectorAttributes", ()=>toCollectorAttributes
);
/**
 * Converts array of unknown value to ArrayValue
 * @param values
 */ parcelHelpers.export(exports, "toCollectorArrayValue", ()=>toCollectorArrayValue
);
/**
 * Converts attributes to KeyValueList
 * @param attributes
 */ parcelHelpers.export(exports, "toCollectorKeyValueList", ()=>toCollectorKeyValueList
);
/**
 * Converts key and unknown value to KeyValue
 * @param value event value
 */ parcelHelpers.export(exports, "toCollectorAttributeKeyValue", ()=>toCollectorAttributeKeyValue
);
/**
 * Converts unknown value to AnyValue
 * @param value
 */ parcelHelpers.export(exports, "toCollectorAnyValue", ()=>toCollectorAnyValue
);
/**
 *
 * Converts events
 * @param events array of events
 */ parcelHelpers.export(exports, "toCollectorEvents", ()=>toCollectorEvents
);
/**
 * Converts span
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */ parcelHelpers.export(exports, "toCollectorSpan", ()=>toCollectorSpan
);
/**
 * Converts status
 * @param status
 */ parcelHelpers.export(exports, "toCollectorStatus", ()=>toCollectorStatus
);
/**
 * Converts resource
 * @param resource
 * @param additionalAttributes
 */ parcelHelpers.export(exports, "toCollectorResource", ()=>toCollectorResource
);
/**
 * Converts span kind
 * @param kind
 */ parcelHelpers.export(exports, "toCollectorKind", ()=>toCollectorKind
);
/**
 * Converts traceState
 * @param traceState
 */ parcelHelpers.export(exports, "toCollectorTraceState", ()=>toCollectorTraceState
);
/**
 * Prepares trace service request to be sent to collector
 * @param spans spans
 * @param collectorExporterBase
 * @param useHex - if ids should be kept as hex without converting to base64
 */ parcelHelpers.export(exports, "toOTLPExportTraceServiceRequest", ()=>toOTLPExportTraceServiceRequest
);
/**
 * Takes an array of spans and groups them by resource and instrumentation
 * library
 * @param spans spans
 */ parcelHelpers.export(exports, "groupSpansByResourceAndLibrary", ()=>groupSpansByResourceAndLibrary
);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _core = require("@opentelemetry/core");
var _types = require("./types");
var MAX_INTEGER_VALUE = 2147483647;
var MIN_INTEGER_VALUE = -2147483648;
function toCollectorAttributes(attributes) {
    return Object.keys(attributes).map(function(key) {
        return toCollectorAttributeKeyValue(key, attributes[key]);
    });
}
function toCollectorArrayValue(values) {
    return {
        values: values.map(function(value) {
            return toCollectorAnyValue(value);
        })
    };
}
function toCollectorKeyValueList(attributes) {
    return {
        values: toCollectorAttributes(attributes)
    };
}
function toCollectorAttributeKeyValue(key, value) {
    var anyValue = toCollectorAnyValue(value);
    return {
        key: key,
        value: anyValue
    };
}
function toCollectorAnyValue(value) {
    var anyValue = {
    };
    if (typeof value === 'string') anyValue.stringValue = value;
    else if (typeof value === 'boolean') anyValue.boolValue = value;
    else if (typeof value === 'number' && value <= MAX_INTEGER_VALUE && value >= MIN_INTEGER_VALUE && Number.isInteger(value)) anyValue.intValue = value;
    else if (typeof value === 'number') anyValue.doubleValue = value;
    else if (Array.isArray(value)) anyValue.arrayValue = toCollectorArrayValue(value);
    else if (value) anyValue.kvlistValue = toCollectorKeyValueList(value);
    return anyValue;
}
function toCollectorEvents(timedEvents) {
    return timedEvents.map(function(timedEvent) {
        var timeUnixNano = _core.hrTimeToNanoseconds(timedEvent.time);
        var name = timedEvent.name;
        var attributes = toCollectorAttributes(timedEvent.attributes || {
        });
        var droppedAttributesCount = 0;
        var protoEvent = {
            timeUnixNano: timeUnixNano,
            name: name,
            attributes: attributes,
            droppedAttributesCount: droppedAttributesCount
        };
        return protoEvent;
    });
}
/**
 * Converts links
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */ function toCollectorLinks(span, useHex) {
    return span.links.map(function(link) {
        var protoLink = {
            traceId: useHex ? link.context.traceId : _core.hexToBase64(link.context.traceId),
            spanId: useHex ? link.context.spanId : _core.hexToBase64(link.context.spanId),
            attributes: toCollectorAttributes(link.attributes || {
            }),
            droppedAttributesCount: 0
        };
        return protoLink;
    });
}
function toCollectorSpan(span, useHex) {
    return {
        traceId: useHex ? span.spanContext().traceId : _core.hexToBase64(span.spanContext().traceId),
        spanId: useHex ? span.spanContext().spanId : _core.hexToBase64(span.spanContext().spanId),
        parentSpanId: span.parentSpanId ? useHex ? span.parentSpanId : _core.hexToBase64(span.parentSpanId) : undefined,
        traceState: toCollectorTraceState(span.spanContext().traceState),
        name: span.name,
        kind: toCollectorKind(span.kind),
        startTimeUnixNano: _core.hrTimeToNanoseconds(span.startTime),
        endTimeUnixNano: _core.hrTimeToNanoseconds(span.endTime),
        attributes: toCollectorAttributes(span.attributes),
        droppedAttributesCount: 0,
        events: toCollectorEvents(span.events),
        droppedEventsCount: 0,
        status: toCollectorStatus(span.status),
        links: toCollectorLinks(span, useHex),
        droppedLinksCount: 0
    };
}
function toCollectorStatus(status) {
    var spanStatus = {
        code: status.code
    };
    if (typeof status.message !== 'undefined') spanStatus.message = status.message;
    return spanStatus;
}
function toCollectorResource(resource, additionalAttributes) {
    if (additionalAttributes === void 0) additionalAttributes = {
    };
    var attr = Object.assign({
    }, additionalAttributes, resource ? resource.attributes : {
    });
    var resourceProto = {
        attributes: toCollectorAttributes(attr),
        droppedAttributesCount: 0
    };
    return resourceProto;
}
function toCollectorKind(kind) {
    var collectorKind = _types.OTLP_SPAN_KIND_MAPPING[kind];
    return typeof collectorKind === 'number' ? collectorKind : _types.opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_UNSPECIFIED;
}
function toCollectorTraceState(traceState) {
    if (!traceState) return undefined;
    return traceState.serialize();
}
function toOTLPExportTraceServiceRequest(spans, collectorTraceExporterBase, useHex) {
    var groupedSpans = groupSpansByResourceAndLibrary(spans);
    var additionalAttributes = Object.assign({
    }, collectorTraceExporterBase.attributes);
    return {
        resourceSpans: toCollectorResourceSpans(groupedSpans, additionalAttributes, useHex)
    };
}
function groupSpansByResourceAndLibrary(spans) {
    return spans.reduce(function(spanMap, span) {
        //group by resource
        var resourceSpans = spanMap.get(span.resource);
        if (!resourceSpans) {
            resourceSpans = new Map();
            spanMap.set(span.resource, resourceSpans);
        }
        //group by instrumentation library
        var libSpans = resourceSpans.get(span.instrumentationLibrary);
        if (!libSpans) {
            libSpans = new Array();
            resourceSpans.set(span.instrumentationLibrary, libSpans);
        }
        libSpans.push(span);
        return spanMap;
    }, new Map());
}
/**
 * Convert to InstrumentationLibrarySpans
 * @param instrumentationLibrary
 * @param spans
 * @param useHex - if ids should be kept as hex without converting to base64
 */ function toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex) {
    return {
        spans: spans.map(function(span) {
            return toCollectorSpan(span, useHex);
        }),
        instrumentationLibrary: instrumentationLibrary
    };
}
/**
 * Returns a list of resource spans which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 * @param useHex - if ids should be kept as hex without converting to base64
 */ function toCollectorResourceSpans(groupedSpans, baseAttributes, useHex) {
    return Array.from(groupedSpans, function(_a1) {
        var resource = _a1[0], libSpans = _a1[1];
        return {
            resource: toCollectorResource(resource, baseAttributes),
            instrumentationLibrarySpans: Array.from(libSpans, function(_a) {
                var instrumentationLibrary = _a[0], spans = _a[1];
                return toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex);
            })
        };
    });
}

},{"@opentelemetry/core":"dBsXh","./types":"lUN26","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"jYPe9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _xhr = require("./xhr");
parcelHelpers.exportAll(_xhr, exports);

},{"./xhr":"3C1i1","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"3C1i1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XMLHttpRequestInstrumentation", ()=>XMLHttpRequestInstrumentation
);
var _api = require("@opentelemetry/api");
var _instrumentation = require("@opentelemetry/instrumentation");
var _core = require("@opentelemetry/core");
var _semanticConventions = require("@opentelemetry/semantic-conventions");
var _sdkTraceWeb = require("@opentelemetry/sdk-trace-web");
var _eventNames = require("./enums/EventNames");
var _version = require("./version");
var _attributeNames = require("./enums/AttributeNames");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
var OBSERVER_WAIT_TIME_MS = 300;
/**
 * This class represents a XMLHttpRequest plugin for auto instrumentation
 */ var XMLHttpRequestInstrumentation = function(_super) {
    __extends(XMLHttpRequestInstrumentation1, _super);
    function XMLHttpRequestInstrumentation1(config) {
        var _this = _super.call(this, '@opentelemetry/instrumentation-xml-http-request', _version.VERSION, config) || this;
        _this.component = 'xml-http-request';
        _this.version = _version.VERSION;
        _this.moduleName = _this.component;
        _this._tasksCount = 0;
        _this._xhrMem = new WeakMap();
        _this._usedResources = new WeakSet();
        return _this;
    }
    XMLHttpRequestInstrumentation1.prototype.init = function() {
    };
    XMLHttpRequestInstrumentation1.prototype._getConfig = function() {
        return this._config;
    };
    /**
     * Adds custom headers to XMLHttpRequest
     * @param xhr
     * @param span
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._addHeaders = function(xhr, spanUrl) {
        if (!_sdkTraceWeb.shouldPropagateTraceHeaders(spanUrl, this._getConfig().propagateTraceHeaderCorsUrls)) {
            var headers_1 = {
            };
            _api.propagation.inject(_api.context.active(), headers_1);
            if (Object.keys(headers_1).length > 0) this._diag.debug('headers inject skipped due to CORS policy');
            return;
        }
        var headers = {
        };
        _api.propagation.inject(_api.context.active(), headers);
        Object.keys(headers).forEach(function(key) {
            xhr.setRequestHeader(key, String(headers[key]));
        });
    };
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._addChildSpan = function(span, corsPreFlightRequest) {
        var _this = this;
        _api.context.with(_api.trace.setSpan(_api.context.active(), span), function() {
            var childSpan = _this.tracer.startSpan('CORS Preflight', {
                startTime: corsPreFlightRequest[_sdkTraceWeb.PerformanceTimingNames.FETCH_START]
            });
            _sdkTraceWeb.addSpanNetworkEvents(childSpan, corsPreFlightRequest);
            childSpan.end(corsPreFlightRequest[_sdkTraceWeb.PerformanceTimingNames.RESPONSE_END]);
        });
    };
    /**
     * Add attributes when span is going to end
     * @param span
     * @param xhr
     * @param spanUrl
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._addFinalSpanAttributes = function(span, xhrMem, spanUrl) {
        if (typeof spanUrl === 'string') {
            var parsedUrl = _sdkTraceWeb.parseUrl(spanUrl);
            if (xhrMem.status !== undefined) span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_STATUS_CODE, xhrMem.status);
            if (xhrMem.statusText !== undefined) span.setAttribute(_attributeNames.AttributeNames.HTTP_STATUS_TEXT, xhrMem.statusText);
            span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_HOST, parsedUrl.host);
            span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_SCHEME, parsedUrl.protocol.replace(':', ''));
            // @TODO do we want to collect this or it will be collected earlier once only or
            //    maybe when parent span is not available ?
            span.setAttribute(_semanticConventions.SemanticAttributes.HTTP_USER_AGENT, navigator.userAgent);
        }
    };
    XMLHttpRequestInstrumentation1.prototype._applyAttributesAfterXHR = function(span, xhr) {
        var _this = this;
        var applyCustomAttributesOnSpan = this._getConfig().applyCustomAttributesOnSpan;
        if (typeof applyCustomAttributesOnSpan === 'function') _instrumentation.safeExecuteInTheMiddle(function() {
            return applyCustomAttributesOnSpan(span, xhr);
        }, function(error) {
            if (!error) return;
            _this._diag.error('applyCustomAttributesOnSpan', error);
        }, true);
    };
    /**
     * will collect information about all resources created
     * between "send" and "end" with additional waiting for main resource
     * @param xhr
     * @param spanUrl
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._addResourceObserver = function(xhr, spanUrl) {
        var xhrMem = this._xhrMem.get(xhr);
        if (!xhrMem || typeof window.PerformanceObserver === 'undefined' || typeof window.PerformanceResourceTiming === 'undefined') return;
        xhrMem.createdResources = {
            observer: new PerformanceObserver(function(list) {
                var entries = list.getEntries();
                var urlNormalizingAnchor = _sdkTraceWeb.getUrlNormalizingAnchor();
                urlNormalizingAnchor.href = spanUrl;
                entries.forEach(function(entry) {
                    if (entry.initiatorType === 'xmlhttprequest' && entry.name === urlNormalizingAnchor.href) {
                        if (xhrMem.createdResources) xhrMem.createdResources.entries.push(entry);
                    }
                });
            }),
            entries: []
        };
        xhrMem.createdResources.observer.observe({
            entryTypes: [
                'resource'
            ]
        });
    };
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link XMLHttpRequestInstrumentationConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._clearResources = function() {
        if (this._tasksCount === 0 && this._getConfig().clearTimingResources) {
            _core.otperformance.clearResourceTimings();
            this._xhrMem = new WeakMap();
            this._usedResources = new WeakSet();
        }
    };
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     */ XMLHttpRequestInstrumentation1.prototype._findResourceAndAddNetworkEvents = function(xhrMem, span, spanUrl, startTime, endTime) {
        if (!spanUrl || !startTime || !endTime || !xhrMem.createdResources) return;
        var resources = xhrMem.createdResources.entries;
        if (!resources || !resources.length) // fallback - either Observer is not available or it took longer
        // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
        // information
        // ts thinks this is the perf_hooks module, but it is the browser performance api
        resources = _core.otperformance.getEntriesByType('resource');
        var resource = _sdkTraceWeb.getResource(spanUrl, startTime, endTime, resources, this._usedResources);
        if (resource.mainRequest) {
            var mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            var corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            _sdkTraceWeb.addSpanNetworkEvents(span, mainRequest);
        }
    };
    /**
     * Removes the previous information about span.
     * This might happened when the same xhr is used again.
     * @param xhr
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._cleanPreviousSpanInformation = function(xhr) {
        var xhrMem = this._xhrMem.get(xhr);
        if (xhrMem) {
            var callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (callbackToRemoveEvents) callbackToRemoveEvents();
            this._xhrMem.delete(xhr);
        }
    };
    /**
     * Creates a new span when method "open" is called
     * @param xhr
     * @param url
     * @param method
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._createSpan = function(xhr, url, method) {
        var _a;
        if (_core.isUrlIgnored(url, this._getConfig().ignoreUrls)) {
            this._diag.debug('ignoring span as url matches ignored url');
            return;
        }
        var spanName = "HTTP " + method.toUpperCase();
        var currentSpan = this.tracer.startSpan(spanName, {
            kind: _api.SpanKind.CLIENT,
            attributes: (_a = {
            }, _a[_semanticConventions.SemanticAttributes.HTTP_METHOD] = method, _a[_semanticConventions.SemanticAttributes.HTTP_URL] = url, _a)
        });
        currentSpan.addEvent(_eventNames.EventNames.METHOD_OPEN);
        this._cleanPreviousSpanInformation(xhr);
        this._xhrMem.set(xhr, {
            span: currentSpan,
            spanUrl: url
        });
        return currentSpan;
    };
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._markResourceAsUsed = function(resource) {
        this._usedResources.add(resource);
    };
    /**
     * Patches the method open
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._patchOpen = function() {
        var _this = this;
        return function(original) {
            var plugin = _this;
            return function patchOpen() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var method = args[0];
                var url = args[1];
                plugin._createSpan(this, url, method);
                return original.apply(this, args);
            };
        };
    };
    /**
     * Patches the method send
     * @private
     */ XMLHttpRequestInstrumentation1.prototype._patchSend = function() {
        var plugin = this;
        function endSpanTimeout(eventName, xhrMem, endTime) {
            var callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (typeof callbackToRemoveEvents === 'function') callbackToRemoveEvents();
            var span = xhrMem.span, spanUrl = xhrMem.spanUrl, sendStartTime = xhrMem.sendStartTime;
            if (span) {
                plugin._findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, sendStartTime, endTime);
                span.addEvent(eventName, endTime);
                plugin._addFinalSpanAttributes(span, xhrMem, spanUrl);
                span.end(endTime);
                plugin._tasksCount--;
            }
            plugin._clearResources();
        }
        function endSpan(eventName, xhr) {
            var xhrMem = plugin._xhrMem.get(xhr);
            if (!xhrMem) return;
            xhrMem.status = xhr.status;
            xhrMem.statusText = xhr.statusText;
            plugin._xhrMem.delete(xhr);
            if (xhrMem.span) plugin._applyAttributesAfterXHR(xhrMem.span, xhr);
            var endTime = _core.hrTime();
            // the timeout is needed as observer doesn't have yet information
            // when event "load" is called. Also the time may differ depends on
            // browser and speed of computer
            setTimeout(function() {
                endSpanTimeout(eventName, xhrMem, endTime);
            }, OBSERVER_WAIT_TIME_MS);
        }
        function onError() {
            endSpan(_eventNames.EventNames.EVENT_ERROR, this);
        }
        function onAbort() {
            endSpan(_eventNames.EventNames.EVENT_ABORT, this);
        }
        function onTimeout() {
            endSpan(_eventNames.EventNames.EVENT_TIMEOUT, this);
        }
        function onLoad() {
            if (this.status < 299) endSpan(_eventNames.EventNames.EVENT_LOAD, this);
            else endSpan(_eventNames.EventNames.EVENT_ERROR, this);
        }
        function unregister(xhr) {
            xhr.removeEventListener('abort', onAbort);
            xhr.removeEventListener('error', onError);
            xhr.removeEventListener('load', onLoad);
            xhr.removeEventListener('timeout', onTimeout);
            var xhrMem = plugin._xhrMem.get(xhr);
            if (xhrMem) xhrMem.callbackToRemoveEvents = undefined;
        }
        return function(original) {
            return function patchSend() {
                var _this = this;
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var xhrMem = plugin._xhrMem.get(this);
                if (!xhrMem) return original.apply(this, args);
                var currentSpan = xhrMem.span;
                var spanUrl = xhrMem.spanUrl;
                if (currentSpan && spanUrl) _api.context.with(_api.trace.setSpan(_api.context.active(), currentSpan), function() {
                    plugin._tasksCount++;
                    xhrMem.sendStartTime = _core.hrTime();
                    currentSpan.addEvent(_eventNames.EventNames.METHOD_SEND);
                    _this.addEventListener('abort', onAbort);
                    _this.addEventListener('error', onError);
                    _this.addEventListener('load', onLoad);
                    _this.addEventListener('timeout', onTimeout);
                    xhrMem.callbackToRemoveEvents = function() {
                        unregister(_this);
                        if (xhrMem.createdResources) xhrMem.createdResources.observer.disconnect();
                    };
                    plugin._addHeaders(_this, spanUrl);
                    plugin._addResourceObserver(_this, spanUrl);
                });
                return original.apply(this, args);
            };
        };
    };
    /**
     * implements enable function
     */ XMLHttpRequestInstrumentation1.prototype.enable = function() {
        this._diag.debug('applying patch to', this.moduleName, this.version);
        if (_instrumentation.isWrapped(XMLHttpRequest.prototype.open)) {
            this._unwrap(XMLHttpRequest.prototype, 'open');
            this._diag.debug('removing previous patch from method open');
        }
        if (_instrumentation.isWrapped(XMLHttpRequest.prototype.send)) {
            this._unwrap(XMLHttpRequest.prototype, 'send');
            this._diag.debug('removing previous patch from method send');
        }
        this._wrap(XMLHttpRequest.prototype, 'open', this._patchOpen());
        this._wrap(XMLHttpRequest.prototype, 'send', this._patchSend());
    };
    /**
     * implements disable function
     */ XMLHttpRequestInstrumentation1.prototype.disable = function() {
        this._diag.debug('removing patch from', this.moduleName, this.version);
        this._unwrap(XMLHttpRequest.prototype, 'open');
        this._unwrap(XMLHttpRequest.prototype, 'send');
        this._tasksCount = 0;
        this._xhrMem = new WeakMap();
        this._usedResources = new WeakSet();
    };
    return XMLHttpRequestInstrumentation1;
}(_instrumentation.InstrumentationBase);

},{"@opentelemetry/api":"6AC4z","@opentelemetry/instrumentation":"3OTpd","@opentelemetry/core":"dBsXh","@opentelemetry/semantic-conventions":"lCgfj","@opentelemetry/sdk-trace-web":"eXZZL","./enums/EventNames":"2ideG","./version":"ce7eg","./enums/AttributeNames":"eLfrd","@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"2ideG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventNames", ()=>EventNames
);
var EventNames;
(function(EventNames1) {
    EventNames1["METHOD_OPEN"] = "open";
    EventNames1["METHOD_SEND"] = "send";
    EventNames1["EVENT_ABORT"] = "abort";
    EventNames1["EVENT_ERROR"] = "error";
    EventNames1["EVENT_LOAD"] = "loaded";
    EventNames1["EVENT_TIMEOUT"] = "timeout";
})(EventNames || (EventNames = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"ce7eg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
var VERSION = '0.27.0';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}],"eLfrd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeNames", ()=>AttributeNames
);
var AttributeNames;
(function(AttributeNames1) {
    AttributeNames1["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6YfbT"}]},["jFZnV","7W6wI"], "7W6wI", "parcelRequire9312")

//# sourceMappingURL=index.bac007fd.js.map
