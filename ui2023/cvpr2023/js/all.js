

const accordion = document.getElementsByClassName('container');

  for (i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
          this.classList.toggle('active')
      })
  }   
 
    //首页导航高亮

    $(document).ready(function () {

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

  $('[data-src]').each(function(){
    var a = $(this).data("src");
    $(this).attr({"src":a})

  })

    var l_daohang =$(".header");
    var nt2 = !1;
    $(window).bind("scroll",
        function() {
            var st2 = $(document).scrollTop();//往下滚的高度
            nt2 = nt2 ? nt2: $(".banner").offset().top;
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





  function time_zone(){
      
    var Time_hour_select = document.getElementsByName("time_hour_seleting");
    var data_select = document.getElementsByName("data_seleting");
    var o_time = document.getElementById("operator");
    var op_timezone=o_time.options[o_time.selectedIndex].value;//在下拉列表中选中选择的值
    console.log(op_timezone)

    // If you want to change the schedule, remember to change the list [Time_hour_select_base] in the function
    var Time_hour_select_base = [9, 9, 9, 10, 11, 11, 11, 12, 13, 14, 14, 15, 15, 16, 17, 18]
    var date_select_base = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]



    for(var j=0; j < Time_hour_select.length; j++) { 
      Time_hour_select[j].innerHTML= adjust_number(change(Time_hour_select_base[j]) + change(op_timezone));
      data_select[j].innerHTML= adjust_number_data((change(Time_hour_select_base[j]) + change(op_timezone)), date_select_base[j]);

    }



  }
    function change(x){
      return parseFloat(x)
    }

    function adjust_number(x){
      if (parseFloat(x)>=parseFloat(24)){
        x = parseFloat(x)-parseFloat(24);
      }
      if (parseFloat(x)<parseFloat(0)){
        x = parseFloat(x)+parseFloat(24);
      }
      return parseFloat(x)
    }

    function adjust_number_data(x, y){
      if (parseFloat(x)>=parseFloat(24)){
        x = parseFloat(x)-parseFloat(24);
        y = parseFloat(y)+parseFloat(1);
      }
      if (parseFloat(x)<parseFloat(0)){
        x = parseFloat(x)+parseFloat(24);
        y = parseFloat(y)-parseFloat(1);

      }
      return parseFloat(y)
    }