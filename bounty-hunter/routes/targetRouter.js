const express = require('express')
const targetRouter = express.Router()
const TargetModel = require('../models/target-model.js')
//Get All
targetRouter.get('/', (req, res, next) => {
    TargetModel.find((err, targets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(targets)
    })
})
//Get one
// targetRouter.get('/:targetID', (req, res, next) => {
//     const targetID = req.params.targetID
//     const foundTarget = targets.find(target => target._id === targetID)
//     if(!foundTarget) {
//         const error = new Error(`ERROR: Item ${targetID} not found.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundTarget)
// })
// Get by type
targetRouter.get('/type', (req, res, next) => {
    TargetModel.find({type: req.query.type}, (err, targets) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(targets)
    })
})
//Delete request
targetRouter.delete('/:targetID', (req, res, next) => {
    TargetModel.findOneAndDelete({_id: req.params.targetID}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(`Successfully deleted ${deletedItem.fName} ${deletedItem.lName} from database.`)
    })
})
//PUT request (update one)
targetRouter.put('/:targetID', (req, res, next) => {
    TargetModel.findOneAndUpdate(
        {_id: req.params.targetID},
        req.body,
        {new: true},
        (err, updatedTarget) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTarget)
        }
    )
})
//POST one
targetRouter.post('/', (req, res, next) => {
    const newTarget = new TargetModel(req.body)
    newTarget.save((err, savedTarget) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTarget)
    })

})

module.exports = targetRouter