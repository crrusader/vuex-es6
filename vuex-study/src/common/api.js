var install = function(Vue,namesss) {
    if (install.installed) return // 如果已经注册过了，就跳过
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $_client:{
            value:function () {
                console.log('two plugin');
            }
        },
        $cloneObj: {
            value: function (obj) {
                var newObj = {};
                if (obj instanceof Array) {
                    newObj = [];
                }
                for (var key in obj) {
                    var val = obj[key];
                    newObj[key] = typeof val === 'object' ? cloneObj(val): val;
                }
                return newObj;
            }
        }
    })

}
export default install;