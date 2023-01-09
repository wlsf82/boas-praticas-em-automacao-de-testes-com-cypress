describe('Browser testing bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a')
      .first()
      .should('have.attr', 'href', 'https://example.com/lc-jg')
      .and('have.attr', 'target', '_blank')
  })
})
