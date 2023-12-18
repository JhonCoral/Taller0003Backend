import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { mascota } from "./mascotasModelo.js";
import { persona } from "./personamodelo.js";

const adopcion = db.define("adopcion", {
    id_registro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    id_mascota: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: mascota,
            key: "id_mascota",
        },
    },
    id_persona: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: persona,
            key: "id_persona",
        },
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

adopcion.belongsTo(mascota, { foreignKey: "id_mascota" });
adopcion.belongsTo(persona, { foreignKey: "id_persona" });

export { adopcion };
