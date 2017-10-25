import {
    NAV_ACTIVATE, 
    NAV_ENABLE,
    NAV_RESPONSIVE, 
    SIDEBAR_RESPONSIVE,
    REFRESH_VIEW,
} from '../../actions';

const defaultState = {
    navActive: true, // start with nav navActive
    navEnabled: true, // start with nav disabled
    responsive: 'multiple',
    sidebarResponsive: 'multiple',
    viewVersion: 0,
};

export default (previousState = defaultState, { type, payload }) => {
    switch (type) {
        case NAV_ACTIVATE:
        return {
                ...previousState,
                navActive: payload,
                activateOnMultiple: null,
            };
        case NAV_ENABLE:
            return { ...previousState, navEnabled: payload };
        case NAV_RESPONSIVE:
            const result = { responsive: payload };
            if (payload === 'single' && previousState.navActive) {
                result.navActive = false;
                result.activateOnMultiple = true;
            } else if (payload === 'multiple' && previousState.activateOnMultiple) {
                result.navActive = true;
            }                 
            return {
                ...previousState,
                ...result,
            };
        case SIDEBAR_RESPONSIVE:
            return {...previousState, sidebarResponsive: payload}
        case REFRESH_VIEW:
            return {
                ...previousState,
                viewVersion: previousState.viewVersion + 1,
            };
        default:
            return previousState;
    }
};
