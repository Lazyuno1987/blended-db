const { Schema, model } = require("mongoose");
const Joi = require("joi");

const notesSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set title"],
    },
    textNote: {
      type: String,
      required: [true, "textNote is required"],
    },

    contact: {
      type: Schema.Types.ObjectId,
      ref: "contact",
      require: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  token: Joi.string(),
});

const Note = model("note", notesSchema);

module.exports = {
  Note,
  joiRegisterSchema,
  joiLoginSchema,
};
