window.onload=function(){
    var wrap = document.querySelector(".scroll");
    var ul = document.querySelector(".tupian");
    var width = wrap.offsetWidth;
    var left = 0;
    var box = document.querySelector(".box");

    box.style.width = width*2+ "px";
    var newUl = ul.cloneNode(true);
    box.appendChild(newUl);

    var timer = null;
    timer = setInterval(function(){
        left --;
        if(Math.abs(left) >= wrap.offsetWidth){
            left = 0;
        }
        box.style.left = left + "px";
    },10);
}
