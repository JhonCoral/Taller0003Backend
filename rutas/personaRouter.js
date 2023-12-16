import express from "express";
import {  crear, getPersonas, buscarById, actualizar, eliminar } from "../controladores/personacontroladores.js";


const routerPersona = express.Router()

routerPersona.get("/", (req,res)=>{
    getPets(req,res)
})

routerPersona.post("/crear", (req,res)=>{
    crear(req,res)
})

routerPersona.get("/buscar/:id", (req,res)=>{
    buscarById(req,res)
})

routerPersona.put("/actualizar/:id", (req,res)=>{
    actualizar(req,res)
})

routerPersona.delete("/eliminar/:id", (req,res)=>{
    eliminar(req,res)
})

export {routerPersona}
