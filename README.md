# vuex
> `vuex`

- [x]state
- [x]mutations
- [x]actions
- [x]getters

***

不懂问[baidu](http://www.baidu.com)。

1.   map映射
1.   mutation只能是同步任务
1.   异步获取api通过action来commit



<!-- <table>
    <tr>
        <td>Foo</td>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
        <td>`Foo`</td>
    </tr>
</table> -->
## tips
state|mutations|actions|getters
:||
数据|操作数据|异步操作数据|过滤数据


<kbd>vuex</kbd>
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        count: 100,
    },
    mutations:{
        deIncrement(state,payload){
            state.count -= payload.msg
        }
    },
    actions: {
        incrementAsync(context,payload) {
            setTimeout(() => {
                context.commit('deIncrement',payload)
            }, 1000)
        }
    }
})
```
<kbd>vue</kbd>
```Javascript
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            msg:5
        }
    },
    computed:{
        ...mapState({
            num: state => {
                return state.count
            }
        })
    },
    methods:mapActions({
        increseHandle:'incrementAsync'
    })
}
```
<kbd>template</kbd>
```html
<input type="button" @click='increseHandle({msg})'>
```

# ES6

### module.exports和exports

##### node模块的exports和module.exports
---
exports是module.exports的引用，即var exports = module.exports。在一个模块的开头，这两个值都指向同一个空对象：exports = module.exports={}。所以，exports只是后者的引用。
```
// a.js  
var a = 5;  
var b = function () {  
    console.log(33);  
}  
module.exports.a = a  
module.exports.b = b  
```

>  module.exports.a = a  
>  module.exports.b = b  
>  //等同于下面的写法  
>  module.exports = {  
>      a:a,  
>      b:b  
>  }  

```
// b.js  
var mod = require('./a') // require方法用于加载模块  
console.log(mod.a);  
mod.b()  
```

> 控制台输入 node b.js  
>  log 5  
>  log 33

模块默认返回的是module.exports,即便你在自定义的模块中明确写出return exports，真正返回的仍然是module.exports。例如:

```
//a.js
var a =100;
exports=a;//module.exports={}, exports=a
return exports;//明确写出返回exports
```

刚开始的时候，exports和module.exports相等(值是空对象的地址），但是后来exports又被赋值了一个变量a(值等于a），这样exports和module.exports就不是一回事了(给对象的引用赋值，不会改变原来的对象)。

```
//b.js
var modA = require('./a');
console.log(modA) // {}
```  

返回的是空对象，说明a.js返回的值是module.exports而不是exports。

>exports.a =a;  
>exports={a:a}, module.exports = {a:a}    
>//上面两种形式不同结果相同，exports和module.exports都指向同一个内存空间对象，互相引用绑定，但是一旦直接给exports或者module.exports赋值，两者就代表不同的变量了，最终也只会输出module.exports的赋值

module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

##### ES6中的模块规范export和export default
---
ES6使用 export 和 import 来导出、导入模块。

###### export命令  
export导出的形式为export{接口}，接口为模块中定义的变量，需要一一对应
```
// export.js
var name = 'name';
var age = 13;
export {name, age};
```

```
// import.js
import {name,age} from './export'
console.log(name,age)
```

###### export default命令
export default和export不同于它会给模块一个默认输出，import的时候直接导入默认值,因此一个模块或文件中只能有一个export default
```
// export-default.js

var name = 'name';
var age = 13;
export default {name, age};
```

```
// import.js

import message from './export-default'
// 等同于import default as message from './export-default'
console.log(message.name,message.age)
```

相关链接：  
CommonJS规范，[http://javascript.ruanyifeng.com/nodejs/module.html]  
ES6 Module 的语法，[http://es6.ruanyifeng.com/#docs/module]

[http://javascript.ruanyifeng.com/nodejs/module.html]: http://javascript.ruanyifeng.com/nodejs/module.html "CommonJS规范"
[http://es6.ruanyifeng.com/#docs/module]: http://es6.ruanyifeng.com/#docs/module "ES6 Module 的语法"
