const Router = require("express");

const router = new Router();

const companyController = require("../controllers/companyController");

router.post("/create", companyController.createCompany);
router.post("/delete", companyController.deleteCompany);
router.get("/get-all", companyController.getAllCompanies);

module.exports = router;