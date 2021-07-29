describe('Test event listeners', () => {
  it('makes sure event listener works', () => {
    cy.visit('./index.html').wait(10000).then(() => {
      cy.get('text-input').find('input').type('asdf').then(() => {
          cy.get('input').should('not.have.attr', 'disabled')
        });
      });
  });
});
  
