import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/getData", (req, res) => {
  res.send("Hello World this is sent from backend");
});

app.get("/", (req, res) => {
  res.send("Hello World, well done");
});