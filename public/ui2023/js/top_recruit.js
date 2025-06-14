// 插入头部
$.get("/ui2023/components/header.html?1x",function(result){
  $("body").prepend(result)
})
//插入底部
$.get("/ui2023/components/footer.html?xx",function(result){
  $("body").append(result)
})

// 插入banner
$.get("/ui2023/components/banner_recruit.html",function(result){
  $("#content").before(result);
  $("body").removeClass("loadings")
})

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
      //打开菜单
      $(document).on("click", ".rnav", function () {
        $("body").toggleClass('rnav_this')
        });
     
    
   
  
    

//手机版
      $(document).on("click", ".r_ul2i li a", function (e) {
        var j = $(this).next(".submenu").length
      if(j == 1){
        $(this).parent().toggleClass("this2").siblings("li").removeClass("this2")
      return false
      }
      });
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