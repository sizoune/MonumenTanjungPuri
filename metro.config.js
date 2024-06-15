// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

config.transformer.getTransformOptions = async () => ({
  transform: {
    // Inline requires are very useful for deferring loading of large dependencies/components.
    // For example, we use it in app.tsx to conditionally load Reactotron.
    // However, this comes with some gotchas.
    // Read more here: https://reactnative.dev/docs/optimizing-javascript-loading
    // And here: https://github.com/expo/expo/issues/27279#issuecomment-1971610698
    inlineRequires: true,
  },
})

// This helps support certain popular third-party libraries
// such as Firebase that use the extension cjs.
config.resolver.sourceExts.push("cjs")

// SVG Transformer
// Add the SVG transformer configuration
const { getDefaultConfig: getDefaultExpoConfig } = require("@expo/metro-config")

const defaultConfig = getDefaultExpoConfig(__dirname)

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer")
config.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg")
config.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, "svg"]

module.exports = config
