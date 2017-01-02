(function define(root, factory) {
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
})(this, function cla$$y() {
  'use strict';

  function Classy(selector) {
    var classes = [];
    var isObject = false;

    if (!(this instanceof Classy)) {
      return new Classy(selector);
    }
    if (typeof selector === 'string') {
      this.nodes = document.querySelectorAll(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      isObject = true;
      this.nodes = selector;
    }

    var nodes = this.nodes;

    function each(callback, scope) {
      for (var i = 0; i < nodes.length; i++) {
        callback.call(scope, nodes[i]);
      }
    }

    function contains(className) {
      var hasClass = false;

      each(elem => {
        if (elem.classList.contains(className)) {
          hasClass = true;
        }
      });
      return hasClass;
    }

    function add() {
      classes = arguments;
      each(elem => {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.add(classes[i]);
        }
      });
    }

    function remove() {
      classes = arguments;
      each(elem => {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.remove(classes[i]);
        }
      });
    }

    function toggle() {
      classes = arguments;
      each(elem => {
        for (var i = 0; i < classes.length; i++) {
          elem.classList.toggle(classes[i]);
        }
      });
    }

    function on(ev, fn, cap) {
      if (!isObject) {
        each(elem => {
          elem.addEventListener(ev, fn, cap);
        });
      } else {
        nodes.addEventListener(ev, fn, cap);
      }
    }

    // API
    this.each = each;
    this.contains = contains;
    this.add = add;
    this.remove = remove;
    this.toggle = toggle;
    this.on = on;
  }

  return Classy;
});
