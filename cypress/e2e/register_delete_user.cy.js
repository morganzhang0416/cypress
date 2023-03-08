describe( 'register and delete user', () =>{
    it('create a new user then delete it',()=> {
        //visting page
        cy.visit('/').should('exist')
        //click sign up
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain','Signup').click()
        cy.url().should('include','/login')
        cy.contains('New User Signup').should('exist')
        //filling username and email details, then jump to next page
        cy.get('[data-qa="signup-name"]').type('simonzhang')
        cy.get('[data-qa="signup-email"]').type('simon.zhang416@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include','/signup')
        cy.contains('Enter Account Information').should('be.visible')
        //filling other details
        cy.get('#id_gender1').click()
        cy.get('[data-qa="name"]').should('have.value','simonzhang')
        cy.get('[data-qa="email"]').should('have.value','simon.zhang416@gmail.com')
        cy.get('[data-qa="password"]').type('simonzhang')
        cy.get('[data-qa="days"]').select('16')
        cy.get('[data-qa="months"]').select('April')
        cy.get('[data-qa="years"]').select('1982')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type('simon')
        cy.get('[data-qa="last_name"]').type('zhang')
        cy.get('[data-qa="company"]').type('cip')
        cy.get('[data-qa="address"]').type('90 Royal RD')
        cy.get('[data-qa="address2"]').type('Massey')
        cy.get('[data-qa="state"]').type('west auckland')
        cy.get('[data-qa="city"]').type('Auckland')
        cy.get('[data-qa="zipcode"]').type('0164')
        cy.get('[data-qa="mobile_number"]').type('0164')
        // click create account button
        cy.get('[data-qa="create-account"]').click()
        cy.url().should('include','/account_created')
        cy.contains('Account Created!').should('be.visible')
        //click continue button and verify account has been created
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as').should('be.visible')
        //delete account and verify deletion
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        //end       
    })    
})

   
