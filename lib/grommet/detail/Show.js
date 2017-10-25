'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Show = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ShowActions = require('./ShowActions');

var _ShowActions2 = _interopRequireDefault(_ShowActions);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _withPermissionsFilteredChildren = require('../../auth/withPermissionsFilteredChildren');

var _withPermissionsFilteredChildren2 = _interopRequireDefault(_withPermissionsFilteredChildren);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Meter = require('grommet/components/Meter');

var _Meter2 = _interopRequireDefault(_Meter);

var _Notification = require('grommet/components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Value = require('grommet/components/Value');

var _Value2 = _interopRequireDefault(_Value);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _LinkPrevious = require('grommet/components/icons/base/LinkPrevious');

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _More = require('grommet/components/icons/base/More');

var _More2 = _interopRequireDefault(_More);

var _actions = require('../../actions');

var _Delete = require('../delete/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Show = exports.Show = function (_Component) {
    (0, _inherits3.default)(Show, _Component);

    function Show() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Show);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Show.__proto__ || Object.getPrototypeOf(Show)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showSidebarWhenSingle: false,
            deleteLayerOpen: false
        }, _this.toggleSidebar = function () {
            _this.setState({
                showSidebarWhenSingle: !_this.state.showSidebarWhenSingle
            });
        }, _this.toggleDeleteLayer = function () {
            _this.setState({
                deleteLayerOpen: !_this.state.deleteLayerOpen
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Show, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateData();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.id !== nextProps.id || nextProps.version !== this.props.version) {
                this.updateData(nextProps.resource, nextProps.id, nextProps.include);
            }
        }
    }, {
        key: 'getBasePath',
        value: function getBasePath() {
            var location = this.props.location;

            return location.pathname.split('/').slice(0, -2).join('/');
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
                _props$actions = _props.actions,
                actions = _props$actions === undefined ? _react2.default.createElement(_ShowActions2.default, null) : _props$actions,
                title = _props.title,
                children = _props.children,
                id = _props.id,
                data = _props.data,
                isLoading = _props.isLoading,
                resource = _props.resource,
                hasList = _props.hasList,
                hasDelete = _props.hasDelete,
                hasEdit = _props.hasEdit,
                hasCreate = _props.hasCreate,
                translate = _props.translate,
                sidebarResponsive = _props.sidebarResponsive,
                responsive = _props.responsive;


            if (!children) return null;
            var basePath = this.getBasePath();

            var resourceName = translate('resources.' + resource + '.name', {
                smart_count: 1,
                _: _inflection2.default.humanize(_inflection2.default.singularize(resource))
            });
            var defaultTitle = translate('aor.page.show', {
                name: '' + resourceName,
                id: id,
                data: data
            });
            var titleElement = data ? _react2.default.createElement(_Title2.default, { title: title, record: data, defaultTitle: defaultTitle }) : '';

            return _react2.default.createElement(
                _Split2.default,
                {
                    flex: 'left',
                    separator: true,
                    priority: this.state.showSidebarWhenSingle ? 'right' : 'left',
                    onResponsive: sidebarResponsive },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _Header2.default,
                        {
                            pad: {
                                horizontal: "small",
                                vertical: "medium"
                            },
                            justify: 'between',
                            size: 'large',
                            colorIndex: 'light-2' },
                        _react2.default.createElement(
                            _Box2.default,
                            {
                                direction: 'row',
                                align: 'center',
                                pad: {
                                    between: 'small'
                                },
                                responsive: false },
                            hasList && _react2.default.createElement(
                                _Anchor2.default,
                                { path: basePath },
                                _react2.default.createElement(_LinkPrevious2.default, { a11yTitle: 'Back to List' })
                            ),
                            _react2.default.createElement(
                                _Heading2.default,
                                { margin: 'none', strong: true, style: { marginLeft: hasList ? 0 : 12 } },
                                titleElement
                            )
                        ),
                        responsive === 'single' && _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_More2.default, null), onClick: this.toggleSidebar })
                    ),
                    _react2.default.createElement(
                        _Article2.default,
                        {
                            primary: true,
                            pad: 'medium',
                            align: 'start',
                            style: {
                                opacity: isLoading ? 0.8 : 1
                            } },
                        data && _react2.default.cloneElement(children, {
                            resource: resource,
                            basePath: basePath,
                            record: data,
                            translate: translate
                        })
                    )
                ),
                _react2.default.createElement(
                    _Sidebar2.default,
                    { size: 'medium', colorIndex: 'light-2' },
                    actions && _react2.default.cloneElement(actions, {
                        basePath: basePath,
                        data: data,
                        hasList: hasList,
                        hasDelete: hasDelete,
                        hasCreate: hasCreate,
                        hasEdit: hasEdit,
                        resource: resource,
                        onClose: responsive === 'single' && this.toggleSidebar,
                        onDelete: this.toggleDeleteLayer,
                        title: titleElement
                    }),
                    hasDelete && this.state.deleteLayerOpen && _react2.default.createElement(_Delete2.default, (0, _extends3.default)({}, this.props, { onClose: this.toggleDeleteLayer }))
                )
            );
        }
    }]);
    return Show;
}(_react.Component);

Show.propTypes = {
    actions: _propTypes2.default.element,
    children: _propTypes2.default.element,
    crudGetOne: _propTypes2.default.func.isRequired,
    data: _propTypes2.default.object,
    hasList: _propTypes2.default.bool,
    hasDelete: _propTypes2.default.bool,
    hasEdit: _propTypes2.default.bool,
    id: _propTypes2.default.string.isRequired,
    isLoading: _propTypes2.default.bool.isRequired,
    location: _propTypes2.default.object.isRequired,
    match: _propTypes2.default.object.isRequired,
    resource: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.any,
    translate: _propTypes2.default.func,
    version: _propTypes2.default.number.isRequired
};

Show.defaultProps = {
    include: ''
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource] ? state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)] : null,
        isLoading: state.admin.loading > 0,
        version: state.admin.ui.viewVersion,
        responsive: state.admin.ui.sidebarResponsive
    };
}

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, { crudGetOne: _dataActions.crudGetOne, sidebarResponsive: _actions.sidebarResponsive }), _translate2.default, _withPermissionsFilteredChildren2.default);

exports.default = enhance(Show);