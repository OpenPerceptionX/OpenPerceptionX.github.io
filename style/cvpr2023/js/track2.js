$(function () {
    // 定义的数据
    var allData_2 = [
        {      "Organization": "Mach Drive",
            "Rank": 1,
            "team": "MACH",
            "mAP": 83.5,
            "Ped_Crossing": 86.66,
            "Divider": 81.54,
            "Boundary": 82.29
        },
        {      "Organization": "Independent Researcher",
            "Rank": 2,
            "team": "MapNeXt",
            "mAP": 73.65,
            "Ped_Crossing": 68.94,
            "Divider": 76.66,
            "Boundary": 75.34
        },
        {
            "Organization": "Shanghai Jiao Tong University",
            "Rank": 3,
            "team": "SJTUCR",
            "mAP": 73.39,
            "Ped_Crossing": 70.37,
            "Divider": 75.08,
            "Boundary": 74.73
        },
        {
            "Organization": "Lotus NYO",
            "Rank": 4,
            "team": "LTS (MapLTS2)",
            "mAP": 72.56,
            "Ped_Crossing": 72.67,
            "Divider": 73.2,
            "Boundary": 71.8
        },
        {
            "Organization": "University of Science and Technology of China",
            "Rank": 5,
            "team": "ustc_vgg",
            "mAP": 71.02,
            "Ped_Crossing": 69.05,
            "Divider": 73.24,
            "Boundary": 70.76
        },
        {      "Organization": "Xi'an Jiaotong University",
            "Rank": 6,
            "team": "XJTU-IAIR",
            "mAP": 70.43,
            "Ped_Crossing": 64.69,
            "Divider": 74.52,
            "Boundary": 72.07
        },
        {
            "Organization": "-",
            "Rank": 7,
            "team": "MapVision",
            "mAP": 69.71,
            "Ped_Crossing": 65.58,
            "Divider": 73.48,
            "Boundary": 70.06
        },
        {
            "Organization": "-",
            "Rank": 8,
            "team": "Qml",
            "mAP": 68.28,
            "Ped_Crossing": 63.9,
            "Divider": 71.73,
            "Boundary": 69.21
        },
        {
            "Organization": "-",
            "Rank": 9,
            "team": "SAITAD",
            "mAP": 67.34,
            "Ped_Crossing": 68.56,
            "Divider": 64.02,
            "Boundary": 69.45
        },
        {
            "Organization": "GACRD",
            "Rank": 10,
            "team": "MapSeg",
            "mAP": 67.1,
            "Ped_Crossing": 63.52,
            "Divider": 70.33,
            "Boundary": 67.46
        },
        {
            "Organization": "-",
            "Rank": 11,
            "team": "IgniteVision",
            "mAP": 66.41,
            "Ped_Crossing": 62.04,
            "Divider": 70.43,
            "Boundary": 66.76
        },
        {
            "Organization": "-",
            "Rank": 12,
            "team": "LOMG (LOMG)",
            "mAP": 64.53,
            "Ped_Crossing": 62.97,
            "Divider": 66.66,
            "Boundary": 63.96
        },
        {
            "Organization": "-",
            "Rank": 13,
            "team": "MapKP",
            "mAP": 64.11,
            "Ped_Crossing": 59.7,
            "Divider": 67.62,
            "Boundary": 65.01
        },
        {
            "Organization": "-",
            "Rank": 14,
            "team": "MapLCF_HuaweiNoah",
            "mAP": 62.79,
            "Ped_Crossing": 59.41,
            "Divider": 67.2,
            "Boundary": 61.77
        },
        {
            "Organization": "-",
            "Rank": 15,
            "team": "Victory",
            "mAP": 60.66,
            "Ped_Crossing": 52.85,
            "Divider": 66.13,
            "Boundary": 62.99
        },
        {
            "Organization": "-",
            "Rank": 16,
            "team": "DNTCAD",
            "mAP": 59.84,
            "Ped_Crossing": 53.89,
            "Divider": 64.24,
            "Boundary": 61.39
        },
        {
            "Organization": "-",
            "Rank": 17,
            "team": "litemap (Litemap)",
            "mAP": 58.43,
            "Ped_Crossing": 52.07,
            "Divider": 62.34,
            "Boundary": 60.89
        },
        {
            "Organization": "-",
            "Rank": 18,
            "team": "Bell",
            "mAP": 56.94,
            "Ped_Crossing": 51.9,
            "Divider": 61.53,
            "Boundary": 57.38
        },
        {
            "Organization": "HDI",
            "Rank": 19,
            "team": "HDI_Striker (tiny)",
            "mAP": 52.77,
            "Ped_Crossing": 48.15,
            "Divider": 61.36,
            "Boundary": 48.8
        },
        {
            "Organization": "-",
            "Rank": 20,
            "team": "Ctyun-AI (BaseLine)",
            "mAP": 42.65,
            "Ped_Crossing": 36.24,
            "Divider": 50.95,
            "Boundary": 40.77
        },
        {
            "Organization": "-",
            "Rank": 21,
            "team": "Host_75980_Team (VectorMapNet-Baseline)",
            "mAP": 42.11,
            "Ped_Crossing": 35.95,
            "Divider": 50.11,
            "Boundary": 40.26
        }
    ]
    // 每页显示数据量
    var page_2 = 10
    // 总条目数
    var total_2 = allData_2.length
    // 总页数
    var pages_2 = Math.ceil(total_2 / page_2)
    // 当前页
    var curPage_2 = 1
    renderList(allData_2)
    // 渲染数据列表
    function renderList(data) {
        // 总页数
        pages_2 = Math.ceil(total_2 / page_2)
        $(".table_list_2 tbody tr:not(:last-child)").remove()
        data = data.slice((curPage_2 - 1) * page_2, page_2 * curPage_2)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
        <td>${item.Rank}</td>
        <td>${item.team}</td>
        <td>${item.Organization}</td>
        <td><b>${item.mAP}</b></td>
        <td>${item.Ped_Crossing}</td>
        <td>${item.Divider}</td>
        <td>${item.Boundary}</td>
      </tr>

      `
            $(htmlStr).insertBefore($(".page_2"))
        })
        // 初始化 分页数据
        $("#curpage_2").val(curPage_2)
        // 总页数渲染
        $("#total_2").text(pages_2)
    }
    // 根据name进行排序
    $(".table_list_2 tr th:nth-child(1)").click(function () {
        mysort($(this), 'Rank', allData_2)
    })
    $(".table_list_2 tr th:nth-child(2)").click(function () {
        mysort($(this), 'team', allData_2)
    })
    $(".table_list_2 tr th:nth-child(3)").click(function () {
        mysort($(this), 'Organization', allData_2)
    })
    $(".table_list_2 tr th:nth-child(4)").click(function () {
        mysort($(this), 'mAP', allData_2)
    })
    $(".table_list_2 tr th:nth-child(5)").click(function () {
        mysort($(this), 'Ped_Crossing', allData_2)
    })
    $(".table_list_2 tr th:nth-child(6)").click(function () {
        mysort($(this), 'Divider', allData_2)
    })
    $(".table_list_2 tr th:nth-child(7)").click(function () {
        mysort($(this), 'Boundary', allData_2)
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
    $("#pageOption_2").change(function () {
        page_2 = $(this).val()
        renderList(allData_2)
    })
    // 上一页
    $("#prev_2").click(function () {
        curPage_2--
        if (curPage_2 <= 0) {
            curPage_2 = 1;
            $(this).prop('disabled', true)
        }
        $("#next_2").prop('disabled', false)
        $("#curPage_2").val(curPage_2)
        renderList(allData_2)
    })
    // 下一页
    $("#next_2").click(function () {
        curPage_2++
        if (curPage_2 >= pages_2) {
            curPage_2 = pages_2;
            $(this).prop('disabled', true)
        }
        $("#prev_2").prop("disabled", false)
        $("#curPage_2").val(curPage_2)
        renderList(allData_2)
    })
    // 手动输入页码
    $("#curpage_2").change(function () {
        var inpVal = $(this).val()
        console.log(inpVal);
        if (inpVal <= 0) {
            curPage_2 = 1
            $("#prev_2").prop("disabled", true);
            $("#next_2").prop("disabled", false);
        } else if (inpVal > pages_2) {
            curPage_2 = pages_2
            $("#next_2").prop("disabled", true);
            $("#prev_2").prop("disabled", false);
        } else {
            $("#next_2").prop("disabled", false);
            $("#prev_2").prop("disabled", false);
            curPage_2 = inpVal
        }
        renderList(allData_2)
    })
})
