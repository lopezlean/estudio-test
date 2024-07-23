"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var IconButton_1 = tslib_1.__importDefault(require("@mui/material/IconButton"));
var styles_1 = require("@mui/material/styles");
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon"));
var config_1 = require("@staticsnap/dashboard/components/sidebar/config");
var use_responsive_1 = require("@staticsnap/dashboard/hooks/use-responsive");
function NavToggleButton(_a) {
    var sx = _a.sx, other = tslib_1.__rest(_a, ["sx"]);
    var theme = (0, styles_1.useTheme)();
    var lgUp = (0, use_responsive_1.useResponsive)('up', 'lg');
    if (!lgUp) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, tslib_1.__assign({ size: "small", sx: tslib_1.__assign({ p: 0.5, top: 32, position: 'fixed', left: config_1.SIDEBAR_WIDTH - 12, zIndex: theme.zIndex.appBar + 1, border: "dashed 1px ".concat(theme.palette.divider), backdropFilter: "blur(4px)", backgroundColor: 'rgba(255, 255, 255, 0.72)', '&:hover': {
                bgcolor: 'background.default',
            } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(icon_1.default, { width: 16, icon: "eva:arrow-ios-back-fill" }) })));
}
exports.default = NavToggleButton;
//# sourceMappingURL=nav-toggle-button.js.map