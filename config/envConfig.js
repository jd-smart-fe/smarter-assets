#!/usr/bin/env node
/**
 * smarter env 命令下的配置文件路径（后续可以添加其他配置文件）
 *
 * @prop {string} source 配置文件原路径
 * @prop {string} target 配置文件目标路径
 */
const path = require('path');
 
module.exports = {
  all:['vscode', 'eslint', 'editorconfig'],
  vscode: {
    original: {
      source: path.resolve(__dirname, '../assets/env/vscodeSettings.json'),
      target: '.vscode/settings.json',
    },
    rule: {},
  },
  editorconfig: {
    original: {
      source: path.resolve(__dirname, '../assets/env/editorconfig'),
      target: '.editorconfig',
    },
    rule: {},
  },
  eslint: {
    original: {
      source: path.resolve(__dirname, '../assets/env/browserrc.js'),
      target: '.eslintrc',
    },
    rule: {
      b: {
        source: path.resolve(__dirname, '../assets/env/browserrc.js'),
      },
      browser: {
        source: path.resolve(__dirname, '../assets/env/browserrc.js'),
      },
      n: {
        source: path.resolve(__dirname, '../assets/env/noderc.js'),
      },
      node: {
        source: path.resolve(__dirname, '../assets/env/noderc.js'),
      },
      r: {
        source: path.resolve(__dirname, '../assets/env/reactrc.js'),
      },
      react: {
        source: path.resolve(__dirname, '../assets/env/reactrc.js'),
      },
      v: {
        source: path.resolve(__dirname, '../assets/env/vuerc.js'),
      },
      vue: {
        source: path.resolve(__dirname, '../assets/env/vuerc.js'),
      }
    },
  },
};
  