import { Router } from "express";
import { createLoan, reviewLoan, approveLoan } from "../controllers/LoanController";
 
const router = Router();
 
router.post("/create", createLoan);       // User applies for loan
router.post("/review", reviewLoan);       // Officer reviews loan
router.post("/approve", approveLoan);     // Manager approves loan
 
export default router;