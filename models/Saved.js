var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var SavedSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  
 
  feedback: {
    type: Schema.Types.ObjectId,
    ref: "Feedback"
  }
});


var Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;