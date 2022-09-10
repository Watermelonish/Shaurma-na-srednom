const nodemailer = require('nodemailer');



const sendEmail = async (req, res) => {
    const {customer_name,
    customer_phone,
    customer_email,
    select_theme,
    body_question} = req.body.contactinfo;

    console.log("check========> back", req.body.contactinfo)

    function main() {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: 'smtp.mail.ru',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: 'reqgul889@mail.ru',
            pass: 'r6ntrfvVEacudvuMkicN',
          },
        });
        // send mail with defined transport object
        const info = transporter.sendMail({
          from: '"Шаверма у Ашотика" <reqgul889@mail.ru>', // sender address
          to: `${customer_email}`, // list of receivers
          subject: 'Тема', // Subject line
          text: 'Текст:', // plain text body
          html: `<b><p>С вами хочет связатся - ${customer_name} <p><br /> Контактная иформация - <br /> Email: ${customer_email} <br /> Телефон: ${customer_phone}.</br>
          <p>По теме - ${select_theme}</p>
          <p>Вопрос - ${body_question}.</p>`, // html body
        });
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
      main();
      res.sendStatus(200);
  };

  module.exports = {sendEmail}