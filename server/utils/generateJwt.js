const jwt = require("jsonwebtoken");

const generateJwt = (id, name, phone, email, role) => {
    return jwt.sign(
        { id, name, phone, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '48h' }
    );
};

module.exports = generateJwt;