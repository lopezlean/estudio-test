"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = void 0;
var tslib_1 = require("tslib");
// ----------------------------------------------------------------------
function button(theme) {
    var isLightMode = theme.palette.mode === 'light';
    var rootStyles = function (ownerState) {
        var isContained = ownerState.variant === 'contained';
        return tslib_1.__assign({}, (isContained && {
            '&:hover': {
                color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
            },
        }));
    };
    return {
        MuiButton: {
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return rootStyles(ownerState);
                },
            },
        },
    };
}
exports.button = button;
//# sourceMappingURL=button.js.map