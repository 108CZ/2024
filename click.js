const number = document.querySelector('h1');
const plusButton = document.querySelector('button');

let count = 0;
let count2 = 0;

plusButton.addEventListener('click', () => {
     if (count2 == 5){
          alert("当然！「リセット」だッ！祖先から受け継ぐエラー対策！それが流儀ィィッ！！");
         count = 0;
         count2 = 0;
     }else {}
      if (count > 5) {
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
                    if (count == 1) {
                         number.innerHTML = "ウェカピポ";
                    } else { 
                         number.innerHTML = "ウェカ" + count + "ピポ";
                    }
               }
          } else { 
               if (count == 0) {
                    number.innerHTML = count2 + "ウェカ";
               } else { 
                    if (count == 1) {
                         number.innerHTML = count2 + "ウェカピポ";
                    } else { 
                         number.innerHTML = count2 + "ウェカ" + count + "ピポ";
                    }
               }
          }
     }
});
