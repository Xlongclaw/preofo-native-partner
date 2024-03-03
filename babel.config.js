module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
          alias: {
            "@screens/*": "./src/screens/*",
            "@containers/*": "./src/containers/*",
            "@components/*": "./src/components/*",
          },
        },
      ],
    ],
  };
};
