const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|@emailjs|react-devtools-core)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
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
    // Creates `style` nodes from JS strings =>
    MiniCssExtractPlugin.loader,
    'css-loader', // Translates CSS into CommonJS
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
      },
    },
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './docs/index.html',
      title: 'Caching',
      minify: {
        collapseWhitespace: isProd ? true : null,
      },
    }),
    new CleanWebpackPlugin(),
    // In order to copy static file =>
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/theme/images/home.jpg'),
    //       to: path.resolve(__dirname, 'dist'),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].[chunkhash].css',
    }),
    () => (isDev ? new ESLintPlugin() : null),
  ];
  // For analyze libraries; check port:8888 =>
  // if (isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }

  return base;
};

module.exports = {
  mode: 'development',
  cache: {
    // По умолчанию файлы кэшируются в памяти в mode: development и не кэшируются вовсе,
    // если mode: production. Для того чтобы Webpack кэшировал все не в оперативной памяти,
    // а в постоянной
    type: 'filesystem', // По умолчанию 'memory'
    // Webpack будет кэшировать билд в node_modules/.cache/webpack и автоматом пропускать то,
    // что не изменилось.
    cacheDirectory: path.resolve(__dirname, '.temporary_cache'), // Устанавливаем диреторию для кэша.
    // Для того чтобы отключить кэш вовсе достаточно просто добавить cache: false,
    // интересным замечанием будет то, что cache: true — то же самое, что и cache: {type: 'memory'}
  },
  // Webpack может компилировать изменения каждый раз, как только мы перекомпилируем файлы.
  // Это очень полезно при разработке. Для того чтобы Webpack "подсматривал" за нашими файлами =>
  watchOptions: {
    // исключите огромные директории, которые не изменяются во время разработки =>
    ignored: /node_modules/,
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    // With optimization, we should use [name] =>
    filename: '[name].[chunkhash].js', // название создаваемого файла, by default - main.js
    path: path.resolve(__dirname, 'dist'), // путь к каталогу выходных файлов
  },
  optimization: optimization(),
  plugins: plugins(),
  resolve: {
    extensions: ['.js', '.json', '.jpg', '.scss', '.png', '.svg', '.pdf', '.webp'],
    // Path pattern. It helps by using it in another files.
    // alias: {
    //   '@images': resolvePath('src/theme/images'),
    // },
  },
  devServer: {
    port: 4200,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: isDev,
    client: {
      // Показывает ошибки при компиляции в самом браузере
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  devtool: isDev ? 'eval-cheap-module-source-map' : 'nosources-source-map',
  // Для загрузки файлов в webpack необходимы загрузчики, которые определяют правила
  // загрузки и обработки файлов.
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // для компиляции из jsx в js необходим компилятор babel
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-jsx',
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
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ),
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          // Conditions for converting to base64
          dataUrlCondition: {
            maxSize: 25 * 1024,
          },
        },
        generator: {
          filename: 'images/[contenthash][ext][query]',
        },
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
