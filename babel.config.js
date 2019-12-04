module.exports = function (api) {
  api.cache(true);

  const presets = [["@babel/preset-env"]];
  const plugins = [
        [
          "module-resolver",
          {
            "root": ["./src/**"]
          }
        ],
        "@babel/plugin-transform-runtime",
        "babel-plugin-lodash",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
      ];

  return {
    presets,
    plugins
  };
}