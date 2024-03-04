import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: [true, "The user name is mandatory"],
    },

    email: {
        type: String,
        required: [true, "The email is mandatory"],
    },
    
    password: {
        type: String,
        required: [true, "The password is mandatory"],
    },

    status: {
        type: Boolean,
        default: true
    },

    role: {
        type: String,
        default: "USER_ROLE"
    }
});

 userSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
  } 

export default mongoose.model('user', userSchema);