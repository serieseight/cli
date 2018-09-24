const chalk = require('chalk')

module.exports = () => {
  console.log(`${chalk.green('Usage:')} ${chalk.bold('s8 <command>')}

Where ${chalk.bold('<command>')} is one of:
    hello
    install
    setup
    team
    upgrade`)
}
