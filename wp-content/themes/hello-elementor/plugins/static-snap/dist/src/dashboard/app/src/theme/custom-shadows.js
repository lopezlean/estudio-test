"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customShadows = void 0;
// @mui
var styles_1 = require("@mui/material/styles");
//
var palette_1 = require("./palette");
// ----------------------------------------------------------------------
var palette = (0, palette_1.palette)('light');
var LIGHT_MODE = palette.grey[700];
var DARK_MODE = palette.common.black;
function createShadow(color) {
    var transparent = (0, styles_1.alpha)(color, 0.16);
    return {
        dialog: "-40px 40px 80px -8px ".concat((0, styles_1.alpha)(palette.common.black, 0.24)),
        dropdown: "0 0 2px 0 ".concat((0, styles_1.alpha)(color, 0.24), ", -20px 20px 40px -4px ").concat((0, styles_1.alpha)(color, 0.24)),
        error: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.error.main, 0.24)),
        info: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.info.main, 0.24)),
        primary: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.primary.main, 0.24)),
        secondary: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.secondary.main, 0.24)),
        success: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.success.main, 0.24)),
        table: "0 0 2px 0 ".concat((0, styles_1.alpha)(color, 0.2), ", 0 12px 24px -4px ").concat((0, styles_1.alpha)(color, 0.12)),
        warning: "0 8px 16px 0 ".concat((0, styles_1.alpha)(palette.warning.main, 0.24)),
        z1: "0 1px 2px 0 ".concat(transparent),
        z12: "0 12px 24px -4px ".concat(transparent),
        z16: "0 16px 32px -4px ".concat(transparent),
        z20: "0 20px 40px -4px ".concat(transparent),
        z24: "0 24px 48px 0 ".concat(transparent),
        z4: "0 4px 8px 0 ".concat(transparent),
        z8: "0 8px 16px 0 ".concat(transparent),
    };
}
function customShadows(mode) {
    return mode === 'light' ? createShadow(LIGHT_MODE) : createShadow(DARK_MODE);
}
exports.customShadows = customShadows;
//# sourceMappingURL=custom-shadows.js.map