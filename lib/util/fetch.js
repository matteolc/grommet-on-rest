'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flattenObject = exports.queryParameters = exports.fetchJson = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _HttpError = require('./HttpError');

var _HttpError2 = _interopRequireDefault(_HttpError);

var _queryString = require('query-string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchJson = exports.fetchJson = function fetchJson(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var requestHeaders = options.headers || new Headers({
        Accept: 'application/json'
    });
    if (!requestHeaders.has('Content-Type') && !(options && options.body && options.body instanceof FormData)) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set('Authorization', options.user.token);
    }

    return fetch(url, (0, _extends3.default)({}, options, { headers: requestHeaders })).then(function (response) {
        return response.text().then(function (text) {
            return {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                body: text
            };
        });
    }).then(function (_ref) {
        var status = _ref.status,
            statusText = _ref.statusText,
            headers = _ref.headers,
            body = _ref.body;

        var json = void 0;
        try {
            json = JSON.parse(body);
        } catch (e) {
            // not json, no big deal
        }
        if (status < 200 || status >= 300) {
            return Promise.reject(new _HttpError2.default(json && json.message || statusText, status, json));
        }
        return { status: status, headers: headers, body: body, json: json };
    });
};

var queryParameters = exports.queryParameters = _queryString.stringify;

var isValidObject = function isValidObject(value) {
    if (!value) {
        return false;
    }

    var isArray = Array.isArray(value);
    var isBuffer = Buffer.isBuffer(value);
    var isObject = Object.prototype.toString.call(value) === '[object Object]';
    var hasKeys = !!Object.keys(value).length;

    return !isArray && !isBuffer && isObject && hasKeys;
};

var flattenObject = exports.flattenObject = function flattenObject(value) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (isValidObject(value)) {
        return Object.assign.apply(Object, [{}].concat((0, _toConsumableArray3.default)(Object.keys(value).map(function (key) {
            return flattenObject(value[key], path.concat([key]));
        }))));
    } else {
        return path.length ? (0, _defineProperty3.default)({}, path.join('.'), value) : value;
    }
};