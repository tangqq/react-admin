const path = require('path')
module.exports = {
    resolve: {
        alias: {
            "Component": path.resolve(__dirname, 'src/components'),
            "A": path.resolve(__dirname, 'src/action'),
            "Src": path.resolve(__dirname, 'src'),
            "U": path.resolve(__dirname, 'src/util'),
            "_p": path.resolve(__dirname, 'src/PageView'),
        }
    }
}