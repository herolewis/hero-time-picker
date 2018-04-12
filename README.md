## time-picker组件使用规则(ps：精确到十分钟)

* 需要引入js和css文件到使用者的项目中
<pre>
var timePicker = new timePicker({
        value: 66600000,               //当前选中时间戳
        suggestTime: 7800000,          //建议选择时间戳
        onOk: function (item) {         //确定的回掉函数
            alert(item,'当前选择时长')
        }
},'#time-box');
timePicker.show();                          //显示时间modal
timePicker.hide();                          //隐藏时间modal
</pre>

## 问题点总结

1. 使用淘宝的`flexible`方案做H5适配时，在js中操作位移，不用换算rem形式，否则会有bug
2. 使用背景图片时，需要额外设置 `background-size:cover`,否则不能填满 
3. 启用本地服务进行调试:
    * `npm install http-server` 
      - 启动服务 `http-server`
    * `npm install -g browser-sync` 
      - 启动服务，监听css,html热更新 `browser-sync start --server --files "*.css, *.html"`
4. 判断一个数是否为小数 `parseInt(num) !== num`
5. 组件开发之前，先进行可行性分析，定义使用者需要传递的参数以及调用的方法
6. 尽量使用构造函数的形式进行开发，方便使用者调用

7. linux下启动本地服务   

    1. 上传文件 `scp -P 12345 -r ./* lijiabing@192.168.199.222:~/time-picker/`
    2. `ssh lijiabing@192.168.199.222 -p 12345` -- `cd time-picker/` -- ` browser-sync start --server --files "*.css,*.html"`
