# new-money 💰

**New Money** is a basic DOM manipulation and event micro-library utilizing the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) APIs.

## Install
```sh
npm install new-money
```

## Usage
**New Money** is basically a wrapper around `querySelectorAll`. The method `nodes` returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) if you supply a `string` to `$()`, which is kind of like an array, but also not. You can also pass objects, such as `window`, `document.body` or an element (for example, `event.target` inside and click event listener), but these will be iterated over like an `array`.

```js
import $ from 'new-money'

const nodes = test.nodes // return NodeList
const node1 = nodes[0] // return object
const node2 = document.querySelectorAll('.test')[0] // return object
const $node = $(node1) // returns array of objects

const testNode1 = node1 === node2 // returns true
const testNode2 = node1 === $node.nodes[0] // returns true
```

## API
It supports `add`, `remove`, `toggle`, `contains` methods for manipulating and checking classNames, an `each` method for iterating over the nodes, and `on` method for adding event listeners to each node.

You can `add`, `remove` or `toggle` class names:
```js
const pizzas = $('.pizza')

pizzas.add('sauce', 'cheese')

if (pizzas.contains('vegan')) {
  pizzas
    .add('olives')
    .remove('cheese')
} else {
  pizzas.toggle('pepperoni')
}
```

Add event listeners with `on`

```js
pizzas.on('click', event => {
  const pizza = $(event.target)

  if (pizza.contains('ham')) {
    pizza.add('pineapple')
  }
})
```

You can query elements inside the array using the built in `.each` method if you need to use anything from the native DOM. It's just using `forEach` under the hood.

```js
pizzas.each((pizza, i) => {
  pizza.id = `pizza${i}`
});

```

Try it with all your favorite toppings. 🍕

## License
[MIT](https://github.com/bitmap/new-money/blob/master/LICENSE)

