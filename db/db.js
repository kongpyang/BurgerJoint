var Sequelize = require('sequelize');

var sequelize = new Sequelize("lsbba3gnd73kfkua", "x9czzi7n8xxgy0hd", "rjt9gjr6x0iqrcxq", {
    dialect: "mysql",
    host: "localhost",
    port:"8889"
});

module.exports = sequelize;
