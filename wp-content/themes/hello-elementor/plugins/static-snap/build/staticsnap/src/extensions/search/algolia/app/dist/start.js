"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var algolia_1 = tslib_1.__importDefault(require("./search/algolia"));
window.StaticSnapFrontend.Search.addModule(new algolia_1.default(window.StaticSnapFrontend));
//# sourceMappingURL=start.js.map