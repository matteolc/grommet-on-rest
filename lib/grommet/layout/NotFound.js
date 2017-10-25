'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _LinkPrevious = require('grommet/components/icons/base/LinkPrevious');

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _Robot = require('grommet/components/icons/base/Robot');

var _Robot2 = _interopRequireDefault(_Robot);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    containerMobile: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-3em'
    },
    icon: {
        width: '9em',
        height: '9em'
    },
    message: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        margin: '0 1em'
    },
    toolbar: {
        textAlign: 'center',
        marginTop: '2em'
    }
};

function goBack() {
    history.go(-1);
}

var NotFound = function NotFound(_ref) {
    var theme = _ref.theme,
        translate = _ref.translate;
    return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
            'div',
            { style: styles.message },
            _react2.default.createElement(_Robot2.default, { style: styles.icon }),
            _react2.default.createElement(
                'h1',
                null,
                translate('aor.page.not_found')
            ),
            _react2.default.createElement(
                'div',
                null,
                translate('aor.message.not_found'),
                '.'
            )
        ),
        _react2.default.createElement(
            'div',
            { style: styles.toolbar },
            _react2.default.createElement(_Button2.default, {
                primary: true,
                label: translate('aor.action.back'),
                icon: _react2.default.createElement(_LinkPrevious2.default, null),
                onClick: function onClick() {
                    return goBack();
                }
            })
        )
    );
};

NotFound.propTypes = {
    translate: _propTypes2.default.func.isRequired
};

var enhance = (0, _compose2.default)(_translate2.default);

exports.default = enhance(NotFound);
module.exports = exports['default'];