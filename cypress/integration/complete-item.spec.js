
describe('Complete todos from the list', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addTodo('new todo 1');
    cy.addTodo('new todo 2');
    cy.addTodo('new todo 3');
  });

  it('complete an item from the list', () => {
    cy.completeTodo('new todo 1');
    cy.expectFooterToBeVisible();
    cy.expectNumberOfTodosLeftInFooterToBe(2);
  });

  it('complete all the items from the list', () => {
    cy.completeTodo('new todo 1');
    cy.completeTodo('new todo 2');
    cy.completeTodo('new todo 3');
    cy.expectNumberOfTodosLeftInFooterToBe(0);
  });

  it('complete an item and clear it from the list', () => {
    cy.completeTodo('new todo 1');
    cy.clearCompletedTodos();
    cy.expectFirstTodoInTheListToBe('new todo 2');
    cy.expectNumberOfTodosLeftInFooterToBe(2);
    cy.expectNumberOfTodosInTheListToEqual(2);
  });

  it('complete all the items and clear it from the list', () => {
    cy.completeTodo('new todo 1');
    cy.completeTodo('new todo 2');
    cy.completeTodo('new todo 3');
    cy.clearCompletedTodos();
    cy.expectTodoListToBeNotVisible();
    cy.expectFooterToBeNotVisible();
  });
});