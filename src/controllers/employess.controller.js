import { pool } from '../database/conexion.js'
//Controladores que apuntan a una ruta

//Lista todos los empleados
export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM EMPLOYEE')
    res.send(rows)
}

//Muestra la informacion del empleado por su id
export const getEmpleado = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM EMPLOYEE WHERE id = ?", [
        id,
    ]);

    if (rows.length <= 0) {
        return res.status(404).json({ message: "Empleado no encontrado" });
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

//Eliminar empleado
export const deleteEmpleados = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.sendStatus(204);
};
export const editEmpleados = (req, res) => res.send("Editando empleados");