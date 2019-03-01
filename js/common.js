/*返回顶部*/
function tBox() {
    //h = $(window).height();
    t = $(document).scrollTop();
    if (t > 150) {
        $(".tbox").fadeIn(300);
    } else {
        $(".tbox").fadeOut(300);
    }
}
$(document).ready(function (e) {
    $("body").append('<div class="tbox"><a href="javascript:void(0)" title="返回顶部" id="gotop"></a></div>');

    tBox();

    $("#gotop").click(function () {
        //$(document).scrollTop(0);
        $('html,body').animate({
            'scrollTop': 0
        }, 1000); //滚回顶部的时间，越小滚的速度越快~
    })
});

$(window).scroll(function (e) {
    tBox();
})

/*判断浏览器版本是否过低*/
$(document).ready(function () {
    var b_name = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    if (version[1]) {
        var trim_version = version[1].replace(/[ ]/g, "");
        if (b_name == "Microsoft Internet Explorer") {
            if (trim_version == "MSIE7.0" || trim_version == "MSIE6.0" || trim_version == "MSIE8.0") {
                $("body").append(
                    '<div class="banbendi" style=" z-index: 999; width:100%;height:30px;background:#FFFF99;text-align:center;line-height:30px;color:#666666;position:fixed;top:0;left:0;" onClick="hid()">您的浏览器版本过低，会影响网页浏览，请使用更高版本的浏览器</div>'
                );
            }
        }
    }
});

function hid() {
    $(".banbendi").css("display", "none");
}