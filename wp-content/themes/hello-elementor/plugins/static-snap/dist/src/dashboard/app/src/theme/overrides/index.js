"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentsOverrides = void 0;
var tslib_1 = require("tslib");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var button_1 = require("./components/button");
var button_base_1 = require("./components/button-base");
var card_1 = require("./components/card");
var drawer_1 = require("./components/drawer");
var link_1 = require("./components/link");
var table_1 = require("./components/table");
// ----------------------------------------------------------------------
function componentsOverrides(theme) {
    var components = (0, merge_1.default)((0, drawer_1.drawer)(theme), (0, button_base_1.buttonBase)(theme), (0, link_1.link)(theme), (0, button_1.button)(theme), (0, table_1.table)(theme), (0, card_1.card)(theme));
    return components;
}
exports.componentsOverrides = componentsOverrides;
//# sourceMappingURL=index.js.map