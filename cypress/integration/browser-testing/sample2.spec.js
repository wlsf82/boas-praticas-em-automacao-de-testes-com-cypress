describe('Browser testing bad practice', () => {
  beforeEach(() => {
    cy.visit('https://hackernews-seven.vercel.app')
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a')
      .first()
      .click()

    // Assert that a new tab was opened in the correct URL
  })
})
