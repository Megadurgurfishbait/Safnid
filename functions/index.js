// Firebase startup.
const functions = require("firebase-functions");

// Imports
const app = require("express")();
const cors = require("cors");
app.use(cors({ origin: true }));

const {
  Users,
  News,
  Auth: { Auth }
} = require("./Handlers");
// News Routes
// GET
app.get("/news", News.GetAll);
app.get("/news/:id", News.GetSingle);
app.get("/firstfour/news", News.GetFirstFour);
// POST
app.post("/news", Auth, News.Create);
app.post("/news/:id", Auth, News.Update);
// DELETE
app.delete("/news/:id", Auth, News.Delete);

// User Routes
// POST
app.post("/user", Users.SignIn);

exports.api = functions.region("europe-west1").https.onRequest(app);
