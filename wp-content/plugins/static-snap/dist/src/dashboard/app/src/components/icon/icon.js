"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@iconify/react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Icon = (0, react_1.forwardRef)(function (_a, ref) {
    var icon = _a.icon, _b = _a.width, width = _b === void 0 ? 20 : _b, sx = _a.sx, other = tslib_1.__rest(_a, ["icon", "width", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, tslib_1.__assign({ ref: ref, component: react_2.Icon, className: "component-iconify", icon: icon, sx: tslib_1.__assign({ height: width, width: width }, sx) }, other)));
});
exports.default = Icon;
//# sourceMappingURL=icon.js.map