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
总结结果`rules` 和 `loaders` 同等，`loader` 和 `use` 同等，测试是可以编译的。写法大同小异，一般使用`写法1`即可或者`写法2`

#### 3.1处理js脚本并编译到ES5
添加`.babelrc`文件
```json
{
    "presets": [
        "es2015"
    ]
}
```
```js
//# 参考 webpack.es6.js
{
    test: /\.(jsx|js)$/,
    use: {
        loader: "babel-loader"
    },
    //#忽略 node_modules 目录
    exclude: /node_modules/
}

```

#### 3.2 图片处理
```js
//# file-loader,html-loader
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
    'file-loader'
    ]
}
```
#### 3.3 处理字体
```js
//# url-loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
```
#### 3.4 sass/less 预编译样式处理
[sass-loader配置](https://github.com/webpack-contrib/sass-loader)
[less-loader配置](https://github.com/webpack-contrib/less-loader)
样式文件还在`js`哦，因为是在 `main.js` 中通过`import './index.scss';` 样式的，如果要把css单独抽取出来，需要安装`插件`
```js
//#sass => npm i -D sass-loader node-sass
// LESS
    {
      test: /\.less$/,
        use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
            ]
    }
//#less  => npm i -D less-loader
    {
      test: /\.scss$/,
      use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }
        ]
    }
```
#### 3.5 处理css兼容性
```js
添加插件 `cnpm i postcss-loader autoprefixer -D`
//由于css-loader处理文件导入的方式，因此加载器postcss-loader不能与CSS模块一起使用。 为了使它们正常工作，可以添加css-loader的importLoaders选项
{
    test: /\.css$/,
    use: [
        {
            loader: "style-loader"
        },
        {
            loader: "css-loader",
            options: { importLoaders: 1 }
        },
        { 
            loader: "postcss-loader"
        }
    ]
}
//新建postcss.config.js，并制定编译方式
//postcss.config.js
module.exports = {
    plugins: [
        require("autoprefixer")()
        //设置给最近5个版本的浏览器加前缀
        // require("autoprefixer")({browsers:'last 5 version'})
    ]
}
```
####3.6 使用webpack-dev-server插件修改文件实现自动刷新
注意：首先devServer的publicPath路径是指向内存生产的路径，不在物理硬盘上.
```cmd
npm install --save-dev webpack-dev-server
devServer: {
        publicPath: '/', //注意这里，相应看html的引用路径为如果写 /test/,那么引用就是 /test/+ 资源文件名
        contentBase: './',
        historyApiFallback: true,
        open: true,
        inline: true
    },
//命令
es6": "webpack-dev-server --config webpack.es6.js --inline --open"
```
脚本引入
```html
<body>
    <h1>...</h1>
    <!--
    build.js的路径是相当于publicPath，
    之前不能更新是我一直写了webpack watch 出来的 dist/build.js 中的路径，真是大错特错了。
    -->
    <script src="build.js"></script>
</body>
```
另外如果引入的css文件报错 import './index.css'
试试require('./index.css')引入方式
现在终于修改文件可以实现自动刷新了