/*
 * @file: contact-us.js
 * @description: It Contain email router/api.
 * @author: Waquas Ahmad
 */
import express from 'express';
import { contactUs } from '../../controllers/contact-us';
import Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';
const app = express();
const validator = createValidator({ passError: true });


const contactData = Joi.object({
  full_name: Joi.string().trim().required().label('Full Name'),
  email: Joi.string().trim().email().lowercase().required().label('Email'),
  phone_number: Joi.string().trim().optional().required().label('Phone no'),
  hear_about_us: Joi.string().optional().required().label('How did you hear about us')
});

app.put(
  '/email/contact-us',
  validator.body(contactData, {
    joi: { convert: true, allowUnknown: false },
  }),
  contactUs,
);

export default app;
