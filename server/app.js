import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";
// import { port } from "config";
import router from "./routers/index";

env.config();

const app = express();
const portal = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("*", (req, res) => {
  res.send("API banka invalid url ");
});
app.post("*", (req, res) => {
  res.send("API banka invalid url ");
});
app.delete("*", (req, res) => {
  res.send("API banka invalid url ");
});
app.put("*", (req, res) => {
  res.send("API banka invalid url ");
});
app.patch("*", (req, res) => {
  res.send("API banka invalid url ");
});
app.listen(portal, () => console.log(`listening on port ${portal}!`));
module.exports = app;
console.log(portal);