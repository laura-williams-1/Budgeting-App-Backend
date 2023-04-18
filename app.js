const express = require("express");

const app = express();
const transactionController = require("./Controllers/transactionsControllers");
app.use(express.json());

app.use("/transactions", transactionController);

app.get("/", (req, res) => {
  res.status(202).send("Welcome to the budgeting App");
});

app.get("*", (req, res) => {
  res.status(404).send("Um this is weird, we can't find this page");
});

module.exports = app;
