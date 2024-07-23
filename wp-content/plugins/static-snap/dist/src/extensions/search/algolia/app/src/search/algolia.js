"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var i18n_1 = require("@wordpress/i18n");
var algoliasearch_1 = tslib_1.__importDefault(require("algoliasearch"));
var mustache_1 = tslib_1.__importDefault(require("mustache"));
var Algolia = /** @class */ (function () {
    function Algolia(frontend) {
        this.frontend = frontend;
        this.settings = this.frontend.config().options.search.settings;
        this.client = (0, algoliasearch_1.default)(this.settings.algolia_application_id, this.settings.algolia_search_key);
    }
    Algolia.prototype.getType = function () {
        return 'algolia';
    };
    Algolia.prototype.search = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var multipleQueries, error_1, message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        multipleQueries = [
                            {
                                indexName: this.settings.algolia_index_name,
                                query: query,
                            },
                        ];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.client.search(multipleQueries)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        if (this.frontend.config().is_admin_bar_showing) {
                            message = error_1.message;
                            alert((0, i18n_1.__)("You must run a deployment to index the content for first time when you are using wordpress. Error: ".concat(message)));
                        }
                        return [2 /*return*/, { results: [] }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Algolia.prototype.renderResults = function (target, results) {
        var _a;
        if (!results.results) {
            return;
        }
        var template = (_a = document.getElementById('static-snap-search-result-template')) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (!template) {
            return;
        }
        var rendered = mustache_1.default;
        var html = '';
        for (var _i = 0, _b = results.results; _i < _b.length; _i++) {
            var result = _b[_i];
            var hits = result.hits;
            var itemHtml = hits
                .map(function (hit) {
                return rendered.render(template, hit);
            })
                .join('');
            html += '<li>' + itemHtml + '</li>';
        }
        target.innerHTML = '<ol>' + html + '</ol>';
    };
    return Algolia;
}());
exports.default = Algolia;
//# sourceMappingURL=algolia.js.map