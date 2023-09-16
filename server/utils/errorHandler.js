const errorHandler = (callback) => {
    return async (req, res) => {
        try {
            await callback(req, res);
        } catch (error){
            console.log(error);
            res.status(400).json({ error: `${error}` });
        };
    };
};

module.exports = errorHandler;