'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navActivate = navActivate;
exports.navEnable = navEnable;
exports.navResponsive = navResponsive;
exports.sidebarResponsive = sidebarResponsive;
var REFRESH_VIEW = exports.REFRESH_VIEW = 'AOR/REFRESH_VIEW';

var refreshView = exports.refreshView = function refreshView() {
    return {
        type: REFRESH_VIEW
    };
};

var NAV_ACTIVATE = exports.NAV_ACTIVATE = 'NAV_ACTIVATE';

function navActivate(active) {
    return { type: NAV_ACTIVATE, payload: active };
}

var NAV_ENABLE = exports.NAV_ENABLE = 'NAV_ENABLE';

function navEnable(enabled) {
    return { type: NAV_ENABLE, payload: enabled };
}

var NAV_RESPONSIVE = exports.NAV_RESPONSIVE = 'NAV_RESPONSIVE';

function navResponsive(responsive) {
    return { type: NAV_RESPONSIVE, payload: responsive };
}

var SIDEBAR_RESPONSIVE = exports.SIDEBAR_RESPONSIVE = 'SIDEBAR_RESPONSIVE';

function sidebarResponsive(responsive) {
    return { type: SIDEBAR_RESPONSIVE, payload: responsive };
}