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
            let { merchId } = req.query;

            const characteristics = await characteristicService.getAllCharacteristics(merchId);

            return res.json({ characteristics });
        })(req, res);
    };
};

module.exports = new CharacteristicController();