const characteristicService = require("../services/characteristicService");
const errorHandler = require("../utils/errorHandler");

class CharacteristicController {

    async createCharacteristic(req, res) {
        errorHandler(async () => {
            const { name, body, merchId } = req.body;
            const characteristic = await characteristicService.createCharacteristic(name, body, merchId);

            return res.json({ characteristic });
        })(req, res);
    };

    async deleteCharacteristic(req, res) {
        errorHandler(async () => {
            const { id } = req.body;
            await characteristicService.deleteCharacteristic(id);

            return res.json({ message: `Characteristic ${id} was deleted.` });
        })(req, res);
    };

    async getAllCharacteristics(req, res) {
        errorHandler(async () => {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const characteristics = await characteristicService.getAllCharacteristics(limit, offset);

            return res.json({ characteristics });
        });
    };
};

module.exports = new CharacteristicController();