"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importStar(require("react"));
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var Dialog_1 = tslib_1.__importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = tslib_1.__importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = tslib_1.__importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = tslib_1.__importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = tslib_1.__importDefault(require("@mui/material/DialogTitle"));
var Slide_1 = tslib_1.__importDefault(require("@mui/material/Slide"));
var i18n_1 = require("@wordpress/i18n");
var icon_1 = tslib_1.__importDefault(require("./icon"));
var Transition = react_1.default.forwardRef(function Transition(props, ref) {
    return (0, jsx_runtime_1.jsx)(Slide_1.default, tslib_1.__assign({ direction: "up", ref: ref }, props));
});
function DeploymentDoneDialog(_a) {
    var _b;
    var status = _a.status;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, []);
    var handleVisitStaticSite = (0, react_1.useCallback)(function () {
        window.open('https://open.uwh.es', '_blank');
    }, []);
    (0, react_1.useEffect)(function () {
        if (status.is_done) {
            setOpen(status.is_done);
        }
    }, [status.is_done]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: (0, i18n_1.__)('Congratulations', 'static-snap') }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: (0, jsx_runtime_1.jsx)(DialogContentText_1.default, { id: "alert-dialog-slide-description", children: (0, jsx_runtime_1.jsxs)(Box_1.default, { flexDirection: 'row', alignItems: 'center', display: 'flex', gap: 10, children: [(0, jsx_runtime_1.jsx)(icon_1.default, {}), (0, i18n_1.__)((0, i18n_1.sprintf)('Deployment for Environment %s was successful! You can now visit the static site.', ((_b = status.last_deployment) === null || _b === void 0 ? void 0 : _b.environment_name) || null), 'static-snap')] }) }) }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleVisitStaticSite, children: (0, i18n_1.__)('View static site', 'static-snap') }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleClose, children: (0, i18n_1.__)('Close', 'static-snap') })] })] }) }));
}
exports.default = DeploymentDoneDialog;
//# sourceMappingURL=index.js.map