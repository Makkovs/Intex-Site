const { Commentary } = require("../models/models");

class CommentaryService {

    async createCommentary(name, body, merchId, commentaryId, userId) {
        const commentary = await Commentary.create({ name, body, merchId, commentaryId, userId });
        return commentary;
    };

    async deleteCommentary(id) {
        const candidate = await Commentary.findOne({ where: { id } });

        if (!candidate) {
            throw new Error("Unknown commentary.");
        };

        await Commentary.destroy({ where: { id } });
    };

    async getAllCommentaries(limit, offset, merchId, commentaryId) {
        let commentaries;

        if (merchId && !commentaryId) {
            commentaries = await Commentary.findAndCountAll(
                { where: { merchId } },
                { limit, offset }
            )
        } else if (merchId && commentaryId) {
            commentaries = await Commentary.findAndCountAll(
                { where: { merchId, commentaryId } },
                { limit, offset }
            )
        } else {
            throw new Error("Unknown merch id.");
        }

        return commentaries;
    };

};

module.exports = new CommentaryService();