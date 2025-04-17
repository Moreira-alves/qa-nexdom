describe('Fluxo completo na página inicial da Nexdom', () => {
  it('Deve assistir ao vídeo e depois clicar em "Saiba mais" para ir à página Sobre Nós', () => {
    // 1. Visita a página inicial
    cy.visit('https://nexdom.tec.br/')
    cy.url().should('include', 'nexdom.tec.br')

    // 2. Verifica que o iframe está visível e tem o atributo 'src' correto
    cy.get('iframe', { timeout: 150000 })
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'youtube')

    // 3. Aguarda alguns segundos simulando o tempo de visualização
    cy.wait(5000)

    // 4. Clica no botão "Saiba mais"
    cy.contains('Saiba mais', { timeout: 150000 }).click()

    // 5. Verifica se a URL redirecionou corretamente
    cy.url({ timeout: 10000 }).should('include', '/sobre-nos/')
  })
})
