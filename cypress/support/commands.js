Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`)
})

Cypress.Commands.add('assertResults', () => {
  cy.get('.table-row').then(rows => {
    expect(rows.length).to.be.at.least(1)
  })
})
