"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var LinkBehavior = react_1.default.forwardRef(function (props, ref) {
    var href = props.href, other = tslib_1.__rest(props, ["href"]);
    // Map href (Material UI) -> to (react-router)
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, tslib_1.__assign({ ref: ref, to: href }, other));
});
exports.default = LinkBehavior;
//# sourceMappingURL=link-behavior.js.map