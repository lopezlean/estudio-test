"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavData = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var i18n_1 = require("@wordpress/i18n");
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon"));
var paths_1 = require("@staticsnap/dashboard/routes/paths");
var icon = function (icon) { return ((0, jsx_runtime_1.jsx)(icon_1.default, { icon: icon, sx: {
        height: 1,
        width: 1,
    } })); };
function useNavData() {
    var data = (0, react_1.useMemo)(function () { return [
        {
            items: [
                {
                    icon: icon('material-symbols:dashboard'),
                    path: '/',
                    title: (0, i18n_1.__)('dashboard', 'static-snap'),
                },
            ],
        },
        {
            items: [
                {
                    icon: icon('material-symbols:settings'),
                    path: paths_1.paths.connect.index,
                    title: (0, i18n_1.__)('Connect', 'static-snap'),
                },
                {
                    icon: icon('material-symbols-light:stacks'),
                    path: paths_1.paths.environments.index,
                    title: (0, i18n_1.__)('Environments', 'static-snap'),
                },
                {
                    icon: icon('ant-design:deployment-unit-outlined'),
                    path: paths_1.paths.deployments.index,
                    title: (0, i18n_1.__)('Deployments', 'static-snap'),
                },
                {
                    icon: icon('material-symbols:search'),
                    path: paths_1.paths.search.index,
                    title: (0, i18n_1.__)('Search', 'static-snap'),
                },
            ],
            subheader: (0, i18n_1.__)('Settings', 'static-snap'),
        },
        {
            items: [
                {
                    icon: icon('material-symbols:help'),
                    path: paths_1.paths.support.docs,
                    title: (0, i18n_1.__)('Docs', 'static-snap'),
                },
            ],
            subheader: (0, i18n_1.__)('Support', 'static-snap'),
        },
    ]; }, []);
    return data;
}
exports.useNavData = useNavData;
//# sourceMappingURL=use-nav-data.js.map