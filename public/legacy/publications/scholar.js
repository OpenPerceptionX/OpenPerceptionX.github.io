var url_list = [{
    name: 'Li Chen',
    url: 'https://scholar.google.com/citations?user=ulZxvY0AAAAJ'
}, {
    name: 'Penghao Wu',
    url: 'https://scholar.google.com/citations?user=9mssd5EAAAAJ'
}, {
    name: 'Chonghao Sima',
    url: 'https://scholar.google.com/citations?user=dgYJ6esAAAAJ'
}, {
    name: 'Hongyang Li',
    url: 'https://scholar.google.com/citations?user=Hfrih1EAAAAJ'
}, {
    name: 'Xiaosong Jia',
    url: 'https://scholar.google.com/citations?user=JeFQwxUAAAAJ'
}, {
    name: 'Junchi Yan',
    url: 'https://scholar.google.com/citations?user=ga230VoAAAAJ'
}, {
    name: 'Andreas Geiger',
    url: 'https://scholar.google.com/citations?user=SrVnrPcAAAAJ'
}, {
    name: 'Yu Qiao',
    url: 'https://scholar.google.com/citations?user=gFtI-8QAAAAJ'
}, {
    name: 'Huijie Wang',
    url: 'https://scholar.google.com/citations?user=Xg4cp-EAAAAJ'
}, {
    name: 'Jiazhi Yang',
    url: 'https://scholar.google.com/citations?user=Ju7nGX8AAAAJ'
}, {
    name: 'Zetong Yang',
    url: 'https://scholar.google.com/citations?user=oPiZSVYAAAAJ'
}, {
    name: 'Bangjun Wang',
    url: 'https://scholar.google.com/citations?user=_LeSlzUAAAAJ'
}, {
    name: 'Kashyap Chitta',
    url: 'https://scholar.google.com/citations?user=vX5i2CcAAAAJ'
}, {
    name: 'Ping Luo',
    url: 'https://scholar.google.com/citations?user=aXdjxb4AAAAJ'
}, {
    name: 'Yunsong Zhou',
    url: 'https://scholar.google.com/citations?user=bTsmnwcAAAAJ'
}, {
    name: 'Shenyuan Gao',
    url: 'https://scholar.google.com/citations?user=hZtOnecAAAAJ'
}, {
    name: 'Chengen Xie',
    url: 'https://scholar.google.com/citations?user=-Sk1x_gAAAAJ'
}, {
    name: 'Hanxue Zhang',
    url: 'https://scholar.google.com/citations?user=vy5r8rMAAAAJ'
}, {
    name: 'Yihang Qiu',
    url: 'https://scholar.google.com/citations?user=qgRUOdIAAAAJ'
}, {
    name: 'Qingwen Bu',
    url: 'https://scholar.google.com/citations?user=-JCRysgAAAAJ'
}, {
    name: 'Haochen Liu',
    url: 'https://scholar.google.com/citations?user=iizqKUsAAAAJ'
}, {
    name: 'Jisong Cai',
    url: 'https://scholar.google.com/citations?user=dTrpq94AAAAJ'
}, {
    name: 'Yuxiang Lu',
    url: 'https://scholar.google.com/citations?user=7m-TOp8AAAAJ'
}, {
    name: 'Tianyu Li',
    url: 'https://scholar.google.com/citations?user=X6vTmEMAAAAJ'
},];



function add_url(a) {
    var len = url_list.length;

    var h = a.toString();
    for (var i = 0; i < len; i++) {
    if (url_list[i]["name"] == h) {
        var htm = '<a href="' + url_list[i]["url"] + '" target="_blank" class="text-o-blue hover:underline">' + h + '</a>';
        var h = htm;
    }
    if (h == "et al.") {
        var htm = '<i>et al.</i>';
        var h = htm;
    }
    }
    return h
};



function cur(a) {
    var h = a.split(",")
    var len = h.length;
    var htm = ""
    for (var i = 0; i < len; i++) {
        var fh = (i == 0) ? "" : ", "
        htm += fh + add_url(h[i].replace(/^\s+|\s+$/g, ""))
    }
    return htm
};



addEventListener("load", () => {
    var authors_lists = document.getElementsByClassName("authors");
    for (var i = 0; i < authors_lists.length; i++) {
        authors_list = authors_lists[i];
        authors_list.innerHTML = cur(authors_list.textContent);
    }
});
