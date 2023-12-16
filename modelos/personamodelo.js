import Sequelize  from "sequelize";

import {db} from "../database/conexion.js";


const persona = db.define("persona",{
    id_persona:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    direccion:{
        type: Sequelize.STRING,
        allowNull:true
    },
    telefono:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

export{persona}