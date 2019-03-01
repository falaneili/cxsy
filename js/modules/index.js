
var b = 1920 / 460; //我的图片比例
//获取浏览器宽度
var W = $(window).width();
var H = $(window).height();
layui.define(['carousel', 'form', 'layer'], function (exports) {
    var carousel = layui.carousel
        ,form = layui.form
        , layer = layui.layer;
    //轮播图
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,height: (W / b-5).toString() + "px" //按比例和浏览器可视页面宽度来获取高度
        ,interval: 5000 //时间间隔
        ,arrow: 'none' //始终显示箭头，可选hover,none
        , anim: 'fade' //动画类型 default（左右切换）updown（ 上下切换）fade（ 渐隐渐显切换）
        ,indicator: 'inside' //指示器位置，可选outside,none
        , arrow: 'hover' //hover（悬停显示）always（始终显示）none（始终不显示）
    });
    //使用相册
    layer.photos({
        photos: '#layer-photos',
        anim: 5,
    });
    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});

//窗口变化是重新加载
$(window).resize(function () {
    // setBanner();
    window.location.reload()
})


