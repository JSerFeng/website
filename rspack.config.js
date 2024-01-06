const {
  HtmlRspackPlugin,
  HotModuleReplacementPlugin,
} = require("@rspack/core");

const isDev = process.env.NODE_ENV === "development";

/**@type {} */
const generalSwcOption = {
  jsc: {
    transform: {
      react: {
        runtime: "automatic",
      },
    },
  },
};

/**@type {import('@rspack/core').Configuration} */
const config = {
  entry: {
    main: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: [/node_modules/],
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsc: true,
              },
              ...generalSwcOption.jsc,
            },
            ...generalSwcOption,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: "./index.html",
    }),
    isDev ? new HotModuleReplacementPlugin() : null,
  ].filter(Boolean),
  optimization: {
    removeEmptyChunks: !isDev,
    removeAvailableModules: true,
    mergeDuplicateChunks: false,
    splitChunks: {
      chunks: "all",
    },
  },
  experiments: {
    rspackFuture: {
      newTreeshaking: true,
      disableApplyEntryLazily: true,
    },
  },
};

module.exports = config;
