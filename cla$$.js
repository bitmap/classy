var cla$$ = (function($_$) {
  'use strict';

  var classList = document.documentElement.classList;

  function returnClass(string) {
    return new RegExp('(^| )' + string + '( |$)', 'gi');
  }

  function $_$(selector) {
    if (!(this instanceof $_$)) {
      return new $_$(selector);
    }
    if(typeof selector === 'string') {
      this.el = document.querySelector(selector);
    }
    if (typeof selector === 'object' && document.body.nodeType) {
      this.el = selector;
    }
  }

  $_$.prototype = {
    contains: function(stuff) {
      if (classList) return this.el.classList.contains(stuff);
      return returnClass(stuff).test(this.el.className);
    },
    add: function(stuff) {
      if (classList) this.el.classList.add(stuff);
      else if (!this.contains(stuff)) this.el.className += ' ' + stuff;
    },
    remove: function(stuff) {
      if (classList) this.el.classList.remove(stuff);
      this.el.className = this.el.className.replace(returnClass(stuff), '');
    },
    toggle: function(stuff) {
      if (classList) this.el.classList.toggle(stuff);
      else if (this.contains(stuff)) this.remove(stuff);
      else this.add(stuff);
    }
  };

  return $_$;

})(cla$$ || {});
