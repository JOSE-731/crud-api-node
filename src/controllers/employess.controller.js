import { pool } from '../database/conexion.js'
//Controladores que apuntan a una ruta

//Lista todos los empleados
export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM EMPLOYEE')
    res.send(rows)
}

//Muestra la informacion de un empleado
export const getEmpleado = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM EMPLOYEE WHERE id = ?", [
        id,
    ]);

    if (rows.length <= 0) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.send(rows)

}

//Crea un nuevo empleado
export const createEmpleados = async (req, res) => {
    const { name, salary } = req.body //Accedemos a lo que se envia en el request
    //Con rows accedemos al metodo que devuleve lo que se inserto
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
};

export const editEmpleados = (req, res) => res.send("Editando empleados");
export const deleteEmpleados = (req, res) => res.send("Eliminando empleados");