
Cypress.Commands.add('login', (email, password) => {
    //visting page
    cy.visit('https://automationexercise.com/login').should('exist')
   
    cy.contains('Login to your account').should('exist')
    //filling email and password then sign in
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('a','Logged in as ').should('be.visible')
  })
  