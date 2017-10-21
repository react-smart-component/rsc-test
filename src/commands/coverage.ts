
import path from 'path';
import { execLog } from '../util/shell';

const karma = async({ chrome }) => {
    const karmaBin = require.resolve('karma/bin/karma');
    let karmaConfig = path.join(__dirname, '../configs/karma.phantomjs.coverage.conf.js');
    if (chrome) {
        karmaConfig = path.join(__dirname, '../configs/karma.chrome.coverage.conf.js');
    }
    const args = [karmaBin, 'start', karmaConfig];
    await execLog('node', args);
};

export const command = 'coverage';
export const describe = 'test using default karma config';
export const builder = {
    chrome: {
        describe: 'use chrome',
        type: 'boolean',
        default: false,
    },
};
export const handler = async(args) => {
    try {
        await karma(args);
    } catch (ex) {
        throw ex;
    }
};
