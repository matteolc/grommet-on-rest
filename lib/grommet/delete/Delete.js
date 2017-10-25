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

var _reactRedux = require('react-redux');

var _LayerForm = require('grommet-templates/components/LayerForm');

var _LayerForm2 = _interopRequireDefault(_LayerForm);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _dataActions = require('../../actions/dataActions');

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Delete = function (_Component) {
    (0, _inherits3.default)(Delete, _Component);

    function Delete() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Delete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Delete.__proto__ || Object.getPrototypeOf(Delete)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (event) {
            event.preventDefault();
            _this.props.crudDelete(_this.props.resource, _this.props.id, _this.props.data, _this.getBasePath());
            //this.props.onClose();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Delete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.crudGetOne(this.props.resource, this.props.id, this.getBasePath());
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.id !== nextProps.id) {
                this.props.crudGetOne(nextProps.resource, nextProps.id, this.getBasePath());
            }
        }
    }, {
        key: 'getBasePath',
        value: function getBasePath() {
            var location = this.props.location;

            return location.pathname.split('/').slice(0, -2).join('/');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                id = _props.id,
                data = _props.data,
                isLoading = _props.isLoading,
                resource = _props.resource,
                translate = _props.translate,
                onClose = _props.onClose;

            var basePath = this.getBasePath();

            var resourceName = translate('resources.' + resource + '.name', {
                smart_count: 1,
                _: _inflection2.default.humanize(_inflection2.default.singularize(resource))
            });
            var defaultTitle = translate('aor.page.delete', {
                name: '' + resourceName,
                id: id,
                data: data
            });
            var titleElement = data ? _react2.default.createElement(_Title2.default, { title: title, record: data, defaultTitle: defaultTitle }) : '';

            return _react2.default.createElement(
                _LayerForm2.default,
                {
                    title: 'Remove',
                    submitLabel: 'Yes, remove',
                    compact: true,
                    onClose: onClose,
                    onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'fieldset',
                    null,
                    _react2.default.createElement(
                        _Paragraph2.default,
                        null,
                        'Are you sure you want to remove ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            titleElement
                        ),
                        '?'
                    )
                )
            );
        }
    }]);
    return Delete;
}(_react.Component);

Delete.propTypes = {
    title: _propTypes2.default.any,
    id: _propTypes2.default.string.isRequired,
    resource: _propTypes2.default.string.isRequired,
    location: _propTypes2.default.object.isRequired,
    match: _propTypes2.default.object.isRequired,
    history: _propTypes2.default.object.isRequired,
    data: _propTypes2.default.object,
    isLoading: _propTypes2.default.bool.isRequired,
    crudGetOne: _propTypes2.default.func.isRequired,
    crudDelete: _propTypes2.default.func.isRequired,
    translate: _propTypes2.default.func.isRequired
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)],
        isLoading: state.admin.loading > 0
    };
}

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, {
    crudGetOne: _dataActions.crudGetOne,
    crudDelete: _dataActions.crudDelete
}), _translate2.default);

exports.default = enhance(Delete);
module.exports = exports['default'];