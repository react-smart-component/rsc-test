import createKarmaConfig from './createKarmaConfig';
import createCoverageConfig from './createCoverageConfig';

module.exports = (config) => {
    config.set(createCoverageConfig(createKarmaConfig({
        browsers: ['PhantomJS'],
        singleRun: true,
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered
            // (useful if karma exits without killing phantom)
            exitOnResourceError: true,
        },
    })));
};
