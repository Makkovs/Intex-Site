const companyService = require("../services/companyService");

class CompanyController {

    async createCompany(req, res) {
        try {
            const { name } = req.body;
            const company = await companyService.createCompany(name);

            return res.json({ company })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` })
        };
    };

    async deleteCompany(req, res) {
        try {
            const { id } = req.body;
            await companyService.deleteCompany(id);

            return res.json({ message: `Company ${id} was deleted.` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getAllCompanies(req, res) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const companies = await companyService.getAllCompanies(limit, offset);

            return res.json({ companies });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async renameCompany (req, res){
        try {
            const { id, name } = req.body;

            await companyService.renameCompany(id, name);

            return res.json({ message: `Company ${id} was renamed` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    }
};

module.exports = new CompanyController();