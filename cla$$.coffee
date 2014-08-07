cla$$ = (($_$) ->
  
  'use strict'

  classList = document.documentElement.classList

  returnClass = (string) -> 
    new RegExp('(^|\\s)*' + string + '(\\s|$)*', 'g')

  $_$ = (selector) ->
    if !(this instanceof $_$) 
      return new $_$(selector);

    if typeof selector == 'string'
      this.el = document.querySelector(selector);

    if typeof selector == 'object' && document.body.nodeType
      this.el = selector;

  $_$.prototype = {
    contains: (stuff) -> 
      this.el.classList.contains stuff if classList
      returnClass(stuff).test(this.el.className)

    add: (stuff) -> 
      this.el.classList.add stuff if classList
      this.el.className += " " + stuff unless @contains(stuff)

    remove: (stuff) -> 
      this.el.classList.remove stuff if classList
      this.el.className = this.el.className.replace(returnClass(stuff), '')

    toggle: (stuff) -> 
      if classList
        this.el.classList.toggle stuff 
      else if @contains(stuff)
        @remove(stuff)
      else 
        @add(stuff)
  }

  $_$;
  
)(cla$$ or {})