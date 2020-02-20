module.exports = function toReadable (number) {
    let strNumber = number+'';
    let retStr = '';
    let order = strNumber.length;
    let digits = ['zero','one','two','three','four','five','six','seven','eight','nine']
  
    for (let i = 0; i< strNumber.length; i++) {
      if (strNumber[i] === '0') {
          order--;
          if (strNumber.length === 1) return 'zero'
        }
      else if (order === 1) {
          retStr += digits[strNumber[i]];
      } else if (order === 2) {
          if (strNumber[i] === '1') {
              if (strNumber[i+1] === '0') retStr += 'ten';
              else if (strNumber[i+1] === '1') retStr += 'eleven';
              else if (strNumber[i+1] === '2') retStr += 'twelve';
              else if (strNumber[i+1] === '3') retStr += 'thirteen';
              else if (strNumber[i+1] === '4') retStr += 'fourteen';
              else if (strNumber[i+1] === '5') retStr += 'fifteen';
              else if (strNumber[i+1] === '6') retStr += 'sixteen';
              else if (strNumber[i+1] === '7') retStr += 'seventeen';
              else if (strNumber[i+1] === '8') retStr += 'eighteen';
              else if (strNumber[i+1] === '9') retStr += 'nineteen';
              i++;
              order -= 2;
          } else if (strNumber[i] === '2') {
              retStr += 'twenty ';
              order--;
          } else if (strNumber[i] === '3') {
              retStr += 'thirty ';
              order--;
          } else if (strNumber[i] === '4') {
              retStr += 'forty ';
              order--;
          } else if (strNumber[i] === '5') {
              retStr += 'fifty ';
              order--;
          } else if (strNumber[i] === '6') {
              retStr += 'sixty ';
              order--;
          } else if (strNumber[i] === '7') {
              retStr += 'seventy ';
              order--;
          } else if (strNumber[i] === '8') {
              retStr += 'eighty ';
              order--;
          } else if (strNumber[i] === '9') {
              retStr += 'ninety ';
              order--;
          }
      } else if (order === 3) {
          retStr += digits[strNumber[i]] + ' hundred ';
          order--;
      }  
    }
  
    if (retStr[retStr.length - 1] === ' ') return retStr.slice(0, retStr.length - 1);
    else return retStr;
  }



function toReadable (number) {
    let strNumber = number+'';
    let retStr = '';
    let order = strNumber.length;
    let digits = ['zero','one','two','three','four','five','six','seven','eight','nine']
  
    for (let i = 0; i< strNumber.length; i++) {
      if (strNumber[i] === '0') order--;
      else if (order === 1) {
          retStr += digits[strNumber[i]];
      } else if (order === 2) {
          if (strNumber[i] === '1') {
              if (strNumber[i+1] === '0') retStr += 'ten';
              else if (strNumber[i+1] === '1') retStr += 'eleven';
              else if (strNumber[i+1] === '2') retStr += 'twelve';
              else if (strNumber[i+1] === '3') retStr += 'thirteen';
              else if (strNumber[i+1] === '4') retStr += 'fourteen';
              else if (strNumber[i+1] === '5') retStr += 'fifteen';
              else if (strNumber[i+1] === '6') retStr += 'sixteen';
              else if (strNumber[i+1] === '7') retStr += 'seventeen';
              else if (strNumber[i+1] === '8') retStr += 'eighteen';
              else if (strNumber[i+1] === '9') retStr += 'nineteen';
              i++;
              order -= 2;
          } else if (strNumber[i] === '2') {
              retStr += 'twenty ';
              order--;
          } else if (strNumber[i] === '3') {
              retStr += 'thirty ';
              order--;
          } else if (strNumber[i] === '4') {
              retStr += 'fourty ';
              order--;
          } else if (strNumber[i] === '5') {
              retStr += 'fifty ';
              order--;
          } else if (strNumber[i] === '6') {
              retStr += 'sixty ';
              order--;
          } else if (strNumber[i] === '7') {
              retStr += 'seventy ';
              order--;
          } else if (strNumber[i] === '8') {
              retStr += 'eighty ';
              order--;
          } else if (strNumber[i] === '9') {
              retStr += 'ninety ';
              order--;
          }
      } else if (order === 3) {
          retStr += digits[strNumber[i]] + ' hundred ';
          order--;
      }  
    }
  
    if (retStr[retStr.length - 1] === ' ') return retStr.slice(1, retStr.length - 1);
    else return retStr;
  }

  
  console.log(toReadable(999));
