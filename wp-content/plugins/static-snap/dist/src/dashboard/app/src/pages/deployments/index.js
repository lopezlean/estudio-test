"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var json_viewer_1 = require("@textea/json-viewer");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon"));
var light_tooltip_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/light-tooltip"));
var table_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/table/table"));
var Status = {
    1: 'Running',
    2: 'Completed',
    3: 'Canceled',
    4: 'Paused',
    5: 'Failed',
};
function DeploymentsIndex() {
    //const navigate = useNavigate();
    var _a = (0, react_1.useState)([]), deployments = _a[0], setDeployments = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var getDeployments = function () {
        (0, api_fetch_1.default)({ path: '/static-snap/v1/deployments-history' }).then(function (environments) {
            setDeployments(Array.from(environments));
            setLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        getDeployments();
    }, []);
    return ((0, jsx_runtime_1.jsx)(table_1.default, { title: "Deployments", loading: loading, rows: deployments, columns: [
            {
                field: 'environment_name',
                headerName: 'Environment',
            },
            {
                field: 'status',
                headerName: 'Status',
                render: function (status) { return Status[status]; },
            },
            {
                field: 'start_time',
                headerName: 'Start',
                render: function (value) { return new Date(value * 1000).toLocaleString(); },
            },
            {
                field: 'end_time',
                headerName: 'End',
                render: function (value) { return (value ? new Date(value * 1000).toLocaleString() : null); },
            },
            {
                field: 'status_information',
                headerName: 'Status info',
                render: function (value) {
                    return value ? ((0, jsx_runtime_1.jsx)(light_tooltip_1.default, { title: (0, jsx_runtime_1.jsx)(json_viewer_1.JsonViewer, { value: JSON.parse(value), theme: 'light', rootName: false }), children: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: 'material-symbols:info' }) })) : null;
                },
            },
            {
                field: 'error',
                headerName: 'Error',
                render: function (value) {
                    return value ? ((0, jsx_runtime_1.jsx)(light_tooltip_1.default, { title: (0, jsx_runtime_1.jsx)(json_viewer_1.JsonViewer, { value: JSON.parse(value), theme: 'light', rootName: false }), children: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: 'material-symbols:info' }) })) : null;
                },
            },
        ], actions: [
            {
                children: 'Delete',
                id: 'delete',
                onRowClick: function (_row, index) {
                    console.log('TODO Delete', index);
                },
            },
        ] }));
}
exports.default = DeploymentsIndex;
//# sourceMappingURL=index.js.map