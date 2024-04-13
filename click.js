const number = document.querySelector('h1');
const plusButton = document.querySelector('button');

let count = 0;
let count2 = 0;

plusButton.addEventListener('click', () => {
     
      if (count > 5) {
    count = 0;
    count2 ++;
  } else { 
          count ++;
      }
        number.innerHTML = count2 + "ウェカ" + count + "ピポ";
   // number.innerHTML = count;
});
