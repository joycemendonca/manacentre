describe('consultations vibrational therapy', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/consultations.html')
      
    })

    it('when click on the book now button, it should open whatsapp page', function() {
        cy.get('.vibrational-book-now').should('have.attr', 'target', '_blank')
        cy.get('.vibrational-book-now').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=491778027833&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20book%20an%20appointment%20to%20Vibrational%20Therapy,%20please.')

    })

    
})