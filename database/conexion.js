import {createPool} from 'mysql2/promise' //Importamos el modulo y lo instalamos con :  npm i mysql2, se le hace un /promise para trabajar con los cambios de la ultima version

//Createpool es el objeto que tiene myslq2 para crear conexiones
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'node-empleados'
})