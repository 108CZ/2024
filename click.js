const number = document.querySelector('h1');
const plusButton = document.querySelector('button');

let count = 0;

plusButton.addEventListener('click', () => {
     
      if (count > 5) {
    count = 0;
  } else { 
          count ++;
      }
   number.innerHTML = count;
});
