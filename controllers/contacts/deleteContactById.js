const { NotFound } = require("http-errors");

const { Contact, User } = require("../../models");

const deleteContactById = async (req, res) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  Contact.findByIdAndRemove(contactId).then((contact) => {
    console.log(contact);
    if (contact) {
      User.findByIdAndUpdate(_id, {
        $pull: { userContacts: contact._id },
      }).then((user) => {
        if (user) {
          res.json({
            status: "success",
            code: 200,
            message: "contact deleted",
            data: {
              contact,
            },
          });
        }
      });
    } else {
      res.json({
        code: 404,
        message: "Not found",
      });
    }
  });

  // if (!result) {
  //   throw new NotFound(`Not found id=${contactId}`);
  // }
};

module.exports = deleteContactById;
