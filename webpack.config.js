const path = require('path')
module.exports = {
    resolve: {
        alias: {
            "_c": path.resolve(__dirname, 'src/components'),
            "_C": path.resolve(__dirname, 'src/config'),
            "_a": path.resolve(__dirname, 'src/action'),
            "_u": path.resolve(__dirname, 'src/util'),
            "_p": path.resolve(__dirname, 'src/PageView'),
            "_s": path.resolve(__dirname, 'src/styles'),
        }
    }
}