
Cypress.Commands.add('expectTitleToInclude', text => {
  cy.title()
    .should('include', text);
});

Cypress.Commands.add('expectHeaderToInclude', text => {
  cy.get('h1')
    .contains(text);
});

Cypress.Commands.add('addTodo', text => {
  cy.get('.new-todo')
    .type(text)
    .type('{enter}');
});

Cypress.Commands.add('deleteTodo', text => {
  cy.get('.todo-list')
    .contains(text).parent('.view').within(() => {
      cy.get('.destroy')
        .invoke('show')
        .click();
    })
});

Cypress.Commands.add('completeTodo', text => {
  cy.get('.todo-list')
    .contains(text).parent('.view').within(() => {
      cy.get('.toggle')
        .click();
    })
});

Cypress.Commands.add('updateTodo', ( currentText , newText) => {
  cy.get('.todo-list')
    .contains(currentText)
    .dblclick();
  cy.get('.edit')
    .click()
    .clear()
    .type(newText)
    .type('{enter}');
});

Cypress.Commands.add('expectNumberOfTodosInTheListToEqual', length => {
  cy.get('.todo-list')
    .find('li')
    .should('have.length', length);
});

Cypress.Commands.add('expectFirstTodoInTheListToBe', text => {
  cy.get('.todo-list')
    .find('li')
    .first()
    .contains(text);
});

Cypress.Commands.add('expectFooterToBeVisible', () => {
  cy.get('.footer')
    .should('be.visible');
});

Cypress.Commands.add('expectFooterToBeNotVisible', () => {
  cy.get('.footer')
    .should('not.exist');
});

Cypress.Commands.add('expectNumberOfTodosLeftInFooterToBe', count => {
  cy.get('strong')
    .contains(count);
});

Cypress.Commands.add('expectTodoListToBeNotVisible', () => {
  cy.get('.todo-list')
    .should('not.exist');
});

Cypress.Commands.add('clearCompletedTodos', () => {
  cy.get('.clear-completed')
    .click();
});