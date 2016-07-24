var express = require("express");
var app = express();
var compliments = require("./compliment.js");
var colors = require("./color.js");
var bodyParser = require("body-parser");

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

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

app.get("/:name/new", function(req, res){
  var randomColor = colors.getRandomColor();
  res.render("new", {color: randomColor});
});

app.get("/:name", function(req, res){
  var randomCompliment = compliments.getRandomCompliment();
  var randomColor = colors.getRandomColor();
  res.render("index", {compliment: randomCompliment, color: randomColor, name: req.params.name});
});


// app.post("/:name/new", function(req, res){
//   var randomColor = colors.getRandomColor();
//
//   res.render("index",{
//     new_compliment:req.body.player_name, color:randomColor
//   })
// })

app.post("/", function(req, res){
  var name = req.body.player_name;
  res.redirect('/' + name);
});



app.post("/:name/new", function(req, res){
  compliments.push(req.body.new_compliment);
  var name = req.params.name;
  res.redirect('/' + name);
});
