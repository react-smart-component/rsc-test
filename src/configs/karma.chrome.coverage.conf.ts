import createKarmaConfig from './createKarmaConfig';
import createCoverageConfig from './createCoverageConfig';

module.exports = (config) => {
    const browsers = ['Chrome'];
    config.set(createCoverageConfig(createKarmaConfig({
        browsers,
        singleRun: true,
    })));
};
