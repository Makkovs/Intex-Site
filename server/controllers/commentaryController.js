const commentaryService = require("../services/commentaryService");

class CommentaryController {

    async createCommentary(req, res) {
        try {
            const { name, body, merchId, commentaryId } = req.body;
            const characteristic = await commentaryService.createCommentary(name, body, merchId, commentaryId);

            return res.json({ characteristic });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async deleteCommentary(req, res) {
        try {
            const { id } = req.body;
            await commentaryService.deleteCommentary(id);

            return res.json({ message: `Commentary ${id} was deleted.` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getAllCommentaries(req, res) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const commentaries = await commentaryService.getAllCharacteristics(limit, offset);

            return res.json({ commentaries });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };
};

module.exports = new CommentaryController();