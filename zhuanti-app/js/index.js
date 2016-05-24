/**
 * @description 
 */
;(function ($) {
    function Page(option) {
        this.init();
    }
    Page.prototype = {
        //初始化
        init: function () {
            this.adjustPos();
            this.initEvent();
        },
        adjustPos: function () {
            
           

        },

        //事件相关处理
        initEvent: function () {
           
      
        }
    };
    $(document).ready(function () {
        var page = new Page();
    });
})(jQuery);