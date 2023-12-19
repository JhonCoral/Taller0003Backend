// Importa el modelo de peoples
import { persona } from "../modelos/personamodelo.js";

// Crear un recurso
const crear = async (req, res) => {
    try{
    if (!req.body.nombre || !req.body.direccion || !req.body.telefono) {
        res.status(400).json({ mensaje: "Nombre, dirección y teléfono son campos obligatorios." });
        return;
    }
    const dataset = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    };

    // Usa Sequelize para crear el recurso
 // Usar Sequelize para crear el recurso
    const resultado = await persona.create(dataset);

    res.status(200).json({ mensaje: "Registro de persona creado correctamente", resultado });
    } catch (error) {
    res.status(500).json({ mensaje: `Error al crear el registro de personas: ${error.message}` });
    }
};

// Obtener todas las peoples
const  getPersonas = async (req, res) => {
    try {
        const peoples = await persona.findAll();
        res.status(200).json(peoples);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al obtener las peoples: ${error.message}` });
    }
};

// Buscar por ID
const buscarById = async (req, res) => {
    try {
        const { id_persona } = req.params;
        if (!id_persona) {
            return res.status(400).json({ mensaje: "El parámetro 'id' es requerido." });
        }
        const people = await persona.findByPk(id_persona);
        if (!people) {
            return res.status(404).json({ mensaje: "people no encontrada." });
        }
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al buscar la people por ID: ${error.message}` });
    }
};

// Actualizar people
const actualizar = async (req, res) => {
    try {
        const { id_persona } = req.params;
        const { nombre, direccion, telefono } = req.body;

        if (!nombre && !direccion && !telefono) {
            res.status(400).json({ mensaje: "Los campos 'nombre', 'direccion' o 'telefono' son requeridos para actualizar." });
            return;
        }

        const people = await persona.findByPk(id_persona);
        if (!people) {
            res.status(404).json({ mensaje: "people no encontrada." });
            return;
        }

        await people.update({ nombre, direccion, telefono });
        res.status(200).json({ mensaje: "Registro actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al actualizar la people: ${error.message}` });
    }
};

// Eliminar people
const eliminar = async (req, res) => {
    try {
        const { id_persona } = req.params;
        const people = await persona.findByPk(id_persona);
        if (!people) {
            res.status(404).json({ mensaje: "people no encontrada." });
            return;
        }

        await people.destroy();
        res.status(200).json({ mensaje: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al eliminar la people: ${error.message}` });
    }
};

export { crear, getPersonas, buscarById, actualizar, eliminar };
