import express from "express";
import { sentOtpController } from "../controllers/sentOtpController.js";
import { userLogin } from "../controllers/userLoginController.js";
import { userRegisterController } from "../controllers/userRegisterController.js";

const router = express.Router();

router.post("/user/register", userRegisterController);
router.post("/user/sendotp", sentOtpController);
router.post("/user/login", userLogin);

export default router;
