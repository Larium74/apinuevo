import connectiondb from "../database/connection.js";

export let getClientes = (req, res) => {
    console.log ("Accediendo a la ruta get /clientes")
    res.send ("Aquí se mostrarán los clientes")

}

export let postClientes = (req, res) => {
    console.log ("El cliente se ha agregado exitosamente")
}

export let mainRoute = (req, res) => {
    console.log ("Accdiendo a la ruta principal /")
    res.send ("Bienvenidos a la ruta principal")
}