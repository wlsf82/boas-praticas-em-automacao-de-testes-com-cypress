describe('Hardcoded assertion bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches', () => {
    cy.search('cypress.io')
    cy.wait('@getStories')

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', 2)
    cy.get('@tableRows')
      .eq(0)
      .should('contain', 'Agile Testing')
    cy.get('@tableRows')
      .eq(1)
      .should('contain', 'Clean Code')
  })
})
