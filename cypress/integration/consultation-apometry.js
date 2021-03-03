describe('consultations apometry', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/consultations.html')
      
    })

    it('when click on the book now button, it should open whatsapp page', function() {
        cy.get('.apometry-book-now').should('have.attr', 'target', '_blank')
        cy.get('.apometry-book-now').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20book%20an%20appointment%20to%20Apometry,%20please.')

    })

    
})