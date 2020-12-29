describe('home consultations', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the aura reading button, it should open aura reading page', function() {
        cy.get('.aura-reading-button').should('have.attr', 'target', '_blank')
        cy.get('.aura-reading-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    it('When click on tarot button, it should open tarot page', function() {
        cy.get('.tarot-button').should('have.attr', 'target', '_blank')
        cy.get('.tarot-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    it('When click on apometry button, it should open apometry page', function() {
        cy.get('.apometry-button').should('have.attr', 'target', '_blank')
        cy.get('.apometry-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    

})

    