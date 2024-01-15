$(function(){


    //이미지 슬라이드
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        fade:true,
        dots:true,
        arrows:false
    })//move").slick

    //팝업
    $(".close").click(function(){
        $(".pop").hide()
    })//close").click


    //모바일메뉴
    $(".m_menu").click(function(){
        $(".m_nav").slideToggle()
    })//

//m_more
$(".m_more").click(function(e){
    e.preventDefault()
    $(".m_sitemap").slideToggle();
}) //m_more").click

//리사이즈
$(window).resize(function(){
    var w = $(this).width()
    console.log("w : ",w)
    if(w > 768){
        $(".m_nav").hide()
        $(".m_sitemap").hide()
        $(".m_more").hide()
    }else{
        $(".m_more").show()
    }
})//

})//jquery