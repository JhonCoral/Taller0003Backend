import express from "express";
import {  crear, getPersonas, buscarById, actualizar, eliminar } from "../controladores/personacontroladores.js";


const routerPersona = express.Router()

routerPersona.get("/mostrar", (req,res)=>{
    getPersonas(req,res)
})

routerPersona.post("/crear", (req,res)=>{
    crear(req,res)
})

routerPersona.get("/buscar/:id_persona", (req,res)=>{
    buscarById(req,res)
})

routerPersona.put("/actualizar/:id_persona", (req,res)=>{
    actualizar(req,res)
})

routerPersona.delete("/eliminar/:id_persona", (req,res)=>{
    eliminar(req,res)
})

export {routerPersona}
