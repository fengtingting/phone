(function() {
    function changeRem() {
        var html = document.getElementsByTagName('html')[0];
        var sWith = document.documentElement.clientWidth;
        if(sWith >= 640){
            sWith = 640;
        }

        html.style.fontSize = sWith / 20 / 16 * 62.5 + '%';
    };
    changeRem();
    var t;
    window.addEventListener('resize', function() {
        clearTimeout(t);
        t = setTimeout(changeRem, 300);
        
    }, false);
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
        clearTimeout(t);
        t = setTimeout(changeRem, 300);
        }
    }, false);

}());
$('.hea-r').click(function(event){ window.open('http://images.cecb2b.com/images/zt/2016dppx/wap/bannner1.png')})
