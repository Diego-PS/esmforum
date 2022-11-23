describe('Segundo teste E2E do ESM Forum', () => {
    it('Cadastrando uma resposta', () => {
      cy.visit('/respostas/?id_pergunta=6')
      cy.get('textarea[name="resposta"]').should('be.visible').type('1+1=2');
      cy.get('input[type="submit"]').should('be.visible').click();
      cy.contains('Sua resposta foi cadastrada com sucesso.').should('be.visible');
  
      cy.visit('/respostas/?id_pergunta=6');
      cy.get('table').contains('1+1=2');
    })
  })