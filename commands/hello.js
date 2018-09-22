const chalk = require('chalk')
const inquirer = require('inquirer')

module.exports = args => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'user',
        message: 'Who the heck are you?',
        choices: [
          'Aryeh',
          'Colin',
          'Ed',
          'Fran',
          'Ildar',
          'John',
          'Laszlo',
          'Leo',
          'Mario',
          'Mathew',
          'Monika',
          'Steve',
        ]
      }
    ])
    .then(({ user }) => {
      console.log(
        `Yay, it's ${chalk.bold.green(user)}! My favourie team member.`
      )
    })
}
