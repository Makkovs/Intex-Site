const basketService = require("../services/basketService");
const errorHandler = require("../utils/errorHandler");

class BasketController {

    async getBasket (req, res){ 
        errorHandler(async () => {
            const userId = req.user.id
            const basket = await basketService.getBasket(userId);
            return res.json({ basket })
        })(req, res);
    };

    async addMerchToBasket (req, res){
        errorHandler(async () => {
            const { merchId } = req.body;
            const userId = req.user.id
            await basketService.addMerchToBasket(userId, merchId);
            return res.json({message: `Merch ${merchId} was added to user's ${userId} basket!`});
        })(req, res);
    };

    async removeMerchFromBasket (req, res){
        errorHandler(async () => {
            const { merchId } = req.body;
            const userId = req.user.id;
            await basketService.removeMerchFromBasket(userId, merchId);
            return res.json({message: `Merch ${merchId} was removed from user's ${userId} basket!`});
        })(req, res);
    };
};

module.exports = new BasketController();