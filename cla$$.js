var cla$$ = (function($$) {
  'use strict';

  var classList = document.documentElement.classList;

  function returnClass(string) {
    return new RegExp('(^|\\s)*' + string + '(\\s|$)*', 'g');
  }

  function $$(selector) {
    if (!(this instanceof $$)) {
      return new $$(selector);
    }

    if(typeof selector === 'string') {
      this.el = document.querySelector(selector);
    }

    if (typeof selector === 'object' && document.body.nodeType) {
      this.el = selector;
    }
  }

  $$.prototype = {
    contains: function(stuff) {
      if (classList) return this.el.classList.contains(stuff);
      return returnClass(stuff).test(this.el.className);
    },

    add: function(stuff) {
      if (classList) this.el.classList.add(stuff);
      else if (!this.contains(stuff)) this.el.className += ' ' + stuff;
    },

    remove: function(stuff) {
      if (!this.el || !this.el.className) return;
      if (classList) this.el.classList.remove(stuff);
      this.el.className = this.el.className.replace(returnClass(stuff), '');
    },

    toggle: function(stuff) {
      if (classList) this.el.classList.toggle(stuff);
      else if (this.contains(stuff)) this.remove(stuff);
      else this.add(stuff);
    }
  };

  return $$;

})(cla$$ || {});
