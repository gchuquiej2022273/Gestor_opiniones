import { validationResult } from 'express-validator';

export const validaCampos = (req, res , next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(200).json(error);
    }
    next();
}