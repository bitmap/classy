class Money {
  constructor(selector) {
    this.nodes = null

    if (typeof selector === 'string') {
      this.nodes = document.querySelectorAll(selector);
    }
    if (typeof selector === 'object') {
      this.nodes = [selector];
    }
  }
}

Money.prototype.each = function(fn, scope) {
  return this.nodes.forEach((node, index) => fn.call(scope, node, index))
}

Money.prototype.contains = function(className) {
  let contains = false;

  this.each(node => {
    if (node.classList.contains(className)) {
      contains = true;
    }
  });

  return contains;
}

Money.prototype.add = function(...args) {
  this.each(node => {
    for (let i = 0; i < args.length; i += 1) {
      node.classList.add(args[i]);
    }
  });
  return this
}

Money.prototype.remove = function(...args) {
  this.each(node => {
    for (let i = 0; i < args.length; i += 1) {
      node.classList.remove(args[i]);
    }
  });
  return this
}

Money.prototype.toggle = function(...args) {
  this.each(node => {
    for (let i = 0; i < args.length; i += 1) {
      node.classList.toggle(args[i]);
    }
  });
  return this
}

Money.prototype.on = function(ev, fn, cap) {
  this.each(node => {
    node.addEventListener(ev, fn, cap);
  });
}

export default $ => new Money($);
