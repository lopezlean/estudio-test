"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
function FormProvider(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, methods = _a.methods;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, tslib_1.__assign({}, methods, { children: (0, jsx_runtime_1.jsx)("form", { onSubmit: onSubmit, children: children }) })));
}
exports.default = FormProvider;
//# sourceMappingURL=form-provider.js.map