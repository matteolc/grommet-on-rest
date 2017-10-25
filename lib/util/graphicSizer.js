'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

/*
 * Adjust Meter and Chart sizes so they fit better.
 */

var GraphicSizer = function () {
  function GraphicSizer(container, listener) {
    (0, _classCallCheck3.default)(this, GraphicSizer);

    this._onResize = this._onResize.bind(this);
    this.layout = this.layout.bind(this);

    this.state = {
      container: container,
      listener: listener,
      timer: null,
      size: 'small'
    };

    window.addEventListener('resize', this._onResize);
    this.layout();
  }

  (0, _createClass3.default)(GraphicSizer, [{
    key: 'reset',
    value: function reset(container) {
      this.state.container = container;
      this.layout();
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearTimeout(this.state.timer);
      window.removeEventListener('resize', this._onResize);
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      // debounce
      clearTimeout(this.state.timer);
      this.state.timer = setTimeout(this.layout, 50);
    }
  }, {
    key: 'layout',
    value: function layout() {
      var container = this.state.container;

      if (container) {
        var rect = container.getBoundingClientRect();
        var children = container.childNodes;
        var graphicWidth = rect.width / children.length;
        var size = void 0;
        if (rect.width > 600) {
          if (graphicWidth > 300) {
            size = 'medium';
          } else if (graphicWidth > 200) {
            size = 'small';
          } else {
            size = 'xsmall';
          }
        } else {
          size = 'small';
        }
        if (size !== this.state.size) {
          this.state.size = size;
          this.state.listener(size);
        }
      }
    }
  }]);
  return GraphicSizer;
}();

exports.default = GraphicSizer;
;
module.exports = exports['default'];