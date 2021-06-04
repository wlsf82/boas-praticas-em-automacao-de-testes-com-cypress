describe('Flaky tests bad practice', () => {
  beforeEach(() => {
    cy.visit('https://wlsf82-hacker-stories.web.app')

    cy.contains('p','Loading ...')
      .should('be.visible')
    cy.contains('p','Loading ...')
      .should('not.exist')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      const faker = require('faker')

      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })

      cy.contains('p','Loading ...')
        .should('be.visible')
      cy.contains('p','Loading ...')
        .should('not.exist')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
