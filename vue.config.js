const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    publicPath:'./',
    lintOnSave : false,
    configureWebpack: 
    {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    devServer:
    {
        host: '0.0.0.0',
        port:443,
        disableHostCheck: true
    }
}
