"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidth = exports.useResponsive = void 0;
var tslib_1 = require("tslib");
// @mui
var styles_1 = require("@mui/material/styles");
var useMediaQuery_1 = tslib_1.__importDefault(require("@mui/material/useMediaQuery"));
function useResponsive(query, start, end) {
    var theme = (0, styles_1.useTheme)();
    var mediaUp = (0, useMediaQuery_1.default)(theme.breakpoints.up(start));
    var mediaDown = (0, useMediaQuery_1.default)(theme.breakpoints.down(start));
    var mediaBetween = (0, useMediaQuery_1.default)(theme.breakpoints.between(start, end));
    var mediaOnly = (0, useMediaQuery_1.default)(theme.breakpoints.only(start));
    if (query === 'up') {
        return mediaUp;
    }
    if (query === 'down') {
        return mediaDown;
    }
    if (query === 'between') {
        return mediaBetween;
    }
    return mediaOnly;
}
exports.useResponsive = useResponsive;
function useWidth() {
    var theme = (0, styles_1.useTheme)();
    var keys = tslib_1.__spreadArray([], theme.breakpoints.keys, true).reverse();
    return (keys.reduce(function (output, key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var matches = (0, useMediaQuery_1.default)(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null) || 'xs');
}
exports.useWidth = useWidth;
//# sourceMappingURL=use-responsive.js.map