<template lang="html">
    <div class="bigbox">
        <h2>简易计算</h2>
        <p>{{msg}}</p>
        <div class="">
            <input type="button" value="-" @click='increseHandle'>
            <span>{{num}}</span>
            <input type="button" value="+" @click='addHandle'>
        </div>
        <div>
            <a href="#" @click.prevent='showCityList'>选择城市</a>
            <div v-show='cityshow'>{{fillCity}}</div>
        </div>
        <myAddress ref="getaddress"></myAddress>
    </div>
</template>

<script>
import myAddress from './cityselect.vue'


export default {
    data(){
        return {
            msg:5,
            cityshow:false,
            province:'',
        }
    },
    computed:{
        num(){
            this.$nextTick(() => {
                // this.myCount = this.$cloneObj(this.$store.state);
            })
            return this.$store.state.count
        },
        fillCity(){
            this.$nextTick(() => {
                console.log(this.$refs.getaddress);
                return 2
            })
            // this.cityshow = true;
            // return this.$refs.getaddress.cityname()
        }
    },
    methods:{
        addHandle(){
            this.$store.commit('addIncrement',{
                num:this.msg
            })
        },
        increseHandle(){
            this.$store.commit({
                type:'deIncrement',
                num:this.msg
            })
        },
        showCityList(){
            this.$refs.getaddress.cityToggle()
        }
    },
    components:{
        myAddress
    }
}
</script>
<style lang="less" >
    .bigbox{
        background: silver;
        padding: 20px 0;
        position: relative;
        h2{
            color: red;
        }
        &:after{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: auto;
            top: 0;
            background: -moz-linear-gradient(top, transparent 0%, rgba(0,0,0,0.15) 100%);
            background: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,0.15) 100%);
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=0 );
            height: 40px;
            -webkit-transform: scaleY(-1);
            -moz-transform: scaleY(-1);
            -ms-transform: scaleY(-1);
            -o-transform: scaleY(-1);
            transform: scaleY(-1);
        }
    }
</style>

