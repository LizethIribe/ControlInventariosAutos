//Crear constantes
const router = require('express').Router()
const { Router, application } = require('express');
const conexion = require('./config/conexion')

//Obtener registros
router.get('/', (req, res)=>{
    let sql = 'SELECT * FROM tb_Catalogo'
    conexion.query(sql,(error, rows, fields)=>{
        if(error) throw error;
        else{
            res.json(rows)
        }
    })
})

//Obtener un registro
router.get('/:idA', (req, res)=>{
    const {idA} = req.params
    let sql = 'SELECT * FROM tb_Catalogo where id = ?'
    conexion.query(sql,[idA],(error, rows, fields)=>{
        if(error) throw error;
        else{
            res.json(rows)
        }
    })
})

//Agregar un registro
router.post('/', (req, res)=>{
    const {nombre, marca, logo} = req.body

    let sql = `INSERT INTO tb_Catalogo(nombre, marca, logo) VALUES ('${nombre}','${marca}','${logo}')`
    conexion.query(sql, (error, rows, fields)=>{
        if(error) throw error
        else{
            res.json({status: 'Se agrego registro correctamente'})
        }
    })
})  

//Eliminar un registro
router.delete('/:idA', (req, res)=>{
    const{idA}=req.params
    let sql = `DELETE FROM tb_Catalogo WHERE id = '${idA}'`
    conexion.query(sql, (error, rows, fields)=>{
        if (error) throw error
        else{
            res.json({status: 'Se elimino registro correctamente'})
        }
    })
})

//Modificar un registro
router.put('/:idA', (req, res)=>{
    const{idA} = req.params
    const{nombre, marca, logo} = req.body
    let sql = `UPDATE tb_Catalogo SET nombre = '${nombre}', marca = '${marca}', logo = '${logo}' WHERE id = '${idA}'`
    conexion.query(sql, (error, rows, fields)=>{
        if (error) throw error
        else{
            res.json({status: 'Se modifico el registro correctamente'})
        }
    })
})

//Exportar rutas
module.exports = router






