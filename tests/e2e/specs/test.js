// https://docs.cypress.io/api/introduction/api.html

const { expect } = require("chai");

describe('Primer Test CRUD', () => {

  it('Edita Stock en privado y revisa en publico', () => {
    cy.viewport(1280,720);
    cy.visit('/')
    cy.wait(4000)
    const btnLogin = cy.get('[href="/login"] > .v-btn > .v-btn__content > .v-icon')
    btnLogin.click();
    const inputMail = cy.get('#input-154')
    inputMail.type('pedro@gmail.com')
    const inputPass = cy.get('#input-157')  
    inputPass.type('123456')
    const btnIngreso = cy.get('.mr-4 > .v-btn__content')
    btnIngreso.pause().click()
    cy.wait(3000)
    const editPrimerRepuesto = cy.get(':nth-child(1) > :nth-child(7) > .mr-2')
    editPrimerRepuesto.click()
    const inputStock = cy.get('#input-223')
    inputStock.clear()
    inputStock.type('100')
    const bntEditarModal = cy.get(':nth-child(3) > .v-btn__content')
    bntEditarModal.pause().click()
    cy.wait(3000)
    const repuestosBtn = cy.get('[href="/repuestos"] > .v-btn > .v-btn__content')
    repuestosBtn.click()
    const primerStock = cy.get('tbody > :nth-child(1) > :nth-child(6)')
    primerStock.should('have.contain',100)
  })
})
