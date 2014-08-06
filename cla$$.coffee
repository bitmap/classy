cla$$ = (($$) ->
  
  'use strict'

  classList = document.documentElement.classList

  returnClass = (string) -> 
    new RegExp('(^|\\s)*' + string + '(\\s|$)*', 'g')

  $$ = {
    contains: (elem, stuff) -> 
      elem.classList.contains stuff if classList
      returnClass(stuff).test(elem.className)

    add: (elem, stuff) -> 
      elem.classList.add stuff if classList
      elem.className += " " + stuff unless @contains(elem, stuff)

    remove: (elem, stuff) -> 
      elem.classList.remove stuff if classList
      elem.className = elem.className.replace(returnClass(stuff), '')

    toggle: (elem, stuff) -> 
      if classList
        elem.classList.toggle stuff 
      else if @contains(elem, stuff)
        @remove(elem, stuff)
      else 
        @add(elem, stuff)
  }

  $$;
  
)(cla$$ or {})