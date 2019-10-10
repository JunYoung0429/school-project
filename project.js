//텍스트 애니메이션
var typing = document.getElementById('gocoder_typing');
var typewriter = new Typewriter(typing, {
    loop: true
});
typewriter.typeString("강서공업고등학교")
.pauseFor(4000)
.deleteAll()
.start();

// 이미지 슬라이드 소스
$(document).ready(function () {
    $('.title-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('#btn1').click(function(){
        var offset = $('#move1').offset();
        $('html, body').animate({scrollTop : offset.top},500);
    });
    $('#btn2').click(function(){
        var offset = $('#move2').offset();
        $('html, body').animate({scrollTop : offset.top},500);
    });
    $('#btn3').click(function(){
        var offset = $('#move3').offset();
        $('html, body').animate({scrollTop : offset.top},500);
    });
    $('#btn4').click(function(){
        var offset = $('#move4').offset();
        $('html, body').animate({scrollTop : offset.top},500);
    });
    $('.top').click(function(){
        $('html,body').animate({scrollTop : 0},500);
    }) 
});
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://gangseogonggo.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();