/**
 * Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
 *
 */

// function min(a,b) {
//     return a<b?a:b
// }

// console.log(min(4, 5));

// =========================================================

/**
 * Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
Məsələn, calc(4, 6, '+');  //  10 qaytaracaq
 */

// function calc(numOne, numTwo, operator) {
//     // switch (operator) {
//     //     case '+': return numOne + numTwo
//     //     case '-': return numOne - numTwo
//     //     case '*': return numOne * numTwo
//     //     case '/': return numOne / numTwo

//     // }
//     if (operator === "+")  return numOne + numTwo;
//     if (operator === "-")  return numOne - numTwo;
//     if (operator === "*")  return numOne * numTwo;
//     if (operator === "/")  return numOne / numTwo;

// }

// console.log(calc(4, 6, "+"));

/**
 * Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabərliyin yoxlayan isLucky funksiyasını yazın.
Məsələn, isLucky(234801);  // true qaytaracaq
 */


function isLucky(number) {
    number = String(number);
    return (
      +number[0] + +number[1] + +number[2] ===
      +number[3] + +number[4] + +number[5]
    );
  
}

isLucky(234801);