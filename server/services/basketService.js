const { User, Basket, Merch } = require("../models/models");

class BasketService {

    async getBasket(userId) {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error("User is not exist!")
        }

        let basket = await user.getBasket();
        if (!basket) {
            basket = await Basket.create();
            await user.setBasket(basket);
        };
        const merches = await basket.getMerches();
        return merches;
    };

    async addMerchToBasket(userId, merchId) {
        const user = await User.findOne({ where: { id: userId } });
        let basket = await user.getBasket();
        if (!basket) {
            basket = await Basket.create();
            await user.setBasket(basket);
        };
        const merch = await Merch.findOne({ where: { id: merchId } });
        if (!merch) {
            throw new Error("Merch is not exist");
        };
        await basket.addMerch(merch);
    };

    async removeMerchFromBasket(userId, merchId) {
        const user = await User.findOne({ where: { id: userId } });
        let basket = await user.getBasket();
        if (!basket) {
            basket = await Basket.create();
            await user.setBasket(basket);
        };
        const merch = await Merch.findOne({ where: { id: merchId } });
        const merchInBasket = await basket.hasMerch(merch);
        if (!merchInBasket) {
            throw new Error("This merch is not found in basket");
        };
        await basket.removeMerch(merch);
    };
};

module.exports = new BasketService();