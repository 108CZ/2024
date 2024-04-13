/************************************/
/* ボタンのクリックで数を1ずつ増やすコード */
/***********************************/

const number = document.querySelector('h1');
const plusButton = document.querySelector('button');

let count = 0;

plusButton.addEventListener('click', () => {
    count ++; 
    number.innerHTML = count;
});
