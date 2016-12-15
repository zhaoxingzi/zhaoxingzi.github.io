var front = document.querySelectorAll(".front");
var end = document.querySelectorAll(".end");
var a = document.querySelectorAll("ul li .lop");
var shopcar = document.querySelectorAll("ul li .lop .shopcars")

var length = a.length;
for(var i=0;i<a.length;i++){
    a[i].index=i;
    a[i].onmouseover = function(){
        for(var j=0;j<length;j++){
            front[this.index].style.display="none";
            end[this.index].style.display="block";
            shopcar[this.index].style.display="block";
        }
    }
    a[i].onmouseout = function(){
        for(var j=0;j<length;j++){
            front[this.index].style.display="block";
            end[this.index].style.display="none";
            shopcar[this.index].style.display="none";
        }
    }
}
