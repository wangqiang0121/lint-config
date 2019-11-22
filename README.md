### 配置 Lint 的目的
- 减少代码bug
- 规范代码格式

### 社区常用的 Lint 工具
- JavaScript：ESLint
- TypeScript：TSLint（逐步淘汰）
- 代码格式化：Prettier
- 样式代码校验/格式化：Stylelint

### Lint 配置基本概念

#### 核心：ESLint
- ESLint的基本配置组成。
- 核心概念：`plugins`和`extends`
    - plugins: 包含新增的、非 ESLint 官方提供的校验规则，俗称“规则集合”。通常以`eslint-plugins-xxxx`开头。
    - extends: 针对一系列的校验规则的配置，俗称“配置集合”。通常以`eslint-config-xxxx`开头。
    - 关系：可能互相包含，也可能独立存在。具体以官方使用说明和源码结构决定。

#### 其他 Lint 配置
- TypeScript
    - [TSLint]() 项目发表声明，表示将在2019年逐步并入 ESLint 的生态中，以插件的形式让ESLint 更好的支持 TypeScript 代码检查。
    - [Roadmap: TSLint -> ESLint](https://github.com/palantir/tslint/issues/4534)
    - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

- 代码格式化
    - [Prettier](https://prettier.io/docs/en/index.html)
    - [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
    - Prettier 与 Linter 的结合，可以从一定程度上避免两这规则不一致造成的冲突。

- 样式规范
    - [Stylelint](https://github.com/stylelint/stylelint)
    - 独立运行，独立配置。整个配置体系与 ESLint 相似
- precommit 校验
    - husky: 在Git hooks 下执行脚本
    - git stage：对档次提交的增量代码进行校验。
- VS Code配置
    - 安装 `eslint` 插件
    - vscode的配置分为 `User` 和 `Project`

#### 了解 npm `peerDependencies` 概念
项目依赖的包不再安装在包的`node_modules`目录下，而是安装在项目的`node_modules`下，使得整个依赖树更加扁平，更高效，但安装使用的过程中要注意文档说明和源码结构。

### 分析 `create-react-app` 与 `antd-design-pro` 的 Lint 配置

### create-react-app
- ESlint 配置集合
    - [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
    - 配置依赖(支持ts+react)
```javascript
"@typescript-eslint/eslint-plugin": "2.x",
"@typescript-eslint/parser": "2.x",
"babel-eslint": "10.x",
"eslint": "6.x",
"eslint-plugin-flowtype": "3.x",
"eslint-plugin-import": "2.x",
"eslint-plugin-jsx-a11y": "6.x",
"eslint-plugin-react": "7.x",
"eslint-plugin-react-hooks": "1.x"
```

### antd-design-app
- ESLint 配置集合
    - [umi-fabric](https://github.com/umijs/umi-fabric#readme)
    - 配置集合(ts+react+style+prettier)


[eslint-config-airbnb vs eslint-config-standard vs eslint-config-react-app](https://www.npmtrends.com/eslint-config-airbnb-vs-eslint-config-standard-vs-eslint-config-react-app)


### 项目 Lint 配置框架
- 以 `ESLint` 为基础
    - 校验 js 代码的配置包
    - 校验 ts 代码的插件+配置包。因为 ts 是一套独立的代码体系，需要引入新的规则及配置方案。
    - 校验 react 代码的配置包。本质上react仍是js语法体系下的内容，所以只需针对性的配置规则即刻。
    - 代码格式化插件+配置包。新增的规则及配置方案。
- 独立的样式代码校验 `Stylelint`

- 配置框架
    - ESLint
        - airbnb
        - react
        - typescript-eslint
        - prettier
    - Stylelint


### dxymom-hybrid-gaia 与 dxymom-client 项目 Lint 配置


### 实战：搭建项目 Lint 配置


- [eslint-config-airbnb vs eslint-config-standard vs eslint-config-react-app](https://www.npmtrends.com/eslint-config-airbnb-vs-eslint-config-standard-vs-eslint-config-react-app)

