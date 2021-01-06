describe('home events', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the abundance portal ritual button, it should open events page', function() {
        cy.get('.abundance-portal-button').should('have.attr', 'target', '_blank')
        cy.get('.abundance-portal-button').should('have.attr', 'href', './events.html')
    })

    it('When click on the wheel of the year button, it should open events page', function() {
        cy.get('.wheel-of-the-year-button').should('have.attr', 'target', '_blank')
        cy.get('.wheel-of-the-year-button').should('have.attr', 'href', './events.html')
    })

    it('When click on the social healing button, it should open events page', function() {
        cy.get('.social-healing-button').should('have.attr', 'target', '_blank')
        cy.get('.social-healing-button').should('have.attr', 'href', './events.html')
    })

    

})

    