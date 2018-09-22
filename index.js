#!/usr/bin/env node

const chalk = require('chalk')

const args = process.argv.splice(2)

console.log(
  `The ${chalk.bold(args.join(' '))} command is not defined... yet!`
)
