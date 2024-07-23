"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
var react_1 = require("react");
function useBoolean(defaultValue) {
    var _a = (0, react_1.useState)(!!defaultValue), value = _a[0], setValue = _a[1];
    var onTrue = (0, react_1.useCallback)(function () {
        setValue(true);
    }, []);
    var onFalse = (0, react_1.useCallback)(function () {
        setValue(false);
    }, []);
    var onToggle = (0, react_1.useCallback)(function () {
        setValue(function (prev) { return !prev; });
    }, []);
    return {
        value: value,
        onTrue: onTrue,
        onFalse: onFalse,
        onToggle: onToggle,
        setValue: setValue
    };
}
exports.useBoolean = useBoolean;
//# sourceMappingURL=use-boolean.js.map