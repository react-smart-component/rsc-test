
import path from 'path';
import fs from 'fs';
import createKarmaCommonConfig from './createKarmaCommonConfig';

const userKarmaConfigPath = path.join(process.cwd(), 'karma.conf.js');
let createUserKarmaConfig = null;

if (fs.existsSync(userKarmaConfigPath)) {
    createUserKarmaConfig = require(userKarmaConfigPath);   // eslint-disable-line import/no-dynamic-require
}

export default (otherConfigs) => {
    let userConfig = createKarmaCommonConfig();
    if (createUserKarmaConfig) {
        userConfig = (createUserKarmaConfig as any)(userConfig);
    }
    userConfig = {
        ...userConfig,
        ...otherConfigs,
    };
    return userConfig;
};
