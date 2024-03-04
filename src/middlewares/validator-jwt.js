import jwt from 'jsonwebtoken'
import Usuario from '../user/user.model.js'

export const validarJWT = async (req, res, next) => {
    const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
   
    const { _id } = jwt.verify(token, process.env.KEYPRIVATY);
    
    const usuario = await Usuario.findById(_id);


    if(!usuario){
      return res.status(401).json({
        msg: 'Usuario no existe en la base de datos'
      });
    }
 
    if(!usuario.status){
      return res.status(401).json({
        msg: 'Token no válido - usuario con existe'
      });
    }

    req.usuario = usuario;

    next();
  } catch (e) {
    console.log(e),
      res.status(401).json({
        msg: "Token no válido",
      });
  }
}