'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getResources = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _actions = require('../../../actions');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
    var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var dataReducer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _data2.default;
    var listReducer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _list2.default;

    if (action.type === _actions.DECLARE_RESOURCES) {
        var _newState = action.payload.reduce(function (acc, resource) {
            return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, resource.name, {
                props: resource,
                data: dataReducer(resource.name)(undefined, action),
                list: listReducer(resource.name)(undefined, action)
            }));
        }, {});
        return _newState;
    }

    if (!action.meta || !action.meta.resource) {
        return previousState;
    }

    var resources = Object.keys(previousState);
    var newState = resources.reduce(function (acc, resource) {
        return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, resource, action.meta.resource === resource ? {
            props: previousState[resource].props,
            data: dataReducer(resource)(previousState[resource].data, action),
            list: listReducer(resource)(previousState[resource].list, action)
        } : {
            props: previousState[resource].props,
            data: previousState[resource].data,
            list: previousState[resource].list
        }));
    }, {});

    return newState;
};

var getResources = exports.getResources = function getResources(state) {
    return Object.keys(state).map(function (key) {
        return state[key].props;
    });
};