"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = exports.responsiveFontSizes = exports.pxToRem = exports.remToPx = void 0;
var tslib_1 = require("tslib");
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
exports.remToPx = remToPx;
function pxToRem(value) {
    return "".concat(value / 16, "rem");
}
exports.pxToRem = pxToRem;
function responsiveFontSizes(_a) {
    var sm = _a.sm, md = _a.md, lg = _a.lg;
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm)
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md)
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg)
        }
    };
}
exports.responsiveFontSizes = responsiveFontSizes;
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
exports.typography = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: tslib_1.__assign({ fontWeight: 800, lineHeight: 80 / 64, fontSize: pxToRem(40) }, responsiveFontSizes({ sm: 52, md: 58, lg: 64 })),
    h2: tslib_1.__assign({ fontWeight: 800, lineHeight: 64 / 48, fontSize: pxToRem(32) }, responsiveFontSizes({ sm: 40, md: 44, lg: 48 })),
    h3: tslib_1.__assign({ fontWeight: 700, lineHeight: 1.5, fontSize: pxToRem(24) }, responsiveFontSizes({ sm: 26, md: 30, lg: 32 })),
    h4: tslib_1.__assign({ fontWeight: 700, lineHeight: 1.5, fontSize: pxToRem(20) }, responsiveFontSizes({ sm: 20, md: 24, lg: 24 })),
    h5: tslib_1.__assign({ fontWeight: 700, lineHeight: 1.5, fontSize: pxToRem(18) }, responsiveFontSizes({ sm: 19, md: 20, lg: 20 })),
    h6: tslib_1.__assign({ fontWeight: 700, lineHeight: 28 / 18, fontSize: pxToRem(17) }, responsiveFontSizes({ sm: 18, md: 18, lg: 18 })),
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: 'uppercase'
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: 'unset'
    }
};
//# sourceMappingURL=typography.js.map