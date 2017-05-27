module.exports = function() {
    return {
        watch: true,
        watchOptions: {
            aggregateTimeout: 100,
            ignored: /node_modules/
        },
        devtool: 'cheap-inline-module-source-map'
    };
};