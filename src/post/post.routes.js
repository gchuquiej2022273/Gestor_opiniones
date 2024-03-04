import { Router } from "express";
import { check } from "express-validator";

import { validaCampos } from "../middlewares/validar-campos.js";

import { publicPost } from "./post.controller.js";

import { validarJWT } from "../middlewares/validator-jwt.js"

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check("title", "The title si mandatory").not().isEmpty(),
        check("contenido", "The contendido is mandatory").not().isEmpty(),
        check("categoria", "The categoria is mandatory").not().isEmpty(),
        validaCampos,
    ],publicPost);

export default router;