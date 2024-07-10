console.log("lesson 2");

// operators

// string
// + concatenation

let doctorName = "Ivan";
let doctorSurname = "Ivanov";
let doctorLastName = "Ivanovich";

let doctorFullname = doctorSurname + " " + doctorName + " " + doctorLastName;

console.log("Doctor:", doctorFullname);

// number
// + - * / % **
console.log("100 % 5 =", 100 % 5); // 5
console.log("245 / 0 =", 245 / 0); // Infinity
console.log("5OO =", Number("5OO")); // NaN - Not a number
console.log("500 =", Number("500")); // 500

// boolean

// === == !== != > < >= <=

let sugarLevel = 11.5;
let isDiabet = sugarLevel > 15;

let policeId = 156145;
let isPolicePatient = policeId !== null;

let patientTemp = 40.6;
let isDied = patientTemp < 34;

let operationPrice = 15_000;
let patientOperationPrice = operationPrice;

policeId = prompt("Enter your police");

if (policeId !== null) {
  patientOperationPrice = 7_000;
}

console.log("Your price is", patientOperationPrice);

if (patientTemp > 38) {
  console.warn("High temp!!!");
  document.write("<div class=warn>High temp!!!</div>");
} else if (patientTemp < 30) {
  console.error("Patient died...");
  document.write("<div class=error>Patient died!!!</div>");
}

let gemoglobin = prompt("Gemoglobin");
let gemoglobinDescription;

if (gemoglobin < 90) {
  gemoglobinDescription = "Понижен";
} else if (gemoglobin > 200) {
  gemoglobinDescription = "Повышен";
} else {
  gemoglobinDescription = "В норме";
}

console.log("Gemoglobin status:", gemoglobinDescription);

// Falsy: false, 0, "", undefined, NaN, null

let doctorOfPatient = prompt("Enter your doctor");
let cabinet; //undefined

switch (doctorOfPatient) {
  case "Jdanov":
    cabinet = 5;
    break;
  case "Raimjanova":
  case "Samoilova":
    cabinet = 3;
    break;
  case "Umarov":
    cabinet = 1;
    break;
  default:
    cabinet = null;
}

if (cabinet) {
  console.log(doctorOfPatient + " accepts in #" + cabinet + " room");
} else {
  console.warn("we don't know who is:", doctorOfPatient);
}

let patientPulse = 80;
let patientStatus = patientPulse === 0 ? "Died" : "Alive";

let isDoctorAvailable = true;
let doctorStatus = isDoctorAvailable ? "На приеме" : "Не доступен"

if (patientPulse === 0) {
  patientStatus = "Died";
} else {
  patientStatus = "Alive";
}

// 1. string
// 2. number
// 3. boolean
// 4. object
// 5. undefined
// 6. null
