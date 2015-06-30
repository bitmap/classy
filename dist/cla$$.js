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
      this.el = document.querySelector(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      this.el = selector;
    }
  }

  function find(string) {
      return new RegExp('(^| )' + string + '( |$)', 'g');
  }

  document.documentElement.classList

    ? Classy.prototype = {
      contains: function(selector) {
        return this.el.classList.contains(selector);
      },
      add: function(selector) {
        this.el.classList.add(selector);
      },
      remove: function(selector) {
        this.el.classList.remove(selector);
      },
      toggle: function(selector) {
        this.el.classList.toggle(selector);
      }
    }

    : Classy.prototype = {
      contains: function(selector) {
        return find(selector).test(this.el.className);
      },
      add: function(selector) {
        if (!this.contains(selector)) this.el.className += ' ' + selector;
      },
      remove: function(selector) {
        this.el.className = this.el.className.replace(find(selector), ' ');
      },
      toggle: function(selector) {
        if (this.contains(selector)) this.remove(selector);
        else this.add(selector);
      }
    }
  ;

  Classy.prototype.on = function(ev, fn, cap) {
    window.addEventListener
      ? this.el.addEventListener(ev, fn, !!cap)
      : this.el.attachEvent('on' + ev, fn);
  };

  return Classy;
});
