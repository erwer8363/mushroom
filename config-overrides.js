/**
 * Created by ever on 2019/12/8.
 */
const {override, fixBabelImports, addDecoratorsLegacy} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    addDecoratorsLegacy()
)