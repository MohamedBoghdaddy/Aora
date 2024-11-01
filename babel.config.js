module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo", // Only use babel-preset-expo for Expo projects
    ],
    plugins: ["nativewind/babel"],
  };
};
