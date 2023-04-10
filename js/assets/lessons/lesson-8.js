/**
 * logGreeting() adında funksiya tərtib edin hansıki konsola «[Adınız] is a JS developer» mesajı çıxarsın.
 */

// function logGreeting() {
//     console.log('Javid is a JS developer');
// }

// logGreeting();

// *************************************************

/**İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
Funksiyanı 3 müxtəlif ad üçün çağırın. */

// function isActiveUser(name) {
//     console.log(`${name} is active now`);
// }

// isActiveUser('Javid');
// console.log('*********');

// isActiveUser("Nemet");
// console.log("*********");

// isActiveUser("Zulfugar");
// console.log("*********");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
Üç ədədi parametr kimi qəbul edən funksiya yazın. Funksiya onlardan ən böyüyünü konsola çıxarmalıdır. */


// function maxNum(a,b,c) {
//     console.log(Math.max(a,b,c))
// }

// maxNum(5, 8, 9);
// maxNum(10, 8, 9);
// maxNum(5, 20, 3);


// ((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))

/**
 * Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.

Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var. Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.
 */

// function sumOfrubl(rubl, dollar) {
//     let dollarToRublConst = 75;

//     console.log(rubl + dollar * dollarToRublConst);
// }

// sumOfrubl(1200,20);



//****************************************** */

/**
 * Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.

Funksiya yaradın. Onda 1-dən 99-a qədər ədəd daxil edilməsini xahiş edin.
 */

function singleNumber(number) {
  switch (number) {
    case 1:
      return "Bir";
    case 2:
      return "Iki";
    case 3:
      return "Uc";
    case 4:
      return "Dord";
    case 5:
      return "Bes";
    case 6:
      return "Alti";
    case 7:
      return "Yeddi";
    case 8:
      return "Sekkiz";
    case 9:
      return "Doqquz";
  }
}
function pairNumber(number) {
  switch (number) {
    case 1:
      return "On";
    case 2:
      return "Iyirmi";
    case 3:
      return "Otuz";
    case 4:
      return "Qirx";
    case 5:
      return "Elli";
    case 6:
      return "Altmish";
    case 7:
      return "Yetmis";
    case 8:
      return "Seksen";
    case 9:
      return "Doxsan";
  }
}

function numberToText() {
  let num = prompt("Iki reqemli eded daxil et");
  let first = +num[0];
  let second = +num[1];
  if (num.length > 1) {
    console.log(`${pairNumber(first)} ${singleNumber(second)}  `);
  } else {
    console.log(`${singleNumber(+num)}`);
  }
}

numberToText();
