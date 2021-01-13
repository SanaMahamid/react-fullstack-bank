const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/', async (req,res) => {
    res.send({status: "server is working"})
})

router.get('/transactions', (req,res) => {
    Transaction.find({}, function(data, err){
        err ? res.send(err) : res.send(data)
    })
})

router.post('/transaction', (req, res) => {
    const trans = new Transaction(req.body.transaction)
    trans.save()
    res.end()
})

router.delete('/transaction', async (req, res) => {
    Transaction.findByIdAndRemove(req.body.data, function(err){
        err ? res.send(err) : res.end()
    })
})

module.exports = router