describe('verify products', () =>{
    it('visit homepage and click product' ,() => {
    
        cy.visit('/')
        cy.get('a[href = "/products"]').should('be.visible').click()
        cy.contains('all products',{matchCase:false}).should('be.visible')
        cy.get('#search_product').should('exist').type('tshirt')
        cy.get('button[id = submit_search]').click()
        // select all div elements with class "my-class"
        
        cy.get('div.features_items div.col-sm-4').then(($divl) =>{
            console.log($divl.length)
        })

        cy.get('div.features_items div.col-sm-4').each(($div) => {
        // find the nested p element within the div
        const $p = $div.find('p')
        // get the text content of the p element
        const text = $p.text()
        // assert that the text matches your expected value
        expect(text.toLowerCase()).to.include('shirt')
        })
  

    })

})