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
### 2.2 使用npm脚本命令
有时候一直使用那么长的命令，确实不方便
打开`package.json`,在`scripts`中添加一个新的命令
```json
"build":"webpack --config webpack.config.js"
```
运行`npm run build`

### 3 使用加载器
注意：好像新版（3.8+）的加载器写法跟旧版本（1.0|2.0）的不一样，这个我也不大清楚是什么版本，网上都有几种写法
有时候处理的不只有js，还有图片，css等。我们使用加载器来处理，在配置文件中加入
demo：css样式处理
```cmd
#css的加载器
npm i -D style-loader css-loader
```
```js
const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
+    module: {
+        rules: [
+            {
+                test: /\.css$/,
+                use: [
+                    'style-loader',
+                    'css-loader'
+                ]
+            }
+        ]
+    }
}
```
有几种写法好像都可以用，不知道有没版本区分或者是高版本兼容低版本写法
```js
//#写法1
module: {
    //rules 可换成 loaders
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      //loader: 'style-loader!css-loader'
    }
  ]
}
```
```js
//#写法2
module: {
    loaders: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
    ]
}
```
```js
//#写法3
module: {
    rules: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
    ]
}
```
总结结果rules和loaders 同等， loader 和 use 同等，测试是可以编译的。写法大同小异，一般使用写法1即可或者写法2