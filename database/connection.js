import { createPool } from "mysql2/promise"
import { objectConnection } from "./objectConnection.js"

let connectiondb = createPool (objectConnection)

connectiondb.getConnection ()
    .then ((result)=> {console.log ("La conexión a la base de datos ha sido exitosa")})
    .catch ((error)=> console.log ("Hubo un error en la conexión a la base de datos "+error))


export default connectiondb