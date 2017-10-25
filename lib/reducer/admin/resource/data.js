'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRecord = exports.addRecordsFactory = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _fetchActions = require('../../../actions/fetchActions');

var _types = require('../../../rest/types');

var _getFetchedAt = require('../../../util/getFetchedAt');

var _getFetchedAt2 = _interopRequireDefault(_getFetchedAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add new records to the pool, and remove outdated ones.
 *
 * This is the equivalent of a stale-while-revalidate caching strategy:
 * The cached data is displayed before fetching, and stale data is removed
 * only once fresh data is fetched.
 */
var addRecordsFactory = exports.addRecordsFactory = function addRecordsFactory(getFetchedAt) {
    return function () {
        var newRecords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var oldRecords = arguments[1];

        var newFetchedAt = getFetchedAt(newRecords.map(function (_ref) {
            var id = _ref.id;
            return id;
        }), oldRecords.fetchedAt);

        var newRecordsById = newRecords.reduce(function (acc, record) {
            return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, record.id, record));
        }, {});

        var records = Object.keys(newFetchedAt).reduce(function (acc, id) {
            return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, id, newRecordsById[id] || oldRecords[id]));
        }, {});

        Object.defineProperty(records, 'fetchedAt', {
            value: newFetchedAt
        }); // non enumerable by default

        return records;
    };
};

var addRecords = addRecordsFactory(_getFetchedAt2.default);

var initialState = {};
Object.defineProperty(initialState, 'fetchedAt', { value: {} }); // non enumerable by default

exports.default = function (resource) {
    return function () {
        var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var _ref2 = arguments[1];
        var payload = _ref2.payload,
            meta = _ref2.meta;

        if (!meta || meta.resource !== resource) {
            return previousState;
        }
        if (!meta.fetchResponse || meta.fetchStatus !== _fetchActions.FETCH_END) {
            return previousState;
        }
        switch (meta.fetchResponse) {
            case _types.GET_LIST:
            case _types.GET_MANY:
            case _types.GET_MANY_REFERENCE:
            case _types.GET_MORE:
                return addRecords(payload.data, previousState);
            case _types.GET_ONE:
            case _types.UPDATE:
            case _types.CREATE:
                return addRecords([payload.data], previousState);
            default:
                return previousState;
        }
    };
};

var getRecord = exports.getRecord = function getRecord(state, id) {
    return state[id];
};