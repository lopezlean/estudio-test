"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = exports.router = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/layout/layout"));
var connect_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/connect"));
var dashboard_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/dashboard"));
var deployments_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/deployments"));
var environments_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/environments"));
var add_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/environments/add"));
var edit_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/environments/edit"));
var search_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/pages/search"));
var react_router_dom_1 = require("react-router-dom");
var paths_1 = require("./paths");
var router = (0, react_router_dom_1.createHashRouter)([
    {
        children: [
            {
                element: (0, jsx_runtime_1.jsx)(dashboard_1.default, {}),
                index: true,
                path: paths_1.paths.dashboard.index,
            },
            {
                element: (0, jsx_runtime_1.jsx)("div", { children: "About" }),
                path: 'about',
            },
            { element: (0, jsx_runtime_1.jsx)(connect_1.default, {}), path: paths_1.paths.connect.index },
            { element: (0, jsx_runtime_1.jsx)(environments_1.default, {}), path: paths_1.paths.environments.index },
            { element: (0, jsx_runtime_1.jsx)(add_1.default, {}), path: paths_1.paths.environments.add },
            { element: (0, jsx_runtime_1.jsx)(edit_1.default, {}), path: paths_1.paths.environments.edit },
            { element: (0, jsx_runtime_1.jsx)(deployments_1.default, {}), path: paths_1.paths.deployments.index },
            { element: (0, jsx_runtime_1.jsx)(search_1.default, {}), path: paths_1.paths.search.index },
            {
                element: (0, jsx_runtime_1.jsx)("div", { children: "Wilcard" }),
                path: '*',
            },
        ],
        element: (0, jsx_runtime_1.jsx)(layout_1.default, {}),
        path: '/',
    },
], {});
exports.router = router;
var AppRouter = function () { return (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }); };
exports.AppRouter = AppRouter;
//# sourceMappingURL=index.js.map