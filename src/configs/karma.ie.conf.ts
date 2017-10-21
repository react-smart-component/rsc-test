
import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    const browsers: string[] = [];
    if (process.platform === 'win32') {
        browsers.push('IE');
    } else {
        browsers.push('Chrome');
    }
    config.set(createKarmaConfig({
        browsers,
    }));
};
