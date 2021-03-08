module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-modules-umd", {
    exactGlobals: true,
    globals: {
      index: 'AnimalApi'
    }
  }]
],
};