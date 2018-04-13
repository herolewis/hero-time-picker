/**
 * 时间选择组件所需参数
 * @param {Object}          options   对象，必选
     * @param {number}      csTime    用户选择时长，必选
     * @param {number}      ssTime    建议时长，必选
     * @param {string}      link      智能分析建议入口
     * @param {function}    onOk      回调函数，获取时长
 * @param {string}          container      Dom节点，必传
*/
(function () {
  var timePicker = function () {
         this.template = '<div class="time-picker"> \
                              <div class="time-modal">\
                                  <div class="time-top">\
                                    <span class="oncancel">取消</span>\
                                    <span class="openLink"><i>智能分析</i><i></i></span>\
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

         this.len = 25;
         this.i=0;
         this.htmlStr = '';
         this.showLen = 6; // 显示时间点的数量
         this.$lis = []; // 所有li
         this.startX = 0; // 初次点击x轴距离
         this.curX = 0; // 当前ul移动距离
         this.curWx = 0;          //页面初始进来的X坐标位置
         this.timer = null;   
  }
  timePicker.prototype = {
    init: function () { 
        this.bindEvent();
        this.initSsTime();
        this.initSelectTime();  
    },
    renderDOM: function () { 
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
    render: function (options, container) {
      this.$container = (container && $(container)) || $(document.body);
      this.changedTime = options.value; //切换之后时长
      this.csTime = String(options.csTime / 1000 / 60 / 60) || 4; //当前选择''时长
      this.ssTime = String(options.ssTime / 1000 / 60 / 60) || 2; //智熵建议''时长
      this.link = options.link || 'javascript:;';
      this.onOk = options.onOk || function () {};
      this.renderDOM();
      this.$warp = $('.time-dots ul'); // ul
      this.$warp.closest('.time-picker').show();
      this.warpWidth = this.$warp.width(); // ul宽度值
      this.liWidth = this.warpWidth / this.showLen; // 计算每个li的宽度值
      this.$timeLab = $('.time-center span'); // 时间显示位置
      this.init();
      this.$warp.closest('.time-picker').css('background', 'rgba(0,0,0,0.6)');
    },
    destroy: function () {
      this.$warp.closest('.time-picker').remove();
    },
    openLink: function (addr) {
      let aNode = document.createElement('a');
      aNode.href = addr;
      aNode.click();
      aNode = null;
    },
    bindEvent: function () { 
        var self = this;
        var curNum;     //当前选择的时长
        this.$warp
          .width((this.len-1) * this.liWidth)
          .closest(".time-bottom")
          .on('touchstart', function (event) {
            self.startX = event.originalEvent.changedTouches[0].clientX;
            self.startX -= self.curX;
          })
          .on('touchmove', function (event) {
            var moveX = event.originalEvent.changedTouches[0].clientX;
            var curMoveX = moveX - self.startX;
            self.setX(curMoveX+ self.curWx);
          })
          .on('touchend', function (event) {
              var endX = event.originalEvent.changedTouches[0].clientX;
              self.curX = (endX - self.startX) ;
              var currentTime = Number(self.csTime);
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
            self.destroy();
          }).on('click', '.oncancel', function () {
             self.destroy();
          })
          this.$warp.closest('.time-modal').on('click',' .openLink',function () { 
              if(!self.link) {
                return 
              }
              self.openLink(self.link)
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

    //设置用户选择的的时长
    initSelectTime: function () { 
        var curNum = Number(this.csTime);
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

    //设置建议的的时长
    initSsTime: function () {
      var self = this;
      var ssTime = Number(self.ssTime);
      this.$lis.each(function (index, item) {
         $(item).find('span.idots i:first-child,i:last-child').css('background', 'transparent');
        if (Number($(item).attr('data-index')) === Math.floor(ssTime)) {
          $(item).find('b').addClass('current');
          if (parseInt(ssTime) !== ssTime) {
            var float = ssTime !== 0 ? Number('0.' + String(ssTime).split('.')[1]) : 0;
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