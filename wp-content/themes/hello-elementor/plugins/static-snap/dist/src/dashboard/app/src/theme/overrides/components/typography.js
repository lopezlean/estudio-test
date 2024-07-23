"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
function typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}
exports.typography = typography;
//# sourceMappingURL=typography.js.map