const longText = 'Lorem ipsum dolor sit amet semper quam natoque eu sed blandit dolor sem rutrum lorem pretium sit integer ultricies. Eu vivamus parturient et mus cras ante amet consectetuer dictum ultricies pretium ut dis. Rhoncus ultricies sit eros nec quam. Eu sit laoreet rhoncus pulvinar. Consequat semper augue porttitor nullam ultricies eget quam vulputate elit metus vici.'

describe('Add todos to the list', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('adding a todo', () => {
    cy.addTodo('new todo');
    cy.expectNumberOfTodosInTheListToEqual(1);
    cy.expectFirstTodoInTheListToBe('new todo');
    cy.expectFooterToBeVisible();
  });

  it('adding multiple todos', () => {
    cy.addTodo('new todo 1');
    cy.addTodo('new todo 2');
    cy.addTodo('new todo 3');
    cy.expectNumberOfTodosInTheListToEqual(3);
    cy.expectFirstTodoInTheListToBe('new todo 1');
    cy.expectFooterToBeVisible();
    cy.expectNumberOfTodosLeftInFooterToBe(3);
  });

  it('adding a very long(text) todo', () => {
    cy.addTodo(longText);
    cy.expectFirstTodoInTheListToBe(longText);
    cy.expectFooterToBeVisible();
  });
});