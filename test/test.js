function classyTest() {
  cla$$('#testElement').add('ADD_1');
  cla$$('#testElement').remove('REMOVE_1');

  cla$$('#testElement').toggle('TOGGLE_ON');
  cla$$('#testElement').toggle('TOGGLE_OFF');

  if (cla$$('#testElement').contains('CONTAINS') === true) {
    cla$$('#testElement').add('PASS');
    cla$$('#testElement').remove('CONTAINS');
  }

  cla$$('#testElement').on('click', function() {
    cla$$('#testElement').add('CLICKED');
  });

  cla$$('.testList').add('imHere');

  // cla$$('.testList li').on('click', function() {
  //   cla$$(this.el).add('pass');
  // });

  document.getElementById('testElement').click();
}

  window.addEventListener('load', classyTest);

// The Test
var should  = chai.should();
var div = document.getElementById('testElement');

describe('cla$$', function(){
    it('add', function() {
      div.className.should.contain('ADD_1');
    });

    it('remove', function() {
      div.className.should.not.contain('REMOVE_1');
    });

    it('toggle', function() {
      div.className.should.contain('TOGGLE_ON');
      div.className.should.not.contain('TOGGLE_OFF');
    });

    it('contains', function() {
      div.className.should.contain('PASS');
      div.className.should.not.contain('CONTAINS');
    });

    it('on', function() {
      div.className.should.contain('CLICKED');
    });


});
