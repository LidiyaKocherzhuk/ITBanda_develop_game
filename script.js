/*
To do:
-Обрати качку та помістити її у змінну
-Відтворити рух качки
-Відтворити махи крилами
-Зупинити рух у кінці екрану
*/

//Обрали потрібну качку за допомогою "querySelector".
let duck = document.querySelector('.duck');
//Створили індекс для зміни зображень.
let i = 0;

//Створили функцію "setInterval", яка рухає качку що 2 секунди
let duckFlyingLeft = setInterval(function () {
    //Пересуваємо качку ліворуч на 25px
    duck.style.left = duck.offsetLeft - 25 + 'px';

    //Перевіряємо індекс зображення
    if (i > 2) {
        i = 0;
    }

    //Змінюємо зображення збільшуючи його індекс
    duck.style.backgroundImage = `url(assets/images/duck/black/left/${i++}.png)`;

    //Перевіряємо чи качка досягнула краю ігрового поля, якщо так зупиняємо політ
    if (duck.offsetLeft <= 0) {
        clearInterval(duckFlyingLeft)
    }
}, 200);

