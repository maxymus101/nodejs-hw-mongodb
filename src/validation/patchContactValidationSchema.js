import Joi from 'joi';
import {
  phoneNumberValidation,
  emailValidation,
  contactTypeValidation,
} from './helpers.js';

export const createContactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: phoneNumberValidation,
  email: emailValidation.required(),
  isFavourite: Joi.boolean(),
  contactType: contactTypeValidation,
});
