/// <reference types="cypress" />

describe('BankClient App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Displays home screen', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
  })

  it('Go to Scan screen', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.get('[data-cy=camera]')
  })

  it('Scaned document approved', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.intercept('POST', '/evaluations', { summary: { outcome: 'Approved' } }).as('evaluateDocumentSuccess')
    cy.wait('@evaluateDocumentSuccess', { timeout: 60000 }).then(({ response }) => {
      if (response.statusCode !== 200) {
        throw new Error('Error validating document')
      }
    })
    cy.get('[data-cy=document-accepted]')
  })

  it('Scaned document failed', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.intercept('POST', '/evaluations', { summary: { outcome: 'Too Much Glare' } }).as('evaluateDocumentFail')
    cy.wait('@evaluateDocumentFail', { timeout: 60000 }).then(({ response }) => {
      if (response.statusCode !== 200) {
        throw new Error('Error validating document')
      }
    })
    cy.get('[data-cy=camera]').should('have.css', 'outline', 'rgb(192, 0, 0) solid 2px')
  })

  it('Cancel scan', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.get('[data-cy=scan-cancel]').click();
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
  })

  it('Cancel scan after validate document failed', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.intercept('POST', '/evaluations', { summary: { outcome: 'Too Much Glare' } }).as('evaluateDocumentFail')
    cy.wait('@evaluateDocumentFail', { timeout: 60000 }).then(({ response }) => {
      if (response.statusCode !== 200) {
        throw new Error('Error validating document')
      }
    })
    cy.get('[data-cy=scan-cancel]').click();
    cy.get('[data-cy=document-status]')
    cy.get('[data-cy=button-retake-picture] span').should('have.text', 'Retake picture')
  })

  it('Retake picture', () => {
    cy.get('[data-cy=app-title]').should('have.text', 'BankClient')
    cy.get('[data-cy=home-title]').should('have.text', 'Scan your ID')
    cy.get('[data-cy=button-take-picture] span').should('have.text', 'Take picture')
    cy.get('[data-cy=button-take-picture]').click();
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.intercept('POST', '/evaluations', { summary: { outcome: 'Too Much Glare' } }).as('evaluateDocumentFail')
    cy.wait('@evaluateDocumentFail', { timeout: 60000 }).then(({ response }) => {
      if (response.statusCode !== 200) {
        throw new Error('Error validating document')
      }
    })
    cy.get('[data-cy=scan-cancel]').click();
    cy.get('[data-cy=document-status]')
    cy.get('[data-cy=button-retake-picture] span').should('have.text', 'Retake picture')
    cy.get('[data-cy=button-retake-picture]').click()
    cy.get('[data-cy=scan-title]').should('have.text', 'Take picture')
    cy.get('[data-cy=camera]')
  })
})
