const Comment = require("../models/Comment.model");

module.exports.commentController = {
  postComments: (req, res) => {
    Comment.create({ text: req.body.tittle })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getComments: (req, res) => {
    Comment.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteCommentsById: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("комментарий удален").catch((e) => {
        res.json(e);
      });
    });
  },
  patchComments: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id),
      {
        text: req.body.text,
      }
        .then(() => {
          res.json("комментарий изменен");
        })
        .catch((e) => {
          res.json(e);
        });
  },
};
