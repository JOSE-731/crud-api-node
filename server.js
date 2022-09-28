import express from "express";
import {pool} from "./database/conexion.js";//Exportamos la conexion de la base de datos
const app = express();

const port = 3000;

//Validar conexion a la base de datos

app.get("/test/db", async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 as result;')
    res.json(result[0]);
})
app.get("/empleados", (req, res) => res.send("retornando empleados"))

app.post("/empleados", (req, res) => res.send("creando empleados"))

app.put("/empleados", (req, res) => res.send("editando empleados"))

app.delete("/empleados", (req, res) => res.send("eliminando empleados"))

app.listen(port, () => {
    console.log("Corriendo sin problemas");
})