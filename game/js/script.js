alert("Начинаем игру Космический Космос!");

var left = 0;
window.onkeydown = function move_left(event){
	if(event.keyCode==37 & left != 0){
		left=left-20;
		}
	else if(event.keyCode==39 & left != 800){
		left=left+20;
		}
		document.getElementById('myship').style.left = left + 'px';
		document.getElementById("mykoord").innerHTML = left;
	
};


var elem = document.getElementById("enbullet");
var enemy = document.getElementById('enemy');
var pos = 0, back = true, bulletpos = 0,
animation = setInterval(function(){
	 pos += back ? 10 : -10;
     if (pos>600||pos<0)  back = !back;
	 enemy.style.marginLeft = pos + 'px';
	 document.getElementById("enemykoord").innerHTML=pos;
	 //полет пули вражеского звездолета
	 if (bulletpos < 450) {
		 bulletpos = bulletpos + 10;
	 	 enbullet.style.marginTop = bulletpos + 'px';
		 enbullet.style.Left = left + 'px';
	 }
	 else {bulletpos = 0};


},50);


