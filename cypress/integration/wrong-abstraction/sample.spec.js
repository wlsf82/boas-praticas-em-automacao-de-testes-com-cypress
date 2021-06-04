describe('Wrong abstraction bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('cypress')
    cy.wait('@getStories')

    cy.assertResults()
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('selenium')
    cy.wait('@getStories')

    cy.assertResults()
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('playwright')
    cy.wait('@getStories')

    cy.assertResults()
  })
})
