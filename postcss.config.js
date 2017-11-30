module.exports = {
    plugins: [
        require("autoprefixer")()
        //设置给最近5个版本的浏览器加前缀
        // require("autoprefixer")({browsers:'last 5 version'})
    ]
}