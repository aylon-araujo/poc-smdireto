describe('Sidenav', () => {
  it('Shold find Dashboard list item', () => {
    cy.visit('/');

    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
  });

  it('Shold find Order list item', () => {
    cy.contains('Pedidos').click();
    cy.url().should('include', '/pedidos');
  });
});
