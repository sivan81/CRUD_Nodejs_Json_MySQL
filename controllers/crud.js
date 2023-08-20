// Importación de la conexión a la base de datos
const conexion = require('../database/db');

// Función para guardar un nuevo registro
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;

    // Inserta un nuevo registro en la tabla 'users'
    conexion.query('INSERT INTO users SET ?',{user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            // Redirige a la página principal después de guardar   
            res.redirect('/');         
        }
});
};

// Función para actualizar un registro existente
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;

    // Actualiza un registro en la tabla 'users' basado en el ID
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{ 
            // Redirige a la página principal después de actualizar          
            res.redirect('/');         
        }
});
};