"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonBase = void 0;
var tslib_1 = require("tslib");
var link_behavior_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/theme/link-behavior"));
function buttonBase(_theme) {
    return {
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: link_behavior_1.default,
            },
        },
    };
}
exports.buttonBase = buttonBase;
//# sourceMappingURL=button-base.js.map