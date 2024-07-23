"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palette = void 0;
var tslib_1 = require("tslib");
var styles_1 = require("@mui/material/styles");
// SETUP COLORS
var GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};
var PRIMARY = {
    contrastText: '#FFFFFF',
    dark: '#0351AB',
    darker: '#012972',
    light: '#68CDF9',
    lighter: '#CCF4FE',
    main: '#078DEE',
};
var SECONDARY = {
    contrastText: '#FFFFFF',
    dark: '#5119B7',
    darker: '#27097A',
    light: '#C684FF',
    lighter: '#EFD6FF',
    main: '#8E33FF',
};
var INFO = {
    contrastText: '#FFFFFF',
    dark: '#006C9C',
    darker: '#003768',
    light: '#61F3F3',
    lighter: '#CAFDF5',
    main: '#00B8D9',
};
var SUCCESS = {
    contrastText: '#ffffff',
    dark: '#118D57',
    darker: '#065E49',
    light: '#77ED8B',
    lighter: '#D3FCD2',
    main: '#22C55E',
};
var WARNING = {
    contrastText: GREY[800],
    dark: '#B76E00',
    darker: '#7A4100',
    light: '#FFD666',
    lighter: '#FFF5CC',
    main: '#FFAB00',
};
var ERROR = {
    contrastText: '#FFFFFF',
    dark: '#B71D18',
    darker: '#7A0916',
    light: '#FFAC82',
    lighter: '#FFE9D5',
    main: '#FF5630',
};
var COMMON = {
    action: {
        disabled: (0, styles_1.alpha)(GREY[500], 0.8),
        disabledBackground: (0, styles_1.alpha)(GREY[500], 0.24),
        disabledOpacity: 0.48,
        focus: (0, styles_1.alpha)(GREY[500], 0.24),
        hover: (0, styles_1.alpha)(GREY[500], 0.08),
        hoverOpacity: 0.08,
        selected: (0, styles_1.alpha)(GREY[500], 0.16),
    },
    common: {
        black: '#000000',
        white: '#FFFFFF',
    },
    divider: (0, styles_1.alpha)(GREY[500], 0.2),
    error: ERROR,
    grey: GREY,
    info: INFO,
    primary: PRIMARY,
    secondary: SECONDARY,
    success: SUCCESS,
    warning: WARNING,
};
function palette(mode) {
    var light = tslib_1.__assign(tslib_1.__assign({}, COMMON), { action: tslib_1.__assign(tslib_1.__assign({}, COMMON.action), { active: GREY[900] }), background: {
            // wordpress color
            //default: 'rgb(240, 240, 241)'
            default: '#f6f8fc',
            neutral: GREY[200],
            paper: '#FFFFFF',
        }, mode: 'light', text: {
            disabled: GREY[500],
            primary: GREY[700],
            secondary: GREY[600],
        } });
    var dark = tslib_1.__assign(tslib_1.__assign({}, COMMON), { action: tslib_1.__assign(tslib_1.__assign({}, COMMON.action), { active: GREY[500] }), background: {
            default: GREY[900],
            neutral: (0, styles_1.alpha)(GREY[500], 0.12),
            paper: GREY[800],
        }, mode: 'dark', text: {
            disabled: GREY[600],
            primary: '#FFFFFF',
            secondary: GREY[500],
        } });
    return mode === 'light' ? light : dark;
}
exports.palette = palette;
//# sourceMappingURL=palette.js.map