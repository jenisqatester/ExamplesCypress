describe('Prueba de navegación y verificación de datos en JSONPlaceholder', () => {
    it('Visita la página extraigo el encabezado y verifico que es el esperado', () => {
      // Cargar el texto esperado desde el fixture
      cy.fixture('testData').then((data) => {
      // Navegar a la página
      cy.visit('/');
  
      // Extraer el texto, eliminar los espacios adicionales y validarlo
      cy.get('h1')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal('JSONPlaceholder');
        });
    });
  });
});
  