var cla$$ = (function($_$) {
  'use strict';

  var classList = document.documentElement.classList;

  function returnClass(string) {
    return new RegExp('(^| )' + string + '( |$)', 'g');
  }

  function $_$(selector) {
    if (!(this instanceof $_$)) {
      return new $_$(selector);
    }
    if (typeof selector === 'string') {
      this.elem = document.querySelector(selector);
    }
    if (typeof selector === 'object' && selector.nodeType) {
      this.elem = selector;
    }
  }

  $_$.prototype = {
    contains: function(Class) {
      if (classList) return this.elem.classList.contains(Class);
      return returnClass(Class).test(this.elem.className);
    },
    add: function(Class) {
      if (classList) this.elem.classList.add(Class);
      else if (!this.contains(Class)) this.elem.className += ' ' + Class;
    },
    remove: function(Class) {
      if (classList) this.elem.classList.remove(Class);
      this.elem.className = this.elem.className.replace(returnClass(Class), ' ');
    },
    toggle: function(Class) {
      if (classList) this.elem.classList.toggle(Class);
      else if (this.contains(Class)) this.remove(Class);
      else this.add(Class);
    }
  };

  return $_$;

})(cla$$ || {});
