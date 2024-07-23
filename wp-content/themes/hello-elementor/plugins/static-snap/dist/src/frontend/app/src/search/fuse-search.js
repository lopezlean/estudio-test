"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fuse_js_1 = tslib_1.__importDefault(require("fuse.js"));
var mustache_1 = tslib_1.__importDefault(require("mustache"));
var FuseSearch = /** @class */ (function () {
    function FuseSearch(frontend) {
        this.fuse = null;
        this.searchData = [];
        this.searchIndex = null;
        this.fuse_options = {
            distance: 100,
            // includeMatches: false,
            findAllMatches: true,
            // isCaseSensitive: false,
            ignoreFieldNorm: false,
            // this is the easiest way to get the search to work if you don't know about scoring theory
            // read more at here: https://www.fusejs.io/concepts/scoring-theory.html
            ignoreLocation: true,
            includeScore: true,
            keys: ['title', 'content', 'excerpt'],
            shouldSort: true,
            // minMatchCharLength: 1,
            // location: 0,
            threshold: 0.55,
            useExtendedSearch: false,
        };
        this.frontend = frontend;
    }
    FuseSearch.prototype.getType = function () {
        return 'fuse-js';
    };
    FuseSearch.prototype.search = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fuse, results;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFuse()];
                    case 1:
                        fuse = _a.sent();
                        results = fuse.search(query);
                        return [2 /*return*/, results];
                }
            });
        });
    };
    FuseSearch.prototype.getOptions = function () {
        var _this = this;
        var _a;
        var config = ((_a = this.frontend.config().options.search) === null || _a === void 0 ? void 0 : _a.settings) || {};
        // convert all fuse_* to fuse options
        Object.keys(config).forEach(function (key) {
            if (key.startsWith('fuse_')) {
                //const option = key.replace('fuse_', '');
                // this.fuse_options[option as keyof typeof this.fuse_options] =
                // config[key as keyof typeof config];
            }
        });
        var locale = this.frontend.config().locale;
        if (locale) {
            // check if locale exists in this.searchData first element
            var firstElement = this.searchData[0];
            if (typeof firstElement[locale] === 'object') {
                var keys = this.fuse_options.keys;
                this.fuse_options.keys = keys.map(function (key) { return _this.frontend.config().locale + '.' + key; });
            }
        }
        return this.fuse_options;
    };
    FuseSearch.prototype.getFuse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSearchIndex()];
                    case 1:
                        _a.sent();
                        this.fuse = new fuse_js_1.default(this.searchData, this.fuse_options, this.searchIndex);
                        return [2 /*return*/, this.fuse];
                }
            });
        });
    };
    FuseSearch.prototype.getSearchIndex = function () {
        return tslib_1.__awaiter(this, arguments, void 0, function (force) {
            var response, _a, _b;
            if (force === void 0) { force = false; }
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.searchIndex && !force) {
                            return [2 /*return*/, this.searchIndex];
                        }
                        return [4 /*yield*/, fetch(this.frontend.config().search_index_url)];
                    case 1:
                        response = _c.sent();
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.searchData = _c.sent();
                        this.getOptions();
                        _b = this;
                        return [4 /*yield*/, fuse_js_1.default.createIndex(this.fuse_options.keys, this.searchData)];
                    case 3:
                        _b.searchIndex = _c.sent();
                        return [2 /*return*/, this.searchIndex];
                }
            });
        });
    };
    FuseSearch.prototype.renderResults = function (target, results) {
        var _a;
        var template = (_a = document.getElementById('static-snap-search-result-template')) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (!template) {
            return;
        }
        var rendered = mustache_1.default;
        var html = results
            .map(function (result) {
            return '<li>' + rendered.render(template, result.item) + '</li>';
        })
            .join('');
        target.innerHTML = '<ol>' + html + '</ol>';
    };
    return FuseSearch;
}());
exports.default = FuseSearch;
//# sourceMappingURL=fuse-search.js.map