require('./config/conexion');

const express = require ('express');

//Puerto de ejecución del servidor
const port = (process.env.port || 3000);

//Instancia de express
const app = express();

//Tipos de datos a admitir
app.use(express.json())

//Configurar puerto
app.set('port', port);

//Rutas
app.use('/api', require('./rutas'))

//Iniciar express
app.listen(app.get('port'), (error)=>{
    if (error){
        console.log('Error al iniciar servidor: ' + error)
    }
    else{
        console.log('Servidor iniciado en el puerto: ' + port)
    }
})