
describe('Update todos from the list', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addTodo('new todo 1');
    cy.addTodo('new todo 2');
    cy.addTodo('new todo 3');
  });

  it('update an item from the list', () => {
    cy.updateTodo('new todo 1', 'new todo one');
    cy.expectFirstTodoInTheListToBe('new todo one');
    cy.expectNumberOfTodosInTheListToEqual(3);
    cy.expectNumberOfTodosLeftInFooterToBe(3);

  });

  it('update an item from the list -> (intentional failure for the reports)', () => {
    cy.updateTodo('new todo 2', 'new todo two');
    cy.expectFirstTodoInTheListToBe('new todo two');
    cy.expectNumberOfTodosInTheListToEqual(3);
    cy.expectNumberOfTodosLeftInFooterToBe(2);

  });
});