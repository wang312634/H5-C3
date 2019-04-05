var tip = document.querySelector('.head_title-tip');
var titles = document.querySelectorAll('.head_title-item');
var float_titles = document.querySelectorAll('.float_title-item');
var Flag = 0 ;
function OnMove(flag){
	tip.style.left = flag * 120 + 50 + 'px';
}

function GoScreen(flag){
	if(flag==0){
		document.documentElement.scrollTop = 0;
	}
	if(flag==1){
			document.documentElement.scrollTop = 300;
	}
	if(flag==2){
			document.documentElement.scrollTop = 630;
	}
}

function Addactive(ele){
	var cls = ele.getAttribute('class');
	ele.setAttribute('class',cls+' '+cls+'-active');
}

function Delactive(ele){
	var cls = ele.getAttribute('class');
	cls = cls.split(' ')[0];
	ele.setAttribute('class',cls);
}

function SetActive(flag){
	for(let j = 0 ; j < titles.length ;j++){
		Delactive(titles[j]);
		Delactive(float_titles[j]);
	}
	Addactive(titles[flag]);
	Addactive(float_titles[flag]);
	Flag = flag ;
}

for(let i = 0 ; i<titles.length ; i++)
{
	titles[i].onmouseover = function(){
		OnMove(i);
	}
	titles[i].onclick = function(){
		SetActive(i);
		GoScreen(i);
	}
	float_titles[i].onclick=function(){
		SetActive(i);
		OnMove(i);
		GoScreen(i);
	}
	titles[i].onmouseout = function(){
		OnMove(Flag);
	}
}

window.onload = function(){
	OnMove(0);
	var sc1 = document.querySelector('.sc1');
	var sc2 = document.querySelector('.sc2');
	var sc3 = document.querySelector('.sc3');
	Addactive(sc1);
	Addactive(sc2);
}

window.onscroll = function(){
	var top = document.documentElement.scrollTop;
	var head = document.querySelector('.head');
	var sc3 = document.querySelector('.sc3');
	console.log(top);
	if(top > 40)
	{
		head.setAttribute('class','head head-active');
	}else{
		Delactive(head);
	}
	if(top>600){
		Addactive(sc3);
	}
}
