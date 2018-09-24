const chalk = require('chalk')

module.exports = (team, [cmd]) => {
  switch (cmd) {
    case 'list':
    case undefined:
      team.length
        ? team.map(({ name, email }) => console.log(`${chalk.bold.green(name)} - ${email}`))
        : console.log(`${chalk.bold.red('No team members.')}`)
      break

    default:
      console.log(
        `The ${chalk.bold.red(`team ${cmd}`)} command is not defined... yet!`
      )
  }
}
