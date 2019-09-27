var Sequelize = require('sequelize');

<<<<<<< HEAD
var sequelize = new Sequelize("burgersdb", "root", "root", {
=======
var sequelize = new Sequelize("burgers_db", process.env.DB_USER, process.env.PASS, {
>>>>>>> 5271fbd4d1a60cfd5c2fddc9d59c3978a32ace1e
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports = sequelize;
