'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var INITIALIZE_FORM = exports.INITIALIZE_FORM = 'AOR/INITIALIZE_FORM';

var initializeForm = exports.initializeForm = function initializeForm(initialValues) {
    return {
        type: INITIALIZE_FORM,
        payload: initialValues
    };
};