// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem-exclude": { 
      remUnit: 75,
      exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件（引入的第三方ui的样式不会随之改变）
    }
  }
}
