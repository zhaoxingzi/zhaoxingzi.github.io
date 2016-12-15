



window.onscroll=function(){//滚轮事件
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;//滚轮滚动的距离
    console.log(top)
    var node=document.querySelector('.nav');//变化的菜单模块
    if(top>270){//就是滚动条滚动到440px位置，显示菜单，并且可以修改它的样式。
        node.style.position='fixed';
        node.style.top=0;
        node.style.background='rgba(0,0,0,0.7)';
        node.style.zIndex=999;
    }else{//当鼠标滚动回初始位子样式变回。
        node.style.position='static';
        node.style.background='';
        node.style.zIndex=0;
    }
}
