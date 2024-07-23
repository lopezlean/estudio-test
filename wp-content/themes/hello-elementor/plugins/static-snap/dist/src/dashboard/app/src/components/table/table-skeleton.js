"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Table_1 = tslib_1.__importDefault(require("@mui/material/Table"));
var TableBody_1 = tslib_1.__importDefault(require("@mui/material/TableBody"));
var TableCell_1 = tslib_1.__importDefault(require("@mui/material/TableCell"));
var TableContainer_1 = tslib_1.__importDefault(require("@mui/material/TableContainer"));
var TableHead_1 = tslib_1.__importDefault(require("@mui/material/TableHead"));
var TableRow_1 = tslib_1.__importDefault(require("@mui/material/TableRow"));
var Skeleton_1 = tslib_1.__importDefault(require("@mui/material/Skeleton"));
var TableSkeleton = function (_a) {
    var columns = _a.columns;
    return ((0, jsx_runtime_1.jsx)(TableContainer_1.default, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, { "aria-label": "Table", children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { children: (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: '100%', height: 35 }) }, column.field)); }) }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { children: (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: '100%', height: 35 }) }, column.field)); }) }) })] }) }));
};
exports.default = TableSkeleton;
//# sourceMappingURL=table-skeleton.js.map