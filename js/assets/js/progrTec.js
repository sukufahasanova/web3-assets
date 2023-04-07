













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