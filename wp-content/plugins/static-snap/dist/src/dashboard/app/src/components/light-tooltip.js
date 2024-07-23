"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Tooltip_1 = tslib_1.__importStar(require("@mui/material/Tooltip"));
var LightTooltip = (0, styles_1.styled)(function (_a) {
    var className = _a.className, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, tslib_1.__assign({}, props, { classes: { popper: className } })));
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(Tooltip_1.tooltipClasses.tooltip)] = {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[14],
            color: theme.palette.text.primary,
            fontSize: 12,
        },
        _b);
});
exports.default = LightTooltip;
//# sourceMappingURL=light-tooltip.js.map