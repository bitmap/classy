# cla$$y.js

**cla$$y.js** is a DOM class manipulation and event micro-library utilizing the `classList` and `addEventListener` APIs. It's nice and tight, just under 1K minified.

cla$$y uses `document.querySelectorAll` to query the DOM. You can return an array of elements using the `.nodes` method.

```js
cla$$y('.pizza').nodes[0] === document.querySelectorAll('.pizza')[0] // returns true
```

It supports `add`, `remove`, `toggle`, `contains`, and `on` methods.

You can add, remove or toggle class names:
```js
cla$$y('.pizza').each(function() {
  cla$$y('.pizza').add('sauce','cheese');
});
cla$$y('.pizza').remove('olives');
cla$$y('.pizza').toggle('pepperoni');
```

&& you can do cool stuff like

```js
var pizza = cla$$y('.pizza');

pizza.on('click', function() {
  if (pizza.contains('ham')) {
    pizza.add('pineapple');
  }
});
```

You can query elements inside the array using the built in `.each` method. If you need to use anything from the native DOM, just query selectors like

```js
cla$$y('.pizza').each(function(pizzas) {
  pizzas.innerHTML = 'Mmm';
});
```

Try it with all your favorite toppings.

Dolla dolla bill y'all.
