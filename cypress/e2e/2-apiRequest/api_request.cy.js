describe('Pruebas de API con Cypress', () => {
  
  it('Extrae datos de un JSON y verifica un valor concreto del JSON', () => {
    // Obtén la URL de la API desde el archivo de configuración
    const apiUrl = Cypress.env('apiBaseUrl');
  
    // Realiza la solicitud GET a la API
    cy.request('GET', apiUrl).then((response) => {
      // Verifica que el estado HTTP sea 200
      expect(response.status).to.eq(200);
      
      // Verifica que el JSON contenga la propiedad 'title' con el valor esperado
      expect(response.body).to.have.property(
        'title',
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      );
    });
  });
});

  
  