/*************************/
/* クリックカウンターのコード */
/************************/

const number = document.querySelector('h1');
const plusButton = document.querySelector('#increment');
const resetButton = document.querySelector('#reset');

let count = 0;

plusButton.addEventListener('click', () => {
    count ++; 
    number.innerHTML = count;
});

resetButton.addEventListener('click', () => {
    count = 0; 
    number.innerHTML = count;
});
