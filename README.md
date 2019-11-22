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

#### 了解 npm 包的结构
- `devDependencies`

项目开发过程中的依赖

- `dependencies`

项目源码的依赖

- `peerDependencies`

项目源码的依赖。但是依赖的包不再安装在包的`node_modules`目录下，而是安装在项目的`node_modules`下，使得整个依赖树更加扁平，更高效，但安装使用的过程中要注意文档说明和源码结构。

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

1. 确定配置框架
2. 筛选配置包，了解包的结构和配置说明
- [eslint-config-airbnb vs eslint-config-standard vs eslint-config-react-app](https://www.npmtrends.com/eslint-config-airbnb-vs-eslint-config-standard-vs-eslint-config-react-app)
3. 组合配置
    - `.eslintrc.js`
    - `.stylelintrc.js`
    - `.prettierrc`
    - `.vscode/setting.json`
4. 设计`npm`脚本
    - `npm script`
    - `husky`
    -  `lint-stage`
5. 项目 Lint 修复及规则调整


### 经典 Lint 配置包解析

#### [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- 项目的前置依赖
```javascript
"eslint": "^6.2.2",
"eslint-plugin-import": "^2.18.0",
"eslint-plugin-node": "^10.0.0",
"eslint-plugin-promise": "^4.2.1",
"eslint-plugin-standard": "^4.0.0",
"tape": "^4.8.0"
```
通过多个plugins, 引入了许多新的校验规则。最终输出配置。
- 配置方式
    - 安装前置依赖
    - 使用 `extends: ['standard']`

### [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- 项目依赖
```javascript
"eslint-config-airbnb-base": "^14.0.0",
"object.assign": "^4.1.0",
"object.entries": "^1.1.0"
```
- 项目前置依赖
```javascript
"eslint": "^5.16.0 || ^6.1.0",
"eslint-plugin-import": "^2.18.2",
"eslint-plugin-jsx-a11y": "^6.2.3",
"eslint-plugin-react": "^7.15.1",
"eslint-plugin-react-hooks": "^1.7.0"
```
- 配置方式
    - 安装前置依赖
    - 使用 `extends: ['airbnb']`

### [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
Turns off all rules that are unnecessary or might conflict with Prettier.
关闭所有和`Prettier`有冲突的规则
- 项目前置依赖
基本没有
- 配置方式
    - 在 `ESLint` 的`extends`中配置
```JavaScript
"prettier",
"prettier/@typescript-eslint",
"prettier/babel",
"prettier/flowtype",
"prettier/react",
"prettier/standard",
"prettier/unicorn",
"prettier/vue"
```
引入了那些特殊的配置包，对应的需要一个抵消冲突的prettier 配置

### [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
通过 `ESLint` 运行 `Prettier` 规则。
- 项目的前置依赖
基本没有
- 配置方式
```
"extends": ["plugin:prettier/recommended"]
```
启用引入的新规则

### [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- 项目的前置依赖
```javascript
"@typescript-eslint/parser": "^2.0.0",
"eslint": "^5.0.0 || ^6.0.0"
```
ts 项目需要使用 `@typescript-eslint/parser` 进行代码解析

- 配置方式
```javscript
"extends": ["plugin:@typescript-eslint/recommended"]
```