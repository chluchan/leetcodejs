module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadless'],
    files: [
      { pattern: 'test-context.js' }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'test-context.js': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          { test: /\.js/, exclude: /node_modules/, use: 'babel-loader' }
        ]
      },
      watch: true
    },
    reporters: ['spec'],
  });
};

