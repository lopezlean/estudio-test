"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var LoadingButton_1 = tslib_1.__importDefault(require("@mui/lab/LoadingButton"));
var Alert_1 = tslib_1.__importDefault(require("@mui/material/Alert"));
var Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
var CardContent_1 = tslib_1.__importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = tslib_1.__importDefault(require("@mui/material/CardHeader"));
var api_fetch_1 = tslib_1.__importDefault(require("@wordpress/api-fetch"));
var i18n_1 = require("@wordpress/i18n");
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon"));
var constants_1 = require("@staticsnap/dashboard/constants");
var ConnectIndex = function () {
    var _a = (0, react_1.useState)(false), code = _a[0], setCode = _a[1];
    var _b = (0, react_1.useState)(undefined), connected = _b[0], setConnected = _b[1];
    var _c = (0, react_1.useState)(undefined), settingsConnect = _c[0], setSettingsConnect = _c[1];
    var _d = (0, react_1.useState)(true), isLoading = _d[0], setIsLoading = _d[1];
    var escapedReturnURL = encodeURIComponent(window.location.href);
    var disconnectHandler = (0, react_1.useCallback)(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // confirm disconnect
                    if (!window.confirm((0, i18n_1.__)('Are you sure you want to disconnect?', 'static-snap'))) {
                        return [2 /*return*/];
                    }
                    setIsLoading(true);
                    return [4 /*yield*/, (0, api_fetch_1.default)({
                            method: 'DELETE',
                            path: '/static-snap/v1/connect',
                        })];
                case 1:
                    response = (_a.sent());
                    setIsLoading(false);
                    setConnected(response.disconnected ? undefined : true);
                    setSettingsConnect(undefined);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    // get code in searchQuery
    (0, react_1.useEffect)(function () {
        var searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('code')) {
            setCode(searchParams.get('code'));
        }
    }, []);
    (0, react_1.useEffect)(function () {
        var connect = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response, searchParams, hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_fetch_1.default)({
                            data: {
                                code: code,
                            },
                            method: 'POST',
                            path: '/static-snap/v1/connect',
                        })];
                    case 1:
                        response = (_a.sent());
                        console.log(response);
                        setConnected(response.connected);
                        searchParams = new URLSearchParams(window.location.search);
                        searchParams.delete('code');
                        hash = window.location.hash;
                        window.history.replaceState({}, document.title, "".concat(window.location.pathname, "?").concat(searchParams).concat(hash));
                        setCode(false);
                        return [2 /*return*/];
                }
            });
        }); };
        if (code) {
            connect();
        }
    }, [code]);
    (0, react_1.useEffect)(function () {
        var getSettings = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_fetch_1.default)({
                            path: '/static-snap/v1/settings',
                        })];
                    case 1:
                        response = (_a.sent());
                        setSettingsConnect(response.connect);
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        getSettings();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { elevation: 0, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: (0, i18n_1.__)('Connect with StaticSnap', 'static-snap') }), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [connected === true && ((0, jsx_runtime_1.jsx)(Alert_1.default, { icon: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: 'material-symbols:check' }), severity: "success", children: (0, i18n_1.__)('Connected successfully!', 'static-snap') })), connected === false && ((0, jsx_runtime_1.jsx)(Alert_1.default, { icon: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: 'material-symbols:error' }), severity: "error", children: (0, i18n_1.__)('Failed to connect. Please try again.', 'static-snap') })), (0, jsx_runtime_1.jsx)("p", { children: (0, i18n_1.__)('Transform your dynamic WordPress site into a high-performance, secure static website with Static Snap! By connecting your site to our platform, you can seamlessly integrate with GitHub, enabling automatic deployments to top-tier hosting services like Vercel, Cloudflare Pages, Amazon S3, Netlify, AWS Amplify, Heroku, GitLab Pages, and Bitbucket Cloud. Experience the ease of deploying front-end frameworks and optimize your project’s reach and flexibility. Join Static Snap today and start deploying smarter!						', 'static-snap') }), settingsConnect && settingsConnect.installation_id ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", sx: { mb: 5 }, children: (0, i18n_1.__)('You are connected', 'static-snap') }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { variant: "contained", size: "large", color: "error", onClick: disconnectHandler, loading: isLoading, children: (0, i18n_1.__)('Disconnect', 'static-snap') })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", sx: { mb: 5 }, children: (0, i18n_1.__)("Clicking on connect will redirect you to Static Snap's website to connect your WordPress site to the platform.", 'static-snap') }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: !!code, disabled: connected === true || isLoading, variant: "contained", size: "large", href: "".concat(constants_1.STATIC_SNAP_URL, "/connect-website?website=").concat(escapedReturnURL), children: (0, i18n_1.__)('Connect', 'static-snap') })] }))] })] }));
};
exports.default = ConnectIndex;
//# sourceMappingURL=index.js.map