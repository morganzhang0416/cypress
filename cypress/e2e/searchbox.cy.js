describe('template spec', ()=> {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('input[name = "q"]').type('python{enter}')
    // cy.get('button[id = "search_button"]').click()
    cy.wait(5000)
  })
})