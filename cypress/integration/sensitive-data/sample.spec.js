describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form with sensitive data', () => {
    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('s3Cr€7-p@s5w0rd')
  })
})
