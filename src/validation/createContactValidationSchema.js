import Joi from 'joi';
import {
  phoneNumberValidation,
  emailValidation,
  contactTypeValidation,
} from './helpers.js';

export const createContactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'any.required': 'Name is required.',
  }),
  phoneNumber: phoneNumberValidation.required().messages({
    'number.base': 'Please, use only numbers.',
    'any.required': 'Please, type your phone number.',
    'number.max': 'Phone number is to large.',
  }),
  email: emailValidation.required().messages({
    'any.required': 'Please, enter your email.',
    'string.email': 'Invalid email.',
  }),
  isFavourite: Joi.boolean(),
  contactType: contactTypeValidation.required().messages({
    'any.only': 'Choose nessesary type of contact.',
  }),
});
