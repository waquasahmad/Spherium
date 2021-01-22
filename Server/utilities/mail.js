/* -----------------------------------------------------------------------
   * @ description : Here initialising nodemailer transport for sending mails.
----------------------------------------------------------------------- */

import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import path from "path";
import { EmailTemplate } from 'email-templates';
import config from 'config';
//const sgMail = require('@sendgrid/mail');
const { smtpUser, smtpPass, smtpPort, secure, rejectUnauthorized, smtpServer, mailFrom, mailTo } = config.get("smtp");

//sgMail.setApiKey(key);
const transporter = nodemailer.createTransport(
  smtpTransport({
    host: smtpServer, // hostname
    port: smtpPort, // port for secure SMTP
    auth: {
      user: smtpUser,
      pass: smtpPass
    },
    secure,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized
    }
  })
);

export const subjects = {
  contactUs: 'Customer Contact data'
};
const dirPath = '../email-templates/';

export const htmlFromatWithObject = async (request) => {
  const tempDir = path.resolve(__dirname, dirPath, request.emailTemplate);
  const template = new EmailTemplate(path.join(tempDir));
  const html = await template.render({ ...request });
  return { ...html, request };
};

export const sendEmail = (request) => {
  let options = {
    from: mailFrom,
    to: mailTo, // list of receivers
    subject: request.subject, // Subject line
    html: request.obj, // html body
  };

  if (request.cc) {
    options.cc = request.cc;
  }
  if (request.replyTo) {
    options.replyTo = request.replyTo;
  }
  if (request.files) {
    options.attachments = [
      {
        // filename: request.files.fileName,
        path: request.files.content,
        // type: 'application/pdf',
        // disposition: 'attachment'
      },
    ];
  }
 // sgMail.send(options);
  // Send by node mailer
  transporter.sendMail(options, function(error, info) {
    // send mail with defined transport object
    console.log('sendMail =>>>>>>>>>>>>>>>>>>', error, info);
    
  });
};