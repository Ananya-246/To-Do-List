const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/todos", require("./routes/todos"));

app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT));
