const companyService = require("../services/companyService");
const errorHandler = require("../utils/errorHandler");

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
            const companies = await companyService.getAllCompanies();
            return res.json({ companies });
        })(req, res);
    };

    async renameCompany(req, res) {
        errorHandler(async () => {
            const { id, name } = req.body;

            await companyService.renameCompany(id, name);

            return res.json({ message: `Company ${id} was renamed` });
        })(req, res);
    };
};

module.exports = new CompanyController();