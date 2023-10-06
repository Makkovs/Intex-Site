const Router = require("express");

const commentaryController = require("../controllers/commentaryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = new Router();

router.post("/create", authMiddleware, commentaryController.createCommentary);
router.post("/delete", commentaryController.deleteCommentary);
router.get("/get-all", commentaryController.getAllCommentaries);

module.exports = router;