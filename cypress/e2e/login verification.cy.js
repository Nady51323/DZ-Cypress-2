const admin = require("../fixtures/admin.json");
const selectors = require("../fixtures/selectors.json");

describe("Admin login", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("Enter correct email and password", () => {
    cy.login(admin.validEmail, admin.validPassword);
    cy.contains(admin.adminDesktop).should("be.visible");
  });

  it("Enter incorrect email and password", () => {
    cy.login(admin.invalidEmail, admin.invalidPassword);
    cy.contains(admin.errorMessage).should("be.visible");
  });

  it("Enter invalid email", () => {
    cy.login(admin.invalidEmail, admin.validPassword);
    cy.contains("Ошибка авторизации!");
  });

  it("Enter empty email", () => {
    cy.login(" ", admin.validPassword);
    cy.get(selectors.email)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("Enter empty password", () => {
    cy.login(admin.validEmail, " ");
    cy.contains("Ошибка авторизации!");
  });
});
