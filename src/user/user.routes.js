import { Router } from "express";
import { check } from "express-validator";
import { userPost } from "./user.controller.js";

import {validaCampos} from "../middlewares/validar-campos.js"

import { validEmail } from "../helpers/db-validator.js"

const router = Router();

router.post(
    "/register",
    [
        check("userName","The name is mandatory").not().isEmpty(),
        check("email", "The email is mandatory").isEmail(),
        check("password", "The password is mandatory").isLength({min:6}),
        check("email").custom(validEmail),
        validaCampos,
    ],userPost);

export default router;