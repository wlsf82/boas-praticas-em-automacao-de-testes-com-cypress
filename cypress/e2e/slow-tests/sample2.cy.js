describe('Slow tests bad practice - Sample 2', () => {
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup')

    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('foobarbaz')
    cy.get('#confirmPassword').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
