const chalk = require('chalk')
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)

module.exports = (hasSetup) => {
  if (hasSetup) {
    console.log(`${chalk.green(`You've already successfully ran ${chalk.bold('s8 setup')}!`)}

You only have to run this command once.
After that please use ${chalk.bold('s8 upgrade')} to upgrade ${chalk.bold('s8')} and all of its dependencies.
    `)
  } else {
    console.log(chalk.dim('Installing private dependencies...'))

    execAsync('npm i --no-save git+ssh://git@github.com:serieseight/config.git#master')
      .then(() => console.log('Private dependencies installed!'))
      .then(() => console.log(chalk.bold.green('Setup complete!')))
      .catch(err => console.error(err))
  }
}
