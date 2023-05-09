const express = require("express");

const transactions = express.Router();

const transactionsArray = require("../models/transaction");

//SHOW
transactions.get("/", (req, res) => {
  res.status(202).json(transactionsArray);
});

//INDEX
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(transactionsArray[id]);
  transactionsArray[id]
    ? res.status(202).json(transactionsArray[id])
    : res
        .status(404)
        .send(`We were unable to find a transcation at index : ${id}`);
});

//CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

//UPDATE
transactions.post("/", (req, res) => {
  const newTransaction = req.body;
  transactionsArray.push(newTransaction);
  res.json(transactionsArray);
});

//DELETE
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const updatedTransactions = transactionsArray.splice(id, 1);
  transactionsArray[id]
    ? res.status(202).json(updatedTransactions)
    : res
        .status(404)
        .send(
          "The transaction you are looking for does not exist, so we can't delete it"
        );
});

module.exports = transactions;
