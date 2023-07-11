$(function () {
    // 定义的数据
    var allData_0 = [
        {
            "Organization": "MEGVII Technology<br>旷视科技",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 1,
            "date": "2023-06-01",
            "Team": "MFV <br> <a href=\"/e2ead/AD23Challenge/Track_1_MFV.pdf\">[paper]</a> <a href=\"https://arxiv.org/pdf/2306.09590.pdf\">[arXiv]</a>",
            "prize" : "/style/cvpr2023/img/rank01.png",
            "DET_l": 0.3577,
            "DET_t": 0.7970,
            "TOP_ll": 0.2252,
            "TOP_lt": 0.3348,
            "OLS": 0.5519,
            "Fscore": 0.2559,
            "option": "Yes",
            "Authors": "Dongming Wu, Fan Jia, Jiahao Chang, Zhuoling Li, Jianjian Sun, Chunrui Han, Shuailin Li, Yingfei Liu, Zheng Ge, Tiancai Wang",
        },
        {
            "Organization": "QCraft<br>轻舟智航",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": "-",
            "date": "2023-05-17",
            "prize" : "",
            "Link": "",
            "Team": "qcraft2",
            "DET_l": 0.4168,
            "DET_t": 0.6374,
            "TOP_ll": 0.0657,
            "TOP_lt": 0.3037,
            "OLS": 0.4654,
            "Fscore": 0.4805,
            "option2": "Yes",
            "option": "No",
        },
        {
            "Organization": "AMD",
            "Country" : "/style/cvpr2023/img/country/USA.svg",
            "Rank": 2,
            "date": "2023-06-01",
            "prize" : "/style/cvpr2023/img/rank02.png",
            "Link": "",
            "Team": "Victory <br><a href=\"/e2ead/AD23Challenge/Track_1_Victory.pdf\">[paper]</a>",
            "DET_l": 0.2184,
            "DET_t": 0.7245,
            "TOP_ll": 0.1324,
            "TOP_lt": 0.2261,
            "OLS": 0.4456,
            "Fscore": 0.2530,
            "Authors": "Mingjie Lu, Yuanxian Huang, Ji Liu, Jinzhang Peng, Lu Tian, Ashish Sirasao",
        },
        {
            "Organization": "QCraft<br>轻舟智航",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": "-",
            "date": "2023-05-23",
            "prize" : "",
            "Link": "",
            "Team": "qcraft-team",
            "DET_l": 0.2960,
            "DET_t": 0.6374,
            "TOP_ll": 0.0463,
            "TOP_lt": 0.2469,
            "OLS": 0.4114,
            "Fscore": 0.3467
        },
        {
            "Organization": "Middle East Technical University",
            "Country" : "/style/cvpr2023/img/country/TUR.svg",
            "Rank": 3,
            "date": "2023-06-01",
            "prize" : "/style/cvpr2023/img/blomb1.png",
            "Link": "<a href=\"/e2ead/AD23Challenge/Track_1_PlatypusWhisperers.pdf\">[paper]</a>",
            "Team": "PlatypusWhisperers <br> <a href=\"/e2ead/AD23Challenge/Track_1_PlatypusWhisperers.pdf\">[paper]</a> <a href=\"https://arxiv.org/pdf/2306.05419.pdf\">[arXiv]</a>",
            "DET_l": 0.2209,
            "DET_t": 0.7061,
            "TOP_ll": 0.0602,
            "TOP_lt": 0.1570,
            "OLS": 0.3922,
            "Fscore": 0.4592,
            "Authors": "M. Esat Kalfaoglu, Halil Ibrahim Ozturk, Ozsel Kilinc, Alptekin Temizel",
        },
        {
            "Organization": "MeiTuan<br>美团",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 4,
            "date": "2023-06-01",
            "prize" : "",
            "Link": "<a href=\"/e2ead/AD23Challenge/Track_1_gavin.pdf\">[paper]</a>",
            "Team": "gavin <br> <a href=\"/e2ead/AD23Challenge/Track_1_gavin.pdf\">[paper]</a>",
            "DET_l": 0.1790,
            "DET_t": 0.7028,
            "TOP_ll": 0.0401,
            "TOP_lt": 0.2112,
            "OLS": 0.3854,
            "Fscore": 0.2478,
            "Authors": "Jiawei Zhao, Xuede Li, Junfeng Luo",
        },
        {
            "Organization": "Beihang University<br>北京航空航天大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 5,
            "date": "2023-06-01",
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
            "Country" : "/style/cvpr2023/img/country/JPN.svg",
            "Rank": 6,
            "date": "2023-06-01",
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
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 7,
            "date": "2023-06-01",
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
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 8,
            "date": "2023-05-29",
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
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 9,
            "date": "2023-06-01",
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
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 10,
            "date": "2023-06-01",
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
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 11,
            "date": "2023-05-28",
            "prize" : "",
            "Link": "",
            "Team": "ArterySentinel",
            "DET_l": 0.1182,
            "DET_t": 0.4459,
            "TOP_ll": 0.0008,
            "TOP_lt": 0.0286,
            "OLS": 0.1904,
            "Fscore": 0.2175,
            "option": "Yes"
        },
        {
            "Organization": "Tsinghua University<br>清华大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 12,
            "date": "2023-04-03",
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
    var page_0 = 10
    // 当前页
    var curPage_0 = 1
    var selected_data_0 = allData_0
    renderList(selected_data_0)
    // 总条目数
    var total_0 = selected_data_0.length
    // 总页数
    var pages_0 = Math.ceil(total_0 / page_0)
    // 渲染数据列表
    function num(i) {

        var n = (i*100).toFixed(2);
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
            return('-')
        } else {
            return(i)
        }
    }
    function filter_desc(i) {
        if (i == undefined) {
            return('-')
        } else {
            return(i)
        }
    }
    function renderList(data) {
        // 总页数
        total_0 = selected_data_0.length
        pages_0 = Math.ceil(total_0 / page_0)
        $(".table_list_0 tbody tr:not(:last-child)").remove()
        data = data.slice((curPage_0 - 1) * page_0, page_0 * curPage_0)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
        <td>${item.date}</td>
        <td>${item.Team}</td>
        <td>${filter(item.Country)}</td>
        <td>${item.Organization}</td>
        <td><b>${num(item.OLS)}</b></td>
        <td>${filter_undefined(item.option)}</td>
        <td>${filter_undefined(item.option2)}</td>
        <td>${num(item.DET_l)}</td>
        <td>${num(item.DET_t)}</td>
        <td>${num(item.TOP_ll)}</td>
        <td>${num(item.TOP_lt)}</td>
      </tr>
      <tr class="info">
      <td colspan="13">
          <p>
              <b>Authors:</b> &nbsp; ${filter_desc(item.Authors)}
          </p>
          <p>
                <b>Description:</b> &nbsp; ${filter_desc(item.Description)}
          </p>
      </td>
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
        mysort($(this), 'date', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(5)").click(function () {
        mysort($(this), 'OLS', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(8)").click(function () {
        mysort($(this), 'DET_l', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(9)").click(function () {
        mysort($(this), 'DET_t', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(10)").click(function () {
        mysort($(this), 'TOP_ll', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(11)").click(function () {
        mysort($(this), 'TOP_lt', selected_data_0)
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
        renderList(selected_data_0)
    })
    // 上一页
    $("#prev_0").click(function () {
        curPage_0--
        if (curPage_0 <= 0) {
            curPage_0 = 1;
            // $(this).prop('disabled', true)
        }
        // $("#next_0").prop('disabled', false)
        $("#curPage_0").val(curPage_0)
        renderList(selected_data_0)
    })
    // 下一页
    $("#next_0").click(function () {
        curPage_0++
        if (curPage_0 >= pages_0) {
            curPage_0 = pages_0;
            // $(this).prop('disabled', true)
        }
        // $("#prev_0").prop("disabled", false)
        $("#curPage_0").val(curPage_0)
        renderList(selected_data_0)
    })
    // 手动输入页码
    $("#curpage_0").change(function () {
        var inpVal = $(this).val()
        console.log(inpVal);
        if (inpVal <= 0) {
            curPage_0 = 1
            // $("#prev_0").prop("disabled", true);
            // $("#next_0").prop("disabled", false);
        } else if (inpVal > pages_0) {
            curPage_0 = pages_0
            // $("#next_0").prop("disabled", true);
            // $("#prev_0").prop("disabled", false);
        } else {
            // $("#next_0").prop("disabled", false);
            // $("#prev_0").prop("disabled", false);
            curPage_0 = inpVal
        }
        renderList(selected_data_0)
    })
    var inpVal_date = ''
    var inpVal_team = ''
    var selVal_opt1 = 'all'
    var selVal_opt2 = 'all'
    // 手动日期
    document.getElementById("date_search").addEventListener("input", searchdate);
    function searchdate() {
        inpVal_date = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.Team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    }
    // 手动队伍
    document.getElementById("team_search").addEventListener("input", searchteam);
    function searchteam() {
        inpVal_team = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.Team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    }
    // 筛选
    function opt1_macth(selected_option, entry_option) {
        if (selected_option == 'all') {
            return(true)
        }
        if (selected_option == 'Yes' && entry_option == 'Yes') {
            return(true)
        }
        if (selected_option == 'No' && entry_option == 'No') {
            return(true)
        }
        return(false)
    }
    $("#opt1").change(function () {
        selVal_opt1 = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.Team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    })
    $("#opt2").change(function () {
        selVal_opt2 = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.Team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    })
        // 详情信息显示
        $(".table_list_0").on("click",'.item',function(){
            $(this).next(".info").slideToggle(100).siblings(".info").hide()
            $(this).find("td:first-child").toggleClass("jt")
        })
    $(".table_list_0 tr th:nth-child(5)").click()
})
