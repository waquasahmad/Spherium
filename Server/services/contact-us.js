/*
 * @file: contact-us.js
 * @description: It Contain function layer for contact-us service.
 * @author: Waquas Ahmad
 */
import * as Mail from '../utilities/mail';


/************ sending contact data of sender as an email *************/
export const sendEmail = async (payload) => {
  const result = await Mail.htmlFromatWithObject({
    data: { full_name: payload.full_name, email: payload.email, phone_number: payload.phone_number, hear_about_us: payload.hear_about_us },
    emailTemplate: 'contact-us'
  });
  
  const emailData = {   
    subject: Mail.subjects.contactUs,
    obj: result.html,
    templateId: 'contact-us'
  };

  Mail.sendEmail(emailData);
  const respData = {
   result: 'email-send'
  };
  return respData;
};
