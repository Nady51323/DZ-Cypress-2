const admin = require("../fixtures/admin.json");
const selectors = require("../fixtures/selectors.json");

it("Book a movie in an available hall", () => {
  cy.visit("/admin/");
  cy.login(admin.validEmail, admin.validPassword);
  cy.contains(admin.adminDesktop).should("be.visible");
  cy.get(selectors.availableHall).contains(selectors.nameHall);
  cy.visit("/");
  cy.get(selectors.selectSessionDate).click();
  cy.get(selectors.selectMovie).contains(selectors.timeSession).click();
  cy.contains(selectors.sessionTimeMessage).should("be.visible");
  cy.get(selectors.chooseSeat).click();
  cy.get(selectors.pushButton).click();
  cy.contains("4/1").should("be.visible");
  cy.get(selectors.pushButton).should("be.visible");
});
