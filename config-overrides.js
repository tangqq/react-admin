const varConfig = require('./modifyVars.config');
const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: varConfig,
    }), (config,env) => {
        if(process.env.NODE_ENV==='production'){
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console=true;
        }
        return config;
    }
)