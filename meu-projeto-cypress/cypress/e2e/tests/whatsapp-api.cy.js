describe('Validação do serviço de WhatsApp', () => {
    it('Deve retornar o script do WhatsApp com o código correto', () => {
      cy.request({
        method: 'GET',
        url: 'https://nexdom.tec.br/wp-content/cache/min/1/wp-content/plugins/wp-whatsapp/assets/js/whatsapp-popup.js?ver=1742912183',
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        // Verifique a presença de elementos ou funções-chave no script
        expect(response.body).to.include('njtWhatsApp.ready');  // Busca pela inicialização da função
        expect(response.body).to.include('njtWhatsApp.createWidget');  // Verifica a criação do widget
        expect(response.body).to.include('document.body.dispatchEvent');  // Confirma o disparo do evento
      });
    });
  });
  