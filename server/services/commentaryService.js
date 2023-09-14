const { Commentary } = require("../models/models");

class CommentaryService {

    async createCommentary(name, body, merchId, commentaryId) {
        const commentary = await Commentary.create({ name, body, merchId, commentaryId });
        return commentary;
    };

    async deleteCommentary(id) {
        const candidate = await Commentary.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown commentary.");
        };

        await Commentary.destroy({ where: { id } });
    };

    async getAllCommentaries(limit, offset) {
        const commentaries = Commentary.findAndCountAll({ limit, offset });
        return commentaries;
    };

};

module.exports = new CommentaryService();