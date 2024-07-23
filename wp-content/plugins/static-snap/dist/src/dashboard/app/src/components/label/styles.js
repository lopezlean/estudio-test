"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLabel = void 0;
var tslib_1 = require("tslib");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
exports.StyledLabel = (0, styles_1.styled)(Box_1.default)(function (_a) {
    var theme = _a.theme, ownerState = _a.ownerState;
    var isLight = theme.palette.mode === 'light';
    var filledVariant = ownerState.variant === 'filled';
    var outlinedVariant = ownerState.variant === 'outlined';
    var softVariant = ownerState.variant === 'soft';
    var defaultStyle = tslib_1.__assign({}, (ownerState.color === 'default' && tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (filledVariant && {
        color: isLight ? theme.palette.common.white : theme.palette.grey[800],
        backgroundColor: theme.palette.text.primary,
    })), (outlinedVariant && {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        border: "2px solid ".concat(theme.palette.text.primary),
    })), (softVariant && {
        color: theme.palette.text.secondary,
        backgroundColor: (0, styles_1.alpha)(theme.palette.grey[500], 0.16),
    }))));
    var colorStyle = tslib_1.__assign({}, (ownerState.color !== 'default' && tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (filledVariant && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
    })), (outlinedVariant && {
        backgroundColor: 'transparent',
        color: theme.palette[ownerState.color].main,
        border: "2px solid ".concat(theme.palette[ownerState.color].main),
    })), (softVariant && {
        color: theme.palette[ownerState.color][isLight ? 'dark' : 'light'],
        backgroundColor: (0, styles_1.alpha)(theme.palette[ownerState.color].main, 0.16),
    }))));
    return tslib_1.__assign(tslib_1.__assign({ height: 24, minWidth: 24, lineHeight: 0, borderRadius: 6, cursor: 'default', alignItems: 'center', whiteSpace: 'nowrap', display: 'inline-flex', justifyContent: 'center', textTransform: 'capitalize', padding: theme.spacing(0, 0.75), fontSize: theme.typography.pxToRem(12), fontWeight: theme.typography.fontWeightBold, transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shorter,
        }) }, defaultStyle), colorStyle);
});
//# sourceMappingURL=styles.js.map