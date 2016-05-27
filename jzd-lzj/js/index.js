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

            //判断安卓还是ios，调整date样式
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                $(".date-time").css("paddingRight","1.2rem");
            } else if (/(Android)/i.test(navigator.userAgent)) {
                $(".date-time").css("marginRight","-0.8rem");
            }
            
            //下拉菜单
            $("#tab_select").on("click", "li", function(e) {
                e.stopPropagation();
                var $index = $(this).index();
                $(".tab-select-content").fadeIn(300,function(){
                    $("body").css({
                      "overflow-y":"hidden",
                      "position":"fixed"
                    });
                    $(this).css("overflow","auto");
                });

                if ($index == 0) {
                    e.stopPropagation();
                    $(this).css("color", "#2cc5ff").siblings().css("color", "#333");
                    $(".tab-select-content").find(".tab-one").slideToggle(300, function() {
                        if ($(this).css("display") == "none") {
                            $(".tab-select-content").fadeOut(300,function(){
                              $("body").css({
                                "overflow-y":"auto",
                                "position":"relative"
                              });
                            });
                        }
                    });
                    $(".tab-select-content").find(".tab-two").slideUp(300);
                    $(".tab-select-content").find(".tab-three").slideUp(300);

                } else if ($index == 1) {
                    e.stopPropagation();
                    $(this).css("color", "#2cc5ff").siblings().css("color", "#333");
                    $(".tab-select-content").find(".tab-two").slideToggle(300, function() {
                        if ($(this).css("display") == "none") {
                            $(".tab-select-content").fadeOut(300,function(){
                              $("body").css({
                                "overflow-y":"auto",
                                "position":"relative"
                              });
                            });
                        }
                    });
                    $(".tab-select-content").find(".tab-one").slideUp(300);
                    $(".tab-select-content").find(".tab-three").slideUp(300);
                } else if ($index == 2) {
                    e.stopPropagation();
                    $(this).css("color", "#2cc5ff").siblings().css("color", "#333");
                    $(".tab-select-content").find(".tab-three").slideToggle(300, function() {
                        if ($(this).css("display") == "none") {
                            $(".tab-select-content").fadeOut(300,function(){
                              $("body").css({
                                "overflow-y":"auto",
                                "position":"relative"
                              });
                            });
                        }
                    });
                    $(".tab-select-content").find(".tab-one").slideUp(300);
                    $(".tab-select-content").find(".tab-two").slideUp(300);

                }
            })

            $(".tab-one").on("click", "li", function(e) {

                var $val = $(this).text();
                $("#tab_select li:eq(0) .val").text($val);
                $(this).parent().css("display", "none");
            })

            $(".tab-two").on("click", "li", function(e) {

                var $val = $(this).text();
                $("#tab_select li:eq(1) .val").text($val);
                $(this).parent().css("display", "none");
            })

            $(".tab-three").on("click", "li", function(e) {

                var $val = $(this).text();
                $("#tab_select li:eq(2) .val").text($val);
                $(this).parent().css("display", "none");
            })

            $(document).on("click", function(e) {
                $(".tab-select-content").find("ul").slideUp(300);
                $(".tab-select-content").fadeOut(300,function(){
                    $("body").css({
                      "overflow-y":"auto",
                      "position":"relative"
                    });
                });
            });
            
        },

        //事件相关处理
        initEvent: function () {

            //弹出对话框
            function closedialog() {
                $("#public_dialog").fadeOut(300);
                $("#public_dialog").remove();
            }

            function showdialog(type, msg, succfn, errfn) {
                if ($("#public_dialog").length != 0) {
                    closedialog();
                }
                if (!succfn) {
                    succfn = closedialog;
                }
                if (!errfn) {
                    errfn = closedialog;
                }
                var html = "<div id=\"public_dialog\" style=\"display:none;\"><div class=\"dialog-wrap\">";
                switch (type) {
                    case "confirm":
                        html += "<h2>确认信息</h2><p>" + msg + "</p><div class=\"confirm clearfix\"><span  class=\"fl\" >取消</span><span  class=\"fr\" >确认</span>";
                        break;
                    case "success":
                        html += "<h2>提示</h2><p>" + msg + "</p><div class=\"confirm clearfix\"><span class=\"text\" >确认</span>";
                        break;
                    case "error":
                        html += "<h2>提示</h2><p>" + msg + "</p><div class=\"confirm clearfix\"><span  class=\"text\">确认</span>";
                        break;
                    default:
                        html += "<p>" + msg + "</p><div class=\"confirm clearfix\"><span  class=\"text\">确认</span>";
                        break;
                }
                html += "</div></div></div>";
                $("body").append(html);
                $("#public_dialog").find(".fl").bind("click", errfn);
                $("#public_dialog").find(".fr").bind("click", succfn);
                $("#public_dialog").find(".text").bind("click", succfn);

                $("#public_dialog").fadeIn(300, function() {
                    $(this).find(".dialog-wrap").fadeIn(300);
                });
            }

            
            //超出内容点击弹窗
            $(".ellipsis").click(function(){
                showdialog("error", $(this).text());
            })

            //国奖-在线申请-国奖申请
            $("#range-number").on("click",function(){
                $("#gj-zxsq-gjsq").css("overflow","hidden");
                $(".gj-zxsq-gjsq-dialog").fadeIn(300);
            })

            $(".gj-zxsq-gjsq-dialog").on("click",".btn-dialog",function(){
                $("#gj-zxsq-gjsq").css("overflow","visible");
                $(".gj-zxsq-gjsq-dialog").fadeOut(300);
                
                
            })
           
            //国奖-在线申请-国奖申请select下拉
            $("#gj-zxsq-gjsq .select-option").change(function(){
                if ( $(".select-option option:selected").text()=="是" ) {
                    $(".select-hidden").fadeIn(300);
                } else {
                    $(".select-hidden").fadeOut(300);
                }
             })

            
      
            
        }
    };
    $(document).ready(function () {
        var page = new Page();
    });
})(jQuery);