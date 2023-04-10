let balance = 2000;

function log(balance) {
  console.log(`Sizin balansiniz ${balance} teshkil edir`);
}

function withdraw(amount) {
    console.log(`siz balansdan ${amount} qeder pul cixarmaq isteyirsiz`)
    console.log(`*************************************`)
  if (balance < amount) {
      console.log("Balansinizda kifayet qeder mebleg yoxdur");
      
  } else {
    balance = balance - amount;
  }

    log(balance);
     console.log(`*************************************`);
}

withdraw(200);
withdraw(400);
withdraw(100);
withdraw(2000);

// let balance = 1200;

// function log() {
//     console.log("Balans deyishdi");
//     console.log(balance);
// }

// balance -= 200;
// log();

// balance -= 400;
// log();

// balance -= 20;
// log();
