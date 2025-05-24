$(function () {
    // 定义的数据
    var allData = [
        {
            "Organization": "MEGVII Technology<br>旷视科技",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": 1,
            "Team": "MFV <br> <a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_MFV.pdf\">[paper]</a> <a href=\"https://arxiv.org/pdf/2306.09590.pdf\">[arXiv]</a>",
            "prize" : "/ui2023/cvpr2023/img/rank01.png",
            "DET_l": 0.3577,
            "DET_t": 0.7970,
            "TOP_ll": 0.2252,
            "TOP_lt": 0.3348,
            "OLS": 0.5519,
            "Fscore": 0.2559
        },
        {
            "Organization": "QCraft *<br>轻舟智航",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": "-",
            "prize" : "",
            "Link": "",
            "Team": "qcraft2 *",
            "DET_l": 0.4168,
            "DET_t": 0.6374,
            "TOP_ll": 0.0657,
            "TOP_lt": 0.3037,
            "OLS": 0.4654,
            "Fscore": 0.4805
        },
        {
            "Organization": "AMD",
            "Country" : "/ui2023/cvpr2023/img/country/USA.svg",
            "Rank": 2,
            "prize" : "/ui2023/cvpr2023/img/rank02.png",
            "Link": "",
            "Team": "Victory <a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_Victory.pdf\">[paper]</a>",
            "DET_l": 0.2184,
            "DET_t": 0.7245,
            "TOP_ll": 0.1324,
            "TOP_lt": 0.2261,
            "OLS": 0.4456,
            "Fscore": 0.2530
        },
        {
            "Organization": "QCraft *<br>轻舟智航",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": "-",
            "prize" : "",
            "Link": "",
            "Team": "qcraft-team *",
            "DET_l": 0.2960,
            "DET_t": 0.6374,
            "TOP_ll": 0.0463,
            "TOP_lt": 0.2469,
            "OLS": 0.4114,
            "Fscore": 0.3467
        },
        {
            "Organization": "Middle East Technical University",
            "Country" : "/ui2023/cvpr2023/img/country/TUR.svg",
            "Rank": 3,
            "prize" : "/ui2023/cvpr2023/img/blomb1.png",
            "Link": "<a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_PlatypusWhisperers.pdf\">[paper]</a>",
            "Team": "PlatypusWhisperers <br> <a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_PlatypusWhisperers.pdf\">[paper]</a> <a href=\"https://arxiv.org/pdf/2306.05419.pdf\">[arXiv]</a>",
            "DET_l": 0.2209,
            "DET_t": 0.7061,
            "TOP_ll": 0.0602,
            "TOP_lt": 0.1570,
            "OLS": 0.3922,
            "Fscore": 0.4592
        },
        {
            "Organization": "MeiTuan<br>美团",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": 4,
            "prize" : "",
            "Link": "<a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_gavin.pdf\">[paper]</a>",
            "Team": "gavin <br> <a href=\"https://opendrivelab.github.io/Challenge%202023/Track_1_gavin.pdf\">[paper]</a>",
            "DET_l": 0.1790,
            "DET_t": 0.7028,
            "TOP_ll": 0.0401,
            "TOP_lt": 0.2112,
            "OLS": 0.3854,
            "Fscore": 0.2478
        },
        {
            "Organization": "Beihang University<br>北京航空航天大学",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": 5,
            "prize" : "",
            "Link": "",
            "Team": "qwertyczx (e110_r)",
            "DET_l": 0.2643,
            "DET_t": 0.6607,
            "TOP_ll": 0.0317,
            "TOP_lt": 0.1918,
            "OLS": 0.3853,
            "Fscore": 0.2817
        },
        {
            "Organization": "Turing Inc.",
            "Country" : "/ui2023/cvpr2023/img/country/JPN.svg",
            "Rank": 6,
            "prize" : "",
            "Link": "",
            "Team": "turing-machine",
            "DET_l": 0.1335,
            "DET_t": 0.7864,
            "TOP_ll": 0.0148,
            "TOP_lt": 0.1266,
            "OLS": 0.3493,
            "Fscore": 0.2494
        },
        {
            "Organization": "-",
            "Country" : "/ui2023/cvpr2023/img/country/blank.png",
            "Rank": 7,
            "prize" : "",
            "Link": "",
            "Team": "Haoqing",
            "DET_l": 0.0863,
            "DET_t": 0.7187,
            "TOP_ll": 0.0369,
            "TOP_lt": 0.1516,
            "OLS": 0.3466,
            "Fscore": 0.4019
        },
        {
            "Organization": "-",
            "Country" : "/ui2023/cvpr2023/img/country/blank.png",
            "Rank": 8,
            "prize" : "",
            "Link": "",
            "Team": "TopoNet-Anonymous",
            "DET_l": 0.1950,
            "DET_t": 0.5842,
            "TOP_ll": 0.0227,
            "TOP_lt": 0.1591,
            "OLS": 0.3322,
            "Fscore": 0.2757
        },
        {        
            "Organization": "-",
            "Country" : "/ui2023/cvpr2023/img/country/blank.png",
            "Rank": 9,
            "prize" : "",
            "Link": "",
            "Team": "BVLab",
            "DET_l": 0.1235,
            "DET_t": 0.6416,
            "TOP_ll": 0.0253,
            "TOP_lt": 0.1558,
            "OLS": 0.3297,
            "Fscore": 0.2700
        },
        {
            "Organization": "-",
            "Country" : "/ui2023/cvpr2023/img/country/blank.png",
            "Rank": 10,
            "prize" : "",
            "Link": "",
            "Team": "HDI_EasternExpo",
            "DET_l": 0.1389,
            "DET_t": 0.6367,
            "TOP_ll": 0.0130,
            "TOP_lt": 0.1546,
            "OLS": 0.3207,
            "Fscore": 0.1998
        },
        {
            "Organization": "-",
            "Country" : "/ui2023/cvpr2023/img/country/blank.png",
            "Rank": 11,
            "prize" : "",
            "Link": "",
            "Team": "ArterySentinel",
            "DET_l": 0.1182,
            "DET_t": 0.4459,
            "TOP_ll": 0.0008,
            "TOP_lt": 0.0286,
            "OLS": 0.1904,
            "Fscore": 0.2175
        },
        {
            "Organization": "Tsinghua University<br>清华大学",
            "Country" : "/ui2023/cvpr2023/img/country/CHN.svg",
            "Rank": 12,
            "prize" : "",
            "Link": "",
            "Team": "WeakChicken",
            "DET_l": 0.0000,
            "DET_t": 0.6772,
            "TOP_ll": 0.0000,
            "TOP_lt": 0.0000,
            "OLS": 0.1695,
            "Fscore": 0.0000
        }
    ]
    // 每页显示数据量
    var page = 10
    // 总条目数
    var total = allData.length
    // 总页数
    var pages = Math.ceil(total / page)
    // 当前页
    var curPage = 1
    renderList(allData)
    // 渲染数据列表
    function num(i) {

        var n = (i*100).toFixed(2);
        return(n);
        }
    function filter(i) {
        if(i == '/ui2023/cvpr2023/img/country/blank.png'){
            return('-')
        } else {
            return('<img src='+i+' style="width: 33px; user-select: none;"/>')
        }
    }
    function filter_rank(i) {
        if(i == 1){
            return(i + '<img src='+ '/ui2023/cvpr2023/img/rank01.png' +' style="padding: 0px 0px 0px 5px; width: 20px; user-select: none;"/>')
        }
        if (i == 2) {
            return(i + '<img src='+ '/ui2023/cvpr2023/img/rank02.png' +' style="padding: 0px 0px 0px 5px; width: 20px; user-select: none;"/>')
        }
        if (i == 3) {
        return(i + '<img src='+ '/ui2023/cvpr2023/img/blomb1.png' +' style="padding: 0px 0px 0px 5px; width: 20px; user-select: none;"/>')
    } else {
        return(i)
    }

    }

    function renderList(data) {
        // 总页数
        pages = Math.ceil(total / page)
        $(".table_list tbody tr:not(:last-child)").remove()
        data = data.slice((curPage - 1) * page, page * curPage)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
        <td style="text-align: left;">&nbsp;&nbsp;&nbsp;${filter_rank(item.Rank)}</td>
        <td>${filter(item.Country)}</td>
        <td>${item.Organization}</td>
        <td><b>${num(item.OLS)}</b></td>
        <td>${item.Team}</td>
        <td>${num(item.DET_l)}</td>
        <td>${num(item.DET_t)}</td>
        <td>${num(item.TOP_ll)}</td>
        <td>${num(item.TOP_lt)}</td>
      </tr>

      `
            $(htmlStr).insertBefore($(".page"))
        })
        // 初始化 分页数据
        $("#curpage").val(curPage)
        // 总页数渲染
        $("#total").text(pages)
    }
    // 根据name进行排序
    // $(".table_list tr th:nth-child(1)").click(function () {
    //     mysort($(this), 'Rank', allData)
    // })
    // $(".table_list tr th:nth-child(2)").click(function () {
    //     mysort($(this), 'Team', allData)
    // })
    // $(".table_list tr th:nth-child(5)").click(function () {
    //     mysort($(this), 'OLS', allData)
    // })
    // $(".table_list tr th:nth-child(6)").click(function () {
    //     mysort($(this), 'DET_l', allData)
    // })
    // $(".table_list tr th:nth-child(7)").click(function () {
    //     mysort($(this), 'DET_t', allData)
    // })
    // $(".table_list tr th:nth-child(8)").click(function () {
    //     mysort($(this), 'TOP_ll', allData)
    // })
    // $(".table_list tr th:nth-child(9)").click(function () {
    //     mysort($(this), 'TOP_lt', allData)
    // })
    // $(".table_list tr th:nth-child(9)").click(function () {
    //     mysort($(this), 'Fscore', allData)
    // })
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
    $("#pageOption").change(function () {
        page = $(this).val()
        renderList(allData)
    })
    // 上一页
    $("#prev").click(function () {
        curPage--
        if (curPage <= 0) {
            curPage = 1;
            $(this).prop('disabled', true)
        }
        $("#next").prop('disabled', false)
        $("#curPage").val(curPage)
        renderList(allData)
    })
    // 下一页
    $("#next").click(function () {
        curPage++
        if (curPage >= pages) {
            curPage = pages;
            $(this).prop('disabled', true)
        }
        $("#prev").prop("disabled", false)
        $("#curPage").val(curPage)
        renderList(allData)
    })
    // 手动输入页码
    $("#curpage").change(function () {
        var inpVal = $(this).val()
        console.log(inpVal);
        if (inpVal <= 0) {
            curPage = 1
            $("#prev").prop("disabled", true);
            $("#next").prop("disabled", false);
        } else if (inpVal > pages) {
            curPage = pages
            $("#next").prop("disabled", true);
            $("#prev").prop("disabled", false);
        } else {
            $("#next").prop("disabled", false);
            $("#prev").prop("disabled", false);
            curPage = inpVal
        }
        renderList(allData)
    })
    // Mapdata yes或no筛选
    $("#opt1").change(function () {
        var selVal = $(this).val()
        var res1 = []
        var res2 = []
        allData.forEach(item => {
            if (item.mapData == 'yes') {
                res1.push(item)
            } else {
                res2.push(item)
            }
        })
        if (selVal == 'yes') {
            console.log(res1);
            renderList(res1.slice((curPage - 1) * page, page * curPage))
        } else if (selVal == 'no') {
            renderList(res2.slice((curPage - 1) * page, page * curPage))
        } else {
            renderList(allData.slice((curPage - 1) * page, page * curPage))
        }
    })
    // External yes或no筛选
    $("#opt2").change(function () {
        var selVal = $(this).val()
        var res1 = []
        var res2 = []
        allData.forEach(item => {
            if (item.External == 'yes') {
                res1.push(item)
            } else {
                res2.push(item)
            }
        })
        if (selVal == 'yes') {
            console.log(res1);
            renderList(res1.slice((curPage - 1) * page, page * curPage))
        } else if (selVal == 'no') {
            renderList(res2.slice((curPage - 1) * page, page * curPage))
        } else {
            renderList(allData.slice((curPage - 1) * page, page * curPage))
        }
    })
    // 详情信息显示
    $(".table_list").on("click",'.item',function(){
        $(this).next(".info").slideToggle(600).siblings(".info").hide()
        $(this).find("td:first-child").toggleClass("jt")
    })
})
