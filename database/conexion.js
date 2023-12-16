import Sequelize  from "sequelize";

const db = new Sequelize("pets","petss","1234",{
    dialect: "mysql",
    host: "localhost"
});

export {db}