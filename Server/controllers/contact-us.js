/*
 * @file: contact-us.js
 * @description: It Contain function layer for contact-us controller.
 * @author: Waquas Ahmad
 */

import { successAction, failAction } from '../utilities/response';
import {
   sendEmail  
} from '../services/contact-us';
import Message from '../utilities/messages';

/**************** Contact Us ***********/
export const contactUs = async (req, res, next) => {
  const payload = req.body;
  try {
    const data = await sendEmail(payload);
    res.status(200).json(successAction(data, Message.emailSend));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};

