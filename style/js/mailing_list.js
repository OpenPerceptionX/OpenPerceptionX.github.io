var jiance = 0
//检测谷歌资源是否可用
function checkURL() {
    jiance = 1;
    var img = new Image();
    img.onload = function () {
        //console.log("//谷歌可以访问");
        // 插入头部
        if ( +new Date() - start > 300){
            localStorage.setItem("havefrom","false");
            nofrom();
            return;
        }
        $.get("/components/mailing_list.html", function (result) {
            $("#mailing_list").html(result);
            ifrom();
            localStorage.setItem("havefrom","true");
            
        });
       
    };
    img.onerror = function () {
        //console.log("//头疼，访问不了");
        //插入按钮
        localStorage.setItem("havefrom","false");
        nofrom()
         
    };
    img.src = "//www.google.com/images/errors/robot.png" + "?t=" + new Date().getTime();
    var start = +new Date();
}

function nofrom(){


    $.get("/components/no_mailing_list.html?1", function (result) {
        $("#mailing_list").html(result);
        // ifrom();
        localStorage.setItem("havefrom","true");
        
    });

 
if(jiance==0){
checkURL();
}
 
}
function ifrom() {
    let submitted = false;
    let form = document.getElementById("mailing_list");
    let input = document.getElementById("mailing_list_input");
    let button = document.getElementById("mailing_list_button");
    // onload
    button.disabled = true;
    // check input
    input.addEventListener("input", change);
    function change() {
        if (submitted) {
            button.classList.remove("submit");
        }
        let val = input.value;
        let empty = val == null || val == "";
        let valid = val.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (!empty && valid) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
    // submit
    form.addEventListener("submit", mail);
    function mail() {
        button.classList.toggle("submit");
        button.disabled = true;
        submitted = true;
    }
}

//开始
//  localStorage.setItem("havefrom","")
// console.log(localStorage.getItem("havefrom"));
nofrom();
checkURL();

// if(localStorage.getItem("havefrom")=="false"){
//     nofrom();
  

// }
// else{
    
   
   
 


// }




