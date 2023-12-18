import express from "express";
import { crearadopcion, getadopciones, buscaradopcionById, actualizaradopcion, eliminaradopcion } from "../controladores/adopcioncontroladores.js";

const routeradopciones = express.Router();

routeradopciones.get("/", (req, res) => {
    getadopciones(req, res);
});

routeradopciones.post("/crear", (req, res) => {
    crearadopcion(req, res);
});

routeradopciones.get("/buscar/:id", (req, res) => {
    buscaradopcionById(req, res);
});

routeradopciones.put("/actualizar/:id", (req, res) => {
    actualizaradopcion(req, res);
});

routeradopciones.delete("/eliminar/:id", (req, res) => {
    eliminaradopcion(req, res);
});

export { routeradopciones };
