'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Money = function () {
  function Money(selector) {
    _classCallCheck(this, Money);

    this.selector = selector;
    this.isObject = false;
    this.nodes = null;

    if (typeof this.selector === 'string') {
      this.nodes = document.querySelectorAll(this.selector);
    }
    if (_typeof(this.selector) === 'object' && this.selector.nodeType || this.selector === window) {
      this.isObject = true;
      this.nodes = selector;
    }

    this.classes = [];
    this.each = this.each.bind(this);
    this.contains = this.contains.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
    this.on = this.on.bind(this);
  }

  _createClass(Money, [{
    key: 'each',
    value: function each(callback, scope) {
      for (var i = 0; i < this.nodes.length; i += 1) {
        callback.call(scope, this.nodes[i]);
      }
    }
  }, {
    key: 'contains',
    value: function contains(className) {
      var hasClass = false;

      this.each(function (elem) {
        if (elem.classList.contains(className)) {
          hasClass = true;
        }
      });
      return hasClass;
    }
  }, {
    key: 'add',
    value: function add() {
      var _this = this;

      this.classes = arguments;
      this.each(function (elem) {
        for (var i = 0; i < _this.classes.length; i += 1) {
          elem.classList.add(_this.classes[i]);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this2 = this;

      this.classes = arguments;
      this.each(function (elem) {
        for (var i = 0; i < _this2.classes.length; i += 1) {
          elem.classList.remove(_this2.classes[i]);
        }
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var _this3 = this;

      this.classes = arguments;
      this.each(function (elem) {
        for (var i = 0; i < _this3.classes.length; i += 1) {
          elem.classList.toggle(_this3.classes[i]);
        }
      });
    }
  }, {
    key: 'on',
    value: function on(ev, fn, cap) {
      if (!this.isObject) {
        this.each(function (elem) {
          elem.addEventListener(ev, fn, cap);
        });
      } else {
        this.nodes.addEventListener(ev, fn, cap);
      }
    }
  }]);

  return Money;
}();

exports.default = function ($) {
  return new Money($);
};