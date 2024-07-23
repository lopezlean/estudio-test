"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var html_editor_1 = tslib_1.__importDefault(require("./html-editor"));
var select_1 = tslib_1.__importDefault(require("./select"));
var switch_1 = tslib_1.__importDefault(require("./switch"));
var text_field_1 = tslib_1.__importDefault(require("./text-field"));
var InputForExtensionsSetting = function (_a) {
    var setting = _a.setting, name = _a.name;
    var renderInput = function () {
        if (setting.type === 'array') {
            return ((0, jsx_runtime_1.jsx)(select_1.default, { name: name, label: setting.label, helperText: setting.helperText, items: setting.items || [], required: setting.required }));
        }
        if (setting.type === 'text') {
            return ((0, jsx_runtime_1.jsx)(text_field_1.default, { name: name, label: setting.label, helperText: setting.helperText, required: setting.required }));
        }
        if (setting.type === 'number') {
            return ((0, jsx_runtime_1.jsx)(text_field_1.default, { name: name, label: setting.label, helperText: setting.helperText, type: "number", required: setting.required }));
        }
        // textarea
        if (setting.type === 'textarea') {
            return ((0, jsx_runtime_1.jsx)(text_field_1.default, { name: name, label: setting.label, helperText: setting.helperText, multiline: true, rows: 4, required: setting.required }));
        }
        if (setting.type === 'html') {
            return ((0, jsx_runtime_1.jsx)(html_editor_1.default, { name: name, label: setting.label, helperText: setting.helperText, required: setting.required }));
        }
        if (setting.type === 'boolean') {
            return (0, jsx_runtime_1.jsx)(switch_1.default, { name: name, label: setting.label, helperText: setting.helperText });
        }
        console.error("Unknown setting type: ".concat(setting.type));
        return null;
    };
    return renderInput();
};
exports.default = InputForExtensionsSetting;
//# sourceMappingURL=input-for-extension-setting.js.map