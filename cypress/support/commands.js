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

Cypress.Commands.add('updateDestination', data => {
  cy.get('#destination_name')
    .clear()
    .type(data.name)
  cy.get('#destination_description')
    .clear()
    .type(data.description)
  cy.get('input[type="submit"]')
    .click()
})
