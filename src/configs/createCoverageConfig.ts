
export default (config) => {
    const karmaConfig = config;

    karmaConfig.webpack.module.rules.push(
        {
            enforce: 'post',
            test: /\.(j|t)sx?$/,
            include: /src\//,
            exclude: /node_modules/,
            use: {
                loader: require.resolve('istanbul-instrumenter-loader'),
                options: { esModules: true },
            },
        },
    );

    return karmaConfig;
};
