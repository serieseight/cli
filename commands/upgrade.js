const { exec } = require('child_process')
const { name } = require('../package.json')

module.exports = args => {
  console.log('Upgrading...')

  exec(`npm i -g ${name}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err)

      return
    }

    console.log('Upgrade complete. Go forth and build things.')
  })
}
