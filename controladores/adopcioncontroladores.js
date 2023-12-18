import { adopcion } from "../modelos/adopcionmodelo.js";

// Crear una nueva adopción
const crearadopcion = async (req, res) => {
    try {
        const nuevaadopcion = {
            id_mascota: req.body.id_mascota,
            id_persona: req.body.id_persona,
            estado: req.body.estado
        };

        // Usar Sequelize para crear el recurso
        const resultado = await adopcion.create(nuevaadopcion);

        res.status(200).json({ mensaje: "Registro de adopción creado correctamente", resultado });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al crear el registro de adopción: ${error.message}` });
    }
};

// Obtener todas las adopciones
const getadopciones = async (req, res) => {
    try {
        const adopciones = await adopcion.findAll();
        res.status(200).json(adopciones);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al obtener las adopciones: ${error.message}` });
    }
};

// Buscar una adopción por ID
const buscaradopcionById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ mensaje: "El parámetro 'id' es requerido." });
        }

        const adopcion = await adopcion.findByPk(id);

        if (!adopcion) {
            return res.status(404).json({ mensaje: "Adopción no encontrada." });
        }

        res.status(200).json(adopcion);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al buscar la adopción por ID: ${error.message}` });
    }
};

// Actualizar información de una adopción por ID
const actualizaradopcion = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_mascota, id_persona, estado } = req.body;

        if (!id_mascota && !id_persona && !estado) {
            res.status(400).json({ mensaje: "Los campos 'id_mascota', 'id_persona' o 'estado' son requeridos para actualizar." });
            return;
        }

        const adopcion = await adopcion.findByPk(id);

        if (!adopcion) {
            res.status(404).json({ mensaje: "Adopción no encontrada." });
            return;
        }

        await adopcion.update({ id_mascota, id_persona, estado });
        res.status(200).json({ mensaje: "Registro de adopción actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al actualizar el registro de adopción: ${error.message}` });
    }
};

// Eliminar una adopción por ID
const eliminaradopcion = async (req, res) => {
    try {
        const { id } = req.params;
        const adopcion = await adopcion.findByPk(id);

        if (!adopcion) {
            res.status(404).json({ mensaje: "Adopción no encontrada." });
            return;
        }

        await adopcion.destroy();
        res.status(200).json({ mensaje: "Registro de adopción eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al eliminar el registro de adopción: ${error.message}` });
    }
};

export { crearadopcion, getadopciones, buscaradopcionById, actualizaradopcion, eliminaradopcion };
