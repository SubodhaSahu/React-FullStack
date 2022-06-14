const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Configuring the database
const db = require("./models");

//Routers
// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send([1, 2, 3]);
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening to port 3001...");
  });
});
