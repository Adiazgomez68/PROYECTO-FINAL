const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nivelesSchema = new Schema({
  descripcion: String,
  porcentaje: Number,
  estado: {
    type: Boolean,
    default: false
  },
  id_usuarios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuarios"
    }
  ]
});

var Nivelescurso = mongoose.model("Nivelescursos", nivelesSchema);
module.exports = Nivelescurso;
