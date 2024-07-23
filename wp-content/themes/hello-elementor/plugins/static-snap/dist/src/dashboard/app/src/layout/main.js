"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var Container_1 = tslib_1.__importDefault(require("@mui/material/Container"));
var config_1 = require("@staticsnap/dashboard/components/sidebar/config");
var use_responsive_1 = require("@staticsnap/dashboard/hooks/use-responsive");
var SPACING = 2;
function Main(_a) {
    var children = _a.children, sx = _a.sx, other = tslib_1.__rest(_a, ["children", "sx"]);
    var lgUp = (0, use_responsive_1.useResponsive)('up', 'lg');
    return ((0, jsx_runtime_1.jsx)(Box_1.default, tslib_1.__assign({ component: "main", sx: tslib_1.__assign(tslib_1.__assign({ backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: 1, py: "".concat(SPACING, "rem") }, (lgUp && {
            py: "".concat(SPACING, "rem"),
            width: "calc(100% - ".concat(config_1.SIDEBAR_WIDTH, "px)"),
        })), sx) }, other, { children: (0, jsx_runtime_1.jsx)(Container_1.default, { maxWidth: false, children: (0, jsx_runtime_1.jsx)(Card_1.default, { elevation: 18, children: (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: children }) }) }) })));
}
exports.default = Main;
//# sourceMappingURL=main.js.map