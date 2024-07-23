"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * React settings app
 */
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var admin_bar_app_1 = tslib_1.__importDefault(require("./admin-bar-app"));
var app_1 = tslib_1.__importDefault(require("./app"));
var settingsAppContainer = document.getElementById('static-snap-settings-app');
if (settingsAppContainer) {
    react_dom_1.default.render((0, jsx_runtime_1.jsx)(app_1.default, {}), document.getElementById('static-snap-settings-app'));
}
// document on load
document.addEventListener('DOMContentLoaded', function () {
    var adminBarAppContainer = document.getElementById('wp-admin-bar-static-snap-admin-bar');
    if (adminBarAppContainer) {
        react_dom_1.default.render((0, jsx_runtime_1.jsx)(admin_bar_app_1.default, {}), document.getElementById('wp-admin-bar-static-snap-admin-bar'));
    }
});
//# sourceMappingURL=index.js.map