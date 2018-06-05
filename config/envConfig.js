/**
 * smarter env 命令下的配置文件路径（后续可以添加其他配置文件）
 *
 * @prop {string} source 配置文件原路径
 * @prop {string} target 配置文件目标路径
 */

module.exports = {
  vscode: {
    source: path.resolve(__dirname, '../assets/env/vscodeSettings.json'),
    target: '../.vscode/settings.json'
  },
  editorconfig: {
    source: path.resolve(__dirname, '../assets/env/editorconfig'),
    target: '../.editorconfig'
  },
  eslint: {
    source: path.resolve(__dirname, '../assets/env/eslintrc'),
    target: '../.eslintrc'
  }
};
  