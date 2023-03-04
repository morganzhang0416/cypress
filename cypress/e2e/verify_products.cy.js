describe('verify products', () =>{
    it('visit homepage and click product' ,() => {
        const menuList = [
            'Category',
            'Availability',
            'Condition',
            'Brand'
        ]
        cy.visit('https://automationexercise.com/')
        cy.get('a[href = "/products"]').should('be.visible').click()
        cy.contains('all products',{matchCase:false}).should('be.visible')
        cy.get('a[href="/product_details/1"]').should('be.visible').click()
        cy.get('div[class="product-information"]').find('h2').should('be.visible')
        cy.get('div[class="product-information"]').find('span').should('be.visible')
        cy.get('div[class="product-information"]').find('p').as("pinfo").should('be.visible')
        cy.get('@pinfo').each((item,index,list)=>{
            console.log(list[index])
            cy.wrap(item).should('contain.text',menuList[index])
        })

    })

})