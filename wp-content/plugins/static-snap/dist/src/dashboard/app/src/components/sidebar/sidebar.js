"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
var sidebar_group_1 = tslib_1.__importDefault(require("./sidebar-group"));
function Sidebar(_a) {
    var data = _a.data, sx = _a.sx, other = tslib_1.__rest(_a, ["data", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, tslib_1.__assign({ sx: sx }, other, { children: data.map(function (group, index) { return ((0, jsx_runtime_1.jsx)(sidebar_group_1.default, { subheader: group.subheader, items: group.items }, group.subheader || index)); }) })));
}
exports.default = (0, react_1.memo)(Sidebar);
//# sourceMappingURL=sidebar.js.map