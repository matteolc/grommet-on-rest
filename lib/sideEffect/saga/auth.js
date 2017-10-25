'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _reactRouterRedux = require('react-router-redux');

var _notificationActions = require('../../actions/notificationActions');

var _authActions = require('../../actions/authActions');

var _fetchActions = require('../../actions/fetchActions');

var _auth = require('../../auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (authClient) {
    var _marked = /*#__PURE__*/_regenerator2.default.mark(handleAuth);

    if (!authClient) return function () {
        return null;
    };
    function handleAuth(action) {
        var type, payload, error, meta, authPayload, errorMessage, _authPayload, _errorMessage;

        return _regenerator2.default.wrap(function handleAuth$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        type = action.type, payload = action.payload, error = action.error, meta = action.meta;
                        _context.t0 = type;
                        _context.next = _context.t0 === _authActions.USER_SIGNUP ? 4 : _context.t0 === _authActions.USER_LOGIN ? 24 : _context.t0 === _authActions.USER_CHECK ? 44 : _context.t0 === _authActions.USER_LOGOUT ? 56 : _context.t0 === _fetchActions.FETCH_ERROR ? 61 : 75;
                        break;

                    case 4:
                        _context.prev = 4;
                        _context.next = 7;
                        return (0, _effects.put)({ type: _authActions.USER_SIGNUP_LOADING });

                    case 7:
                        _context.next = 9;
                        return (0, _effects.call)(authClient, _auth.AUTH_SIGNUP, payload);

                    case 9:
                        authPayload = _context.sent;
                        _context.next = 12;
                        return (0, _effects.put)({
                            type: _authActions.USER_SIGNUP_SUCCESS,
                            payload: authPayload
                        });

                    case 12:
                        _context.next = 14;
                        return (0, _effects.put)((0, _reactRouterRedux.push)(meta.pathName || '/'));

                    case 14:
                        _context.next = 23;
                        break;

                    case 16:
                        _context.prev = 16;
                        _context.t1 = _context['catch'](4);
                        _context.next = 20;
                        return (0, _effects.put)({
                            type: _authActions.USER_SIGNUP_FAILURE,
                            error: _context.t1,
                            meta: { auth: true }
                        });

                    case 20:
                        errorMessage = typeof _context.t1 === 'string' ? _context.t1 : typeof _context.t1 === 'undefined' || !_context.t1.message ? 'aor.auth.sign_up_error' : _context.t1.message;
                        _context.next = 23;
                        return (0, _effects.put)((0, _notificationActions.showNotification)(errorMessage, 'warning'));

                    case 23:
                        return _context.abrupt('break', 75);

                    case 24:
                        _context.prev = 24;
                        _context.next = 27;
                        return (0, _effects.put)({ type: _authActions.USER_LOGIN_LOADING });

                    case 27:
                        _context.next = 29;
                        return (0, _effects.call)(authClient, _auth.AUTH_LOGIN, payload);

                    case 29:
                        _authPayload = _context.sent;
                        _context.next = 32;
                        return (0, _effects.put)({
                            type: _authActions.USER_LOGIN_SUCCESS,
                            payload: _authPayload
                        });

                    case 32:
                        _context.next = 34;
                        return (0, _effects.put)((0, _reactRouterRedux.push)(meta.pathName || '/'));

                    case 34:
                        _context.next = 43;
                        break;

                    case 36:
                        _context.prev = 36;
                        _context.t2 = _context['catch'](24);
                        _context.next = 40;
                        return (0, _effects.put)({
                            type: _authActions.USER_LOGIN_FAILURE,
                            error: _context.t2,
                            meta: { auth: true }
                        });

                    case 40:
                        _errorMessage = typeof _context.t2 === 'string' ? _context.t2 : typeof _context.t2 === 'undefined' || !_context.t2.message ? 'aor.auth.sign_in_error' : _context.t2.message;
                        _context.next = 43;
                        return (0, _effects.put)((0, _notificationActions.showNotification)(_errorMessage, 'warning'));

                    case 43:
                        return _context.abrupt('break', 75);

                    case 44:
                        _context.prev = 44;
                        _context.next = 47;
                        return (0, _effects.call)(authClient, _auth.AUTH_CHECK, payload);

                    case 47:
                        _context.next = 55;
                        break;

                    case 49:
                        _context.prev = 49;
                        _context.t3 = _context['catch'](44);
                        _context.next = 53;
                        return (0, _effects.call)(authClient, _auth.AUTH_LOGOUT);

                    case 53:
                        _context.next = 55;
                        return (0, _effects.put)((0, _reactRouterRedux.replace)({
                            pathname: _context.t3 && _context.t3.redirectTo || '/login',
                            state: { nextPathname: meta.pathName }
                        }));

                    case 55:
                        return _context.abrupt('break', 75);

                    case 56:
                        _context.next = 58;
                        return (0, _effects.call)(authClient, _auth.AUTH_LOGOUT);

                    case 58:
                        _context.next = 60;
                        return (0, _effects.put)((0, _reactRouterRedux.push)('/login'));

                    case 60:
                        return _context.abrupt('break', 75);

                    case 61:
                        _context.prev = 61;
                        _context.next = 64;
                        return (0, _effects.call)(authClient, _auth.AUTH_ERROR, error);

                    case 64:
                        _context.next = 74;
                        break;

                    case 66:
                        _context.prev = 66;
                        _context.t4 = _context['catch'](61);
                        _context.next = 70;
                        return (0, _effects.call)(authClient, _auth.AUTH_LOGOUT);

                    case 70:
                        _context.next = 72;
                        return (0, _effects.put)((0, _reactRouterRedux.push)('/login'));

                    case 72:
                        _context.next = 74;
                        return (0, _effects.put)((0, _notificationActions.hideNotification)());

                    case 74:
                        return _context.abrupt('break', 75);

                    case 75:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked, this, [[4, 16], [24, 36], [44, 49], [61, 66]]);
    }
    return (/*#__PURE__*/_regenerator2.default.mark(function watchAuthActions() {
            return _regenerator2.default.wrap(function watchAuthActions$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return (0, _effects.all)([(0, _effects.takeEvery)(function (action) {
                                return action.meta && action.meta.auth;
                            }, handleAuth), (0, _effects.takeEvery)(_fetchActions.FETCH_ERROR, handleAuth)]);

                        case 2:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, watchAuthActions, this);
        })
    );
};

module.exports = exports['default'];