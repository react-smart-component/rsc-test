#!/usr/bin/env node

import 'babel-polyfill';
import updateNotifier from 'update-notifier';
import yargs from 'yargs';
const pkg = require('../package.json');

const initializeYargs = () => {
    return yargs.commandDir('./commands').help().version().argv._;
};

updateNotifier({ pkg }).notify();
initializeYargs();
