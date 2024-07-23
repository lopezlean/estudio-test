"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var search_box_1 = tslib_1.__importDefault(require("../search/search-box"));
var Search = /** @class */ (function () {
    function Search(frontend) {
        this.modules = [];
        this.frontend = frontend;
        this.searchBox = new search_box_1.default(this);
    }
    Search.prototype.addModule = function (module) {
        this.modules.push(module);
    };
    Search.prototype.getSearchModule = function () {
        var search = this.frontend.config().options.search;
        var searchModuleType = (search === null || search === void 0 ? void 0 : search.type) || 'fuse-js';
        var searchModule = this.modules.filter(function (module) { return module.getType() === searchModuleType; })[0];
        if (!searchModule) {
            throw new Error("Search module ".concat(searchModuleType, " not found"));
        }
        return searchModule;
    };
    Search.prototype.search = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getSearchModule().search(query)];
            });
        });
    };
    Search.prototype.renderResults = function (target, results) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.getSearchModule().renderResults(target, results);
                return [2 /*return*/];
            });
        });
    };
    Search.prototype.getSearchBox = function () {
        return this.searchBox;
    };
    return Search;
}());
exports.default = Search;
//# sourceMappingURL=search.js.map