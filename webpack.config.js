// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export 
module.exports = {
    //parcel main. js
    //파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname,'dist'),
        // filename: 'main.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/, 
                // /\.css$/ :.css로 확장자로 끝나는 것을 찾는 정규식 $ < 앞에있는 내용으로 끝나느 특정한 문자를 찾음 
               // /\.s?css$/ : s가 있을 수도 없고 없을 수도 있음 
               // -> css 글자를 찾는데 s가 앞에 붙어있을 수도 있고 안 붙어있을 수도 있지만 붙어서
               // s가 붙어있든 안붙어있는 경우들을 포함해서 찾아달라 
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),  
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],
    // 개발 서버 옵션
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}