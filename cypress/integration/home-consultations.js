describe('home consultations', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the aura reading button, it should open consultations page', function() {
        cy.get('.aura-reading-button').should('have.attr', 'target', '_blank')
        cy.get('.aura-reading-button').should('have.attr', 'href', './consultations.html')
    })

    it('When click on tarot button, it should open consultations page', function() {
        cy.get('.tarot-button').should('have.attr', 'target', '_blank')
        cy.get('.tarot-button').should('have.attr', 'href', './consultations.html')
    })

    it('When click on apometry button, it should open consultations page', function() {
        cy.get('.apometry-button').should('have.attr', 'target', '_blank')
        cy.get('.apometry-button').should('have.attr', 'href', './consultations.html')
    })

    it('When click on reiki button, it should open consultations page', function() {
        cy.get('.reiki-button').should('have.attr', 'target', '_blank')
        cy.get('.reiki-button').should('have.attr', 'href', './consultations.html')
    })

    it('When click on vibrational therapy button, it should open consultations page', function() {
        cy.get('.vibrational-button').should('have.attr', 'target', '_blank')
        cy.get('.vibrational-button').should('have.attr', 'href', './consultations.html')
    })

    it('When click on radionic table button, it should open consultations page', function() {
        cy.get('radionic-button').should('have.attr', 'target', '_blank')
        cy.get('radionic-button').should('have.attr', 'href', './consultations.html')
    })
    

})

    