import { createTransport } from 'nodemailer';

export default createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_POST,
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
});
