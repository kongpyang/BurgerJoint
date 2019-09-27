var Sequelize = require('sequelize');

var sequelize = new Sequelize("burgers_db", process.env.DB_USER, process.env.PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports = sequelize;
