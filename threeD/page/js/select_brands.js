//精选品牌的====轮播图

var btn = document.querySelector(".btn");
var btnList = document.querySelectorAll(".btn li");
var content = document.querySelector(".pic");
var contentList = document.querySelectorAll(".pic li");

var index=0;

var length = btnList.length;
content.style.position="relative";
for(var i = 0;i<length;i++){
    contentList[i].style.position="absolute";
    contentList[i].style.top="0";
    contentList[i].style.left="0";
    contentList[i].style.transition="1.5s";
    btnList[i].index = i;
    btnList[i].onmouseover = function(){
        for(var i = 0;i<btnList.length;i++){
            clearInterval(timer);
            contentList[i].style.opacity = 0;
            btnList[i].className="";
        }
        index=this.index;
        contentList[this.index].style.opacity = 1;
        btnList[this.index].className="active";
    }
    btnList[i].onmouseout=function(){
        timer=setInterval(xiaYiGe,4000);
    }
}
function xiaYiGe(){
    index ++;
    if(index > length-1){
        index = 0;
    }
    for(var i = 0;i<length;i++){
        btnList[i].className = "";
        contentList[i].style.opacity=0;
    }
    btnList[index].className="active";
    contentList[index].style.opacity=1;
}
timer=setInterval(xiaYiGe,4000);


// 精选品牌的商品展示

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28718218-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* when document is ready */
$(function() {

    /* initiate plugin */
    $("div.holder").jPages({
        containerID : "itemContainer",
        callback    : function( pages, items ){
            $("#legend1").html(" 共 " + pages.count + "页,");
            $("#legend2").html( " 共 " + items.count + "条");
        }
    });

    /* when button is clicked */
    $("button").click(function(){
        /* get given page */
        var page = parseInt( $("input").val() );

        /* jump to that page */
        $("div.holder").jPages( page );
    });
});



var obj = obj;
var item = obj.item;
console.log(item)
var UL = document.querySelector("#itemContainer");
console.log(UL);
var str1="";
for(var i=0; i<77;i++){
    str1 +=  '<li><a href="#"><img src="'+item[0].pic+'"></a>';
}
UL.innerHTML += str1;
console.log(UL.innerHTML)

