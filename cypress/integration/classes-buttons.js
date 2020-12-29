describe('classes buttons', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/courses.html')
      
    })

    it('when click on the apply now button, it should open whatsapp page', function() {
        cy.get('.classes-apply-now').should('have.attr', 'target', '_blank')
        cy.get('.classes-apply-now').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20apply%20to%20the%20Universe%20of%20the%20Tarot,%20please.')

    })

    it('when click on the scholarship button, it should open whatsapp page', function() {
        cy.get('.classes-scholarship').should('have.attr', 'target', '_blank')
        cy.get('.classes-scholarship').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20would%20like%20to%20apply%20for%20a%20Scholarship%20to%20The%20Universe%20of%20of%20the%20Tarot,%20please.')

    })

    
})