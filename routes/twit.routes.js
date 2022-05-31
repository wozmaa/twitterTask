const { Router } = require("express");

const { twitController } = require("../controllers/twit.controller");

const router = Router();

router.post("/twit", twitController.postTwits);
router.get("/twit", twitController.getTwits);
router.delete("/twit/:id", twitController.deleteTwitsById);
router.patch("/twit/:id", twitController.patchLikes);
router.patch("/twit/:id", twitController.patchTwits);

module.exports = router;
