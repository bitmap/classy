(function(root, factory) {
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

  function Classy(selector) {
    if (!(this instanceof Classy)) {
      return new Classy(selector);
    }
    if (typeof selector === 'string') {
      this.el = document.querySelectorAll(selector);
      this.el.each = Array.prototype.forEach;
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      this.el = selector;
    }
  }

  Classy.prototype = {
    contains: function(selector) {
      for (var i = 0; i < this.el.length; i++) {
        return this.el[i].classList.contains(selector);
      }
    },

    add: function(selector) {
      this.el.each(function(elem) {
        elem.classList.add(selector);
      });
    },

    remove: function(selector) {
      this.el.each(function(elem) {
        elem.classList.remove(selector);
      });
    },

    toggle: function(selector) {
      this.el.each(function(elem) {
        elem.classList.toggle(selector);
      });
    },

    on: function(ev, fn, cap) {
      this.el.each(function(elem) {
        elem.addEventListener(ev, fn, cap);
      });
    }
  };

  return Classy;
});
