alert("Начинаем игру Космический Космос!");

let windowW = document.documentElement.clientWidth;
let windowH = document.documentElement.clientHeight;


var left = 0;
window.onkeydown = function move_left(event){
	if(event.keyCode==37 && left != 0){
		left=left-20;
		}
	else if(event.keyCode==39 && left != windowW - +180){
		left=left+20;
		}
	else if(event.keyCode==32){
        //пуляем от пробела

	}
	document.getElementById('myship').style.left = left + 'px';
	document.getElementById('mykoord').innerHTML = left;
};


var elem = document.getElementById('enbullet');
var enemy = document.getElementById('enemy');
var enemypos = 0, back = true, bullethpos = 180,
animation = setInterval(function(){
	 enemypos += back ? 10 : -10;
     if (enemypos>windowW - +450||enemypos<0)  back = !back;
	 enemy.style.left = enemypos + 'px';
	 document.getElementById('enemykoord').innerHTML=enemypos;
	 //полет пули вражеского звездолета
	 if (bullethpos < windowH - 250) {
		 bullethpos = bullethpos + 10;
	 	 enbullet.style.top = bullethpos + 'px';
		 
	 }
	 else {
		bullethpos = 180;
		enbullet.style.top = bullethpos + 'px';
		enbullet.style.left = enemypos + +185 + 'px';
		bulletvpos = enemypos;
		document.getElementById('enbulvkoord').innerHTML = bulletvpos;		 
	};
	
	document.getElementById('enbulhkoord').innerHTML = bullethpos;

	if (bullethpos >= 660 && (bulletvpos >= left - +20 && bulletvpos <= left + +20)) {
		alert('popadanie!')
	};


},50);


