const Twit = require("../models/Twit.model");

module.exports.twitController = {
  postTwits: (req, res) => {
    Twit.create({ tittle: req.body.tittle, text: req.body.text })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getTwits: (req, res) => {
    Twit.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteTwitsById: (req, res) => {
    Twit.findByIdAndRemove(req.params.id).then(() => {
      res.json("твит удален").catch((e) => {
        res.json(e);
      });
    });
  },
  patchTwits: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id),
      {
        tittle: req.body.tittle,
        text: req.body.text,
      }
        .then(() => {
          res.json("твит изменен");
        })
        .catch((e) => {
          res.json(e);
        });
  },
  patchLikes: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $set: { likes: req.body.id },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
