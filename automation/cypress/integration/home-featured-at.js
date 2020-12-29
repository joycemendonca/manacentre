describe('home featured at', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the on the KMB button, it should open the KMB page', function() {
        cy.get('.kmb-button').should('have.attr', 'target', '_blank')
        cy.get('.kmb-button').should('have.attr', 'href', 'https://kmbcreative.de/agency/')
    })

    it('When click on the mondlicht button, it should open the mondlicht page', function() {
        cy.get('.mondlicht-button').should('have.attr', 'target', '_blank')
        cy.get('.mondlicht-button').should('have.attr', 'href', 'https://www.mondlicht-berlin.de/')
    })

    it('When click on the janainas button, it should open the janainas page', function() {
        cy.get('.janainas-button').should('have.attr', 'target', '_blank')
        cy.get('.janainas-button').should('have.attr', 'href', 'http://www.janainas.org/')
    })

    

})

    