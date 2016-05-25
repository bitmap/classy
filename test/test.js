var $ = cla$$y;
var testEl = $('.testElement');
var testID = $('#test3');

function classyTest() {

  console.log(testEl.el[0] === document.querySelectorAll('.testElement')[0]);

  testEl.el.each(function(e) {
    e.innerHTML = 'PASSED';
  });

  testEl.add('ADD_1');
  testEl.remove('REMOVE_1');

  testEl.toggle('TOGGLE_ON');
  testEl.toggle('TOGGLE_OFF');

  if (testEl.contains('testElement')) {
    testEl.add('PASS');
    testEl.remove('CONTAINS');
  }

  testEl.on('click', function() {
    testEl.add('CLICKED');
  });

  testEl.el.each(function(el) {
    el.click();
  });

}

$(window).on('load', classyTest);

// The Test
var should  = chai.should();
var test1 = document.getElementById('test1');
var test2 = document.getElementById('test2');

describe('cla$$y.js', function(){
    it('add', function() {
      test1.className.should.contain('ADD_1');
      test2.className.should.contain('ADD_1');
    });

    it('remove', function() {
      test1.className.should.not.contain('REMOVE_1');
      test2.className.should.not.contain('REMOVE_1');
    });

    it('toggle', function() {
      test1.className.should.contain('TOGGLE_ON');
      test2.className.should.contain('TOGGLE_ON');
      test1.className.should.not.contain('TOGGLE_OFF');
      test2.className.should.not.contain('TOGGLE_OFF');
    });

    it('contains', function() {
      test1.className.should.contain('PASS');
      test2.className.should.contain('PASS');
      test1.className.should.not.contain('CONTAINS');
      test2.className.should.not.contain('CONTAINS');
    });

    it('on', function() {
      test1.className.should.contain('CLICKED');
      test2.className.should.contain('CLICKED');
    });


});
