const { Router } = require("express");

const { commentController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentController.postComments);
router.get("/comment", commentController.getComments);
router.delete("/comment/:id", commentController.deleteCommentsById);
router.patch("/comment/:id", commentController.patchComments);

module.exports = router;
