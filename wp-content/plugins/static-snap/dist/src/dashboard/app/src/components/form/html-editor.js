"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@monaco-editor/react");
var text_field_1 = tslib_1.__importDefault(require("./text-field"));
var EditorInternal = react_1.default.forwardRef(function (props) {
    return ((0, jsx_runtime_1.jsx)(react_2.Editor, tslib_1.__assign({ defaultLanguage: "html", width: '100%', height: '20vh' }, props, { options: {
            minimap: {
                enabled: false,
            },
        } })));
});
function HtmlEditor(props) {
    return ((0, jsx_runtime_1.jsx)(text_field_1.default, tslib_1.__assign({}, props, { multiline: true, rows: 10, InputProps: {
            inputComponent: EditorInternal,
        }, InputLabelProps: {
            shrink: true,
        } })));
}
exports.default = HtmlEditor;
//# sourceMappingURL=html-editor.js.map