const editDestination = {
  updateInfo: data => {
    cy.get('#destination_name')
      .clear()
      .type(data.name)
    cy.get('#destination_description')
      .clear()
      .type(data.description)
    cy.get('input[type="submit"]')
      .click()
  }
}

module.exports = editDestination
