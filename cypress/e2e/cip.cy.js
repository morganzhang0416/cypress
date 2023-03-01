describe('cip spec', ()=> {
    it('visit cip website', () => {
      cy.visit('https://www.cip.com.cn/Book/SeniorSearch')
      cy.iframe('#Your project: \'Test Project\'').find('.keywords').type('Hello, World!');

      cy.xpath('/html/body/div[1]/div[2]/form/div[2]/div[2]/input').should('exist')
      cy.xpath('/html/body/div[1]/div[2]/form/div[2]/div[2]/input').type('python')
      cy.get('button.btn btn-u-lg[type="submit"]').click()
      cy.wait(4000)
    })
  })

