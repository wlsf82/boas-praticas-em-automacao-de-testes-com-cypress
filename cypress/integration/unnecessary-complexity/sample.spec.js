describe('Unnecessary complexity anti-patter', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')

    if (Math.random() > 0.5) {
      cy.get('#agree')
        .click()
    }
  })

  Cypress._.times(5, () => {
    it('checks the checkbox only if not checked', () => {
      cy.get('#agree')
        .check()
        .should('be.checked')
    })
  })
})