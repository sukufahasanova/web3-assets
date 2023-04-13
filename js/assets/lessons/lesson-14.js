/**
 * 
 * Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın, hansıki proqramlaşma şöbəsinin işçilərini, və s. texniki işçiləri özündə saxlayacaq, yəni department özəlliyinin dəyəri «development» olan işçiləri.
 * 
 * 
 */

// let employees = [
//   ["Jaylee Macy", "marketing"],
//   ["John Smith", "management"],
//   ["Blossom Hartley", "design"],
//   ["Austin Carpenter", "marketing"],
//   ["Joan Knowles", "development"],
//   ["Sally Nunez", "management"],
//   ["Laurel Ward", "development"],
//   ["Lark Simon", "marketing"],
//   ["Jane Stone", "management"],
//   ["Courtney Olson", "development"],
// ];

// let developers = [];

// for (let employee of employees) {
//   if (employee[1] === "development") developers.push(employee);
// }

// console.log(developers);

/**
 * 
 * 
İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.


Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.

İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.


İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.


Sintaktik səhvlərin varlığını və proqramın düzgünlüyünü yoxlayın.

Eyni zamanda istifadəçi «Ləğv et» düyməsini klikləyərsə, proqram fəaliyyətini dayandırır.

 */

// let queue = [];
// // let command;
// while (true) {
//   let command = prompt(
//     "Adiniz daxil edin: \n = isaresi daxil olarsa proqram dayanir novbe massivini ekrana cixarir/// \n boshluq olarsa proqram novbeden birincini silir ve proqram dayanir"
//   );
//   if (command === null) {
//     break;
//   } else if (command === "=") {
//     console.log(queue);
//     break;
//   } else if (command === "" || command === " ") {
//     console.log(queue.shift());
//     break;
//   } else {
//     queue.push(command);
//   }
// }

// console.log(queue);


/**
 * 
 * tam ededler sirasinin artan sirada duzen funksiya yazin
 */

let arrNum = [1, 4, 67, 43, 78, 9, 7, 2, 78, -3, 0, -11];

function mySort(massive) {
    return massive.sort((a, b) => a - b);

}

console.log(mySort(arrNum));