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

// function singleNumber(number) {
//   switch (number) {
//     case 1:
//       return "Bir";
//     case 2:
//       return "Iki";
//     case 3:
//       return "Uc";
//     case 4:
//       return "Dord";
//     case 5:
//       return "Bes";
//     case 6:
//       return "Alti";
//     case 7:
//       return "Yeddi";
//     case 8:
//       return "Sekkiz";
//     case 9:
//       return "Doqquz";
//   }
// }
// function pairNumber(number) {
//   switch (number) {
//     case 1:
//       return "On";
//     case 2:
//       return "Iyirmi";
//     case 3:
//       return "Otuz";
//     case 4:
//       return "Qirx";
//     case 5:
//       return "Elli";
//     case 6:
//       return "Altmish";
//     case 7:
//       return "Yetmis";
//     case 8:
//       return "Seksen";
//     case 9:
//       return "Doxsan";
//   }
// }

// function numberToText() {
//   let num = prompt("Iki reqemli eded daxil et");
//   let first = +num[0];
//   let second = +num[1];
//   if (num.length > 1) {
//     console.log(`${pairNumber(first)} ${singleNumber(second)}  `);
//   } else {
//     console.log(`${singleNumber(+num)}`);
//   }
// }

// numberToText();

/**
 * 
 * «Kim milyonçu olmaq istəyir» oyununu tərtib edin.
İstifadəçiyə hər hansı bir mövzuda 4 cavabdan birini seçməli üç sual verin.
Bütün sualların cavabı düzgündürsə, "Siz qalib gəldiniz", suala səhv cavab olduqda - "Siz məğlub oldunuz" xəbərdarlığı göstərin.


Sual verən və cavabı yoxlayan funksiya yazın.
Funksiya sualı, cavab variantlarını parametr kimi qəbul edir, mesaj generasiya edir və oyunçunun düzgün cavabı seçib-seçmədiyini nümayiş etdirən boolean dəyəri qaytarır.


Suallar verin və cavabın düzgün olub olmadığını yoxlayın.
Yazılan funksiyadan istifadə edərək suallar tərtib edin və verin.


Sintaktik səhvlərin varlığını və proqramın düzgünlüyünü yoxlayın.

Sualların hər birində istifadəçi “50/50” seçim etdikdə eyni pəncərə göstərilir, hansıki orada 4 əvəzinə cəmi 2 cavab olur.
İkinci dəfə "50/50" daxil etməyə çalışıldığı zaman "Siz artıq köməkdən istifadə etmisiniz" sözləri ilə xəbərdarlıq görünür.

İkinci və üçüncü bəndlərin əvvəlində “Doğru! Uduşlarınız: X ", burada X ikinci nöqtə üçün 100 və üçüncü üçün 500-dür.

1-3 nöqtələrində  olan pəncərələrdən hər hansı birini bağlayan zaman, mesaj göstərilir: "3 sualdan X sualına düzgün cavab verdiniz və uduşunuz Y təşkil etdi", burada X birinci nöqtədə 0, ikincidə 1 və üçüncüdə 2 alacaq, bir də birinci bölmə üçün Y - 0, ikinci üçün 100 və üçüncü üçün isə 500 olacaqdır.
 */

// let bonus = 0;
// let next = false;
// let help = true;
// function questionAndCheckOne() {
//   let answer = prompt(
//     "Azerbaycanin Paytaxti haradir? A) Baki B) Lenkaran C) Sumqayit D)Ganja E) 50/50 komek"
//   );
//   if (answer === "A") {
//     bonus += 100;
//     next = confirm(
//       `Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil, edir davam etmek ucun tesdiqle`
//     );
//   } else if (answer === "E" && help) {
//     answer = prompt("Azerbaycanin Paytaxti haradir? A) Baki  D)Ganja ");
//     if (answer === "A") {
//       help = false;
//       bonus += 100;
//       next = confirm(
//         `Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil, edir davam etmek ucun tesdiqle`
//       );
//     } else {
//       alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//     }
//   } else if (answer === "E" && !help) {
//     alert("Siz artiq yardimdan istifade emisiz");
//     questionAndCheckOne();
//   } else {
//     alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//   }
//   return true;
// }
// function questionAndCheckTwo() {
//   let answer = prompt(
//     "Suyun Formulu hansidi? A) CO2 B) H2O C) NaCl D)CH3COOH E) 50/50 komek"
//   );
//   if (answer === "B") {
//     bonus += 100;
//     next = confirm(
//       `Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil, edir davam etmek ucun tesdiqle`
//     );
//   } else if (answer === "E" && help) {
//     answer = prompt(
//       "Suyun Formulu hansidi? A) CO2 B) H2O "
//     );
//     if (answer === "B") {
//       bonus += 100;
//       help = false;
//       next = confirm(
//         `Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil, edir davam etmek ucun tesdiqle`
//       );
//     } else {
//       alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//     }
//   } else if (answer === "E" && !help) {
//     alert("Siz artiq yardimdan istifade emisiz");
//     questionAndCheckTwo();
//   } else {
//     alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//   }
//   return true;
// }


// function questionAndCheckThree() {
//   let answer = prompt(
//     "BU Il KIMIN ILIDIR? A) HEYDER ALIYEV B) Conny DEPP C) Sumqayit D)BRUSE Uilles E) 50/50 komek"
//   );
//   if (answer === "A") {
//     bonus += 500;
//     alert(
//       `Oyun Bitdi Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil,`
//     );
//   } else if (answer === "E" && help) {
//     answer = prompt(
//       "BU Il KIMIN ILIDIR? A) HEYDER ALIYEV B) Conny DEPP"
//     );
//     if (answer === "A") {
//       bonus += 500;
//       help = false;
//       alert(
//         `Oyun bitdi Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil,`
//       );
//     } else {
//       alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//     }
//   } else if (answer === "E" && !help) {
//     alert("Siz artiq yardimdan istifade etmisiz");
//     questionAndCheckThree();
//   } else {
//     alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
//   }
//   return true;
// }


// // function questionAndCheckThree() {
// //   let answer = prompt(
// //     "Azerbaycanin Paytaxti haradir? A) Baki B) Lenkaran C) Sumqayit D)Ganja E) 50/50 komek"
// //   );
// //   if (answer === "A") {
// //     bonus += 500;
// //     alert(
// //       `Oyunumuz bitdi! Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil edir `
// //     );
// //   } else if (answer === "E" && help) {
// //     answer = prompt("Azerbaycanin Paytaxti haradir? A) Baki  D)Ganja ");
// //     if (answer === "A") {
// //       bonus += 500;
// //       help = false;
// //       next = confirm(
// //         `Tebrik edirik qazandiniz!Sizin udush mebleginiz ${bonus} manat teshkil, edir davam etmek ucun tesdiqle`
// //       );
// //     } else if (answer === "E" && !help) {
// //       alert("Siz artiq yardimdan istifade emisiz");
// //       questionAndCheckThree();
// //     } else {
// //       alert(`Oyun bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`);
// //     }
// //   } else {
// //     alert(
// //       `Oyunumuz bitdi! Meglub oldunuz! Sizin udush mebleginiz ${bonus} Azn`
// //     );
// //   }
// //   return true;
// // }

// questionAndCheckOne();

// if (next) {
//   questionAndCheckTwo();
// }
// if (next) {
//   questionAndCheckThree();
// }

// console.log("next - ", next);
// console.log("bonus - ", bonus);


/**
 * Parametr kimi ədədi qəbul edən və onu dördüncü dərəcə qüvvətə yülsəldərək konsolda göstərən fourth() funksiyasını yazın.
 */

// function fourth (num) {
//   console.log(num ** 4);
// }
// fourth(2)


