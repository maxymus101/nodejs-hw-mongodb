import Joi from 'joi';
import { CONTACT_TYPES } from '../constatns/contactType.js';

export const phoneNumberValidation = () => Joi.string().max(10);
export const emailValidation = () =>
  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
export const contactTypeValidation = () =>
  Joi.string().valid(...Object.values(CONTACT_TYPES));
