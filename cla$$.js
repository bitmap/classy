var cla$$ = (function($$) {
  'use strict';

  var classList = document.documentElement.classList;

  function returnClass(string) {
    return new RegExp('(^|\\s)*' + string + '(\\s|$)*', 'g');
  }

  $$ = {
    contains: function(_el, _class) {
      if (classList) return _el.classList.contains(_class);
      return returnClass(_class).test(_el.className);
    },

    add: function(_el, _class) {
      if (classList) _el.classList.add(_class);
      if (!this.contains(_el, _class)) _el.className += ' ' + _class;
    },

    remove: function(_el, _class) {
      if (classList) _el.classList.remove(_class);
      _el.className = _el.className.replace(returnClass(_class), '');
    },

    toggle: function(_el, _class) {
      if (classList) _el.classList.toggle(_class);
      if (this.contains(_el, _class)) this.remove(_el, _class);
      else this.add(_el, _class);
    }
  };

  return $$;

})(cla$$ || {});
