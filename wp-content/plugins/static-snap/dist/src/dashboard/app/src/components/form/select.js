"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var FormControl_1 = tslib_1.__importDefault(require("@mui/material/FormControl"));
var FormHelperText_1 = tslib_1.__importDefault(require("@mui/material/FormHelperText"));
var InputLabel_1 = tslib_1.__importDefault(require("@mui/material/InputLabel"));
var MenuItem_1 = tslib_1.__importDefault(require("@mui/material/MenuItem"));
var Select_1 = tslib_1.__importDefault(require("@mui/material/Select"));
var react_hook_form_1 = require("react-hook-form");
var Select = function (_a) {
    var name = _a.name, label = _a.label, items = _a.items, helperText = _a.helperText, required = _a.required;
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, fieldState = _a.fieldState;
            return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, { error: !!fieldState.error, children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, { children: label }), (0, jsx_runtime_1.jsx)(Select_1.default, tslib_1.__assign({}, field, { variant: "outlined", label: name, size: "small", required: required, children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: item.value, disabled: item.disabled, children: item.label }, index)); }) })), helperText && (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: helperText })] }));
        } }));
};
exports.default = Select;
//# sourceMappingURL=select.js.map