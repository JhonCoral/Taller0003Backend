
import Sequelize  from "sequelize";

import {db} from "../database/conexion.js";

const mascota = db.define("patitas",{
    id_mascota:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: true
    }
})



export {mascota}

