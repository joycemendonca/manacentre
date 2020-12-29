describe('subscription', function(){
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
      
    })

    it('When click on the subscribe button it should open subscribe modal', function() {
        cy.get('.subscribe-button').click()
        cy.get('.pop-up-subscribe').should('be.visible')
    })

    it('when click on the close button, it should close modal', function(){
        cy.get('.subscribe-button').click()
        cy.get('.pop-up-subscribe').should('be.visible')
       
        cy.get('.pop-up-2 .close-button').click()
        cy.get('.pop-up-subscribe').should('not.be.visible')
    })

    it('when click on the subscribe button on modal, it should open a form', function(){
        cy.get('.subscribe-button').click()
        cy.get('.button').click()
        cy.get('.modal-subscribe-button').should('have.attr', 'action', 'https://cargocollective.us14.list-manage.com/subscribe/post?u=8b6548a8452f514cfc847df6d&id=6c01ffec27')
        
    })
})
