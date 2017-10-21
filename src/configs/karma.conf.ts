
import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    const browsers = ['Chrome', 'Firefox', 'Safari'];
    if (process.platform === 'win32') {
        browsers.push('IE');
    }
    config.set(createKarmaConfig({
        browsers,
    }));
};
