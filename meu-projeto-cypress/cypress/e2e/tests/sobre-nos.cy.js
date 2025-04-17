describe('Validação dos campos na página Sobre Nós da Nexdom', () => {
    beforeEach(() => {
      cy.visit('https://nexdom.tec.br/sobre-nos/')
    })
  
    it('Deve validar a seção "O início" na linha do tempo', () => {
        cy.contains('O início', { timeout: 10000 }).should('be.visible')
      
        cy.scrollTo('bottom')
      
        cy.contains('Essa importante trajetória', { timeout: 10000 })
          .should('be.visible')
      
        cy.get('img[src*="Group-314-300x175.jpg"]', { timeout: 10000 })
          .should('be.visible')
      })      

    it('Deve validar o campo "A Evolução"', () => {
        cy.contains('A evolução', { timeout: 10000 }).should('be.visible')
      
        cy.contains('Prevendo evoluções em tecnologia', { timeout: 10000 })
          .should('be.visible')
      })
      
  
    it('Deve validar o campo "A NEXDOM"', () => {
      cy.get('p', { timeout: 10000 })
        .contains('E com isso, o nascimento de uma nova empresa: NEXDOM Healthtech.')
        .should('be.visible')
    })
  
    it('Deve validar o campo "Nossa missão"', () => {
      cy.contains('Nossa missão', { timeout: 10000 }).should('be.visible')
    })
  
    it('Deve validar o campo "O que dizem nossos clientes?"', () => {
      cy.contains('O que dizem nossos clientes?', { timeout: 10000 }).should('be.visible')
    })
  })
  