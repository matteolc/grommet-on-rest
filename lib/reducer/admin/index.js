'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getResources = undefined;

var _redux = require('redux');

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

var _record = require('./record');

var _record2 = _interopRequireDefault(_record);

var _references = require('./references');

var _references2 = _interopRequireDefault(_references);

var _saving = require('./saving');

var _saving2 = _interopRequireDefault(_saving);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    resources: _resource2.default,
    loading: _loading2.default,
    notification: _notification2.default,
    record: _record2.default,
    references: _references2.default,
    saving: _saving2.default,
    ui: _ui2.default
});
var getResources = exports.getResources = function getResources(state) {
    return (0, _resource.getResources)(state.resources);
};