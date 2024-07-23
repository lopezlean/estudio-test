"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var input_for_extension_setting_1 = tslib_1.__importDefault(require("./input-for-extension-setting"));
var InputsForExtensionsSetting = function (_a) {
    var setting = _a.setting;
    var inputs = Object.keys(setting).map(function (name) {
        var setttingValue = setting[name];
        return ((0, jsx_runtime_1.jsx)(input_for_extension_setting_1.default, { setting: setttingValue, name: "settings.".concat(name) }, name));
    });
    return inputs;
};
exports.default = InputsForExtensionsSetting;
//# sourceMappingURL=inputs-for-extension-setting.js.map