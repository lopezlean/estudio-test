"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalStyles_1 = tslib_1.__importDefault(require("@mui/material/GlobalStyles"));
var ScopedCssBaseline_1 = tslib_1.__importDefault(require("@mui/material/ScopedCssBaseline"));
var styles_1 = require("@mui/material/styles");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var custom_shadows_1 = require("./custom-shadows");
var overrides_1 = require("./overrides");
var palette_1 = require("./palette");
var shadows_1 = require("./shadows");
var typography_1 = require("./typography");
function ThemeProvider(_a) {
    var children = _a.children, _b = _a.isSettings, isSettings = _b === void 0 ? false : _b;
    var baseOption = (0, react_1.useMemo)(function () { return ({
        // match wordpress breakpoints
        breakpoints: {
            values: {
                xs: 0,
                // eslint-disable-next-line sort-keys
                sm: 600,
                // eslint-disable-next-line sort-keys
                md: 782,
                // eslint-disable-next-line sort-keys
                lg: 1024,
                xl: 1280,
            },
        },
        customShadows: (0, custom_shadows_1.customShadows)('light'),
        palette: (0, palette_1.palette)('light'),
        shadows: (0, shadows_1.shadows)('light'),
        shape: {
            borderRadius: 8,
        },
        typography: typography_1.typography,
    }); }, []);
    var memoizedValue = (0, react_1.useMemo)(function () {
        return (0, merge_1.default)(
        // Base
        baseOption);
    }, [baseOption]);
    var theme = (0, styles_1.createTheme)(memoizedValue);
    theme.components = (0, merge_1.default)((0, overrides_1.componentsOverrides)(theme));
    return ((0, jsx_runtime_1.jsxs)(styles_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(GlobalStyles_1.default, { styles: isSettings
                    ? {}
                    : // adapt the styles to the settings page
                        {
                            '.toplevel_page_static-snap  #wpadminbar ul#wp-admin-bar-root-default  li#wp-admin-bar-static-snap-admin-bar': {
                                display: 'block',
                            },
                            '.toplevel_page_static-snap  #wpcontent': {
                                paddingLeft: 0,
                            },
                            '.toplevel_page_static-snap  #wpfooter': {
                                display: 'none',
                            },
                            '.toplevel_page_static-snap  .auto-fold #wpcontent': {
                                paddingLeft: 0,
                            },
                        } }), (0, jsx_runtime_1.jsx)(ScopedCssBaseline_1.default, { children: children })] }));
}
exports.default = ThemeProvider;
//# sourceMappingURL=index.js.map