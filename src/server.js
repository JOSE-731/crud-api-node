import express from "express";
import  empleadosRutas from './routes/employees.routes.js'//Exportamos las rutas
import pingRuta from './routes/ping.routes.js'
import {testDB} from './controllers/tols.controller.js'

const app = express();

const port = 3000;

//Validar conexion a la base de datos, se utiliza una funcion asyncrona y se utiliza el objeto de conexion y se hace una consulta
//Si todo sale bien devuelve la suma
app.get("/test/db", testDB)

app.use(empleadosRutas);//De esta manera nuestras rutas estan en uso
app.use(pingRuta)

app.listen(port, function(){
    console.log("Corriendo sin problemas")
})