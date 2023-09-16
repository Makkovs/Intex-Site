const companyService = require("../services/companyService");

class CompanyController {

    async createCompany(req, res) {
        errorHandler(async () => {
            const { name } = req.body;
            const company = await companyService.createCompany(name);

            return res.json({ company })
        })(req, res);
    };

    async deleteCompany(req, res) {
        errorHandler(async () => {
            const { id } = req.body;
            await companyService.deleteCompany(id);

            return res.json({ message: `Company ${id} was deleted.` });
        })(req, res);
    };

    async getAllCompanies(req, res) {
        errorHandler(async () => {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const companies = await companyService.getAllCompanies(limit, offset);

            return res.json({ companies });
        })(req, res);
    };

    async renameCompany (req, res){
        errorHandler(async () => {
            const { id, name } = req.body;

            await companyService.renameCompany(id, name);

            return res.json({ message: `Company ${id} was renamed` });
        })(req, res);
    };
};

module.exports = new CompanyController();