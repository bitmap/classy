import 'https://unpkg.com/chai@4.1.2/chai.js';

mocha.setup('bdd');

import $ from './classy.js'

const testID = $('#singleElement');
const testClass = $('.testElement');

testID.add('PIZZA');
testClass.add('EACH', 'ADD_1', 'REMOVE_1', 'REMOVE_2', 'DO_NOT_REMOVE');
testClass.remove('REMOVE_1', 'REMOVE_2');
testClass.toggle('TOGGLE_ON', 'TOGGLE_OFF');
testClass.toggle('TOGGLE_OFF', 'TOGGLE_ON');
testClass.toggle('TOGGLED');
testClass.on('click', () => testClass.add('CLICKED'));
testClass.each(el => el.click());
if (testClass.contains('CLICKED')) {
  testClass.add('PASS');
  testClass.remove('CONTAINS');
}

// The Test
let should = chai.should();
let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');

describe('new money', () => {
  it('nodes', () => {
    testID.nodes[0] === document.querySelectorAll('.PIZZA')[0];
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

mocha.checkLeaks();
mocha.run();