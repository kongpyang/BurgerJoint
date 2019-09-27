var express = require("express");

var router = express.Router();

var Burger = require("../models/burgerModel")

router.get("/index", function(req, res) {
    Burger.findAll().then(function(burgers) {
        res.render("index", {
            burgers: burgers
        });
    }).catch(function(error) {
        console.log(error);
    });
});

router.post("/api/burgers", function(req, res) {
    Burger.create({
        name: req.body.name
    }).then(function(result) {
        res.redirect("/index");
    }).catch(function(error) {
        console.log(error);
    });

});

router.post("/api/burgers/:id", function(req, res) {
    Burger.findByPk(req.params.id)
    .then(function(burger) {
        burger.devour = true;
        return burger.save();
    })
    .then(function() {
        res.redirect("/index");
    })
    .catch(function(error) {
        console.log(error);
    });

});

module.exports = router;