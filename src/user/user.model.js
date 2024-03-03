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

export default mongoose.model('user', userSchema);