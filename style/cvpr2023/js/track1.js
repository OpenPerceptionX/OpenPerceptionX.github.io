$(function () {
    // 定义的数据
    var allData = [
        {
            "Organization": "MEGVII Technology<br>旷视科技",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 1,
            "Team": "MFV",
            "DET_l": 0.36,
            "DET_t": 0.80,
            "TOP_ll": 0.23,
            "TOP_lt": 0.33,
            "OLS": 0.55,
            "Fscore": 0.26
        },
        {
            "Organization": "QCraft<br>轻舟智航",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 2,
            "Team": "qcraft2 *",
            "DET_l": 0.42,
            "DET_t": 0.64,
            "TOP_ll": 0.07,
            "TOP_lt": 0.30,
            "OLS": 0.47,
            "Fscore": 0.48
        },
        {
            "Organization": "AMD AEAI",
            "Country" : "/style/cvpr2023/img/country/USA.svg",
            "Rank": 3,
            "Team": "Victory",
            "DET_l": 0.22,
            "DET_t": 0.72,
            "TOP_ll": 0.13,
            "TOP_lt": 0.23,
            "OLS": 0.45,
            "Fscore": 0.25
        },
        {
            "Organization": "QCraft<br>轻舟智航",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 4,
            "Team": "qcraft-team *",
            "DET_l": 0.30,
            "DET_t": 0.64,
            "TOP_ll": 0.05,
            "TOP_lt": 0.25,
            "OLS": 0.41,
            "Fscore": 0.35
        },
        {
            "Organization": "Middle East Technical University",
            "Country" : "/style/cvpr2023/img/country/TUR.svg",
            "Rank": 5,
            "Team": "PlatypusWhisperers",
            "DET_l": 0.22,
            "DET_t": 0.71,
            "TOP_ll": 0.06,
            "TOP_lt": 0.16,
            "OLS": 0.39,
            "Fscore": 0.46
        },
        {
            "Organization": "MeiTuan<br>美团",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 6,
            "Team": "gavin",
            "DET_l": 0.18,
            "DET_t": 0.70,
            "TOP_ll": 0.04,
            "TOP_lt": 0.21,
            "OLS": 0.39,
            "Fscore": 0.25
        },
        {
            "Organization": "Beihang University<br>北京航空航天大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 7,
            "Team": "qwertyczx (e110_r)",
            "DET_l": 0.26,
            "DET_t": 0.66,
            "TOP_ll": 0.03,
            "TOP_lt": 0.19,
            "OLS": 0.39,
            "Fscore": 0.28
        },
        {
            "Organization": "Turing Inc.",
            "Country" : "/style/cvpr2023/img/country/JPN.svg",
            "Rank": 8,
            "Team": "turing-machine",
            "DET_l": 0.13,
            "DET_t": 0.79,
            "TOP_ll": 0.01,
            "TOP_lt": 0.13,
            "OLS": 0.35,
            "Fscore": 0.25
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 9,
            "Team": "Haoqing",
            "DET_l": 0.09,
            "DET_t": 0.72,
            "TOP_ll": 0.04,
            "TOP_lt": 0.15,
            "OLS": 0.35,
            "Fscore": 0.4
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 10,
            "Team": "TopoNet-Anonymous",
            "DET_l": 0.19,
            "DET_t": 0.58,
            "TOP_ll": 0.02,
            "TOP_lt": 0.16,
            "OLS": 0.33,
            "Fscore": 0.28
        },
        {        
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 11,
            "Team": "BVLab",
            "DET_l": 0.12,
            "DET_t": 0.64,
            "TOP_ll": 0.03,
            "TOP_lt": 0.16,
            "OLS": 0.33,
            "Fscore": 0.27
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 12,
            "Team": "HDI_EasternExpo",
            "DET_l": 0.14,
            "DET_t": 0.64,
            "TOP_ll": 0.01,
            "TOP_lt": 0.15,
            "OLS": 0.32,
            "Fscore": 0.20
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 13,
            "Team": "ArterySentinel",
            "DET_l": 0.12,
            "DET_t": 0.45,
            "TOP_ll": 0.00,
            "TOP_lt": 0.03,
            "OLS": 0.19,
            "Fscore": 0.22
        },
        {
            "Organization": "Tsinghua University<br>清华大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 14,
            "Team": "WeakChicken",
            "DET_l": 0.00,
            "DET_t": 0.68,
            "TOP_ll": 0.00,
            "TOP_lt": 0.00,
            "OLS": 0.17,
            "Fscore": 0.00
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
    function renderList(data) {
        // 总页数
        pages = Math.ceil(total / page)
        $(".table_list tbody tr:not(:last-child)").remove()
        data = data.slice((curPage - 1) * page, page * curPage)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
        <td>${item.Rank}</td>
        <td>${item.Team}</td>
        <td>${filter(item.Country)}</td>
        <td>${item.Organization}</td>
        <td><b>${num(item.OLS)}</b></td>
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
    $(".table_list tr th:nth-child(1)").click(function () {
        mysort($(this), 'Rank', allData)
    })
    // $(".table_list tr th:nth-child(2)").click(function () {
    //     mysort($(this), 'Team', allData)
    // })
    $(".table_list tr th:nth-child(5)").click(function () {
        mysort($(this), 'OLS', allData)
    })
    $(".table_list tr th:nth-child(6)").click(function () {
        mysort($(this), 'DET_l', allData)
    })
    $(".table_list tr th:nth-child(7)").click(function () {
        mysort($(this), 'DET_t', allData)
    })
    $(".table_list tr th:nth-child(8)").click(function () {
        mysort($(this), 'TOP_ll', allData)
    })
    $(".table_list tr th:nth-child(9)").click(function () {
        mysort($(this), 'TOP_lt', allData)
    })
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
