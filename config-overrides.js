const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' },
    }),

    //绝对路径配置
    addWebpackAlias({        
      ["src"]: path.resolve(__dirname, "src"),
  })
);