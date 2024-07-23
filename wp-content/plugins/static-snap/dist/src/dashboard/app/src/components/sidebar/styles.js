"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSubheader = exports.StyledDotIcon = exports.StyledIcon = exports.StyledItem = void 0;
var tslib_1 = require("tslib");
var ListItemButton_1 = tslib_1.__importDefault(require("@mui/material/ListItemButton"));
var ListItemIcon_1 = tslib_1.__importDefault(require("@mui/material/ListItemIcon"));
var ListSubheader_1 = tslib_1.__importDefault(require("@mui/material/ListSubheader"));
var styles_1 = require("@mui/material/styles");
var config_1 = tslib_1.__importDefault(require("./config"));
exports.StyledItem = (0, styles_1.styled)(ListItemButton_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'active'; },
})(function (_a) {
    var active = _a.active, depth = _a.depth, theme = _a.theme;
    var subItem = depth !== 1;
    var deepSubItem = depth > 2;
    var activeStyles = {
        root: {
            '&:hover': {
                backgroundColor: (0, styles_1.alpha)(theme.palette.primary.main, 0.16),
            },
            backgroundColor: (0, styles_1.alpha)(theme.palette.primary.main, 0.08),
            color: theme.palette.action.active,
        },
        sub: {
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
        },
    };
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ borderRadius: config_1.default.itemRadius, color: theme.palette.text.secondary, marginBottom: config_1.default.itemGap, minHeight: config_1.default.itemRootHeight, padding: config_1.default.itemPadding }, (active && tslib_1.__assign({}, activeStyles.root))), (subItem && tslib_1.__assign({ minHeight: config_1.default.itemSubHeight }, (active && tslib_1.__assign({}, activeStyles.sub))))), (deepSubItem && {
        paddingLeft: theme.spacing(depth),
    }));
});
exports.StyledIcon = (0, styles_1.styled)(ListItemIcon_1.default)(function (_a) {
    var size = _a.size;
    return ({
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
    });
});
exports.StyledDotIcon = (0, styles_1.styled)('span')(function (_a) {
    var active = _a.active, theme = _a.theme;
    return (tslib_1.__assign({ width: 4, height: 4, borderRadius: '50%', backgroundColor: theme.palette.text.disabled, transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.shorter,
        }) }, (active && {
        transform: 'scale(2)',
        backgroundColor: theme.palette.primary.main,
    })));
});
exports.StyledSubheader = (0, styles_1.styled)(ListSubheader_1.default)(function (_a) {
    var theme = _a.theme;
    return (tslib_1.__assign(tslib_1.__assign({}, theme.typography.overline), { fontSize: 11, cursor: 'pointer', display: 'inline-flex', padding: config_1.default.itemPadding, paddingTop: theme.spacing(2), marginBottom: config_1.default.itemGap, paddingBottom: theme.spacing(1), color: theme.palette.text.disabled, transition: theme.transitions.create(['color'], {
            duration: theme.transitions.duration.shortest,
        }), '&:hover': {
            color: theme.palette.text.primary,
        } }));
});
//# sourceMappingURL=styles.js.map