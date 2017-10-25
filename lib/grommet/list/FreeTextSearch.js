'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FreeTextSearch = undefined;

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

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _Search = require('grommet/components/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FreeTextSearch = exports.FreeTextSearch = function (_Component) {
    (0, _inherits3.default)(FreeTextSearch, _Component);

    function FreeTextSearch(props) {
        (0, _classCallCheck3.default)(this, FreeTextSearch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FreeTextSearch.__proto__ || Object.getPrototypeOf(FreeTextSearch)).call(this, props));

        _this.setFreeTextSearch = function (event) {
            var searchText = event.target.value;
            if (!(0, _lodash2.default)(searchText, _this.searchText)) {
                searchText === '' ? _this.props.hideFilter('q') : _this.props.setFreeTextSearch(searchText);
                _this.searchText = searchText;
            }
        };

        _this.searchText = _this.props.searchText;
        return _this;
    }

    (0, _createClass3.default)(FreeTextSearch, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.searchText = nextProps.searchText;
        }
    }, {
        key: 'render',
        value: function render() {
            var searchText = this.props.searchText;

            return _react2.default.createElement(_Search2.default, {
                inline: true,
                fill: true,
                size: 'medium',
                placeHolder: 'Search',
                value: searchText,
                onDOMChange: this.setFreeTextSearch });
        }
    }]);
    return FreeTextSearch;
}(_react.Component);

FreeTextSearch.propTypes = {
    searchText: _propTypes2.default.string,
    setFreeTextSearch: _propTypes2.default.func
};

exports.default = FreeTextSearch;