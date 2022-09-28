import { pool } from '../database/conexion.js'
//Controladores que apuntan a una ruta
export const getEmpleados = (req, res) => res.send("retornando empleados");

export const createEmpleados = async (req, res) => {
    const {name, salary} = req.body //Accedemos a lo que se envia en el request
    //Con rows accedemos al metodo que devuleve lo que se inserto
    const [rows] = await  pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name, 
        salary
    })
};

export const editEmpleados = (req, res) => res.send("Editando empleados");
export const deleteEmpleados = (req, res) => res.send("Eliminando empleados");