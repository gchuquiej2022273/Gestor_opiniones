import { Router } from "express";
import { check } from "express-validator";
import { userPost ,userPut} from "./user.controller.js";

import { validaCampos } from "../middlewares/validar-campos.js"

import { validEmail, existeId } from "../helpers/db-validator.js"

import {validarJWT} from "../middlewares/validator-jwt.js" 
const router = Router();

router.post(
    "/register",
    [
        check("userName", "The name is mandatory").not().isEmpty(),
        check("email", "The email is mandatory").isEmail(),
        check("password", "The password is mandatory").isLength({ min: 6 }),
        check("email").custom(validEmail),
        validaCampos,
    ], userPost);

router.put(
    "/:id",
    [   
        validarJWT,
        check("userName", "The name is mandatory").not().isEmpty(),
        check("email", "The email is mandatory").isEmail(),
        check("password", "The password is mandatory").isLength({ min: 6 }),
        validaCampos,
    ], userPut);

export default router;