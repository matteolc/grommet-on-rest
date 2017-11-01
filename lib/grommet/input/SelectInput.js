'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectInput = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _lodash = require('lodash');

var _Select = require('grommet/components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input component for a select box, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <SelectField> component
 */
var SelectInput = exports.SelectInput = function (_Component) {
    (0, _inherits3.default)(SelectInput, _Component);

    function SelectInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SelectInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchText: '',
            option: {
                value: _this.props.input.value,
                label: ''
            }
        }, _this.handleChange = function (pseudoEvent) {
            _this.props.input.onChange(pseudoEvent.option.value);
            _this.setState({ option: pseudoEvent.option });
        }, _this.onSearch = function (event) {
            var value = event.target.value;
            if (value !== _this.state.searchText) {
                _this.setState({ searchText: event.target.value });
            }
        }, _this.addAllowEmpty = function (choices) {
            if (_this.props.allowEmpty) {
                var emptyChoice = {
                    value: "",
                    sub: "",
                    label: "all"
                };
                return [].concat((0, _toConsumableArray3.default)(emptyChoice), (0, _toConsumableArray3.default)(choices));
            }

            return choices;
        }, _this.renderMenuItem = function (choice) {
            var _this$props = _this.props,
                optionText = _this$props.optionText,
                optionValue = _this$props.optionValue,
                translate = _this$props.translate,
                translateChoice = _this$props.translateChoice;

            var choiceName = _react2.default.isValidElement(optionText) // eslint-disable-line no-nested-ternary
            ? _react2.default.cloneElement(optionText, { record: choice }) : typeof optionText === 'function' ? optionText(choice) : (0, _lodash.get)(choice, optionText);
            return {
                value: (0, _lodash.get)(choice, optionValue),
                sub: (0, _lodash.get)(choice, optionValue),
                label: choiceName
            };
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    /*
     * Using state to bypass a redux-form comparison but which prevents re-rendering
     * @see https://github.com/erikras/redux-form/issues/2456
     */


    (0, _createClass3.default)(SelectInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var option = (0, _extends3.default)({}, this.state.option);
            if (nextProps.input.value !== this.props.input.value) {
                option.value = nextProps.input.value;
                this.setState({ option: option });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                choices = _props.choices,
                elStyle = _props.elStyle,
                isRequired = _props.isRequired,
                label = _props.label,
                meta = _props.meta,
                options = _props.options,
                resource = _props.resource,
                source = _props.source,
                allowEmpty = _props.allowEmpty;

            if (typeof meta === 'undefined') {
                throw new Error("The SelectInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details.");
            }
            var touched = meta.touched,
                error = meta.error;

            var selectOptions = this.addAllowEmpty(choices.map(this.renderMenuItem).filter(function (option) {
                return (0, _lodash.startsWith)(option.value, _this2.state.searchText);
            }));

            console.log(options);
            return _react2.default.createElement(
                _FormField2.default,
                {
                    htmlFor: source,
                    error: touched && error,
                    label: _react2.default.createElement(_FieldTitle2.default, {
                        label: label,
                        source: source,
                        resource: resource
                    })
                },
                _react2.default.createElement(_Select2.default, (0, _extends3.default)({
                    id: source,
                    onSearch: this.onSearch,
                    onChange: this.handleChange,
                    value: this.state.option,
                    style: elStyle,
                    placeHolder: allowEmpty ? 'None' : 'Select..',
                    options: selectOptions,
                    multiple: options.multiple
                }, options))
            );
        }
    }]);
    return SelectInput;
}(_react.Component);

SelectInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    allowEmpty: _propTypes2.default.bool.isRequired,
    choices: _propTypes2.default.arrayOf(_propTypes2.default.object),
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    options: _propTypes2.default.object,
    optionText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.element]).isRequired,
    optionValue: _propTypes2.default.string.isRequired,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired,
    translateChoice: _propTypes2.default.bool.isRequired
};

SelectInput.defaultProps = {
    addField: true,
    allowEmpty: false,
    choices: [],
    options: {
        multiple: false
    },
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true
};

exports.default = (0, _translate2.default)(SelectInput);