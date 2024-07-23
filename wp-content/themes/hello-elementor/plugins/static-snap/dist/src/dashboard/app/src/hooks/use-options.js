"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var useOptions = function (name) {
    var _a = (0, react_1.useState)(null), currentOptions = _a[0], setCurrentOptions = _a[1];
    var getOptions = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var options;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, api_fetch_1.default)({
                        path: '/static-snap/v1/options/' + name,
                    })];
                case 1:
                    options = _a.sent();
                    setCurrentOptions(options);
                    return [2 /*return*/, options];
            }
        });
    }); };
    var setOptions = function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, api_fetch_1.default)({
                        data: options,
                        method: 'POST',
                        path: '/static-snap/v1/options/' + name,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return { currentOptions: currentOptions, getOptions: getOptions, setOptions: setOptions };
};
exports.default = useOptions;
//# sourceMappingURL=use-options.js.map