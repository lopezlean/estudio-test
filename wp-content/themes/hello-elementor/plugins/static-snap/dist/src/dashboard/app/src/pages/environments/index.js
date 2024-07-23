"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var react_router_dom_1 = require("react-router-dom");
var table_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/table/table"));
var paths_1 = require("@staticsnap/dashboard/routes/paths");
function EnvironmentsIndex() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)([]), environments = _a[0], setEnvironments = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var getSettings = function () {
        (0, api_fetch_1.default)({ path: '/static-snap/v1/environments' }).then(function (environments) {
            setEnvironments(Array.from(environments));
            setLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        getSettings();
    }, []);
    return ((0, jsx_runtime_1.jsx)(table_1.default, { title: "Environments", loading: loading, rows: environments, columns: [
            { field: 'name', headerName: 'Name' },
            { field: 'type', headerName: 'Type' },
        ], actions: [
            {
                children: 'Edit',
                id: 'edit',
                onRowClick: function (_row) {
                    // navigate to edit page react-router-dom
                    navigate("/environments/edit/".concat(_row.id));
                },
            },
        ], cardActions: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "primary", href: paths_1.paths.environments.add, children: "Add Environment" }) }));
}
exports.default = EnvironmentsIndex;
//# sourceMappingURL=index.js.map