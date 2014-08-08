var cla$$ = (function() {
  'use strict';
  var classList = document.documentElement.classList,
      get_class = function(string) {return new RegExp('(^| )' + string + '( |$)', 'g');}

  function RAD(selector) {
    if (!(this instanceof RAD)) {
      return new RAD(selector);
    }
    if (typeof selector === 'string') {
      this.el = document.querySelector(selector);
    }
    if (typeof selector === 'object' && selector.nodeType || selector === window) {
      this.el = selector;
    }
  }

  RAD.prototype = {
    contains: function(_class) {
      if (classList) return this.el.classList.contains(_class);
      return get_class(_class).test(this.el.className);
    },
    add: function(_class) {
      if (classList) this.el.classList.add(_class);
      else if (!this.contains(_class)) this.el.className += ' ' + _class;
    },
    remove: function(_class) {
      if (classList) this.el.classList.remove(_class);
      this.el.className = this.el.className.replace(get_class(_class), ' ');
    },
    toggle: function(_class) {
      if (classList) this.el.classList.toggle(_class);
      else if (this.contains(_class)) this.remove(_class);
      else this.add(_class);
    },
    event: function(ev, fn, cap) {
      if (this.el.addEventListener) return this.el.addEventListener(ev, fn, !!cap);
      else this.el.attachEvent('on' + ev, fn);
    }
  };

  return RAD;
})();
