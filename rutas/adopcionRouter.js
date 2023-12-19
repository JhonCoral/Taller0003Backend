import express from "express";
import { crear, getAdopciones, buscarById, actualizar, eliminar } from "../controladores/adopcioncontroladores.js";

const routeradopciones = express.Router();

routeradopciones.get("/mostrar", (req, res) => {
    getAdopciones(req, res);
});

routeradopciones.post("/crear", (req, res) => {
    crear(req, res);
});

routeradopciones.get("/buscar/:id_registro", (req, res) => {
    buscarById(req, res);
});

routeradopciones.put("/actualizar/:id_registro", (req, res) => {
    actualizar(req, res);
});

routeradopciones.delete("/eliminar/:id_registro", (req, res) => {
    eliminar(req, res);
});

export { routeradopciones };
