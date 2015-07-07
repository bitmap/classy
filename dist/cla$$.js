(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD
    define(factory);
  } else if (typeof exports === 'object') {
    //Node, CommonJS
    module.exports = factory;
  } else {
    //Browser (root is window)
    root.cla$$ = factory();
  }
})(this, function() {
  'use strict';

  var SPACES = '[ \f\n\r\t\v]';
  var BEGIN = '(^|' + SPACES + ')';
  var END = '(' + SPACES + '|$)';

  function Classy(selector) {
    if (!(this instanceof Classy)) {
      return new Classy(selector);
    }
    if (typeof selector === 'string') {
      this.el = document.querySelector(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      this.el = selector;
    }
  }

  function find(string) {
      return new RegExp(BEGIN + string + END);
  }

  Classy.prototype = document.documentElement.classList
    ? {
      contains: function() {
        return this.el.classList.contains(arguments[0]);
      },
      add: function() {
        this.el.classList.add.apply(this.el.classList, arguments);
      },
      remove: function() {
        this.el.classList.remove.apply(this.el.classList, arguments);
      },
      toggle: function() {
        this.el.classList.toggle(arguments[0]);
      }
    }

    : {
      contains: function() {
        return find(arguments[0]).test(this.el.className);
      },
      add: function() {
        for (var i=0, len = arguments.length; i < len; i++) {
          if (!this.contains(arguments[i])) this.el.className += (this.el.className ? ' ': '') + arguments[i];
        }
      },
      remove: function() {
        for (var i=0, len = arguments.length; i < len; i++) {
          this.el.className = this.el.className
            .replace(find(arguments[i]), ' ')
            .replace(/^\s+/, '')
            .replace(/\s+$/, '');
        }
      },
      toggle: function() {
          this.contains(arguments[0]) ? this.remove(arguments[0]) : this.add(arguments[0]);
      }
    }
  ;

  Classy.prototype.on = function(ev, fn, cap) {
  if (!window.addEventListener) {
    return this.el.attachEvent(ev, fn);
  }

  this.el.addEventListener(ev, fn, cap);
};

  return Classy;
});
