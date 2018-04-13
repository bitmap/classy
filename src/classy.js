class Money {
  constructor(selector) {
    this.selector = selector
    this.isObject = false;
    this.nodes = null;

    if (typeof this.selector === 'string') {
      this.nodes = document.querySelectorAll(this.selector);
    }
    if (typeof this.selector === 'object' && this.selector.nodeType || this.selector === window) {
      this.isObject = true;
      this.nodes = selector;
    }

    this.classes = [];
    this.each = this.each.bind(this)
    this.contains = this.contains.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.toggle = this.toggle.bind(this)
    this.on = this.on.bind(this)
  }

  each(callback, scope) {
    for (let i = 0; i < this.nodes.length; i += 1) {
      callback.call(scope, this.nodes[i]);
    }
  }

  contains(className) {
    let hasClass = false;

    this.each(elem => {
      if (elem.classList.contains(className)) {
        hasClass = true;
      }
    });
    return hasClass;
  }

  add() {
    this.classes = arguments;
    this.each(elem => {
      for (let i = 0; i < this.classes.length; i += 1) {
        elem.classList.add(this.classes[i]);
      }
    });
  }

  remove() {
    this.classes = arguments;
    this.each(elem => {
      for (let i = 0; i < this.classes.length; i += 1) {
        elem.classList.remove(this.classes[i]);
      }
    });
  }

  toggle() {
    this.classes = arguments;
    this.each(elem => {
      for (let i = 0; i < this.classes.length; i += 1) {
        elem.classList.toggle(this.classes[i]);
      }
    });
  }

  on(ev, fn, cap) {
    if (!this.isObject) {
      this.each(elem => {
        elem.addEventListener(ev, fn, cap);
      });
    } else {
      this.nodes.addEventListener(ev, fn, cap);
    }
  }
}

export default $ => new Money($)
