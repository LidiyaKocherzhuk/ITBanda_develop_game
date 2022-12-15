/*При кліку на кнопку 1 збільшувати лічильник на 1*/

let count = document.getElementById('count');

function btnClick() {
    count.innerText++;
    console.log(count.innerText);
}

/*При кліку на кнопку 2 змітини колір тексту параграфа на червоний;*/
let btn2 = document.getElementById('btn2');

btn2.onclick = function () {
    let p2 = document.getElementById('p2');
    p2.style.color = 'red';
};

/*При кліку на кнопку 3 відтворити аудіо "assets/sounds/gunSound.mp3"*/
let btn3 = document.getElementById('btn3');

btn3.onclick = function () {
    let audioGun = document.getElementById('audioGun');
    audioGun.play()
};
