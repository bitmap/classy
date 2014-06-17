var cla$$ = (function($$) {
  'use strict';

  var classList = document.documentElement.classList;

  $$.contains = function(el, className) {
    if (classList) return el.classList.contains(className);
    return (new RegExp('(^|\\s)*' + className + '(\\s|$)*')).test(el.className);
  };

  $$.add = function(el, className) {
    if (classList) el.classList.add(className);
    else if (!$$.contains(el, className)) el.className += ' ' + className;
  };

  $$.remove = function(el, className) {
    if (classList) el.classList.remove(className);
    else if (!el || !el.className) return;
    el.className = el.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
  };

  $$.toggle = function(el, className) {
    if (classList) el.classList.toggle(className);
    else if ($$.contains(el, className)) $$.remove(el, className);
    else $$.add(el, className);
  };

  return $$;

})(cla$$ || {});
