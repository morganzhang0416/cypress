describe( 'register an existing user', () =>{
    it('create an existing user',()=> {
        //visting page
        cy.visit('/').should('exist')
        //click sign up
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain','Signup').click()
        cy.url().should('include','/login')
        cy.contains('New User Signup').should('exist')
        //filling username and email details, then jump to next page
        cy.get('[data-qa="signup-name"]').type('stevenzhang')
        cy.get('[data-qa="signup-email"]').type('stevenzhang416@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include','/signup')
        cy.contains('p','Email Address already exist!').should('be.visible')
        //filling other details
        
    })    
})

   
