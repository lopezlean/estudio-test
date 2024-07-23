"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.card = void 0;
// ----------------------------------------------------------------------
function card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return ({
                        borderRadius: ownerState.elevation === 0 ? null : theme.shape.borderRadius * 2,
                        position: 'relative',
                        zIndex: 0, // Fix Safari overflow: hidden with border radius
                    });
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0),
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3),
                },
            },
        },
    };
}
exports.card = card;
//# sourceMappingURL=card.js.map