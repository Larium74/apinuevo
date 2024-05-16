import express from "express"
import connectiondb from "./database/connection.js"
import routerClientes from "./routes/clientes.routes.js"
import cors from "cors"


let app = express ()
const PORT = 3000

app.use (cors ())
app.use (express.json ())
app.use (express.urlencoded ({extended: false}))

app.use ("/api", routerClientes)



app.listen (PORT, ()=> console.log ("Servidor inicializado en el puerto "+PORT))