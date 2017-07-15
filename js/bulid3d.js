var s = '我叫于偲鸿，今年28岁，男，现居住于北京市朝阳区，毕业于中国矿业大学，专业计算机科学与技术，获得CET4证书，毕业后工作5年，从事地震资料处理工作，先后就职于恒泰艾普和爱恩达派公司，如今在妙味课堂学习前端，期望毕业后能找到一份好工作。';
var sence = document.getElementById('sence');
var box = document.getElementById('box');
var ring = document.getElementById('ring');
var lis = ring.getElementsByTagName('li');
var item = document.getElementsByClassName('item')[0];
var itemp = item.getElementsByTagName('p')[0];
var itema = item.getElementsByTagName('a')[0];
var btns = document.getElementsByClassName('btns')[0];
var buttons = btns.getElementsByTagName('button');
var jiaoduX = 0;
var jiaoduY = 0;
var circleTheta = 0;
var circlephi = 0;
var num =0;
var ceng = 0;
var wordnum = -1;
var wordnumarr = [];
var lisnum = 0;
var tablenum = 0;
var theta = Math.PI/(wordnumarr.length-1);
var phi = 0;
var r = 150;
var yuanzhuiarr = [];
var yuanzhuinum = 0;
var yuanzhuH2 = 0;
var yuanzhunum2 = 0;
var yuanzhuH = 0;
var yuanzhunum = 0;
//生成圆
//计算一共生成多少层
startFn();
function startFn(){
	itemp.innerHTML = s;
	jiaoduX = 0;
	jiaoduY = 0;
	circleTheta = 0;
	circlephi = 0;
	num =0;
	eng = 0;
	wordnum = -1;
	wordnumarr = [];
	lisnum = 0;
	tablenum = 0;
	theta = Math.PI/(wordnumarr.length-1);
	phi = 0;
	r = 150;
	yuanzhuiarr = [];
	yuanzhuinum = 0;
	yuanzhuH2 = 0;
	yuanzhunum2 = 0;
	yuanzhuH = 0;
	yuanzhunum = 0;
	
	for(var i=4;i<13;i++){
		num = i*i+(i+1)*(i+1);
		if(num >= s.length){
			ceng = (i-1)*2+1;
			break;
		}
		ceng = (i-1)*2+1;
	}
	for(var i=0;i<ceng;i++){
		if(i<(ceng+1)/2){
			wordnum += 2;
		}
		else{
			wordnum -= 2;
		}
		wordnumarr.push(wordnum); 
	}
	num=0;
	//180度除以一共多少份，就是一共有多少层 每层占了多少份
theta = Math.PI/(wordnumarr.length-1);
phi = 0;
r = 150;


for(var i=0;i<wordnumarr.length;i++){
	//是一个圆，360度除以每一层多少个数字。算出每一个数字占了多少份
	phi = 2*Math.PI/wordnumarr[i]; 
	for(var j=0;j<wordnumarr[i];j++){
		//生成Li
		var li = document.createElement('li');
		//给Li添加内容
		li.innerHTML = s[num];
		num++;
		//函数传参
		yuan(li,theta,phi,i,j);
		//添加li进ring（ul）
		ring.appendChild(li);
	}
}

yuanzhuiarr = [];
yuanzhuinum = 0;
lisnum = 0;
//圆锥
for(var i=1;i<lis.length;i++){
	yuanzhuinum += 2*i-1;
	if(yuanzhuinum>lis.length){
		yuanzhuinum -= 2*i-1;
		break;
	}
	yuanzhuiarr.push(2*i-1);
}
for(var i=0;i<yuanzhuiarr.length;i++){
	phi=2*Math.PI/yuanzhuiarr[i];
	for(var j=0;j<yuanzhuiarr[i];j++){
		yuanzhui(lis[lisnum],phi,i,j);
		lisnum++;
	}
}
//			for(var i=0;i<lis.length;i++){
//				lis[i].style.display = 'none';
//			}
//生成圆锥
//			for(var i=0;i<yuanzhuinum;i++){
//				lis[i].style.display = 'block';
//				lis[i].style.transform = 'translate3D('+lis[i].zhuiX+'px,'+lis[i].zhuiY+'px,'+lis[i].zhuiZ+'px) rotateY('+lis[i].zhuiPhi+'rad) rotateX('+lis[i].zhuiTheta+'rad)';
//			}


//圆柱
yuanzhuH = 0;
yuanzhunum = 0;
lisnum = 0;
//生成圆柱函数
//圆柱每层的个数
//			console.log(lis.length);
yuanzhuH = Math.floor(lis.length/(wordnumarr.length-2));
//			console.log(yuanzhuH);
//总共的个数
yuanzhunum = (wordnumarr.length-1)*yuanzhuH;
//			console.log(yuanzhunum);
//			console.log(wordnumarr.length-1);
for(var i=0;i<wordnumarr.length-1;i++){
	phi = 2*Math.PI/yuanzhuH;
	for(var j=0;j<yuanzhuH;j++){
		yuanzhu(lis[lisnum],phi,i,j);
		lisnum++;
	}
}
//生成圆柱1
//			for(var i=0;i<yuanzhunum;i++){
//				lis[i].style.display = 'block';
//				lis[i].style.transform = 'translate3D('+lis[i].zhuX+'px,'+lis[i].zhuY+'px,'+lis[i].zhuZ+'px) rotateY('+lis[i].zhuPhi+'rad)';
//			}


//圆柱2
yuanzhuH2 = 0;
yuanzhunum2 = 0;
lisnum = 0;
//生成圆柱函数
//圆柱每层的个数
//			console.log(lis.length);
yuanzhuH2 = Math.floor(lis.length/(wordnumarr.length-2));
//			console.log(yuanzhuH);
//总共的个数
yuanzhunum2 = (wordnumarr.length-1)*yuanzhuH2;
//			console.log(yuanzhunum);
//			console.log(wordnumarr.length-1);
for(var i=0;i<wordnumarr.length-1;i++){
	phi = 2*Math.PI/yuanzhuH2;
	for(var j=0;j<yuanzhuH2;j++){
		yuanzhu2(lis[lisnum],phi,i,j);
		lisnum++;
	}
}

//初始化（圆）
for(var i=0;i<lis.length;i++){
	lis[i].style.transform = 'translate3D('+lis[i].circleX+'px,'+lis[i].circleY+'px,'+lis[i].circleZ+'px) rotateY('+lis[i].circlephi+'rad) rotateX('+lis[i].circleTheta+'rad)';
	}
	num=0;
}
//生成圆柱2
//			for(var i=0;i<yuanzhunum2;i++){
//				lis[i].style.display = 'block';
//				lis[i].style.transform = 'translate3D('+lis[i].zhuX2+'px,'+lis[i].zhuY2+'px,'+lis[i].zhuZ2+'px) rotateY('+lis[i].zhuPhi2+'rad)';
//			}

//自动转	


//点击函数
var table = document.getElementById('table');
var tableas = table.getElementsByTagName('a');

tableas[0].onclick = function(){
	startchange();
	setTimeout(function(){
		changeyuan();
	},1050);
	tablenum = 0;
	for(var i=0;i<tableas.length;i++){
		tableas[i].className = '';
}
this.className = 'active';
text1.style.transform = 'scale(0.5)';
text1.style.opacity = '0';
setTimeout(function(){
	text1.style.display = 'none';
	},60)
}
tableas[1].onclick = function(){
	startchange();
	setTimeout(function(){
		changeyuanzhui();
	},1050);
	tablenum = 1;
	for(var i=0;i<tableas.length;i++){
		tableas[i].className = '';
}
this.className = 'active';
text1.style.transform = 'scale(0.5)';
text1.style.opacity = '0';
setTimeout(function(){
	text1.style.display = 'none';
	},60)
}
tableas[2].onclick = function(){
	startchange();
	setTimeout(function(){
		changeyuanzhu1();
	},1050);
	tablenum = 2;
	for(var i=0;i<tableas.length;i++){
		tableas[i].className = '';
}
this.className = 'active';
text1.style.transform = 'scale(0.5)';
text1.style.opacity = '0';
setTimeout(function(){
	text1.style.display = 'none';
	},60)
}
tableas[3].onclick = function(){
	startchange();
	setTimeout(function(){
		changeyuanzhu2();
	},1050);
	tablenum = 3;
	for(var i=0;i<tableas.length;i++){
		tableas[i].className = '';
}
this.className = 'active';
text1.style.transform = 'scale(0.5)';
text1.style.opacity = '0';
setTimeout(function(){
	text1.style.display = 'none';
	},60)
}
//拖拽
sence.onmousedown = function(ev){
	clearInterval(timer);
	var ev = ev||event;
	ev.preventDefault()
	//记录鼠标按下时候的XY值
var clickX = ev.clientX;
var clickY = ev.clientY;
var disX = 0;
var disY = 0;
document.onmousemove = function(ev){
	var ev = ev||event;
	//dis为鼠标移动后 移动的距离-按下时候的位置
	disX = ev.clientX - clickX;
	disY = ev.clientY - clickY;
	box.style.transform = 'rotateX('+(jiaoduX-disY)+'deg) rotateY('+(jiaoduY+disX)+'deg)';
}
document.onmouseup = function(){
	document.onmousemove = null;
	document.onmousedown = null;
	jiaoduX = jiaoduX - disY;
	jiaoduY = jiaoduY + disX;
	if(disY==0&&disX==0){
		disX=300;
	}
	timer = setInterval(function(){
		jiaoduX-=disY/100;
		jiaoduY+=disX/100;
		box.style.transform = 'rotateX('+jiaoduX+'deg) rotateY('+jiaoduY+'deg)';
		},60);
	}
}

var timer = setInterval(function(){
	jiaoduY++;
	box.style.transform = 'rotateY('+jiaoduY+'deg)';
},60);

//展开文字

buttons[0].onclick = function(){
	this.className = 'active';
startchange();
item.style.display = 'block';
setTimeout(function(){
	item.style.opacity = '1';
	item.style.transform = 'scale(1)';
	},1030)
}
itema.onclick = function(){
	buttons[0].className = '';
item.style.transform = 'rotateX(180deg)';
item.style.opacity = '0';
setTimeout(function(){
	switch(tablenum){
		case 0:
		changeyuan();
		break;
		case 1:
		changeyuanzhui();
		break;
		case 2:
		changeyuanzhu1();
		break;
		case 3:
		changeyuanzhu2();
		break;
	}
	item.style.transform = 'rotateX(0deg)';
	item.style.display = 'none';
	item.style.transform = 'scale(5)';
	},550)
}

//输入文字
var text1 = document.getElementsByClassName('text')[0];
var textarea1 = text1.getElementsByTagName('textarea')[0];
var text1btns = text1.getElementsByTagName('button');
var texta = text1.getElementsByTagName('a')[0];
buttons[1].onclick = function(){
	textarea1.value = '';
text1.style.display = 'block';
setTimeout(function(){
	text1.style.opacity = '1';
	text1.style.transform = 'scale(1)';
},12)
text1btns[0].onclick = function(){
	s = textarea1.value;
	if(s.length<50||s.length>250){
		alert('输入长度有误，请从新输入');
	}
	else{
		ring.innerHTML = '';
		startFn();
		text1.style.transform = 'scale(0.5)';
		text1.style.opacity = '0';
		setTimeout(function(){
			text1.style.display = 'none';
		},60)
	}
}
text1btns[1].onclick = function(){
	textarea1.value = '';
}
texta.onclick = function(){
	textarea1.value = '';
	text1.style.transform = 'scale(0.5)';
	text1.style.opacity = '0';
	setTimeout(function(){
		text1.style.display = 'none';
		},60)
	}
}


//生成圆的函数
function yuan(obj,theta,phi,i,j){
	//theta*i就是每一份*层数     phi*j 就是每份*多少数字 是一个圆 +200是XY的半径
	obj.circleX = r*Math.sin(theta*i)*Math.sin(phi*j)+200;
	obj.circleY = -r*Math.cos(theta*i)+200;
	obj.circleZ = r*Math.sin(theta*i)*Math.cos(phi*j);
	obj.circleTheta = theta*(wordnumarr.length-i)-Math.PI/2;
	obj.circlephi = phi*j;
	obj.bigcircleX = (r+2000)*Math.sin(theta*i)*Math.sin(phi*j)+200;
	obj.bigcircleY = -(r+2000)*Math.cos(theta*i)+200;
	obj.bigcircleZ = (r+2000)*Math.sin(theta*i)*Math.cos(phi*j);
	obj.maxX = obj.bigcircleX;
	obj.maxY = obj.bigcircleY;
	obj.maxZ = obj.bigcircleZ;
	obj.maxT = obj.circleTheta;
	obj.maxP = obj.circlephi;
}
//生成圆锥函数
function yuanzhui(obj,phi,i,j){
	obj.zhuiX = (2*r/yuanzhuiarr.length)*i*(Math.tan(Math.PI/6))*Math.sin(phi*j)+200;
	obj.zhuiY= (2*r/yuanzhuiarr.length)*i+50;
	obj.zhuiZ = (2*r/yuanzhuiarr.length)*i*(Math.tan(Math.PI/6))*Math.cos(phi*j);
	obj.zhuiTheta = Math.tan(Math.PI/6);
	obj.zhuiPhi = phi*j;
	obj.bigzhuiX = (2*(r+2000)/yuanzhuiarr.length)*i*(Math.tan(Math.PI/6))*Math.sin(phi*j)+200;
	obj.bigzhuiY= (2*(r+2000)/yuanzhuiarr.length)*i+50-2000;
	obj.bigzhuiZ = (2*(r+2000)/yuanzhuiarr.length)*i*(Math.tan(Math.PI/6))*Math.cos(phi*j);
}
//生成圆柱函数
function yuanzhu(obj,phi,i,j){
	obj.zhuX = r/1.5*Math.sin(phi*j)+200;
	obj.zhuY= (2*r/(wordnumarr.length-2))*i+50;
	obj.zhuZ = r/1.5*Math.cos(phi*j);
	obj.zhuPhi = phi*j;
	obj.bigzhuX = (r+2000)/1.5*Math.sin(phi*j)+200;
	obj.bigzhuY= (2*(r+2000)/(wordnumarr.length-2))*i+50-2000;
	obj.bigzhuZ = (r+2000)/1.5*Math.cos(phi*j);
}
//生成斜圆柱
function yuanzhu2(obj,phi,i,j){
	obj.zhuX2 = r/1.5*Math.sin(phi*j+i*8*Math.PI/180)+200;
	obj.zhuY2= (2*r/(wordnumarr.length-2))*i+50;
	obj.zhuZ2 = r/1.5*Math.cos(phi*j+i*8*Math.PI/180);
	obj.zhuPhi2 = phi*j+i*8*Math.PI/180;
	obj.bigzhuX2 = (r+2000)/1.5*Math.sin(phi*j+i*8*Math.PI/180)+200;
	obj.bigzhuY2= (2*(r+2000)/(wordnumarr.length-2))*i+50-2000;
	obj.bigzhuZ2 = (r+2000)/1.5*Math.cos(phi*j+i*8*Math.PI/180);
}
//开始切换
function startchange(){
	for(var i=0;i<lis.length;i++){
		lis[i].style.opacity = '0';
	lis[i].className = 'all';
	lis[i].style.transform = 'translate3D('+lis[i].maxX+'px,'+lis[i].maxY+'px,'+lis[i].maxZ+'px) rotateY('+lis[i].maxP+'rad) rotateX('+lis[i].maxT+'rad)';
	}
}
function changeyuan(){
	for(var i=0;i<lis.length;i++){
		lis[i].className = '';
	lis[i].maxX = lis[i].bigcircleX;
	lis[i].maxY = lis[i].bigcircleY;
	lis[i].maxZ = lis[i].bigcircleZ;
	lis[i].maxT = lis[i].circleTheta;
	lis[i].maxP = lis[i].circlephi;
	lis[i].style.transform = 'translate3D('+lis[i].maxX+'px,'+lis[i].maxY+'px,'+lis[i].maxZ+'px) rotateY('+lis[i].maxP+'rad) rotateX('+lis[i].maxT+'rad)';
}
for(var i=0;i<lis.length;i++){
	lis[i].className = 'one';
	lis[i].style.transform = 'translate3D('+lis[i].circleX+'px,'+lis[i].circleY+'px,'+lis[i].circleZ+'px) rotateY('+lis[i].circlephi+'rad) rotateX('+lis[i].circleTheta+'rad)';
	lis[i].style.opacity = '1';
	}
}
function changeyuanzhui(){
	for(var i=0;i<yuanzhuinum;i++){
		lis[i].className = '';
	lis[i].maxX = lis[i].bigzhuiX;
	lis[i].maxY = lis[i].bigzhuiY;
	lis[i].maxZ = lis[i].bigzhuiZ;
	lis[i].maxT = lis[i].zhuiTheta;
	lis[i].maxP = lis[i].zhuiPhi;
	lis[i].style.transform = 'translate3D('+lis[i].maxX+'px,'+lis[i].maxY+'px,'+lis[i].maxZ+'px) rotateY('+lis[i].maxP+'rad) rotateX('+lis[i].maxT+'rad)';
}
for(var i=0;i<yuanzhuinum;i++){
	lis[i].className = 'one';
	lis[i].style.transform = 'translate3D('+lis[i].zhuiX+'px,'+lis[i].zhuiY+'px,'+lis[i].zhuiZ+'px) rotateY('+lis[i].zhuiPhi+'rad) rotateX('+lis[i].zhuiTheta+'rad)';
	lis[i].style.opacity = '1';
	}
}
function changeyuanzhu1(){
	for(var i=0;i<yuanzhunum;i++){
		lis[i].className = '';
	lis[i].maxX = lis[i].bigzhuX;
	lis[i].maxY = lis[i].bigzhuY;
	lis[i].maxZ = lis[i].bigzhuZ;
	lis[i].maxP = lis[i].zhuPhi;
	lis[i].style.transform = 'translate3D('+lis[i].maxX+'px,'+lis[i].maxY+'px,'+lis[i].maxZ+'px) rotateY('+lis[i].maxP+'rad)';
}
for(var i=0;i<yuanzhunum;i++){
	lis[i].className = 'one';
	lis[i].style.transform = 'translate3D('+lis[i].zhuX+'px,'+lis[i].zhuY+'px,'+lis[i].zhuZ+'px) rotateY('+lis[i].zhuPhi+'rad)';
	lis[i].style.opacity = '1';
	}
}
function changeyuanzhu2(){
	for(var i=0;i<yuanzhunum2;i++){
		lis[i].className = '';
	lis[i].maxX2 = lis[i].bigzhuX2;
	lis[i].maxY2 = lis[i].bigzhuY2;
	lis[i].maxZ2 = lis[i].bigzhuZ2;
	lis[i].maxP2 = lis[i].zhuPhi2;
	lis[i].style.transform = 'translate3D('+lis[i].maxX+'px,'+lis[i].maxY+'px,'+lis[i].maxZ+'px) rotateY('+lis[i].maxP+'rad)';
}
for(var i=0;i<yuanzhunum2;i++){
	lis[i].className = 'one';
	lis[i].style.transform = 'translate3D('+lis[i].zhuX2+'px,'+lis[i].zhuY2+'px,'+lis[i].zhuZ2+'px) rotateY('+lis[i].zhuPhi2+'rad)';
	lis[i].style.opacity = '1';
	}
}