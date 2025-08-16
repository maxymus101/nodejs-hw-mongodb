import Joi from 'joi';
import {
  phoneNumberValidation,
  emailValidation,
  contactTypeValidation,
} from './helpers.js';

export const patchContactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: phoneNumberValidation(),
  email: emailValidation(),
  isFavourite: Joi.boolean(),
  contactType: contactTypeValidation(),
});
