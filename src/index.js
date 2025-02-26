const express = require("express");
const cors = require("cors");
const TaskRoute = require("../routes/taskRoute");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", TaskRoute);

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
