window.onload = function(){
    var small = document.querySelector(".small");
    var pointer = document.querySelector(".mask");
    var big = document.querySelector(".big");
    var bigImg = document.querySelector(".big img");



    small.onmouseover = function(){
        pointer.style.display = "block";
        big.style.display = "block";
    }
    small.onmouseout = function(){
        pointer.style.display = "none";
        big.style.display = "none";
    }
    small.onmousemove = function(event){
        var oEvent = event || window.event;

        var x = oEvent.clientX-small.offsetLeft-small.offsetParent.offsetLeft;
        var y = oEvent.clientY-small.offsetTop-small.offsetParent.offsetTop+document.body.scrollTop;
        var l = x - pointer.offsetWidth/2;
        var t = y - pointer.offsetHeight/2;


        if(x <= pointer.offsetWidth/2){
            l = 0;
        }else if(x >= small.offsetWidth - pointer.offsetWidth/2){
            l = small.offsetWidth - pointer.offsetWidth;
        }
        if(y <= pointer.offsetHeight/2){
            t = 0;
        }else if(y >= small.offsetHeight - pointer.offsetHeight/2){
            t = small.offsetHeight - pointer.offsetHeight;
        }

//      得到比例 ＝ 大图范围/小图范围
        var newX = (bigImg.offsetWidth - big.offsetWidth)/(small.offsetWidth - pointer.offsetWidth);
        var newY = (bigImg.offsetHeight - big.offsetHeight)/(small.offsetHeight - pointer.offsetHeight);

        // pointer.innerText = "x:"+x + ";y:"+y;
        pointer.style.left = l + "px";
        pointer.style.top = t + "px";

//          比例
        bigImg.style.left = -l*newX + "px";
        bigImg.style.top = -t*newY+ "px";
    }
}