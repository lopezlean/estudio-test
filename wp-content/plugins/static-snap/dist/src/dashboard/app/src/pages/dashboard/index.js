"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var Skeleton_1 = tslib_1.__importDefault(require("@mui/material/Skeleton"));
var Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
var last_deployment_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/deployment-history/last-deployment"));
var environments_tabs_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/environments-tabs"));
var use_status_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/hooks/use-status"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var DashboardIndex = function () {
    var _a = (0, react_1.useState)(true), environmentsLoading = _a[0], setEnvironmentsLoading = _a[1];
    var _b = (0, react_1.useState)([]), environments = _b[0], setEnvironments = _b[1];
    var status = (0, use_status_1.default)();
    (0, react_1.useEffect)(function () {
        var getEnvironments = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_fetch_1.default)({ path: '/static-snap/v1/environments' })];
                    case 1:
                        response = _a.sent();
                        setEnvironments(Array.from(response));
                        setEnvironmentsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        getEnvironments();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { elevation: 0, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: (0, i18n_1.__)('Dashboard', 'static-snap') }), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [(0, jsx_runtime_1.jsx)("p", { children: (0, i18n_1.__)('Welcome back to Static Snap!', 'static-snap') }), environmentsLoading ? ((0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: '100%', height: 35 })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", children: (0, i18n_1.__)('Your environments:', 'static-snap') }), (0, jsx_runtime_1.jsx)(environments_tabs_1.default, { environments: environments, disabled: status.is_running, justifyContent: "start", header: function (environment) { return ((0, jsx_runtime_1.jsx)("p", { children: (0, i18n_1.sprintf)((0, i18n_1.__)('Your site will be deployed using %s engine.', 'static-snap'), environment.type) })); }, children: function (_a) {
                                    var id = _a.id;
                                    return (0, jsx_runtime_1.jsx)(last_deployment_1.default, { environment_id: Number(id) });
                                } })] }))] })] }));
};
exports.default = DashboardIndex;
//# sourceMappingURL=index.js.map