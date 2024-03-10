
const Transaction = require('../models/Transaction')

const getAllTransaction = async (req,res) => {
    try{
        const transaction = await Transaction.find({userId})
        res.status(200).json(transaction);
    } catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};

const addTransaction = async (req, res) => {
    try{
        const newTransaction = new Transaction(req.body)
        await newTransaction.save()
        res.status(201).send("Transaction Created");
    } catch(error){

    }
}
module.exports = {getAllTransaction, addTransaction };