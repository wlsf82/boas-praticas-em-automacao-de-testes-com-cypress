describe('Code duplication bad practice - Sample 4', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('fieldset div input[type="checkbox"]').check()
  })
})
