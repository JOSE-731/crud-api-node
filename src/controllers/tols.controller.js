import {pool} from "../database/conexion.js";//Exportamos la conexion de la base de datos

export const testDB =  async (req, res) => {
    const [result] = await pool.query('SELECT 2 + 1 as result;')
    res.json(result[0]);
}