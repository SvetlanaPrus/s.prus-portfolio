const path = require('path');
// const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: { chunks: 'all' },
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ];
  }
  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    // For development mode (including webpack-dev-server) you can use style-loader,
    // because it injects CSS into the DOM using multiple and works faster.
    // For production builds it's recommended to extract CSS from your bundle => see MiniCss..
    // OBS! Do not use style-loader & mini-css-extract-plugin together.
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
    'css-loader', // Translates CSS into CommonJS
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
        // join: (uri, base) => path.join('../..', base, uri);
      },
    },
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  // watch: false,
  // watchOptions: {
  //   // ignored: /node_modules/,
  //   ignored: '**/node_modules',
  // },
  // stats: { // The stats option lets you precisely control what bundle information gets displayed.
  //   errorDetails: true, // whether to display the errors
  //   children: false, // whether to add information about the children
  //   outputPath: true, // Tells stats to show the outputPath
  //   publicPath: true, // Tells stats to show the publicPath
  // },

  mode: 'development',
  entry: './src/index.js', // входная точка - исходный файл
  output: {
    // With optimization, we should use [name] =>
    filename: '[name].js', // название создаваемого файла, by default main.js
    // Use the correct separators. I.e. path.resolve(__dirname, 'app/folder')
    // or path.join(__dirname, 'app', 'folder')
    path: path.resolve(__dirname, 'dist'), // путь к каталогу выходных файлов
  },

  optimization: optimization(),

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProd ? true : null,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/theme/images/home.jpg'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    () => (isDev ? new ESLintPlugin() : null),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jpg', '.scss', '.png', '.svg', '.pdf', '.webp'],
    // alias: {
    //   '@images': resolvePath('src/theme/images'),
    // },
  },

  devServer: {
    port: 4200,
    hot: isDev,
    // devServer определяют конфигурацию запускаемого веб-сервера,
    // на котором будет развертываться тестируемое приложение.
    // historyApiFallback: true, // указывает, что будет использоваться HTML5 History API.
    // Это может быть полезно, если приложение использует маршрутизацию.
    // static: { // static устанавает настройки для статических файлов. В данном случае эта секция
    // // нам нужна для установки каталога, где располагается файл index.html.
    //   directory: path.join(__dirname, '/public'), // в данном случае это корневой
    //   каталог проекта, поэтому применяется путь "/"},
    //   port: 4200, // веб-сервер будет запускаться на порту 3000,
    //   // то есть к приложению мы сможем обратиться по адресу http://localhost:3000. А опция open: true
    //   open: true, // указывает, что при запуске веб-сервера приложение будет автоматически
    //   // открываться в веб-браузере.
    // },
  },

  module: {
    // Для загрузки файлов в webpack необходимы загрузчики, которые определяют правила
    // загрузки и обработки файлов.
    rules: [
      {
        test: /\.jsx?$/, // загрузчик для jsx
        exclude: /node_modules/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // для компиляции из jsx в js необходим компилятор babel
        options: {
          presets: ['@babel/preset-react'], // используемые плагины
        },
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: ['source-map-loader'],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        }],
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders(
          {
            loader: 'sass-loader', // Compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          },
        ),
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: (f) => {
              const dirNameInsideAssets = path.relative(
                path.join(__dirname, 'src/theme'),
                path.dirname(f),
              );
              return `${dirNameInsideAssets}/[name].[ext]`;
            },
          },
        }],
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
      {
        test: /stories\/(.+).tsx$/,
        loader: '@storybook/addon-storysource/loader',
        enforce: 'pre',
      },
      {
        test: /\.pdf$/,
        use: ['file-loader'],
      },
    ],
  },
};
