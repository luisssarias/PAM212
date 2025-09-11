let passwordDB = "123456";
let input = "123456";

let result = input === passwordDB;

if (result === true) {
  console.log("Login correcto");
}

if (result === false) {
  console.log("Login incorrecto");
}

// Forma cortada

if (result) {
  console.log("Login correcto");
} else {
  console.log("Login incorrecto");
}

let typeCard = "debit";

switch (typeCard) {
  case "debit":
    case ("Tarjeta de débito"):
    console.log("Pago con tarjeta de débito");
    break;
  case "credit":
  case ("Tarjeta de crédito"):
    console.log("Pago con tarjeta de crédito");
    break;
}
