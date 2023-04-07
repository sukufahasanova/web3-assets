let num = +prompt("reqem daxil et");

num === 0
  ? console.log("sifir")
  : ("sifir ve birden boyuk");

// if (num === 0) {
//     console.log("sifir");
// } else {
//     console.log("0 dan boyuk");
// }

// if (num === 0) {
//   console.log("sıfır");
// } else if (num === 1) {
//   console.log("bir");
// } else if (num === 2) {
//   console.log("iki");
// } else {
//   console.log(" 3 e qeder reqem daxil et");
// }

// switch (num) {
//     case 0:
//         console.log("sifir");
//         break;
//     case 1:
//     console.log("bir");
//         break;
//     case 2:
//     console.log("iki");
//        break;
//     default: console.log('zehmet olmasa 3 kimi reqem daxil et');
        
// }

// let dummy = (num) => {
//     switch (num) {
//       case 0:
//         return console.log("sifir");
       
//       case 1:
//         return console.log("bir");
      
//       case 2:
//         return console.log("iki");
       
//       default:
//         return console.log("zehmet olmasa 3 kimi reqem daxil et");
//     }
// }

// dummy(num)

// //  Deyihseni gorunme sahesi

// let num = 29;

// if (num) {
//     var a = 4;

// }

// // console.log(num);
//     console.log(a);

//  istifadeci yash sohbeti

// let age = prompt("Zehmet olmasa yashini daxil et");
// if (age < 18) {
//   alert("Access denied");
// } else {
//   alert("Access granted");
// }

// let num = 10;

// if (num > 12) {
//   num = num + 5;
// }else if (num > 13) {
//   num = num + 10;
// } else {
//     console.log("Haleluyah")
// }

// console.log(num);
// 15

// let num = 5;

// if (num < 20) {
//   num++;
//   console.log(num);
// }

// let isAdmin = true;

// if (isAdmin) {
//     console.log("Sizin Adminlik rolunuz var. Kecid etmek olar")
// }

// let num = 20;
// let isPositive = num > 0;

// console.log(num < 80 && isPositive);
// // true, num 80-dən az və isPositive dəyişən dəyəri true bərabərdirsə.

// let num = 13;
// let word = "retro";
// // console.log(Boolean());

// console.log(num >= 14 && word);

// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın, hansıki əməliyyat nəticəsi value = 10 üçün true olacaq və
// value = 20 üçün false.

// let value = 10;

// console.log(value<20);
// console.log(value<=15);
// console.log(value!=20);
// console.log(value=="10");
// console.log(value===10);

// let value = 10;
// console.log(value > 0);
// console.log(value === 10);
// value = 20;
// console.log(value!==20)

// console.log(25 === "25");

// console.log(14 !== "14");

// console.log(0 === "");

// let a;

// // a = 4; // assignement;
// a = null; // assignement;

// console.log(a==0)

// console.log(a == 6); // false
// console.log(a == 4); // true

// İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName = prompt("Zehemt olmasa adinizi «İvanov Pyotr Sergeevich» formasinda daxil edin");

// let collection = fullName.split(' ');

// console.log(collection);

// Second way
// console.log(`${collection[0]} ${collection[1][0]}.${collection[2][0]}.`);

// let surNamePart = fullName.indexOf(' ');

// let lastIndexSpace = fullName.lastIndexOf(' ');

// let name = fullName.slice(surNamePart + 1, surNamePart + 2);

// let fName = fullName.slice(lastIndexSpace + 1, lastIndexSpace + 2);

// let surname = fullName.slice(0, surNamePart);

// console.log(`${surname} ${name}.${fName}.`);

// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin. Proqram istifadəçidən əmək haqqı məbləğin soruşur və 13% vergi istisna olmaqla məbləği konsola çıxarır.

//  emekhaqqi = proptan daxilet reqem
//  Number(emekhaqqi)
//  vergi= emekhaqqi*13/100
//  xalis = emekhaqqi - vergi
//  console logla xalis

// let number = prompt("«530.90» formatında qiymət daxil et");

// let partOne = number[0] + number[1] + number[2];

// let partTwo = number[4] + number[5]

// let result = partOne + " manat " +partTwo+ " qepik"
// let result = `${partOne} manat ${partTwo} qəpik`
// console.log(result);

// console.log(`${number[0] + number[1] + number[2]} manat ${
//   number[4] + number[5]
//     } qəpik`)

//   let partOne = number[0] + number[1] + number[2];

// let partTwo = number[4] + number[5]

// let result = `${partOne} manat ${partTwo} qəpik`

// let result = `${number[0] + number[1] + number[2]} manat ${
//   number[4] + number[5]
//     } qəpik`;
