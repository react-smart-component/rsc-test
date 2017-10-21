
import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    const browsers = ['Firefox'];
    config.set(createKarmaConfig({
        browsers,
    }));
};
