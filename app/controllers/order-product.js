import orderValidation from '../validation/order-validation.js';

/* validation helper */
import validation from '../utils/validation.js';

/* model */
import OrderModel from '../schemas/order-product.js';

/* mail transporter */
import transporter from '../settings/mail.js';

const OrderController = async (req, res) => {
  try {
    const { id, email } = res.locals.user;

    const isValid = await validation(req.body, orderValidation);
    if (isValid) {
      return res.status(422).json({ error: isValid });
    }

    await OrderModel.create({
      ...req.body,
      bill_date: Date.now(),
      client_id: id
    });

    transporter.sendMail({
      from: process.env.MAIL_USER,
      to: `${email}, victor804.gt@gmail.com`,
      subject: 'Compra',
      text: 'Compra efeatuada com sucesso',
      html: `
        <h3>Compra Efetivada com sucesso</h3>
        <ul>
         <li>Tipo de pagamento: <b>${req.body.payment}</b> </li>
         <li>Horário: <b>${new Date()}</b> </li>
         <li>Email: ${email} </li>
        </ul>
      `
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default OrderController;
