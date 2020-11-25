const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paul.mriganka@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the App, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paul.mriganka@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
// sgMail.send({
//     to: 'paul.mriganka@gmail.com',
//     from: 'paul.mriganka@gmail.com',
//     subject: 'Test EMail from npm Send Grid',
//     text: 'I hope it works'
// })
