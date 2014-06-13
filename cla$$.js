// cla$$ - minimal classList API
// dolla dolla bill y'all

var cla$$ = (function (dolla) {
  'use strict';

  var classList = document.documentElement.classList;

  dolla.contains = function(el, className) {
    if (classList) return el.classList.contains(className);
    else return (new RegExp('(^|\\s)' + className + '(\\s|$)')).test(el.className);
  };

  dolla.add = function(el, className) {
    if (!dolla.contains(el, className))
      if (classList) el.classList.add(className);
      else el.className = el.className ? (el.className + ' ' + className) : className;
  };

  dolla.remove = function(el, className) {
    if (classList) el.classList.remove(className);
    else
      if (!el || !el.className) return;
      el.className = el.className
        .replace(className + ' ', '')
        .replace(' ' + className, '')
        .replace(className, '');
  };

  dolla.toggle = function(el, className) {
    if (classList) el.classList.toggle(className);
    else
      if (dolla.contains(el, className)) dolla.remove(el, className);
      else dolla.add(el, className);
  };

  return dolla;

})(cla$$ || {});
