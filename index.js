#!/usr/bin/env node

const chalk = require('chalk')
const helloCmd = require('./commands/hello')
const package = require('./package.json');

const args = process.argv.splice(2)

switch(args[0]) {
  case '--version':
  case '-v':
    console.log(package.version)
    break

  case 'hello':
    helloCmd(args)
    break

  default:
    console.log(
      `The ${chalk.bold.red(args.join(' '))} command is not defined... yet!`
    )
}
