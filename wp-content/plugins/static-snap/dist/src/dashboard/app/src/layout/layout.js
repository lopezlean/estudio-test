"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var main_1 = tslib_1.__importDefault(require("./main"));
var nav_1 = tslib_1.__importDefault(require("./nav"));
var use_boolean_1 = require("@staticsnap/dashboard/hooks/use-boolean");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Layout = function () {
    var openNav = (0, use_boolean_1.useBoolean)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
            display: 'flex',
            flexDirection: {
                md: 'row',
                xs: 'column',
            },
            paddingTop: { md: '1rem' },
        }, children: [(0, jsx_runtime_1.jsx)(nav_1.default, { openNav: openNav.value, onOpenNav: openNav.onTrue, onCloseNav: openNav.onFalse }), (0, jsx_runtime_1.jsx)(main_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })] }));
};
exports.default = Layout;
//# sourceMappingURL=layout.js.map