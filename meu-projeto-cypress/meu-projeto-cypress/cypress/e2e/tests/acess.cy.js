describe('Acessando a página The Internet', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/') // Acessa a página principal
    })
  
    it('Deve verificar o título da página', () => {
      cy.title().should('eq', 'The Internet') // Valida o título da página
    })
  
    it('Deve conter a lista de exemplos', () => {
        cy.get('ul', { timeout: 10000 }) // Aguarda até 10 segundos para garantir que a lista foi carregada
          .should('be.visible') // Garante que o <ul> está visível
          .find('li') // Busca os <li> dentro da lista
          .should('have.length.greaterThan', 10) // Confirma que há mais de 10 itens na lista
      })
  })
  