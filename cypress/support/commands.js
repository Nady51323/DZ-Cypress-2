// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const selector = require("../fixtures/selectors.json");

Cypress.Commands.add("login", (login, password) => {
  cy.get(selector.email).type(login);
  cy.get(selector.password).type(password);
  cy.get(selector.buttonLogin).click();
});

Cypress.Commands.add("createUser", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user",
    body: {
      id: 13,
      username: "Nady13",
      firstName: "Nady",
      lastName: "13",
      email: "nady13@gmail.com",
      password: "131313",
      phone: "+7 987 123 45 67",
      userStatus: 0,
    },
  });
});
