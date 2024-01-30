const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  contacto: { type: String, required: true },
  objetivo: { type: String, required: true },
  patologia: { type: String, required: true, default: "Nenhuma" },
  pt: { type: String, required: true },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
