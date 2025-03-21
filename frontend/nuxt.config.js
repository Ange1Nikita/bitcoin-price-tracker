export default {
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!chart\.js)/,
      });
    },
  },
};