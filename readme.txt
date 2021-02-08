Pasos para crear un proyecto de React desde 0

1. git init
2. npm init -y  (Configuración Predefinida)
3. Instalar React: npm install react react-dom
4. Crear la estructura de carpetas
5. Paquete para trabajar con Webpack
    npm install webpack webpack-cli webpack-dev-server --save-dev
6. Plugins de webpack para poder manipular el html: 
    npm install html-webpack-plugin html-loader
7. Plugins para poder transpilar el .jsx a js 
    npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev
8. Instalar los paquetes para trabajar con estilos:
    npm install css-loader mini-css-extract-plugin --save-dev
9. Realizar la configuración de Webpack
    Crear el archivo webpack.config.js en la raíz del proyecto.
10. Crear el archivo .babelrc
11. Agregar los comandos en package.json
    "start": "webpack serve",
    "build": "webpack --mode production"
12. Para aplicar estandares de código:
    npm install -g eslint
    npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
13. Crear el archivo .eslintrc
14. Instalar los paquetes para trabajar con Prettier
    npm install prettier eslint-plugin-prettier eslint-config-prettier
15. Crear el archivo .prettierrc
16. Instalamos los paquetes para utilizar Husky, que permite agregar Hooks a Git para que cuano hacemos commit se ejecuten las pruebas.
    npm install husky --save-dev
17. Agregamos la configuración de Husky en el package.json

Tips:
Para el manejo de invocaciones a APIs (similiar a fetch): npm install axios

Para aplicar Continuous Integration con Firebase:
    * Crear el proeycto en Firebase
    * npm install -g firebase-tools
        firebase login
        firebase init
