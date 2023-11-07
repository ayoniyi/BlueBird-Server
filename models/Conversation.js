const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    users: {
      type: Array,
    },
    startedAt: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversations", ConversationSchema);
