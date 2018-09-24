#!/usr/bin/env node

const chalk = require('chalk')
const helloCmd = require('./commands/hello')
const helpCmd = require('./commands/help')
const installCmd = require('./commands/install')
const notifyCmd = require('./commands/notify')
const setupCmd = require('./commands/setup')
const teamCmd = require('./commands/team')
const upgradeCmd = require('./commands/upgrade')
const versionCmd = require('./commands/version')

const [cmd, ...args] = process.argv.slice(2)

let config = { email: [], team: [] }
let hasSetup = false

try {
  config = require('@serieseight/config')
  hasSetup = true
} catch (err) {
  if (cmd !== 'setup') {
    console.log(`${chalk.yellow(`You still need to run ${chalk.bold('s8 setup')} to complete installation.
Currently ${chalk.bold('s8')} does not have all the data it requires to function.`)}\n`)
  }
}

switch(cmd) {
  case '--help':
  case '-h':
  case undefined:
    helpCmd()
    break

  case '--version':
  case '-v':
    versionCmd()
    break

  case 'hello':
    helloCmd(config.team)
    break

  case 'install':
    installCmd(args)
    break

  case 'notify':
    notifyCmd(config.team, config.email)
    break

  case 'setup':
    setupCmd(hasSetup)
    break

  case 'team':
    teamCmd(config.team, args)
    break

  case 'upgrade':
    upgradeCmd()
    break

  default:
    console.log(
      `The ${chalk.bold.red(cmd)} command is not defined... yet!`
    )
}
