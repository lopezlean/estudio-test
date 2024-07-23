"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var TextField_1 = tslib_1.__importDefault(require("@mui/material/TextField"));
var react_hook_form_1 = require("react-hook-form");
var TextField = function (_a) {
    var name = _a.name, label = _a.label, type = _a.type, required = _a.required, helperText = _a.helperText, _b = _a.multiline, multiline = _b === void 0 ? false : _b, rows = _a.rows, InputProps = _a.InputProps, InputLabelProps = _a.InputLabelProps;
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, fieldState = _a.fieldState;
            return ((0, jsx_runtime_1.jsx)(TextField_1.default, tslib_1.__assign({}, field, { variant: "outlined", required: required, label: label, InputLabelProps: InputLabelProps, size: "small", type: type, multiline: multiline, rows: rows, helperText: fieldState.error ? fieldState.error.message : helperText, error: !!fieldState.error, InputProps: InputProps })));
        } }));
};
exports.default = TextField;
//# sourceMappingURL=text-field.js.map