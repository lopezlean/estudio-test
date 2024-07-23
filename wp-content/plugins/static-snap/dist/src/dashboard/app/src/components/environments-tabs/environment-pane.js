"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var IconButton_1 = tslib_1.__importDefault(require("@mui/material/IconButton"));
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon/icon"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
function EnvironmentPane(_a) {
    var _this = this;
    var environment = _a.environment, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var publish = (0, react_1.useCallback)(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            // emit static-snap/close-deployment-menu event
            window.dispatchEvent(new CustomEvent('static-snap/close-deployment-menu'));
            setTimeout(function () {
                // emit window event static-snap-status-update
                var event = new CustomEvent('static-snap/status-update');
                window.dispatchEvent(event);
            }, 500);
            (0, api_fetch_1.default)({
                data: environment,
                method: 'POST',
                path: '/static-snap/v1/environments/publish',
            });
            return [2 /*return*/];
        });
    }); }, [environment]);
    var handleSettingsClick = (0, react_1.useCallback)(function () {
        // emit static-snap/close-deployment-menu event
        window.dispatchEvent(new CustomEvent('static-snap/close-deployment-menu'));
        window.location.href =
            window.location.origin +
                "/wp-admin/admin.php?page=static-snap#/environments/edit/".concat(environment.id);
    }, [environment]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { flexDirection: "row", justifyContent: "space-between", width: '100%', display: "flex", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: publish, endIcon: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: "grommet-icons:deploy" }), disabled: disabled, children: (0, i18n_1.sprintf)((0, i18n_1.__)('Deploy to %s', 'static-snap'), environment.name) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { title: (0, i18n_1.__)('Settings', 'static-snap'), onClick: handleSettingsClick, children: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: "material-symbols:settings" }) })] }));
}
exports.default = EnvironmentPane;
//# sourceMappingURL=environment-pane.js.map