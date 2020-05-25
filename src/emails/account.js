const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'idozri@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'idozri@gmail.com',
        subject: `Why like this`,
        text: `Goodbye ${name}. i hope to see you back soon.`
    })
}

module.exports = {
    sendWellcomeEmail,
    sendCancelationMail
}