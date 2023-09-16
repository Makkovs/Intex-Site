const bcrypt = require("bcrypt");

const { User } = require("../models/models");

const hashPassword = require("../utils/hashPassword");
const generateJwt = require("../utils/generateJwt");

class UserService {

    async registration(name, email, phone, password, role) {
        const candidateMail = await User.findOne({ where: { email } });
        if (candidateMail) {
            throw new Error("This email is arleady used!");
        };

        const candidatePhone = await User.findOne({ where: { phone } });
        if (phone && candidatePhone) {
            throw new Error("This phone is already used!");
        };

        const passwordHash = await hashPassword(password);
        const user = await User.create({ name, email, phone, role, password: passwordHash });
        const token = generateJwt(user.id, user.name, user.phone, user.email, user.role);

        return token;
    };

    async login(email, password) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error("Undefined user!");
        };

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            throw new Error("Incorect password");
        }

        const token = generateJwt(user.id, user.name, user.phone, user.email, user.role);
        return token;
    };

    async check(id, name, phone, email, role) {
        const token = generateJwt(id, name, email, phone, role);
        return token;
    };

    async getUser(id) {
        const user = await User.findOne({ where: { id } });
        return { name: user.name, email: user.email, phone: user.phone, role: user.role };
    };
};

module.exports = new UserService();