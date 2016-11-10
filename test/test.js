var $ = cla$$y;
var test = $('.testElement');

function classyTest() {
  test.each(function(e) {
    test.add('EACH','ADD_1');
  });

  // test.add('ADD_1');
  test.remove('REMOVE_1','REMOVE_2');

  test.toggle('TOGGLE_ON','TOGGLED');
  test.toggle('TOGGLE_OFF','TOGGLED');

  if (test.contains('testElement')) {
    test.add('PASS');
    test.remove('CONTAINS');
  }

  test.on('click', function() {
    test.add('CLICKED');
  });

  test.each(function(el) {
    el.click();
  });

}

$(window).on('load', classyTest);

// The Test
var should  = chai.should();
var test1 = document.getElementById('test1');
var test2 = document.getElementById('test2');

describe('cla$$y.js', function(){
    it('nodes', function() {
      test.nodes[0] === document.querySelectorAll('.testElement')[0];
    });

    it('each', function() {
      test1.className.should.contain('EACH');
      test2.className.should.contain('EACH');
    });

    it('add', function() {
      test1.className.should.contain('ADD_1');
      test2.className.should.contain('ADD_1');
    });

    it('remove', function() {
      test1.className.should.not.contain('REMOVE_1');
      test2.className.should.not.contain('REMOVE_1');
      test1.className.should.not.contain('REMOVE_2');
      test2.className.should.not.contain('REMOVE_2');
    });

    it('toggle', function() {
      test1.className.should.contain('TOGGLE_ON');
      test2.className.should.contain('TOGGLE_ON');
      test1.className.should.not.contain('TOGGLE_OFF');
      test2.className.should.not.contain('TOGGLE_OFF');
      test1.className.should.not.contain('TOGGLED');
      test2.className.should.not.contain('TOGGLED');
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
