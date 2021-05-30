/*

1. Сделать движение игрока вверх и вниз(стрелочки вверх и вниз) - done
2. Сделать выстрел, нажатием на пробел - done
3. Сделать полет пули - done
4. Сделать проверку попала ли пуля в цель(муха) - done
5. Если попали по мухе то сделать взрыв - done

6. Удалять пулю когда она вышла за пределы игрового поля - done

*/

// Выбираю блок с игроком
player = document.querySelector("#player");

// количество жизней
lifes = 3;

let count = 0;

// Добавляю событие нажатия клавиши
document.addEventListener('keydown', function(event) {

	switch(event.keyCode){

		// Нажали вниз(s)
		case 83:

			player.style.top = player.offsetTop + 80 + "px";
			break;

		// Нажали вверх(w)
		case 87:
			player.style.top = player.offsetTop - 80 + "px";
			break;

		// Нажали пробел
		case 32:
			createBullet();
			break;

	}
});

// Создание пули
//<div class="bullet"></div>
function createBullet() {
	// Создаем блок для пули
	let bullet = document.createElement("div");
	// даем класс пули
	bullet.className = "bullet";
	// задаем начальное значение позиции пули
	bullet.style.top = player.offsetTop + 150 + "px";
	// добавляем пулю на игровое поле
	document.body.appendChild(bullet);

	// делаем движение пули
	bulletMove(bullet)
}
createEnemy();

function bulletMove(bullet) {
	// создаем таймер для движения пули
	let timerId = setInterval(function() {
		// двигаем пулю вправо
		bullet.style.left = bullet.offsetLeft + 10 + "px";
		// проверяем попала ли пуля в мишень 
		isShot(bullet, timerId);
		
		if(bullet.offsetLeft > document.body.clientWidth) {
			bullet.remove();
			clearInterval(timerId);
		}

	}, 10);
}

function isShot(bullet, timer) {
	// Координаты верхней и нижней точки пули
	let topB = bullet.offsetTop;
	let bottomB = bullet.offsetTop + bullet.offsetHeight;

	let enemy = document.querySelector(".enemy");
	if(enemy != null) {
		// Координаты верхней и нижней точки противника
		let topE = enemy.offsetTop;
		let bottomE = enemy.offsetTop + enemy.offsetHeight;

		let leftB = bullet.offsetLeft;
		let leftE = enemy.offsetLeft;

		
		if(topB >= topE && topB <= bottomE && leftB >= leftE) {
			enemy.className = 'boom';
			enemy.style.top = (topE - 50) + "px";
			enemy.style.left = (leftE - 50) + "px";
			clearInterval(enemy.dataset.timer);
			setTimeout(function() {
				enemy.remove();

				createEnemy();
				bullet.remove();
				clearInterval(timer);
				saveCountFly();
			}, 500)
		}
	}	

}

function isDie() {
	let enemy = document.querySelector('.enemy');

	if(enemy.offsetTop > player.offsetTop && 
		enemy.offsetTop < player.offsetTop + player.offsetHeight &&
		enemy.offsetLeft <= player.offsetLeft + player.offsetWidth) {
		enemy.className = 'boom';
		enemy.style.top = (player.offsetTop + 50) + "px";
		enemy.style.left = (player.offsetLeft + 50) + "px";
		clearInterval(enemy.dataset.timer);
		setTimeout(function() {
			enemy.remove();
			createEnemy();
		}, 500);
		die();
	}
}

// Создание врага
// <div class="enemy"></div>
function createEnemy() {
	let enemy = document.createElement("div");
	enemy.className = "enemy";
	enemy.style.top = random(200, document.body.offsetHeight - 100) + "px";
	
	document.body.appendChild(enemy);

	let timerId = setInterval(function() {

		enemy.style.left = (enemy.offsetLeft - 10) + "px";
		if(enemy.offsetLeft + enemy.offsetWidth < 0) {
			enemy.remove();
			clearInterval(timerId);
			createEnemy();
			// отнимаем жизнь
			die();
		}

		isDie();
	}, 100);
	enemy.dataset.timer = timerId;
}

function die() {
	lifes--;
	if(lifes != 0) {
		let lifesBlock = document.querySelector('#lifes');
		let life = lifesBlock.querySelector("span");
		life.remove();
	} else {
		endGame();
	}
	
}

function endGame() {
	document.body.innerHTML = "";
	alert("Game over");
	location.reload();
}

// получить случайное число от min до (max+1)
function random(min, max) {
  
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
