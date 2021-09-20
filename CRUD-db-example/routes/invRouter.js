const express = require('express')
const invRouter = express.Router()
const ItemModel = require('../models/itemModel.js')
//GET
invRouter.get('/', (req, res, next) => {
    ItemModel.find((err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})
//POST
invRouter.post('/', (req, res, next) => {
    const newItem = new ItemModel(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})
//PUT
invRouter.put('/:itemID', (req, res, next) => {
    ItemModel.findOneAndUpdate(
        {_id: req.params.itemID},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})
//DELETE
invRouter.delete('/:itemID', (req, res, next) => {
    ItemModel.findOneAndDelete({_id: req.params.itemID}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(`Successfully deleted ${deletedItem.name} from database.`)
    })
})

module.exports = invRouter