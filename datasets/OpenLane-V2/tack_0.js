$(function () {
    // 定义的数据
    var allData_0 = [
        {
            "Organization": "Mach Drive<br>迈驰智行",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": "1<img src='/style/cvpr2023/img/rank01.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/><img src='/style/cvpr2023/img/blomb1.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/>",
            "team": "MACH <br> <a href=\"/e2ead/AD23Challenge/Track_0_MACH.pdf\">[paper]</a>",
            "mAP": 83.5,
            "Ped_Crossing": 86.66,
            "Divider": 81.54,
            "Boundary": 82.29
        },
        {
            "Organization": "Independent Researcher",
            "Country" : "/style/cvpr2023/img/country/USA.svg",
            "Rank": "2<img src='/style/cvpr2023/img/rank02.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/>",
            "team": "MapNeXt",
            "mAP": 73.65,
            "Ped_Crossing": 68.94,
            "Divider": 76.66,
            "Boundary": 75.34,
            "option": 'yes'
        },
        {
            "Organization": "Shanghai Jiao Tong University<br>上海交通大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 3,
            "team": "SJTUCR  <br> <a href=\"/e2ead/AD23Challenge/Track_0_SJTUCR.pdf\">[paper]</a>",
            "mAP": 73.39,
            "Ped_Crossing": 70.37,
            "Divider": 75.08,
            "Boundary": 74.73
        },
        {
            "Organization": "Lotus NYO",
            "Country" : "/style/cvpr2023/img/country/UK.svg",
            "Rank": 4,
            "team": "LTS (MapLTS2) <br> <a href=\"/e2ead/AD23Challenge/Track_0_LTS.pdf\">[paper]</a>",
            "mAP": 72.56,
            "Ped_Crossing": 72.67,
            "Divider": 73.2,
            "Boundary": 71.8
        },
        {
            "Organization": "University of Science and Technology of China<br>中国科学技术大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 5,
            "team": "ustc_vgg",
            "mAP": 71.02,
            "Ped_Crossing": 69.05,
            "Divider": 73.24,
            "Boundary": 70.76
        },
        {
            "Organization": "Xi'an Jiaotong University<br>西安交通大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 6,
            "team": "XJTU-IAIR",
            "mAP": 70.43,
            "Ped_Crossing": 64.69,
            "Divider": 74.52,
            "Boundary": 72.07
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 7,
            "team": "MapVision",
            "mAP": 69.71,
            "Ped_Crossing": 65.58,
            "Divider": 73.48,
            "Boundary": 70.06
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 8,
            "team": "Qml",
            "mAP": 68.28,
            "Ped_Crossing": 63.9,
            "Divider": 71.73,
            "Boundary": 69.21
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 9,
            "team": "SAITAD",
            "mAP": 67.34,
            "Ped_Crossing": 68.56,
            "Divider": 64.02,
            "Boundary": 69.45
        },
        {
            "Organization": "GACRD<br>广汽研究院",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 10,
            "team": "MapSeg  <br> <a href=\"/e2ead/AD23Challenge/Track_0_MapSeg.pdf\">[paper]</a> <a href=\"https://github.com/FlyEgle/CVPR_hdmap\">[code]</a>",
            "mAP": 67.1,
            "Ped_Crossing": 63.52,
            "Divider": 70.33,
            "Boundary": 67.46
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 11,
            "team": "IgniteVision",
            "mAP": 66.41,
            "Ped_Crossing": 62.04,
            "Divider": 70.43,
            "Boundary": 66.76
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 12,
            "team": "LOMG (LOMG)",
            "mAP": 64.53,
            "Ped_Crossing": 62.97,
            "Divider": 66.66,
            "Boundary": 63.96
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 13,
            "team": "MapKP",
            "mAP": 64.11,
            "Ped_Crossing": 59.7,
            "Divider": 67.62,
            "Boundary": 65.01
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 14,
            "team": "MapLCF_HuaweiNoah",
            "mAP": 62.79,
            "Ped_Crossing": 59.41,
            "Divider": 67.2,
            "Boundary": 61.77
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 15,
            "team": "Victory",
            "mAP": 60.66,
            "Ped_Crossing": 52.85,
            "Divider": 66.13,
            "Boundary": 62.99
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 16,
            "team": "DNTCAD",
            "mAP": 59.84,
            "Ped_Crossing": 53.89,
            "Divider": 64.24,
            "Boundary": 61.39
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 17,
            "team": "litemap (Litemap)",
            "mAP": 58.43,
            "Ped_Crossing": 52.07,
            "Divider": 62.34,
            "Boundary": 60.89
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 18,
            "team": "Bell",
            "mAP": 56.94,
            "Ped_Crossing": 51.9,
            "Divider": 61.53,
            "Boundary": 57.38
        },
        {
            "Organization": "HDI<br>武汉中海庭",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 19,
            "team": "HDI_Striker (tiny)",
            "mAP": 52.77,
            "Ped_Crossing": 48.15,
            "Divider": 61.36,
            "Boundary": 48.8
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 20,
            "team": "Ctyun-AI (BaseLine)",
            "mAP": 42.65,
            "Ped_Crossing": 36.24,
            "Divider": 50.95,
            "Boundary": 40.77
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 21,
            "team": "Host_75980_Team (VectorMapNet-Baseline)",
            "mAP": 42.11,
            "Ped_Crossing": 35.95,
            "Divider": 50.11,
            "Boundary": 40.26
        }
    ]
    // 每页显示数据量
    var page_0 = 10
    // 总条目数
    var total_0 = allData_0.length
    // 总页数
    var pages_0 = Math.ceil(total_0 / page_0)
    // 当前页
    var curPage_0 = 1
    renderList(allData_0)
    // 渲染数据列表
    function num(i) {
        var n = i.toFixed(2);
        return(n);
        }
        function filter(i) {
            if(i == '/style/cvpr2023/img/country/blank.png'){
                return('-')
            } else {
                return('<img src='+i+' style="width: 33px; user-select: none;"/>')
            }
        }
    function filter_undefined(i) {
        if (i == undefined) {
            return('N/A')
        } else {
            return(i)
        }
    }
    function renderList(data) {
        // 总页数
        pages_0 = Math.ceil(total_0 / page_0)
        $(".table_list_0 tbody tr:not(:last-child)").remove()
        data = data.slice((curPage_0 - 1) * page_0, page_0 * curPage_0)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
            <td style="text-align: left;">&nbsp;&nbsp;&nbsp;${item.Rank}</td>
        <td>${filter(item.Country)}</td>
        <td>${item.Organization}</td>
        <td><b>${num(item.mAP)}</b></td>
        <td>${item.team}</td>
        <td>${filter_undefined(item.option)}</td>
        <td>${num(item.Ped_Crossing)}</td>
        <td>${num(item.Divider)}</td>
        <td>${num(item.Boundary)}</td>
      </tr>

      `
            $(htmlStr).insertBefore($(".page_0"))
        })
        // 初始化 分页数据
        $("#curpage_0").val(curPage_0)
        // 总页数渲染
        $("#total_0").text(pages_0)
    }
    // 根据name进行排序
    $(".table_list_0 tr th:nth-child(1)").click(function () {
        mysort($(this), 'Rank', allData_0)
    })
    // $(".table_list_0 tr th:nth-child(2)").click(function () {
    //     mysort($(this), 'team', allData_0)
    // })
    $(".table_list_0 tr th:nth-child(5)").click(function () {
        mysort($(this), 'mAP', allData_0)
    })
    $(".table_list_0 tr th:nth-child(6)").click(function () {
        mysort($(this), 'Ped_Crossing', allData_0)
    })
    $(".table_list_0 tr th:nth-child(7)").click(function () {
        mysort($(this), 'Divider', allData_0)
    })
    $(".table_list_0 tr th:nth-child(8)").click(function () {
        mysort($(this), 'Boundary', allData_0)
    })
    // 排序方法
    function mysort(obj, field, data) {
        obj.siblings("th").removeClass()
        if (obj.hasClass("asc") || [undefined, ''].includes(obj.attr("class"))) {
            obj.attr({ "class": "desc" })
            data.sort(function (a, b) {
                if (a[field] > b[field]) {
                    return -1;
                }
            });
        } else if (obj.hasClass("desc")) {
            obj.attr({ "class": "asc" })
            data.sort(function (a, b) {
                if (a[field] < b[field]) {
                    return -1;
                }
            });
        }
        renderList(data)
    }
    // 选择每页显示的数据量
    $("#pageOption_0").change(function () {
        page_0 = $(this).val()
        renderList(allData_0)
    })
    // 上一页
    $("#prev_0").click(function () {
        curPage_0--
        if (curPage_0 <= 0) {
            curPage_0 = 1;
            $(this).prop('disabled', true)
        }
        $("#next_0").prop('disabled', false)
        $("#curPage_0").val(curPage_0)
        renderList(allData_0)
    })
    // 下一页
    $("#next_0").click(function () {
        curPage_0++
        if (curPage_0 >= pages_0) {
            curPage_0 = pages_0;
            $(this).prop('disabled', true)
        }
        $("#prev_0").prop("disabled", false)
        $("#curPage_0").val(curPage_0)
        renderList(allData_0)
    })
    // 手动输入页码
    $("#curpage_0").change(function () {
        var inpVal = $(this).val()
        console.log(inpVal);
        if (inpVal <= 0) {
            curPage_0 = 1
            $("#prev_0").prop("disabled", true);
            $("#next_0").prop("disabled", false);
        } else if (inpVal > pages_0) {
            curPage_0 = pages_0
            $("#next_0").prop("disabled", true);
            $("#prev_0").prop("disabled", false);
        } else {
            $("#next_0").prop("disabled", false);
            $("#prev_0").prop("disabled", false);
            curPage_0 = inpVal
        }
        renderList(allData_0)
    })
    // 筛选
    $("#opt1").change(function () {
        var selVal = $(this).val()
        var res1 = []
        var res2 = []
        allData_0.forEach(item => {
            if (item.option == undefined) {
                res1.push(item)
            } else {
                res2.push(item)
            }
        })
        if (selVal == 'na') {
            console.log(res1);
            renderList(res1.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
        } else if (selVal == 'yes') {
            renderList(res2.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
        } else {
            renderList(allData_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
        }
    })
})
