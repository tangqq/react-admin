const varConfig = require('./modifyVars.config');
const {override, fixBabelImports, addLessLoader, addWebpackAlias,addPostcssPlugins} = require('customize-cra');
const pxToView = require('postcss-px-to-viewport')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const path = require('path')
const paths = require('react-scripts/config/paths');
const appPath = require('react-scripts/config/paths').appPath;
const mobileIndexJs = path.resolve(appPath, 'src/mobile.js');
const mobileBuild = path.resolve(appPath, 'build/m');
const isM = process.argv.includes('--mobile')
const alias = require('./webpack.config').resolve.alias;
if (isM) {
    paths.appIndexJs = mobileIndexJs;
    paths.appBuild = mobileBuild;
}
console.log(require('react-scripts/config/paths'))

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: varConfig,
        localIdentName: '[name]_[local]-[hash:base64:5]'
    }),
    addWebpackAlias(alias),
    (isM?addPostcssPlugins([pxToView({
        unitToConvert: 'px',
        viewportWidth: 375,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['bf'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
    })]):null),
    (config) => {
        if (process.env.NODE_ENV === 'production') {
            const terPlugin = config.optimization.minimizer.find(item => {
                const isTer = item.constructor.toString().indexOf('class TerserPlugin') !== -1
                return isTer
            });
            terPlugin.options.terserOptions.compress.drop_console = true;
        }
        return config;
    }
);