var express = require("express");
var app = express();
var compliments = require("./compliment.js");
var colors = require("./color.js");



app.set("view engine", "hbs");
app.use(express.static("public"));

app.listen(4000, function(){
  console.log("app listening on port 4000");
});


app.get("/", function(req, res){
  var randomCompliment = compliments.getRandomCompliment();
  var randomColor = colors.getRandomColor();
  res.render("index", {compliment: randomCompliment, color: randomColor});
});

app.get("/:name", function(req, res){
  var randomCompliment = compliments.getRandomCompliment();
  var randomColor = colors.getRandomColor();
  res.render("index", {compliment: randomCompliment, color: randomColor, name: req.params.name});
});


app.get("/new", function(req, res){
  res.render("new");
});
