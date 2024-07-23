"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Collapse_1 = tslib_1.__importDefault(require("@mui/material/Collapse"));
var react_router_dom_1 = require("react-router-dom");
var sidebar_item_1 = tslib_1.__importDefault(require("./sidebar-item"));
function SidebarList(_a) {
    var data = _a.data, depth = _a.depth, hasChild = _a.hasChild;
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var active = data.path === pathname || (data.path !== '/' && pathname.includes(data.path));
    var externalLink = data.path.includes('http');
    var _b = (0, react_1.useState)(active), open = _b[0], setOpen = _b[1];
    var handleToggle = (0, react_1.useCallback)(function () {
        setOpen(function (prev) { return !prev; });
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, []);
    (0, react_1.useEffect)(function () {
        if (!active) {
            handleClose();
        }
    }, [active, handleClose, pathname]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(sidebar_item_1.default, { item: data, depth: depth, open: open, active: active, externalLink: externalLink, onClick: handleToggle }), hasChild && ((0, jsx_runtime_1.jsx)(Collapse_1.default, { in: open, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(SidebarSubList, { data: data.children, depth: depth }) }))] }));
}
exports.default = SidebarList;
function SidebarSubList(_a) {
    var data = _a.data, depth = _a.depth;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(SidebarList, { data: list, depth: depth + 1, hasChild: !!list.children }, list.title + list.path)); }) }));
}
//# sourceMappingURL=sidebar-list.js.map