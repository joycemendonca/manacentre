describe('events social healing', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/events.html')
      
    })

    it('when click on the book now button, it should open whatsapp page', function() {
        cy.get('.social-healing-apply-button').should('have.attr', 'target', '_blank')
        cy.get('.social-healing-apply-button').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20apply%20to%20the%20Social%20Healing%20Sessions,%20please.')

    })

    
})