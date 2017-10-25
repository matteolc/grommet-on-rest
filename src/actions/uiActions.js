export const REFRESH_VIEW = 'AOR/REFRESH_VIEW';

export const refreshView = () => ({
    type: REFRESH_VIEW,
});

export const NAV_ACTIVATE = 'NAV_ACTIVATE';

export function navActivate(active) {
    return { type: NAV_ACTIVATE, payload: active };
}

export const NAV_ENABLE = 'NAV_ENABLE';

export function navEnable(enabled) {
    return { type: NAV_ENABLE, payload: enabled };
}

export const NAV_RESPONSIVE = 'NAV_RESPONSIVE';

export function navResponsive(responsive) {
    return { type: NAV_RESPONSIVE, payload: responsive };
}

export const SIDEBAR_RESPONSIVE = 'SIDEBAR_RESPONSIVE';

export function sidebarResponsive(responsive) {
    return { type: SIDEBAR_RESPONSIVE, payload: responsive };
}