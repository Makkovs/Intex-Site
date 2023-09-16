const commentaryService = require("../services/commentaryService");
const errorHandler = require("../utils/errorHandler");

class CommentaryController {

    async createCommentary(req, res) {
        errorHandler(async () => {
            const { name, body, merchId, commentaryId, userId } = req.body;
            const characteristic = await commentaryService.createCommentary(name, body, merchId, commentaryId, userId);

            return res.json({ characteristic });
        })(req, res);
    };

    async deleteCommentary(req, res) {
        errorHandler(async () => {
            const { id } = req.body;
            await commentaryService.deleteCommentary(id);

            return res.json({ message: `Commentary ${id} was deleted.` });
        })(req, res);
    };

    async getAllCommentaries(req, res) {
        errorHandler(async () => {
            let { limit, page, merchId, commentaryId } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            const commentaries = await commentaryService.getAllCommentaries(limit, offset, merchId, commentaryId);

            return res.json({ commentaries });
        })(req, res);
    };
};

module.exports = new CommentaryController();