const path = require('path');

module.exports = {
  watch: false,
  watchOptions: {
    // ignored: /node_modules/,
    ignored: '**/node_modules',
  },
  stats: { // The stats option lets you precisely control what bundle information gets displayed.
    errorDetails: true, // whether to display the errors
    children: false, // whether to add information about the children
    outputPath: true, // Tells stats to show the outputPath
    publicPath: true, // Tells stats to show the publicPath
  },
  mode: 'development',
  entry: './src/index.js', // входная точка - исходный файл
  output: {
    // Use the correct separators. I.e. path.resolve(__dirname, 'app/folder')
    // or path.join(__dirname, 'app', 'folder')
    path: path.resolve(__dirname, '/public'), // путь к каталогу выходных файлов - папка public
    publicPath: 'auto',
    filename: 'main.js', // название создаваемого файла
  },
  devServer: { // devServer определяют конфигурацию запускаемого веб-сервера,
    // на котором будет развертываться тестируемое приложение.
    historyApiFallback: true, // указывает, что будет использоваться HTML5 History API.
    // Это может быть полезно, если приложение использует маршрутизацию.
    static: { // static устанавает настройки для статических файлов. В данном случае эта секция нам
      // нужна для установки каталога, где располагается файл index.html.
      directory: path.join(__dirname, '/public'), // В частности, параметр directory указывает, где этот файл
      // находится - в данном случае это корневой каталог проекта, поэтому применяется путь "/".
    },
    port: 3000, // Опция port указывает, что веб-сервер будет запускаться на порту 8081, то есть к
    // приложению мы сможем обратиться по адресу http://localhost:8081. А опция open: true указывает,
    // что при запуске веб-сервера приложение будет автоматически открываться в веб-браузере.
    open: true,
  },
  module: { // Для загрузки файлов в webpack необходимы загрузчики, которые собственно и определяют
    // правила загрузки и обработки файлов.
    rules: [ // загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /node_modules/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // определяем загрузчик, для компиляции из jsx в js необходим компилятор babel
        options: {
          presets: ['@babel/preset-react'], // используемые плагины
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          // 'adjust-sourcemap-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //           {
          //             // Options
          //           },
          //         ],
          //       ],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.json5$/i,
        type: 'json',
        use: ['file-loader'],
      },
    ],
  },
};
