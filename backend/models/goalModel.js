const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // text: String
    // USER ASSOCIACED WITH A GOAL
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // which model does this object id pertain to
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
