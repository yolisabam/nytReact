var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true,
    unique: true
  },

  date: {
    type: Date,
    required: true,
     default: Date.now();
  },
  
  saved: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;