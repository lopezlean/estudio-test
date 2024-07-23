"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var useStatus = function () {
    var _a = (0, react_1.useState)({
        is_cancelled: false,
        is_done: false,
        is_paused: false,
        is_processing: false,
        is_running: false,
        last_deployment: undefined,
    }), status = _a[0], setStatus = _a[1];
    var fetchStatus = (0, react_1.useCallback)(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, api_fetch_1.default)({ path: '/static-snap/v1/status' })];
                case 1:
                    response = _a.sent();
                    setStatus(response);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    (0, react_1.useEffect)(function () {
        // fetch status every 5 seconds
        fetchStatus();
        var interval = setInterval(fetchStatus, 5000);
        return function () { return clearInterval(interval); };
    }, [fetchStatus]);
    (0, react_1.useEffect)(function () {
        var listener = function (_event) {
            fetchStatus();
        };
        // listen to window event static-snap-status-update
        window.addEventListener('static-snap/status-update', listener);
        return function () { return window.removeEventListener('static-snap/status-update', listener); };
    }, [fetchStatus]);
    return status;
};
exports.default = useStatus;
//# sourceMappingURL=use-status.js.map