"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var CircularProgress_1 = tslib_1.__importDefault(require("@mui/material/CircularProgress"));
var Menu_1 = tslib_1.__importDefault(require("@mui/material/Menu"));
var Tooltip_1 = tslib_1.__importDefault(require("@mui/material/Tooltip"));
var Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var deployment_done_dialog_1 = tslib_1.__importDefault(require("./deployment-done-dialog"));
var environments_tabs_1 = tslib_1.__importDefault(require("./environments-tabs"));
var linear_progress_with_label_1 = tslib_1.__importDefault(require("./linear-progress-with-label"));
var logo_1 = tslib_1.__importDefault(require("./logo"));
var AdminLoading = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var status = _a.status, props = tslib_1.__rest(_a, ["status"]);
    var _h = (0, react_1.useState)([]), environments = _h[0], setEnvironments = _h[1];
    var _j = (0, react_1.useState)(null), anchorEl = _j[0], setAnchorEl = _j[1];
    var open = Boolean(anchorEl);
    var handleClick = (0, react_1.useCallback)(function (event) {
        setAnchorEl(event.currentTarget);
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setAnchorEl(null);
    }, []);
    var cancelDeployment = (0, react_1.useCallback)(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!status.is_running) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, api_fetch_1.default)({
                            method: 'POST',
                            path: '/static-snap/v1/deployments/cancel',
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [status]);
    (0, react_1.useEffect)(function () {
        // listen to global event close menu
        window.addEventListener('static-snap/close-deployment-menu', handleClose);
        return function () {
            window.removeEventListener('static-snap/close-deployment-menu', handleClose);
        };
    });
    var TooltipTitle = status.is_running ? ((0, jsx_runtime_1.jsxs)(Box_1.default, { minWidth: 300, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { color: "inherit", children: (0, i18n_1.__)('Running', 'static-snap') }), (0, jsx_runtime_1.jsx)(linear_progress_with_label_1.default, { variant: "determinate", value: Math.round(((_c = (_b = status.last_deployment) === null || _b === void 0 ? void 0 : _b.status_information) === null || _c === void 0 ? void 0 : _c.percentage) || 0) }), (0, jsx_runtime_1.jsxs)("strong", { children: [(_e = (_d = status.last_deployment) === null || _d === void 0 ? void 0 : _d.status_information) === null || _e === void 0 ? void 0 : _e.current_task_description, "..."] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { display: 'flex', justifyContent: 'center', marginTop: '8px' }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { sx: { marginLeft: 'auto' }, size: "small", onClick: cancelDeployment, color: "error", children: (0, i18n_1.__)('Cancel', 'static-snap') }) })] })) : null;
    (0, react_1.useEffect)(function () {
        var getEnvironments = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_fetch_1.default)({ path: '/static-snap/v1/environments' })];
                    case 1:
                        response = _a.sent();
                        setEnvironments(Array.from(response));
                        return [2 /*return*/];
                }
            });
        }); };
        getEnvironments();
    }, []);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: TooltipTitle, placement: "bottom", arrow: true, open: status.is_running, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                display: 'inline-flex',
                height: {
                    md: '32px !important',
                    xs: '46px !important',
                },
                justifyContent: 'center',
                position: 'relative !important',
                //width: '32px !important',
            }, children: [(0, jsx_runtime_1.jsxs)(Button_1.default, { component: 'a', onClick: handleClick, disabled: status.is_running, sx: tslib_1.__assign({ display: 'flex !important', position: 'relative !important', minWidth: '32px !important' }, (open && {
                        background: '#2c3338 !important',
                        color: '#72aee6 !important',
                    })), children: [status.is_running && ((0, jsx_runtime_1.jsx)(CircularProgress_1.default, tslib_1.__assign({ variant: "determinate" }, props, { size: 32, color: "primary", value: ((_g = (_f = status.last_deployment) === null || _f === void 0 ? void 0 : _f.status_information) === null || _g === void 0 ? void 0 : _g.percentage) || 0, sx: {
                                circle: {
                                    transition: 'stroke-dashoffset 900ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
                                },
                                height: {
                                    md: '32px !important',
                                    xs: '44px !important',
                                },
                                transition: 'transform 900ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
                                width: {
                                    md: '32px !important',
                                    xs: '44px !important',
                                },
                            } }))), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                                alignItems: 'center',
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                left: 0,
                                position: 'absolute !important',
                                right: 0,
                                top: 0,
                            }, children: (0, jsx_runtime_1.jsx)(logo_1.default, { sx: {
                                    // keyframes
                                    '@keyframes spin': {
                                        '0%': {
                                            transform: 'rotate(0deg)',
                                        },
                                        '100%': {
                                            transform: 'rotate(360deg)',
                                        },
                                    },
                                    alignItems: 'center',
                                    display: 'flex',
                                    inset: '0 !important',
                                    justifyContent: 'center',
                                    position: 'absolute !important',
                                    svg: tslib_1.__assign(tslib_1.__assign({}, (status.is_running && { animation: 'spin 2s linear infinite' })), { height: {
                                            md: '22px !important',
                                            xs: '30px !important',
                                        }, path: {
                                            fill: '#c3c4c7 !important',
                                        }, width: {
                                            md: '22px !important',
                                            xs: '30px !important',
                                        } }),
                                } }) })] }), !status.is_running && ((0, jsx_runtime_1.jsx)(Menu_1.default, { anchorEl: anchorEl, open: open, onClose: handleClose, elevation: 9, anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    }, 
                    // change ul for a div
                    MenuListProps: {
                        component: 'div',
                        sx: { paddingBottom: 0 },
                    }, sx: {
                        maxWidth: '90%',
                    }, children: (0, jsx_runtime_1.jsx)(environments_tabs_1.default, { environments: environments }) })), (0, jsx_runtime_1.jsx)(deployment_done_dialog_1.default, { status: status })] }) }));
};
exports.default = AdminLoading;
//# sourceMappingURL=admin-loading.js.map