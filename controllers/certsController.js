const db = require("../models");

// Defining methods for the diversController
module.exports = {
  
  // Find all Certs for a given diver
  findAllDiversCerts: function(req, res) {
    db.Diver
    .findById(req.params.diverId)
    .then(userModel => {
        db.Certs
            .find({ diver: req.params.userId })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    })
    .catch(err => res.status(422).json(err))
  },

  // find one specific Cert by id
  findById: function(req, res) {
    db.Cert
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // create a new Cert and associate to a diver
  create: function(req, res) {
    db.Cert
      .create(req.body)
      .then(CertModel => {
        db.Diver
            .findByIdAndUpdate(CertModel.diver, { $push: { certs: { cert: clubModel._id} } }, { new: true })
            .then(diverModel => res.json(CertModel))
            .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
  },

  // find a specific Cert and update its contents
  update: function(req, res) {
    db.Cert
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // remove a Cert from both the diver's Certs array and the Certs model
  remove: function(req, res) {
    db.Diver
            .update({}, { $pull: { Certs: { Cert: req.params.id } } })
            .then(dbModel => {
                db.Cert
                    .findById(req.params.id)
                    .then(dbModel => dbModel.remove())
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            })
  }
};

