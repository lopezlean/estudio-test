"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var TableBody_1 = tslib_1.__importDefault(require("@mui/material/TableBody"));
var TableCell_1 = tslib_1.__importDefault(require("@mui/material/TableCell"));
var TableHead_1 = tslib_1.__importDefault(require("@mui/material/TableHead"));
var TableRow_1 = tslib_1.__importDefault(require("@mui/material/TableRow"));
var uuid = function () { return Math.floor(Math.random() * 1000000); };
var TableContents = function (_a) {
    var columns = _a.columns, rows = _a.rows, actions = _a.actions;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { children: column.headerName }, column.field)); }), actions && (0, jsx_runtime_1.jsx)(TableCell_1.default, {})] }) }), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: rows.map(function (row, index) { return ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableCell_1.default, { children: typeof column.render === 'function'
                                ? column.render(row[column.field], column)
                                : row[column.field] }, column.field)); }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: actions === null || actions === void 0 ? void 0 : actions.map(function (_a) {
                                var onRowClick = _a.onRowClick, onClick = _a.onClick, other = tslib_1.__rest(_a, ["onRowClick", "onClick"]);
                                return ((0, jsx_runtime_1.jsx)(Button_1.default, tslib_1.__assign({}, other, { onClick: function (e) {
                                        onRowClick && onRowClick(row, index);
                                        onClick && onClick(e);
                                    } }), other.id));
                            }) })] }, row.id || uuid())); }) })] }));
};
exports.default = TableContents;
//# sourceMappingURL=table-contents.js.map