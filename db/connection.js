var mongoose = require("mongoose");

var ComplimentSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Compliment", ComplimentSchema);
mongoose.connect("mongodb://localhost/emergency-compliment")
module.exports = mongoose;
