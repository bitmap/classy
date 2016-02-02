var should  = chai.should();
var div = cla$$('#testElement').el;

function pizzaTest() {
  cla$$('#testElement').add('ADD_1', 'ADD_2');
  cla$$('#testElement').remove('REMOVE_1', 'REMOVE_2');
  cla$$('#testElement').toggle('TOGGLE_ON');
  cla$$('#testElement').toggle('TOGGLE_OFF');

  if (cla$$('#testElement').contains('CONTAINS')) {
    cla$$('#testElement').add('PASS');
  }
  else {
    cla$$('#testElement').el.className += ' FAIL';
  }

  cla$$('#testElement').on('click', function() {
    cla$$(this).add('CLICKED');
  });

  cla$$('#testElement').el.click();
}

cla$$(window).on('load', pizzaTest);

describe('cla$$', function(){
    it('add', function() {
      div.className.should.contain('ADD_1');
      div.className.should.contain('ADD_2');
    });

    it('remove', function() {
      div.className.should.not.contain('REMOVE_1');
      div.className.should.not.contain('REMOVE_2');
    });

    it('toggle', function() {
      div.className.should.contain('TOGGLE_ON');
      div.className.should.not.contain('TOGGLE_OFF');
    });

    it('contains', function() {
      div.className.should.contain('PASS');
      div.className.should.not.contain('FAIL');
    });

    it('on', function() {
      div.className.should.contain('CLICKED');
    });


});
