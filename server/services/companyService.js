const { Company } = require("../models/models");

class CompanyService {

    async createCompany(name) {
        const candidate = await Company.findOne({ where: { name } });

        if (candidate) {
            throw new Error("This company already exist!");
        };

        const company = await Company.create({ name });
        return company;
    };

    async deleteCompany(id) {
        const candidate = await Company.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown company.");
        };

        await Company.destroy({ where: { id } });
    };

    async getAllCompanies() {
        const company = await Company.findAndCountAll();
        return company;
    };

    async getOneCompany(id) {
        const company = await Company.findOne({ where: { id } });
        return company;
    }

    async renameCompany(id, name) {
        const company = await Company.findOne({ where: { id } });
        if (!company) {
            throw new Error("This company is not exist!");
        };

        const candidate = await Company.findOne({ where: { name } });
        if (candidate) {
            throw new Error("This company is already exist!");
        };

        await Company.update(
            { name: name },
            { where: { id } }
        );
    };
};

module.exports = new CompanyService();