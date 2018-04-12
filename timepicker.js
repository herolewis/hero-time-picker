/**
 * 时间选择组件所需参数
 * @param {Object}          options   对象，必选
     * @param {number}      value     初始时长，必选
     * @param {function}    onOk  回调函数，获取灌溉时长
 * @param {string}          container      Dom节点，可选
*/
(function () {
  var timePicker = function (options,container) {
         this.template = '<div class="time-picker"> \
                              <div class="time-modal">\
                                  <div class="time-top">\
                                    <span class="oncancel">取消</span>\
                                    <span><i>智能分析</i><i></i></span>\
                                    <span class="onsubmit">确定</span>\
                                  </div>\
                                  <div class="time-center">\
                                      <span>\
                                          <i>3</i>\
                                          <b>小时</b>\
                                      </span>\
                                  </div>\
                                  <div class="time-bottom">\
                                      <div class="time-dots" id="wrapper">\
                                        <div class="time-pointer" ></div>\
                                          <ul></ul>\
                                      </div>\
                                  </div>\
                              </div>\
                          </div>';
         this.$container = (container && $(container)) || $(document.body);
         this.len = 25;
         this.i = 0;
         this.htmlStr = '';
         this.showLen = 6; // 显示时间点的数量
         this.$lis = []; // 所有li
         this.startX = 0; // 初次点击x轴距离
         this.curX = 0; // 当前ul移动距离
         this.changedTime = options.value; //切换之后灌溉时长
         this.currentTime = String(options.value / 1000 / 60 / 60) || 4; //当前选择灌溉时长
         this.suggestTime = String(options.suggestTime/1000/60/60) || 2;   //智熵建议灌溉时长
         this.onOk = options.onOk || function () {};
         this.curWx = 0;          //页面初始进来的X坐标位置
         this.timer = null;
         this.render();
         this.$warp = $('.time-dots ul'); // ul
         this.warpWidth = this.$warp.width(); // ul宽度值
         this.liWidth = this.warpWidth / this.showLen; // 计算每个li的宽度值
         this.$timeLab = $('.time-center span'); // 时间显示位置
         this.init();
    
  }
  timePicker.prototype = {
    init: function () { 
        this.bindEvent();
        this.initSuggestTime();
        this.initSelectTime();  
    },
    render: function () { 
        $(this.template).appendTo(this.$container);
        while (this.i < this.len) { // 生成24个时间点
          this.htmlStr += '<li data-index="' + this.i + '"><b></b><i class="idotsb">' + this.i++ + '</i>\
            <span class="idots"> '+this.createI()+'</span>\
          </li>';
        }
         $('.time-dots ul').html(this.htmlStr)

    },
    createI: function () { 
       var eleI = ''
       for(var j=0;j<7;j++){
          eleI += "<i></i>"
       }
       return eleI
    },
    setX: function (f) { // 设置滚动距离
      this.$warp.css({
        'transform':'translate3D(' + f + 'px, 0, 0)',
        'transition' : 'all 0.6s linear'
      })
    },
    show: function () { 
      this.$warp.closest('.time-picker').show();
    },
    hide: function () {
      this.$warp.closest('.time-picker').hide();
    },
    bindEvent: function () { 
        var self = this;
        var curNum;     //当前的灌溉时长
        /**
         * 阻止微信默认的下拉事件
         */
        $(document).on("touchstart", function (e) {
          e.preventDefault();
        })
        this.$warp
          .width((this.len-1) * this.liWidth)
          .closest(".time-bottom")
          .on('touchstart', function (event) {
            self.startX = event.touches[0].clientX;
            self.startX -= self.curX;
          })
          .on('touchmove', function (event) {
            var moveX = event.touches[0].clientX;
          })
          .on('touchend', function (event) {
              var endX = event.changedTouches[0].clientX;
              self.curX = endX - self.startX;
              var currentTime = Number(self.currentTime);
              var int = parseInt(currentTime); //整数部分
              var float = Math.abs(parseInt(currentTime)) === Number(currentTime) ? 0 : Number('0.' + String(currentTime).split('.')[1]); //小数部分
              var moveLeft = self.liWidth * float;
              var limit = self.curX > 0 ? self.curX < self.liWidth * (int +1) - moveLeft : Math.abs(self.curX) < (self.len - int - 1) * self.liWidth + moveLeft;
              if (limit) {
                  self.setX(self.curX + self.curWx);
              }else {
                if (self.curX > 0) {
                   self.curX = self.liWidth * int + moveLeft ;
                   self.setX(self.liWidth * int + moveLeft + self.curWx);
                }else {
                   self.curX = -(self.len - int - 1) * self.liWidth + moveLeft;
                   self.setX(-(self.len - int - 1) * self.liWidth + moveLeft + self.curWx );
                } 
              }
            if (self.curX < 0) {
              curNum = Number(self.curX / self.liWidth) - currentTime;
              curNum = curNum > 24 ? 24 : curNum;
            }else {
              curNum = currentTime - self.curX / self.liWidth; 
              curNum = curNum < 0 ? 0 : curNum;
            }
             self.timer && clearTimeout(self.timer);
             self.timer = setTimeout(function () { // 防高频率触发渲染
                if (0<=curNum<=24){
                    self.$timeLab.html(self.roundNum(curNum));
                }
             }, 20);
           });
          this.$lis = this.$warp.find('li');
          this.$warp.find('li span.idots').width(this.liWidth);
          this.$warp.find('li:last-child span.idots').remove();
          this.$warp.closest('.time-modal').on('click', '.onsubmit', function () {
            self.onOk(self.changedTime)
            self.hide();
          }).on('click', '.oncancel', function () {
             self.hide();
          })
    },

    roundNum: function (num) { 
      // 取出小数部分
      var float = Number('0.' + String(num).split('.')[1]);
          float = Number(num) === 0 || Math.abs(num) === 24  ? 0 : float;
      var minute = Math.floor(float / 0.16666) * 10 === 0 || Math.abs(parseInt(num)) === Number(num)  ? '' : '<i>' + Math.floor(float / 0.16666) * 10 + '</i><b>分钟</b>';
      var hours = '<i>'+ Math.abs(parseInt(num))+ '</i><b>小时</b>';

      this.$lis.each(function (index,item) {
        if (Number($(item).attr('data-index')) === Math.abs(parseInt(num)) && Math.floor(float / 0.16666) * 10 === 0) {
          $(item).find('i.idotsb').addClass('selected');
        } else {
          $(item).find('i.idotsb').removeClass('selected');
        }
      })

      this.changedTime = Math.abs(parseInt(num)) * 60 * 60 * 1000 + Math.floor(float / 0.16666) * 10 * 60 * 1000;
      if (num <= 24) {
        return  (hours + minute)
      }
    },

    //设置智熵用户选择的灌溉的时长
    initSelectTime: function () { 
        var curNum = Number(this.currentTime);
        var curWx;
        if (parseInt(curNum) !== curNum) {
          var float = curNum !== 0 ? Number('0.' + String(curNum).split('.')[1]) : 0;
          var moveLeft = this.liWidth * float;
          curWx = -(parseInt(curNum) - 3) * this.liWidth - moveLeft;
        }else {
          curWx = -(curNum - 3) * this.liWidth
        }
        this.curWx = curWx;          //页面初始进来的X坐标位置
        this.setX(curWx)
        if ( 0<= curNum<=24){
            this.$timeLab.html(this.roundNum(curNum));
        }
    },

    //设置智熵建议的灌溉的时长
    initSuggestTime: function () {
      var self = this;
      var suggestTime = Number(self.suggestTime);
      this.$lis.each(function (index, item) {
         $(item).find('span.idots i:first-child,i:last-child').css('background', 'transparent');
        if (Number($(item).attr('data-index')) === Math.floor(suggestTime)) {
          $(item).find('b').addClass('current');
          if (parseInt(suggestTime) !== suggestTime) {
            var float = suggestTime !== 0 ? Number('0.' + String(suggestTime).split('.')[1]) : 0;
            //移动的距离 - 二分之一标志头像的宽度      
            //当前UI设计 1px = 0.0133rem
            var moveLeft = self.liWidth * float - $(item).find('b.current').width()/2;
             $(item).find('b.current').css({
              'left': moveLeft
            })
          }
        }
      })
    },
  }
  window.timePicker = timePicker;
})()