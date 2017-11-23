# webpack-demo
webpack练习

### 1 简单编译js文件(无配置文件)
  建立`main.js`,引入`mod.js`模块，终端输入 `webpack main.js build.js` 编译 `main.js` 文件

### 2 添加配置文件
添加一个 `webpack.config.js` 来填写相关配置
运行 `webpack` ,浏览器打开 `index.html`，会看到页面输出 `heoll webpack`

### 2.1 引入文件路径
引入文件路径，并使用`--config`参数指定配置文件，默认`webpack`指向`webpack.config.js`
`webpack --config webpack.config.js`
```js
const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        //#引入路径
        path: path.resolve(__dirname, 'dist'), 
        filename: 'build.js'
    }
}
```