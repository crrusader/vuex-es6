# vuex-es6
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