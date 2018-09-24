const chalk = require('chalk')
const { version } = require('../package.json')

module.exports = () => {
  console.log(`${chalk.green('Version:')} ${chalk.bold(version)}`)
}
