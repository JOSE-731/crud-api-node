import express from "express";
const app = express();

const port = 3000;

app.get("/empleados", (req, res) => res.send("retornando empleados"))

app.post("/empleados", (req, res) => res.send("creando empleados"))

app.put("/empleados", (req, res) => res.send("editando empleados"))

app.delete("/empleados", (req, res) => res.send("eliminando empleados"))

app.listen(port, () => {
    console.log("Corriendo sin problemas");
})