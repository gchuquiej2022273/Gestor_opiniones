import User from '../user/user.model.js';

export const validEmail = async(email = '') => {
    const existeEmail = await User.findOne({email});
    if (existeEmail) {
        throw new Error(`The email ${email} ya esta registrado`);
    }
}

export const existeId = async(uid='') =>{
    const existeUsuario = await User.findById(_id);
    if (!existeUsuario){
        throw new Error(`El ID: ${email} No existe`);
    }
}