"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideScroll = exports.textGradient = exports.bgGradient = exports.bgBlur = exports.menuItem = exports.paper = void 0;
var tslib_1 = require("tslib");
// @mui
var styles_1 = require("@mui/material/styles");
var Divider_1 = require("@mui/material/Divider");
var Checkbox_1 = require("@mui/material/Checkbox");
var MenuItem_1 = require("@mui/material/MenuItem");
var Autocomplete_1 = require("@mui/material/Autocomplete");
// ----------------------------------------------------------------------
var paper = function (_a) {
    var theme = _a.theme, bgcolor = _a.bgcolor, dropdown = _a.dropdown;
    return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, bgBlur(tslib_1.__assign({ blur: 20, opacity: 0.9, color: theme.palette.background.paper }, (!!bgcolor && {
        color: bgcolor,
    })))), { backgroundImage: 'url(/assets/cyan-blur.png), url(/assets/red-blur.png)', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'top right, left bottom', backgroundSize: '50%, 50%' }), (theme.direction === 'rtl' && {
        backgroundPosition: 'top left, right bottom',
    })), (dropdown && {
        padding: theme.spacing(0.5),
        boxShadow: theme.customShadows.dropdown,
        borderRadius: theme.shape.borderRadius * 1.25,
    })));
};
exports.paper = paper;
// ----------------------------------------------------------------------
var menuItem = function (theme) {
    var _a;
    return (tslib_1.__assign(tslib_1.__assign({}, theme.typography.body2), (_a = { padding: theme.spacing(0.75, 1), borderRadius: theme.shape.borderRadius * 0.75, '&:not(:last-of-type)': {
                marginBottom: 4,
            } }, _a["&.".concat(MenuItem_1.menuItemClasses.selected)] = {
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    }, _a["& .".concat(Checkbox_1.checkboxClasses.root)] = {
        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(-0.5),
        marginRight: theme.spacing(0.5),
    }, _a["&.".concat(Autocomplete_1.autocompleteClasses.option, "[aria-selected=\"true\"]")] = {
        backgroundColor: theme.palette.action.selected,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    }, _a["&+.".concat(Divider_1.dividerClasses.root)] = {
        margin: theme.spacing(0.5, 0),
    }, _a)));
};
exports.menuItem = menuItem;
function bgBlur(props) {
    var color = (props === null || props === void 0 ? void 0 : props.color) || '#000000';
    var blur = (props === null || props === void 0 ? void 0 : props.blur) || 6;
    var opacity = (props === null || props === void 0 ? void 0 : props.opacity) || 0.8;
    var imgUrl = props === null || props === void 0 ? void 0 : props.imgUrl;
    if (imgUrl) {
        return {
            position: 'relative',
            backgroundImage: "url(".concat(imgUrl, ")"),
            '&:before': {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: '100%',
                height: '100%',
                backdropFilter: "blur(".concat(blur, "px)"),
                WebkitBackdropFilter: "blur(".concat(blur, "px)"),
                backgroundColor: (0, styles_1.alpha)(color, opacity),
            },
        };
    }
    return {
        backdropFilter: "blur(".concat(blur, "px)"),
        WebkitBackdropFilter: "blur(".concat(blur, "px)"),
        backgroundColor: (0, styles_1.alpha)(color, opacity),
    };
}
exports.bgBlur = bgBlur;
function bgGradient(props) {
    var direction = (props === null || props === void 0 ? void 0 : props.direction) || 'to bottom';
    var startColor = props === null || props === void 0 ? void 0 : props.startColor;
    var endColor = props === null || props === void 0 ? void 0 : props.endColor;
    var imgUrl = props === null || props === void 0 ? void 0 : props.imgUrl;
    var color = props === null || props === void 0 ? void 0 : props.color;
    if (imgUrl) {
        return {
            background: "linear-gradient(".concat(direction, ", ").concat(startColor || color, ", ").concat(endColor || color, "), url(").concat(imgUrl, ")"),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        };
    }
    return {
        background: "linear-gradient(".concat(direction, ", ").concat(startColor, ", ").concat(endColor, ")"),
    };
}
exports.bgGradient = bgGradient;
// ----------------------------------------------------------------------
function textGradient(value) {
    return {
        background: "-webkit-linear-gradient(".concat(value, ")"),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
}
exports.textGradient = textGradient;
// ----------------------------------------------------------------------
exports.hideScroll = {
    x: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    y: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
};
//# sourceMappingURL=css.js.map