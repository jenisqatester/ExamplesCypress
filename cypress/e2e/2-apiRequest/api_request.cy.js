describe('Pruebas de API con Cypress', () => {
    it('Extrae datos de un JSON y verifica un valor', () => {
      const apiUrl = Cypress.env('apiBaseUrl');
  
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property(
          'title',
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        );
      });
    });
  });
  
  