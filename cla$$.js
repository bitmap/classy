var cla$$ = (function($$) {
  'use strict';

  var classList = document.documentElement.classList;

  function findClass(className) {
    return new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g')
  }

  $$.contains = function(el, className) {
    if (classList) return el.classList.contains(className);
    return (findClass(className)).test(el.className);
  };

  $$.add = function(el, className) {
    if (classList) el.classList.add(className);
    else if (!$$.contains(el, className)) el.className += ' ' + className;
  };

  $$.remove = function(el, className) {
    if (!el || !el.className) return;
    if (classList) el.classList.remove(className);
    el.className = el.className.replace(findClass(className), '');
  };

  $$.toggle = function(el, className) {
    if (classList) el.classList.toggle(className);
    else if ($$.contains(el, className)) $$.remove(el, className);
    else $$.add(el, className);
  };

  return $$;

})(cla$$ || {});
