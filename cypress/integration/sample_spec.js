describe('My First Test', function(){
  it('has a title', function() {
    cy.visit('/');
    cy.contains('Home');
  });
})
