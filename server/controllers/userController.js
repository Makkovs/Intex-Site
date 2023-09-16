const userService = require("../services/userService");

class UserController {

    async registration(req, res) {
        errorHandler(async () => {
            const { name, email, password, role } = req.body;
            let { phone } = req.body; 
            phone = phone || null

            const token = await userService.registration(name, email, phone, password, role);

            return res.json({ token });
        })(req, res);
    };

    async login(req, res) {
        errorHandler(async () => {
            const { email, password } = req.body;

            const token = await userService.login(email, password);
            return res.json({ token });
        })(req, res);
    };

    async check(req, res) {
        errorHandler(async () => {
            const token = await userService.check(req.user.id, req.user.name, reg.user.phone, req.user.email, req.user.role);
            return res.json({ token });
        })(req, res);
    };

    async getUser(req, res) {
        errorHandler(async () => {
            const { id } = req.query
            const userProfile = await userService.getUser(id);
            return res.json({ userProfile });
        })(req, res);
    };
};

module.exports = new UserController();