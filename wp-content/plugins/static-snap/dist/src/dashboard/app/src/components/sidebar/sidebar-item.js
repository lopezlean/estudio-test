"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Link_1 = tslib_1.__importDefault(require("@mui/material/Link"));
var ListItemText_1 = tslib_1.__importDefault(require("@mui/material/ListItemText"));
var Tooltip_1 = tslib_1.__importDefault(require("@mui/material/Tooltip"));
var config_1 = require("./config");
var styles_1 = require("./styles");
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon"));
function SidebarItem(_a) {
    var item = _a.item, open = _a.open, depth = _a.depth, active = _a.active, externalLink = _a.externalLink, other = tslib_1.__rest(_a, ["item", "open", "depth", "active", "externalLink"]);
    var title = item.title, path = item.path, icon = item.icon, info = item.info, children = item.children, disabled = item.disabled, caption = item.caption;
    var subItem = depth !== 1;
    var renderContent = ((0, jsx_runtime_1.jsxs)(styles_1.StyledItem, tslib_1.__assign({ disableGutters: true, disabled: disabled, active: active, depth: depth }, other, { children: [(0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon && (0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { size: config_1.sidebarConfig.iconSize, children: icon }), subItem && ((0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { size: config_1.sidebarConfig.iconSize, children: (0, jsx_runtime_1.jsx)(styles_1.StyledDotIcon, { active: active }) }))] }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: title, secondary: caption ? ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: caption, placement: "top-start", children: (0, jsx_runtime_1.jsx)("span", { children: caption }) })) : null, primaryTypographyProps: {
                    fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
                    noWrap: true,
                    textTransform: 'capitalize',
                    typography: 'body2',
                }, secondaryTypographyProps: {
                    color: 'text.disabled',
                    component: 'span',
                    noWrap: true,
                    typography: 'caption',
                } }), info && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                    lineHeight: 0,
                    ml: 1,
                }, children: info })), !!children && ((0, jsx_runtime_1.jsx)(icon_1.default, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill', sx: {
                    flexShrink: 0,
                    ml: 1,
                } }))] })));
    if (externalLink) {
        return ((0, jsx_runtime_1.jsx)(Link_1.default, { href: path, target: "_blank", rel: "noopener", underline: "none", color: "inherit", sx: tslib_1.__assign({}, (disabled && {
                cursor: 'default',
            })), children: renderContent }));
    }
    if (children) {
        return renderContent;
    }
    return ((0, jsx_runtime_1.jsx)(Link_1.default, { href: path, underline: "none", color: "inherit", sx: tslib_1.__assign({}, (disabled && {
            cursor: 'default',
        })), children: renderContent }));
}
exports.default = SidebarItem;
//# sourceMappingURL=sidebar-item.js.map