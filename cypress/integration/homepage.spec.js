describe('Verify todo home page is open', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('opens the todo home page', () => {
    cy.expectTitleToInclude('Angular2');
    cy.expectTitleToInclude('TodoMVC');
    cy.expectHeaderToInclude('todos');
  });
});