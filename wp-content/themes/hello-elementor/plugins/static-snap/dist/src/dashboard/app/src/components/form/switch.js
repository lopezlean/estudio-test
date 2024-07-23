"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var FormControlLabel_1 = tslib_1.__importDefault(require("@mui/material/FormControlLabel"));
var FormHelperText_1 = tslib_1.__importDefault(require("@mui/material/FormHelperText"));
var Switch_1 = tslib_1.__importDefault(require("@mui/material/Switch"));
var react_hook_form_1 = require("react-hook-form");
var Switch = function (_a) {
    var name = _a.name, label = _a.label, helperText = _a.helperText;
    var control = (0, react_hook_form_1.useFormContext)().control;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field;
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, tslib_1.__assign({}, field, { checked: !!field.value })), label: label }), helperText && (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: helperText })] }));
        } }));
};
exports.default = Switch;
//# sourceMappingURL=switch.js.map