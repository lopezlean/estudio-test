"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledScrollbar = exports.StyledRootScrollbar = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var simplebar_react_1 = tslib_1.__importDefault(require("simplebar-react"));
var styles_1 = require("@mui/material/styles");
exports.StyledRootScrollbar = (0, styles_1.styled)('div')(function () { return ({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
}); });
exports.StyledScrollbar = (0, styles_1.styled)(simplebar_react_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        maxHeight: '100%',
        '& .simplebar-scrollbar': {
            '&:before': {
                backgroundColor: (0, styles_1.alpha)(theme.palette.grey[600], 0.48),
            },
            '&.simplebar-visible:before': {
                opacity: 1,
            },
        },
        '& .simplebar-track.simplebar-vertical': {
            width: 10,
        },
        '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
            height: 6,
        },
        '& .simplebar-mask': {
            zIndex: 'inherit',
        },
    });
});
function Scrollbar(_a) {
    var children = _a.children, sx = _a.sx, other = tslib_1.__rest(_a, ["children", "sx"]);
    var userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return ((0, jsx_runtime_1.jsx)(Box_1.default, tslib_1.__assign({ sx: tslib_1.__assign({ overflowX: 'auto' }, sx) }, other, { children: children })));
    }
    return ((0, jsx_runtime_1.jsx)(exports.StyledRootScrollbar, { children: (0, jsx_runtime_1.jsx)(exports.StyledScrollbar, tslib_1.__assign({ clickOnTrack: false, sx: sx }, other, { children: children })) }));
}
exports.default = (0, react_1.memo)((0, react_1.forwardRef)(Scrollbar));
//# sourceMappingURL=scrollbar.js.map