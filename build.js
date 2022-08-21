'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           LG'),
  handle: chalk.white('im-coder-lg'),
  shorthandle: chalk.white('lg'),
  work: chalk.white('Coding adolescent'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('imcoderlg'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~im-coder-lg'),
  github: chalk.gray('https://github.com/') + chalk.green('im-coder-lg'),
  web: chalk.cyan('https://im-coder-lg.github.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('imcoderlg'),
  labelWork: chalk.white.bold("    Work: I'm 14 ; "),
  labelTwitter: chalk.white.bold(' Twitter: imcoderlg'),
  labelnpm: chalk.white.bold('     npm: im-coder-lg'),
  labelGitHub: chalk.white.bold('  GitHub: im-coder-lg'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
