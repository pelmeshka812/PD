let xo_count = 0;
let cookie_count = getCookie();

function start(num) {
    let start = document.getElementById('start');
    start.remove();
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    // let p = document.getElementById('puzzle');
    // p.style.display = 'none';
    startAudio();
    switch (num) {
        case 0:
            born();
            break;
        case 1:
            quiz_test();
            break;
        case 2:
            univer();
            break;
        case 3:
            game();
            break;
    }
}

let audioMain = new Audio('resources/audio/music.mp3');
function startAudio() {
    audioMain.volume = 0.4;
    audioMain.play();
    audioMain.loop = true;
}

function born() {
    let sec = document.getElementById('section');
    let img = '<img src="resources/images/born.jpg">';
    let btn = '<button class="btn" onclick="kindergarten()"><h3><b>Далее</b></h3></button>'
    sec.innerHTML += img + btn;
}

function kindergarten() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let img = '<img src="resources/images/kinder.png">';
    let btn = '<button class="btn" onclick="puzzle()"><h3><b>Далее</b></h3></button>'
    sec.innerHTML += img + btn;
}

function puzzle() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let s = document.createElement('script');
    s.src = 'resources/js/jquery.js';
    let script = document.createElement('script');
    script.src = "resources/js/jquery.jqpuzzle.js";
    sec.append(s);
    sec.append(script);
    let p = document.createElement('img');
    p.id = "p";
    p.src = "resources/images/kometa.png";
    p.classList.add("jqPuzzle");
    p.classList.add("jqp-r4-c4-SN");
    document.body.append(p);
    let btn = document.createElement('button');
    btn.id = 'puzz';
    btn.classList.add("btn2");
    btn.style.display = "none";
    btn.innerText = 'Далее';
    btn.onclick = school;
    sec.append(btn);
}

function school(){
    let p = document.getElementById('p');
    p.remove();
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    // let puzzle = document.getElementById('puzzle');
    // puzzle.remove();
    let img = '<img src="resources/images/school.png">'; //todo
    let btn = '<button class="btn" onclick="quiz_test()"><h3><b>Далее</b></h3></button>';
    sec.innerHTML += img + btn;
    saveLocation(1);
}

function quiz_test() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let div = '<div class="wrapper">\n' +
        '    <main class="main">\n' +
        '        <div class="quiz__head">\n' +
        '            <div class="head__content" id="head"></div>\n' +
        '        </div>\n' +
        '        <div class="quiz__body">\n' +
        '            <div class="buttons">\n' +
        '                <div class="buttons__content" id="buttons">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="quiz__footer">\n' +
        '                <div class="footer__content" id="pages">0 / 10</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </main>\n' +
        '</div>';
    sec.innerHTML += div;
    test(1, 1);
}

function univer() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
  //  saveLocation(2);
    let img = '<img src="resources/images/univer.png">';
    let btn = '<button class="btn" onclick="xo()"><h3><b>Далее</b></h3></button>';
    sec.innerHTML += img + btn;
}

function xo(){
    xo_count++;
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let div = '<div class="krestiki_noliki">\n' +
        '    <p class="result" style="text-align: center">Ваш ход!</p>\n' +
        '    <div class="block cell1"></div>\n' +
        '    <div class="block cell2"></div>\n' +
        '    <div class="block cell3"></div>\n' +
        '    <div class="block cell4"></div>\n' +
        '    <div class="block cell5"></div>\n' +
        '    <div class="block cell6"></div>\n' +
        '    <div class="block cell7"></div>\n' +
        '    <div class="block cell8"></div>\n' +
        '    <div class="block cell9"></div>\n' +
        '</div>\n';
    sec.innerHTML += div;

    let btn3 = document.createElement('button');
    btn3.classList.add('btn3');
    btn3.innerText = 'Заново';
    btn3.id = 'xo';
    document.body.append(btn3);

    btn3.onclick = function (){
        xo_count++;
        sec.innerHTML = div;
        // sec.append(btn3);
        start_xo();
    };
    start_xo();
}

function start_xo() {
    cross_zero();
}

function clear() {
    let btn = document.getElementById('xo');
    btn.remove();
}

function game() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';

    let btn1 =document.createElement('button');
    let btn2 =document.createElement('button');
    let btn3 =document.createElement('button');
    let btn4 = document.createElement('button');
    let btn5 = document.createElement('button');

    btn4.classList.add('button1');
    btn3.classList.add('button1');
    btn2.classList.add('button1');
    btn1.classList.add('button1');
    btn5.classList.add('button1');

    btn1.innerText = 'Повар';    //cookie
    btn2.innerText = 'Строитель';
    btn3.innerText = 'Военный';
    btn4.innerText = 'Садовод';  //dino
    btn5.innerText = 'Достижения';

    btn1.onclick = cooker;
    btn2.onclick = kamenschik;
    btn3.onclick = pilot;
    btn4.onclick = gardener;
    btn5.onclick;

    sec.append(btn1);
    sec.append(btn2);
    sec.append(btn3);
    sec.append(btn4);

}

function cooker() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let btn = document.createElement('button');
    btn.classList.add('button1');
    btn.onclick = cookie;
    btn.innerText = 'Пешенька кликер';
    let btn3 = document.createElement('button');
    btn3.classList.add('button1');
    btn3.onclick = cooker_school;
    btn3.innerText = 'Школа поваров Гордона Рамзи';
    let btn2 = document.createElement('button');
    btn2.classList.add('btn2');
    btn2.innerText = 'Назад';
    btn2.onclick = game;
    sec.append(btn);
    sec.append(btn3);
    sec.append(btn2);

}

function cooker_school() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let div = '<div class="wrapper">\n' +
        '    <main class="main">\n' +
        '        <div class="quiz__head">\n' +
        '            <div class="head__content" id="head"></div>\n' +
        '        </div>\n' +
        '        <div class="quiz__body">\n' +
        '            <div class="buttons">\n' +
        '                <div class="buttons__content" id="buttons">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="quiz__footer">\n' +
        '                <div class="footer__content" id="pages">0 / 10</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </main>\n' +
        '</div>';
    let btn = '<button class="btn2" onclick="cooker()" >Назад</button>';
    sec.innerHTML += div + btn;
    test(2, 1);
}

function cookie() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let game = '<div class="container" align="center" >\n' +
        '    <div class="row align-items-center">\n' +
        '        <div class=" col-10 align-self-center">\n' +
        '            <form action="/" method="post">\n' +
        '            <div id="cookie">\n' +
        '                <h2 id="cookie-name"></h2>\n' +
        '                <div id="cookie-count"></div>\n' +
        '                <img id="cookie-img" src="" alt="cute cookie">\n' +
        '            </div>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
    let btn = '<button class="btn2" onclick="cooker()" >Назад</button>';
    sec.innerHTML += game + btn;
    octopus.init();
}

function gardener() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let btn = document.createElement('button');
    btn.classList.add('button1');
    btn.onclick = dino;
    btn.innerText = 'Джамп';
    let btn3 = document.createElement('button');
    btn3.classList.add('button1');
    btn3.onclick = gallows;
    btn3.innerText = 'Виселица';
    let btn2 = document.createElement('button');
    btn2.classList.add('btn2');
    btn2.innerText = 'Назад';
    btn2.onclick = game;
    sec.append(btn);
    sec.append(btn3);
    sec.append(btn2)
}

function dino() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let game = '<canvas id="game" width="640" height="300"></canvas>';
    let btn = '<button class="btn2" onclick="gardener()" >Назад</button>';
    sec.innerHTML += game + btn;
    dino_game()
}

function pilot() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let btn = document.createElement('button');
    btn.classList.add('button1');
    btn.onclick = battle;
    btn.innerText = 'Морской бой';
    let btn2 = document.createElement('button');
    btn2.classList.add('button1');
    btn2.onclick = air;
    btn2.innerText = 'Летчик';
    let btn3 = document.createElement('button');
    btn3.classList.add('btn2');
    btn3.innerText = 'Назад';
    btn3.onclick = game;
    sec.append(btn);
    sec.append(btn2);
    sec.append(btn3);
}

function kamenschik() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let btn = document.createElement('button');
    btn.classList.add('button1');
    btn.onclick = tetris;
    btn.innerText = 'Тетрис';
    let btn2 = document.createElement('button');
    btn2.classList.add('button1');
    btn2.onclick = number;
    btn2.innerText = 'Шоу интуиция';
    let btn3 = document.createElement('button');
    btn3.classList.add('btn2');
    btn3.innerText = 'Назад';
    btn3.onclick = game;
    sec.append(btn);
    sec.append(btn2);
    sec.append(btn3);
}

function tetris() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let iframe = '<iframe src="tetris.php" height="645px" width="1100px"></iframe>';
    let btn = '<button class="btn2" style="left: 75%" onclick="kamenschik()" >Назад</button>';
    sec.innerHTML += iframe + btn;
}

function number() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let div ='<iframe src="number.php" width="1000px" height="650px"></iframe>';
    let btn = '<button class="btn2" onclick="kamenschik()" >Назад</button>';
    sec.innerHTML += div + btn;
}

function gallows() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let game = '<iframe src="gal.php" width="1000px" height="650px"></iframe>';
    let btn = '<button class="btn2" onclick="gardener()" >Назад</button>';
    sec.innerHTML += game + btn;
}

function air() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let game = '<iframe src="let.php" width="1000px" height="750px"></iframe>';
    let btn = '<button class="btn2" style="left: 85%" onclick="pilot()" >Назад</button>';
    sec.innerHTML += game + btn;
}

function battle() {
    let sec = document.getElementById('section');
    sec.innerHTML = '';
    let game = '<iframe src="batle.php" width="1600px" height="650px"></iframe>';
    let btn = '<button class="btn2" style="top: 80%; left: 80%;" onclick="pilot()" >Назад</button>';
    sec.innerHTML += game + btn;
}

var model = {
    currentCookie: null,
    cookie: [
        {
            clickCount : getCookie(),
            name : 'Cookie',
            imgSrc : 'resources/images/perfectCookie.png',
        },
    ]
};

var octopus = {

    init: function() {
        model.currentCookie = model.cookie[0];

        // tell our views to initialize
        cookieListView.init();
        cookieView.init();
    },

    getCurrentCookie: function() {
        return model.currentCookie;
    },

    getCookies: function() {
        return model.cookie;
    },

    setCurrentCookie: function(cookie) {
        model.currentCookie = cookie;
    },

    incrementCounter: function() {
        model.currentCookie.clickCount++;
        cookieView.render();
    }
};

var cookieView = {

    init: function() {

        this.cookieElem = document.getElementById('cookie');
        this.cookieNameElem = document.getElementById('cookie-name');
        this.cookieImageElem = document.getElementById('cookie-img');
        this.countElem = document.getElementById('cookie-count');

        this.cookieImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCookie = octopus.getCurrentCookie();
        this.countElem.textContent = currentCookie.clickCount;
        this.cookieNameElem.textContent = currentCookie.name;
        this.cookieImageElem.src = currentCookie.imgSrc;
        if(currentCookie.clickCount === 1){
            addAchiev(4);
        }
        if(currentCookie.clickCount === 10){
            addAchiev(5);
        }
        if(currentCookie.clickCount === 50){
            addAchiev(6);
        }
        if(currentCookie.clickCount === 100){
            addAchiev(7);
        }
        if(currentCookie.clickCount === 1000){
            addAchiev(8);
        }
        saveCookie(currentCookie.clickCount)//todo
    }
};

var cookieListView = {

    init: function() {
        this.render();
    },

    render: function() {
        var cookie, elem, i;

        var cookies = octopus.getCookies();

        for (i = 0; i < cookies.length; i++) {

            cookie = cookies[i];

            elem = document.createElement('li');
            elem.textContent = cookie.name;

            elem.addEventListener('click', (function(cookieCopy) {
                return function() {
                    octopus.setCurrentCookie(cookieCopy);
                    cookieView.render();
                };
            })(cookie));

        }
    }
};

function cross_zero(){

    var znak_user = 'X';
    var znak_comp = 'O';

    var rand_num = Math.round((Math.random() * (9 - 1) + 1));

    if( rand_num > 3 ){
        var znak_comp = 'X';
        var znak_user = 'O';
        $('.cell'+rand_num).text(znak_comp);
    }

    var exit_flag = false;
    var win_user_array = ['123','456','789','147','258','369','159','357'];

    function check_3_user(znak){
        for (var i = 0; i < 8; i++) {

            var first = 'cell' + win_user_array[i].substr(0,1);
            var second = 'cell' + win_user_array[i].substr(1,1);
            var third = 'cell' + win_user_array[i].substr(2,1);

            if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == znak ){
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('.result').text('Вы выиграли!');
                $('.krestiki_noliki .block').unbind('click');
                exit_flag = true;
                let btn = document.createElement('button');
                btn.classList.add('btn4');
                btn.innerText = 'Далее';
                let sec = document.getElementById('section');
                sec.append(btn);
                btn.onclick = game;
                clear();
                if (xo_count < 6) {
                    addAchiev(3);
                }
                saveLocation(3);

            }
        }
    }

    //Определяем возможность победы компьютера
    function check_2_comp(znak){
        for (var i = 0; i < 8; i++) {

            var first = 'cell' + win_user_array[i].substr(0,1);
            var second = 'cell' + win_user_array[i].substr(1,1);
            var third = 'cell' + win_user_array[i].substr(2,1);

            if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' && exit_flag == false ){
                $('.'+third).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.krestiki_noliki .block').unbind('click');
                exit_flag = true;
            }

            if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak && exit_flag == false ){
                $('.'+second).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.krestiki_noliki .block').unbind('click');
                exit_flag = true;
            }

            if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak && exit_flag == false ){
                $('.'+first).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.krestiki_noliki .block').unbind('click');
                exit_flag = true;
            }
        }
    }

    //Определяем ход компьютера
    function check_2_user(znak){

        for (var i = 0; i < 8; i++) {

            var first = 'cell' + win_user_array[i].substr(0,1);
            var second = 'cell' + win_user_array[i].substr(1,1);
            var third = 'cell' + win_user_array[i].substr(2,1);

            if( exit_flag == false ){
                if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' ){
                    $('.'+third).text(znak_comp);
                    exit_flag = true;
                }
            }

            if( exit_flag == false ){
                if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak ){
                    $('.'+second).text(znak_comp);
                    exit_flag = true;
                }
            }

            if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak ){
                $('.'+first).text(znak_comp);
                exit_flag = true;
            }

            if(exit_flag) break;
        }
    }

    $('.krestiki_noliki .block').click(function(){

        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(znak_user);
            check_3_user(znak_user);
            check_2_comp(znak_comp);
            check_2_user(znak_user);

            if( exit_flag == false ){
                for (var i = 1; i < 10; i++) {
                    if( $('.cell'+i).text() == '' ){
                        $('.cell'+i).text(znak_comp);
                        break;
                    }
                }
            }else exit_flag = false;
        }
    })
}

function test(i, count) {
    const headElem = document.getElementById("head");
    const buttonsElem = document.getElementById("buttons");
    const pagesElem = document.getElementById("pages");

    class Quiz {
        constructor(type, questions, results) {
            this.type = type;
            this.questions = questions;
            this.results = results;
            this.score = 0;
            this.result = 0;
            this.current = 0;
        }

        Click(index) {
            let value = this.questions[this.current].Click(index);
            this.score += value;
            let correct = -1;

            if(value >= 1) {
                correct = index;
            }else {
                //Иначе ищем, какой ответ может быть правильным
                for(let i = 0; i < this.questions[this.current].answers.length; i++) {
                    if(this.questions[this.current].answers[i].value >= 1) {
                        correct = i;
                        break;
                    }
                }
            }
            this.Next();
            return correct;
        }

        Next() {
            this.current++;
            if(this.current >= this.questions.length) {
                this.End();
            }
        }

        End() {
            for(let i = 0; i < this.results.length; i++) {
                if(this.results[i].Check(this.score)) {
                    this.result = i;
                }
            }
        }
    }

    class Question {
        constructor(text, answers) {
            this.text = text;
            this.answers = answers;
        }
        Click(index) {
            return this.answers[index].value;
        }
    }

    class Answer {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }
    }

    class Result {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }

        Check(value) {
            return this.value <= value;
        }
    }

    const results = [
        new Result("Придется остаться в школе еще на 1 год((", 0),
        new Result("Вам не хватило совсем чуть-чуть для поступления в университет, придется на год сходить в армию))", 7),
        new Result("Вы ответили почти на все вопросы и поступили в университет, к сожалению не на бюджет(", 9),
        new Result("Вы молодец, поэтому поступили в университет на бюджет", 10)];
    const questions = [
        new Question("Закон Ома: ", [
            new Answer("I=R/U", 0),
            new Answer("I=P/U", 0),
            new Answer("I=U/R", 1),
            new Answer("U=I*R", 0)]),

        new Question("Какая самая большая планета в солнечной системе", [
            new Answer("Юпитер", 1),
            new Answer("Сатурн", 0),
            new Answer("Уран", 0),
            new Answer("Нептун", 0)]),

        new Question("Крещение Руси", [
            new Answer("1861", 0),
            new Answer("988", 1),
            new Answer("899", 0),
            new Answer("1005", 0)]),

        new Question("В каком слове допущена ошибка в постановке ударения", [
            new Answer("ЖалюзИ", 0),
            new Answer("КрасИвее", 0),
            new Answer("КрАла", 0),
            new Answer("ТортЫ", 1)]),

        new Question("Назовите картину Ван Гога", [
            new Answer("Мона Лиза", 0),
            new Answer("Звездная ночь", 1),
            new Answer("Ирисы в поле", 1),
            new Answer("Пруд с кувшинками", 0)]),

        new Question("Ответ на главный вопрос жизни, вселенной и всего такого", [
            new Answer("39", 0),
            new Answer("53", 0),
            new Answer("42", 1),
            new Answer("28", 0)]),

        new Question("Самая длинная река на планете Земля на данный момент", [
            new Answer("Нил", 0),
            new Answer("Хуанхе", 0),
            new Answer("Янцзы", 0),
            new Answer("Амазонка", 1)]),

        new Question("Сколько спутников у Земли", [
            new Answer("0", 0),
            new Answer("1", 1),
            new Answer("2", 0),
            new Answer("3", 0)]),

        new Question("Корень из 961", [
            new Answer("13", 0),
            new Answer("42", 0),
            new Answer("27", 0),
            new Answer("31", 1)]),

        new Question("Как называется золото в таблице Менделеева", [
            new Answer("Argentum", 0),
            new Answer("Aurum", 1),
            new Answer("Actinium", 0),
            new Answer("Аstatium", 0)])];

    const results_cook = [
        new Result("Гордона Рамзи на вас не хватет!!!", 0),
        new Result("Для получения новых достижений, вам нужно стараться больше ", 6),
        new Result("Вы ответили верно почти на все вопросы, продолжайте в том же духе", 8),
        new Result("Поздравляю вы все знаете о профессии повара", 10)];

    const questions_cook = [
        new Question("Что необходимо для блинов в классическом рецепте?", [
            new Answer("банан", 0),
            new Answer("яйца", 1),
            new Answer("йогурт", 0),
            new Answer("вода", 0)]),

        new Question("Что нужно для тирамису?", [
            new Answer("водка", 0),
            new Answer("печенье савоярди", 1),
            new Answer("клубника", 0),
            new Answer("чай", 0)]),

        new Question("Что нужно для приготовления зефира", [
            new Answer("огонь", 0),
            new Answer("манная каша", 0),
            new Answer("молоко", 0),
            new Answer("яблочное пюре", 1)]),

        new Question("А что самое главное в пасте?", [
            new Answer("макароны", 0),
            new Answer("мясо", 0),
            new Answer("соус", 1),
            new Answer("морковь", 0)]),

        new Question("Что такое сюрстремминг", [
            new Answer("вяленая горбуша", 0),
            new Answer("квашеная селедка", 1),
            new Answer("тухлая скумбрия", 0),
            new Answer("жареная акула", 0)]),

        new Question("Без чего плов - не плов", [
            new Answer("перец", 0),
            new Answer("барбарис", 0),
            new Answer("зира", 1),
            new Answer("мясо", 0)]),

        new Question("Из чего делают оригинальный соус цезарь", [
            new Answer("анчоусы", 1),
            new Answer("сыр", 0),
            new Answer("кетчунез", 0),
            new Answer("рисовый уксус", 0)]),

        new Question("Какие специи нужны для Глинтвейна", [
            new Answer("тимьян", 0),
            new Answer("корица", 1),
            new Answer("розмарин", 0),
            new Answer("бадьян", 1)]),

        new Question("Из чего делают безе", [
            new Answer("желток и белок", 0),
            new Answer("желток", 0),
            new Answer("белок", 1),
            new Answer("вода", 0)]),

        new Question("Какое мясо используется для приготовления котлет Пожарских", [
            new Answer("свининка", 0),
            new Answer("рыба", 0),
            new Answer("говядина", 0),
            new Answer("курица", 1)])];
    let q;

    if(i === 1){
        q = new Quiz(1, questions, results);

    } else if(i === 2){
        q = new Quiz(1, questions_cook, results_cook);
    }

    const quiz = q;
    Update();

    function Update() {
        //Проверяем, есть ли ещё вопросы
        if(quiz.current < quiz.questions.length) {
            headElem.innerHTML = quiz.questions[quiz.current].text;
            buttonsElem.innerHTML = "";
            //Создаём кнопки для новых вариантов ответов
            for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
                let btn = document.createElement("button");
                btn.className = "button";
                btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
                btn.setAttribute("index", i);
                buttonsElem.appendChild(btn);
            }
            pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
            Init();
        } else {
            buttonsElem.innerHTML = "";
            headElem.innerHTML = quiz.results[quiz.result].text;
            pagesElem.innerHTML = "Очки: " + quiz.score;

            if (quiz.score < (quiz.questions.length-1)){
                quiz.score = 0;
                quiz.result = 0;
                quiz.current = 0;

                let btn = document.createElement("button");
                btn.className = "button";
                btn.innerHTML = 'Заново';
                buttonsElem.appendChild(btn);
                btn.onclick = function(){
                    count++;
                    buttonsElem.innerHTML = "";
                    Update();
                };
            } else {
                if (i === 1){
                    let btn = document.createElement("button");
                    btn.className = "btn2";
                    btn.innerHTML = 'Далее';
                    let sec = document.getElementById('section');
                    sec.append(btn);
                    btn.onclick = univer;
                    if(count === 1){
                        addAchiev(2);
                        //   alert("Получено достижение: Лучший Выпускник!")
                    }
                    saveLocation(2);
                } else if (i === 2){
                    if(count ===  1){
                        addAchiev(9);
                        //    alert("Получено достижение: Лучше учителя!")
                    }
                }
            }
        }
    }

    function Init() {
        let btns = document.getElementsByClassName("button");

        for(let i = 0; i < btns.length; i++) {
            //Прикрепляем событие для каждой отдельной кнопки
            btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
        }
    }

    function Click(index)
    {
        //Получаем номер правильного ответа
        let correct = quiz.Click(index);

        //Находим все кнопки
        let btns = document.getElementsByClassName("button");

        //Делаем кнопки серыми
        for(let i = 0; i < btns.length; i++) {
            btns[i].className = "button button_passive";
        }

        //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
        if(quiz.type == 1) {
            if(correct >= 0) {
                btns[correct].className = "button button_correct";
            }
            if(index != correct) {
                btns[index].className = "button button_wrong";
            }
        } else {
            //Иначе просто подсвечиваем зелёным ответ пользователя
            btns[index].className = "button button_correct";
        }
        setTimeout(Update, 1000);
    }
}

function dino_game() {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');

    let score;
    let scoreText;
    let highscore;
    let highscoreText;
    let player;
    let gravity;
    let obstacles = [];
    let gameSpeed;
    let keys = {};

    document.addEventListener('keydown', function (evt) {
        keys[evt.code] = true;
    });
    document.addEventListener('keyup', function (evt) {
        keys[evt.code] = false;
    });

    class Player {
        constructor (x, y, w, h, c) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;

            this.dy = 0;
            this.jumpForce = 15;
            this.originalHeight = h;
            this.grounded = false;
            this.jumpTimer = 0;
        }

        Animate () {
            // Jump
            if (keys['Space'] || keys['KeyW']) {
                this.Jump();
            } else {
                this.jumpTimer = 0;
            }

            if (keys['ShiftLeft'] || keys['KeyS']) {
                this.h = this.originalHeight / 2;
            } else {
                this.h = this.originalHeight;
            }

            this.y += this.dy;

            if (this.y + this.h < canvas.height) {
                this.dy += gravity;
                this.grounded = false;
            } else {
                this.dy = 0;
                this.grounded = true;
                this.y = canvas.height - this.h;
            }

            this.Draw();
        }

        Jump () {
            if (this.grounded && this.jumpTimer == 0) {
                this.jumpTimer = 1;
                this.dy = -this.jumpForce;
            } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
                this.jumpTimer++;
                this.dy = -this.jumpForce - (this.jumpTimer / 50);
            }
        }

        Draw () {
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.closePath();
        }
    }

    class Obstacle {
        constructor (x, y, w, h, c) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;

            this.dx = -gameSpeed;
        }

        Update () {
            this.x += this.dx;
            this.Draw();
            this.dx = -gameSpeed;
        }

        Draw () {
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.closePath();
        }
    }

    class Text {
        constructor (t, x, y, a, c, s) {
            this.t = t;
            this.x = x;
            this.y = y;
            this.a = a;
            this.c = c;
            this.s = s;
        }

        Draw () {
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.font = this.s + "px sans-serif";
            ctx.textAlign = this.a;
            ctx.fillText(this.t, this.x, this.y);
            ctx.closePath();
        }
    }

// Game Functions
    function SpawnObstacle () {
        let size = RandomIntInRange(20, 70);
        let type = RandomIntInRange(0, 1);
        let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4');

        if (type == 1) {
            obstacle.y -= player.originalHeight - 10;
        }
        obstacles.push(obstacle);
    }


    function RandomIntInRange (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function Start () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.font = "20px sans-serif";

        gameSpeed = 3;
        gravity = 1;

        score = 0;
        highscore = 0;
        if (localStorage.getItem('highscore')) {
            highscore = localStorage.getItem('highscore');
        }

        player = new Player(25, 0, 50, 50, '#FF5858');

        scoreText = new Text("Скорость: " + score, 25, 25, "left", "#212121", "20");
        highscoreText = new Text("Лучшая скорость: " + highscore, canvas.width - 25, 25, "right", "#212121", "20");
        // if (highscore > 100){addAchiev(27)}
        // if (highscore > 1000){addAchiev(28)}
        // if (highscore > 5000){addAchiev(29)}
        // if (highscore > 10000){addAchiev(30)}
        requestAnimationFrame(Update);
    }

    let initialSpawnTimer = 200;
    let spawnTimer = initialSpawnTimer;
    function Update () {
        requestAnimationFrame(Update);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        spawnTimer--;
        if (spawnTimer <= 0) {
            SpawnObstacle();
            console.log(obstacles);
            spawnTimer = initialSpawnTimer - gameSpeed * 8;

            if (spawnTimer < 60) {
                spawnTimer = 60;
            }
        }

        for (let i = 0; i < obstacles.length; i++) {
            let o = obstacles[i];

            if (o.x + o.w < 0) {
                obstacles.splice(i, 1);
            }

            if (
                player.x < o.x + o.w &&
                player.x + player.w > o.x &&
                player.y < o.y + o.h &&
                player.y + player.h > o.y
            ) {
                obstacles = [];
                score = 0;
                spawnTimer = initialSpawnTimer;
                gameSpeed = 3;
                window.localStorage.setItem('highscore', highscore);
            }

            o.Update();
        }

        player.Animate();

        score++;
        scoreText.t = "Скорость: " + score;
        scoreText.Draw();

        if (score > highscore) {
            highscore = score;
            highscoreText.t = "Лучшая скорость: " + highscore;
            if (highscore > 100){addAchiev(27)}
            if (highscore > 1000){addAchiev(28)}
            if (highscore > 5000){addAchiev(29)}
            if (highscore > 10000){addAchiev(30)}
        }

        highscoreText.Draw();

        gameSpeed += 0.003;
    }

    Start();
}
