const express = require('express');
const { addTransaction, getAllTransaction } = require('../controllers/transaction');
const { ensureAuthenticated } = require("../config/auth");
// router object
const router = express.Router();

//routes
//add transaction
router.post('/add-transaction', ensureAuthenticated, addTransaction)

router.get('/get-transaction', getAllTransaction);

module.exports = router;