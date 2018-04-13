var browserType = BrowserType();
$(function(){
    if(browserType == 'IE9'){ 
        alert('您使用的浏览器版本过低，为了使用体验，请您升级到最新版本的IE哦');
        location.href = 'https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads';  
        return;
    }
    
    $(".user_operate").toggle(
        function () { $(".user_operate>ul").show(); },
        function () { $(".user_operate>ul").hide(); });

    checkWindow();
    checkFullScreenHdr();
    
    $(".circle li:eq(0)").click(function () {
        $(".circle").removeClass("liTwoTrans liThreeTrans liFourTrans liFiveTrans liSixTrans").addClass("liOneTrans");
    })
    $(".circle li:eq(1)").click(function () {
        $(".circle").removeClass("liOneTrans liThreeTrans liFourTrans liFiveTrans liSixTrans").addClass("liTwoTrans");
    })
    $(".circle li:eq(2)").click(function () {
        $(".circle").removeClass("liOneTrans liTwoTrans liFourTrans liFiveTrans liSixTrans").addClass("liThreeTrans");
    })
    $(".circle li:eq(3)").click(function () {
        $(".circle").removeClass("liOneTrans liTwoTrans liThreeTrans liFiveTrans liSixTrans").addClass("liFourTrans");
    })
    $(".circle li:eq(4)").click(function () {
        $(".circle").removeClass("liOneTrans liTwoTrans liThreeTrans liFourTrans liSixTrans").addClass("liFiveTrans");
    })
    $(".circle li:eq(5)").click(function () {
        $(".circle").removeClass("liOneTrans liTwoTrans liThreeTrans liFourTrans liFiveTrans").addClass("liSixTrans");
    })

    
    var map = new mapClass("江西省", "江西省");
    var jiangxi = [{ name: '南昌市', value: 7623 }, { name: '九江市', value: 6700 }, { name: '萍乡市', value: 6500 }, { name: '景德镇市', value: 5502, }, { name: '鹰潭市', value: 4503 }, { name: '新余市', value: 3003 }, { name: '赣州市', value: 2299 }, { name: '抚州市', value: 1940 }, { name: '宜春市', value: 1701 }, { name: '吉安市', value: 820 }, { name: '上饶市', value: 820 }];
    map.showMap(jiangxi);
	
});

//地图展示class
var mapClass = (function () {
    var title;
    var regionName;
    function mapClassHelp(titletemp, region) {
        title = titletemp;
        regionName = region;
    }
    mapClassHelp.prototype.showMap = function (dtt) {
        var myChart3 = echarts.init(document.getElementById('mapDiv'));
        var uploadedDataURL = "../js/json/" + regionName + ".json";
        $.get(uploadedDataURL, function (as) {
            echarts.registerMap('ch', as);
            var series = [];
            series.push(
                {
                    name: title,
                    type: 'map',
                    map: 'ch',
                    itemStyle: {
                        normal: {
                            borderColor: 'transparent',
                            color: '#000'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'transparent',
                            color: '#000',
                            label:
                            {
                                show: true
                            }
                        },
                        emphasis: { label: { show: true } }
                    },
                    data: dtt
                });
            var option = {
                visualMap: { //视觉映射组件
                    type: 'piecewise', //分段型。
                    show: false,
                    splitNumber: 5,
                    inverse: true,
                    pieces: [
                        {
                            min: 7001,
                            max: 8000,
                            color: '#DB3F04'
                        },
                        {
                            min: 6001,
                            max: 7000,
                            color: '#0087DD'
                        },
                        {
                            min: 5001,
                            max: 6000,
                            color: '#883153'
                        },
                        {
                            min: 4001,
                            max: 5000,
                            color: '#DB3F04'
                        }, {
                            min: 3001,
                            max: 4000,
                            color: '#0087DD'
                        },
                        {
                            min: 2001,
                            max: 3000,
                            color: '#883153'
                        },
                        {
                            min: 1001,
                            max: 2000,
                            color: '#DB3F04'
                        },
                        {
                            min: 1,
                            max: 1000,
                            color: '#0087DD'
                        },],
                    left: 'left',
                    top: 'top',
                    textStyle: {
                        color: '#2b99fe'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                geo: {
                    map: 'ch',
                    itemStyle: {
                        normal: {
                            areaColor: '#ddd',
                            borderColor: 'transparent'
                        },
                        emphasis: {
                            areaColor: '#ccc'
                        }
                    },
                },
                series: series
            };
            myChart3.on('click', function (param) {

             });
            myChart3.setOption(option);
        });
    }
    return mapClassHelp;
})();

 //判断当前浏览类型  
 function BrowserType() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器  
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器  
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器  

    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return "IE7";
        } else if (fIEVersion == 8) {
            
            return "IE8";
        } else if (fIEVersion == 9) {
            
            return "IE9";
        } else if (fIEVersion == 10) {
            
            return "IE10";
        } else if (fIEVersion == 11) {
            
            return "IE11";
        } else {
            return "0"
        } 
    } 

    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
    if (isSafari) {
        return "Safari";
    }
    if (isChrome) {
        return "Chrome";
    }
    if (isEdge) {
        return "Edge";
    }
}

//IE9浏览器下选转，缩放
function doRotateScale(dom, angle, scale){
    angle = parseFloat(angle) || 0;
        scale = parseFloat(scale) || 1;
        if (typeof (angle) === "number") {
            var rad = angle * (Math.PI / 180);
            var m11 = Math.cos(rad) * scale,
                m12 = -1 * Math.sin(rad) * scale,
                m21 = Math.sin(rad) * scale,
                m22 = m11;
            if (!dom.style.Transform) {
                dom.style.filter =  "progid:DXImageTransform.Microsoft.Matrix(M11=" + m11 + ",M12=" + m12 + ",M21=" + m21 +
                ",M22=" + m22 + ",SizingMethod='auto expand')";
            }
        }
}


function checkWindow(){
    console.log('检测屏幕高度 ' + $(window).height());
    //屏幕分辨率为1024以下
    if($(window).width() < 1024){
        $('body')[0].style.marginTop = 0;
        $('.top-head')[0].style.marginTop = 0;
        $('.center_dom')[0].style.marginTop = 0;
    }else{
        //在屏幕分辨率高度768像素的情况下，窗口的高度还需减去浏览器头部一些东西大概100px
        if($(window).height() < 680){
            $('body')[0].style.marginTop = 0;
            $('.top-head')[0].style.marginTop = 0;

            if($(window).height() <= 630)$('.center_dom')[0].style.marginTop = 0;
            else $('.center_dom')[0].style.marginTop = 2 + 'em';
        }else{
            $('.center_dom')[0].style.marginTop = 6 + 'em';
            $('body')[0].style.marginTop = 0 + 'px';
            $('.top-head')[0].style.marginTop = 20 + 'px';
        }
    }
    
}

function onFullScreenView(){
    var test = function(){
        checkWindow();
    }
    if(isFullScreen){
        $('.center_dom')[0].style.marginTop = 10 + 'em';
        $('body')[0].style.marginTop = 5 + 'em';
    }else{
        setTimeout(test, 800); //直接调用checkWindow setTimeout不起作用？
    }
}

//默认进入就全屏
var isFullScreen = false;
function checkFullScreenHdr(){
    $(document).on('click', function(){
        if(!isFullScreen){
            var el = document.documentElement;
            fullScreen(el); //进入全屏
        }
    });
    
    //阻止用户自己按f11的全屏动作
    $(document).on('keydown', function(e){
        if(e && e.keyCode == 122){
            e.preventDefault();  //阻止F11默认动作
        }
    });

    exitFullSCreen();//退出全屏
}

// 判断各种浏览器，找到正确的方法
function fullScreen(el){
    if(el.requestFullscreen) { //W3C 
        console.log('进入全屏 - w3c');
        el.requestFullscreen();
      } else if(el.mozRequestFullScreen) {
        console.log('进入全屏 - moz');
        el.mozRequestFullScreen();
      } else if(el.webkitRequestFullscreen) {
        console.log('进入全屏 - webkit');
        el.webkitRequestFullscreen();
      } else if(el.msRequestFullscreen) {
        console.log('进入全屏 - ms');
        el.msRequestFullscreen();
      }

    isFullScreen = true;
    onFullScreenView();
}

function exitFullSCreen(){
    var changeView = function(){
        if(isFullScreen)isFullScreen = false;
        onFullScreenView();
    }

    //侦听全屏变化
    document.addEventListener("fullscreenchange", function() {
        if(!document.fullscreen){
            console.log('退出全屏 - w3c');
            changeView();
        }
    });

    document.addEventListener("webkitfullscreenchange", function() {
        if(!document.webkitIsFullScreen){
            console.log('退出全屏 - webkit');
            changeView();
        }
    });

    document.addEventListener("mozfullscreenchange", function() {
        if(!document.mozFullScreen){
            console.log('退出全屏 - moz');
            changeView();
        }
    });

    document.addEventListener("msfullscreenchange", function() {
        if(!document.msFullscreen){
            console.log('退出全屏 - ms');
            changeView();
        }
    });
    
    // if (document.exitFullscreen) {  
    //     console.log('退出全屏 - w3c');
    //     document.exitFullscreen();  
    //     changeView();
    // }  
    // else if (document.mozCancelFullScreen) { 
    //     console.log('退出全屏 - moz'); 
    //     document.mozCancelFullScreen();  
    //     changeView();
    // }  
    // else if (document.webkitCancelFullScreen) {  
    //     console.log('退出全屏 - webkit ');
    //     document.webkitCancelFullScreen();  
    //     changeView();
    // }  
    // else if (document.msExitFullscreen) { 
    //     console.log('退出全屏 - ms'); 
    //     document.msExitFullscreen();  
    //     changeView();
    // }
    
    
}

// $('#aside-nav').click(move());
// $('#aside-nav').mouseout(back());


    // var offsetX = 80;  //要水平移动的距离
    // var moveOffset = 0;  //当前已经移动的距离
    // var step = 2;   //每次移动的像素

    // var firPos = parseInt($('.menu-first')[0].style.top); //第一个球的原始位置
    // var secPos = parseInt($('.menu-second')[0].style.left); //第2个球的原始位置
    // var thirPos = parseInt($('.menu-third')[0].style.left); //第3球的原始位置
    // var fourPos = parseInt($('.menu-fourth')[0].style.bottom); //第4球的原始位置

    // function move(){
    //     console.log($('.menu-first'));
    //     if(moveOffset < offsetX){
    //         $('.menu-first')[0].style.top = firPos + step + 'px';
    //         $('.menu-second')[0].style.left = secPos + step + 'px';
    //         $('.menu-third')[0].style.left = thirPos + step + 'px';
    //         $('.menu-fourth')[0].style.bottom = fourPos + step + 'px';

    //         moveOffset += step;
    //     }else {
    //         clearTimeout(time1);
    //         offsetX = 80;
    //         moveOffset = 0;
    //     }
    //     var time1 = setTimeout(move, 5);
    // }

    // function back(){
    //     if(moveOffset < offsetX){
    //         $('.menu-first')[0].style.top = parseInt($('.menu-first')[0].style.top) - step + 'px';
    //         $('.menu-second')[0].style.left = parseInt($('.menu-second')[0].style.left) - step + 'px';
    //         $('.menu-third')[0].style.left = parseInt($('.menu-third')[0].style.left) - step - 'px';
    //         $('.menu-fourth')[0].style.bottom = parseInt($('.menu-fourth')[0].style.bottom) - step + 'px';

    //         moveOffset += step;
    //     }else {
    //         clearTimeout(time2);
    //         offsetX = 80;
    //         moveOffset = 0;
    //     }
    //     var time2 = setTimeout(back, 5)
    // }




