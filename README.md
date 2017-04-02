# auto-textarea

> 基于Vue的高度自适应文本输入框

## Demo

loadding...

## Use Setup (开始)

### Install auto-textarea (安装)

```
$ npm install autoTextarea --save
```

### package.json

```
    "auto-textarea": "^1.0.2"
```

### Use (如何引入)

```
    // 方法一
    // import with ES6
    import Vue from 'vue'
    import autoTextarea from 'autoTextarea'

    // require with Webpack/Node.js
    var Vue = require('vue')
    var autoTextarea = require('autoTextarea')

    // use
    Vue.use(autoTextarea)
```

```
    // 方法二
    // or use with component(ES6)
    import { autoTextarea } from 'autoTextarea'

    export default {
      components: {
        autoTextarea
      }
    }
```

``` html
    // html
    <autoTextarea lineHeight="30px" fontSize="18px" :value="" :change="function"/>
```

## API (props)

| name 名称   | type 类型    |  default 默认值 | des 描述 |
| -------- | :---------: | :------------: | ------- |
| value      | String      |               | 初始值 |
| lineHeight | String      |   18px        | 输入框的行高 |
| fontSize   | String      |   14px        | 输入框文字大小 |
| border     | Boolean     |   false       | 是否带有边框 |
| resize     | Boolean     |   false       | 是否允许拖拽改变大小 |
| change     | Function    |               | 监听内容变化 ， function(val) |

## Dependencies (依赖)

[stylus](https://github.com/stylus/stylus)

[stylus-loader](https://github.com/shama/stylus-loader)

## Licence (证书)

autoTextarea is open source and released under the MIT Licence.

Copyright (c) 2017 hinesboy

