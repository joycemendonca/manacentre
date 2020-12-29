describe('home classes', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the universe of the tarot button, it should open the universe of the tarot page', function() {
        cy.get('.the-universe-tarot-button').should('have.attr', 'target', '_blank')
        cy.get('.the-universe-tarot-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    it('When click on the darkromm red lodge button, it should open the darkromm red lodge page', function() {
        cy.get('.darkroom-button').should('have.attr', 'target', '_blank')
        cy.get('.darkroom-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    it('When click on the oracles oracle button, it should open the oracles oracle page', function() {
        cy.get('.the-oracles-button').should('have.attr', 'target', '_blank')
        cy.get('.the-oracles-button').should('have.attr', 'href', 'https://mana.as.me/schedule.php')
    })

    

})

    