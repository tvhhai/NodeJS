const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Test = new Schema({
  id: ObjectId,
  name: { type: String, maxLength: 255 },
  price: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },

  created_at: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Test", Test);
