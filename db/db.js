var Sequelize = require('sequelize');

var sequelize = new Sequelize("burgersdb", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port:"8889"
});

module.exports = sequelize;
