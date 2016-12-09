 var data = data;
var item = data.item;

function $(x){
	return document.querySelector(x);
}
function $s(x){
	return document.querySelectorAll(x);
}
var btns=$s("li [type=checkbox]");
var btn=$("#all");
var display=$("#allPrice");
var singlePrice =$s(".xiaoji");
var adds=$s('.add');
var minus=$s('.minus');
var shanchu=$s("li div a");
var Price = 0;

var xuanZhong = true;
var length = btns.length;

// 计算总数
function allPrice(){
	Price=0;
	for(var i=0;i<length;i++){
		if(btns[i].checked){
			Price += parseInt($s("[num='']")[i].value) * item[i].price;
 		}
	}
	display.value=Price;
}
function xiaoji(){
	for(var i=0;i<item.length;i++){
		singlePrice[i].value = parseInt($s("[num='']")[i].value) * item[i].price;
	}
}

for(var i=0;i<item.length;i++){
		singlePrice[i].value = parseInt($s("[num='']")[i].value) * item[i].price;
}
// 点击全选按钮
btn.onclick=function(){
	for(var i=0;i<length;i++){
		btns[i].checked=this.checked;
	}
	if(this.checked){
		allPrice();
		xiaoji();
	}
	else{
		Price=0;
		display.value=0;
	}
}
// 添加商品数量和减少商品数量
for(var i=0;i<adds.length;i++){
	adds[i].index=i;
	minus[i].index=i;
	adds[i].onclick=function(){
		var num=$s("[num='']")[this.index].value;
		$s("[num='']")[this.index].value = ++num;
		btns[this.index].checked=true;
		allPrice();
		xiaoji();
		panduan();
	}
	minus[i].onclick=function(){
		var num=$s("[num='']")[this.index].value; 
		if(num <=1){
			$s("[num='']")[this.index].value = 1;
		}
		else{
			$s("[num='']")[this.index].value = --num;
			btns[this.index].checked=true;
		}
		allPrice();
		xiaoji();
		panduan();
	}
}

// 
for(var i=0;i<length;i++){
	btns[i].onclick=function(){
		panduan();
	}
}
function panduan(){
	for(var i=0;i<length;i++){
		var isTrue=true;
		if(btns[i].checked == false){
			btn.checked=false;
		}
		else if(btns[i].checked == true){
			for(var i=0;i<length;i++){
				if(btns[i].checked ==false){
					isTrue=false;
				}
			}
			if(!isTrue){
				btn.checked=false;
			}
			else{
				btn.checked=true;
			}
		}
		allPrice();
		xiaoji();
	}
}

// 删除商品
var Ul=$('ul');
var Li=$s("li");
for(var i=0;i<length;i++){
	shanchu[i].index=i;
	shanchu[i].onclick=function(){
		$s("li")[this.index].style.display="none";
		btns[this.index].checked=false;
		allPrice();
	}
}

// 价格排序
var button=$("[type=button]");
var ul=$("ul");
var html="";
var isUp=true;

button.onclick=function(){
	html="";
	if(isUp){
		var obj=up();
		this.value="按价格⬆️";
		for(var i=0;i<obj.length;i++){
			html +="<li><input type='checkbox'>"+
				"<h3>"+obj[i].title+"</h3>"+
				"<div class='shuzhi'>"+
					"<input class='minus' value='-'>"+
					"<input type='text' num='' value='1'>"+
					"<input class='add' value='+'></div>"+
				"<span>￥：<i>"+obj[i].price+"</i></span>"+
				"<input type='text' class='xiaoji' value='0'>"+
				"<div class='shanchu'>"+
				"<a href='javascript:void(0)'>"+obj[i].delete+"</a></div></li>"
		}
		ul.innerHTML=html;
		isUp=false;
	}
	else{
		html="";
		var obj=down();
		this.value="按价格⬇️";
		for(var i=0;i<obj.length;i++){
			html +="<li><input type='checkbox'>"+
				"<h3>"+obj[i].title+"</h3>"+
				"<div class='shuzhi'>"+
					"<input class='minus' value='-'>"+
					"<input type='text' num='' value='1'>"+
					"<input class='add' value='+'></div>"+
				"<span>￥：<i>"+obj[i].price+"</i></span>"+
				"<input type='text' class='xiaoji' value='0'>"+
				"<div class='shanchu'>"+
				"<a href='javascript:void(0)'>"+obj[i].delete+"</a></div></li>"
	}
	ul.innerHTML=html;
	isUp=true;
}

}
function up(){
	var obj = item.sort(function(a,b){
		return b.price-a.price;
	});
	return obj;
}
function down(){
	var obj = item.sort(function(a,b){
		return a.price-b.price;
	});
	return obj;
}












