import mongoose from "mongoose";
const usuarioSchema = new mongoose.Schema ({
    nombreUsuario: {
        type: String,
        require:true,
        unique:true,

    },
    password: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true,
        unique:true

    },
}

);
export default mongoose.model("usuario",usuario.Schema);