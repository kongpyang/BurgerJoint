var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/burgersController");
app.use(routes);

var PORT = process.env.PORT || 8080;

var sequelize = require("./db/db");

//Syncing our sequelize models and then starting our Express app
sequelize.sync().then(function(result) {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
   });
});
  