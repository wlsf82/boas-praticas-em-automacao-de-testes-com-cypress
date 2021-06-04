describe('Code duplication bad practice - Sample 3', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches for the same term 3 times', () => {
    cy.search('cypress.io')

    cy.get('.table-row').then(rows => {
      expect(rows.length).to.be.at.least(1)
    })

    cy.search('cypress.io')

    cy.get('.table-row').then(rows => {
      expect(rows.length).to.be.at.least(1)
    })

    cy.search('cypress.io')

    cy.get('.table-row').then(rows => {
      expect(rows.length).to.be.at.least(1)
    })
  })
})
