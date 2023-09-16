const { Characteristic } = require("../models/models");

class CharacteristicService {

    async createCharacteristic(name, body, merchId) {
        const characteristic = await Characteristic.create({ name, body, merchId });
        return characteristic;
    };

    async deleteCharacteristic(id) {
        const candidate = await Characteristic.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown characteristic.");
        };

        await Characteristic.destroy({ where: { id } });
    };

    async getAllCharacteristics(limit, offset, merchId) {
        const characteristics = Characteristic.findAndCountAll(
            { where: { merchId } },
            { limit, offset }
        );
        return characteristics;
    };
};

module.exports = new CharacteristicService();