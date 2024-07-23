"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.link = void 0;
var tslib_1 = require("tslib");
var link_behavior_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/theme/link-behavior"));
function link(_theme) {
    return {
        MuiLink: {
            defaultProps: {
                component: link_behavior_1.default
            }
        }
    };
}
exports.link = link;
//# sourceMappingURL=link.js.map