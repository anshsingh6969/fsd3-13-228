//create another function that takes a number and that show in word 
// with the help of two word function 
const ToWord = (digit) => {
   switch (digit) {
      case 0:
         return "Zero";
         case 1:
         return "One";
         case 2:
         return "Two";
         case 3:
         return "Three";
         case 4:
         return "Four";
         case 5:
         return "Five";
         case 6:
         return "Six";
         case 7:
         return "Seven";
         case 8:
         return "Eight";
         case 9:
         return "Nine";
        default:
            return "Invalid digit";
    }
};
// const rollnum = "2503201000243";
// const digit = rollnum.split("");

// digit.forEach((d) => {
//     console.log(ToWord(Number(d)));
// });
const rollnum = "2503201000243";
const digit = String(rollnum).split("");
console.log(digit);
let inWord = "";
digit.forEach((d) => {
    inWord += " "+ ToWord(Number(d)) + " ";
});
console.log(inWord);
function numberToWord(n)  {
const numberToWord = n => 
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][n]|| 'invalid';  
console.log(numberToWord(n)); 
}
numberToWord(5);