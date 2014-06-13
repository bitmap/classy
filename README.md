# cla$$.js

**cla$$.js** lets you manipulate class names. For oldies that don't
support `element.classList`, and for homies that don't want any nonsense.
It's nice and tight, just over 600 bytes minified.

Basic syntax is like

```js
cla$$.add(elment, class)
cla$$.remove(elment, class)
cla$$.toggle(elment, class)
cla$$.contains(elment, class)
```

&& you can do cool stuff like

```js
element.addEventListener('click', function() {
  if (cla$$.contains(element, 'pizza'))
    cla$$.add(element, 'pepperoni')
});
```

Try it with all your favorite toppings.

dolla dolla bill y'all.
