const { Contact, User } = require("../../models");

const postAddContact = async (req, res) => {
  const { _id } = req.user;

  Contact.create({ ...req.body, owner: _id }).then((contactRes) => {
    if (contactRes) {
      User.findByIdAndUpdate(_id, {
        $push: { userContacts: contactRes._id },
      }).then((userRes) => {
        if (userRes) {
          res.status(201).json({
            status: "success",
            code: 201,
            data: {
              contactRes,
            },
          });
        }
      });
    }
  });
};

module.exports = postAddContact;
