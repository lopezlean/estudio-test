"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var search_1 = tslib_1.__importDefault(require("./modules/search"));
var fuse_search_1 = tslib_1.__importDefault(require("./search/fuse-search"));
var Frontend = /** @class */ (function () {
    function Frontend() {
        this.Search = new search_1.default(this);
        this.Search.addModule(new fuse_search_1.default(this));
    }
    Frontend.prototype.config = function () {
        var defaultConfig = {
            is_admin_bar_showing: false,
            is_static: false,
            locale: null,
            options: {
                search: {
                    settings: {},
                    type: 'fuse-js',
                },
            },
            search_index_url: '/search.json',
        };
        if (typeof window.StaticSnapFrontendConfig !== 'undefined') {
            // convert boolean strings to boolean
            for (var key in window.StaticSnapFrontendConfig) {
                var keyIndex = key;
                if (window.StaticSnapFrontendConfig[keyIndex] === 'true') {
                    window.StaticSnapFrontendConfig[keyIndex] = true;
                }
                else if (window.StaticSnapFrontendConfig[keyIndex] === 'false') {
                    window.StaticSnapFrontendConfig[keyIndex] = false;
                }
            }
            return window.StaticSnapFrontendConfig;
        }
        return defaultConfig;
    };
    return Frontend;
}());
exports.default = Frontend;
//# sourceMappingURL=frontend.js.map