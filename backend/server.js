const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/botRoutes.js");

const cors = require("cors");
const PORT = process.env.PORT || 5555;
const uri = process.env.MONGO_URL;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(234).send("Hello World!");
});

app.use(cors());

app.use("/robots", router);

mongoose
  .connect(uri)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
