var mongoose = require("mongoose");
var mongoURI = 'mongodb://localhost/emergency-compliment'
var ComplimentSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Compliment", ComplimentSchema);

module.exports = mongoose;


mongoose.connect(process.env.MONGODB_URI || mongoURI);
