import express from "express";
import  empleadosRutas from './routes/employees.routes.js';//Exportamos las rutas
import pingRuta from './routes/ping.routes.js'

const app = express();
const port = 3000;

app.use(pingRuta);
app.use(empleadosRutas);//De esta manera nuestras rutas estan en uso

app.listen(port, () => {
    console.log("Corriendo sin problemas");
})