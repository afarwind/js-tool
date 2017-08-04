(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // CommonJS
        module.exports = factory(global, false);
    } else {
        // Browser globals
        factory(global, true);
        //扩展数据，取数组中的最大值 
        Array.prototype.max = function() {
            return Math.max.apply({}, this)
        }
        //字符串去空格
        String.prototype.trim = function() {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        };
        //扩展数据，取数组中的最小值 
        Array.prototype.min = function() {
            return Math.min.apply({}, this)
        }
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    /**
     * 获取url中的参数
     * @param name 参数名
     */
    var GetUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return r[2];
        return null; //返回参数值
    };

    if (noGlobal) {
        window.GetUrlParam = GetUrlParam;
    }
    return GetUrlParam;
});
