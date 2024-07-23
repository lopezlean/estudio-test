"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AppBar_1 = tslib_1.__importDefault(require("@mui/material/AppBar"));
var Toolbar_1 = tslib_1.__importDefault(require("@mui/material/Toolbar"));
var Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
var Drawer_1 = tslib_1.__importDefault(require("@mui/material/Drawer"));
var IconButton_1 = tslib_1.__importDefault(require("@mui/material/IconButton"));
var Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
var react_router_dom_1 = require("react-router-dom");
var icon_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/icon/icon"));
var logo_full_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/logo-full"));
var scrollbar_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/scrollbar"));
var sidebar_1 = tslib_1.__importDefault(require("@staticsnap/dashboard/components/sidebar"));
var config_1 = require("@staticsnap/dashboard/components/sidebar/config");
var use_nav_data_1 = require("@staticsnap/dashboard/hooks/use-nav-data");
var use_responsive_1 = require("@staticsnap/dashboard/hooks/use-responsive");
function Nav(_a) {
    var openNav = _a.openNav, onCloseNav = _a.onCloseNav, onOpenNav = _a.onOpenNav;
    var pathname = (0, react_router_dom_1.useLocation)();
    var mdUp = (0, use_responsive_1.useResponsive)('up', 'md');
    var navData = (0, use_nav_data_1.useNavData)();
    (0, react_1.useEffect)(function () {
        if (openNav) {
            onCloseNav();
        }
        var staticSnapMenu = document.getElementById('toplevel_page_static-snap');
        if (!staticSnapMenu) {
            return;
        }
        var staticSnapMenuItems = staticSnapMenu === null || staticSnapMenu === void 0 ? void 0 : staticSnapMenu.getElementsByTagName('li');
        if (!staticSnapMenuItems) {
            return;
        }
        // remove all current classes from menu items
        for (var i = 0; i < staticSnapMenuItems.length; i++) {
            var staticSnapMenuItem = staticSnapMenuItems[i];
            staticSnapMenuItem.classList.remove('current');
        }
        for (var i = 0; i < staticSnapMenuItems.length; i++) {
            var staticSnapMenuItem = staticSnapMenuItems[i];
            var staticSnapMenuItemLink = staticSnapMenuItem.getElementsByTagName('a')[0];
            if (!staticSnapMenuItemLink) {
                continue;
            }
            var staticSnapMenuItemLinkHref = staticSnapMenuItemLink.getAttribute('href');
            if (!staticSnapMenuItemLinkHref) {
                continue;
            }
            // get hash part
            var hashIndex = staticSnapMenuItemLinkHref.indexOf('#');
            var menuPath = '/';
            if (hashIndex !== -1) {
                menuPath = staticSnapMenuItemLinkHref.slice(hashIndex + 1, staticSnapMenuItemLinkHref.length);
            }
            if (pathname.pathname === menuPath) {
                staticSnapMenuItem.classList.add('current');
                return;
            }
            var defaultMenuPath = '/environments';
            if (menuPath === defaultMenuPath && pathname.pathname !== '/') {
                staticSnapMenuItem.classList.add('current');
                return;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    var renderContent = ((0, jsx_runtime_1.jsxs)(scrollbar_1.default, { sx: {
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column',
                height: 1,
            },
            height: 1,
        }, children: [(0, jsx_runtime_1.jsx)(logo_full_1.default, { sx: {
                    mb: 1,
                    ml: 4,
                    mt: 5,
                    svg: {
                        maxWidth: { md: config_1.SIDEBAR_WIDTH - 50, xs: 150 },
                    },
                } }), (0, jsx_runtime_1.jsx)(sidebar_1.default, { data: navData }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } })] }));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: mdUp ? ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "nav", sx: {
                backgroundColor: 'background.default',
                flexShrink: {
                    lg: 0,
                },
                minHeight: {
                    lg: 'calc(100vh - 32px)',
                },
                width: {
                    lg: config_1.SIDEBAR_WIDTH,
                },
            }, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                    height: 1,
                    position: 'relative',
                    width: config_1.SIDEBAR_WIDTH,
                }, children: renderContent }) })) : ((0, jsx_runtime_1.jsx)(AppBar_1.default, { position: "sticky", color: "default", children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { sx: {
                    height: 64,
                }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onOpenNav, sx: {
                            color: 'text.primary',
                            ml: 1,
                        }, children: (0, jsx_runtime_1.jsx)(icon_1.default, { icon: 'heroicons-outline:menu-alt-2' }) }), (0, jsx_runtime_1.jsx)(Drawer_1.default, { open: openNav, onClose: onCloseNav, PaperProps: {
                            sx: {
                                maxWidth: '20rem',
                                pt: 6,
                                width: '80vw',
                            },
                        }, children: renderContent })] }) })) }));
}
exports.default = Nav;
//# sourceMappingURL=nav.js.map