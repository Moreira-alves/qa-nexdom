describe('Validação do envio de formulário de contato (back-end)', () => {
    it('Deve enviar o formulário com sucesso para o endpoint admin-ajax.php', () => {
      cy.request({
        method: 'POST',
        url: 'https://nexdom.tec.br/wp-admin/admin-ajax.php',
        form: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
          action: 'elementor_pro_forms_send_form',
          post_id: '128',
          form_id: 'fecbca2',
          referer_title: 'Contato',
          queried_id: '128',
          'form_fields[name]': 'Matheus Teste',
          'form_fields[email]': 'matheus.teste@email.com',
          'form_fields[message]': 'Teste de envio do formulário via Cypress',
          'form_fields[field_67e0483]': '',
          'form_fields[field_5778e7b]': '',
          'form_fields[field_f77a763]': ''
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        console.log('Resposta:', response.body)
      })
    })
  })
  