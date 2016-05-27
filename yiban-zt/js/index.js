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

            //功能总览
            var len=$(".content-three .text-box").find("div").length;
            $(".content-three .text-box div").each(function(){
                var index=$(this).index();
                var timer;
                $(this).hover(function(){
                    if ($(".content-three .text-box ul").eq(index).is(":hidden") ) {
                         $(".content-three .text-box ul").eq(index).fadeIn();
                    }
                },function(){
                      timer=setTimeout(function(){
                            $(".content-three .text-box ul").eq(index).fadeOut();
                        },500);
                });

               $(".content-three .text-box ul").eq(index).hover(function(){
                    clearTimeout(timer);
                },function(){
                    $(this).hide();
                })
               
            })

            //用户评价
            var liWidth=$(".content-seven .text-box ul li").eq(0).outerWidth();
            var wid=$(".content-seven .text-box ul li").size()*liWidth;
            $(".content-seven .text-box ul ").width(wid) ;
            var len2=$(".content-seven .text-box ul li").size();
            $(".content-seven .text-box .prev").find("img").css("opacity",.28);
            $(".content-seven .text-box .prev",".content-seven .text-box .next").unbind("dblclick");

            function prevClick(){
                $(".content-seven .text-box .prev").click(function(){
                    $(".content-seven .text-box .prev").unbind("click");
                     var l=parseInt ($(".content-seven .text-box ul").css("left"));
                    
                     if(l!=0) {
                        $(".content-seven .text-box .next").find("img").css("opacity",1);
                        $(".content-seven .text-box ul").stop(true).animate({
                            'left':l+1120
                        },300,function(){
                            prevClick();
                        })
                     } else if(l==0){
                         $(this).find("img").css("opacity",.28);
                         prevClick();
                     }
                    
                })
            }
            prevClick();
            function nextClick(){
                $(".content-seven .text-box .next").click(function(){
                    $(".content-seven .text-box .next").unbind("click");
                    var l=parseInt ($(".content-seven .text-box ul").css("left"));
                    var a=-(len2-1)*1120;

                    if(a<l) {
                        $(".content-seven .text-box .prev").find("img").css("opacity",1);
                        $(".content-seven .text-box ul").stop(true).animate({
                            'left':l-1120
                        },300,function(){
                            nextClick();
                        })
                     } else if (a=l) {
                        $(this).find("img").css("opacity",.28);
                        nextClick();
                     }
                }) 
            }
            nextClick();
            

            //回到顶部
            $(window).scroll(function(){
                if ($(window).scrollTop()>200){
                    $(".back-top").fadeIn(500);
                }
                else
                {
                    $(".back-top").fadeOut(500);
                }
            });
            $(".back-top").on("click",function(){
                $('body,html').animate({ scrollTop: 0 }, 300);
                return false;
            })    


            //滚动导航
            // $("#nav_list_icon li a").click(function(){
            //     var idName=$(this).attr("class");
            //     $(this).addClass("cur").parent().siblings().find("a").removeClass("cur");

            //     $("html,body").animate({
            //         scrollTop:$('#'+idName).offset().top
            //     },500)
            // })

            // var one_top = $("#one").offset().top; //距页顶偏移量 
            // var two_top = $("#two").offset().top; 
            // var three_top = $("#three").offset().top; 
            // var four_top = $("#four").offset().top; 
            // var five_top = $("#five").offset().top;
            // var six_top = $("#six").offset().top; 
            // var seven_top = $("#seven").offset().top;

            // $(window).scroll(function(){
            //     var scrolH=$(this).scrollTop();
            //     if (scrolH>=one_top) {
            //         set_cur(".one")
            //     }
            //     if (scrolH>=two_top) {
            //         set_cur(".two")
            //     }
            //     if (scrolH>=three_top) {
            //         set_cur(".three")
            //     }
            //     if (scrolH>=four_top) {
            //         set_cur(".four")
            //     }
            //     if (scrolH>=five_top) {
            //         set_cur(".five")
            //     }
            //     if (scrolH>=six_top) {
            //         set_cur(".six")
            //     }
            //     if (scrolH>=seven_top) {
            //         set_cur(".seven")
            //     }
            // })

            // function set_cur(n){
            //     if ( $("#nav_list_icon li a").hasClass("cur") ) {
            //         $("#nav_list_icon li a").removeClass("cur");
            //     }
            //     $("#nav_list_icon li a"+n).addClass("cur");
            // }

            
        }
    };
    $(document).ready(function () {
        var page = new Page();
    });
})(jQuery);