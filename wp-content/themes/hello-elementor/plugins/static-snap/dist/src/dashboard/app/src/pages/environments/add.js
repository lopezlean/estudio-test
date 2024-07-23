"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var react_router_dom_1 = require("react-router-dom");
var environments_form_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/environments/environments-form"));
function EnvironmentsAdd() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var onSubmit = function (data) {
        (0, api_fetch_1.default)({
            data: data,
            method: 'POST',
            path: '/static-snap/v1/environments',
        }).then(function (response) {
            if (!!response === true) {
                navigate('/environments');
            }
        });
    };
    return (0, jsx_runtime_1.jsx)(environments_form_1.default, { title: "Add Environment", onSubmit: onSubmit });
}
exports.default = EnvironmentsAdd;
//# sourceMappingURL=add.js.map