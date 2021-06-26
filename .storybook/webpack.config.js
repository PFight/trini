const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
var path = require('path');

module.exports = ({ config }) => {
   config.module.rules = config.module.rules.filter(x => x.test.test && !x.test.test('file.css'));
   config.module.rules.push({
      test: /\.css$/,
      use: [
          { loader: require.resolve('style-loader') },
          {
              loader: require.resolve('css-loader'),
              options: {
                  importLoaders: 1
              },
          }
      ]
   })
   config.resolve.plugins = [
     new TsConfigPathsPlugin({ configFileName: path.resolve(__dirname, '../tsconfig.json') })
   ];
   return config;
};
