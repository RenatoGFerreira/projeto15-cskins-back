import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller.js";
import {userSchemaValidation, signInBodyValidation} from "../middleware/auth.middleware.js"

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp)
router.post("/sign-in", signInBodyValidation, signIn)


export default router;
