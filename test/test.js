var should  = chai.should();
var div = document.querySelector('#testElement');

function pizzaTest() {
  cla$$('.pizza').add('the', 'fucking');
  cla$$('.pizza').toggle('test')
  cla$$('.pizza').toggle('sauce')
  if (cla$$('.pizza').contains('pizza')) {
    cla$$('.pizza').add('worked');
  }
  cla$$('.pizza').remove('pizza')
  cla$$('div').on('click', function() {
    cla$$('div').add('TEST')
  })
}

cla$$(window).on('load', pizzaTest);

describe('cla$$', function(){
    it('The test worked', function() {
      div.className.should.equal('the test worked');
    })
})
