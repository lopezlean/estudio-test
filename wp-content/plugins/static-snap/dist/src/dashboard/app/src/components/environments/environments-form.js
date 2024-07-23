"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var LoadingButton_1 = tslib_1.__importDefault(require("@mui/lab/LoadingButton"));
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
var form_provider_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/form-provider"));
var inputs_for_extension_setting_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/inputs-for-extension-setting"));
var select_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/select"));
var text_field_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/form/text-field"));
var paths_1 = require("@staticsnap/dashboard/routes/paths");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var react_hook_form_1 = require("react-hook-form");
var EnvironmentForm = function (_a) {
    var title = _a.title, value = _a.value, onSubmit = _a.onSubmit, onDelete = _a.onDelete, errors = _a.errors;
    var _b = (0, react_1.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)({}), environmentTypes = _c[0], setEnvironmentTypes = _c[1];
    var _d = (0, react_1.useState)({}), environmentSettings = _d[0], setEnvironmentSettings = _d[1];
    var defaultValues = value || {
        id: '',
        name: '',
        type: 'file',
        valid: true,
    };
    var methods = (0, react_hook_form_1.useForm)({
        defaultValues: defaultValues,
    });
    var isDirty = methods.formState.isDirty;
    // watch type change.
    var selectedType = methods.watch(['type'])[0];
    (0, react_1.useEffect)(function () {
        if (selectedType && environmentTypes[selectedType]) {
            // fill default values from settings
            var settingsValues = Object.keys(environmentTypes[selectedType].settings).reduce(function (acc, name) {
                var formValue = undefined;
                if (value && value.settings && value.settings[name]) {
                    formValue = value.settings[name];
                }
                var settingValue = formValue ||
                    (environmentTypes[selectedType].settings[name].default ||
                        '');
                acc[name] = settingValue;
                return acc;
            }, {});
            methods.setValue('settings', settingsValues);
            setEnvironmentSettings(environmentTypes[selectedType].settings);
        }
    }, [selectedType, environmentTypes, methods, value]);
    // set errors
    (0, react_1.useEffect)(function () {
        if (errors) {
            Object.keys(errors).map(function (key) {
                return methods.setError(key, {
                    message: errors[key],
                    type: 'manual',
                });
            });
        }
    }, [errors, methods]);
    var getTypes = function () {
        (0, api_fetch_1.default)({ path: '/static-snap/v1/extensions/environment_type' }).then(function (types) {
            setEnvironmentTypes(types);
            setIsLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        getTypes();
    }, []);
    var environmentTypesForSelect = Object.keys(environmentTypes).map(function (type) {
        var current = environmentTypes[type];
        var disabled = !current.available;
        var needsConnectText = current.needsConnect
            ? ' ' + (0, i18n_1.__)('(needs Static Snap Connect)', 'static-snap')
            : '';
        return {
            disabled: disabled,
            label: type + (current.available ? '' : needsConnectText),
            value: type,
        };
    });
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { elevation: 0, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: title, action: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "text", color: "inherit", href: paths_1.paths.environments.index, children: "Back" }) }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(form_provider_1.default, { methods: methods, onSubmit: methods.handleSubmit(onSubmit), children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "column", spacing: 2, children: [(0, jsx_runtime_1.jsx)(select_1.default, { name: "type", items: environmentTypesForSelect, label: "Type" }), (0, jsx_runtime_1.jsx)(text_field_1.default, { name: "name", label: "Name", required: true }), (0, jsx_runtime_1.jsx)(inputs_for_extension_setting_1.default, { setting: environmentSettings }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: onDelete ? 'flex-start' : 'flex-end', justifyContent: onDelete ? 'space-between' : 'end', sx: { mt: 3 }, children: [onDelete && ((0, jsx_runtime_1.jsx)(LoadingButton_1.default, { variant: "text", color: "error", loading: isLoading, onClick: (0, react_1.useCallback)(function () {
                                            onDelete(defaultValues);
                                        }, [onDelete, defaultValues]), children: (0, i18n_1.__)('Delete', 'static-snap') })), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { type: "submit", variant: "contained", loading: isLoading, disabled: !isDirty, children: (0, i18n_1.__)('Save', 'static-snap') })] })] }) }) })] }));
};
exports.default = EnvironmentForm;
//# sourceMappingURL=environments-form.js.map