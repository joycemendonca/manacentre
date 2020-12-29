// usually there's one per file, this is the "test scope"
describe('Header Menu', function() {

    // runs before every `it()` 
    beforeEach(function () {
        cy.visit('https://manacentre.com/')
    })

    // this defines each test
    it('When click on the about button it should open the about page', function() {
        cy.get('.link-about').click()

        cy.url().should('equal', 'https://manacentre.com/index.html')
    })

    it('When click on the consultations button it should open the consultations page', function(){
        cy.get('.link-consultations').click()

        cy.url().should('equal', 'https://manacentre.com/consultations.html')

    })

    it('When click on the events button, it should open the events page', function(){
        cy.get('.link-events').click()

        cy.url().should('equal', 'https://manacentre.com/events.html')
    })

    it('When click on the classes button, it should open the classes page', function(){
        cy.get('.link-courses').click()

        cy.url().should('equal', 'https://manacentre.com/courses.html')
    })

    it('When click on the products button, it should open the products page', function(){
        cy.get('.link-products').click()

        cy.url().should('equal', 'https://manacentre.com/products.html')
    })
})

