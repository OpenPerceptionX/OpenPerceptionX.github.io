// 插入头部
$.get("header.html",function(result){
  $("body").prepend(result)
})
//插入底部
$.get("footer.html",function(result){
  $("body").append(result)
})

// 插入banner
$.get("banner.html",function(result){
  $("#content").before(result);
  $("body").removeClass("loadings")
})

 $(document).ready(function () {
 //首页导航高亮

    $(".scrollable").each(function(){
      ($(this).find("tr").length>2) ? $(this).addClass("scrollable2") : '';
    })
    
            var richeng_nav = $(".r_ul")
    
    
            $("[data-gd]").click(
                function () {
                    $(this).addClass("this");
                    // richeng_nav.addClass("r_ul_this");
                    var data_url2 = $(this).attr("data-gd");
                    var time2 = 200
                    // $("html,body").animate({ scrollTop: $(data_url2).offset().top - 100}, time2,function(){
                    $('html,body').animate({scrollTop: $(data_url2).offset().top - 100}, 200);
                    // }); 
                    if($(window).width()<1025){
                    $("body").removeClass("rnav_this")
                    }
                });
            var nt2 = !1;
            $(window).bind("scroll",
                function () {
                var w_hiehgt2 = 70;
                    var st2 = $(document).scrollTop();//往下滚的高度
                    
                    if($(".why_list").length>0){
    
                    var img = $(".why_list li:nth-last-of-type(1)")
                    if (st2 > img.offset().top - w_hiehgt2) {
                    $("body").addClass("body_imgx");
                    }else{
                    $("body").removeClass("body_imgx");
                    }
    
          }
    
          if($(".motivation").length>0){
                            var imgx = $(".motivation")
                    if (st2 > imgx.offset().top - w_hiehgt2) {
                    $("body").addClass("body_imgx2");
                    }else{
                    $("body").removeClass("body_imgx2");
                    }
                    
          }
                    
                            var bannerw = $(".bannerw").height() - $(".r_ul").height() 
                    if (st2 > bannerw) {
                    $(".r_ul").addClass("r_ul_this");
                    }else{
                    $(".r_ul").removeClass("r_ul_this");
                    }
                    
                 
    
                    $(".r_ul li").each(function (index, element) {
    
                        var day2 = $(this).attr("data-gd");
                        if (st2 > ($(day2).offset().top - 200)) {
                            $(this).addClass("this").siblings().removeClass("this");
                        }
                        else {
                            $(this).removeClass("this");
                        }
                    });
    
                });
    
    
       
    
      $('[data-hd]').click(function () {
        var hhh = $(this).attr("data-hd")
        $('html,body').animate({scrollTop: $(hhh).offset().top - 60}, 800);
    });
 
    
        var l_daohang =$(".header");
        var nt2 = !1;
        $(window).bind("scroll",
            function() {
                var st2 = $(document).scrollTop();//往下滚的高度
                nt2 = nt2 ? nt2: 40;
                // console.log(nt2)
                if(st2>nt2){
                  l_daohang.addClass("this");
              }
              else{
                l_daohang.removeClass("this");
              }
            });
      //打开菜单
      $(document).on("click", ".rnav", function () {
        $("body").toggleClass('rnav_this')
        });
     
    
      $(document).on("click", ".btn_from,.close", function () {
        $(".open_from").toggle()
        $("body").toggleClass('open_from_this')
        });
      });
    

//手机版
      $(document).on("click", ".r_ul2i li a", function (e) {
        var j = $(this).next(".submenu").length
      if(j == 1){
        $(this).parent().toggleClass("this2").siblings("li").removeClass("this2")
      return false
      }
      });

      
//join&people
//转换模板
function template(tem,obj){
  let reg =/{{(\w*)}}/;
  let arr =[];
  while(arr =reg.exec(tem) ){
  tem = tem.replace(arr[0],(obj[arr[1]]==undefined?"":obj[arr[1]]));
  }
  return tem
}
//替换替换列表
function template2(tem,obj){
let reg =/<list(\w*)>/;
  let arr =[];
    tem = tem.replace(reg,obj);
  return tem
}



function start(){
//not('[data-isLoaded]')选中已加载的图片不需要重新加载
$('#content img').not('[data-isLoaded]').each(function(){
var $node=$(this)
if(isShow($node)){
  loadImg($node)
}
})
}
//判断图片是否在视野中
function isShow($node){
return $node.offset().top<=$(window).height()+$(window).scrollTop()
}
//判断图片是否加载
function loadImg($img){
$img.attr('src',$img.attr('data-src'))//把data-src的值 赋值给src
$img.attr('data-isLoaded',1)//区别图片是否被加载过，防止重新加载
} 