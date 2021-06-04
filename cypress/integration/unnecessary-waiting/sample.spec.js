const faker = require('faker')

describe('Unnecessary waiting bad practice', () => {
  const randomDestination = Math.floor(Math.random() * 15) + 1

  beforeEach(() => {
    cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
  })

  it('updates destination info', () => {
    const info = {
      name: faker.random.words(5),
      description: faker.random.words(5)
    }

    cy.get('#destination_name')
      .clear()
      .type(info.name)
    cy.get('#destination_description')
      .clear()
      .type(info.description)
    cy.get('input[type="submit"]')
      .click()
    cy.wait(3000)

    cy.url()
      .should(
        'be.equal',
        `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
      )
    cy.contains('h2', info.name)
      .should('be.visible')
    cy.contains('p', info.description)
      .should('be.visible')
  })
})
