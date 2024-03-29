const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const payload = req.body;
  let message = null;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  if (payload.pt) {
    message = await transporter.sendMail({
      from: payload.email,
      to: process.env.TO_EMAIL,
      subject: "Um novo formulário foi preenchido - A Praça",
      text: `Nome: ${payload.nome}, telemóvel: ${payload.telemovel}, objetivo: ${payload.objetivo}, patologias: ${payload.patologia}, personal trainer: ${payload.pt}`,
    });
  } else if (payload.class) {
    message = await transporter.sendMail({
      from: payload.email,
      to: process.env.TO_EMAIL,
      subject: "Um novo formulário foi preenchido - A Praça",
      text: `Nome: ${payload.nome}, telemóvel: ${payload.telemovel}, objetivo: ${payload.objetivo}, aula: ${payload.class}`,
    });
  } else if (payload.service) {
    message = await transporter.sendMail({
      from: payload.email,
      to: process.env.TO_EMAIL,
      subject: "Um novo formulário foi preenchido - A Praça",
      text: `Nome: ${payload.nome}, telemóvel: ${payload.telemovel}, objetivo: ${payload.objetivo}, serviço: ${payload.service}`,
    });
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

module.exports = router;
