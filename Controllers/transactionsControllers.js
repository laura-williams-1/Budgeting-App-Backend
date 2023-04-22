const express = require("express");

const transactions = express.Router();

const transactionsArray = require("../models/transaction");

//SHOW => Index()
transactions.get("/", (req, res) => {
  res.status(202).json(transactionsArray);
});

//INDEX
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray[id]
    ? res.status(202).json(transactionsArray[id])
    : res
        .status(404)
        .send(`We were unable to find a transcation at index : ${id}`);
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
  const updatedTransactions = transactions.splice(id, 1);
  transactionsArray[id]
    ? res.status(202).json(updatedTransactions)
    : res
        .status(404)
        .send(
          "The transaction you are looking for does not exist, so we can't delete it"
        );
});

module.exports = transactions;
