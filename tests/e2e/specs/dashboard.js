describe("Dashboard", () => {
  it("redirects to the login page if the user is not logged in", () => {
    cy.visit("/dashboard");
    cy.url().should("match", /auth\/login/);
  });
});
