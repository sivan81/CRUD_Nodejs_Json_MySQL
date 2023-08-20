// Importación del módulo 'mysql'
const mysql=require('mysql');


// Creación de una conexión a la base de datos MySQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
})

// Conexión a la base de datos
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: ' + error);
        return
    }
    console.log('¡Conectado a la BD MySQL!');
})

// Exportación de la conexión para usarla en otros archivos
module.exports = conexion;