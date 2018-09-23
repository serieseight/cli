const chalk = require('chalk')
const { team } = require('../config')

module.exports = ([cmd]) => {
  switch (cmd) {
    case 'list':
    case undefined:
      team.map(({ name, email }) => console.log(`${name} - ${email}`))
      break

    default:
      console.log(
        `The ${chalk.bold.red(`team ${cmd}`)} command is not defined... yet!`
      )
  }
}
