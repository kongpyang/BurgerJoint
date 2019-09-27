var Sequelize = require("sequelize");
var sequelize = require("../db/db");

var BurgerModel = sequelize.define('burgerModel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devour: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = BurgerModel;