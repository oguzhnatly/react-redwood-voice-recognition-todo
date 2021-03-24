module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  config.module.rules[0].oneOf[5] = {
    test: /\.css$/,
    sideEffects: true,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: __dirname,
          },
        },
      },
    ],
  }

  return config
}
