
const next = require("next")
const routes = require("../routes")
const PORT = parseInt(process.env.PORT, 10) || 4000

const app = next({ dev: process.env.NODE_ENV !== "production" })

const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

const bodyParser = require('body-parser')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.GMZfuiV1RC6vLBYZVbpyrQ.Mf8Cdy_8wqMe61HpRH8ZvccIoqQyMwxZY2Y7wRwRwxE');

// With express
const express = require("express")

app.prepare().then(() => {
  const server = express()
  // const router = express.Router();

  server.use(bodyParser.json())

  server.post('/api/contact', function (req, res) {
    
    const { email = '', name = '', phone = '', subject = '', text = '' } = req.body

    const msg = {
      to: 'qmfkdldks@gmail.com',
      from: email,
      subject: subject,
      text: text,
      html: `<h1>${name}</h1><strong>${phone}</strong><p>${text}</p>`,
    };
    
    sgMail.send(msg);
    res.send('GET request to the homepage');
  });


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handler)
  server.listen(PORT, () => process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`))

})
