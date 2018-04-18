const Joi = require('joi');
const uuid = require('uuid');

const schema = {
  id: Joi.string().default(() => uuid.v1(), 'UUID'),
  userId: Joi.string().trim().required(),
  name: Joi.string(),
  comment: Joi.string().trim().max(200),
  likes: Joi.number().default(0),
  replies: Joi.array().items(
    Joi.object({
      id: Joi.string().default(() => uuid.v1(), 'UUID'),
      userId: Joi.string().trim().required(),
      name: Joi.string(),
      comment: Joi.string().trim().max(200),
    }),
  ),
};

async function validate(data) {
  return Joi.validate(data, schema);
}

module.exports = {
  validate,
};
