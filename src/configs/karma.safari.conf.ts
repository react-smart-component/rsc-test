
import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    const browsers = ['Safari'];
    config.set(createKarmaConfig({
        browsers,
    }));
};
