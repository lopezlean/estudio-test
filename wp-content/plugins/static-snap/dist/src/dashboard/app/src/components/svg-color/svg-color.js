"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var SvgColor = (0, react_1.forwardRef)(function (_a, ref) {
    var src = _a.src, sx = _a.sx, other = tslib_1.__rest(_a, ["src", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, tslib_1.__assign({ component: "span", className: "svg-color", ref: ref, sx: tslib_1.__assign({ width: 24, height: 24, display: 'inline-block', bgcolor: 'currentColor', mask: "url(".concat(src, ") no-repeat center / contain"), WebkitMask: "url(".concat(src, ") no-repeat center / contain") }, sx) }, other)));
});
exports.default = SvgColor;
//# sourceMappingURL=svg-color.js.map