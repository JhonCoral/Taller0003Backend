// Importa el modelo de personas
import { persona } from "../modelos/personamodelo.js";

// Crear un recurso
const crear = (req, res) => {
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
    persona.create(dataset).then((resultado) => {
        res.status(200).json("Registro creado correctamente")
    }).catch(err => res.send({ mensaje: `Error al crear el registro ::: ${err} `}))
};

// Obtener todas las personas
const getPersonas = async (req, res) => {
    try {
        const personas = await persona.findAll();
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al obtener las personas: ${error.message}` });
    }
};

// Buscar por ID
const buscarById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ mensaje: "El parámetro 'id' es requerido." });
        }
        const persona = await persona.findByPk(id);
        if (!persona) {
            return res.status(404).json({ mensaje: "Persona no encontrada." });
        }
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al buscar la persona por ID: ${error.message}` });
    }
};

// Actualizar persona
const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono } = req.body;

        if (!nombre && !direccion && !telefono) {
            res.status(400).json({ mensaje: "Los campos 'nombre', 'direccion' o 'telefono' son requeridos para actualizar." });
            return;
        }

        const persona = await persona.findByPk(id);
        if (!persona) {
            res.status(404).json({ mensaje: "Persona no encontrada." });
            return;
        }

        await persona.update({ nombre, direccion, telefono });
        res.status(200).json({ mensaje: "Registro actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al actualizar la persona: ${error.message}` });
    }
};

// Eliminar persona
const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const persona = await persona.findByPk(id);
        if (!persona) {
            res.status(404).json({ mensaje: "Persona no encontrada." });
            return;
        }

        await persona.destroy();
        res.status(200).json({ mensaje: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al eliminar la persona: ${error.message}` });
    }
};

export { crear, getPersonas, buscarById, actualizar, eliminar };
