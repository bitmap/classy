(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory;
  } else {
    // Browser (root is window)
    root.cla$$y = factory();
  }
})(this, function() {
  'use strict';

  function Classy(selector) {
    var object = false;

    if (!(this instanceof Classy)) {
      return new Classy(selector);
    }
    if (typeof selector === 'string') {
      this.nodes = document.querySelectorAll(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      object = true;
      this.nodes = selector;
    }

    this.each = function(callback, scope) {
      var nodes = this.nodes;

      if (nodes.length !== undefined) {
        for (var i = 0; i < nodes.length; i++) {
          callback.call(scope, nodes[i]);
        }
      } else {
        callback.call(scope, nodes);
      }
    };
    this.contains = function(className) {
      var contains = false;

      this.each(function(el) {
        if (el.classList.contains(className)) {
          contains = true;
        }
      });
      return contains;
    };

    this.add = function() {
      var classes = arguments;
      this.each(function(elem) {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.add(classes[i]);
        }
      });
    };

    this.remove = function(className) {
      var classes = arguments;
      this.each(function(elem) {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.remove(classes[i]);
        }
      });
    };

    this.toggle = function(className) {
      var classes = arguments;
      this.each(function(elem) {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.toggle(classes[i]);
        }
      });
    };

    this.on = function(ev, fn, cap) {
      if (!object) {
        this.each(function(elem) {
          elem.addEventListener(ev, fn, cap);
        });
      } else {
        this.nodes.addEventListener(ev, fn, cap);
      }
    };
  }

  return Classy;
});
