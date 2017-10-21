
import path from 'path';

export default () => {
    const indexSpec = path.join(process.cwd(), '__tests__/index.js');
    const files = [
        require.resolve('console-polyfill/index.js'),
        require.resolve('es5-shim/es5-shim.js'),
        require.resolve('es5-shim/es5-sham.js'),
        require.resolve('es6-promise/dist/es6-promise.js'),
        indexSpec,
    ];
    const preprocessors = {};
    preprocessors[indexSpec] = ['webpack'];
    return {
        reporters: ['mocha'],
        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd',
            },
        },
        frameworks: ['mocha'],
        files,
        preprocessors,
        webpack: {
            externals: {
                'react-addons-test-utils': true,
                'react/lib/ExecutionEnvironment': true,
                'react/addons': true,
                'react/lib/ReactContext': 'window',
            },
            resolve: {
                modules: [
                    'node_modules',
                ],
                extensions: ['.tsx', '.ts', '.web.js', '.jsx', '.js', '.json'],
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: [
                            'babel-loader',
                            {
                                loader: 'awesome-typescript-loader',
                                options: {
                                    transpileOnly: true,
                                },
                            },
                        ],
                    },
                ],
            },
        },
        webpackServer: {
            noInfo: true, // please don't spam the console when running in karma!
        },
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-coveralls'),
            require('karma-coverage'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-firefox-launcher'),
            require('karma-ie-launcher'),
            require('karma-mocha'),
            require('karma-mocha-reporter'),
            require('karma-phantomjs-launcher'),
            require('karma-safari-launcher'),
            require('karma-webpack'),
        ],
    };
};
