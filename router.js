// Importación de Express y creación de enrutador
const express = require('express');
const router = express.Router();

// Importación del módulo de conexión a la base de datos
const conexion = require('./database/db');

// Ruta GET para la página principal
router.get('/', (req, res)=>{   
    // Consulta todos los registros en la tabla 'users'  
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {  
            // Renderiza la plantilla 'index.ejs' con los resultados                     
            res.render('index.ejs', {results:results});            
        }   
    })
})


// Ruta GET para la creación de un nuevo registro
router.get('/create', (req,res)=>{
    // Renderiza la plantilla 'create.ejs' para crear un nuevo registro
    res.render('create');
})

// Ruta GET para la edición de un registro
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    // Consulta un registro por su ID y renderiza 'edit.ejs' con los resultados
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});


// Ruta GET para la eliminación de un registro
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    // Elimina un registro por su ID y redirige a la página principal
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});


// Importación del módulo de controladores
const crud = require('./controllers/crud');


// Rutas POST para guardar y actualizar registros
router.post('/save', crud.save);
router.post('/update', crud.update);


// Exportación del enrutador
module.exports = router;