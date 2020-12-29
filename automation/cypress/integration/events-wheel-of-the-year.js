describe('events wheel of the year', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/events.html')
      
    })

    it('when click on the book now button, it should open whatsapp page', function() {
        cy.get('.wheel-apply-button').should('have.attr', 'target', '_blank')
        cy.get('.wheel-apply-button').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20to%20apply%20to%20the%20Wheel%20of%20the%20year%20Ceremony,%20please.')

    })

    
})