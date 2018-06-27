var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var FeedbackSchema = new Schema({
 
  text: {
    type: String,
    required: true
  }

});
var Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;