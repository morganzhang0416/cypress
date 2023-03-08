

describe('add prodcut in cart', () =>{
    it('visit homepage and click product' ,() => {

        const productnum = 3 //define the items we need to order
        //visit homepage
        cy.visit('/')
        //click product page
        cy.get('a[href = "/products"]').contains('Products').click({force:true})
        //verfigy all product appears in product page successfully
        cy.contains('all products',{matchCase:false}).should('be.visible')

        
       // get all product and put into an array select all the prodct except the first one and last one
        
        cy.get('.productinfo\.text-center').each((element,index,list) =>{
             if ( index === productnum){
                 return false;
             } 
        cy.get('.productinfo\.text-center').eq(index).realHover()
        cy.get('.product-overlay').find('a').eq(index).should('be.visible').click({force:true})
    
        cy.get('button[data-dismiss ="modal"]').click()
        
        })
        // add the selected items href attr to array
        let href1Array = [];
        cy.get('div.choose a').each((element,index) => {
            if ( index === productnum){
                return false;
            } 
            href1Array.push(element.attr('href'))
        //console.log($el.attr('href'))
        })
           
        // check the cart
        cy.get('a[href = "/view_cart"]').contains('Cart').click({force:true})

        let href2Array = [];
        
        cy.get('td.cart_description a').each((element,index)=>{
            href2Array.push(element.attr('href'))
            }).then(() => {
            // other code that relies on href1Array's values can go here
            console.log(href1Array.length); // should output the correct length of the array
            console.log(href1Array); // should output the values of the array    
            console.log(href2Array.length); // should output the correct length of the array
            console.log(href2Array); // should output the values of the array 
            expect(href2Array).to.have.members(href1Array);    
            })

        cy.get('table#cart_info_table tbody tr').each(($row) =>{
            const price = parseFloat($row.find('td.cart_price').text().match(/\d+/)[0]);
            const quantity = parseFloat($row.find('td.cart_quantity').text());
            const total = parseFloat($row.find('td.cart_total').text().match(/\d+/)[0]);
            console.log('price' + price)
            console.log('quantity' + quantity)
            console.log('total' + total)

            expect(price * quantity).to.equal(total);



        })
        
          
        
       
        
        

    })
    

})