// 2022 禁止抄袭
// 谢谢
function dairyfa() {
	document.getElementById('button45').style.backgroundColor="#EEEEEE";
	document.getElementById('button45').style.zIndex="1";
	document.getElementById('button54').style.zIndex="2";
	document.getElementById('button54').style.backgroundColor="#888888";
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	var e = document.getElementById('e').value;
	var f = document.getElementById('f').value;
	var g = a * f;
	var h = d * c;
	var i = a * e;
	var j = d * b;
	var k = e * c;
	var l = b * f;
	var m = e * a;
	var n = d * b;
	var drff = b + "y";
	var drfs = c + "-" + drff;
	var yf = g - h;
	var ys = i - j;
	var y;
	if (yf == 0 || ys == 0) {
		y = 0;
	} else {
		y = yf / ys;
		y = y.toFixed(2);
	}
	var xf = k - l;
	var xs = m - n;
	var x;
	if (xf == 0 || xs == 0) {
		x = 0;
	} else {
		x = xf / xs;
		x = x.toFixed(2);
	}
	document.getElementById("divonunder").innerHTML = "";
	var shuchu = document.getElementById("divonunder").innerHTML;
	var shuchu =shuchu+"<div class='shuchuqhtop'>"+ a+"x"+"+"+b+"y="+c+"</div><br>";
	var shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+e+"y="+f+"</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>由①得：x=" + drfs + "/" + a + " ③</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>将③带入②得：y=" + y + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>将" + "y=" + y + "带入①得：x=" + x + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>此方程组的解为：</div><div class='shuchuqh'><br>" + "x=" + x + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>y=" + y + "</div><br>";
	document.getElementById("divonunder").innerHTML = shuchu;
}

function jiajiangfa() {
	document.getElementById('button54').style.backgroundColor="#EEEEEE";
	document.getElementById('button45').style.backgroundColor="#888888";
	document.getElementById('button54').style.zIndex="1";
	document.getElementById('button45').style.zIndex="2";
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	var e = document.getElementById('e').value;
	var f = document.getElementById('f').value;
	var g = a * f;
	var h = d * c;
	var i = a * e;
	var j = d * b;
	var k = e * c;
	var l = b * f;
	var m = e * a;
	var n = d * b;
	var drff = b + "y";
	var drfs = c + "-" + drff;
	var yf = g - h;
	var ys = i - j;
	var y;
	if (yf == 0 || ys == 0) {
		y = 0;
	} else {
		y = yf / ys;
		y = y.toFixed(2);
	}
	var xf = k - l;
	var xs = m - n;
	var x;
	if (xf == 0 || xs == 0) {
		x = 0;
	} else {
		x = xf / xs;
		x = x.toFixed(2);
	}
	document.getElementById("divonunder").innerHTML = "";
	var shuchu = document.getElementById("divonunder").innerHTML;
	var shuchu =shuchu+"<div class='shuchuqhtop'>"+ a+"x"+"+"+b+"y="+c+"</div><br>";
	var shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+e+"y="+f+"</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>由①*" + d + "得：" + d * a + "x" + "+" + j + "y" + "=" + h + " ③</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>由②*" + a + "得：" + d * a + "x" + "+" + i + "y" + "=" + g + " ④</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>由③-④得：y=" + y + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>把y=" + y + "代入③得：" + "x=" + x + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>此方程组的解为：</div><br><div class='shuchuqh'>" + "x=" + x + "</div><br>";
	shuchu = shuchu + "<div class='shuchuqh'>y"+ "=" + y + "</div><br>";
	document.getElementById("divonunder").innerHTML = shuchu;
}
