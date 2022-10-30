const { Note, User, Contact } = require("../../models");

const addNote = async (req, res) => {
  const { _id } = req.user;

  Note.create({ ...req.body, owner: _id }).then((note) => {
    if (note) {
      User.findByIdAndUpdate(_id, {
        $push: { userNotes: note._id },
      }).then((user) => {
        if (user) {
          res.status(201).json({
            status: "success",
            code: 201,
            data: {
              note,
            },
          });
        }
      });
    }
  });
};

module.exports = addNote;
