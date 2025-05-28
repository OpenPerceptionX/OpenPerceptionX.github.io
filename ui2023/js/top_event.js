// 插入头部
$.get("/ui2023/components/header_event.html?111x",function(result){
  $("body").prepend(result)
})
//插入底部
$.get("/ui2023/components/footer.html?xx",function(result){
  $("body").append(result)
})

// // 插入banner
// if($(".home").length==0){
//   $.get("/components/banner_recruit.html",function(result){
//   $("#content").before(result);
  
// })
// }


$("body").removeClass("loadings")

 $(document).ready(function () {
 //首页导航高亮

   
     
    
       
    
     
        $(document).on("click", "[data-hd2]", function () {
        var hhh = $(this).attr("data-hd2")
        $('html,body').animate({scrollTop: $(hhh).offset().top - 60}, 800);
    });
 
    
        var l_daohang =$("body");
        var nt2 = !1;
        $(window).bind("scroll",
            function() {
                var st2 = $(document).scrollTop();//往下滚的高度
                nt2 = nt2 ? nt2: 40;
                // console.log(nt2)
                if(st2>nt2){
                  l_daohang.addClass("header_this");
              }
              else{
                l_daohang.removeClass("header_this");
              }
            });
      // //打开菜单
      // $(document).on("click", ".rnav", function () {
      //   $("body").toggleClass('rnav_this')
      //   });
     
    
   
  
    

//手机版
      $(document).on("click", ".r_ul2i li a", function (e) {
        var j = $(this).next(".submenu").length
      if(j == 1){
        $(this).parent().toggleClass("this2").siblings("li").removeClass("this2")
      return false
      }
      });
    });
      