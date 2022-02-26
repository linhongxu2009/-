// 2022 禁止抄袭
// 谢谢
function dairyfa() {
	// 样式
	document.getElementById('button45').style.backgroundColor="#EEEEEE";
	document.getElementById('button45').style.zIndex="1";
	document.getElementById('button54').style.zIndex="2";
	document.getElementById('button54').style.backgroundColor="#888888";
	// 获取value
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	var e = document.getElementById('e').value;
	var f = document.getElementById('f').value;
		// 进行初步运算
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
		var yyanzheng=y;
		y = y.toFixed(2);
	}
	var xf = k - l;
	var xs = m - n;
	var x;
	if (xf == 0 || xs == 0) {
		x = 0;
	} else {
		x = xf / xs;
		var xyanzheng=x;
		x = x.toFixed(2);
	}
		// 判断是否无解
	var yanzhengf=b*yyanzheng;
	var yanzhengs=a*xyanzheng;
	var yanzhengxf=yyanzheng*e;
	var yanzhengxs=xyanzheng*d;
	if(yanzhengf+yanzhengs!=c){
		document.getElementById("divonunder").innerHTML = "";
		var shuchu = document.getElementById("divonunder").innerHTML;
		shuchu="方程无解";
		document.getElementById("divonunder").innerHTML = shuchu;
		}
	else{
		if (yanzhengxf+yanzhengxs!=f) {
			document.getElementById("divonunder").innerHTML = "";
			var shuchu = document.getElementById("divonunder").innerHTML;
			shuchu="方程无解";
			document.getElementById("divonunder").innerHTML = shuchu;
		} 
		else{
				document.getElementById("divonunder").innerHTML = "";
				var shuchu = document.getElementById("divonunder").innerHTML;
				
				if (a==1) {
					if(b==1){
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ "x"+"+"+"y="+c+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ "x"+"+"+b+"y="+c+"</div><br>";
					}
				} 
				else{
					if(b==1){
						shuchu =shuchu+"<div class='shuchuqhtop'>"+a+ "x"+"+"+"y="+c+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ a+"x"+"+"+b+"y="+c+"</div><br>";
					}
				}
				if (d==1) {
					if(e==1){
						shuchu =shuchu+"<div class='shuchuqh'>"+"x"+"+"+"y="+f+"</div><br>";
					}
					else{
					shuchu =shuchu+"<div class='shuchuqh'>"+"x"+"+"+e+"y="+f+"</div><br>";
					}
				} 
				else{
					if(e==1){
						shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+"y="+f+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+e+"y="+f+"</div><br>";
					}
				}
				shuchu = shuchu + "<div class='shuchuqh'>由①得：x=" + drfs + "/" + a + " ③</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>将③带入②得：y=" + y + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>将" + "y=" + y + "带入①得：x=" + x + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>此方程组的解为：</div><div class='shuchuqh'><br>" + "x=" + x + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>y=" + y + "</div><br>";
				document.getElementById("divonunder").innerHTML = shuchu;
			}
		}
		// 验证是否为空
		if(a=="" || b=="" || c=="" || d=="" || e=="" || f==""){
			document.getElementById("divonunder").innerHTML = "";
			var shuchu = document.getElementById("divonunder").innerHTML;
			shuchu=shuchu+"请填写完整信息";
			document.getElementById("divonunder").innerHTML = shuchu;
		}
	}



function jiajiangfa() {
	// 样式
	document.getElementById('button54').style.backgroundColor="#EEEEEE";
	document.getElementById('button45').style.backgroundColor="#888888";
	document.getElementById('button54').style.zIndex="1";
	document.getElementById('button45').style.zIndex="2";
	// 获取value
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	var e = document.getElementById('e').value;
	var f = document.getElementById('f').value;
	// 进行初步运算
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
		var yyanzheng=y;
		y = y.toFixed(2);
	}
	var xf = k - l;
	var xs = m - n;
	var x;
	if (xf == 0 || xs == 0) {
		x = 0;
	} 
	else {
		x = xf / xs;
		var xyanzheng=x;
		x = x.toFixed(2);
	}
	// 判断是否无解
	var yanzhengf=b*yyanzheng;
	var yanzhengs=a*xyanzheng;
	var yanzhengxf=yyanzheng*e;
	var yanzhengxs=xyanzheng*d;
	if(yanzhengf+yanzhengs!=c){
		document.getElementById("divonunder").innerHTML = "";
		var shuchu = document.getElementById("divonunder").innerHTML;
		shuchu="方程无解";
		document.getElementById("divonunder").innerHTML = shuchu;
		}
	else{
		if (yanzhengxf+yanzhengxs!=f) {
			document.getElementById("divonunder").innerHTML = "";
			var shuchu = document.getElementById("divonunder").innerHTML;
			shuchu="方程无解";
			document.getElementById("divonunder").innerHTML = shuchu;
		} 
		else{
			// 判断是否为1
				document.getElementById("divonunder").innerHTML = "";
				var shuchu = document.getElementById("divonunder").innerHTML;
				
				if (a==1) {
					if(b==1){
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ "x"+"+"+"y="+c+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ "x"+"+"+b+"y="+c+"</div><br>";
					}
				} 
				else{
					if(b==1){
						shuchu =shuchu+"<div class='shuchuqhtop'>"+a+ "x"+"+"+"y="+c+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqhtop'>"+ a+"x"+"+"+b+"y="+c+"</div><br>";
					}
				}
				if (d==1) {
					if(e==1){
						shuchu =shuchu+"<div class='shuchuqh'>"+"x"+"+"+"y="+f+"</div><br>";
					}
					else{
					shuchu =shuchu+"<div class='shuchuqh'>"+"x"+"+"+e+"y="+f+"</div><br>";
					}
				} 
				else{
					if(e==1){
						shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+"y="+f+"</div><br>";
					}
					else{
						shuchu =shuchu+"<div class='shuchuqh'>"+ d+"x"+"+"+e+"y="+f+"</div><br>";
					}
				}
				// 结束
				shuchu = shuchu + "<div class='shuchuqh'>由①*" + d + "得：" + d * a + "x" + "+" + j + "y" + "=" + h + " ③</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>由②*" + a + "得：" + d * a + "x" + "+" + i + "y" + "=" + g + " ④</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>由③-④得：y=" + y + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>把y=" + y + "代入③得：" + "x=" + x + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>此方程组的解为：</div><br><div class='shuchuqh'>" + "x=" + x + "</div><br>";
				shuchu = shuchu + "<div class='shuchuqh'>y"+ "=" + y + "</div><br>";
				document.getElementById("divonunder").innerHTML = shuchu;
				
				
		}
	}
	// 验证是否为空
	if(a=="" || b=="" || c=="" || d=="" || e=="" || f==""){
		document.getElementById("divonunder").innerHTML = "";
		var shuchu = document.getElementById("divonunder").innerHTML;
		shuchu=shuchu+"请填写完整信息";
		document.getElementById("divonunder").innerHTML = shuchu;
	}
}
