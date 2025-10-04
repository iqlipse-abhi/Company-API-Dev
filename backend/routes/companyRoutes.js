import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  seedCompanies,
  searchCompanies,
} from "../controllers/companyController.js";

const router = express.Router();

router.get("/search", searchCompanies);
router.get("/seed", seedCompanies);
router.get("/", getCompanies);
router.get("/:id", getCompanyById);

router.post("/", createCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

export default router;
