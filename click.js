const number = document.querySelector('h1');
const plusButton = document.querySelector('button');

let count = 0;
let count2 = 0;

plusButton.addEventListener('click', () => {
     if (count2 == 3){
          alert( 画面に表示させたい値 );
     }else {}
      if (count > 6) {
           count = 0;
           count2 ++;
      } else { 
           count ++;
      }
     if (count2 == 0) {
          if (count == 1) {
               number.innerHTML = "ピポ";
          } else { 
               number.innerHTML = count + "ピポ";
          }
     } else { 
          if (count2 == 1) {
               if (count == 0) {
                    number.innerHTML = "ウェカ";
               } else { 
                    number.innerHTML = "ウェカ" + count + "ピポ";
               }
          } else { 
               if (count == 0) {
                    number.innerHTML = count2 + "ウェカピポ";
               } else { 
                    number.innerHTML = count2 + "ウェカ" + count + "ピポ";
               }
          }
     }
});
