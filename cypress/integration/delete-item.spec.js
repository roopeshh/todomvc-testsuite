describe('Delete todos from the list', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addTodo('new todo 1');
    cy.addTodo('new todo 2');
    cy.addTodo('new todo 3');
  });

  it('delete an item from the list', () => {
    cy.deleteTodo('new todo 2');
    cy.expectFirstTodoInTheListToBe('new todo 1');
    cy.expectNumberOfTodosInTheListToEqual(2);
    cy.expectFooterToBeVisible();
    cy.expectNumberOfTodosLeftInFooterToBe(2);
  });

  it('delete all the items from the list', () => {
    cy.expectNumberOfTodosInTheListToEqual(3);
    cy.deleteTodo('new todo 1');
    cy.deleteTodo('new todo 2');
    cy.deleteTodo('new todo 3');
    cy.expectTodoListToBeNotVisible();
    cy.expectFooterToBeNotVisible();
  });
});