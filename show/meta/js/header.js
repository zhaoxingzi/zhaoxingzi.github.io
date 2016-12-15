var zhuce = document.querySelector(".sign .reg");
var register = document.querySelector(".sign .register");
var creat = document.querySelector(".creat");
var registerPages  = document.querySelector(".register-pages");
var messagePages  = document.querySelector(".message-pages");
var denlu = document.querySelector(".sign .denlu");
var locate = document.querySelector(".locate");

zhuce.onclick=function(){
    register.style.display="block";
}
creat.onclick = function(){
    registerPages.style.display="none";
    messagePages.style.display="block";
}
register.ondblclick=function(){
    register.style.display="none";
}

denlu.onclick=function(){
    locate.style.display="block";
}

locate.ondblclick = function(){
    locate.style.display="none";
}