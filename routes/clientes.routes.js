import {Router} from "express"
import { getClientes, mainRoute, postClientes } from "../controllers/clientes.js"

let routerClientes = Router ()


routerClientes.get ("/", mainRoute)
routerClientes.get ("/clientes", getClientes)
routerClientes.post ("clientes", postClientes)

export default routerClientes