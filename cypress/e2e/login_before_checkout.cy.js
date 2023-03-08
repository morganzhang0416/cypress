import '../support/commands.js'
// import '../support/login.js'

describe('My Test Suite', () => {
    before(() => {
      // Call the login command with the username and password
      cy.login('stevenzhang416@gmail.com', 'stevenzhang')
    })
  
    it('My Test Case', () => {
      console.log("hello world")
    })
  })
  
