describe('header social links', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the facebook button it should open facebook page', function() {
        cy.get('.facebook-icon-header').should('have.attr', 'target', '_blank')
        cy.get('.facebook-icon-header').should('have.attr', 'href', 'https://www.facebook.com/mana.centread')

    })

    it('When click on the instagram button it should open instagram page', function(){
        cy.get('.instagram-icon-header').should('have.attr', 'target', '_blank')
        cy.get('.instagram-icon-header').should('have.attr', 'href', 'https://www.instagram.com/mana.centre/')
    })

    it('When click on the whatsapp button it should open whatsapp page', function(){
        cy.get('.whatsapp-icon-header').should('have.attr', 'target', '_blank')
        cy.get('.whatsapp-icon-header').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=4917624856602&text=Hello%20MANA%20Centre,%20I%20have%20a%20question%20...')
    })
})
