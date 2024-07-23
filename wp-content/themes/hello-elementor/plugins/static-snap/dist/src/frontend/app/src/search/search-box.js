"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * This class is responsible for handling the search input and displaying the search results.
 * It listens to the input event on the input element and calls the search method of the Search module.
 * It then renders the results in the searchResultsSelector element.
 * If the searchResultsSelector element is not found, it creates a new div element next to the input element.
 * The search results are rendered in this new div element.
 */
var SearchBox = /** @class */ (function () {
    function SearchBox(searchModule, selector, searchResultsSelector) {
        if (selector === void 0) { selector = 'input[name="s"], input[name="q"]'; }
        if (searchResultsSelector === void 0) { searchResultsSelector = '.static-snap-search-results'; }
        var _this = this;
        this.elements = null;
        this.initDomEvents = function () {
            _this.elements = document.querySelectorAll(_this.selector);
            // on press back button, get the value of q and search
            _this.bindEvents();
        };
        this.getElements = function () {
            if (!_this.elements) {
                return [];
            }
            // filter elements that are in wpadminbar
            return Array.from(_this.elements).filter(function (element) { return !element.closest('#wpadminbar'); });
        };
        this.bindEvents = function () {
            var elements = _this.getElements();
            elements &&
                elements.forEach(function (element) {
                    // ignore the search on wpadminbar
                    var _a;
                    // if element name=s change to q
                    if (element.getAttribute('name') === 's') {
                        element.setAttribute('name', 'q');
                    }
                    // if have a searchParams in the url, get the value of q and search
                    var searchParams = new URLSearchParams(window.location.search);
                    var query = searchParams.get('q');
                    element.addEventListener('input', _this.onSearch);
                    if (query) {
                        element.setAttribute('value', query);
                        element.value = query;
                        var event_1 = new Event('input');
                        element.dispatchEvent(event_1);
                    }
                    // disable submit on form
                    (_a = element.closest('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
                        event.preventDefault();
                    });
                    window.addEventListener('popstate', _this.onPopState);
                });
        };
        this.onPopState = function (_event) {
            var searchParams = new URLSearchParams(window.location.search);
            var query = searchParams.get('q');
            if (query) {
                _this.getElements().forEach(function (element) {
                    element.setAttribute('value', query);
                    element.value = query;
                    var event = new Event('input');
                    // if element has focus the value will not be updated
                    element.blur();
                    element.dispatchEvent(event);
                });
            }
        };
        this.onSearch = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var target, searchParams, renderTarget, parentSearch, results;
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        target = event.target;
                        if (event.isTrusted) {
                            searchParams = new URLSearchParams(window.location.search);
                            searchParams.set('q', target.value);
                            window.history.pushState({ q: target.value }, '', "".concat(window.location.pathname, "?").concat(searchParams.toString()));
                        }
                        renderTarget = ((_a = target.closest('search')) === null || _a === void 0 ? void 0 : _a.querySelector(this.searchResultsSelector)) ||
                            ((_b = target.closest('form')) === null || _b === void 0 ? void 0 : _b.querySelector(this.searchResultsSelector)) ||
                            ((_c = target.closest('div')) === null || _c === void 0 ? void 0 : _c.querySelector(this.searchResultsSelector));
                        if (!renderTarget) {
                            // create a new div element next to the form of the input.
                            renderTarget = document.createElement('div');
                            renderTarget.className = 'static-snap-search-results';
                            parentSearch = target.closest('search') || target.closest('form') || target.closest('div');
                            if (parentSearch) {
                                parentSearch.appendChild(renderTarget);
                            }
                            else {
                                console.error('No suitable parent found to append search results');
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.searchModule.search(target.value)];
                    case 1:
                        results = _d.sent();
                        this.searchModule.renderResults(renderTarget, results);
                        return [2 /*return*/];
                }
            });
        }); };
        this.selector = selector;
        this.searchResultsSelector = searchResultsSelector;
        this.searchModule = searchModule;
        document.addEventListener('DOMContentLoaded', this.initDomEvents.bind(this));
    }
    return SearchBox;
}());
exports.default = SearchBox;
//# sourceMappingURL=search-box.js.map