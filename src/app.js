import express from "express";
import { routerMascotas } from "../rutas/mascotasRouter.js";
import { routerPersona } from "../rutas/personaRouter.js";
import { routeradopciones } from "../rutas/adopcionRouter.js";

import {db} from "../database/conexion.js"

// import bodyParser from 'body-parser'

//Crear instancia de express
const app = express()

//app.use(bodyParser.json())
app.use(express.json())


//Verificar conexion a Base de datos
db.authenticate().then(()=>{
    console.log(`Base de datos conectada de manera exitosa`);
}).catch(err=>{
    console.log(`Error al conectarse a la base de datos ::: ${err}`);
})

//Definir rutas
app.get("/", (req, res)=>{
    res.send("Empresa Huellitas en el corazon ")
})

//Rutas
app.use("/mascotas", routerMascotas)
app.use("/personas", routerPersona)
app.use("/adopcion", routeradopciones)
//Puerto de Servidor
const PORT = 8000



db.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Servidor inicializado en puerto ${PORT}`);
    })
}).catch(err=>{
    console.log(`Error al sincronizar base de datos ${err}`);
})