import bcryptjs from "bcryptjs";
import User from "./user.model.js"

export const userPost = async (req, res) => {

    const { userName,email,password,status,role} = req.body;
    const usuario = await User({ userName,email,password,status,role });

    const salto = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salto);

    await usuario.save();

    res.status(200).json({
        usuario
    });
}