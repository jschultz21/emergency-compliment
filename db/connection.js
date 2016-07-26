var mongoose = require("mongoose");

var ComplimentSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Compliment", ComplimentSchema);
module.exports = mongoose;


if(process.env.NODE_ENV == "production"){
  mongoose.connect("mongodb://heroku_4d4nx03q:v6esfi5q4u4bnmhladia60uhid@ds011765.mlab.com:11765/heroku_4d4nx03q");
}else{
  mongoose.connect("mongodb://localhost/emergency-compliment");
}
