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

export const userPut = async(req , res) => {
    const {id} = req.params;
    const {_id,password,...resto} = req.body;

    if (password) {
        const salto = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salto);
    }

    await User.findByIdAndUpdate(id, resto);

    const usuario = await User.findOne({_id: id});

    res.status(200).json({
        msg: "Usuario actualizado",
        usuario
    })
}