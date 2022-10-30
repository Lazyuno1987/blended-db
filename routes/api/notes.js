const express = require("express");

const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const { notes: ctrl } = require("../../controllers/index");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.get("/:id", ctrlWrapper(ctrl.getNoteByID));
router.post("/", auth, ctrlWrapper(ctrl.addNote));

module.exports = router;
