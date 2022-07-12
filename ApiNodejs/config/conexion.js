const mysql = require('mysql');

const conexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Gorda300120',
    port: 3306,
    database: 'db_ControlInventarios',
});

conexion.connect((error)=>{
    if(error){
        console.log('Ocurrio un error: ' + error)
    }
    else
    {
        console.log('¡Buena conexión!')
    }
});

module.exports = conexion;