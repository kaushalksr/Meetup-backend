const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventFromTime: {
      type: String,
      required: true,
    },
    eventToTime: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
      enum: ["Offline", "Online"],
    },
    eventImage: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    eventDressCode: String,
    eventAge: String,
    eventTags: [
      {
        type: String,
      },
    ],
    speakerName: String,
    speakerImageUrl: String,
    speakerDesignation: String,
    eventPricing: Number,
    eventAddress: String,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
