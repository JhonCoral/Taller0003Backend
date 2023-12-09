import express from "express";
import { crear, getPets, buscarById, actualizar, eliminar } from "../controladores/mascotascontroles.js";


const routerMascotas = express.Router()

routerMascotas.get("/", (req,res)=>{
    getPets(req,res)
})

routerMascotas.post("/crear", (req,res)=>{
    crear(req,res)
})

routerMascotas.get("/buscar/:id", (req,res)=>{
    buscarById(req,res)
})

routerMascotas.put("/actualizar/:id", (req,res)=>{
    actualizar(req,res)
})

routerMascotas.delete("/eliminar/:id", (req,res)=>{
    eliminar(req,res)
})

export {routerMascotas}

