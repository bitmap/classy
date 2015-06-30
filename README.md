# cla$$.js

**cla$$.js** is a DOM class manipulation and event micro-library for oldies that don't support `classList` or `addEventListener` APIs. It's nice and tight, just over 1k minified.

It supports `add`, `remove`, `toggle`, `contains`, and `on` methods.

cla$$ also uses `document.querySelector` to query the DOM. You can return and element using the `.element` method.

```js
cla$$('.pizza').element === document.querySelector('.pizza') // true
```

You can add, remove or toggle class names:
```js
cla$$('.pizza').add('cheese');
cla$$('.pizza').remove('olives');
cla$$('.pizza').toggle('pepperoni');
```

&& you can do cool stuff like

```js
var pizza = cla$$('.pizza');

pizza.on('click', function() {
  if (pizza.contains('sausage')) {
    pizza.add('pineapple');
  }
});
```

Try it with all your favorite toppings.

Dolla dolla bill y'all.
