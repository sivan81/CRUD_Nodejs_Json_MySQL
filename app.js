// Importación de Express y creación de la aplicación
const express = require('express');
const app = express();

// Configuración del motor de vistas 'ejs'
app.set('view engine','ejs');

// Middleware para manejar datos enviados desde formularios
app.use(express.urlencoded({extended:false}));

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Utiliza el enrutador definido en './router' para manejar las rutas
app.use('/', require('./router'));

// Inicia el servidor en el puerto 5000
app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});