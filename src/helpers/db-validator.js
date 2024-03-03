import User from '../user/user.model.js';

export const validEmail = async(email = '') => {
    const existeEmail = await User.findOne({email});
    if (existeEmail) {
        throw new Error(`The email ${email} ya esta registrado`);
    }
}