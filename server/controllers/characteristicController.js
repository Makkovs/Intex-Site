const characteristicService = require("../services/characteristicService");

class CharacteristicController {

    async createCharacteristic(req, res) {
        try {
            const { name, body, merchId } = req.body;
            const characteristic = await characteristicService.createCharacteristic(name, body, merchId);

            return res.json({ characteristic });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async deleteCharacteristic(req, res) {
        try {
            const { id } = req.body;
            await characteristicService.deleteCharacteristic(id);

            return res.json({ message: `Characteristic ${id} was deleted.` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getAllCharacteristics(req, res) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const characteristics = await characteristicService.getAllCharacteristics(limit, offset);

            return res.json({ characteristics });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };
};

module.exports = new CharacteristicController();