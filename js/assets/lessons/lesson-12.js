/**
 * Massiv elementinin dəyərini dəyişin.
Üç addan ibarət massiv yaradın. Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin. Massivi konsola çıxarın.
 */

// const characters = ["name0", "namee", "name2"];

// characters[1] = "Classified";

// console.log(characters[1]);




// ********************************************************************
// ********************************************************************
// ********************************************************************

/**
 * "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün
 */

// let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Episode ${i + 4}: ${arr[i]}`);
// }


/**
 * 
 * İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.
 */
let a = prompt("Vergulle ayrilan 5 eded daxil et").split(",");
while (a.length !== 5) {
  a = prompt("Vergulle ayrilan 5 eded daxil et").split(",");
}

let min = +a[0];

for (let i = 1; i < a.length; i++) {
  if (+a[i] < min) {
    min = +a[i];
  }
}

console.log(min);