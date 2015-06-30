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

  function Classy(selector) {
    if (!(this instanceof Classy)) {
      return new Classy(selector);
    }
    if (typeof selector === 'string') {
      this.element = document.querySelector(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      this.element = selector;
    }
  }

  function find(string) {
      return new RegExp('(^| )' + string + '( |$)', 'g');
  }

  document.documentElement.classList

    ? Classy.prototype = {
      contains: function(selector) {
        return this.element.classList.contains(selector);
      },
      add: function(selector) {
        this.element.classList.add(selector);
      },
      remove: function(selector) {
        this.element.classList.remove(selector);
      },
      toggle: function(selector) {
        this.element.classList.toggle(selector);
      }
    }

    : Classy.prototype = {
      contains: function(selector) {
        return find(selector).test(this.element.className);
      },
      add: function(selector) {
        if (!this.contains(selector)) this.element.className += ' ' + selector;
      },
      remove: function(selector) {
        this.element.className = this.element.className.replace(find(selector), ' ');
      },
      toggle: function(selector) {
        if (this.contains(selector)) this.remove(selector);
        else this.add(selector);
      }
    }
  ;

  Classy.prototype.on = function(ev, fn, cap) {
    window.addEventListener
      ? this.element.addEventListener(ev, fn, !!cap)
      : this.element.attachEvent('on' + ev, fn);
  };

  return Classy;
});
