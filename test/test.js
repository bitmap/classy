import $ from '../index.js'

$('#test1').add`test`
const test = $('.test')

let count = 0

test.each((node, i) => {
  count = i + 1
  node.id = `testElement${count}`

  $(node).add('EACH')
})

$(test.nodes[0]).add('TEST1')
$(test.nodes[1]).add('TEST2')
$(test.nodes[2]).add('TEST3')

test.add('ADD_1', 'REMOVE_1', 'REMOVE_2', 'DO_NOT_REMOVE')

test
  .add('CONTAINS')
  .remove('REMOVE_1', 'REMOVE_2', 'EACH')
  .toggle('TOGGLE_ON', 'TOGGLE_OFF', 'EACH')
  .toggle('TOGGLE_OFF', 'TOGGLE_ON', 'EACH')
  .toggle('TOGGLED', 'EACH')

if (test.contains('CONTAINS')) {
  test
    .add('PASS')
    .remove('CONTAINS')
}
test.on('click', (event) => {
  test.add('CLICKED')
  $(event.target).add('SCOPED')
})

test.each(node => {
  node.click()
})

$(window).on('load', () => console.log($))

// The Test
const should = chai.should()
const expect = chai.expect
const test1 = document.getElementById('testElement1')
const test2 = document.getElementById('testElement2')
const test3 = document.getElementById('testElement3')

describe('new money', () => {
  it('nodes', () => {
    const { nodes } = $('.test')
    const node1 = nodes[0]
    const node2 = document.querySelectorAll('.test')[0]
    const $node = $(node1)

    const testNode1 = node1 === node2
    const testNode2 = node1 === $node.nodes[0]

    node1.className.should.contain('test')
    node2.className.should.contain('test')
    expect(testNode1).to.equal(true)
    expect(testNode2).to.equal(true)
  })

  it('each', () => {
    expect(count).to.equal(3)
    test1.className.should.contain('EACH')
    test2.className.should.contain('EACH')
    test3.className.should.contain('EACH')
    test1.className.should.contain('TEST1')
    test2.className.should.contain('TEST2')
    test3.className.should.contain('TEST3')
  })

  it('add', () => {
    test1.className.should.contain('ADD_1')
    test2.className.should.contain('ADD_1')
    test3.className.should.contain('ADD_1')
  })

  it('remove', () => {
    test1.className.should.not.contain('REMOVE_1')
    test2.className.should.not.contain('REMOVE_1')
    test3.className.should.not.contain('REMOVE_1')
    test1.className.should.not.contain('REMOVE_2')
    test2.className.should.not.contain('REMOVE_2')
    test3.className.should.not.contain('REMOVE_2')
    test1.className.should.contain('DO_NOT_REMOVE')
    test2.className.should.contain('DO_NOT_REMOVE')
    test3.className.should.contain('DO_NOT_REMOVE')
  })

  it('toggle', () => {
    test1.className.should.not.contain('TOGGLE_ON')
    test2.className.should.not.contain('TOGGLE_ON')
    test3.className.should.not.contain('TOGGLE_ON')
    test1.className.should.not.contain('TOGGLE_OFF')
    test2.className.should.not.contain('TOGGLE_OFF')
    test3.className.should.not.contain('TOGGLE_OFF')
    test1.className.should.contain('TOGGLED')
    test2.className.should.contain('TOGGLED')
    test3.className.should.contain('TOGGLED')
  })

  it('contains', () => {
    test1.className.should.contain('PASS')
    test2.className.should.contain('PASS')
    test3.className.should.contain('PASS')
    test1.className.should.not.contain('CONTAINS')
    test2.className.should.not.contain('CONTAINS')
    test3.className.should.not.contain('CONTAINS')
  })

  it('on', () => {
    test1.className.should.contain('CLICKED')
    test2.className.should.contain('CLICKED')
    test3.className.should.contain('CLICKED')
    test1.className.should.contain('SCOPED')
    test2.className.should.contain('SCOPED')
    test3.className.should.contain('SCOPED')
  })
})
