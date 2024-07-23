"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var react_router_dom_1 = require("react-router-dom");
var environments_form_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/environments/environments-form"));
function EnvironmentsEdit() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var params = (0, react_router_dom_1.useParams)();
    var _a = (0, react_1.useState)(), environment = _a[0], setEnvironment = _a[1];
    var _b = (0, react_1.useState)({}), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(true), loading = _c[0], setLoading = _c[1];
    var getSettings = (0, react_1.useCallback)(function () {
        (0, api_fetch_1.default)({ path: '/static-snap/v1/environments/' + params.id }).then(function (environment) {
            setEnvironment(environment);
            setLoading(false);
        });
    }, [params.id]);
    (0, react_1.useEffect)(function () {
        getSettings();
    }, [getSettings]);
    var onSubmit = function (data) {
        data.id = params === null || params === void 0 ? void 0 : params.id;
        (0, api_fetch_1.default)({
            data: data,
            method: 'PATCH',
            path: '/static-snap/v1/environments',
        }).then(function (response) {
            if (response && typeof response === 'object' && response.errors) {
                var errorResponse = response;
                setErrors(errorResponse.errors);
                return;
            }
            if (!!response === true) {
                navigate('/environments');
            }
        });
    };
    var onDelete = function (data) {
        // confirm delete
        var confirmDelete = window.confirm((0, i18n_1.__)('Are you sure you want to delete this environment?', 'static-snap'));
        if (!confirmDelete) {
            return;
        }
        data.id = params === null || params === void 0 ? void 0 : params.id;
        (0, api_fetch_1.default)({
            data: data,
            method: 'DELETE',
            path: '/static-snap/v1/environments',
        }).then(function (response) {
            if (!!response === true) {
                navigate('/environments');
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !loading && ((0, jsx_runtime_1.jsx)(environments_form_1.default, { title: "Edit Environment", onSubmit: onSubmit, onDelete: onDelete, value: environment, errors: errors })) }));
}
exports.default = EnvironmentsEdit;
//# sourceMappingURL=edit.js.map