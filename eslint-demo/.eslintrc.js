{
  // 配置 ESLint 解析器，可配置 esprima / babel-eslint / @typescript-eslint/parser
  "parser": "",
  // parser 解析代码时的参数
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {}
  },

  // 指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  // 自定义全局变量
  "global": {
    "var1": "writable",
    "var2": "readonly"
  },

  // 这里指定插件，插件名一般为 eslint-plugin-xxx，这里可以缩写为 xxx
  // 插件提供了除 eslint 规定之外额外的规则
  // plugin 提供了新的规则 + 预设（需要在extends中继承）
  "plugins": [
    "import"
  ],
  // 继承，可以继承多个预设
  // 常见的预设 eslint-config-airbnb 是建立在 eslint 默认规则基础上的预设
  // eg: eslint-config/airbnb/hooks
  // 如果需要 eslint 默认规则之外的规则，就需要引入插件，并继承预设
  // eg: eslint-plugin-import 提供了一堆新的规则 https://www.npmjs.com/package/eslint-plugin-import
  // 同时提供了一系列的预设：plugin:import/errors，plugin:import/warnings
  "extends": [
    "airbnb/hooks",
    "plugin:import/warnings",
    "plugin:import/errors"
  ],

  // 改写具体的校验规则
  "rules": {
  },
}
