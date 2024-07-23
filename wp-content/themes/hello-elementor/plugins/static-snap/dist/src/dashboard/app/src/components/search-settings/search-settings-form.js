"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var LoadingButton_1 = tslib_1.__importDefault(require("@mui/lab/LoadingButton"));
var Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var react_hook_form_1 = require("react-hook-form");
var inputs_for_extension_setting_1 = tslib_1.__importDefault(require("../form/inputs-for-extension-setting"));
var form_provider_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/form-provider"));
var select_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/select"));
var switch_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/switch"));
var use_options_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/hooks/use-options"));
var SearchSettingsForm = function (_a) {
    var title = _a.title;
    var searchOptions = (0, use_options_1.default)('search');
    var _b = (0, react_1.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)({}), searchExtensions = _c[0], setSearchExtensions = _c[1];
    var value = (0, react_1.useState)()[0];
    var _d = (0, react_1.useState)({}), searchSettings = _d[0], setSearchSettings = _d[1];
    var defaultValues = {
        enabled: true,
        settings: {},
        type: 'fuse-js',
    };
    var methods = (0, react_hook_form_1.useForm)({
        defaultValues: defaultValues,
    });
    var isDirty = methods.formState.isDirty;
    var onSubmit = (0, react_1.useCallback)(function (_data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, searchOptions.setOptions(_data)];
                case 1:
                    _a.sent();
                    setIsLoading(false);
                    methods.reset(methods.getValues());
                    return [2 /*return*/];
            }
        });
    }); }, [methods, searchOptions]);
    // watch type change.
    var selectedType = methods.watch(['type'])[0];
    var searchEnabled = methods.watch(['enabled'])[0];
    var getSearchOptions = (0, react_1.useCallback)(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var options;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, searchOptions.getOptions()];
                case 1:
                    options = _a.sent();
                    if (options) {
                        methods.reset(options);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [methods, searchOptions]);
    (0, react_1.useEffect)(function () {
        var buildSettings = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var value_1, settingsValues;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!searchOptions.currentOptions) return [3 /*break*/, 2];
                        return [4 /*yield*/, getSearchOptions()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (selectedType && searchExtensions[selectedType] && searchOptions.currentOptions) {
                            value_1 = methods.getValues();
                            settingsValues = Object.keys(searchExtensions[selectedType].settings).reduce(function (acc, name) {
                                var formValue = undefined;
                                if (value_1 && value_1.settings && value_1.settings[name]) {
                                    formValue = value_1.settings[name];
                                }
                                var settingValue = formValue ||
                                    (searchExtensions[selectedType].settings[name].default ||
                                        '');
                                acc[name] = settingValue;
                                return acc;
                            }, {});
                            methods.setValue("settings", settingsValues);
                            setSearchSettings(searchExtensions[selectedType].settings);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        buildSettings();
    }, [
        selectedType,
        searchExtensions,
        methods,
        value,
        searchOptions.currentOptions,
        getSearchOptions,
    ]);
    var getSearchExtensions = (0, react_1.useCallback)(function () {
        (0, api_fetch_1.default)({ path: '/static-snap/v1/extensions/search' }).then(function (types) {
            setSearchExtensions(types);
            setIsLoading(false);
        });
    }, []);
    (0, react_1.useEffect)(function () {
        getSearchExtensions();
    }, [getSearchExtensions]);
    var searchExtensionsForSelect = Object.keys(searchExtensions).map(function (type) {
        var current = searchExtensions[type];
        var disabled = !current.available;
        return {
            disabled: disabled,
            label: type,
            value: type,
        };
    });
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { elevation: 0, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: title }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(form_provider_1.default, { methods: methods, onSubmit: methods.handleSubmit(onSubmit), children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "column", spacing: 2, children: [(0, jsx_runtime_1.jsx)(switch_1.default, { name: "enabled", label: (0, i18n_1.__)('Enable search', 'static-snap') }), searchEnabled && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(select_1.default, { name: "type", items: searchExtensionsForSelect, label: "Type", required: true }), (0, jsx_runtime_1.jsx)(inputs_for_extension_setting_1.default, { setting: searchSettings })] })), (0, jsx_runtime_1.jsx)(Stack_1.default, { direction: "row", sx: { mt: 3 }, children: (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { type: "submit", variant: "contained", loading: isLoading, disabled: !isDirty, children: (0, i18n_1.__)('Save', 'static-snap') }) })] }) }) })] }));
};
exports.default = SearchSettingsForm;
//# sourceMappingURL=search-settings-form.js.map