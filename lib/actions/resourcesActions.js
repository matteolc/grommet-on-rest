'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DECLARE_RESOURCES = exports.DECLARE_RESOURCES = 'AOR/DECLARE_RESOURCES';

var declareResources = exports.declareResources = function declareResources(resources) {
    return {
        type: DECLARE_RESOURCES,
        payload: resources
    };
};