import connectiondb from "../database/connection.js";

export let getClientes = (req, res) => {
    console.log ("Accediendo a la ruta get /clientes")
    res.status (200).json ({
        message: "Ruta de los Clientes",
        state: "successly"
    })

}

export let postClientes = (req, res) => {
    console.log ("El cliente se ha agregado exitosamente")
}

export let mainRoute = (req, res) => {
    console.log ("Accdiendo a la ruta principal /")
    res.status (299).json ({
        message: "Bienvenidso a la ruta principal /",
        state: "successly"
    })
}