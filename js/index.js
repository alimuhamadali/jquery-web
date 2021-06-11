$(document).ready(function(){
    $("#loading").fadeOut(1000 , function() {
        $("body").css("overflow","auto")
    }); 
    let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if(wScroll > aboutOffset - 50 ) {
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }else {
        $("#main-nav").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500);
    }
})

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0} , 2000);
})

$("a").click(function (e) {

    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset}, 2000);
})

$("#toddleIcon").click(function () {
    let colorsBoxWidth = $("#colorsBox").innerWidth();

    if ($("#sideBar").css("left") == `0px`) {
        $("#sideBar").animate({left: `-${colorsBoxWidth}`} , 1000);
    } else {
        $("#sideBar").animate({left: `0px`} , 1000);
    }
})

let colorBoxes = $(".color-box");

colorBoxes.eq(0).css("backgroundColor", "tomato");
colorBoxes.eq(1).css("backgroundColor", "#09c");
colorBoxes.eq(2).css("backgroundColor", "orange");
colorBoxes.eq(3).css("backgroundColor", "teal");
colorBoxes.eq(4).css("backgroundColor", "aqua");
colorBoxes.eq(5).css("backgroundColor", "lightgreen");

colorBoxes.click(function (e) {
    let myColor = $(e.target).css("backgroundColor");

    $(".change").css("color", myColor);
})
})