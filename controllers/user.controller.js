const User = require("../models/User.model");

module.exports.userController = {
  postUsers: (req, res) => {
    User.create({ text: req.bode.name })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getUsers: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteUsersById: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.json("юзер удален").catch((e) => {
        res.json(e);
      });
    });
  },
  patchUsers: (req, res) => {
    User.findByIdAndUpdate(req.params.id),
      { saved: req.bode.name }
        .then(() => {
          res.json("юзер изменен");
        })
        .catch((e) => {
          res.json(e);
        });
  },
};
