const { Note, User, Contact } = require("../../models");

const getNoteByID = async (req, res) => {
  const { id } = req.params;

  const result = await Note.findById(id).populate("contact", {
    phone: true,
    name: true,
  });
  res.json({ data: result });
};

module.exports = getNoteByID;
