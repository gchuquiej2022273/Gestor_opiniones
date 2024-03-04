import jwt from "jsonwebtoken";

export const generarJWT = (_id = ' ') => {

    return new Promise((resolve, reject) => {
        const payload = { _id };
        jwt.sign(
            payload,
            process.env.KEYPRIVATY,
            {
                expiresIn: '1h'
            },
            (err, token) => {
                err ? (console.log(err), reject('No se pudo generar el token')) : resolve(token);
            }
        )
    })
}