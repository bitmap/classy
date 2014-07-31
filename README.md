# cla$$.js

**cla$$.js** lets you manipulate class names. For oldies that don't
support `element.classList`, and for homies that don't want any nonsense.
It's nice and tight, just over 500 bytes minified.

Basic syntax is like

```js
cla$$.add(element, class)
cla$$.remove(element, class)
cla$$.toggle(element, class)
cla$$.contains(element, class)
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
