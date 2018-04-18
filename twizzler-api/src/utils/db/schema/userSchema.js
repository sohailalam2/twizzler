const Joi = require('joi');

const schema = {
  id: Joi.string().required(),
  name: Joi.string().trim().required(),
  avatar: Joi.string(),
};

async function validate(data) {
  return Joi.validate(data, schema);
}

module.exports = {
  validate,
};
