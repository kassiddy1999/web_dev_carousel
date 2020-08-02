function marg1() {
    var slider = document.querySelector('#slider');
    slider.style.marginLeft = '-100%';
     slider.style.transition = '.5s';

    function marg2() {
        var slider = document.querySelector("#slider");
        slider.style.marginLeft = '-200%';
         slider.style.transition = '.5s';


            function marg0() {
                var slider = document.querySelector("#slider");
                slider.style.marginLeft = '0%';
                slider.style.transition = '.5s';
                setTimeout(marg0, 8000);

            };
            setTimeout(marg1, 8000);
        };
        setTimeout(marg2, 8000);
       
    };
 



setInterval(slid, 7500);
setInterval(para,7200);
setInterval(head,7200);
setInterval(line,7300);
setTimeout(marg1, 8000);
setInterval(slid2, 8500);
setInterval(head2,8600);
setInterval(para2,8600);
setInterval(line2,8600);

function slid() {
    var s = document.querySelectorAll('.slider');
    var i;
    for (i = 0; i < s.length; i++) {
        s[i].style.transform = 'scale(.8)';
        s[i].style.transition = '.5s';
    }
}

function slid2() {
    var s = document.querySelectorAll('.slider');
    var i;
    for (i = 0; i < s.length; i++) {
        s[i].style.transform = 'scale(1)'
       s[i].style.transition = '.5s';
    }
}

function head(){
    var h = document.querySelectorAll('h1');
    var i;
    for(i=0; i<h.length; i++){
        h[i].style.top ='70px';
    }
}

function head2(){
    var h = document.querySelectorAll('h1');
    var i;
    for(i=0; i<h.length; i++){
        h[i].style.top ='0';
    }
}

function para(){
    var p = document.querySelectorAll('.text');
    var i;
    for(i=0; i<p.length;i++){
        p[i].style.bottom='40px';
    }
}
function para2(){
    var p = document.querySelectorAll('.text');
    var i;
    for(i=0; i<p.length;i++){
        p[i].style.bottom ='0';
    }
};
function line(){
    var l=document.querySelector('.line');
    var i;
    for(i=0; i<l.length;i++){
        l[i].style.transform ='scale(0)';
    }
}
function line2(){
    var l=document.querySelector('.line');
    var i;
    for(i=0; i<l.length;i++){
        l[i].style.transform ='scale(1)';
    }
}

