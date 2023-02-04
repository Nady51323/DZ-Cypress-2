describe("API tests", () => {
  it("Create user", () => {
    cy.createUser().then(({ body, status }) => {
      cy.log(JSON.stringify(body));
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Edit user", () => {
    cy.createUser();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Nady13",
      body: {
        id: 13,
        username: "Nady13",
        firstName: "Nady",
        lastName: "131313",
        email: "nady13@gmail.com",
        password: "131313",
        phone: "+7 987 123 45 67",
        userStatus: 0,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Delete user", () => {
    cy.createUser();
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Nady13",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Check for deletion", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Nady13",
      failOnStatusCode: false,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(404);
    });
  });
});
