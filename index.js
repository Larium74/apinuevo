import express from "express"
import connectiondb from "./database/connection.js"
import routerClientes from "./routes/clientes.routes.js"

let app = express ()
const PORT = 3000
app.use (routerClientes)



app.listen (PORT, ()=> console.log ("Servidor inicializado en el puerto "+PORT))