describe('Code duplication bad practice - Sample 2', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches for "reactjs"', () => {
    cy.search('reactjs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('searches for "vuejs"', () => {
    cy.search('vuejs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})
