const chalk = require('chalk')
const inquirer = require('inquirer')

module.exports = team => {
  if (team.length) {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'user',
          message: 'Who the heck are you?',
          choices: team.map(({ name }) => name)
        }
      ])
      .then(({ user }) => {
        console.log(
          `Yay, it's ${chalk.bold.green(user)}! My favourite team member.`
        )
      })
  } else {
    console.log(`Hello!`)
  }
}
