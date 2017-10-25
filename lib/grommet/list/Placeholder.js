'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _FormattedMessage = require('grommet/components/FormattedMessage');

var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Placeholder = function (_Component) {
  (0, _inherits3.default)(Placeholder, _Component);

  function Placeholder() {
    (0, _classCallCheck3.default)(this, Placeholder);
    return (0, _possibleConstructorReturn3.default)(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
  }

  (0, _createClass3.default)(Placeholder, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          addControl = _props.addControl,
          emptyMessage = _props.emptyMessage,
          filteredTotal = _props.filteredTotal,
          unfilteredTotal = _props.unfilteredTotal,
          isLoading = _props.isLoading;


      return _react2.default.createElement(
        _Box2.default,
        { justify: 'center', align: 'center',
          pad: {
            horizontal: 'medium', vertical: 'large', between: 'medium'
          } },
        isLoading ? _react2.default.createElement(_Spinning2.default, null) : unfilteredTotal === 0 ? _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { className: 'secondary' },
            emptyMessage
          ),
          addControl
        ) : filteredTotal === 0 ? _react2.default.createElement(
          'span',
          { className: 'secondary' },
          _react2.default.createElement(_FormattedMessage2.default, { id: 'No matches', defaultMessage: 'No matches' })
        ) : null
      );
    }
  }]);
  return Placeholder;
}(_react.Component);

exports.default = Placeholder;
;

Placeholder.propTypes = {
  addControl: _propTypes2.default.element,
  emptyMessage: _propTypes2.default.string,
  filteredTotal: _propTypes2.default.number,
  unfilteredTotal: _propTypes2.default.number
};

Placeholder.defaultProps = {
  emptyMessage: 'None'
};
module.exports = exports['default'];