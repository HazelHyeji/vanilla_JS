var section = document.querySelectorAll("div");
var colors = ['#d6463e', '#254963', '#ff68a6', '#31d9cc'];
var body = document.getElementsByTagName('body');



window.addEventListener("scroll", function () {
    for (var i = 1; i < colors.length; i++) {
        var windowY = window.pageYOffset;
        var scrollY = section[i].offsetTop-100;
        // var sectionHeight = section.clientHeight;
        if (windowY >= scrollY) {
            document.body.style.backgroundColor = colors[i];
        } else if ( windowY <= 100 ) {
            document.body.style.backgroundColor = '#171717';
        }
        console.log(windowY, scrollY);
    }
});


//스크롤을 하면
//window.pageYoffsetTop 을가져오고
//wY = offsetTop 이랑 같으면
//background color 를 바꾼다

//window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop


// if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {        
//     // Remove all classes on body with color-
//     $body.removeClass(function (index, css) {
//       return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//     });