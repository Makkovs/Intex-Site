const userService = require("../services/userService");

class UserController {

    async registration(req, res) {
        try {
            const { name, email, password, role } = req.body;
            let { phone } = req.body; 
            phone = phone || null

            const token = await userService.registration(name, email, phone, password, role);

            return res.json({ token });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const token = await userService.login(email, password);
            return res.json({ token });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async check(req, res) {
        try {
            const token = await userService.check(req.user.id, req.user.name, reg.user.phone, req.user.email, req.user.role);
            return res.json({ token });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        }
    };

    async getUser(req, res) {
        try {
            const { id } = req.query
            const userProfile = await userService.getUser(id);
            return res.json({ userProfile });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };
};

module.exports = new UserController();