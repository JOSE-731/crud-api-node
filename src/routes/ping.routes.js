import {Router} from 'express';
import {pool} from "../database/conexion.js";//Exportamos la conexion de la base de datos
const router = Router();

//Validar conexion a la base de datos, se utiliza una funcion asyncrona y se utiliza el objeto de conexion y se hace una consulta
//Si todo sale bien devuelve la suma
router.get("/test/db", async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 as result;')
    res.json(result[0]);
})

export default router;
