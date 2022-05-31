const { Router } = require("express");

const { userController } = require("../controllers/user.controller");

const router = Router();

router.post("/user", userController.postUsers);
router.get("/user", userController.getUsers);
router.delete("/user/:id", userController.deleteUsersById);
router.patch("user", userController.patchUsers);

module.exports = router;
