"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawer = void 0;
var tslib_1 = require("tslib");
var styles_1 = require("@mui/material/styles");
var Drawer_1 = require("@mui/material/Drawer");
//
var css_1 = require("@staticsnap/dashboard/theme/css");
// ----------------------------------------------------------------------
function drawer(theme) {
    var lightMode = theme.palette.mode === 'light';
    return {
        MuiDrawer: {
            styleOverrides: {
                root: function (_a) {
                    var _b;
                    var ownerState = _a.ownerState;
                    return (tslib_1.__assign({}, (ownerState.variant === 'temporary' && (_b = {},
                        _b["& .".concat(Drawer_1.drawerClasses.paper)] = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (0, css_1.paper)({ theme: theme })), (ownerState.anchor === 'left' && {
                            boxShadow: "40px 40px 80px -8px ".concat((0, styles_1.alpha)(lightMode ? theme.palette.grey[500] : theme.palette.common.black, 0.24))
                        })), (ownerState.anchor === 'right' && {
                            boxShadow: "-40px 40px 80px -8px ".concat((0, styles_1.alpha)(lightMode ? theme.palette.grey[500] : theme.palette.common.black, 0.24))
                        })),
                        _b))));
                }
            }
        }
    };
}
exports.drawer = drawer;
//# sourceMappingURL=drawer.js.map