var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost/emergency-compliment";

var ComplimentSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Compliment", ComplimentSchema);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect(mongoURI);
}


module.exports = mongoose;
