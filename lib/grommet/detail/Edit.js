'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Edit = undefined;

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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _dataActions = require('../../actions/dataActions');

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _withPermissionsFilteredChildren = require('../../auth/withPermissionsFilteredChildren');

var _withPermissionsFilteredChildren2 = _interopRequireDefault(_withPermissionsFilteredChildren);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Form = require('grommet/components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _FormFields = require('grommet/components/FormFields');

var _FormFields2 = _interopRequireDefault(_FormFields);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Select = require('grommet/components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _NumberInput = require('grommet/components/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Add = require('grommet/components/icons/base/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Edit = require('grommet/components/icons/base/Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = exports.Edit = function (_Component) {
    (0, _inherits3.default)(Edit, _Component);

    function Edit(props) {
        (0, _classCallCheck3.default)(this, Edit);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.save = function (record, redirect) {
            _this.props.crudUpdate(_this.props.resource, _this.props.id, record, _this.props.data, _this.getBasePath(), redirect);
        };

        _this.state = {
            key: 0,
            record: props.data
        };
        _this.previousKey = 0;
        return _this;
    }

    (0, _createClass3.default)(Edit, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateData();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.data !== nextProps.data) {
                this.setState({ record: nextProps.data }); // FIXME: erases user entry when fetch response arrives late
                if (this.fullRefresh) {
                    this.fullRefresh = false;
                    this.setState({
                        key: this.state.key + 1
                    });
                }
            }
            if (this.props.id !== nextProps.id || nextProps.version !== this.props.version) {
                this.updateData(nextProps.resource, nextProps.id, nextProps.include);
            }
        }
    }, {
        key: 'getBasePath',
        value: function getBasePath() {
            var location = this.props.location;

            return location.pathname.split('/').slice(0, -1).join('/');
        }
    }, {
        key: 'defaultRedirectRoute',
        value: function defaultRedirectRoute() {
            var hasShow = this.props.hasShow;

            if (hasShow) return 'show';
            return 'list';
        }
    }, {
        key: 'updateData',
        value: function updateData() {
            var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.resource;
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.id;
            var include = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.include;

            this.props.crudGetOne(resource, id, include, this.getBasePath());
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                hasDelete = _props.hasDelete,
                hasShow = _props.hasShow,
                hasList = _props.hasList,
                id = _props.id,
                isLoading = _props.isLoading,
                resource = _props.resource,
                title = _props.title,
                translate = _props.translate;


            if (!children) return null;

            var basePath = this.getBasePath();

            var resourceName = translate('resources.' + resource + '.name', {
                smart_count: 1,
                _: _inflection2.default.humanize(_inflection2.default.singularize(resource))
            });
            var defaultTitle = translate('aor.page.edit', {
                name: '' + resourceName,
                id: id,
                data: data
            });
            var titleElement = data ? _react2.default.createElement(_Title2.default, { title: title, record: data, defaultTitle: defaultTitle }) : '';

            return _react2.default.createElement(
                _Article2.default,
                {
                    align: 'center',
                    pad: {
                        horizontal: 'medium'
                    },
                    style: {
                        opacity: isLoading ? 0.8 : 1
                    },
                    primary: true },
                _react2.default.createElement(
                    _Header2.default,
                    { size: 'large', justify: 'between', pad: 'none' },
                    _react2.default.createElement(
                        _Heading2.default,
                        { tag: 'h2', margin: 'none', strong: true },
                        titleElement
                    ),
                    _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_Close2.default, null), path: basePath + '/' + id + '/show', a11yTitle: 'Close Form' })
                ),
                data && _react2.default.cloneElement(children, {
                    save: this.save,
                    resource: resource,
                    basePath: basePath,
                    record: data,
                    translate: translate,
                    redirect: typeof children.props.redirect === 'undefined' ? this.defaultRedirectRoute() : children.props.redirect
                })
            );
        }
    }]);
    return Edit;
}(_react.Component);

Edit.propTypes = {
    children: _propTypes2.default.node,
    crudGetOne: _propTypes2.default.func.isRequired,
    crudUpdate: _propTypes2.default.func.isRequired,
    data: _propTypes2.default.object,
    hasDelete: _propTypes2.default.bool,
    hasShow: _propTypes2.default.bool,
    hasList: _propTypes2.default.bool,
    id: _propTypes2.default.string.isRequired,
    isLoading: _propTypes2.default.bool.isRequired,
    location: _propTypes2.default.object.isRequired,
    match: _propTypes2.default.object.isRequired,
    resource: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.any,
    translate: _propTypes2.default.func,
    version: _propTypes2.default.number.isRequired
};

Edit.defaultProps = {
    include: ''
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource] ? state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)] : null,
        isLoading: state.admin.loading > 0,
        version: state.admin.ui.viewVersion
    };
}

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, {
    crudGetOne: _dataActions.crudGetOne,
    crudUpdate: _dataActions.crudUpdate
}), _translate2.default, _withPermissionsFilteredChildren2.default);

exports.default = enhance(Edit);