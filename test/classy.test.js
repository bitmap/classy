import $ from '../src/classy.js'

$('#singleElement').add('pizza');
let test = $('.testElement');
test.each(() => {
  test.add('EACH', 'ADD_1', 'REMOVE_1', 'REMOVE_2', 'DO_NOT_REMOVE');
});
test.remove('REMOVE_1', 'REMOVE_2');
test.toggle('TOGGLE_ON', 'TOGGLE_OFF');
test.toggle('TOGGLE_OFF', 'TOGGLE_ON');
test.toggle('TOGGLED');
if (test.contains('testElement')) {
  test.add('PASS');
  test.remove('CONTAINS');
}
test.on('click', () => {
  test.add('CLICKED');
});
test.each(function (el) {
  el.click();
});

$(window).on('load', () => console.log('window loaded'));

// The Test
let should = chai.should();
let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');

describe('classy.js', () => {
  it('nodes', () => {
    test.nodes[0] === document.querySelectorAll('.testElement')[0];
  });

  it('each', () => {
    test1.className.should.contain('EACH');
    test2.className.should.contain('EACH');
  });

  it('add', () => {
    test1.className.should.contain('ADD_1');
    test2.className.should.contain('ADD_1');
  });

  it('remove', () => {
    test1.className.should.not.contain('REMOVE_1');
    test2.className.should.not.contain('REMOVE_1');
    test1.className.should.not.contain('REMOVE_2');
    test2.className.should.not.contain('REMOVE_2');
    test1.className.should.contain('DO_NOT_REMOVE');
    test2.className.should.contain('DO_NOT_REMOVE');
  });

  it('toggle', () => {
    test1.className.should.not.contain('TOGGLE_ON');
    test2.className.should.not.contain('TOGGLE_ON');
    test1.className.should.not.contain('TOGGLE_OFF');
    test2.className.should.not.contain('TOGGLE_OFF');
    test1.className.should.contain('TOGGLED');
    test2.className.should.contain('TOGGLED');
  });

  it('contains', () => {
    test1.className.should.contain('PASS');
    test2.className.should.contain('PASS');
    test1.className.should.not.contain('CONTAINS');
    test2.className.should.not.contain('CONTAINS');
  });

  it('on', () => {
    test1.className.should.contain('CLICKED');
    test2.className.should.contain('CLICKED');
  });
});
