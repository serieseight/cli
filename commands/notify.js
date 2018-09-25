const chalk = require('chalk')
const inquirer = require('inquirer')
const nodemailer = require('nodemailer')

const notifications = [
  {
    subject: 'Hello world!',
    message: `Nice to meet you!`,
  },
  {
    subject: 'Reminder: production changes',
    message: `It is important to remember that changes that have even the slightest chance of causing errors, should not be run directly on a production server (at least without testing somewhere else first).

This includes changes such as:
  - updating plugins
  - changing config
  - etc.`,
  },
]

module.exports = (team, email) => {
  if (team.length) {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'name',
          message: 'Who would you like to notify?',
          choices: team.map(({ name }) => name),
        },
        {
          type: 'list',
          name: 'service',
          message: 'How would you like to notify them?',
          choices: email.map(({ name }) => `Email (${name})`),
        },
        {
          type: 'list',
          name: 'subject',
          message: 'What nofification would you like to send?',
          choices: notifications.map(({ subject }) => subject),
        }
      ])
      .then(({ name, service, subject }) => {
        console.log(chalk.dim(`Sending notification to ${name}...`))

        const emailName = service.split('(').pop().slice(0, -1)

        const mailgun = email.filter(e => e.name === emailName)[0]
        const notification = notifications.filter(n => n.subject === subject)[0]
        const to = team.filter(m => m.name === name)[0].email

        const transporter = nodemailer.createTransport({
          host: mailgun.host,
          port: mailgun.ports[0],
          secure: false,
          auth: {
            user: mailgun.user,
            pass: mailgun.password,
          },
        })

        const options = {
          from: '"S8 bot 🤖" <info@serieseight.com>',
          to,
          subject: notification.subject,
          text: `Hi ${name}!

${notification.message}

-
❤️
S8 bot 🤖`,
        }

        transporter.sendMail(options, (err, info) => {
          if (err) {
            return console.error(err)
          }

          console.log(chalk.bold.green(`Notification sent!`))
        })
      })
  } else {
    console.log(`${chalk.bold.red('No team members to notify.')}`)
  }
}
