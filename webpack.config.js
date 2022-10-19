const path = require('path');

module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    // 모듈이다. 객체다.
    module: {
        // 모듈은 rules array를 요소로 갖는다.
        rules: [
            // rules array는 test를 가진 객체를 갖는다.
            {
                // test는 슬래시 슬래시로 시작한다.
                test: /\.css$/,
                // use 배열로 여러 loader들을 가져올 수 있다.
                // 그냥 가져올땐 loader로, 옵션설정할땐 객체로!
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    'style-loader'
                ]
            },
            {
                test: /\.js$/,
                // exclude 해줬다. 괄호안에다 넣어 줬다.
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}