const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, minlength: 3, maxlength: 100, required: true },
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
