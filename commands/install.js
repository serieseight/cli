const chalk = require('chalk')
const inquirer = require('inquirer')
const { exec } = require('child_process')

const projectTypes = {
  Craft: 'craft-starter',
  Statamic: 'statamic-base',
}

module.exports = args => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Project type:',
        choices: Object.keys(projectTypes)
      },
    ])
    .then(({ name, type }) => {
      console.log(`Great! Setting up a fresh ${type} project. Hold on tight...`)

      exec(`git clone git@github.com:serieseight/${projectTypes[type]}.git ${name}`, (err, stdout, stderr) => {
        if (err) {
          console.error(err)

          return
        }

        exec(`rm -rf ${name}/.git`, (err, stdout, stderr) => {
          if (err) {
            console.error(err)

            return
          }

          console.log('Setup complete. 🙌')
        })
      })
    })
}
