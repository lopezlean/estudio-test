"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var routes_1 = require("./routes");
var theme_1 = tslib_1.__importDefault(require("./theme"));
function App() {
    return ((0, jsx_runtime_1.jsx)(theme_1.default, { children: (0, jsx_runtime_1.jsx)(routes_1.AppRouter, {}) }));
}
exports.default = App;
//# sourceMappingURL=app.js.map