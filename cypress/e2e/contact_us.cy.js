describe('contact us', () => {
    it('visit contact', ()=> {
        // visit homepage and verify 
        cy.visit('/')
        cy.contains('h2','Category').should('be.visible')
        //click contact us 
        cy.get('a[href="/contact_us"]').click();
        cy.contains('GET IN TOUCH',{matchCase:false}).should('be.visible')
        //filling contact details
        cy.get('[data-qa="name"]').type('simon')
        cy.get('[data-qa="email"]').type('simon.zhang416@gmail.com')
        cy.get('[data-qa="subject"]').type('query a price of cloth')
        cy.get('[data-qa="message"]').type('can i know a list of men cloth on the home page')
        cy.get('input[type=file]').selectFile('/Users/tmp/cypress/cypress/downloads/file1.txt')
        //submit the details 
        cy.get('[data-qa="submit-button"]').click()
        cy.on('window:confirm', () => true)
        cy.contains('Success! Your details have been submitted successfully.',{matchCase:false}).should('be.visible')
        //return homepage
        cy.get('div#form-section').contains('home',{matchCase:false}).click()
        cy.contains('h2','Category').should('be.visible')
   })
  

    
})

    
