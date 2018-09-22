#!/usr/bin/env node

const chalk = require('chalk')
const helloCmd = require('./commands/hello')
const helpCmd = require('./commands/help')
const installCmd = require('./commands/install')
const teamCmd = require('./commands/team')
const upgradeCmd = require('./commands/upgrade')
const versionCmd = require('./commands/version')

const [cmd, ...args] = process.argv.slice(2)

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

  case 'team':
    teamCmd(args)
    break

  case 'upgrade':
    upgradeCmd()
    break

  case 'install':
    installCmd(args)
    break

  case 'hello':
    helloCmd()
    break

  default:
    console.log(
      `The ${chalk.bold.red(cmd)} command is not defined... yet!`
    )
}
