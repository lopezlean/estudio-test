"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
var styles_1 = require("@mui/material/styles");
var TableCell_1 = require("@mui/material/TableCell");
var TableRow_1 = require("@mui/material/TableRow");
// ----------------------------------------------------------------------
function table(theme) {
    var _a, _b;
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.table,
                    position: 'relative',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: (_a = {},
                    _a["&.".concat(TableRow_1.tableRowClasses.selected)] = {
                        backgroundColor: (0, styles_1.alpha)(theme.palette.primary.dark, 0.04),
                        '&:hover': {
                            backgroundColor: (0, styles_1.alpha)(theme.palette.primary.dark, 0.08),
                        },
                    },
                    _a['&:last-of-type'] = (_b = {},
                        _b["& .".concat(TableCell_1.tableCellClasses.root)] = {
                            borderColor: 'transparent',
                        },
                        _b),
                    _a),
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomStyle: 'dashed',
                },
                head: {
                    fontSize: 14,
                    color: theme.palette.text.primary,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    backgroundColor: theme.palette.background.neutral,
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: "linear-gradient(to bottom, ".concat(theme.palette.background.neutral, " 0%, ").concat(theme.palette.background.neutral, " 100%)"),
                },
                paddingCheckbox: {
                    paddingLeft: theme.spacing(1),
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
                toolbar: {
                    height: 64,
                },
                actions: {
                    marginRight: 8,
                },
                select: {
                    paddingLeft: 8,
                    '&:focus': {
                        borderRadius: theme.shape.borderRadius,
                    },
                },
                selectIcon: {
                    right: 4,
                    width: 16,
                    height: 16,
                    top: 'calc(50% - 8px)',
                },
            },
        },
    };
}
exports.table = table;
//# sourceMappingURL=table.js.map