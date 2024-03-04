import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    user: {
        type: String,
    },

    title: {
        type: String,
        required: [true, "EL title es obligatorio"]
    },

    contenido: {
        type: String,
        required: [true, "EL contenido es obligatorio"]
    },

    categoria: {
        type: String,
        required: [true, "la categoria es obligatoria"]
    },

    status: {
        type: Boolean,
        default: true,
    },

    comment: {
        type: [String],
    }

});

export default mongoose.model('post', postSchema);