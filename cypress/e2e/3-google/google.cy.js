Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Ignora errores en la página para que la prueba continúe
  });
  
  describe('Prueba con múltiples URLs', () => {
    
    it('Visita Google y luego la URL extraída', () => {

      cy.visit(Cypress.env('googleUrl')); // Usa la URL de Google
      cy.wait(2000);
      
      cy.get('#L2AGLb > .QS5gu').click();
      cy.wait(2000);
      
      cy.get('#APjFqb').type('Automatización');
      cy.wait(2000);
      
      cy.get('#jZ2SBf > .wM6W7d > span').click();
      cy.wait(2000);
  
      // Declarar variable para almacenar la URL
      let extractedURL = '';
  
      // Cambio de origen a Google.com si la URL cambia
      cy.origin('https://www.google.com', () => {
        cy.get('body').then(($body) => {
          const bodyText = $body.text(); // Obtener todo el texto
  
          // Buscar la línea que contiene "URL:"
          const urlMatch = bodyText.match(/URL:\s(https?:\/\/[^\s]+)/);
  
          if (urlMatch && urlMatch[1]) {
            extractedURL = urlMatch[1].trim();
            cy.log('URL extraída:', extractedURL);
  
            // Guardar la URL extraída en Cypress.env
            Cypress.env('extractedURL', extractedURL);
          } else {
            throw new Error('No se encontró la URL en la respuesta.');
          }
        });
      });
  
      cy.wait(3000);
  
      // Recuperar la URL extraída y visitarla
      cy.then(() => {
        extractedURL = Cypress.env('extractedURL');
        if (extractedURL) {
          cy.log('Visitando URL:', extractedURL);
          cy.wait(3000);
          cy.visit(extractedURL);
          //cy.visit('https://chatgpt.com/');
        } else {
          throw new Error('La URL extraída no está disponible.');
        }
      });
  
      cy.wait(3000);
    });
  });
  