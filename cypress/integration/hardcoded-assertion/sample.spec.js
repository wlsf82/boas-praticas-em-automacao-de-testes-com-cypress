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

    cy.fixture('stories').then(stories => {
      cy.get('.table-row')
        .as('tableRows')
        .should('have.length', stories.hits.length)
      stories.hits.forEach((hit, index) => {
        cy.get('@tableRows')
          .eq(index)
          .should('contain', hit.title)
      })
    })
  })
})
