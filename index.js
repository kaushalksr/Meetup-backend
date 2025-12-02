const { initializeDatabase } = require("./db/db.connect");
const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const Event = require("./models/event.model");

initializeDatabase();

// TO ADD NEW EVENT

async function addNewEvent(newEvent) {
  try {
    const event = new Event(newEvent);
    const savedEvent = await event.save();
    return savedEvent;
  } catch (error) {
    console.log(error);
  }
}

app.post("/events", async (req, res) => {
  try {
    const event = await addNewEvent(req.body);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: "Failed to add new event!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error ocurred while adding new event!" });
  }
});

// TO READ ALL EVENTS

async function readAllEvents() {
  try {
    const allEvents = await Event.find();
    return allEvents;
  } catch (error) {
    console.log(error);
  }
}

app.get("/events", async (req, res) => {
  try {
    const allEvents = await readAllEvents();
    if (allEvents) {
      res.json(allEvents);
    } else {
      res.status(404).json({ message: "Failed to fetch  event!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error ocurred while fetching event!" });
  }
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
