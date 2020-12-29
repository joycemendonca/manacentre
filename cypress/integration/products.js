describe('products page', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/products.html')
      
    })

    it('when click on the get your voucher now button, it should open whatsapp page', function() {
        cy.get('.voucher-products-button').should('have.attr', 'target', '_blank')
        cy.get('.voucher-products-button').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20get%20a%20MANA%20Gift%20Voucher,%20please.')

    })

    
})