"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var Skeleton_1 = tslib_1.__importDefault(require("@mui/material/Skeleton"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var LastDeployment = function (_a) {
    var environment_id = _a.environment_id;
    var _b = (0, react_1.useState)(null), lastDeployment = _b[0], setLastDeployment = _b[1];
    var _c = (0, react_1.useState)(true), lastDeploymentLoading = _c[0], setLastDeploymentLoading = _c[1];
    (0, react_1.useEffect)(function () {
        var getLastDeployment = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_fetch_1.default)({
                            path: "/static-snap/v1/deployments-history/last/".concat(environment_id),
                        })];
                    case 1:
                        response = _a.sent();
                        setLastDeployment(response);
                        setLastDeploymentLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        getLastDeployment();
    }, [environment_id]);
    var start_date = (lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.start_time)
        ? new Date(Number(lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.start_time) * 1000).toLocaleString()
        : null;
    var end_date = (lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.end_time)
        ? new Date(Number(lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.end_time) * 1000).toLocaleString()
        : null;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { children: lastDeploymentLoading ? ((0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: '100%', height: 35 })) : ((lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.id) && ((0, jsx_runtime_1.jsxs)(Card_1.default, { variant: "outlined", sx: { mt: 4 }, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: (0, i18n_1.__)('Lastest Deployment', 'static-snap') }), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, i18n_1.__)('Start date:', 'static-snap'), (0, jsx_runtime_1.jsxs)("strong", { children: [" ", start_date] })] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18n_1.__)('End date:', 'static-snap'), (0, jsx_runtime_1.jsxs)("strong", { children: [" ", end_date] })] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, i18n_1.__)('Created by:', 'static-snap'), (0, jsx_runtime_1.jsxs)("strong", { children: [' ', lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.created_by_name, " (", lastDeployment === null || lastDeployment === void 0 ? void 0 : lastDeployment.created_by_email, ")"] })] })] })] }))) }));
};
exports.default = LastDeployment;
//# sourceMappingURL=last-deployment.js.map