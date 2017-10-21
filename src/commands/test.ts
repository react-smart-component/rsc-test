import path from 'path';
import { execLog } from '../util/shell';

const karma = async ({ chrome, firefox, ie, safari, phantomjs, singleRun }) => {
    const karmaBin = require.resolve('karma/bin/karma');
    let karmaConfig = path.join(__dirname, '../configs/karma.conf.js');
    if (chrome) {
        karmaConfig = path.join(__dirname, '../configs/karma.chrome.conf.js');
    } else if (firefox) {
        karmaConfig = path.join(__dirname, '../configs/karma.firefox.conf.js');
    } else if (ie) {
        karmaConfig = path.join(__dirname, '../configs/karma.ie.conf.js');
    } else if (safari) {
        karmaConfig = path.join(__dirname, '../configs/karma.safari.conf.js');
    } else if (phantomjs) {
        karmaConfig = path.join(__dirname, '../configs/karma.phantomjs.conf.js');
    }
    const args = [karmaBin, 'start', karmaConfig];
    if (singleRun) {
        args.push('--single-run');
    }
    await execLog('node', args);
};

export const command = 'karma';
export const describe = 'test using default karma config';
export const builder = {
    chrome: {
        describe: 'use chrome',
        type: 'boolean',
        default: false,
    },
    firefox: {
        describe: 'use firefox',
        type: 'boolean',
        default: false,
    },
    ie: {
        describe: 'use ie',
        type: 'boolean',
        default: false,
    },
    safari: {
        describe: 'use safari',
        type: 'boolean',
        default: false,
    },
    phantomjs: {
        describe: 'use phantomjs',
        type: 'boolean',
        default: false,
    },
    singleRun: {
        describe: 'it will run test and exit automatically using single run',
        type: 'boolean',
        default: false,
    },
};
export const handler = async (args) => {
    try {
        await karma(args);
    } catch (ex) {
        throw ex;
    }
};
