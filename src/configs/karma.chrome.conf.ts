
import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    const browsers = ['Chrome'];
    config.set(createKarmaConfig({
        browsers,
    }));
};
