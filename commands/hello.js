const chalk = require('chalk')
const inquirer = require('inquirer')

module.exports = team => {
  if (team.length) {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'name',
          message: 'Who the heck are you?',
          choices: team.map(({ name }) => name)
        }
      ])
      .then(({ name }) => {
        console.log(
          `Yay, it's ${chalk.bold.green(name)}! My favourite team member.`
        )
      })
  } else {
    console.log(`Hello!`)
  }
}
