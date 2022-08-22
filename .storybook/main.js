module.exports = {
  // 编译路径匹配规则
  stories: [
    "../packages/components/**/*.stories.mdx",
    "../packages/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // 插件
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-swc",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
      options: {
        // 开启文件层面的缓存，开发环境加速
        fsCache: true,
        // 懒编译，默认对懒加载的组件懒编译。只有路由命中之后webpack才编译文件
        lazyCompilation: true,
      },
    },
    disableTelemetry: true, // 禁止往🇺🇸的服务器发数据
  },
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};
