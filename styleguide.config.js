const config = require('react-scripts/config/webpack.config');
const {override, fixBabelImports, addLessLoader,addWebpackAlias} = require('customize-cra');
const varConfig = require('./modifyVars.config');
const alias = require('./webpack.config').resolve.alias;
const merge = require('webpack-merge');
// console.log(override()(config('development')),'---sdf');
const __config =override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: varConfig,
    }), addWebpackAlias(alias),(config,env) => {
        if(process.env.NODE_ENV==='production'){
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console=true;
        }
        return config;
    }
)(config(process.env.NODE_ENV));
console.log(process.env.NODE_ENV,'=====')
module.exports = {
    webpackConfig:__config
}
