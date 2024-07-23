"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var TabContext_1 = tslib_1.__importDefault(require("@mui/lab/TabContext"));
var TabList_1 = tslib_1.__importDefault(require("@mui/lab/TabList"));
var TabPanel_1 = tslib_1.__importDefault(require("@mui/lab/TabPanel"));
var AppBar_1 = tslib_1.__importDefault(require("@mui/material/AppBar"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Tab_1 = tslib_1.__importDefault(require("@mui/material/Tab"));
var i18n_1 = require("@wordpress/i18n");
var environment_pane_1 = tslib_1.__importDefault(require("./environment-pane"));
function EnvironmentsTabs(_a) {
    var environments = _a.environments, children = _a.children, header = _a.header, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.justifyContent, justifyContent = _c === void 0 ? 'space-between' : _c;
    var _d = React.useState(Array.isArray(environments) && environments.length > 0 ? environments[0].id : ''), value = _d[0], setValue = _d[1];
    var handleChange = function (_event, newValue) {
        setValue(newValue);
    };
    return ((0, jsx_runtime_1.jsx)(Card_1.default, { sx: { borderRadius: 0, minWidth: 350 }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                paddingTop: '.8rem',
                typography: 'body1',
                width: '100%',
            }, children: [Array.isArray(environments) && environments.length > 0 && ((0, jsx_runtime_1.jsxs)(TabContext_1.default, { value: value, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { borderBottom: 1, borderColor: 'divider' }, children: (0, jsx_runtime_1.jsx)(AppBar_1.default, { position: "static", color: "default", children: (0, jsx_runtime_1.jsx)(TabList_1.default, { onChange: handleChange, "aria-label": "lab API tabs example", variant: "scrollable", scrollButtons: "auto", sx: {
                                        '.MuiTabs-flexContainer': {
                                            justifyContent: justifyContent,
                                        },
                                    }, children: environments.map(function (environment) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { label: environment.name, value: environment.id, sx: { flexGrow: 1 } }, environment.id)); }) }) }) }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: environments.map(function (environment) { return ((0, jsx_runtime_1.jsxs)(TabPanel_1.default, { value: environment.id, sx: { paddingX: 0 }, children: [header && header(environment), (0, jsx_runtime_1.jsx)(environment_pane_1.default, { environment: environment, disabled: disabled }), children && children(environment)] }, environment.id)); }) })] })), (!environments || (Array.isArray(environments) && environments.length < 1)) && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, i18n_1.__)('No environments found. ', 'static-snap'), (0, jsx_runtime_1.jsx)("a", { href: "/wp-admin/admin.php?page=static-snap-settings#/environments", children: (0, i18n_1.__)('Add Environment', 'static-snap') })] }))] }) }));
}
exports.default = EnvironmentsTabs;
//# sourceMappingURL=index.js.map