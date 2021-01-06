describe('consultations radionic table', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/consultations.html')
      
    })

    it('when click on the book now button, it should open whatsapp page', function() {
        cy.get('.radionic-book-now').should('have.attr', 'target', '_blank')
        cy.get('.radionic-book-now').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=491778027833&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20book%20an%20appointment%20to%20Radionic%20Table,%20please.')

    })

    
})