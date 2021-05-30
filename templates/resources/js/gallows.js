let words = [
	"Абрикос",
	"Яблоко",
	"Цветы",
	"Зелень",
	"Удобрение",
	"Секатор",
	"Урожай",
	"Ромашка",
	"Орошение",
	"Крыжовник",
	"Фрукты",
	"Теплица",
	"Огород",
	"Палисад",
	"Ботаника",
	"Кустарник",
	"Беседка",
	"Оранжерея",
	"Виноград",
	"Калитка",
	"Подсолнух",
	"Ландшафт",
	"Камень",
	"Веранда",
	"Трава",
	"Черешня",
	"Груша",
];

var word = words[Math.floor(Math.random() * words.length)];
var ile_bled=0;

var yes=new Audio("resources/audio/yes.wav");
var no=new Audio("resources/audio/no.mp3");
var winner=new Audio("resources/audio/winner.mp3");
var fail =new Audio("resources/audio/fail.mp3");
var word1 ="";

for (i=0; i < word.length ;i++) {
	if (word.charAt(i)==" ")word1=word1+" ";
	else word1=word1+"-";
}

word = word.toUpperCase();

function show_password() {
	document.getElementById("unknown word").innerHTML = word1;
}

window.onload = start;

var letters = new Array(33);
letters[0] = "А";
letters[1] = "Б";
letters[2] = "В";
letters[3] = "Г";
letters[4] = "Д";
letters[5] = "Е";
letters[6] = "Ё";
letters[7] = "Ж";
letters[8] = "З";
letters[9] = "И";
letters[10] = "Й";
letters[11] = "К";
letters[12] = "Л";
letters[13] = "М";
letters[14] = "Н";
letters[15] = "О";
letters[16] = "П";
letters[17] = "Р";
letters[18] = "С";
letters[19] = "Т";
letters[20] = "У";
letters[21] = "Ф";
letters[22] = "Х";
letters[23] = "Ц";
letters[24] = "Ч";
letters[25] = "Ш";
letters[26] = "Щ";
letters[27] = "Ъ";
letters[28] = "Ы";
letters[29] = "ь";
letters[30] = "Э";
letters[31] = "Ю";
letters[32] = "Я";

function start() {
	var content="";

	for (i=0;i<=32; i++) {
		var element = "lit" + i;

		content=content +'<div class="letter" onclick="check('+i+')"id="'+element+'">'+letters[i]+'</div>';

		if ((i+1) %7==0) content=content +'<div style="clear:both;"></div>'
		}

	document.getElementById("alphabet").innerHTML=content;

	show_password();
}

String.prototype.setSign=function(place,symbol) {
	if(place>this.length-1) return this.toString();
	else return this.substr(0,place)+symbol+this.substr(place+1);
};

function check(nr) {

	var choice=false;

	for (i=0; i < word.length; i++) {
		if (word.charAt(i)==letters[nr]) {
			word1=word1.setSign(i,letters[nr]);
			choice=true;
		}
	}


	if(choice==true) {

	yes.play();
	var element = "lit"+ nr;

		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = " 3px solid #00C000";
		document.getElementById(element).style.cursor = "default";

	show_password();
	} else {
		no.play();
		var element = "lit"+ nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";

		document.getElementById(element).setAttribute("onclick",";");

		ile_bled++;
		var image="resources/images/s"+ile_bled+".png";
		document.getElementById("gallows image").innerHTML='<img src="'+image+'" alt=""/>'
		}
	if(word==word1){
		document.getElementById("alphabet").innerHTML="Поздравляю, вы угадали слово: " +word+
		'<br/><br/><span class="reset" onclick="location.reload()">Начать игру заново ?</span>';
		saveCountWord();
	}


	if(word==word1) winner.play();

	if (ile_bled>=9)
	document.getElementById("alphabet").innerHTML="Вы проиграли! Правильное слово: " +word+'<br/><br/><span class="reset" onclick="location.reload()">Начать игру заново?</span>';
	if (ile_bled>=9)
	 fail.play();
}





