"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var LinearProgress_1 = tslib_1.__importDefault(require("@mui/material/LinearProgress"));
var Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
function LinearProgressWithLabel(props) {
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
            alignItems: 'center',
            display: 'flex',
        }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    mr: 1,
                    width: '100%',
                }, children: (0, jsx_runtime_1.jsx)(LinearProgress_1.default, tslib_1.__assign({ variant: "determinate" }, props)) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { minWidth: 35 }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", color: "inherit", children: "".concat(Math.round(props.value), "%") }) })] }));
}
exports.default = LinearProgressWithLabel;
//# sourceMappingURL=linear-progress-with-label.js.map