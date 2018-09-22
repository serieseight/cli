#!/usr/bin/env node

const chalk = require('chalk')
const helloCmd = require('./commands/hello')
const helpCmd = require('./commands/help')
const versionCmd = require('./commands/version')

const args = process.argv.splice(2)

switch(args[0]) {
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
    helloCmd(args)
    break

  default:
    console.log(
      `The ${chalk.bold.red(args.join(' '))} command is not defined... yet!`
    )
}
