export default {
  ssr: {},
  hash: true,
  title: "dumi",
  mode: "site",
  favicon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
  navs: [
    null,
    { title: "GitHub", path: "https://github.com/GitHubJiKe/lerna-repo" },
  ],
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
  exportStatic: {},
};
