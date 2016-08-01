var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("./db/connection");

var app = express();
var colors = require("./color.js");

var Compliment = mongoose.model("Compliment");

app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.json({ extended: true }));

function getRandomCompliment(compliments){
  var randomIndex = Math.floor((Math.random() * compliments.length));
  var randomInstance = compliments[randomIndex];
  return randomInstance.body;
}

app.get("/", function(req, res){
  Compliment.find({}).then(function(compliments){
    var randomCompliment = getRandomCompliment(compliments);
    var randomColor = colors.getRandomColor();
    res.render("index", {compliment: randomCompliment, color: randomColor});
  });
});

app.get("/:name", function(req, res){
  Compliment.find({}).then(function(compliments){
    var randomCompliment = getRandomCompliment(compliments);
    var randomColor = colors.getRandomColor();
    res.render("index", {compliment: randomCompliment, color: randomColor, name: req.params.name});
  });
});

app.get("/:name/new", function(req, res){
  var randomColor = colors.getRandomColor();
  res.render("new", {color: randomColor, name: req.params.name});
});


app.post("/", function(req, res){
  var name = req.body.player_name;
  res.redirect('/' + name);
});


app.post("/:name", function(req, res){
  var name = req.params.name;
  var randomColor = colors.getRandomColor();
  Compliment.create(req.body.compliment).then(function(compliment){
    res.redirect('/' + req.params.name);
  })
});

mongoose.connect(process.env.MONGODB_URI, function(error){
  if (error) console.error(error);
  else console.log('connected');

  app.listen(app.get("port"), function(){
    console.log("we live, son.");
  });

})
