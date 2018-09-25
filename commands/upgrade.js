const chalk = require('chalk')
const { exec } = require('child_process')
const { name } = require('../package.json')
const { promisify } = require('util')

const execAsync = promisify(exec)

module.exports = () => {
  console.log(chalk.dim(`Upgrading ${chalk.bold('s8')}...`))

  execAsync(`npm i -g ${name}`)
    .then(() => console.log(`${chalk.bold('s8')} upgraded!`))
    .then(() => console.log(chalk.dim('Upgrading private dependencies...')))
    .then(() => execAsync('npm i -g git+ssh://git@github.com:serieseight/config.git#master'))
    .then(() => console.log('Private dependencies upgraded!'))
    .then(() => console.log(chalk.bold.green('Upgrade complete!')))
    .catch(err => console.error(err))
}
