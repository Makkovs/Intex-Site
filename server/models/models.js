const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Category = sequelize.define("category", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Company = sequelize.define("company", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Merch = sequelize.define("merch", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    desc: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false }
});

const Characteristic = sequelize.define("characteristic", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    body: { type: DataTypes.STRING },
});

const Commentary = sequelize.define("commentary", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    body: { type: DataTypes.STRING }
})

User.hasMany(Commentary);
Commentary.belongsTo(User);

Category.hasMany(Merch);
Merch.belongsTo(Category);

Company.hasMany(Merch);
Merch.belongsTo(Company);

Merch.hasMany(Characteristic);
Characteristic.belongsTo(Merch);

Merch.hasMany(Commentary);
Commentary.belongsTo(Merch);

Commentary.hasMany(Commentary);
Commentary.belongsTo(Commentary);

module.exports = {
    User,
    Category,
    Company,
    Merch,
    Characteristic,
    Commentary
};