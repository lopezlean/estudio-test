"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Collapse_1 = tslib_1.__importDefault(require("@mui/material/Collapse"));
var List_1 = tslib_1.__importDefault(require("@mui/material/List"));
var sidebar_list_1 = tslib_1.__importDefault(require("./sidebar-list"));
var styles_1 = require("./styles");
function SidebarGroup(_a) {
    var subheader = _a.subheader, items = _a.items;
    var _b = (0, react_1.useState)(true), open = _b[0], setOpen = _b[1];
    var handleToggle = (0, react_1.useCallback)(function () {
        setOpen(function (prev) { return !prev; });
    }, []);
    var renderContent = items.map(function (list) { return ((0, jsx_runtime_1.jsx)(sidebar_list_1.default, { data: list, depth: 1, hasChild: !!list.children }, list.title + list.path)); });
    return ((0, jsx_runtime_1.jsx)(List_1.default, { disablePadding: true, sx: {
            paddingX: 2,
        }, children: subheader ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledSubheader, { disableGutters: true, disableSticky: true, onClick: handleToggle, children: subheader }), (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: open, children: renderContent })] })) : (renderContent) }));
}
exports.default = (0, react_1.memo)(SidebarGroup);
//# sourceMappingURL=sidebar-group.js.map