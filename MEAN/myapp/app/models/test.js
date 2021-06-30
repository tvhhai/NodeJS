const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Test = new Schema(
  {
    id: ObjectId,
    name: { type: String, maxLength: 255, required: true },
    price: { type: String, maxLength: 255, required: true },
    image: { type: String, maxLength: 255, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", Test);
