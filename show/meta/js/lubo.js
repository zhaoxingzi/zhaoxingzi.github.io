

var btn = document.querySelector(".btn");
var btnList = document.querySelectorAll(".btn li");
var content = document.querySelector(".pic");
var contentList = document.querySelectorAll(".pic li");

var index=0;

var length = btnList.length;
for(var i = 0;i<length;i++){
    contentList[i].style.opacity = 0;
    btnList[i].style.background = ""
}
contentList[0].style.opacity = 1;
btnList[0].style.background = "gray";


content.style.position="relative";
for(var i = 0;i<length;i++){
    contentList[i].style.position="absolute";
    contentList[i].style.top="0";
    contentList[i].style.left="0";
    contentList[i].style.transition="1.5s";
    btnList[i].index = i;
    btnList[i].onclick = function(){
        for(var i = 0;i<btnList.length;i++){
            contentList[i].style.opacity = 0;
            btnList[i].style.background = "";
        }
        contentList[this.index].style.opacity = 1;
        this.style.background = "gray";
    }
}
