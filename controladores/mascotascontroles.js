import { mascota } from "../modelos/mascotasModelo.js"

//Crear un recurso

const crear = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({ mensaje: "El nombre no puede estar vacio." })
        return
    }
    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipo: req.body.tipo
    }

    //Usar Sequeliza para crear el recurso
    mascota.create(dataset).then((resultado) => {
        res.status(200).json("Registro creado correctamente")
    }).catch(err => res.send({ mensaje: `Error al crear el registro ::: ${err} `}))
}

const getPets = async (req, res) => {
    try {
        const pets = await mascota.findAll();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al obtener las mascotas ::: ${error.message} `});
    }
};


const buscarById = async (req, res) => {
    try {
        const { id_mascota } = req.params;
        
        const pet = await mascota.findByPk(id_mascota);
        if (!id_mascota) {
            return res.status(400).json({ mensaje: `El parámetro 'id' es requerido. ${id_mascota} `});
        }
        
        if (!pet) {
            return res.status(404).json({ mensaje: "Mascota no encontrada." });
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ mensaje: `Error al buscar la mascota por ID: ${error.message}` });
    }
};

const actualizar = async (req, res) => {
    try {
        const { id_mascota } = req.params;
        const { nombre, edad,tipo } = req.body;

        if (!nombre && !edad && !tipo) {
            res.status(400).json({ mensaje: "Los campos 'nombre' o 'edad' son requeridos para actualizar." });
            return;
        }
        const pet = await mascota.findByPk(id_mascota);
        if (!pet) {
            res.status(404).json({ mensaje: "Mascota no encontrada." });
            return;
        }
        await pet.update({ nombre, edad,tipo });
        res.status(200).json({ mensaje: "Registro actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al actualizar la mascota: ${error.message}` });
    }
};

const eliminar = async (req, res) => {
    try {
        const { id_mascota } = req.params;
        const pet = await mascota.findByPk(id_mascota);
        if (!pet) {
            res.status(404).json({ mensaje: "Mascota no encontrada." });
            return;
        }
        await pet.destroy();
        res.status(200).json({ mensaje: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al eliminar la mascota: ${error.message}` });
    }
};

export { crear, getPets, buscarById, actualizar, eliminar };