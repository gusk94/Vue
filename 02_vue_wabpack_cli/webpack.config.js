const VueLoaderPlugin = require('vue-loader/lib/plugin') // module.exports 와 한 세트
const path = require('path')

// node.js 에서는 module 에서 특정 값을 export 하기 위해서 아래와 같이 module.exports 에 export 할 값들을 정의
module.exports = {
    mode: 'development', // 상업용은 production
    // 모든 파일들의 시작점
    entry: {
        // __dirname : 최상위 위치 (Django 의 BASE_DIR)
        app: path.join(__dirname, 'src', 'main.js')
    },
    // webpack 은 기본적으로 js 만 변환가능, 따라서 css 나 html 등은 모듈을 통해서 webpack 이 이해할 수 있도록 변환 필요
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    // webpack 을 통해서 번들된 결과를 추가 처리하는 부분
    plugins: [
        new VueLoaderPlugin(),
    ],
    // webpack 을 통해서 번들된 결과물이 정의되는 곳
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}