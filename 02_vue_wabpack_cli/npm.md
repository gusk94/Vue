```bash
# node project start
$ npm init

# vue install
$ npm install vue # === "npm i vue"

# webpack install
# -D 는 개발환경에서만 사용하겠다는 옵션
# webpack 은 개발자의 편의성을 위한 툴
$ npm i -D webpack webpack-cli

# webpack 설정 파일 생성
$ touch webpack.config.js

# webpack 은 js 파일만 변환 가능, 때문에 vue 파일 및 template 를 webpack 이 변환할 수 있도록 도와주는 라이브러리
$ npm install -D vue-loader vue-template-compiler
$ npm install vue-style-loader css-loader -D

# build
$ npm run build
```

