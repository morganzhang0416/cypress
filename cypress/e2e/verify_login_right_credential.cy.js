describe( 'register user', () =>{
    it('create a new user',()=> {
        //visting page
        cy.visit('https://automationexercise.com/').should('exist')
        //click login
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain','Signup').click()
        cy.url().should('include','/login')
        cy.contains('Login to your account').should('exist')
        //filling email and password then sign in
        cy.get('[data-qa="login-email"]').type('stevenzhang416@gmail.com')
        cy.get('[data-qa="login-password"]').type('stevenzhang')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('a','Logged in as stevenzhang').should('be.visible')
               
    })    
})

   
