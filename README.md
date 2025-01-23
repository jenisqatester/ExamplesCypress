# Introducción 
Este proyecto se ha creado para montar una prueba de concepto de como comenzar a relizar las pruebas end to end o API para XXXXXXX usando Cypress.

Cypress es una herramienta de prueba de extremo a extremo (end-to-end) para aplicaciones web modernas. Permite a los QA, desarrolladores y a todo aquel que quiera escribir, ejecutar y depurar pruebas automatizadas en entorno controlado que simula la interacción de un usuario real con la aplicación.

Entonces, este proyecto Cypress es simplemente un conjunto de archivos y carpetas organizados de acuerdo con las convenciones de Cypress. Dentro de un proyecto Cypress, generalmente encontrarás archivos de configuración, scripts de prueba, fixtures(datos de prueba), y otros recursos necesarios para realizar pruebas automatizadas.

Algunas características que incluye Cypress:

1. API intuitiva: Cypress ofrece una API sencilla y fácil de entender que permite a los QAs, analistas y desarrolladores escribir pruebas de manera clara y concisa.
2. Visibilidad en tiempo real: Cypress proporciona una vista en tiempo real de las pruebas mientras se están ejecutando, lo que facilita la depuración y comprensión de lo que está sucediendo en cada paso de la prueba.
3. Grabaciones de video; Cypress puede grabar videos de las pruebas, lo que facilita la revisión y el análisis de los resultados de la prueba.
4. Rápido tiempo de espera automático: Cypress automáticamente espera por los elementos de la página y las interacciones, lo que ayuda a evitar flaki(inestables) pruebas debido a tiempos de espera incorrectos.

En resumen, el objetivo de este proyecto es un entorno donde desarrollaremos y ejecutaremos las pruebas automatizadas para garantizar y fiabilidad de XXXXXXX.

# Tareas iniciales antes de clonar el repositorio
1. Instalación de Git (en caso de no tenerlo).
 * Descarga e instala Git según tu sistema operativo.
 * Configurar usuario y correo electrónico:
     * Abre tu terminal
     * Ejecuta los siguientes comandos:
        git config --global user.name "YYYYYYYYYYY"
        git config --global user.mail YYYYYYYYYYY@babelgroup.com
 * Verificar Configuración
     Ejecutando git config --list para confirmar que la configuración se ha aplicado correctamente.

2. Instalacion de Visual Studio Code.
   Descarga e instala Visual Studio Code desde Internet

3. Instalación de Node.js y NPM
 * Descarga e instala Node.js desde Internet. Este es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera de un navegador web.
 * Verificar la instalación de Node.js y NPM
    Abre tu terminal
    Ejecuta node --version para verificar la versión de Node.js
    Ejecuta npm -v para verificar la versión de npm

4. Procedemos a clonar el repositorio https://github.com/jenisqatester/ExamplesCypress 

# Tareas posteriores despues de clonar el repositorio
1. Una vez clonado el repositorio abres la carpeta del repositorio clonado con VSCode.
2. Instalar Cypress:
   Abre tu terminal desde VSCode
   Ejecuta el siguiente comando: npm install cypress --save-dev para instalar cypress
3. Verfica la instalación de Cypress ejecutando npx cypress --version
4. Abrir el Dashboard de Cypress ejecutando npx cypress open para verificar que se ejecuta satisfactoriamente en nuestro entorno local.

# Estructura de Carpeta del proyecto
1. fixture: Utilizado para cargar información desde archivos externos a las pruebas.
2. e2e: Donde se escriben las pruebas.
3. package.lock.json: Archivo que permite recuperar todas las dependencial de Cypress


# Compilación y prueba
Antes de realizar un commit en el repositorio, es una práctica recomendada ejecutar las pruebas en tu entorno localhost para asegurarte de que todo funcione correctamente. Este paso garantiza que los cambios que estás a punto de enviar al repositorio no introduzcan errores en el código existente y que mantengan la integridad y la estabilidad del proyecto.

Para llevar a cabo esta verificación, sigue estos pasos:

1. Asegúrate de tener un entorno de desarrollo funcional: Antes de ejecutar las pruebas, verifica que tu entorno de desarrollo esté configurado correctamente y que la aplicación se ejecute sin problemas localmente.

2. Actualiza tu rama local: Si estás trabajando en una rama separada, asegúrate de actualizarla con la rama principal del repositorio antes de ejecutar las pruebas. Esto te permitirá probar tus cambios en un contexto actualizado.

3. Ejecuta las pruebas automatizadas: Utiliza el marco de pruebas automatizadas definido en el proyecto (por ejemplo, Cypress, Jest, Selenium, etc.) para ejecutar las pruebas relevantes.

4. Verifica los resultados de las pruebas: Después de que las pruebas se completen, revisa los resultados para asegurarte de que todas las pruebas pasaron satisfactoriamente. Presta especial atención a cualquier prueba que haya fallado y asegúrate de comprender la causa raíz del problema.

5. Corrige cualquier problema identificado: Si alguna prueba falló o se encontraron problemas durante la ejecución de las pruebas, trabaja para solucionar estos problemas antes de continuar con el commit. Esto podría implicar la corrección de errores en el código, la actualización de las pruebas para reflejar los cambios realizados o la coordinación con otros miembros del equipo para resolver problemas de integración.

6. Confirma tus cambios: Una vez que estés seguro de que todas las pruebas han pasado y que tus cambios son sólidos, puedes proceder a realizar el commit en tu rama local. Asegúrate de incluir un mensaje descriptivo que explique los cambios realizados y el propósito del commit.

7. Luego realiza una pull request para solicitar una revisión de código de las pruebas a otro miembro del equipo QA. Esta pull request contiene los cambios necesarios para [describir brevemente las pruebas generadas]. Siempre antes de que se fusionen estos cambios en la rama principal (master), sería muy valioso contar una revisión por parte de otro miembro del equipo QA.


Siguiendo estos pasos, puedes garantizar que tus cambios sean revisados de manera efectiva y que se mantenga la calidad del código en el repositorio. Esto contribuye a la estabilidad y confiabilidad del proyecto a largo plazo.

# Contribución
¡Gracias por tu interés en contribuir al proyecto Cypress de XXXXXXXX!
Cypress es una herramienta de pruebas de extremo a extremo para aplicaciones web modernas que apunta a mejorar la calidad y la eficienca del desarrollo de software.


# Finalmente
Siguiendo estos pasos, deberías tener configurado tu entorno de desarrollo local de cypress correctamente.