const db = require("../models");

// Defining methods for the diversController
module.exports = {

  // Return the 30 most recent logs in the DB
  findRecentLogs: function(req, res) {
    db.Log
      .find(req.query)
      .sort({ date: -1 })
      .limit(30)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find all logs for a given diver
  findAllDiversLogs: function(req, res) {
    db.Diver
    .findById(req.params.diverId)
    .then(userModel => {
        db.Logs
            .find({ diver: req.params.userId })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    })
    .catch(err => res.status(422).json(err))
  },

  // find one specific log by id
  findById: function(req, res) {
    db.Log
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // create a new log and associate to a diver
  create: function(req, res) {
    db.Log
      .create(req.body)
      .then(logModel => {
        db.Diver
            .findByIdAndUpdate(logModel.diver, { $push: { logs: { log: logModel._id} } }, { new: true })
            .then(diverModel => res.json(logModel))
            .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
  },

  // find a specific log and update its contents
  update: function(req, res) {
    db.Log
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // remove a log from both the diver's logs array and the logs model
  remove: function(req, res) {
    db.Diver
            .update({}, { $pull: { logs: { log: req.params.id } } })
            .then(dbModel => {
                db.Log
                    .findById(req.params.id)
                    .then(dbModel => dbModel.remove())
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            })
  }
};
