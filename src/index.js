const express = require("express");
const cors = require("cors");
const TaskRoute = require("../routes/taskRoute");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", TaskRoute);

const server = app.listen(5000, () =>
  console.log(`🚀 Server ready at: http://localhost:5000`)
);
