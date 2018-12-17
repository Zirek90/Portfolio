const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');


const app = new express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
        `


        let transporter = nodemailer.createTransport({
            host: 'smtp.wp.pl',
            port: 465,
            auth: {
                user: process.env.LOGIN,
                pass: process.env.PASSWORD
            }
        })

        let mailOptions = {
            from: 'm.grzymowicz@wp.pl',
            to: 'm.grzymowicz@wp.pl',
            // replyTo: 'test@requestaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            // console.log('Message sent: %s', info.messageId);
            // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
            
            
        })
    })   
})

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('portfolio/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'portfolio', 'build', 'index.html'));
    });
  }


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})


