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

function sumOfrubl(rubl, dollar) {
    let dollarToRublConst = 75;

    console.log(rubl + dollar * dollarToRublConst);
}

sumOfrubl(1200,20);





