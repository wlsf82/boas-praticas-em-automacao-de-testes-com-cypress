describe('Browser testing bad practice - Sample 1', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    cy.contains('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
      .and('not.have.attr', 'target')

    // Má prática  
    // cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
  })
})
