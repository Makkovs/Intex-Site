const { Characteristic } = require("../models/models");

class CharacteristicService {

    async createCharacteristic(name, body, merchId) {
        const characteristic = await Characteristic.create({ name, body, merchId });
        return characteristi;
    };

    async deleteCharacteristic(id) {
        const candidate = await Characteristic.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown characteristic.");
        };

        await Characteristic.destroy({ where: { id } });
    };

    async getAllCharacteristics(limit, offset) {
        const characteristics = Characteristic.findAndCountAll({ limit, offset });
        return characteristics;
    };
};

module.exports = new CharacteristicService();