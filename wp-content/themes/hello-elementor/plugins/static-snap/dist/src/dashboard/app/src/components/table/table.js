"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var Table_1 = tslib_1.__importDefault(require("@mui/material/Table"));
var TableContainer_1 = tslib_1.__importDefault(require("@mui/material/TableContainer"));
var table_contents_1 = tslib_1.__importDefault(require("./table-contents"));
var table_skeleton_1 = tslib_1.__importDefault(require("./table-skeleton"));
function Table(_a) {
    var title = _a.title, rows = _a.rows, columns = _a.columns, actions = _a.actions, cardActions = _a.cardActions, _b = _a.loading, loading = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { elevation: 0, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: title, action: cardActions }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(TableContainer_1.default, { children: (0, jsx_runtime_1.jsx)(Table_1.default, { "aria-label": "Table", children: loading ? ((0, jsx_runtime_1.jsx)(table_skeleton_1.default, { columns: columns })) : ((0, jsx_runtime_1.jsx)(table_contents_1.default, { columns: columns, rows: rows, actions: actions })) }) }) })] }));
}
exports.default = Table;
//# sourceMappingURL=table.js.map