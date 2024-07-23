"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var styles_2 = require("./styles");
// ----------------------------------------------------------------------
var Label = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.variant, variant = _c === void 0 ? 'soft' : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, sx = _a.sx, other = tslib_1.__rest(_a, ["children", "color", "variant", "startIcon", "endIcon", "sx"]);
    var theme = (0, styles_1.useTheme)();
    var iconStyle = {
        '& svg, img': {
            height: 1,
            objectFit: 'cover',
            width: 1,
        },
        height: 16,
        width: 16,
    };
    return ((0, jsx_runtime_1.jsxs)(styles_2.StyledLabel, tslib_1.__assign({ ref: ref, component: "span", ownerState: { color: color, variant: variant }, sx: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (startIcon && { pl: 0.75 })), (endIcon && { pr: 0.75 })), sx), theme: theme }, other, { children: [startIcon && (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: tslib_1.__assign({ mr: 0.75 }, iconStyle), children: [" ", startIcon, " "] }), children, endIcon && (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: tslib_1.__assign({ ml: 0.75 }, iconStyle), children: [" ", endIcon, " "] })] })));
});
exports.default = Label;
//# sourceMappingURL=label.js.map