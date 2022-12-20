let duck = document.querySelector('.duck');
let i = 0;

document.onclick = function () {
    duck.style.left = duck.offsetLeft - 10 + 'px';

    if (i > 2) {
        i = 0;
    }
    duck.style.backgroundImage = `url(assets/images/duck/black/left/${i++}.png)`;

}
