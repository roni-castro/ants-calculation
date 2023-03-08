module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@redux': './src/redux',
            '@apiTypes': './src/apiTypes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ]
    ]
  }
}
