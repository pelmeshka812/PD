document.write("<p><p>");
random();
function clue() {
    clue1 = num-clue3;
    clue2 = num+clue4;
    alert("Число находится между " + clue1 + " и " + clue2);
}
function random()  {
    g=0;
    today = new Date();
    clue3=today.getTime();
    clue3=Math.round(Math.abs (Math.sin (clue3)*5));
    clue4=today.getTime();
    clue4=Math.round(Math.abs (Math.sin (clue4)*19));
    num = today.getTime();
    num = Math.round(Math.abs (Math.sin (num)*100));
    return num;
    return clue3;
    return clue4;
}
function guess() {
    var no=document.game.number.value;
    g=g+1;
    if (g == 5) {
        alert("Это была последняя попытка!");
      //  alert("Теперь отгадайте другое число!");
        document.game.number.value = "";
        random();
    }
    if (no > num ) {
        alert("Загаданное число меньше!");
        alert("Это была ваша " + g + " попытка!");
    }
    if (no < num ) {
        alert("Загаданное число больше!");
        alert("Это была ваша " + g + " попытка!");
    }
    if (no == num) {
        alert("Победа!");
        alert("Вы победили за " + g + "-ую попытку.");
        document.game.number.value = "";
        random();
        saveCountNumber();
    }
}