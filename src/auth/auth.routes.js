import { Router } from "express";
import { check } from "express-validator";
import { login } from "./auth.controller.js";
import {validaCampos,} from "../middlewares/validar-campos.js";

const router = Router();

router.post(
    "/",
    [
        check("userName").optional(),
        check("email").optional(),
        check("password", "The password no puede ir vacio").isLength({ min: 6 }),
        validaCampos,
    ], login);

export default router