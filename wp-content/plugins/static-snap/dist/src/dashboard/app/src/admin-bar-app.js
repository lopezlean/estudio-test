"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var admin_loading_1 = tslib_1.__importDefault(require("./components/admin-loading"));
var use_status_1 = tslib_1.__importDefault(require("./hooks/use-status"));
var theme_1 = tslib_1.__importDefault(require("./theme"));
function AdminBarApp() {
    var status = (0, use_status_1.default)();
    return ((0, jsx_runtime_1.jsx)(theme_1.default, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                alignItems: 'center',
                backgroundColor: '#1d2327',
                display: 'flex',
                height: {
                    md: '32px !important',
                    xs: '46px !important',
                },
                justifyContent: 'center',
            }, children: (0, jsx_runtime_1.jsx)(admin_loading_1.default, { status: status }) }) }));
}
exports.default = AdminBarApp;
//# sourceMappingURL=admin-bar-app.js.map