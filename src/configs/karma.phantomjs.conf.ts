import createKarmaConfig from './createKarmaConfig';

module.exports = (config) => {
    config.set(createKarmaConfig({
        browsers: ['PhantomJS'],
        singleRun: true,
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered
            // (useful if karma exits without killing phantom)
            exitOnResourceError: true,
        },
    }));
};
