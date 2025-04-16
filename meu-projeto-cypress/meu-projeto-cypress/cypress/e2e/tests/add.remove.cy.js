describe('Acessar tela A/B Test Control', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/abtest') // Acessa a página A/B Test Control
    })

    it('Deve verificar o título da página', () => {
        cy.get('h3').should('have.text', 'A/B Test Control').and('be.visible')
    })

    it('Deve verificar o texto', () => {
        // Aguarda que o conteúdo esteja presente por um tempo maior
        cy.get('div', { timeout: 15000 }).contains('A/B Test Control').should('be.visible')
        cy.get('div', { timeout: 15000 }).contains('Also known as split testing').should('be.visible')
    })
})
