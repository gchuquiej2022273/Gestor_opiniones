import bcryptjs from "bcryptjs";
import User from "../user/user.model.js";
import { generarJWT } from "../helpers/generar-jwn.js"

export const login = async (req, res) => {
    const { userName, email, password } = req.body;
    try {

        let userLogin = email || userName;
        let user;
        if (userLogin.includes("@")) {
            user = await User.findOne({ email });
        } else {
            user = await User.findOne({ userName });
        }


        if (!user) {
            return res.status(400).json({
                msg: "username or password are incorrect"
            })
        }

        if (!user.status) {
            return res.status(400).json({
                msg: "The user no existe en la base de datos"
            })
        }

        const checkPassword = bcryptjs.compareSync(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                msg: "The password is incorrect"
            });
        }

        const token = await generarJWT(user.id);

        res.status(200).json({
            msg: "WELCOME :D!",
            user,
            token
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "comuniquese with the admin"
        })
    }

}   