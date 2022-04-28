const mongoose = require("mongoose");

const ReciepSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    reciep: {
      type: String,
    },
    ingredient: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reciep", ReciepSchema);
